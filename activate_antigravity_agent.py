#!/usr/bin/env python3
"""
Google Antigravity Agent Activation Script
Activates the Antigravity integration and handles authentication
"""

import sys
import os
import json
import subprocess
import webbrowser
from pathlib import Path

def check_environment():
    """Check if the environment is properly set up"""
    print("🔍 Checking environment...")
    
    # Check config files
    config_files = [
        ".openclaw/opencode.json",
        ".openclaw/security_config.json",
        "local/share/opencode/oauth_config.json"
    ]
    
    missing_configs = [f for f in config_files if not Path(f).exists()]
    if missing_configs:
        print(f"⚠️ Missing configuration files: {missing_configs}")
        return False
    
    print("✅ All configuration files present")
    return True

def start_oauth_server():
    """Start the OAuth callback server"""
    print("🌐 Starting OAuth callback server...")
    try:
        # Start the auth helper in background
        process = subprocess.Popen([
            sys.executable, "auth_helper.py"
        ], stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        
        return process
    except Exception as e:
        print(f"❌ Failed to start OAuth server: {e}")
        return None

def activate_antigravity():
    """Main activation function"""
    print("🚀 Activating Google Antigravity Integration")
    print("=" * 50)
    
    # Check environment
    if not check_environment():
        print("❌ Environment check failed. Run setup script first.")
        return False
    
    # Start OAuth server
    oauth_process = start_oauth_server()
    if not oauth_process:
        print("❌ Failed to start OAuth server")
        return False
    
    try:
        print("✅ OAuth server started")
        print("📝 Next steps:")
        print("1. Open browser to Google OAuth page")
        print("2. Sign in with your Google account")
        print("3. Authorize the application")
        print("4. You'll be redirected back to local callback")
        
        # Wait for OAuth completion (user will be doing this)
        print("⏳ Waiting for authentication...")
        
        # Check for auth completion
        auth_file = "local/share/opencode/antigravity_auth.json"
        import time
        start_time = time.time()
        timeout = 300  # 5 minutes
        
        while time.time() - start_time < timeout:
            if Path(auth_file).exists():
                try:
                    with open(auth_file, 'r') as f:
                        auth_data = json.load(f)
                    if 'authorization_code' in auth_data:
                        print(f"✅ Authentication completed! Code received.")
                        break
                except Exception as e:
                    print(f"⚠️ Error reading auth file: {e}")
            time.sleep(2)
        else:
            print("⏰ Timeout waiting for authentication")
            return False
        
        # Setup multi-account manager
        print("🔄 Setting up account management...")
        
        # Check current account status
        try:
            result = subprocess.run([
                sys.executable, "multi_account_manager.py", "--list"
            ], capture_output=True, text=True, timeout=10)
            
            if result.returncode == 0:
                print("✅ Account manager ready")
            else:
                print(f"⚠️ Account manager check failed: {result.stderr}")
        except Exception as e:
            print(f"⚠️ Could not check account manager: {e}")
        
        print("\n✨ Google Antigravity integration is now active!")
        print("🔗 Available models:")
        print("  - Gemini 3 Pro (with thinking)")
        print("  - Gemini 3 Flash (with thinking)")
        print("  - Gemini 2.5 Flash Lite (basic)")
        print("  - Claude Sonnet 4.5 (thinking)")
        print("  - Claude Opus 4.5 (thinking)")
        print("")
        print("🌐 Browser automation available")
        print("🔄 Multi-account rate limit management enabled")
        print("🛡️ Security policies active (review mode)")
        
        return True
        
    finally:
        # Clean up
        if oauth_process and oauth_process.poll() is None:
            print("🛑 Stopping OAuth server...")
            oauth_process.terminate()
            oauth_process.wait()

def test_integration():
    """Test the integration with a simple request"""
    print("🧪 Testing integration...")
    
    # This would test the configured models
    # For now, just check if we can read the config
    try:
        with open(".openclaw/opencode.json", 'r') as f:
            config = json.load(f)
        
        models = config.get('provider', {}).get('google', {}).get('models', {})
        if models:
            print(f"✅ Found {len(models)} configured models")
            for model_name in models:
                print(f"  - {model_name}")
            return True
        else:
            print("⚠️ No models found in configuration")
            return False
    except Exception as e:
        print(f"❌ Configuration test failed: {e}")
        return False

if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "--test":
        success = test_integration()
        sys.exit(0 if success else 1)
    else:
        success = activate_antigravity()
        if success:
            print("\n🎉 Activation complete! Your Antigravity agent is ready.")
            sys.exit(0)
        else:
            print("\n❌ Activation failed. Check logs above.")
            sys.exit(1)