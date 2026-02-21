import imaplib
import email
from email.header import decode_header
import json
import os
import sys

def check_emails():
    user = "henry.ops.iokai@gmail.com"
    password = "muixqszczxvotcua"
    imap_url = "imap.gmail.com"

    try:
        mail = imaplib.IMAP4_SSL(imap_url)
        mail.login(user, password)
        mail.select("inbox")

        # Search for emails from Christe Joy (cristejoycalosor13@gmail.com)
        status, messages = mail.search(None, 'FROM "cristejoycalosor13@gmail.com"')
        
        if status != "OK" or not messages[0]:
            print("NO_MESSAGES")
            return

        email_ids = messages[0].split()
        # Get last 5 emails
        latest_ids = email_ids[-5:]
        
        emails = []
        for e_id in reversed(latest_ids):
            status, msg_data = mail.fetch(e_id, "(RFC822)")
            if status != "OK":
                continue
            
            for response_part in msg_data:
                if isinstance(response_part, tuple):
                    msg = email.message_from_bytes(response_part[1])
                    
                    subject, encoding = decode_header(msg["Subject"])[0]
                    if isinstance(subject, bytes):
                        subject = subject.decode(encoding if encoding else "utf-8")
                    
                    from_ = msg.get("From")
                    date = msg.get("Date")
                    
                    body = ""
                    if msg.is_multipart():
                        for part in msg.walk():
                            content_type = part.get_content_type()
                            content_disposition = str(part.get("Content-Disposition"))
                            try:
                                if content_type == "text/plain" and "attachment" not in content_disposition:
                                    body = part.get_payload(decode=True).decode()
                                    break
                            except:
                                pass
                    else:
                        body = msg.get_payload(decode=True).decode()

                    emails.append({
                        "id": e_id.decode(),
                        "from": from_,
                        "subject": subject,
                        "date": date,
                        "snippet": body[:200].replace('\n', ' '),
                        "body": body
                    })
        
        print(json.dumps(emails, indent=2))
        mail.close()
        mail.logout()

    except Exception as e:
        print(f"ERROR: {str(e)}")

if __name__ == "__main__":
    check_emails()
