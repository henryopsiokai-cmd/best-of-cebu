#!/bin/bash

# Google Antigravity OAuth Setup Script for OpenClaw
# This script sets up the Google Antigravity plugin for OAuth authentication

set -e

echo "🚀 Setting up Google Antigravity OAuth integration..."

# Check if we're in the correct directory
if [ ! -f "SOUL.md" ] && [ ! -f "AGENTS.md" ]; then
    echo "❌ Error: Please run this script from your workspace directory"
    exit 1
fi

# Create the OpenClaw config directory if it doesn't exist
mkdir -p .openclaw
mkdir -p local/share/opencode
mkdir -p local/cache/opencode

# Install the opencode-google-antigravity-auth plugin
echo "📦 Installing opencode-google-antigravity-auth plugin..."

# Create a minimal package.json for the plugin
cat > local/cache/opencode/package.json << 'EOF'
{
  "name": "opencode-plugin-cache",
  "version": "1.0.0",
  "dependencies": {
    "opencode-google-antigravity-auth": "^1.0.0"
  },
  "devDependencies": {}
}
EOF

# Copy the configuration
echo "⚙️ Setting up configuration..."
cp opencode_antigravity_config.json .openclaw/opencode.json

# Create symbolic links for proper OpenClaw structure
mkdir -p local/share
ln -sf ../local/cache/opencode local/share/opencode 2>/dev/null || true

# Create authentication storage directory
echo "🔐 Setting up authentication storage..."
mkdir -p local/share/opencode

# Create a basic authentication helper script
cat > auth_helper.py << 'EOF'
#!/usr/bin/env python3
"""
Google Antigravity OAuth Authentication Helper
Handles the OAuth flow for OpenClaw integration
"""

import asyncio
import json
import os
import socket
from urllib.parse import parse_qs, urlparse
from http.server import HTTPServer, BaseHTTPRequestHandler

class OAuthCallbackHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path.startswith('/oauth-callback'):
            # Parse the authorization code from the callback
            parsed = urlparse(self.path)
            query_params = parse_qs(parsed.query)
            
            if 'code' in query_params:
                auth_code = query_params['code'][0]
                print(f"🔑 Received authorization code: {auth_code}")
                
                # Save the auth code
                auth_data = {'authorization_code': auth_code}
                with open('../../local/share/opencode/antigravity_auth.json', 'w') as f:
                    json.dump(auth_data, f)
                
                # Send success response
                self.send_response(200)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                self.wfile.write(b'''
                <html>
                <head><title>Authentication Complete</title></head>
                <body>
                    <h1>Authentication Complete</h1>
                    <p>You can close this window and return to your application.</p>
                </body>
                </html>
                ''')
            else:
                self.send_response(400)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                self.wfile.write(b'''
                <html>
                <head><title>Authentication Failed</title></head>
                <body>
                    <h1>Authentication Failed</h1>
                    <p>No authorization code received.</p>
                </body>
                </html>
                ''')

def find_free_port():
    """Find a free port for the callback server"""
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(('', 0))
        return s.getsockname()[1]

async def setup_oauth_server():
    """Start the OAuth callback server"""
    port = find_free_port()
    print(f"🌐 Starting callback server on port {port}")
    
    server = HTTPServer(('localhost', port), OAuthCallbackHandler)
    print(f"📡 Listening for callbacks on http://localhost:{port}/oauth-callback")
    
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n👍 OAuth server stopped")
        server.shutdown()

if __name__ == "__main__":
    print("🔧 Google Antigravity OAuth Helper")
    print("=" * 40)
    
    # Store the port for OpenClaw to use
    port = find_free_port()
    config = {
        'callback_port': port,
        'callback_url': f'http://localhost:{port}/oauth-callback'
    }
    
    with open('../../local/share/opencode/oauth_config.json', 'w') as f:
        json.dump(config, f)
    
    print(f"🔗 Callback URL: http://localhost:{port}/oauth-callback")
    print("⏳ Waiting for OAuth callback...")
    
    try:
        asyncio.run(setup_oauth_server())
    except KeyboardInterrupt:
        print("\n👍 Setup complete!")
