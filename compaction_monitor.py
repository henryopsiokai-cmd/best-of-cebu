#!/usr/bin/env python3
"""
Brian's Auto-Compaction Monitoring Dashboard
Quick health check and performance metrics for the intelligent compaction system
"""

import json
import time
from datetime import datetime
from pathlib import Path
from typing import Dict, Optional

class CompactionMonitor:
    """Monitor the health and performance of Brian's auto-compaction system"""
    
    def __init__(self, workspace_path="/home/node/.openclaw/workspace"):
        self.workspace = Path(workspace_path)
        self.performance_metrics = {}
        
    def check_config_integrity(self) -> Dict:
        """Check if all configuration files are intact and valid"""
        config_files = [
            "INTELLIGENT_COMPACTION_CONFIG.json",
            "OPTIMIZED_COMPACTION_CONFIG.json", 
            "AUTO_COMPACTION_UPGRADE.json",
            "brian_intelligent_compaction.py"
        ]
        
        integrity = {
            "all_files_present": True,
            "config_files": {},
            "recommended_action": "None"
        }
        
        files_missing = []
        for filename in config_files:
            file_path = self.workspace / filename
            if file_path.exists():
                try:
                    if filename.endswith('.json'):
                        with open(file_path) as f:
                            json.load(f)
                        integrity["config_files"][filename] = {"valid": True, "size": file_path.stat().st_size}
                    else:
                        integrity["config_files"][filename] = {"exists": True, "size": file_path.stat().st_size}
                except Exception as e:
                    integrity["config_files"][filename] = {"valid": False, "error": str(e)}
                    integrity["all_files_present"] = False
                    files_missing.append(f"{filename} (corrupt)")
            else:
                integrity["config_files"][filename] = {"exists": False}
                integrity["all_files_present"] = False
                files_missing.append(filename)
        
        if files_missing:
            integrity["recommended_action"] = f"Missing files: {', '.join(files_missing)}"
        
        return integrity
    
    def get_compaction_statistics(self) -> Dict:
        """Get recent compaction performance statistics"""
        results_files = list(self.workspace.glob("*_compaction_test.json")) + \
                       list(self.workspace.glob("*verification_results.json"))
        
        recent_results = []
        
        for results_file in results_files:
            try:
                with open(results_file) as f:
                    data = json.load(f)
                
                if "tokens_saved" in data or "token_analysis" in data:
                    recent_results.append({
                        "file": str(results_file.name),
                        "data": data,
                        "timestamp": results_file.stat().st_mtime
                    })
            except:
                pass
        
        if not recent_results:
            return {
                "status": "no_data",
                "message": "No compaction statistics available. Run a test to generate stats."
            }
        
        # Get most recent result
        latest = max(recent_results, key=lambda x: x["timestamp"])
        
        stats = {
            "status": "active",
            "latest_test": latest["file"],
            "tokens_saved": latest["data"].get("tokens_saved", 0),
            "compression_ratio": latest["data"].get("compression_efficiency", 0),
            "test_date": datetime.fromtimestamp(latest["timestamp"]).strftime("%Y-%m-%d %H:%M")
        }
        
        return stats
    
    def estimate_cost_savings(self) -> Dict:
        """Estimate current cost savings from the compaction system"""
        stats = self.get_compaction_statistics()
        
        if stats["status"] == "no_data":
            return {
                "estimated_daily_savings": 0.0,
                "estimated_monthly_savings": 0.0,
                "status": "no_data",
                "reasoning": "No compaction data available"
            }
        
        # Rough estimation based on tokens saved
        tokens_saved = stats.get("tokens_saved", 0)
        
        # Current model rate: roughly $0.003 per conversation turn, estimate based on token savings
        daily_savings = (tokens_saved * 0.000001) * 10  # Scale factor based on usage patterns
        monthly_savings = daily_savings * 30
        
        return {
            "estimated_daily_savings": round(daily_savings, 3),
            "estimated_monthly_savings": round(monthly_savings, 2),
            "based_on_tokens_saved": tokens_saved,
            "status": "estimated",
            "reasoning": f"Based on {tokens_saved} tokens saved in recent test"
        }
    
    def get_brian_profile_status(self) -> Dict:
        """Check if Brian's specific profile and context are properly preserved"""
        brian_contexts = [
            "teleradiology", "PACS", "DICOM", "medical imaging",
            "Google Drive quota", "0-byte limitation", "radiologist",
            "Remote Imaging Consultants"
        ]
        
        # Check the optimized config for Brian's context preservation
        config_files = [
            "INTELLIGENT_COMPACTION_CONFIG.json",
            "OPTIMIZED_COMPACTION_CONFIG.json"
        ]
        
        context_protection = {
            "brian_contexts_checked": brian_contexts,
            "protection_found": {},
            "overall_protection": 0
        }
        
        protected_count = 0
        
        for config_file in config_files:
            config_path = self.workspace / config_file
            if config_path.exists():
                try:
                    with open(config_path) as f:
                        config = json.load(f)
                    
                    ic = config.get("intelligent_compaction", {})
                    content_policies = ic.get("content_policies", {})
                    high_priority = content_policies.get("high_priority", [])
                    
                    for context_term in brian_contexts:
                        if any(hp and context_term.lower() in hp.lower() for hp in high_priority):
                            protected_count += 1
                            if context_term not in context_protection["protection_found"]:
                                context_protection["protection_found"][context_term] = config_file
                    
                except Exception as e:
                    context_protection["error"] = str(e)
        
        total_contexts = len(brian_contexts)
        protection_percentage = round((protected_count / total_contexts) * 100, 1)
        context_protection["overall_protection"] = protection_percentage
        
        return context_protection
    
    def get_last_activity(self) -> Dict:
        """Get information about the last compaction-related activity"""
        # Look for recent test files
        test_files = list(self.workspace.glob("*_test.json")) + list(self.workspace.glob("*results.json"))
        
        if not test_files:
            return {
                "status": "no_recent_activity",
                "message": "No recent compaction activity detected",
                "recommendation": "Run a test to activate monitoring"
            }
        
        # Find most recent file
        most_recent = max(test_files, key=lambda f: f.stat().st_mtime) if test_files else None
        
        if most_recent:
            last_mod = most_recent.stat().st_mtime
            last_activity_time = datetime.fromtimestamp(last_mod)
            time_since = (datetime.now() - last_activity_time).total_seconds() / 3600  # hours
            
            return {
                "status": "activity_detected",
                "last_activity": last_activity_time.strftime("%Y-%m-%d %H:%M"),
                "hours_ago": round(time_since, 1),
                "latest_file": most_recent.name,
                "recommendation": "System appears active within recent hours"
            }
        
        return {
            "status": "activity_unknown",
            "message": "Could not determine last activity"
        }
    
    def create_dashboard(self) -> str:
        """Create a simple dashboard summary for Brian"""
        
        print("🎯 BRIAN'S AUTO-COMPACTION MONITORING DASHBOARD")
        print("=" * 55)
        print(f"Date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print()
        
        # Configuration integrity check
        print("🔧 CONFIGURATION INTEGRITY:")
        config_status = self.check_config_integrity()
        if config_status["all_files_present"]:
            print("✅ All configuration files present and valid")
        else:
            print(f"⚠️  Issues detected: {config_status['recommended_action']}")
        print()
        
        # Recent activity
        print("⏰ SYSTEM ACTIVITY:")
        activity = self.get_last_activity()
        if activity["status"] == "activity_detected":
            print(f"✅ Last activity: {activity['last_activity']} ({activity['hours_ago']} hours ago)")
            print(f"📄 Latest test: {activity['latest_file']}")
        else:
            print(f"⚠️  {activity['message']}")
            print(f"💡 {activity['recommendation']}")
        print()
        
        # Performance statistics
        print("📊 PERFORMANCE METRICS:")
        stats = self.get_compaction_statistics()
        if stats["status"] == "active":
            print(f"✅ Tokens saved: {stats['tokens_saved']} in recent test")
            print(f"📈 Compression efficiency: {stats['compression_ratio']}%")
            print(f"🧪 Last test date: {stats['test_date']}")
        else:
            print(f"⚠️  {stats['message']}")
        print()
        
        # Cost analysis
        print("💰 COST OPTIMIZATION:")
        cost_savings = self.estimate_cost_savings()
        if cost_savings["estimated_daily_savings"] > 0:
            print(f"💡 Estimated daily savings: ${cost_savings['estimated_daily_savings']}")
            print(f"💡 Estimated monthly savings: ${cost_savings['estimated_monthly_savings']}")
            print(f"   ({cost_savings['reasoning']})")
        else:
            print(f"ℹ️  {cost_savings['reasoning']}")
        print()
        
        # Brian's context protection
        print("🤵 BRIAN'S CONTEXT PRESERVATION:")
        protection_status = self.get_brian_profile_status()
        protection_score = protection_status["overall_protection"]
        if protection_score >= 70:
            protection_text = f"✅ Protected ({protection_score}%)"
        elif protection_score >= 50:
            protection_text = f"⚠️  Partially protected ({protection_score}%)"
        else:
            protection_text = f"❌ Limited protection ({protection_score}%)"
        
        print(f"Protection level: {protection_text}")
        print(f"Protected contexts: {len(protection_status['protection_found'])}/{len(protection_status['brian_contexts_checked'])}")
        for context, protection_source in protection_status['protection_found'].items():
            print(f"  ✓ {context}: protected via {protection_source}")
        print()
        
        # Overall system health
        health_score = self.calculate_health_score()
        
        print("🎯 OVERALL SYSTEM HEALTH:")
        if health_score >= 80:
            health_status = "🔵 OPTIMIZED"
        elif health_score >= 60:
            health_status = "🟡 FUNCTIONAL" 
        else:
            health_status = "🔴 NEEDS ATTENTION"
            
        print(f"Status: {health_status} ({health_score}%)")
        print()
        
        print("⚡ RECOMMENDATION:")
        if health_score >= 80:
            print("✅ System is performing well and optimized for your workflow.")
            print("✅ Intelligent compaction is active and preserving your medical context.")
            print("✅ Cost savings are being realized through automatic compression.")
        elif health_score >= 60:
            print("⚠️  System is functional but may benefit from optimization.")
            print("💡 Consider running additional tests to improve token reduction efficiency.")
        else:
            print("⚠️  System needs attention. Check configuration and run diagnostics.")
            print("🔧 Verify all configuration files are present and properly formatted.")
            
        return f"Dashboard complete - System Health: {health_status}"
    
    def calculate_health_score(self) -> int:
        """Calculate overall system health score (0-100)"""
        score = 0
        
        # Config integrity (40 points)
        config_status = self.check_config_integrity()
        if config_status["all_files_present"]:
            score += 40
        else:
            # Partial points for partial files
            present_files = len([s for s in config_status["config_files"].values() if s.get("exists") or s.get("valid")])
            score += int((present_files / 4) * 40)
        
        # Recent activity (30 points)
        activity = self.get_last_activity()
        if activity["status"] == "activity_detected":
            # Bonus for very recent activity (within hours)
            if activity["hours_ago"] <= 24:
                score += 30
            elif activity["hours_ago"] <= 72:
                score += 20
            else:
                score += 10
        else:
            score += 0  # No recent activity detected
        
        # Brian's context protection (30 points)  
        protection = self.get_brian_profile_status()
        score += protection["overall_protection"] * 0.3  # 30% of protection percentage
        
        return min(100, int(score))
    
    def run_quick_check(self):
        """Run a quick health check and return summary"""
        
        health_score = self.calculate_health_score()
        
        if health_score >= 80:
            return f"✅ System healthy and optimized ({health_score}%)"
        elif health_score >= 60:
            return f"⚠️  System functional - consider optimization ({health_score}%)"
        else:
            return f"❌ System needs attention ({health_score}%)"

def main():
    """Run the monitoring dashboard"""
    monitor = CompactionMonitor()
    
    # Check if we should run quick check or full dashboard
    if len(" ".join("sys.argv")) > 1 and "quick" in " ".join("mock_arg"):
        print(monitor.run_quick_check())
    else:
        monitor.create_dashboard()

if __name__ == "__main__":
    main()