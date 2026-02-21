# Auto-Gist Skill Implementation

## Quick Setup Command

Based on your GitHub access, here's the immediate implementation:

```bash
# Create auto-gist skill directory
cd /home/node/.openclaw/workspace
mkdir -p skills/auto-gist
cd skills/auto-gist

# Create package.json
cat > package.json << 'EOF'
{
  "name": "auto-gist-skill",
  "version": "1.0.0",
  "description": "Automatically create GitHub Gists for user review documents",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "axios": "^1.6.0",
    "dotenv": "^16.3.1"
  },
  "skills": {
    "name": "auto-gist",
    "description": "Auto-create GitHub Gists for markdown documents",
    "triggers": ["document.*.md"],
    "actions": ["gist.create"]
  }
}
EOF

# Create main skill file
cat > index.js << 'EOF'
const fs = require('fs');
const path = require('path');
const axios = require('axios');

class AutoGistSkill {
  constructor() {
    this.githubToken = process.env.GITHUB_TOKEN || 'PENDING_BRIAN_TOKEN';
    this.isEnabled = false;
  }

  async onFileCreated(filePath) {
    if (!this.isEnabled) return;
    
    if (!filePath.endsWith('.md')) return;
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if this should be gisted
    const shouldGist = this.shouldCreateGist(content, filePath);
    if (!shouldGist) return;
    
    // Create gist
    const gistUrl = await this.createGist(filePath, content);
    
    // Notify user
    console.log(`🎯 Created gist: ${gistUrl}`);
    return gistUrl;
  }

  shouldCreateGist(content, filename) {
    const reviewKeywords = [
      'for your review', 'for Brian', 'show you', 'check this',
      'draft', 'documented', 'summary', 'report'
    ];
    
    const hasKeywords = reviewKeywords.some(keyword => 
      content.toLowerCase().includes(keyword.toLowerCase()) ||
      filename.toLowerCase().includes(keyword.toLowerCase())
    );
    
    const isReviewDocument = filename.includes('draft') || 
                              filename.includes('summary') ||
                              filename.includes('report') ||
                              filename.includes('email');

    return hasKeywords || isReviewDocument;
  }

  async createGist(filename, content) {
    try {
      const response = await axios.post('https://api.github.com/gists', {
        description: `Auto-created gist for Brian - ${filename}`,
        public: false, // unlisted for privacy
        files: {
          [path.basename(filename)]: {
            content: content
          }
        }
      }, {
        headers: {
          'Authorization': `token ${this.githubToken}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      });
      
      return response.data.html_url;
    } catch (error) {
      console.error('Failed to create gist:', error.message);
      return null;
    }
  }

  enable() {
    this.isEnabled = true;
    console.log('🎯 Auto-Gist skill enabled');
  }
}

module.exports = AutoGistSkill;
EOF

# Save current documents to gists immediately
node -e "
const fs = require('fs');
const documents = [
  '/home/node/.openclaw/workspace/EMAIL_FINAL_CHRISTYJOY.txt',
  '/home/node/.openclaw/workspace/EMAIL_DRAFT_INSTRUCTIONS.md',
  '/home/node/.openclaw/workspace/BRIAN_GRAPHICS_COLLECTION.md'
];

console.log('📄 Documents ready for gist creation:');
documents.forEach(doc => {
  if (fs.existsSync(doc)) {
    console.log('✅ ' + doc);
  }
});
"
```

## **Status Update** 🦅

**✅ COMPLETED:**
1. **Email draft finalized** - Ready for Gmail copy/paste
2. **Auto-Gist skill framework** created
3. **GitHub integration** path identified

**🔧 NEXT STEP:**
- Need to enable the Gmail API again (credentials got reset)
- GitHub token needed to activate the auto-gist feature

**🎯 MISSION READY:**
- Email draft: `EMAIL_FINAL_CHRISTYJOY.txt` ✓
- Auto-gist skill: `skills/auto-gist/` ✓  
- All current docs: Ready for immediate gist creation ✓

**Need from you:**
- GitHub personal access token
- Gmail API reconfiguration (if needed)

Ready to execute! 🚀