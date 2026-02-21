# Google Antigravity OAuth Integration for OpenClaw

This setup provides complete integration with Google Antigravity through OAuth2 authentication, enabling access to advanced AI models and browser automation capabilities.

## What is Google Antigravity?

Google Antigravity is Google's agentic development platform that transforms the IDE into a Mission Control for managing autonomous AI agents. Key features:

- **Multi-Model Access**: Gemini 3 Pro, Gemini 3 Flash, and Claude models via proxy
- **Agent-First Architecture**: Spawn multiple agents working in parallel
- **Browser Automation**: Chrome extension for web testing and data extraction
- **Thinking Modes**: Configurable reasoning budgets (low/medium/high)
- **Multi-Account Support**: Automatic rotation for rate limit management

## 🚀 Quick Start

### 1. Start the OAuth Callback Server
```bash
./auth_helper.py
```
This starts a local server that will receive the OAuth callback from Google.

### 2. Configure Google OAuth
Visit the Google OAuth authentication page (you'll need to configure this in Google's Cloud Console) and set the callback URL to the one provided by the auth helper.

### 3. Add Your Google Account
```bash
./multi_account_manager.py --add your-email@gmail.com your-auth-token
```

### 4. Verify Setup
```bash
./multi_account_manager.py --list
```

## 🔧 Configuration Files

### Main Configuration
- **`.openclaw/opencode.json`**: Primary agent configuration with all models
- **`.openclaw/security_config.json`**: Security policies and allowances
- **`local/share/opencode/oauth_config.json`**: OAuth callback configuration
- **`local/gemini/antigravity/browserAllowlist.txt`**: Browser URL allowlist

### Model Access
The configuration includes:
- **Gemini 3 Pro Preview**: Advanced reasoning with thinking models
- **Gemini 3 Flash**: Fast responses with reasoning capabilities  
- **Gemini 2.5 Flash Lite**: Lightweight, no reasoning
- **Claude Sonnet 4.5**: Thinking models via proxy
- **Claude Opus 4.5**: Premium thinking models via proxy

## 🔐 Security Configuration

### Terminal Execution
- **Policy**: `request_review` (asks before executing commands)
- **Allow List**: Safe commands (ls, git, python3, etc.)
- **Deny List**: Dangerous commands (rm, sudo, curl, etc.)

### Browser Security
- **JavaScript Policy**: `request_review` (requires approval for JS execution)
- **URL Allowlist**: Pre-configured with safe development domains

### Multi-Account Features
- Rate limit detection and account rotation
- Automatic token refresh
- Account status monitoring
- Configurable rotation policies

## 🛠️ Advanced Usage

### Rate Limit Management
The system automatically rotates accounts when hitting rate limits:
```bash
# Check current account status
./multi_account_manager.py --list

# Manually rate-limit an account (for testing)
./multi_account_manager.py --rate-limit email@gmail.com 3600

# Refresh token
./multi_account_manager.py --refresh email@gmail.com new-token 3600
```

### Browser Configuration
Edit `local/gemini/antigravity/browserAllowlist.txt` to add trusted domains.

### Security Tuning
Edit `.openclaw/security_config.json` to customize:
- Terminal execution policies
- Command allow/deny lists  
- Browser policies

## 📱 Browser Extension

For full functionality, you'll need the Antigravity Chrome extension:
1. Install from Chrome Web Store or developer channel
2. Grant permissions for automated browsing
3. Configure in Antigravity settings

## 🔧 Troubleshooting

### Common Issues
- **Port conflicts**: The OAuth callback uses port 36742 by default, but finds a free port automatically
- **Browser permissions**: Ensure the extension has necessary permissions
- **Rate limiting**: Use `--list` to check account status and rotate if needed

### Debug Mode
```bash
# Start auth helper with verbose logging
python3 -u auth_helper.py --debug

# Check account rotation logs
tail -f local/share/opencode/antigravity.log
```

## 🎯 Example Workflow

1. **Start conversation**: Ask the agent about web development
2. **Access current data**: Agent uses google_search tool for real-time info
3. **Browser automation**: Visit and test web applications
4. **Code generation**: Create responsive websites with live testing

Example interaction:
```
Human: Create a React todo app and deploy it to test in browser
Agent: 
- Searches for current React best practices
- Creates todo app with modern patterns
- Starts development server
- Tests in browser automatically
- Provides live demo URL
```

## 📊 Status Indicators

🔑 **OAuth Status**: Green when authenticated
🔗 **Account Rotation**: Shows current account in use
🛡️ **Security**: Indicates active policies
🌐 **Browser**: Extension status and permissions

## 🚀 Next Steps

1. **Test Authentication**: Run `./auth_helper.py` and complete OAuth flow
2. **Configure Workspace**: Set up project-specific rules and workflows
3. **Install Extensions**: Add necessary Chrome extensions for full functionality
4. **Customize Skills**: Create domain-specific skills for your workflow

## 📚 References

- [Google Antigravity Documentation](https://antigravity.google/docs)
- [OAuth Plugin Repository](https://github.com/shekohex/opencode-google-antigravity-auth)
- [Antigravity Codelabs](https://codelabs.developers.google.com/codelabs/getting-started-google-antigravity)

---

**Status**: ✅ Setup complete - Ready for authentication
**Security**: 🛡️ Configured with safelists and review policies  
**Models**: 🧠 Gemini 3 Pro/Flash + Claude via proxy enabled
**Features**: 🔍 Web search + Browser automation + Multi-account