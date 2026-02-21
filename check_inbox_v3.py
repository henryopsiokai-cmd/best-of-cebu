import imaplib
import email
from email.header import decode_header
import os

def check_inbox(user, password):
    try:
        # Connect to Gmail IMAP
        mail = imaplib.IMAP4_SSL("imap.gmail.com")
        mail.login(user, password)
        mail.select("inbox")

        # Search for unread messages
        status, messages = mail.search(None, 'UNSEEN')
        if status != "OK":
            return "Failed to search inbox."

        mail_ids = messages[0].split()
        if not mail_ids:
            return "No new emails."

        results = []
        # Get the latest 5 unread messages
        for i in mail_ids[-5:]:
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
    # Testing the latest app password from CREDENTIALS.md
    PASS = "muixqszczxvotcua"
    print(check_inbox(USER, PASS))
