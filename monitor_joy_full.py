import imaplib
import email
from email.header import decode_header

def get_recent_emails(user, password):
    try:
        mail = imaplib.IMAP4_SSL("imap.gmail.com")
        mail.login(user, password)
        mail.select("inbox")

        status, messages = mail.search(None, '(FROM "cristejoycalosor13@gmail.com")')
        if status != "OK":
            return "Failed to search inbox."

        mail_ids = messages[0].split()
        if not mail_ids:
            return "NO_EMAILS"

        results = []
        # Check the 3 most recent emails
        for mail_id in mail_ids[-3:]:
            res, msg_data = mail.fetch(mail_id, "(RFC822)")
            for response_part in msg_data:
                if isinstance(response_part, tuple):
                    msg = email.message_from_bytes(response_part[1])
                    date = msg.get("Date")
                    subject, encoding = decode_header(msg["Subject"])[0]
                    if isinstance(subject, bytes):
                        subject = subject.decode(encoding if encoding else "utf-8")
                    
                    body = ""
                    if msg.is_multipart():
                        for part in msg.walk():
                            if part.get_content_type() == "text/plain":
                                payload = part.get_payload(decode=True)
                                try:
                                    body = payload.decode()
                                except:
                                    body = str(payload)
                                break
                    else:
                        payload = msg.get_payload(decode=True)
                        try:
                            body = payload.decode()
                        except:
                            body = str(payload)
                    
                    results.append(f"--- Email ID: {mail_id.decode()} ---\nDate: {date}\nSubject: {subject}\nBody: {body}\n")
        
        mail.close()
        mail.logout()
        return "\n".join(results)
        
    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == "__main__":
    USER = "henry.ops.iokai@gmail.com"
    PASS = "muixqszczxvotcua"
    print(get_recent_emails(USER, PASS))
