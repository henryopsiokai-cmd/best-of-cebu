import requests
import json
import os

# Read the access token from the shared file
token_path = "/home/node/.openclaw/workspace/local/share/opencode/antigravity_auth.json"
with open(token_path, 'r') as f:
    auth_data = json.load(f)
    token = auth_data['access_token']

url = "https://generativelanguage.googleapis.com/v1beta/models?key=" + token # This might not work if it expects Bearer token

headers = {
    "Authorization": f"Bearer {token}"
}

response = requests.get("https://generativelanguage.googleapis.com/v1beta/models", headers=headers)
if response.status_code == 200:
    models = response.json()
    print(json.dumps(models, indent=2))
else:
    print(f"Error: {response.status_code}")
    print(response.text)
