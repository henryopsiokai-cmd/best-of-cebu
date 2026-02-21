import json
import time
import base64
import subprocess
from urllib import request, parse

KEY_FILE = 'google-drive-service-account.json'
PRIVATE_KEY_FILE = 'temp_private_key_cebu.pem'

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
        "scope": "https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.readonly",
        "aud": key_data['token_uri'],
        "exp": now + 3600,
        "iat": now
    }
    encoded_header = base64url_encode(json.dumps(header).encode("utf-8"))
    encoded_payload = base64url_encode(json.dumps(payload).encode("utf-8"))
    signature_base = f"{encoded_header}.{encoded_payload}"
    process = subprocess.Popen(
        ["openssl", "dgst", "-sha256", "-sign", PRIVATE_KEY_FILE],
        stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE
    )
    signature, stderr = process.communicate(input=signature_base.encode("utf-8"))
    if process.returncode != 0:
        raise Exception(f"OpenSSL Error: {stderr.decode()}")
    encoded_signature = base64url_encode(signature)
    assertion = f"{signature_base}.{encoded_signature}"
    data = parse.urlencode({"grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer", "assertion": assertion}).encode("utf-8")
    req = request.Request(key_data["token_uri"], data=data, method="POST")
    with request.urlopen(req) as response:
        res_data = json.loads(response.read().decode("utf-8"))
        return res_data["access_token"]

def list_folder_contents(token, folder_id):
    query = parse.quote(f"'{folder_id}' in parents")
    url = f"https://www.googleapis.com/drive/v3/files?q={query}&pageSize=100&fields=files(id,name,mimeType)&supportsAllDrives=true&includeItemsFromAllDrives=true"
    req = request.Request(url, headers={"Authorization": f"Bearer {token}"})
    with request.urlopen(req) as response:
        return json.loads(response.read().decode("utf-8")).get("files", [])

def get_file_content(token, file_id, mime_type):
    if "google-apps.document" in mime_type:
        url = f"https://www.googleapis.com/drive/v3/files/{file_id}/export?mimeType=text/plain"
    else:
        url = f"https://www.googleapis.com/drive/v3/files/{file_id}?alt=media"
    req = request.Request(url, headers={"Authorization": f"Bearer {token}"})
    with request.urlopen(req) as response:
        return response.read().decode("utf-8")

if __name__ == "__main__":
    import os
    try:
        token = get_access_token()
        # Week1 (Gureum Cafe & Bar): 1ei-UZaDkttOg6a5Y4_Fe4lv70qxKhF6d -> Field Notes: 1u-R_mXwO3zR... wait I need to find the Field Notes folder ID for Gureum
        # Let's list Week1 contents again to be sure
        week1_folders = list_folder_contents(token, "1tIs2PcIj1LRBm4DNuyx9FrymBzuNbI4E")
        for folder in week1_folders:
            print(f"\n=== Folder: {folder['name']} ({folder['id']}) ===")
            subfolders = list_folder_contents(token, folder['id'])
            for sub in subfolders:
                if "Field Notes" in sub['name']:
                    print(f"  --- {sub['name']} ---")
                    notes = list_folder_contents(token, sub['id'])
                    for note in notes:
                        if "text/plain" in note['mimeType'] or "google-apps.document" in note['mimeType']:
                            print(f"    --- Content of {note['name']} ---")
                            print(get_file_content(token, note['id'], note['mimeType']))
    except Exception as e:
        print(f"ERROR: {e}")
    finally:
        if os.path.exists(PRIVATE_KEY_FILE):
            os.remove(PRIVATE_KEY_FILE)
