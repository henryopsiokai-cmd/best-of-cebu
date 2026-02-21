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
