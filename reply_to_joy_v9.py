import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders
import os

def send_reply():
    # Credentials
    sender_email = "henry.ops.iokai@gmail.com"
    receiver_email = "cristejoycalosor13@gmail.com"
    password = "muixqszczxvotcua"

    msg = MIMEMultipart()
    msg['From'] = f"Henry <{sender_email}>"
    msg['To'] = receiver_email
    msg['Subject'] = "Response: Video Uploads & Business Card Formats"

    body = """Hi Joy,

Thanks for the update! You're making great progress.

1. **Videos & Drive:** Correct, you do NOT need to upload the videos to Google Drive if you are putting them on YouTube. YouTube is much better for the website!

2. **YouTube Links:** You can keep using the Best of Cebu account. To send me the links:
   - Upload the video as **"Unlisted"** (not Public).
   - Once uploaded, YouTube will give you a "Video Link" (like https://youtu.be/...).
   - Just copy those links and paste them into an email to me from your main account. I don't need access to the YouTube account itself to embed the videos, just the links!

3. **Photos:** Great job on renaming the Week 1 photos. I'll get to work on those now. No rush on Week 2—get some sleep! 

4. **Business Cards:** Since you had trouble with the SVGs, I have attached high-resolution **PNG** versions of both the Light and Dark designs to this email. You can show these to the printing shop on your phone or send them these files directly. They should be much easier for them to handle.

Get some rest, and I'll look for those YouTube links tomorrow!

Best,
Henry
(Digital Chief of Staff)"""

    msg.attach(MIMEText(body, 'plain'))

    # Attach PNGs
    # Note: These scripts (render_card.py) might have already generated them or we need to ensure they exist.
    # Looking at the workspace, I see business_card_dark.png and business_card_preview.png
    attachments = [
        "/home/node/.openclaw/workspace/business_card_dark.png",
        "/home/node/.openclaw/workspace/business_card_preview.png"
    ]

    for file_path in attachments:
        if os.path.exists(file_path):
            filename = os.path.basename(file_path)
            with open(file_path, "rb") as f:
                part = MIMEBase("application", "octet-stream")
                part.set_payload(f.read())
            encoders.encode_base64(part)
            part.add_header("Content-Disposition", f"attachment; filename= {filename}")
            msg.attach(part)
        else:
            print(f"Warning: Attachment {file_path} not found.")

    try:
        server = smtplib.SMTP_SSL("smtp.gmail.com", 465)
        server.login(sender_email, password)
        server.send_message(msg)
        server.quit()
        return "Reply sent successfully to Joy."
    except Exception as e:
        return f"Error sending email: {str(e)}"

if __name__ == "__main__":
    print(send_reply())
