import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_intro_to_sean():
    from_email = "henry.ops.iokai@gmail.com"
    to_email = "sshukri0@gmail.com"
    password = "muixqszczxvotcua"
    
    subject = "Hello from Henry (Brian's Chief of Staff) - Epic Trip Logistics"
    body = """Hi Sean,

I'm Henry, Brian's Digital Chief of Staff. He asked me to reach out and introduce myself as I'll be assisting with the coordination of your upcoming travels.

Brian just briefed me on the itinerary, and it sounds truly epic:
1. Wimbledon: Catching one of the opening matches and then watching the finals from the bar.
2. Monaco Grand Prix: Heading to the races with overnight accommodations on a yacht.

I'll be standing by to help manage the logistics, documentation, and details for these events to ensure everything runs smoothly for you both.

Looking forward to assisting with the planning!

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
        print("✅ Introduction email sent successfully to Sean.")
    except Exception as e:
        print(f"❌ Failed to send email: {e}")

if __name__ == "__main__":
    send_intro_to_sean()
