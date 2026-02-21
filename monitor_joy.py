import imaplib
import email
from email.header import decode_header
import datetime

# Configuration
EMAIL_USER = "henry.ops.iokai@gmail.com"
EMAIL_PASS = "muixqszczxvotcua"
SEARCH_SENDER = "cristejoycalosor13@gmail.com"

def check_emails():
    try:
        # Connect to Gmail IMAP
        mail = imaplib.IMAP4_SSL("imap.gmail.com")
        mail.login(EMAIL_USER, EMAIL_PASS)
        mail.select("inbox")

        # Search for emails from the specific sender
        status, messages = mail.search(None, f'FROM "{SEARCH_SENDER}"')
        
        if status != "OK" or not messages[0]:
            print("NO_NEW_EMAILS")
            return

        # Get list of message IDs
        msg_ids = messages[0].split()
        
        # Look at the most recent 10 to be safe
        latest_ids = msg_ids[-10:]
        
        found_new = False
        for msg_id in reversed(latest_ids):
            status, data = mail.fetch(msg_id, "(RFC822)")
            if status != "OK":
                continue
            
            raw_email = data[0][1]
            msg = email.message_from_bytes(raw_email)
            
            # Decode subject
            subject, encoding = decode_header(msg["Subject"])[0]
            if isinstance(subject, bytes):
                subject = subject.decode(encoding if encoding else "utf-8")
            
            # Get Date
            date_str = msg.get("Date")
            
            # Extract body
            body = ""
            if msg.is_multipart():
                for part in msg.walk():
                    content_type = part.get_content_type()
                    content_disposition = str(part.get("Content-Disposition"))
                    if content_type == "text/plain" and "attachment" not in content_disposition:
                        payload = part.get_payload(decode=True)
                        if payload:
                            body = payload.decode()
                            break
            else:
                payload = msg.get_payload(decode=True)
                if payload:
                    body = payload.decode()

            print(f"--- EMAIL START ---")
            print(f"ID: {msg_id.decode()}")
            print(f"Date: {date_str}")
            print(f"Subject: {subject}")
            print(f"Body: {body[:1000]}")
            print(f"--- EMAIL END ---")
            found_new = True

        if not found_new:
            print("NO_NEW_EMAILS")

        mail.close()
        mail.logout()

    except Exception as e:
        print(f"ERROR: {str(e)}")

if __name__ == "__main__":
    check_emails()
