import json
import time
import base64
import subprocess
from urllib import request, parse
import os

KEY_FILE = 'google-drive-service-account.json'
PRIVATE_KEY_FILE = 'temp_private_key_heartbeat_v2.pem'
WEEK2_FOLDER_ID = '1YNmNDB3tKk8s9GnEqx_rgLlZdt5QoWOQ'

def base64url_encode(data):
    return base64.urlsafe_b64encode(data).decode('utf-8').rstrip('=')

def get_access_token():
    with open(KEY_FILE, 'r') as f:
        key_data = json.load(f)
    with open(PRIVATE_KEY_FILE, 'w') as f:
        f.write(key_data['private_key'])
    header = {"alg": "RS256", "typ": "JWT"}
    now = int(time.time())
    payload = {
        "iss": key_data['client_email'],
        "scope": "https://www.googleapis.com/auth/drive.readonly",
        "aud": key_data['token_uri'],
        "exp": now + 3600,
        "iat": now
    }
    encoded_header = base64url_encode(json.dumps(header).encode('utf-8'))
    encoded_payload = base64url_encode(json.dumps(payload).encode('utf-8'))
    signature_base = f"{encoded_header}.{encoded_payload}"
    process = subprocess.Popen(['openssl', 'dgst', '-sha256', '-sign', PRIVATE_KEY_FILE], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    signature, _ = process.communicate(input=signature_base.encode('utf-8'))
    encoded_signature = base64url_encode(signature)
    assertion = f"{signature_base}.{encoded_signature}"
    data = parse.urlencode({"grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer", "assertion": assertion}).encode('utf-8')
    req = request.Request(key_data['token_uri'], data=data, method='POST')
    with request.urlopen(req) as response:
        return json.loads(response.read().decode('utf-8'))['access_token']

def list_folder_contents(token, folder_id):
    query = parse.quote(f"'{folder_id}' in parents and trashed = false")
    url = f"https://www.googleapis.com/drive/v3/files?q={query}&fields=files(id,name,mimeType)&pageSize=100"
    req = request.Request(url, headers={"Authorization": f"Bearer {token}"})
    with request.urlopen(req) as response:
        return json.loads(response.read().decode('utf-8')).get('files', [])

if __name__ == "__main__":
    try:
        token = get_access_token()
        subfolders = list_folder_contents(token, WEEK2_FOLDER_ID)
        for sf in subfolders:
            if sf['mimeType'] == 'application/vnd.google-apps.folder':
                print(f"\nRestaurant: {sf['name']}")
                children = list_folder_contents(token, sf['id'])
                for child in children:
                    if child['name'] == 'Photos':
                        print(f"  [Photos]")
                        photos = list_folder_contents(token, child['id'])
                        for p in photos[:5]:
                            print(f"   - {p['name']}")
                        if len(photos) > 5: print(f"   ... and {len(photos)-5} more")
                    elif child['name'] == 'Field Notes':
                        print(f"  [Field Notes]")
                        notes = list_folder_contents(token, child['id'])
                        for n in notes:
                            print(f"   - {n['name']}")
    except Exception as e:
        print(f"ERROR: {e}")
    finally:
        if os.path.exists(PRIVATE_KEY_FILE):
            os.remove(PRIVATE_KEY_FILE)
