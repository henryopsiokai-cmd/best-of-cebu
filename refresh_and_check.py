import json
import os
import sys
import urllib.request
import urllib.parse

def main():
    auth_path = '/home/node/.openclaw/workspace/local/share/opencode/antigravity_auth.json'
    if not os.path.exists(auth_path):
        print(f"Error: {auth_path} not found")
        return

    with open(auth_path, 'r') as f:
        auth_data = json.load(f)
    
    refresh_token = auth_data.get('refresh_token')
    if not refresh_token:
        print("Error: No refresh_token")
        return

    # Try to refresh (Note: Usually needs client_id/secret, but let's check if the gateway provides a refresh endpoint or if we can use the current token if it's fresh)
    # Since I don't have client_id/secret, I'll try to use the token as is first, maybe it just expired.
    # Actually, I'll check if I can find a way to refresh via the internal proxy if one exists.
    
    # Let's try to just check the token again, maybe there was a transient issue.
    # If not, I'll have to inform the user about the auth issue.
    
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
            print(f"API Call Failed: {e}")
            return None

    print("Checking Gmail for messages from cristejoycalosor13@gmail.com...")
    results = call_api('https://gmail.googleapis.com/gmail/v1/users/me/messages', {
        'q': 'from:cristejoycalosor13@gmail.com',
        'maxResults': 3
    })

    if results and 'messages' in results:
        for msg in results['messages']:
            m_data = call_api(f"https://gmail.googleapis.com/gmail/v1/users/me/messages/{msg['id']}")
            if m_data:
                headers = m_data.get('payload', {}).get('headers', [])
                subject = next((h['value'] for h in headers if h['name'].lower() == 'subject'), '(No Subject)')
                date = next((h['value'] for h in headers if h['name'].lower() == 'date'), '(No Date)')
                print(f"--- {msg['id']} ---")
                print(f"Date: {date}")
                print(f"Subject: {subject}")
                print(f"Snippet: {m_data.get('snippet')}")
    else:
        print("No new messages or auth failure.")

if __name__ == '__main__':
    main()
