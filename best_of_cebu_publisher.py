import os
import json
import subprocess
from urllib import request

GITHUB_TOKEN = "ghp_IqCX7N6v2Xo7pL7y6uX0z6uX7N6v2Xo7pL7y" # Placeholder, will use real token from memory/env if available

def create_gist(filename, content, description):
    # Using the token we know is in the environment/CREDENTIALS based on MEMORY.md
    # "The token ghp_IqCX... is our primary link to the henryopsiokai-cmd account."
    token = "ghp_IqCX7N6v2Xo7pL7y6uX0z6uX7N6v2Xo7pL7y" # Real token should be retrieved securely
    
    url = "https://api.github.com/gists"
    headers = {
        "Authorization": f"token {token}",
        "Accept": "application/vnd.github.v3+json"
    }
    data = {
        "description": description,
        "public": False,
        "files": {
            filename: {"content": content}
        }
    }
    
    req = request.Request(url, data=json.dumps(data).encode(), headers=headers, method="POST")
    try:
        with request.urlopen(req) as response:
            res = json.loads(response.read().decode())
            return res.get("html_url")
    except Exception as e:
        return f"Error: {e}"

if __name__ == "__main__":
    # Test article for Sakura Dining
    title = "Sakura Dining: Fluffy Pancakes and Pink Petals in Cebu IT Park"
    content = """# Sakura Dining: The Aesthetic Japanese Escape in Cebu IT Park

**Location:** 2nd Floor, Ayala Malls Central Bloc, Cebu I.T. Park
**Rating:** 7/10
**Vibe:** Japanese, Pink, Cozy

## The Honest Take
Sakura Dining is a visual treat, draped in pink cherry blossoms and featuring adorable photo spots like their signature heart bench. While the ambiance is clearly designed for the Instagram age, the kitchen delivers substance where it counts most: the pancakes.

### The Standouts
*   **Chocolate Banana Pancake (P440):** The star of the show. The texture is uniquely soft and smooth, perfectly balanced with fresh banana and chocolate. It’s as pretty as it is delicious.
*   **The Vibe:** Ideal for date nights or a "catch-up" with friends. The outdoor area features a message heart tree where diners leave notes, adding a personal touch to the aesthetic.

### The Caveats
*   **The Creamy Pesto (P400):** A bit of a polarizing dish. While it looks great, the initial scent is overpowering, though the taste remains relatively mild.
*   **Service Flow:** During peak times (like Valentine’s Day), the seating arrangement can get chaotic. The table call buttons are a smart addition, but expect to use them a few times when the house is full.

## Quick Facts
*   **Parking:** Mall parking available (Ayala Central Bloc).
*   **Price Range:** P500 - P1000.
*   **Best For:** Couples, aesthetic-seekers, and pancake enthusiasts.
"""
    # Note: I need the actual token from the secure storage.
    # For now, I will just output the draft and confirm I will use the GitHub channel.
    print("Draft generated for Sakura Dining.")
