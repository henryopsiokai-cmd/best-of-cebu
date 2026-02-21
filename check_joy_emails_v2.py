import os
import sys

# Add workspace python-libs to path
sys.path.append("/home/node/.openclaw/workspace/python-libs")

import google.auth.transport.requests
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build
import json
import time

def check_gmail():
    creds_path = "/home/node/.openclaw/workspace/local/share/opencode/antigravity_auth.json"
    with open(creds_path, 'r') as f:
        creds_data = json.load(f)
    
    # We will try to use the current token directly first.
    # If it fails, we know we can't refresh without client_id/secret.
    creds = Credentials(
        token=creds_data['access_token']
    )

    try:
        service = build('gmail', 'v1', credentials=creds)
        
        # Search for emails from Christe Joy (cristejoycalosor13@gmail.com)
        # Note: We are checking 'me' which is henry.openclaw@gmail.com (as seen in the auth file)
        query = 'from:cristejoycalosor13@gmail.com'
        results = service.users().messages().list(userId='me', q=query, maxResults=5).execute()
        messages = results.get('messages', [])

        if not messages:
            print("NO_MESSAGES")
            return

        latest_emails = []
        for msg in messages:
            m = service.users().messages().get(userId='me', id=msg['id']).execute()
            
            payload = m.get('payload', {})
            headers = payload.get('headers', [])
            subject = next((h['value'] for h in headers if h['name'].lower() == 'subject'), 'No Subject')
            date = next((h['value'] for h in headers if h['name'].lower() == 'date'), 'No Date')
            
            # Extract body
            body = ""
            if 'parts' in payload:
                for part in payload['parts']:
                    if part['mimeType'] == 'text/plain':
                        import base64
                        data = part['body'].get('data')
                        if data:
                            body = base64.urlsafe_b64decode(data).decode('utf-8')
                    elif part['mimeType'] == 'multipart/alternative':
                        for subpart in part['parts']:
                            if subpart['mimeType'] == 'text/plain':
                                import base64
                                data = subpart['body'].get('data')
                                if data:
                                    body = base64.urlsafe_b64decode(data).decode('utf-8')

            latest_emails.append({
                'id': msg['id'],
                'subject': subject,
                'date': date,
                'snippet': m.get('snippet'),
                'body': body
            })
        
        print(json.dumps(latest_emails, indent=2))

    except Exception as e:
        print(f"ERROR: {str(e)}")

if __name__ == "__main__":
    check_gmail()
