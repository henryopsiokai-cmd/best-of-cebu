import os
import json
import sys

# Add python-libs to sys.path
sys.path.append('/home/node/.openclaw/workspace/python-libs')

def check_emails_raw():
    auth_file = '/home/node/.openclaw/workspace/local/share/opencode/antigravity_auth.json'
    if not os.path.exists(auth_file):
        print(f"Auth file not found: {auth_file}")
        return
    
    with open(auth_file, 'r') as f:
        creds_data = json.load(f)
    
    access_token = creds_data.get('access_token')
    if not access_token:
        print("No access token found.")
        return

    sender = "cristejoycalosor13@gmail.com"
    query = f"from:{sender}"
    
    headers = {"Authorization": f"Bearer {access_token}"}
    url = f"https://gmail.googleapis.com/gmail/v1/users/me/messages?q={query}&maxResults=5"
    
    try:
        from urllib.request import Request, urlopen
        
        headers = {"Authorization": f"Bearer {access_token}"}
        url = f"https://gmail.googleapis.com/gmail/v1/users/me/messages?q={query}&maxResults=5"
        
        req = Request(url, headers=headers)
        with urlopen(req) as response:
            data = json.loads(response.read().decode())
            
        messages = data.get('messages', [])
        
        if not messages:
            # Fallback search
            url_fb = f"https://gmail.googleapis.com/gmail/v1/users/me/messages?q=criste+joy&maxResults=5"
            req_fb = Request(url_fb, headers=headers)
            with urlopen(req_fb) as response_fb:
                data = json.loads(response_fb.read().decode())
                messages = data.get('messages', [])

        if not messages:
            print("HEARTBEAT_OK")
            return

        print(f"Found {len(messages)} messages related to Joy.\n")
        
        for msg in messages:
            msg_id = msg['id']
            msg_url = f"https://gmail.googleapis.com/gmail/v1/users/me/messages/{msg_id}"
            msg_req = Request(msg_url, headers=headers)
            with urlopen(msg_req) as msg_resp:
                message = json.loads(msg_resp.read().decode())
            
            payload = message.get('payload', {})
            headers_list = payload.get('headers', [])
            subject = next((h['value'] for h in headers_list if h['name'].lower() == 'subject'), 'No Subject')
            date = next((h['value'] for h in headers_list if h['name'].lower() == 'date'), 'No Date')
            
            print(f"--- Message ID: {msg_id} ---")
            print(f"Date: {date}")
            print(f"Subject: {subject}")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    check_emails_raw()
