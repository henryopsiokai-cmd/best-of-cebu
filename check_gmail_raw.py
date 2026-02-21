import sys
import json
import base64
import urllib.request

def refresh_token(refresh_token_val):
    # This is a shot in the dark - common client ID for this tool or a known one
    # But usually, it requires the specific client_id used to issue the refresh token.
    # Without client_id, we can't refresh.
    pass

def get_emails_raw_http(access_token):
    query = 'from:cristejoycalosor13@gmail.com'
    encoded_query = urllib.parse.quote(query)
    url = f"https://gmail.googleapis.com/gmail/v1/users/me/messages?q={encoded_query}&maxResults=5"
    
    req = urllib.request.Request(url)
    req.add_header('Authorization', f'Bearer {access_token}')
    
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            messages = data.get('messages', [])
            
            results = []
            for msg in messages:
                msg_url = f"https://gmail.googleapis.com/gmail/v1/users/me/messages/{msg['id']}"
                msg_req = urllib.request.Request(msg_url)
                msg_req.add_header('Authorization', f'Bearer {access_token}')
                with urllib.request.urlopen(msg_req) as msg_res:
                    m = json.loads(msg_res.read().decode())
                    results.append(m)
            return results
    except Exception as e:
        return str(e)

if __name__ == "__main__":
    creds_path = "/home/node/.openclaw/workspace/local/share/opencode/antigravity_auth.json"
    with open(creds_path, 'r') as f:
        creds_data = json.load(f)
    
    res = get_emails_raw_http(creds_data['access_token'])
    if isinstance(res, list):
        print(json.dumps(res, indent=2))
    else:
        print(f"HTTP_ERROR: {res}")
