import os
import sys
import base64
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build

SCOPES = ['https://www.googleapis.com/auth/gmail.readonly']

def main():
    creds = None
    # Token file usually stored in a hidden dir or specific path
    token_path = '/home/node/.openclaw/config/gmail_token.json'
    if os.path.exists(token_path):
        creds = Credentials.from_authorized_user_file(token_path, SCOPES)
    
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            print("ERROR: No valid credentials found.")
            sys.exit(1)

    service = build('gmail', 'v1', credentials=creds)
    
    # Search query
    query = 'from:cristejoycalosor13@gmail.com'
    results = service.users().messages().list(userId='me', q=query, maxResults=5).execute()
    messages = results.get('messages', [])

    if not messages:
        print("NO_NEW_EMAILS")
        return

    for msg in messages:
        m = service.users().messages().get(userId='me', id=msg['id']).execute()
        print(f"ID: {m['id']}")
        print(f"Date: {m['internalDate']}")
        print(f"Snippet: {m['snippet']}")
        print("-" * 20)

if __name__ == '__main__':
    main()
