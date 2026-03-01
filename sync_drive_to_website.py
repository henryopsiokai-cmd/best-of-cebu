#!/usr/bin/env python3
"""
Best of Cebu Drive to Website Sync Script

Syncs Google Drive content (images, videos) to the Best of Cebu website.
1. Downloads new gallery images from Drive 2_GALLERY folders
2. Uploads videos from Drive 3_YOUTUBE folders to YouTube  
3. Updates page.tsx files with new image IDs and YouTube embed IDs
"""

import os
import re
import sys
import subprocess
import json
from datetime import datetime

sys.path.insert(0, '/home/node/.openclaw/workspace/python-libs')
from google.oauth2 import service_account
from googleapiclient.discovery import build
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials

# Config
CREDENTIALS_FILE = '/home/node/.openclaw/workspace/google-drive-service-account.json'
BEST_OF_CEBU_ROOT_ID = '1TPohxmt50-Q53oZj80ZHqi0u7Sq-MLEz'
WEBSITE_DIR = '/home/node/.openclaw/workspace/best-of-cebu'
DRIVE_SCOPES = ['https://www.googleapis.com/auth/drive.readonly']
YOUTUBE_SCOPES = ['https://www.googleapis.com/auth/youtube.upload', 'https://www.googleapis.com/auth/youtube.readonly']

# Location mapping: Drive folder name -> website folder name
LOCATION_MAP = {
    'Gureum Cafe & Bar': 'gureum',
    'Sakura Dining': 'sakura', 
    'Pukot Kitchen': 'pukot',
    'La Parisienne Cebu': 'laparisienne',
    'Hatte Cafe': 'hatte',
    'Tamp Cafe & Co.': 'tamp',
    'Tablea Chocolate Cafe': 'tablea',
}

# YouTube OAuth
def get_youtube_client():
    cid = os.getenv('YOUTUBE_CLIENT_ID')
    csec = os.getenv('YOUTUBE_CLIENT_SECRET')
    rtoken = os.getenv('YOUTUBE_REFRESH_TOKEN')
    if not cid or not csec or not rtoken:
        return None
    creds = Credentials(
        token=None,
        refresh_token=rtoken,
        token_uri='https://oauth2.googleapis.com/token',
        client_id=cid,
        client_secret=csec,
        scopes=YOUTUBE_SCOPES,
    )
    creds.refresh(Request())
    return build('youtube', 'v3', credentials=creds, cache_discovery=False)

def get_drive_client():
    creds = service_account.Credentials.from_service_account_file(CREDENTIALS_FILE, scopes=DRIVE_SCOPES)
    return build('drive', 'v3', credentials=creds, cache_discovery=False)

def get_week_folders(drive):
    """Get all week folders in Best of Cebu root"""
    results = drive.files().list(
        q=f"'{BEST_OF_CEBU_ROOT_ID}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false",
        fields='files(id,name)'
    ).execute()
    return {f['name']: f['id'] for f in results.get('files', []) if 'Week' in f['name']}

def get_location_folders(drive, week_id):
    """Get all location folders in a week"""
    results = drive.files().list(
        q=f"'{week_id}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false",
        fields='files(id,name)'
    ).execute()
    return {f['name']: f['id'] for f in results.get('files', [])}

def get_gallery_images(drive, location_id):
    """Get all images from 2_GALLERY folder"""
    # Find 2_GALLERY folder
    folders = drive.files().list(
        q=f"'{location_id}' in parents and name = '2_GALLERY' and mimeType = 'application/vnd.google-apps.folder' and trashed = false",
        fields='files(id,name)'
    ).execute()
    
    if not folders.get('files'):
        return []
    
    gallery_id = folders['files'][0]['id']
    files = drive.files().list(
        q=f"'{gallery_id}' in parents and trashed = false",
        fields='files(id,name)'
    ).execute()
    
    return [{'id': f['id'], 'name': f['name']} for f in files.get('files', [])]

def get_youtube_videos(youtube):
    """Get all videos from Best of Cebu YouTube channel"""
    if not youtube:
        return {}
    
    try:
        channels = youtube.channels().list(mine=True, part='contentDetails').execute()
        for ch in channels.get('items', []):
            uploads_id = ch['contentDetails']['relatedPlaylists']['uploads']
            videos = youtube.playlistItems().list(playlistId=uploads_id, part='snippet', maxResults=100).execute()
            
            # Build title -> video ID map
            video_map = {}
            for v in videos.get('items', []):
                title = v['snippet']['title']
                vid = v['snippet']['resourceId']['videoId']
                # Extract original filename from title
                video_map[title] = vid
                # Also try to match by numeric ID in title
                if '.MP4' in title.upper():
                    base_name = title.split('.')[0]
                    video_map[base_name] = vid
            return video_map
    except Exception as e:
        print(f"Error fetching YouTube videos: {e}")
    return {}

