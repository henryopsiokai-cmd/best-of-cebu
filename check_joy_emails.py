import os
import json
import requests

# Load token from the shared auth file
auth_path = "/home/node/.openclaw/workspace/local/share/opencode/antigravity_auth.json"
with open(auth_path, 'r') as f:
    auth_data = json.load(f)

def get_messages(access_token):
    url = "https://gmail.googleapis.com/gmail/v1/users/me/messages"
    params = {
        'q': 'from:cristejoycalosor13@gmail.com',
        'maxResults': 5
    }
    headers = {
        'Authorization': f'Bearer {access_token}'
    }
    response = requests.get(url, headers=headers, params=params)
    if response.status_code == 200:
        return response.json().get('messages', [])
    else:
        print(f"Error fetching messages: {response.status_code} {response.text}")
        return []

def get_message_details(access_token, msg_id):
    url = f"https://gmail.googleapis.com/gmail/v1/users/me/messages/{msg_id}"
    headers = {
        'Authorization': f'Bearer {access_token}'
    }
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        return None

access_token = auth_data['access_token']
messages = get_messages(access_token)

if not messages:
    print("NO_NEW_EMAILS")
else:
    for msg in messages:
        m = get_message_details(access_token, msg['id'])
        if m:
            print(f"ID: {m['id']}")
            print(f"Snippet: {m['snippet']}")