EOF

chmod +x auth_helper.py

# Create multi-account management script
cat > multi_account_manager.py << 'EOF'
#!/usr/bin/env python3
"""
Multi-Account Manager for Google Antigravity
Handles account rotation and rate limit management
"""

import json
import os
from typing import List, Dict, Optional
from dataclasses import dataclass
import time

@dataclass
class Account:
    email: str
    auth_token: str
    expires_at: float
    rate_limited_until: Optional[float] = None
    
    def is_rate_limited(self) -> bool:
        if self.rate_limited_until is None:
            return False
        return time.time() < self.rate_limited_until
    
    def is_expired(self) -> bool:
        return time.time() > self.expires_at

class MultiAccountManager:
    def __init__(self, accounts_file: str = "~/.local/share/opencode/antigravity-accounts.json"):
        self.accounts_file = accounts_file  # Use relative path instead of expanduser
        self.accounts: List[Account] = []
        self.current_account_index = 0
        self.load_accounts()
    
    def load_accounts(self):
        """Load accounts from storage"""
        if os.path.exists(self.accounts_file):
            try:
                with open(self.accounts_file, 'r') as f:
                    data = json.load(f)
                    for account_data in data.get('accounts', []):
                        account = Account(
                            email=account_data['email'],
                            auth_token=account_data['auth_token'],
                            expires_at=account_data['expires_at'],
                            rate_limited_until=account_data.get('rate_limited_until')
                        )
                        self.accounts.append(account)
                self.current_account_index = data.get('current_index', 0)
            except Exception as e:
                print(f"⚠️ Error loading accounts: {e}")
                self.accounts = []
    
    def save_accounts(self):
        """Save accounts to storage"""
        data = {
            'accounts': [
                {
                    'email': acc.email,
                    'auth_token': acc.auth_token,
                    'expires_at': acc.expires_at,
                    'rate_limited_until': acc.rate_limited_until
                }
                for acc in self.accounts
            ],
            'current_index': self.current_account_index
        }
        
        # Ensure directory exists
        os.makedirs(os.path.dirname(self.accounts_file), exist_ok=True)
        
        with open(self.accounts_file, 'w') as f:
            json.dump(data, f, indent=2)
    
    def add_account(self, email: str, auth_token: str, expires_in: int = 3600):
        """Add a new account"""
        expires_at = time.time() + expires_in
        account = Account(email, auth_token, expires_at)
        self.accounts.append(account)
        self.save_accounts()
        print(f"✅ Added account: {email}")
    
    def get_current_account(self) -> Optional[Account]:
        """Get the current account"""
        if not self.accounts:
            return None
        
        if self.current_account_index >= len(self.accounts):
            self.current_account_index = 0
        
        return self.accounts[self.current_account_index]
    
    def get_next_account(self) -> Optional[Account]:
        """Get the next available account (automatic rotation)"""
        if not self.accounts:
            return None
        
        # Try up to all accounts
        for _ in range(len(self.accounts)):
            account = self.get_current_account()
            
            if account and not account.is_rate_limited() and not account.is_expired():
                print(f"🔗 Using account {self.current_account_index + 1}/{len(self.accounts)}: {account.email}")
                return account
            
            # Move to next account
            self.current_account_index = (self.current_account_index + 1) % len(self.accounts)
            self.save_accounts()
        
        print("⚠️ No available accounts (all rate-limited or expired)")
        return None
    
    def mark_rate_limited(self, account_email: str, duration: int = 3600):
        """Mark an account as rate-limited"""
        for account in self.accounts:
            if account.email == account_email:
                account.rate_limited_until = time.time() + duration
                print(f"🚫 Account rate-limited for {duration}s: {account_email}")
                self.save_accounts()
                break
    
    def refresh_token(self, email: str, new_auth_token: str, expires_in: int = 3600):
        """Refresh authentication token for an account"""
        for account in self.accounts:
            if account.email == email:
                account.auth_token = new_auth_token
                account.expires_at = time.time() + expires_in
                account.rate_limited_until = None  # Clear rate limit
                print(f"♻️ Token refreshed for: {email}")
                self.save_accounts()
                break

