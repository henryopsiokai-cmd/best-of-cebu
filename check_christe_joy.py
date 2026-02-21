
import os
import sys
import json
import base64
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build
from google.auth.transport.requests import Request

def get_gmail_service():
    auth_path = '/home/node/.openclaw/workspace/local/share/opencode/antigravity_auth.json'
    oauth_config_path = '/home/node/.openclaw/workspace/local/share/opencode/oauth_config.json'
    
    with open(auth_path, 'r') as f:
        auth_data = json.load(f)
    
    with open(oauth_config_path, 'r') as f:
        config_data = json.load(f)
    
    creds = Credentials(
        auth_data['access_token'],
        refresh_token=auth_data['refresh_token'],
        token_uri="https://oauth2.googleapis.com/token",
        client_id=config_data['installed']['client_id'],
        client_secret=config_data['installed']['client_secret']
    )
    
    if creds.expired:
        creds.refresh(Request())
        # Update the token
        auth_data['access_token'] = creds.token
        with open(auth_path, 'w') as f:
            json.dump(auth_data, f)

    return build('gmail', 'v1', credentials=creds)

def check_emails():
    service = get_gmail_service()
    # Search for emails from Christe Joy
    query = 'from:cristejoycalosor13@gmail.com'
    results = service.users().messages().list(userId='me', q=query).execute()
    messages = results.get('messages', [])
    
    if not messages:
        print("HEARTBEAT_OK")
        return

    # Check the latest message
    msg_id = messages[0]['id']
    message = service.users().messages().get(userId='me', id=msg_id).execute()
    
    # Simple summary of the latest email
    snippet = message.get('snippet', '')
    payload = message.get('payload', {})
    headers = payload.get('headers', [])
    subject = next((h['value'] for h in headers if h['name'] == 'Subject'), 'No Subject')
    date = next((h['value'] for h in headers if h['name'] == 'Date'), 'Unknown Date')
    
    print(f"New email from Christe Joy:")
    print(f"Date: {date}")
    print(f"Subject: {subject}")
    print(f"Snippet: {snippet}")
    
    # Check for links/media
    body = ""
    if 'parts' in payload:
        for part in payload['parts']:
            if part['mimeType'] == 'text/plain':
                body = base64.urlsafe_b64decode(part['body']['data']).decode('utf-8')
                break
    else:
        body = base64.urlsafe_b64decode(payload['body']['data']).decode('utf-8')
    
    print(f"\nFull Body Snippet:\n{body[:500]}...")

if __name__ == "__main__":
    try:
        check_emails()
    except Exception as e:
        print(f"Error: {e}")
