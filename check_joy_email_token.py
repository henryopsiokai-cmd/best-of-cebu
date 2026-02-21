import json
import os
import sys
import requests

def main():
    auth_path = '/home/node/.openclaw/workspace/local/share/opencode/antigravity_auth.json'
    if not os.path.exists(auth_path):
        print(f"Error: {auth_path} not found")
        return

    with open(auth_path, 'r') as f:
        auth_data = json.load(f)
    
    access_token = auth_data.get('access_token')
    if not access_token:
        print("Error: No access_token in auth data")
        return

    # Gmail API list messages
    url = 'https://gmail.googleapis.com/gmail/v1/users/me/messages'
    params = {
        'q': 'from:cristejoycalosor13@gmail.com',
        'maxResults': 3
    }
    headers = {
        'Authorization': f'Bearer {access_token}'
    }

    response = requests.get(url, params=params, headers=headers)
    if response.status_code != 200:
        print(f"Error listing messages: {response.status_code} {response.text}")
        return
    
    messages = response.json().get('messages', [])
    if not messages:
        print("No messages found from Christe Joy.")
        return

    for msg in messages:
        msg_id = msg['id']
        msg_url = f'https://gmail.googleapis.com/gmail/v1/users/me/messages/{msg_id}'
        msg_res = requests.get(msg_url, headers=headers)
        if msg_res.status_code != 200:
            print(f"Error getting message {msg_id}: {msg_res.status_code}")
            continue
        
        m_data = msg_res.json()
        headers_list = m_data.get('payload', {}).get('headers', [])
        subject = next((h['value'] for h in headers_list if h['name'].lower() == 'subject'), '(No Subject)')
        date = next((h['value'] for h in headers_list if h['name'].lower() == 'date'), '(No Date)')
        snippet = m_data.get('snippet', '')
        
        print(f"--- Message ID: {msg_id} ---")
        print(f"Date: {date}")
        print(f"Subject: {subject}")
        print(f"Snippet: {snippet}")

if __name__ == '__main__':
    main()
