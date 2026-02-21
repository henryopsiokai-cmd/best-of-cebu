import json
import os
import sys

# Add python-libs to path
sys.path.append('/home/node/.openclaw/workspace/python-libs')

from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

def main():
    auth_path = '/home/node/.openclaw/workspace/local/share/opencode/antigravity_auth.json'
    if not os.path.exists(auth_path):
        print(f"Error: {auth_path} not found")
        return

    with open(auth_path, 'r') as f:
        creds_data = json.load(f)
    
    creds = Credentials.from_authorized_user_info(creds_data)
    service = build('gmail', 'v1', credentials=creds)

    query = 'from:cristejoycalosor13@gmail.com'
    results = service.users().messages().list(userId='me', q=query, maxResults=5).execute()
    messages = results.get('messages', [])

    if not messages:
        print("No messages found from Christe Joy.")
        return

    for msg in messages:
        m = service.users().messages().get(userId='me', id=msg['id']).execute()
        
        # Get Headers
        headers = m.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers if h['name'].lower() == 'subject'), '(No Subject)')
        date = next((h['value'] for h in headers if h['name'].lower() == 'date'), '(No Date)')
        
        # Get Snippet
        snippet = m.get('snippet', '')
        
        print(f"--- Message ID: {msg['id']} ---")
        print(f"Date: {date}")
        print(f"Subject: {subject}")
        print(f"Snippet: {snippet}")
        
        # For full body if needed
        # parts = m.get('payload', {}).get('parts', [])
        # ... (simplifying for snippet first)

if __name__ == '__main__':
    main()
