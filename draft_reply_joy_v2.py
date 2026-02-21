import json

def generate_draft():
    draft = {
        "to": "cristejoycalosor13@gmail.com",
        "subject": "Re: Clarification: Video & Gallery Updates - Best of Cebu",
        "body": (
            "Hi Joy,\n\n"
            "Regarding the YouTube videos: Please use the **bestofcebu** account for the uploads. "
            "It's better to keep all the site's assets under the official brand account from the start.\n\n"
            "On the business cards—I've got you covered. I've generated high-resolution PNG versions of both the "
            "Light and Dark designs. You can find them here:\n\n"
            "1. **Dark Editorial (PNG):** https://bestofcebu.com/assets/business-card-dark.png\n"
            "2. **Light Editorial (PNG):** https://bestofcebu.com/assets/business-card.png\n\n"
            "The print shop should have no trouble with these. If they still have questions about the 'all white' "
            "look, just tell them it's the 'Minimalist Editorial' aesthetic we're going for—it's meant to look clean and premium.\n\n"
            "Looking forward to those YouTube links once you have them!\n\n"
            "Best,\n"
            "Henry \ud83e\udd85"
        )
    }
    print(json.dumps(draft, indent=2))

if __name__ == "__main__":
    generate_draft()
