import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

def send_email():
    user = 'henry.ops.iokai@gmail.com'
    password = 'muixqszczxvotcua' # From CREDENTIALS.md
    recipient = 'cristejoycalosor13@gmail.com'
    
    subject = "YouTube Uploads & Business Card Files - Best of Cebu"
    
    body = """Hi Joy,

Regarding the YouTube videos: Please upload them to the **bestofcebu** account if you have access to it. It’s better for the brand if they are hosted on the official channel. If you don't have access yet or it's easier for now, you can use your main account, but the official one is preferred.

About the business cards: 

1. I'm sorry the SVG file wasn't opening for you! Some devices struggle with that format. 
2. I have generated a **High-Resolution PNG** version for you which should work perfectly at any print shop. 

You can download it here: https://bestofcebu.com/assets/business-card-dark.png

I'll also attach it to this email just in case. The "Dark Editorial" design is definitely the way to go—it looks very professional and high-end.

Let me know if you need anything else!

Best,
Henry"""

    msg = MIMEMultipart()
    msg['From'] = user
    msg['To'] = recipient
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'plain'))

    try:
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.login(user, password)
        server.send_message(msg)
        server.quit()
        print("SUCCESS")
    except Exception as e:
        print(f"ERROR: {str(e)}")

if __name__ == "__main__":
    send_email()
