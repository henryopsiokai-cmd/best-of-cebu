import os
import json
import base64
import sys

# Add python-libs to sys.path
sys.path.append('/home/node/.openclaw/workspace/python-libs')

from google.oauth2.credentials import Credentials
from google_auth_httplib2 import AuthorizedHttp
from googleapiclient.discovery import build

def get_gmail_service():
    auth_file = '/home/node/.openclaw/workspace/local/share/opencode/antigravity_auth.json'
    if not os.path.exists(auth_file):
        print(f"Auth file not found: {auth_file}")
        return None
    
    with open(auth_file, 'r') as f:
        creds_data = json.load(f)
    
    # Add dummy client_id/secret to satisfy the library for a local-only token
    if 'client_id' not in creds_data:
        creds_data['client_id'] = 'dummy'
    if 'client_secret' not in creds_data:
        creds_data['client_secret'] = 'dummy'

    creds = Credentials.from_authorized_user_info(creds_data)
    return build('gmail', 'v1', credentials=creds)

def check_emails():
    service = get_gmail_service()
    if not service:
        return
    
    sender = "cristejoycalosor13@gmail.com"
    query = f"from:{sender}"
    
    try:
        results = service.users().messages().list(userId='me', q=query, maxResults=5).execute()
        messages = results.get('messages', [])
        
        if not messages:
            # Check for a different spelling or general inbox to be safe
            results = service.users().messages().list(userId='me', q="criste joy", maxResults=5).execute()
            messages = results.get('messages', [])
            
        if not messages:
            print("HEARTBEAT_OK")
            return

        print(f"Found {len(messages)} messages related to Joy.\n")
        
        for msg in messages:
            msg_id = msg['id']
            message = service.users().messages().get(userId='me', id=msg_id, format='full').execute()
            
            payload = message.get('payload', {})
            headers = payload.get('headers', [])
            subject = next((h['value'] for h in headers if h['name'].lower() == 'subject'), 'No Subject')
            date = next((h['value'] for h in headers if h['name'].lower() == 'date'), 'No Date')
            
            print(f"--- Message ID: {msg_id} ---")
            print(f"Date: {date}")
            print(f"Subject: {subject}")
            
            # Extract body
            body = ""
            if 'parts' in payload:
                for part in payload['parts']:
                    if part['mimeType'] == 'text/plain':
                        data = part['body'].get('data')
                        if data:
                            body = base64.urlsafe_b64decode(data).decode('utf-8')
                            break
            else:
                data = payload.get('body', {}).get('data')
                if data:
                    body = base64.urlsafe_b64decode(data).decode('utf-8')
            
            print(f"Body snippet: {body[:500]}...")
            print("\n")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    check_emails()
