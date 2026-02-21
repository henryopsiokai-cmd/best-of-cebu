import json
import time
import base64
import subprocess
from urllib import request, parse

# Path to the service account JSON key file
KEY_FILE = 'google-drive-service-account.json'
PRIVATE_KEY_FILE = 'temp_private_key.pem'

def base64url_encode(data):
    return base64.urlsafe_b64encode(data).decode('utf-8').rstrip('=')

def get_access_token():
    with open(KEY_FILE, 'r') as f:
        key_data = json.load(f)

    # Save private key to temp file for openssl
    with open(PRIVATE_KEY_FILE, 'w') as f:
        f.write(key_data['private_key'])

    # JWT Header
    header = {"alg": "RS256", "typ": "JWT"}
    
    # JWT Claim Set (Payload)
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

    # Sign with openssl
    process = subprocess.Popen(
        ['openssl', 'dgst', '-sha256', '-sign', PRIVATE_KEY_FILE],
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )
    signature, stderr = process.communicate(input=signature_base.encode('utf-8'))
    
    if process.returncode != 0:
        raise Exception(f"OpenSSL Error: {stderr.decode()}")

    encoded_signature = base64url_encode(signature)
    assertion = f"{signature_base}.{encoded_signature}"

    # Request Access Token
    data = parse.urlencode({
        "grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer",
        "assertion": assertion
    }).encode('utf-8')

    req = request.Request(key_data['token_uri'], data=data, method='POST')
    with request.urlopen(req) as response:
        res_data = json.loads(response.read().decode('utf-8'))
        return res_data['access_token']

def list_files(token):
    url = "https://www.googleapis.com/drive/v3/files?pageSize=20&fields=files(id,name)"
    req = request.Request(url, headers={"Authorization": f"Bearer {token}"})
    with request.urlopen(req) as response:
        files_data = json.loads(response.read().decode('utf-8'))
        return files_data.get('files', [])

if __name__ == "__main__":
    import os
    try:
        token = get_access_token()
        files = list_files(token)
        if not files:
            print("NO_FILES_FOUND")
        else:
            print(json.dumps(files, indent=2))
    except Exception as e:
        print(f"ERROR: {e}")
    finally:
        if os.path.exists(PRIVATE_KEY_FILE):
            os.remove(PRIVATE_KEY_FILE)
