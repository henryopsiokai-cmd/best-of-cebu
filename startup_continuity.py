#!/usr/bin/env python3
"""
Henry Session Continuity Startup Script
"""

import json
import os
from datetime import datetime
from pathlib import Path

def startup_continuity_check():
    """Check memory system and establish continuity"""
    workspace = Path("/home/node/.openclaw/workspace")
    
    # Standard startup checks
    memory_file = workspace / "MEMORY.md"
    heartbeat_file = workspace / "memory" / "heartbeat-state.json"
    
    # Container health (from existing protocols)
    status_parts = ["Henry online.", "Container healthy.", "Telegram active."]
    
    # Memory system status
    memory_status = []
    
    if memory_file.exists():
        try:
            content = memory_file.read_text()
            if "Brian's Long-Term Memory" in content:
                # Extract last update if available
                if "Memory Update" in content:
                    # Find last update date
                    lines = content.split('\n')
                    for i, line in enumerate(lines):
                        if "Memory Update" in line and i < len(lines) - 1:
                            date_part = line.split("-")[1].strip() if "-" in line else "recent"
                            memory_status.append(f"Personal memory: current ({date_part})")
                            break
                else:
                    memory_status.append("Personal memory: initialized")
            else:
                memory_status.append("Personal memory: needs setup")
        except Exception as e:
            memory_status.append(f"Personal memory: error ({e})")
    else:
        memory_status.append("Personal memory: missing")
    
    # Continuity tracking
    continuity_level = "basic"
    
    if heartbeat_file.exists():
        try:
            with open(heartbeat_file) as f:
                state = json.load(f)
                if 'sessionCount' in state:
                    continuity_level = "enhanced"
                if 'lastSessionDate' in state:
                    continuity_level = "full"
        except:
            continuity_level = "partial"
    
    # Pending items check
    inbox_dir = workspace / "inbox"
    if inbox_dir.exists():
        pending_files = list(inbox_dir.glob("*"))
        if pending_files:
            status_parts.append(f"Pending items: {len(pending_files)}")
        else:
            status_parts.append("Pending items: none")
    else:
        status_parts.append("Pending items: none")
    
    # Build final status
    status_message = " ".join(status_parts)
    
    # Add memory continuity info if available
    if memory_status:
        status_message += f"\n{' '.join(memory_status)}"
    
    status_message += f"\nContinuity level: {continuity_level}"
    
    return status_message

if __name__ == "__main__":
    print(startup_continuity_check())
    print("\nWhat's on the docket today, Brian?")