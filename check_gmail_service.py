import os
from google.oauth2 import service_account
from googleapiclient.discovery import build

SCOPES = ['https://www.googleapis.com/auth/gmail.readonly']
SERVICE_ACCOUNT_FILE = 'google-drive-service-account.json'
# We are assuming Brian is using this specific account that we correspond with
DELEGATED_USER = 'henry.ops.iokai@gmail.com'

def list_inbox():
    try:
        creds = service_account.Credentials.from_service_account_file(
            SERVICE_ACCOUNT_FILE, scopes=SCOPES)
        
        # Service accounts usually need domain-wide delegation to read an inbox
        # as a specific user. Let's try it.
        delegated_creds = creds.with_subject(DELEGATED_USER)
        
        service = build('gmail', 'v1', credentials=delegated_creds)
        
        results = service.users().messages().list(userId='me', labelIds=['INBOX'], q='is:unread', maxResults=5).execute()
        messages = results.get('messages', [])
        
        if not messages:
            print("No new unread emails.")
        else:
            print(f"Total unread: {len(messages)}")
            for msg in messages:
                txt = service.users().messages().get(userId='me', id=msg['id']).execute()
                payload = txt.get('payload')
                headers = payload.get('headers')
                
                subject = ""
                sender = ""
                for d in headers:
                    if d.get('name') == 'Subject':
                        subject = d.get('value')
                    if d.get('name') == 'From':
                        sender = d.get('value')
                
                print(f"From: {sender}\nSubject: {subject}\n---")
                
    except Exception as e:
        print(f"Error accessing Gmail: {e}")

if __name__ == '__main__':
    list_inbox()
