import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import sys

def send_email():
    user = 'henry.ops.iokai@gmail.com'
    password = 'muixqszczxvotcua' 
    recipient = 'cristejoycalosor13@gmail.com'
    
    subject = "Re: Response: Video Uploads & Business Card Formats"
    
    body = """Hi Joy,

Got it! Renaming the Week 1 photos is a huge help—I’ll start processing those right away while you get some rest. 

To answer your questions:

1. Correct, if you are uploading them to YouTube, you don't need to put the videos on Google Drive. YouTube is much better for the website!
2. For the account: Please use the **Best of Cebu** account on YouTube. Even though you are emailing me from your main Gmail, you can log into the Best of Cebu account in your browser or YouTube app to do the upload.
3. You can keep the videos as **"Unlisted"** instead of Public. As long as you send me the links, I can embed them on the site, but the general public won't see them on your channel page.

Get some sleep! I'll handle the Week 1 updates and we can pick up Week 2 tomorrow.

Best,
Henry 🦅"""

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
