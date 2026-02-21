import imaplib
import email
from email.header import decode_header

def search_shared(user, password):
    try:
        mail = imaplib.IMAP4_SSL("imap.gmail.com")
        mail.login(user, password)
        mail.select("inbox")

        # Search for "shared" or "folder" in all messages from Criste Joy
        status, messages = mail.search(None, '(FROM "cristejoycalosor13@gmail.com")')
        if status != "OK":
            return "Failed to search inbox."

        mail_ids = messages[0].split()
        if not mail_ids:
            return "No emails from Criste Joy found."

        results = []
        for i in mail_ids:
            res, msg_data = mail.fetch(i, "(RFC822)")
            for response in msg_data:
                if isinstance(response, tuple):
                    msg = email.message_from_bytes(response[1])
                    subject = str(msg.get("Subject") or "")
                    if "shared" in subject.lower() or "folder" in subject.lower():
                        results.append(f"From: {msg.get('From')}\nSubject: {subject}\nDate: {msg['Date']}")
                    
                    # Also check body
                    body = ""
                    if msg.is_multipart():
                        for part in msg.walk():
                            if part.get_content_type() == "text/plain":
                                body = part.get_payload(decode=True).decode()
                                break
                    else:
                        body = msg.get_payload(decode=True).decode()
                    
                    if "shared a folder" in body.lower():
                        results.append(f"From: {msg.get('From')}\nSubject: {subject}\nDate: {msg['Date']}\nBody contains shared folder link.")

        mail.close()
        mail.logout()
        return "\n\n".join(set(results)) if results else "No shared folders found."

    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == "__main__":
    USER = "henry.ops.iokai@gmail.com"
    PASS = "muixqszczxvotcua"
    print(search_shared(USER, PASS))
