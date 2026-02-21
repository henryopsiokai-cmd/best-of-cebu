import imaplib
import email
from email.header import decode_header
import json
import datetime

def check_joy_emails():
    # Use the app password from CREDENTIALS.md
    username = "henry.ops.iokai@gmail.com"
    password = "muixqszczxvotcua"
    imap_url = "imap.gmail.com"

    try:
        # Connect to the server
        mail = imaplib.IMAP4_SSL(imap_url)
        mail.login(username, password)
        mail.select("inbox")

        # Search for emails from Christe Joy
        # cristejoycalosor13@gmail.com
        status, messages = mail.search(None, '(FROM "cristejoycalosor13@gmail.com")')
        
        if status != "OK" or not messages[0]:
            print("NO_MESSAGES")
            return

        # Get the IDs of the messages
        msg_ids = messages[0].split()
        # Take the last 5 messages
        latest_ids = msg_ids[-5:]
        
        results = []
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
            
            # Decode date
            date = msg["Date"]
            
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

            results.append({
                "id": msg_id.decode(),
                "subject": subject,
                "date": date,
                "body": body
            })

        print(json.dumps(results, indent=2))
        mail.close()
        mail.logout()

    except Exception as e:
        print(f"ERROR: {str(e)}")

if __name__ == "__main__":
    check_joy_emails()
