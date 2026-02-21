import imaplib
import email
from email.header import decode_header

def check_recent_emails():
    username = "henry.ops.iokai@gmail.com"
    password = "muixqszczxvotcua"
    imap_url = "imap.gmail.com"

    mail = imaplib.IMAP4_SSL(imap_url)
    mail.login(username, password)
    mail.select("inbox")

    # Search for all emails from Joy
    status, messages = mail.search(None, '(FROM "cristejoycalosor13@gmail.com")')
    
    if status != 'OK' or not messages[0]:
        print("No emails found from Joy.")
        return

    msg_ids = messages[0].split()
    # Take up to the last 3 messages to see if there's more than just the "goddess" joke
    for msg_id in msg_ids[-3:]:
        status, data = mail.fetch(msg_id, "(RFC822)")
        for response_part in data:
            if isinstance(response_part, tuple):
                msg = email.message_from_bytes(response_part[1])
                subject, encoding = decode_header(msg["Subject"])[0]
                if isinstance(subject, bytes):
                    subject = subject.decode(encoding if encoding else "utf-8")
                
                date_ = msg.get("Date")
                print(f"--- MSG ID: {msg_id.decode()} | Date: {date_} | Subject: {subject} ---")

                if msg.is_multipart():
                    for part in msg.walk():
                        if part.get_content_type() == "text/plain":
                            try:
                                print(part.get_payload(decode=True).decode())
                            except:
                                pass
                else:
                    print(msg.get_payload(decode=True).decode())

    mail.close()
    mail.logout()

if __name__ == "__main__":
    check_recent_emails()