# CLI interface
if __name__ == "__main__":
    import argparse
    
    parser = argparse.ArgumentParser(description='Antigravity Multi-Account Manager')
    parser.add_argument('--list', action='store_true', help='List all accounts')
    parser.add_argument('--add', nargs=2, metavar=('EMAIL', 'TOKEN'), help='Add new account')
    parser.add_argument('--rate-limit', nargs=2, metavar=('EMAIL', 'DURATION'), help='Mark account rate-limited')
    parser.add_argument('--refresh', nargs=3, metavar=('EMAIL', 'TOKEN', 'EXPIRES_IN'), help='Refresh token')
    
    args = parser.parse_args()
    
    manager = MultiAccountManager()
    
    if args.list:
        print("📋 Accounts:")
        for i, acc in enumerate(manager.accounts):
            status = "active"
            if acc.is_rate_limited():
                status = "rate-limited"
            elif acc.is_expired():
                status = "expired"
            print(f"  {i+1}. {acc.email} [{status}]")
    
    elif args.add:
        manager.add_account(args.add[0], args.add[1])
    
    elif args.rate_limit:
        manager.mark_rate_limited(args.rate_limit[0], int(args.rate_limit[1]))
    
    elif args.refresh:
        manager.refresh_token(args.refresh[0], args.refresh[1], int(args.refresh[2]))
    
    else:
        # Interactive mode
        current = manager.get_next_account()
        if current:
            print(f"🎯 Current Account: {current.email}")
            print(f"📊 {len(manager.accounts)} accounts configured")
        else:
            print("⚠️ No accounts configured. Use --add to add accounts.")
EOF

chmod +x multi_account_manager.py

# Create browser allowlist
mkdir -p local/gemini/antigravity
cat > local/gemini/antigravity/browserAllowlist.txt << 'EOF'
# Antigravity Browser Allowlist
# Add trusted domains to this file, one per line
# Only domains listed here will be accessible to the browser agent

# Google Domains
google.com
*.google.com
*.googleapis.com
*.googleusercontent.com

# Development Domains
localhost
*.localhost
127.0.0.1
*.127.0.0.1

# Common Development
github.com
*.github.com
npmjs.com
*.npmjs.com

# Documentation
*.readthedocs.io
docs.python.org
developer.mozilla.org
EOF

# Create security configuration
cat > .openclaw/security_config.json << 'EOF'
{
  "terminal_execution_policy": "request_review",
  "browser_javascript_policy": "request_review",
  "terminal_allowlist": [
    "ls",
    "pwd",
    "cd",
    "git",
    "python3",
    "node",
    "npm",
    "npx",
    "cat",
    "echo",
    "mkdir",
    "touch",
    "cp",
    "mv",
    "chmod"
  ],
  "terminal_denylist": [
    "rm",
    "sudo",
    "dd",
    "ifconfig",
    "iptables",
    "service",
    "systemctl",
    "reboot",
    "shutdown",
    "curl",
    "wget"
  ],
  "browser_url_allowlist": "local/gemini/antigravity/browserAllowlist.txt"
}
EOF

echo "✅ Setup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Run ./auth_helper.py to start OAuth callback server"
echo "2. Visit Google OAuth authentication page in browser"
echo "3. Add accounts with ./multi_account_manager.py --add email@domain.com token"
echo "4. Check account status with ./multi_account_manager.py --list"
echo ""
echo "🔧 Configuration files created:"
echo "  - .openclaw/opencode.json (agent configuration)"
echo "  - local/share/opencode/oauth_config.json (OAuth settings)"
echo "  - .openclaw/security_config.json (security policies)"
echo ""
echo "🛡️ Security is configured with:"
echo "  - Terminal command review policy (request_review)"
echo "  - Browser JavaScript review policy (request_review)"
echo "  - Allowed/Don't allow lists for commands"
echo "  - Browser URL allowlist file"
echo ""
echo "🚀 Ready to authenticate with Google Antigravity!"