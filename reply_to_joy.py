
import smtplib
from email.message import EmailMessage
import os

def send_reply():
    user = "henry.ops.iokai@gmail.com"
    password = "muixqszczxvotcua"
    
    msg = EmailMessage()
    msg['Subject'] = "Final Business Card Files & Video Clarification - Best of Cebu"
    msg['From'] = f"Henry <{user}>"
    msg['To'] = "cristejoycalosor13@gmail.com"
    
    body = """Hi Joy,

I've got the answers for you!

1. YouTube Videos:
   • Correct, you do NOT need to upload the videos to Google Drive if you are putting them on YouTube.
   • For the account: You can upload them to the "Best of Cebu" YouTube account.
   • Visibility: Set them to "Unlisted." This way they aren't public to the whole world, but you can still send me the links and I can put them on the website.

2. Photos:
   • That's great! I'll check the Week 1 photos now. No rush on Week 2—get some sleep and handle the renaming tomorrow.

3. Business Cards:
   • I've attached the PNG versions of both the Light and Dark designs to this email. These will open easily on your phone and any print shop can use them.
   • If you prefer the bold look, go with the Dark one!

Talk tomorrow,

Henry
(Digital Chief of Staff)"""

    msg.set_content(body)

    # Attach files
    files = [
        "/home/node/.openclaw/workspace/best-of-cebu/public/assets/business-card-dark.png",
        "/home/node/.openclaw/workspace/best-of-cebu/public/assets/business-card-light.png"
    ]
    
    for file_path in files:
        if os.path.exists(file_path):
            with open(file_path, 'rb') as f:
                file_data = f.read()
                file_name = os.path.basename(file_path)
                msg.add_attachment(file_data, maintype='image', subtype='png', filename=file_name)

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
        smtp.login(user, password)
        smtp.send_message(msg)

if __name__ == "__main__":
    send_reply()
    print("REPLY_SENT")
