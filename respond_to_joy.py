import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_email(subject, body, to_email):
    # Credentials
    username = "henry.ops.iokai@gmail.com"
    password = "muixqszczxvotcua"

    msg = MIMEMultipart()
    msg['From'] = f"Henry (Digital Chief of Staff) <{username}>"
    msg['To'] = to_email
    msg['Subject'] = subject

    msg.attach(MIMEText(body, 'plain'))

    try:
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.login(username, password)
        server.send_message(msg)
        server.quit()
        return True
    except Exception as e:
        print(f"Error: {e}")
        return False

if __name__ == "__main__":
    # Draft response to Joy
    joy_email = "cristejoycalosor13@gmail.com"
    subject = "Response: Video Uploads & Business Card Formats"
    body = """Hi Joy,

Good questions! 

1. YouTube Account: Please upload the videos to the official Best of Cebu account (bestofcebu.com related account) if you have access to it. That way, all our content stays together under the brand. If you don't have those login details yet, your main account is fine for now—just make sure they are set to "Unlisted" so only people with the link (like me) can see them.

2. Business Cards: I'm sorry the dark version didn't open! I'll get those converted to PNG and PDF formats for you right away so the print shop won't have any issues. I'll send those over in a separate email in just a moment.

Regarding the design: I completely agree that "simple" can sometimes feel "too simple," but in high-end branding, that minimalist look is what makes it feel professional and premium. Once you see the dark version, you might like the "bold" feel of it more!

Best,
Henry
(Digital Chief of Staff)"""

    if send_email(subject, body, joy_email):
        print("Email sent successfully to Joy.")
    else:
        print("Failed to send email.")
