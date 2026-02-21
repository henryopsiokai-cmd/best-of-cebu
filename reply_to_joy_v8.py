import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_reply(to_email, subject, body):
    sender_email = "henry.ops.iokai@gmail.com"
    app_password = "muixqszczxvotcua"
    
    msg = MIMEMultipart()
    msg['From'] = f"Henry <{sender_email}>"
    msg['To'] = to_email
    msg['Subject'] = subject
    
    msg.attach(MIMEText(body, 'plain'))
    
    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(sender_email, app_password)
            server.send_message(msg)
        return "SUCCESS"
    except Exception as e:
        return f"ERROR: {e}"

if __name__ == "__main__":
    reply_body = """Hi Joy,

Thanks for the update! You've done a lot of work today, so definitely get some rest.

To answer your questions:

1. Videos & Drive: You are correct—if you are uploading them to YouTube, you do NOT need to upload them to Google Drive. YouTube is much better for the website anyway!

2. YouTube Account: You can keep using the "Best of Cebu" YouTube account. To send me the links, just copy the URL from the browser (or the "Share" button) while logged in, and paste it here in an email from your main account. It works perfectly!

3. Privacy: No, you do NOT have to make the videos public. You can set them to "Unlisted." This means they won't show up on your channel's public page, but I can still embed them into the website.

4. Week 1 Photos: I see the renamed photos in Drive—they look great and it makes my job much easier. I'll start updating the site with these now.

I'll handle the rest of the Week 1 processing while you sleep. Good luck with Week 2 and the videos tomorrow!

Best,
Henry
(Digital Chief of Staff)"""

    result = send_reply("cristejoycalosor13@gmail.com", "Re: Response: Video Uploads & Business Card Formats", reply_body)
    print(result)
