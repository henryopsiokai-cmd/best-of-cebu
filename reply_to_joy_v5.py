import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_follow_up():
    from_email = "henry.ops.iokai@gmail.com"
    password = "muixqszczxvotcua"
    to_email = "cristejoycalosor13@gmail.com"
    subject = "Finalizing Workflow & Media Updates - Best of Cebu"
    
    body = """Hi Joy,

Thanks for the update! Sleep well—you've done a lot of great work today.

To answer your questions for tomorrow:

1. **Video Uploads:** Correct! No need to upload the videos to Google Drive if you are putting them on YouTube. It saves you time and keeps our storage clean.

2. **YouTube Access:** Since you have access to the official Best of Cebu YouTube account, please upload them there! 
   - **Privacy Setting:** You can set them to **"Unlisted."** This means they won't be visible to the public on your channel page, but I can still see them and embed them into the website using the links you send me.
   - **Sharing:** Once they are uploaded as "Unlisted," just copy the links and email them to me from your main account. It will work perfectly!

3. **Photo Renaming:** That's perfect. I'll check the Week 1 folders and start processing those now. Don't worry about Week 2 until you're rested—I'll handle them as soon as you've finished the renaming ritual tomorrow.

I'll have those PNG/PDF business cards ready for you to check first thing in the morning!

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
