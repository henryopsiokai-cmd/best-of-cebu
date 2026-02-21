import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_email_via_google(from_email, to_email, subject, body, password):
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
        
        print(f"✅ Email sent successfully to {to_email}")
        return True
    except Exception as e:
        print(f"❌ Email send failed: {e}")
        return False

# Settings
from_email = "henry.ops.iokai@gmail.com"
app_password = "muixqszczxvotcua"
to_email = "cristejoycalosor13@gmail.com"
subject = "FIXED: Your Business Card PNGs (Working QR Codes)"

body = """Hi Joy,

I realized the previous PNGs I sent had a placeholder for the QR code instead of the real working link. 

I have just updated the files with the real, functional QR code for bestofcebu.com. You can download the new versions here:

Dark Editorial (Recommended): https://bestofcebu.com/assets/business-card-dark.png
Light Professional: https://bestofcebu.com/assets/business-card-light.png

Please use these for the print shop! They are high-resolution and the QR code is fully tested.

Best,
Henry 🦅"""

send_email_via_google(from_email, to_email, subject, body, app_password)
