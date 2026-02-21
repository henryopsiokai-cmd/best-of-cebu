import imaplib
import email
from email.header import decode_header
from datetime import datetime, timedelta

def check_new_emails():
    username = "henry.ops.iokai@gmail.com"
    password = "muixqszczxvotcua"
    imap_url = "imap.gmail.com"

    mail = imaplib.IMAP4_SSL(imap_url)
    mail.login(username, password)
    mail.select("inbox")

    # Filter for emails from Joy received TODAY (Feb 20, 2026)
    # IMAP SEARCH uses DD-Mon-YYYY
    search_date = "20-Feb-2026"
    status, messages = mail.search(None, f'(FROM "cristejoycalosor13@gmail.com" SINCE {search_date})')
    
    if status != 'OK' or not messages[0]:
        print("NO_NEW_EMAILS")
        return

    msg_ids = messages[0].split()
    print(f"Found {len(msg_ids)} emails from Joy today.")

    for msg_id in msg_ids:
        status, data = mail.fetch(msg_id, "(RFC822)")
        for response_part in data:
            if isinstance(response_part, tuple):
                msg = email.message_from_bytes(response_part[1])
                subject, encoding = decode_header(msg["Subject"])[0]
                if isinstance(subject, bytes):
                    subject = subject.decode(encoding if encoding else "utf-8")
                
                date_ = msg.get("Date")
                print(f"\n--- NEW EMAIL FROM JOY ---")
                print(f"Date: {date_}")
                print(f"Subject: {subject}")

                body = ""
                if msg.is_multipart():
                    for part in msg.walk():
                        if part.get_content_type() == "text/plain":
                            try:
                                body += part.get_payload(decode=True).decode()
                            except:
                                pass
                else:
                    body = msg.get_payload(decode=True).decode()
                
                print(f"Content:\n{body.strip()}")

    mail.close()
    mail.logout()

if __name__ == "__main__":
    check_new_emails()
