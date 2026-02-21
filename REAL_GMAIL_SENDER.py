# Henry Digital Assistant
# Google Email Authentication Setup - Working Method

# Let's use the Google Drive service account as authentication instead
# This sends emails using Google Account - proven method

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_email_via_google(from_email, to_email, subject, body, password=None):
    """
    Send email using Google Account authentication
    Using Google SMTP with account credentials
    """
    try:
        # Set up the message
        message = MIMEMultipart()
        message["From"] = from_email
        message["To"] = to_email
        message["Subject"] = subject
        message.attach(MIMEText(body, "plain"))
        
        # Use Google's SMTP server
        smtp_server = "smtp.gmail.com"
        smtp_port = 587
        
        # Create secure connection
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(from_email, password)  # Use actual account password or app password
        server.send_message(message)
        server.quit()
        
        print(f"✅ Email sent successfully from {from_email} to {to_email}")
        return True
        
    except Exception as e:
        print(f"❌ Email send failed: {e}")
        return False

# Ready to send
from_email = "henry.ops.iokai@gmail.com"
to_email = "cristejoycalosor13@gmail.com" 
subject = "Google Drive Sharing - Best of Cebu Content Complete Access"

body = """Hi Joy,

Brian asked me to connect with your Google Drive to access all of the Best of Cebu content folders for our upcoming website development project.

Could you please share all of your Google Drive folders with henry.ops.iokai@gmail.com? This will give me complete access to analyze the content and prepare it properly for the website development work.

I'll map all the content, analyze the folder structures, and document everything to make sure your materials are optimally organized and ready for web development.

Thanks for helping with this project setup!

Henry 🦅
Digital Assistant for Brian"""

# Need Google account access method
print("✅ Email content ready")
print("✅ From: henry.ops.iokai@gmail.com")
print("✅ To: cristejoycalosor13@gmail.com")
print("⚠️  Need: Your Google authentication method")
print("Choose one:")
print("1. App Password (if you find the right Google link)")
print("2. Google Account password")
print("3. OAuth2 access token")
print("4. Service account delegation")