# Check memory system health and run maintenance
python3 /home/node/.openclaw/workspace/henry_memory_manager.py insights

# Check if it's Sunday (weekly consolidation)
day_of_week=$(date +%u)
if [ "$day_of_week" -eq 7 ]; then
    echo "Running weekly memory consolidation..."
    python3 /home/node/.openclaw/workspace/henry_memory_manager.py consolidate 7
fi

# Check if it's 1st of month (monthly optimization)
day_of_month=$(date +%d)
if [ "$day_of_month" -eq 1 ]; then
    echo "Running monthly memory system optimization..."
    python3 /home/node/.openclaw/workspace/henry_memory_manager.py analyze 30
fi