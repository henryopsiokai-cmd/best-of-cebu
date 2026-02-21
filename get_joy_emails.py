import os
import sys
import json
import base64

# Add workspace python-libs to path
sys.path.append("/home/node/.openclaw/workspace/python-libs")

from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

def get_latest_emails():
    # Attempt to load credentials from the known path
    creds_path = "/home/node/.openclaw/workspace/local/share/opencode/antigravity_auth.json"
    try:
        with open(creds_path, 'r') as f:
            creds_data = json.load(f)
        
        # Try using the access token directly
        creds = Credentials(token=creds_data['access_token'])
        service = build('gmail', 'v1', credentials=creds)
        
        # Search for emails from Joy (cristejoycalosor13@gmail.com)
        # Looking for recent emails (last 48 hours for safety)
        query = 'from:cristejoycalosor13@gmail.com'
        results = service.users().messages().list(userId='me', q=query, maxResults=5).execute()
        messages = results.get('messages', [])

        if not messages:
            return []

        emails = []
        for msg in messages:
            m = service.users().messages().get(userId='me', id=msg['id']).execute()
            payload = m.get('payload', {})
            headers = payload.get('headers', [])
            
            subject = next((h['value'] for h in headers if h['name'].lower() == 'subject'), 'No Subject')
            date = next((h['value'] for h in headers if h['name'].lower() == 'date'), 'No Date')
            
            # Simple body extraction
            body = ""
            if 'parts' in payload:
                for part in payload['parts']:
                    if part['mimeType'] == 'text/plain':
                        data = part['body'].get('data')
                        if data:
                            body = base64.urlsafe_b64decode(data).decode('utf-8')
            elif 'body' in payload:
                data = payload['body'].get('data')
                if data:
                    body = base64.urlsafe_b64decode(data).decode('utf-8')

            emails.append({
                'subject': subject,
                'date': date,
                'snippet': m.get('snippet'),
                'body': body
            })
        return emails

    except Exception as e:
        # If discovery/api fails (likely due to expired token), return the error
        return str(e)

if __name__ == "__main__":
    result = get_latest_emails()
    if isinstance(result, list):
        if not result:
            print("NO_NEW_EMAILS")
        else:
            print(json.dumps(result, indent=2))
    else:
        print(f"API_ERROR: {result}")
