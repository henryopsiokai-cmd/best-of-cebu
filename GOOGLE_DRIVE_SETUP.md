# Google Drive Setup Instructions

## Credentials Location
Service account JSON: `/home/node/.openclaw/workspace/google-drive-service-account.json`

## Installation Required
Google libraries need to be installed for full Drive API access.

## Manual Setup Steps

1. **Install dependencies** (requires host access):
```bash
# If pip is available:
pip install google-auth google-auth-oauthlib google-auth-httplib2 google-api-python-client

# Or using package manager:
sudo apt-get install python3-google-auth python3-google-api-python-client
```

2. **Quick test script to verify access:**
```python
from google.oauth2.service_account import Credentials
from googleapiclient.discovery import build
import json

# Load service account
with open('/home/node/.openclaw/workspace/google-drive-service-account.json', 'r') as f:
    creds_data = json.load(f)

# Create credentials
creds = Credentials.from_service_account_info(
    creds_data,
    scopes=['https://www.googleapis.com/auth/drive']
)

# Build Drive service
service = build('drive', 'v3', credentials=creds)

# Test - list first 10 files
results = service.files().list(pageSize=10, fields="nextPageToken, files(id, name)").execute()
items = results.get('files', [])

print('Found these files:')
for item in items:
    print(f'  {item["name"]} ({item["id"]})')
```

## Service Account Info
- **Email:** henry-ops-drive-access@openclaw-henry-487513.iam.gserviceaccount.com
- **Permissions:** Likely restricted to specific Drive folders
- **Project:** openclaw-henry-487513

## What you can access with this:
- 📁 Files and folders shared with this service account
- 📊 Google Sheets, Docs that have shared access
- 📝 Read/write based on service account permissions
- 🔗 Specific folders where the service account has 'Editor' role

## Next Steps
1. Once libraries are installed, I can access any Drive files
2. I can read/write Google Sheets
3. I can manage folder contents
4. I can create new files/folders

Let me know:
1. **What specific Drive access do you want?** (read files, create docs, manage folders?)
2. **Which folder/files should I access?** 
3. **What permissions do you want to grant?**