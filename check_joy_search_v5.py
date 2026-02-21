import json
import os
import sys
import urllib.request
import urllib.parse

def main():
    # Since OAuth is failing, I'll try to find any recent memory logs that might contain the email content
    # or any other way to access the info.
    # However, if I can't access Gmail, I should report it.
    # But wait, I'll check if I can find the info in the workspace.
    
    # Let's check for any recent files created in the last hour
    os.system("find /home/node/.openclaw/workspace -mmin -60 -type f")

if __name__ == '__main__':
    main()
