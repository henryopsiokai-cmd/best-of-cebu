# Deep Thinking — Kimi K2.5

You have access to a deep reasoning model (Kimi K2.5) for complex analysis tasks.

## When to Use

Use deep thinking for:
- Complex analysis requiring careful reasoning
- Security assessments and risk analysis
- Architecture and design decisions
- Debugging complex multi-step issues
- Comparing trade-offs between approaches
- Any task where you need to think more carefully than usual

## How to Use

Run this command:
```
python3 /home/node/.openclaw/workspace/deep_think.py "Your detailed question or analysis request"
```

The script calls Kimi K2.5 on OpenRouter and returns a thorough analysis. Use the output in your reply to the user.

## Important

- **Always use deep thinking** for tasks requiring careful reasoning
- The script has a 120-second timeout — K2.5 can be slow but thorough
- Your primary model (Gemini 3 Flash) handles day-to-day tasks and tool calling
- K2.5 handles the heavy thinking — use it liberally
- Include the K2.5 analysis in your response when relevant
