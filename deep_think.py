#!/usr/bin/env python3
"""
Deep Thinking Module — Kimi K2.5 via OpenRouter
================================================
Call this when you need deeper reasoning, analysis, or complex problem-solving.

Usage:
    python3 /home/node/.openclaw/workspace/deep_think.py "Your complex question or analysis request here"

The response will be printed to stdout. Use the output in your reply to the user.

Examples:
    python3 deep_think.py "Analyze the security implications of exposing port 18789 directly"
    python3 deep_think.py "Design a backup rotation strategy for the openclaw config"
    python3 deep_think.py "What are the trade-offs between SQLite and PostgreSQL for Henry's memory system?"
"""

import sys
import json
import urllib.request
import urllib.error

OPENROUTER_API_KEY = "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"
MODEL = "moonshotai/kimi-k2.5"
API_URL = "https://openrouter.ai/api/v1/chat/completions"

SYSTEM_PROMPT = """You are a deep reasoning assistant. You are called by Henry (an AI agent running on OpenClaw) when he needs careful, thorough analysis on a complex topic.

Provide detailed, well-structured analysis. Consider edge cases, trade-offs, and practical implications. Be thorough but concise — Henry will use your response in his own reply to the user.

Focus on:
- Clear reasoning with supporting evidence
- Practical recommendations
- Risk assessment when applicable
- Alternative approaches when relevant"""


def deep_think(prompt: str) -> str:
    """Send a thinking request to Kimi K2.5 and return the response."""
    payload = json.dumps({
        "model": MODEL,
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": prompt}
        ],
        "max_tokens": 4096,
        "temperature": 0.7,
    }).encode("utf-8")

    req = urllib.request.Request(
        API_URL,
        data=payload,
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {OPENROUTER_API_KEY}",
            "HTTP-Referer": "https://openclaw.local",
            "X-Title": "Henry Deep Think",
        },
        method="POST",
    )

    try:
        with urllib.request.urlopen(req, timeout=120) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            return data["choices"][0]["message"]["content"]
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", errors="replace")
        return f"[Deep Think Error] HTTP {e.code}: {body}"
    except Exception as e:
        return f"[Deep Think Error] {e}"


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 deep_think.py \"Your question here\"")
        sys.exit(1)

    question = " ".join(sys.argv[1:])
    print(f"🧠 Thinking deeply about: {question}\n")
    result = deep_think(question)
    print(result)
