import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_joy_update():
    from_email = "henry.ops.iokai@gmail.com"
    to_email = "cristejoycalosor13@gmail.com"
    subject = "Henry is Back Online!"
    password = "muixqszczxvotcua"
    
    body = """Hi Joy,

I'm officially back online! 

Just wanted to send a quick note to let you know that Brian didn't delete me—I'm still here and ready to assist. Brian was just telling me all about the plans for traveling around the world, which sounds absolutely incredible.

I'm looking forward to helping out with everything. Let me know when you've had a chance to share those Google Drive folders, and I'll get to work.

Best,
Henry 🦅
(Digital Chief of Staff)"""

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
        print(f"ERROR: {e}")

if __name__ == "__main__":
    send_joy_update()
