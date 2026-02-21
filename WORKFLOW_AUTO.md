# WORKFLOW_AUTO - Automated Compaction & Memory Protocols

This file defines the automated workflows for context management and session continuity.

## 🧹 Intelligent Compaction (Auto-Compaction)
- **Mode**: `intelligent_trim` (Custom logic via `INTELLIGENT_COMPACTION_CONFIG.json`)
- **Token Threshold**: 15,000 tokens
- **Message Interval**: 6 messages
- **Philosophy**: Technical continuity over perfection. Reduce usage by 40-60%.
- **Preservation**: Always keep technical configurations, API tokens, final decisions, and user preferences.

## 🧠 Memory Management
- **Pre-Compaction Flush**: Enabled.
- **Trigger**: Crosses the soft threshold (15,000 tokens).
- **Action**: Run a silent agentic turn to update `memory/YYYY-MM-DD.md`.
- **Consolidation**: Weekly review of daily logs into `MEMORY.md`.

## 🛡️ Post-Compaction Audit
- After every compaction, the agent must verify that the following are restored:
  - Technical project state (e.g., Best of Cebu domain/SSL status)
  - Active collaboration threads (e.g., Joy's naming conventions)
  - Current credentials and API status.
  - **Model ID check**: Ensure primary is set to `gemini-3.1-pro` and NOT the legacy `gemini-3-pro-high`.

## 📋 Best of Cebu Current Context
- **Domain**: bestofcebu.com (Live)
- **Primary Contributor**: Joy (Criste Joy)
- **Naming Rule**: {article}_{index}_{desc}
- **Gmail Auth**: App Passwords (managed in CREDENTIALS.md)
- **Status**: Deployment successful. HTTPS enforced. Business cards PNGs sent to Joy.
