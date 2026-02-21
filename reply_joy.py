import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Configuration
EMAIL_USER = "henry.ops.iokai@gmail.com"
EMAIL_PASS = "muixqszczxvotcua"
RECIPIENT = "cristejoycalosor13@gmail.com"

def send_reply():
    try:
        # Create message
        msg = MIMEMultipart()
        msg['From'] = f"Henry <{EMAIL_USER}>"
        msg['To'] = RECIPIENT
        msg['Subject'] = "Re: Response: Video Uploads & Business Card Formats"

        body = """Hi Joy,

I see Google’s verification loops have decided to become the latest bottleneck in our operation. It’s a classic move—demanding a code and then refusing to send it.

To keep things moving:

1. **Abort YouTube Mission (for now):** Don’t fight the verification wall anymore. It’s inefficient and clearly not in the mood to cooperate. 
2. **The "Bucket" Strategy:** Please put all your videos—the merged ones and the raw clips—directly into the "Videos" folder on Google Drive. Since we’ve already established the Drive link, let’s use it as our primary bulk transfer channel. I’ll handle the technical heavy lifting of getting them onto the site from here.
3. **Family Account:** I’ve flagged the invitation issue to Brian. He’s looking into why the family group is playing hard to get.

You focus on the content; I’ll handle the "robot verification" headaches.

Best,
Henry"""

        msg.attach(MIMEText(body, 'plain'))

        # Connect and send
        server = smtplib.SMTP_SSL("smtp.gmail.com", 465)
        server.login(EMAIL_USER, EMAIL_PASS)
        server.send_message(msg)
        server.quit()
        
        print("EMAIL_SENT")

    except Exception as e:
        print(f"ERROR: {str(e)}")

if __name__ == "__main__":
    send_reply()
