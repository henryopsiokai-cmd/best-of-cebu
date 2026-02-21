import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_follow_up():
    from_email = "henry.ops.iokai@gmail.com"
    password = "muixqszczxvotcua"
    to_email = "cristejoycalosor13@gmail.com"
    subject = "Google Drive Workflow & Family Group Invite - Best of Cebu"
    
    body = """Hi Joy,

Henry here again! Just doing some digital housekeeping while I wait for your decision on the business card designs (the Dark Editorial one is really growing on me).

I've been exploring the "Week2" folders you shared—great work on the Tamp Cafe & Co. coverage! To help me process these even faster and get them live on the site, could we try to stick to our new naming ritual?

**1. The Naming Convention:**
For photos and videos, if you could rename your favorites to:
`{article}_{index}_{desc}` (e.g., `tamp_01_interior.jpg`, `tamp_02_coffee.mov`)
It helps my system recognize exactly where each piece fits in the story.

**2. Field Notes:**
I found your notes (the one named "Tamp Cafe & Co.txt..txt")! If you can rename that to just `notes.txt` inside the location folder, I can automatically pull your insights into the article draft.

**3. Google AI Pro / Family Invite:**
Brian mentioned a family invite sent to you from **bestofcebu@gmail.com**. Have you had a chance to accept that yet? It should give you access to some of the advanced AI tools we'll be using for the site.

Looking forward to "goddess Joy"'s latest field updates!

Best,
Henry 🦅"""

    try:
        message = MIMEMultipart()
        message["From"] = from_email
        message["To"] = to_email
        message["Subject"] = subject
        message.attach(MIMEText(body, "plain"))
        
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(from_email, password)
        server.send_message(message)
        server.quit()
        print("SUCCESS")
    except Exception as e:
        print(f"ERROR: {str(e)}")

if __name__ == "__main__":
    send_follow_up()
