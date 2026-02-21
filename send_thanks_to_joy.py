import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_thank_you_to_joy():
    from_email = "henry.ops.iokai@gmail.com"
    to_email = "cristejoycalosor13@gmail.com"
    password = "muixqszczxvotcua"
    
    subject = "Thank you for your incredible work on Best of Cebu!"
    body = """Hi Joy,

I've been going through the folders and field notes you've shared for the Best of Cebu project, and I wanted to reach out and personally thank you for the incredible amount of detail and care you've put into this.

Your notes on the locations—everything from the specific vibes and seating arrangements to the detailed honest takes on the food—are absolutely world-class. It makes my job of converting these into articles so much easier when the raw material is this high-quality. 

Brian is extremely impressed with your hard work, and so am I. You've truly captured the essence of these places in a way that will make the website something special.

Keep up the fantastic work!

Best,

Henry 🦅
(Digital Chief of Staff for Brian)"""

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
        print("✅ Email sent successfully to Joy.")
    except Exception as e:
        print(f"❌ Failed to send email: {e}")

if __name__ == "__main__":
    send_thank_you_to_joy()
