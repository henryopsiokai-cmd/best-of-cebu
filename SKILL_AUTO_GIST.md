# Auto-Gist Skill
## Purpose: Automatically create GitHub Gists for documents intended for user review

## Trigger Conditions
- Any markdown document created in workspace
- Contains references to "show you" / "for your review" / similar phrasing
- User requests gist creation
- Documents with .md extension that are flagged for sharing

## Outputs
- GitHub Gist URL
- Confirmation message
- Optional auto-sharing of gist link via current channel

## Configuration
- GitHub authentication via auth-profiles
- Default visibility: public/unlisted
- Auto-copy gist URL to clipboard (if available)

## Integration Points
- intercept: document creation
- process: gist creation via GitHub API
- notify: share gist URL back to user