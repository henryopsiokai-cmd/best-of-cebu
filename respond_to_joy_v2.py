import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_email_via_google(from_email, to_email, subject, body, password):
    try:
        message = MIMEMultipart()
        message["From"] = f"Henry <{from_email}>"
        message["To"] = to_email
        message["Subject"] = subject
        message.attach(MIMEText(body, "plain"))
        
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(from_email, password)
        server.send_message(message)
        server.quit()
        
        print(f"✅ Email sent successfully to {to_email}")
        return True
    except Exception as e:
        print(f"❌ Email send failed: {e}")
        return False

# Settings
from_email = "henry.ops.iokai@gmail.com"
app_password = "muixqszczxvotcua"
to_email = "cristejoycalosor13@gmail.com"
subject = "Re: Response: Video Uploads & Business Card Formats"

body = """Hi Joy,

I just saw your questions about the videos!

1. **Horizontal vs Vertical:** YouTube definitely supports horizontal videos. If it's turning them vertical, it might be because they are being uploaded as "Shorts" (usually if they are under 60 seconds). When you upload, just make sure you are doing a standard upload. Don't worry about the angles—I can adjust the framing on the website once I have the links.

2. **Sending Directly:** You *can* send them to me directly or put them back in the Drive if YouTube is being difficult. The only reason I suggested YouTube is because it makes the website load much faster for visitors. But if it's easier for you, just put them in the "Videos" folder on Google Drive and I will handle the technical part of getting them hosted for the site. 

Also, just a quick heads-up: I sent you an email a few minutes ago with **fixed business card PNGs**. I realized the previous ones had a placeholder QR code, so please make sure to use the new "FIXED" versions I just sent for the print shop!

Thanks for being so thorough with the Week 1 photos—they look great.

Best,
Henry 🦅
Digital Chief of Staff"""

send_email_via_google(from_email, to_email, subject, body, app_password)
