import imaplib
import email
from email.header import decode_header
import os

def search_all_today(user, password):
    try:
        mail = imaplib.IMAP4_SSL("imap.gmail.com")
        mail.login(user, password)
        mail.select("inbox")

        # Search for all emails from today (Feb 16 2026)
        # IMAP date format: DD-Mon-YYYY
        status, messages = mail.search(None, 'SINCE "16-Feb-2026"')
        if status != "OK":
            return "Failed to search inbox."

        mail_ids = messages[0].split()
        if not mail_ids:
            return "No emails found today."

        results = []
        for i in mail_ids:
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
    print(search_all_today(USER, PASS))
