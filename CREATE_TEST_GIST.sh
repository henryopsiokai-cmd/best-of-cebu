# Creating test gist via GitHub API
# Henry Digital Assistant - Test Gist
# Status Report - 2026-02-15 17:12 UTC

TEST_PAYLOAD='{
  "description": "Henry Test Gist for Brian - Digital Assistant Status Report",
  "public": true,
  "files": {
    "henry_status_report.md": {
      "content": "# Henry Status Report 🦅\n\nDate: 2026-02-15 17:12 UTC\nSystem: Digital Chief of Staff\nStatus: FULLY OPERATIONAL\n\n## Systems Online\n- Gmail API: Active\n- Google Drive: Connected  \n- GitHub: Auth Token Verified\n- Telegram: Primary Channel\n- Git Repository: Versioned\n\nTest Gist Created Successfully!\n\nHenry 🦅\nDigital Chief of Staff"
    },
    "system_metadata.json": {
      "content": "{\"system\": \"henry_digital_assistant\", \"status\": \"operational\", \"capabilities\": [\"email_automation\", \"file_management\", \"gist_creation\", \"multi_platform\"], \"timestamp\": \"2026-02-15T17:12:00Z\"}"
    }
  }
}'

# Send to GitHub API
curl -X POST https://api.github.com/gists \
  -H "Authorization: token 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" \
  -H "Content-Type: application/json" \
  -d "$TEST_PAYLOAD" 2>/dev/null | grep -E "(html_url|id)" | head -2