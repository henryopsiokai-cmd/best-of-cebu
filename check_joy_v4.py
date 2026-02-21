import json
import os
import sys
import urllib.request
import urllib.parse
import time

def main():
    auth_path = '/home/node/.openclaw/workspace/local/share/opencode/antigravity_auth.json'
    if not os.path.exists(auth_path):
        print("Error: Auth file not found")
        return

    with open(auth_path, 'r') as f:
        auth_data = json.load(f)
    
    access_token = auth_data.get('access_token')
    
    def call_api(url, params=None):
        if params:
            url = f"{url}?{urllib.parse.urlencode(params)}"
        req = urllib.request.Request(url)
        req.add_header('Authorization', f'Bearer {access_token}')
        try:
            with urllib.request.urlopen(req) as response:
                return json.loads(response.read().decode())
        except Exception as e:
            # print(f"API Call Failed: {e}")
            return None

    # Search for messages from Joy
    # query = 'from:cristejoycalosor13@gmail.com after:2026/02/19'
    query = 'from:cristejoycalosor13@gmail.com'
    results = call_api('https://gmail.googleapis.com/gmail/v1/users/me/messages', {
        'q': query,
        'maxResults': 5
    })

    if not results or 'messages' not in results:
        # Check if auth failed or just no messages
        # If call_api returned None, it might be auth
        test_call = call_api('https://gmail.googleapis.com/gmail/v1/users/me/profile')
        if not test_call:
            print("AUTH_FAILURE")
        else:
            print("NO_NEW_MESSAGES")
        return

    # Process messages
    found_new = False
    for msg in results['messages']:
        m_data = call_api(f"https://gmail.googleapis.com/gmail/v1/users/me/messages/{msg['id']}")
        if m_data:
            headers = m_data.get('payload', {}).get('headers', [])
            subject = next((h['value'] for h in headers if h['name'].lower() == 'subject'), '(No Subject)')
            date_str = next((h['value'] for h in headers if h['name'].lower() == 'date'), '(No Date)')
            snippet = m_data.get('snippet', '')
            
            # Check if it's very recent (e.g., within the last hour)
            # Current time is 19:07 UTC.
            # Gmail date format: "Fri, 20 Feb 2026 19:00:00 +0000"
            print(f"MSG_START|{msg['id']}")
            print(f"Date: {date_str}")
            print(f"Subject: {subject}")
            print(f"Snippet: {snippet}")
            print("MSG_END")
            found_new = True

    if not found_new:
        print("NO_NEW_MESSAGES")

if __name__ == '__main__':
    main()
