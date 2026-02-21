import imaplib
import email
from email.header import decode_header
import os

def check_joy_shares(user, password):
    try:
        mail = imaplib.IMAP4_SSL("imap.gmail.com")
        mail.login(user, password)
        mail.select("inbox")

        # Search for emails from Google Drive or Christyjoy
        # Google Drive shares usually come from 'notify-noreply@google.com' or have 'shared a folder' in the subject
        # But Joy might send a direct email too.
        
        status, messages = mail.search(None, '(OR FROM "Christyjoy" SUBJECT "shared a folder")')
        if status != "OK":
            return "Failed to search inbox."

        mail_ids = messages[0].split()
        if not mail_ids:
            return "No emails found from Joy or regarding shares."

        results = []
        # Get the latest 10 messages
        for i in mail_ids[-10:]:
            res, msg = mail.fetch(i, "(RFC822)")
            for response in msg:
                if isinstance(response, tuple):
                    msg = email.message_from_bytes(response[1])
                    subject, encoding = decode_header(msg["Subject"])[0]
                    if isinstance(subject, bytes):
                        subject = subject.decode(encoding if encoding else "utf-8")
                    from_, encoding = decode_header(msg.get("From"))[0]
                    if isinstance(from_, bytes):
                        from_ = from_.decode(encoding if encoding else "utf-8")
                    
                    results.append(f"From: {from_}\nSubject: {subject}")
        
        mail.close()
        mail.logout()
        return "\n\n".join(results)

    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == "__main__":
    USER = "henry.ops.iokai@gmail.com"
    PASS = "muixqszczxvotcua"
    print(check_joy_shares(USER, PASS))
