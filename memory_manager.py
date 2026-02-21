#!/usr/bin/env python3
"""
Memory System Manager - Comprehensive memory consolidation and maintenance
"""

import json
import os
import re
from datetime import datetime, timedelta
from pathlib import Path
from typing import Dict, List, Optional

class MemoryManager:
    """Manages persistent memory system for Henry"""
    
    def __init__(self, workspace_path: str = "/home/node/.openclaw/workspace"):
        self.workspace = Path(workspace_path)
        self.memory_dir = self.workspace / "memory"
        self.memory_file = self.workspace / "MEMORY.md"
        self.heartbeat_file = self.memory_dir / "heartbeat-state.json"
        
        # Ensure directories exist
        self.memory_dir.mkdir(exist_ok=True)
    
    def get_daily_files(self, days_back: int = 7) -> List[Path]:
        """Get daily memory files for specified period"""
        files = []
        for i in range(days_back):
            date = datetime.now() - timedelta(days=i)
            filename = f"{date.strftime('%Y-%m-%d')}.md"
            filepath = self.memory_dir / filename
            if filepath.exists():
                files.append(filepath)
        return sorted(files, reverse=True)
    
    def extract_key_events(self, content: str) -> List[Dict]:
        """Extract significant events and decisions from daily content"""
        events = []
        
        # Look for key patterns
        patterns = {
            'projects': r'(?:project|Project)\s*:?\s*(.+?)(?:\n|\r|$)',
            'discoveries': r'(?:DISCOVERY|discovery|found|Found)\s*:?\s*(.+?)(?:\n|\r|$)',
            'preferences': r'(?:prefers|prefers|likes|hates)\s*:?\s*(.+?)(?:\n|\r|$)',
            'decisions': r'(?:decided|Decision|chose|selected)\s*:?\s*(.+?)(?:\n|\r|$)',
            'limitations': r'(?:limitation|restriction|cannot|unable)\s*:?\s*(.+?)(?:\n|\r|$)',
            'successes': r'(?:SUCCESS|success|working|operational)\s*:?\s*(.+?)(?:\n|\r|$)',
        }
        
        for category, pattern in patterns.items():
            matches = re.findall(pattern, content, re.MULTILINE)
            for match in matches:
                clean_match = match.strip('-: ').strip()
                if clean_match and len(clean_match) > 10:
                    events.append({
                        'type': category,
                        'content': clean_match,
                        'timestamp': datetime.now().isoformat()
                    })
        
        return events
    
    def update_long_term_memory(self, days_back: int = 14):
        """Consolidate recent memories into long-term storage"""
        daily_files = self.get_daily_files(days_back)
        
        if not daily_files:
            print("No daily memory files found for consolidation")
            return
        
        # Read existing MEMORY.md if it exists
        existing_memory = ""
        if self.memory_file.exists():
            existing_memory = self.memory_file.read_text()
        
        # Extract new intelligence
        all_events = []
        for daily_file in daily_files:
            content = daily_file.read_text()
            events = self.extract_key_events(content)
            all_events.extend(events)
        
        # Generate update report
        report = f"""
## Memory Consolidation Report - {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

### New Intelligence Extracted ({len(all_events)} items)
"""
        
        # Group events by category
        categories = {}
        for event in all_events:
            category = event['type']
            if category not in categories:
                categories[category] = []
            categories[category].append(event['content'])
        
        for category, items in categories.items():
            report += f"\n#### {category.title()} ({len(items)})\n"
            for item in set(items):  # Remove duplicates
                report += f"- {item}\n"
        
        # Update heartbeat state
        self.update_heartbeat_state({'last_memory_review': datetime.now().timestamp()})
        
        return report
    
    def check_memory_health(self) -> Dict:
        """Analyze memory system integrity and health"""
        health = {
            'status': 'healthy',
            'issues': [],
            'last_daily_update': None,
            'memory_file_exists': False,
            'heartbeat_exists': False
        }
        
        # Check daily memory files
        recent_files = self.get_daily_files(3)
        if recent_files:
            newest_file = max(recent_files, key=lambda f: f.stat().st_mtime)
            health['last_daily_update'] = datetime.fromtimestamp(newest_file.stat().st_mtime).isoformat()
        else:
            health['issues'].append("No recent daily memory files found")
        
        # Check long-term memory file
        if self.memory_file.exists():
            health['memory_file_exists'] = True
        else:
            health['issues'].append("Long-term memory file (MEMORY.md) missing")
        
        # Check heartbeat file
        if self.heartbeat_file.exists():
            health['heartbeat_exists'] = True
            try:
                with open(self.heartbeat_file) as f:
                    state = json.load(f)
                    if 'lastChecks' in state:
                        health['last_check_status'] = state['lastChecks']
            except Exception as e:
                health['issues'].append(f"Heartbeat file error: {e}")
        else:
            health['issues'].append("Heartbeat state file missing")
        
        if health['issues']:
            health['status'] = 'needs_attention'
        
        return health
    
    def update_heartbeat_state(self, updates: Dict):
        """Update heartbeat state file"""
        state = {}
        if self.heartbeat_file.exists():
            try:
                with open(self.heartbeat_file) as f:
                    state = json.load(f)
            except Exception:
                pass
        
        state.update(updates)
        state['last_updated'] = datetime.now().isoformat()
        
        with open(self.heartbeat_file, 'w') as f:
            json.dump(state, f, indent=2)
    
    def create_missing_files(self):
        """Create missing essential memory files"""
        created_files = []
        
        # Create MEMORY.md if missing
        if not self.memory_file.exists():
            self.memory_file.write_text("""# Brian's Long-Term Memory - Curated Intelligence

## Memory Setup
This file was created automatically to establish long-term memory storage.

## Instructions
This file maintains curated intelligence about Brian, projects, and preferences.
It is loaded automatically for main sessions and provides continuity across restarts.
""")
            created_files.append("MEMORY.md")
        
        # Create heartbeat state if missing
        if not self.heartbeat_file.exists():
            state = {
                "lastChecks": {},
                "sessionCount": 0,
                "lastSessionDate": datetime.now().isoformat(),
                "memoryStatus": "healthy",
                "continuityLevel": "partial"
            }
            with open(self.heartbeat_file, 'w') as f:
                json.dump(state, f, indent=2)
            created_files.append("heartbeat-state.json")
        
        return created_files
    
    def generate_memory_report(self) -> str:
        """Generate comprehensive memory system report"""
        health = self.check_memory_health()
        daily_files = self.get_daily_files(30)
        
        report = f"""
# Memory System Report - {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

## System Health
- Status: {health['status']}
- Memory file: {'✅' if health['memory_file_exists'] else '❌'}
- Heartbeat: {'✅' if health['heartbeat_exists'] else '❌'}
- Daily files: {len(daily_files)}

## Issues Identified
"""
        if health['issues']:
            for issue in health['issues']:
                report += f"- ⚠️ {issue}\n"
        else:
            report += "- No issues detected\n"
        
        report += f"""
## Recent Activity
- Last daily update: {health.get('last_daily_update', 'Unknown')}
- Sessions tracked: Last 30 days
"""
        
        return report

def main():
    """Run memory management operations"""
    manager = MemoryManager()
    
    # Check command line args
    import sys
    if len(sys.argv) > 1:
        command = sys.argv[1]
        
        if command == "health":
            print(manager.generate_memory_report())
        
        elif command == "consolidate":
            days = int(sys.argv[2]) if len(sys.argv) > 2 else 14
            report = manager.update_long_term_memory(days)
            print(report)
        
        elif command == "fix":
            created = manager.create_missing_files()
            if created:
                print(f"Created missing files: {', '.join(created)}")
            else:
                print("No missing files detected")
        
        elif command == "daily":
            # Process today's daily file
            today = datetime.now().strftime('%Y-%m-%d')
            today_file = manager.memory_dir / f"{today}.md"
            
            if today_file.exists():
                content = today_file.read_text()
                events = manager.extract_key_events(content)
                print(f"Extracted {len(events)} events from today")
                
                for event in events:
                    print(f"[{event['type']}] {event['content'][:80]}...")
            else:
                print("No daily file for today found")
        
        else:
            print("Unknown command. Use: health, consolidate [days], fix, daily")
    else:
        print(manager.generate_memory_report())

if __name__ == "__main__":
    main()