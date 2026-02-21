# Auto-Gist Skill

A self-contained skill that automatically converts markdown documents into GitHub Gists when they're intended for user review. This skill intelligently detects when documents should be shared as gists and handles the entire process automatically.

## Features

- **Intelligent Detection**: Automatically identifies when markdown documents are meant for user review
- **GitHub Gist Integration**: Seamless creation and management of GitHub Gists via API
- **Configuration Management**: Flexible settings for gist visibility, naming, and triggers
- **Error Handling**: Robust error handling and user feedback
- **Rate Limiting**: Built-in rate limiting to respect GitHub API limits

## Installation

1. Copy this skill to your skills directory
2. Install required dependencies: `pip install requests pyyaml python-frontmatter`
3. Configure your GitHub personal access token in the config
4. Set up the detection patterns as needed

## Configuration

Create a `config.yaml` file in the skill directory:

```yaml
github:
  token: "your_github_personal_access_token"
  api_url: "https://api.github.com"

detection:
  # Patterns that indicate a document should be auto-gisted
  patterns:
    - "share as gist"
    - "create gist"
    - "gist this"
    - "for review"
    - "user review"
  
  # File extensions to process
  file_extensions:
    - ".md"
    - ".markdown"
  
  # Minimum file size (in bytes) to consider
  min_file_size: 100
  
  # Maximum file size (in bytes) to consider
  max_file_size: 1048576  # 1MB

# Default gist settings
gist_defaults:
  public: false  # Create secret gists by default
  filename_pattern: "auto-gist-{timestamp}.md"
  description: "Auto-generated gist for user review"

# Rate limiting
rate_limit:
  max_requests_per_hour: 50
  cooldown_minutes: 5

# Logging
logging:
  level: INFO
  file: "auto_gist.log"
```

## Usage

### Basic Usage

The skill automatically monitors for markdown files that contain review-oriented content:

```python
from auto_gist import AutoGistSkill

skill = AutoGistSkill()

# Process a single file
result = skill.process_file("document.md")
if result['success']:
    print(f"Created gist: {result['gist_url']}")
```

### Advanced Usage

```python
from auto_gist import AutoGistSkill

skill = AutoGistSkill(config_path="custom_config.yaml")

# Process multiple files
results = skill.process_directory("docs/")

# Process with custom detection
result = skill.process_file("document.md", force=True, public=True)
```

## API Integration

The skill uses the GitHub Gists API:

- **Authentication**: Personal access token with `gist` scope
- **Rate Limiting**: Built-in rate limiting and retry logic
- **Error Handling**: Comprehensive error handling with user-friendly messages

## Detection Logic

The skill uses multiple signals to determine if a document should be auto-gisted:

1. **Content Analysis**: Looks for specific phrases indicating review intent
2. **File Metadata**: Checks YAML frontmatter for gist-related flags
3. **File Characteristics**: Size, extension, and location-based rules
4. **User Intent**: Analyzes surrounding context and conversation

## Error Handling

The skill includes robust error handling for:

- Network issues and API failures
- Authentication problems
- File access errors
- Rate limit violations
- Invalid configuration

## Security

- Uses secure token storage
- Validates all file inputs
- Implements rate limiting
- Sanitizes gist content
- Logs security-relevant events

## Extensibility

The skill is designed to be easily extended:

- Add new detection patterns in the configuration
- Implement custom file processors
- Add new output formats
- Integrate with other platforms

## Troubleshooting

Check the log file for detailed information about:
- File processing attempts
- API responses and errors
- Rate limiting events
- Configuration issues

Common issues:
- **Authentication failed**: Check your GitHub token and permissions
- **Rate limit exceeded**: Wait for cooldown period or increase limits
- **File not processed**: Check detection patterns and file size limits