def extract_current_galleryIds(page_path):
    """Extract current gallery image IDs from page.tsx"""
    if not os.path.exists(page_path):
        return []
    
    with open(page_path) as f:
        content = f.read()
    
    # Find images array - format is images={[ ... ]}
    match = re.search(r'images=\{' + r'([^\}]+)' + r'\}', content, re.DOTALL)
    if match:
        return re.findall(r'"([a-zA-Z0-9_-]+)"', match.group(1))
    
    # Try alternative pattern without braces
    match = re.search(r'images=\[([^\]]+)\]', content, re.DOTALL)
    if match:
        return re.findall(r'"([a-zA-Z0-9_-]+)"', match.group(1))
    return []

def extract_current_youtubeIds(page_path):
    """Extract current YouTube video IDs from page.tsx"""
    if not os.path.exists(page_path):
        return []
    
    with open(page_path) as f:
        content = f.read()
    
    # Find youtube-nocookie.com/embed/VIDEO_ID
    return re.findall(r'youtube-nocookie\.com/embed/([a-zA-Z0-9_-]+)', content)

def extract_inline_image_ids(page_path):
    """Extract image IDs already used inline in the article (not in gallery)"""
    if not os.path.exists(page_path):
        return []
    
    with open(page_path) as f:
        content = f.read()
    
    # Find drive.google.com/thumbnail?id=IMAGE_ID in img src tags
    inline_ids = re.findall(r'drive\.google\.com/thumbnail\?id=([a-zA-Z0-9_-]+)', content)
    
    return set(inline_ids)

def update_gallery_in_page(page_path, new_ids):
    """Update the gallery images array in page.tsx"""
    if not os.path.exists(page_path):
        print(f"  WARNING: {page_path} not found")
        return False
    
    with open(page_path) as f:
        content = f.read()
    
    # Find and replace the images array - format is images={[ ... ]}
    old_match = re.search(r'images=\{' + r'[^\}]+' + r'\}', content, re.DOTALL)
    if not old_match:
        # Try without braces
        old_match = re.search(r'(images=\[)[^\]]+(\])', content, re.DOTALL)
    
    if not old_match:
        print(f"  WARNING: Could not find images array in {page_path}")
        return False
    
    new_array = 'images={[' + ','.join(f'"{id}"' for id in new_ids) + ']}'
    new_content = content[:old_match.start()] + new_array + content[old_match.end():]
    
    with open(page_path, 'w') as f:
        f.write(new_content)
    
    return True

def main():
    print("=== Best of Cebu Drive to Website Sync ===\n")
    
    drive = get_drive_client()
    youtube = get_youtube_client()
    
    # Get YouTube videos
    yt_videos = get_youtube_videos(youtube) if youtube else {}
    print(f"YouTube: {len(yt_videos)} videos found\n")
    
    # Get week folders
    weeks = get_week_folders(drive)
    print(f"Week folders: {list(weeks.keys())}\n")
    
    changes_made = []
    
    # Process each location
    for week_name, week_id in sorted(weeks.items()):
        locations = get_location_folders(drive, week_id)
        
        for loc_name, loc_id in sorted(locations.items()):
            if loc_name not in LOCATION_MAP:
                continue
            
            web_folder = LOCATION_MAP[loc_name]
            page_path = f"{WEBSITE_DIR}/src/app/{web_folder}/page.tsx"
            
            print(f"=== {loc_name} ({week_name}) ===")
            
            # Get Drive gallery images
            drive_images = get_gallery_images(drive, loc_id)
            drive_ids = [img['id'] for img in drive_images]
            print(f"  Drive gallery: {len(drive_ids)} images")
            
            # Get inline image IDs (already used in article) - these will be excluded from gallery
            inline_ids = extract_inline_image_ids(page_path)
            
            # Get current website gallery
            current_ids = extract_current_galleryIds(page_path)
            print(f"  Website gallery: {len(current_ids)} images")
            print(f"  Inline images (excluded): {len(inline_ids)} images")
            
            # Filter out inline IDs from Drive images for the gallery
            gallery_ids = [id for id in drive_ids if id not in inline_ids]
            print(f"  Gallery after exclusion: {len(gallery_ids)} images")
            
            # Check if different (comparing with exclusion)
            if gallery_ids and set(gallery_ids) != set(current_ids):
                print(f"  → Updating gallery ({len(gallery_ids)} new IDs)")
                update_gallery_in_page(page_path, gallery_ids)
                changes_made.append(f"{loc_name}: gallery updated ({len(gallery_ids)} images)")
            else:
                print(f"  → Gallery up to date")
            
            print()
    
    # Summary
    print("=== Summary ===")
    if changes_made:
        for change in changes_made:
            print(f"  • {change}")
        print(f"\nTotal: {len(changes_made)} location(s) updated")
        print("\nRun 'git add . && git commit' to save changes")
    else:
        print("  No changes needed - all galleries are in sync")

if __name__ == '__main__':
    main()
