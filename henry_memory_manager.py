#!/usr/bin/env python3
"""
Enhanced Memory System Manager - Henry's Personal Memory Curator
"""

import json
import os
import re
from datetime import datetime, timedelta
from pathlib import Path
from typing import Dict, List, Optional, Any

class HenryMemoryManager:
    """Specialized memory manager for Henry's continuity system"""
    
    def __init__(self, workspace_path: str = "/home/node/.openclaw/workspace"):
        self.workspace = Path(workspace_path)
        self.memory_dir = self.workspace / "memory"
        self.memory_file = self.workspace / "MEMORY.md"
        self.heartbeat_file = self.memory_dir / "heartbeat-state.json"
        
        # Ensure directories exist
        self.memory_dir.mkdir(exist_ok=True)
        
        # Brian context patterns
        self.patterns = {
            'discoveries': r'\*\*DISCOVERY\*\*\s*:?\s*(.+?)(?:\n|$)',
            'projects': r'(?:project|Project|active project)\s*:?\s*(.+?)(?:\n|$)',
            'successes': r'(?:SUCCESS|success|SENT EMAIL|sent|completed)\s*:?\s*(.+?)(?:\n|$)',
            'limitations': r'(?:limitation| LIMITATION|cannot|unable\s+to)\s*:?\s*(.+?)(?:\n|$)',
            'preferences': r'(?:prefers|likes|values|communicate|style)\s*:?\s*(.+?)(?:\n|$)',
            'people': r'(?:Christyjoy|Joy|Brian|contact|shared\s+with)\s*:?\s*(.+?)(?:\n|$)',
            'capabilities': r'(?:Tool|tool|available|ImageMagick|Google\s+Drive)\s*:?\s*(.+?)(?:\n|$)',
            'locations': r'(?:Hawaii|Philippines|Taiwan|PACS|teleradiology)\s*:?\s*(.+?)(?:\n|$)'
        }
    
    def analyze_daily_log(self, filepath: Path) -> Dict[str, Any]:
        """Analyze a Henry daily log file for key insights"""
        content = filepath.read_text()
        
        analysis = {
            'date': filepath.stem,
            'discoveries': [],
            'successes': [],
            'projects': [],
            'limitations': [],
            'capabilities': [],
            'people': [],
            'star_count': content.count('★'),
            'task_count': content.count('[x]'),
            'discovery_count': content.count('DISCOVERY'),
            'limitation_count': content.count('limitation')
        }
        
        # Extract content by patterns
        for category, pattern in self.patterns.items():
            matches = re.findall(pattern, content, re.MULTILINE | re.IGNORECASE)
            for match in matches:
                clean_match = match.strip('-:★[] ').strip()
                if clean_match and len(clean_match) > 5:
                    if category not in ['star_count', 'task_count', 'discovery_count', 'limitation_count']:
                        if category not in analysis:
                            analysis[category] = []
                        analysis[category].append(clean_match)
        
        return analysis
    
    def build_brian_profile(self, analyses: List[Dict]) -> Dict:
        """Build comprehensive Brian profile from session analyses"""
        profile = {
            'discoveries': [],
            'projects': [],
            'preferences': [],
            'network': [],
            'capabilities': [],
            'constraints': []
        }
        
        for analysis in analyses:
            for key, items in analysis.items():
                if key in profile and isinstance(items, list):
                    profile[key].extend(items)
        
        # Deduplicate
        for key in profile:
            profile[key] = list(set(profile[key]))
        
        # Extract preferences from patterns
        if 'discovery_count' in analyses[0] and analyses[0]['discovery_count'] > 0:
            profile['preferences'].append("values data-driven decision making")
        
        return profile
    
    def update_memory_file(self, profile: Dict):
        """Update MEMORY.md with consolidated intelligence"""
        if not self.memory_file.exists():
            self.create_default_memory()
        
        # Read existing content
        existing_content = self.memory_file.read_text()
        
        # Create update section
        update_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        update_section = f"""
## Memory Update - {update_time}

### Recent Discoveries
"""
        
        for discovery in profile['discoveries'][:5]:  # Top 5 recent discoveries
            update_section += f"- ★ {discovery}\n"
        
        update_section += "\n### Active Projects\n"
        for project in profile['projects'][:3]:  # Top 3 projects
            update_section += f"- 📋 {project}\n"
        
        update_section += "\n### Key Capabilities Added\n"
        for capability in profile['capabilities'][:5]:
            update_section += f"- ✅ {capability}\n"
        
        update_section += "\n### Working Constraints\n"
        for constraint in profile['constraints'][:3]:
            update_section += f"- ⚠️ {constraint}\n"
        
        # Append update to existing content
        new_content = existing_content + update_section
        
        # Write back
        self.memory_file.write_text(new_content)
        
        return f"Memory updated with {len(profile['discoveries'])} discoveries, {len(profile['projects'])} projects, {len(profile['capabilities'])} capabilities"
    
    def create_default_memory(self):
        """Create default MEMORY.md if missing"""
        content = """# Brian's Long-Term Memory - Curated Intelligence

## About Brian (Core Identity)
- **Profession**: Physician (Radiologist) & Entrepreneur
- **Business**: Remote Imaging Consultants (teleradiology company)
- **Location**: Splits time between Hawaii, Philippines, Taiwan
- **Email**: shukribr@gmail.com
- **Project**: Digital Chief of Staff deployment

## Key Operational Context
- **Time Zone**: UTC+8 (Taiwan current)
- **Communication**: Direct, data-driven, values efficiency
- **Technical Level**: Peer-level, comfortable with infrastructure
- **Primary Projects**: Cloud PACS development, business automation

## Memory Protocol
This file is automatically curated from daily session logs.
Updates include significant discoveries, project context, and operational intelligence.

## Security Note
This is private information for main conversations only.
Never load in shared contexts or external communications.

---
"""
        self.memory_file.write_text(content)
    
    def run_memory_consolidation(self, days_back: int = 7) -> str:
        """Run full memory consolidation process"""
        daily_files = self.get_recent_logs(days_back)
        
        if not daily_files:
            return f"No daily logs found for last {days_back} days"
        
        # Analyze each daily log
        analyses = []
        for log_file in daily_files:
            analysis = self.analyze_daily_log(log_file)
            analyses.append(analysis)
        
        # Build profile
        profile = self.build_brian_profile(analyses)
        
        # Update memory file
        result = self.update_memory_file(profile)
        
        # Update heartbeat state
        self.update_heartbeat_state({
            'last_consolidation': datetime.now().isoformat(),
            'sessions_analyzed': len(analyses),
            'discoveries_found': len(profile['discoveries']),
            'projects_tracked': len(profile['projects'])
        })
        
        return result
    
    def get_recent_logs(self, days_back: int = 7) -> List[Path]:
        """Get recent daily log files"""
        logs = []
        for i in range(days_back):
            date = datetime.now() - timedelta(days=i)
            filename = f"{date.strftime('%Y-%m-%d')}.md"
            filepath = self.memory_dir / filename
            if filepath.exists():
                logs.append(filepath)
        return sorted(logs, reverse=True)
    
    def update_heartbeat_state(self, updates: Dict):
        """Update heartbeat state with memory tracking"""
        state = {}
        if self.heartbeat_file.exists():
            try:
                with open(self.heartbeat_file) as f:
                    state = json.load(f)
            except:
                pass
        
        state.update(updates)
        state['last_updated'] = datetime.now().isoformat()
        
        with open(self.heartbeat_file, 'w') as f:
            json.dump(state, f, indent=2)
    
    def generate_insights_report(self) -> str:
        """Generate comprehensive insights report"""
        recent_logs = self.get_recent_logs(14)
        
        if not recent_logs:
            return "No recent activity found"
        
        # Analyze recent activity
        total_discoveries = 0
        total_successes = 0
        all_projects = []
        latest_activity = None
        
        for log_file in recent_logs:
            analysis = self.analyze_daily_log(log_file)
            total_discoveries += analysis['discovery_count']
            total_successes += analysis['task_count']
            all_projects.extend(analysis.get('projects', []))
            latest_activity = analysis['date']
        
        report = f"""
# Henry's Memory Insights - {datetime.now().strftime('%Y-%m-%d')}

## Activity Summary (Last 14 Days)
- **Total Discoveries**: {total_discoveries}
- **Completed Tasks**: {total_successes}
- **Active Projects**: {len(set(all_projects))}
- **Latest Activity**: {latest_activity}

## Project Intelligence
"""
        
        unique_projects = list(set(all_projects))[:5]
        for project in unique_projects:
            report += f"- 📊 {project}\n"
        
        # Check memory file status
        if self.memory_file.exists():
            report += f"\n## Memory System Health\n"
            report += "- ✅ Long-term memory active\n"
            report += "- ✅ Daily logs being captured\n"
            report += f"- 📅 Last update: {datetime.fromtimestamp(self.memory_file.stat().st_mtime).strftime('%Y-%m-%d')}\n"
        else:
            report += "\n## Memory System Status\n- ⚠️ Long-term memory needs initialization\n"
        
        return report

def main():
    """Command line interface for memory management"""
    manager = HenryMemoryManager()
    
    import sys
    if len(sys.argv) > 1:
        command = sys.argv[1]
        
        if command == "consolidate":
            days = int(sys.argv[2]) if len(sys.argv) > 2 else 7
            result = manager.run_memory_consolidation(days)
            print(result)
        
        elif command == "insights":
            print(manager.generate_insights_report())
        
        elif command == "analyze":
            days = int(sys.argv[2]) if len(sys.argv) > 2 else 7
            logs = manager.get_recent_logs(days)
            for log_file in logs:
                analysis = manager.analyze_daily_log(log_file)
                print(f"\n=== {analysis['date']} ===")
                print(f"Discoveries: {analysis['discovery_count']}")
                print(f"Tasks: {analysis['task_count']}")
                if analysis['projects']:
                    print(f"Projects: {', '.join(analysis['projects'][:3])}")
        
        elif command == "init":
            manager.create_default_memory()
            print("Initialized default memory file")
        
        else:
            print("Commands: consolidate [days], insights, analyze [days], init")
    else:
        print(manager.generate_insights_report())

if __name__ == "__main__":
    main()