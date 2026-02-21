from google.oauth2 import service_account
from googleapiclient.discovery import build
import os

# Service Account for DRIVE access as mentioned by Brian
# Note: This is separate from the Gmail App Password for henry.ops.iokai@gmail.com
CREDENTIALS_FILE = 'google-drive-service-account.json'
SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly']

def list_files():
    try:
        if not os.path.exists(CREDENTIALS_FILE):
            print(f"Error: {CREDENTIALS_FILE} not found.")
            return

        creds = service_account.Credentials.from_service_account_file(
            CREDENTIALS_FILE, scopes=SCOPES)
        service = build('drive', 'v3', credentials=creds)

        print("Checking Drive access (Metadata)...")
        results = service.files().list(
            pageSize=10, fields="nextPageToken, files(id, name)").execute()
        items = results.get('files', [])

        if not items:
            print('No files found.')
        else:
            print('Files found in Service Account scope:')
            for item in items:
                print(f"{item['name']} ({item['id']})")
                
    except Exception as e:
        print(f"Drive Error: {e}")

if __name__ == '__main__':
    list_files()
