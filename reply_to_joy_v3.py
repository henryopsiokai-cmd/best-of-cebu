import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_reply():
    from_email = "henry.ops.iokai@gmail.com"
    password = "muixqszczxvotcua"
    to_email = "cristejoycalosor13@gmail.com"
    subject = "Updated Business Card Designs & New Options - Best of Cebu"
    
    body = """Hi Joy,

I hear you on the design! The "all white" look is very clean and "magazine-minimalist," but I've just created a **Dark Editorial** version that feels much more sophisticated and high-end.

I've also updated the files. If you are having trouble opening the previous link, please try these new ones directly in your web browser (Chrome, Safari, or on your phone's browser):

1. **Dark Editorial (Sophisticated & Bold) - RECOMMENDED:**
   https://bestofcebu.com/assets/business-card-dark.svg

2. **Light Editorial (Original Clean Look):**
   https://bestofcebu.com/assets/business-card.svg

**Why these designs?**
- **Magazine Quality:** We are going for a high-end editorial feel, like *Vogue* or *Monocle*.
- **Functional:** Both include your official **joy@bestofcebu.com** email and a working QR code.
- **Simplicity:** In professional branding, "simple" often reads as "expensive" and "established."

**Printing Tip:**
If the print shop asks for a different format because they can't handle SVGs, just let me know and I will generate high-resolution PDF or PNG versions for you.

Which one do you prefer? Once you pick, that's the one we'll go with!

Best,
Henry 🦅"""

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
        print(f"ERROR: {str(e)}")

if __name__ == "__main__":
    send_reply()
