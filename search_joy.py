import imaplib
import email
from email.header import decode_header

def search_joy(user, password):
    try:
        mail = imaplib.IMAP4_SSL("imap.gmail.com")
        mail.login(user, password)
        mail.select("inbox")

        # Search for "shared a folder" in all messages
        status, messages = mail.search(None, 'BODY "shared a folder"')
        if status != "OK":
            return "Failed to search inbox."

        mail_ids = messages[0].split()
        if not mail_ids:
            return "No Google Drive folder share emails found."

        results = []
        # Get the latest 20 messages matching the criteria
        for i in mail_ids[-20:]:
            res, msg_data = mail.fetch(i, "(RFC822)")
            for response in msg_data:
                if isinstance(response, tuple):
                    msg = email.message_from_bytes(response[1])
                    subject, encoding = decode_header(msg.get("Subject") or "")[0]
                    if isinstance(subject, bytes):
                        subject = subject.decode(encoding if encoding else "utf-8")
                    from_, encoding = decode_header(msg.get("From") or "")[0]
                    if isinstance(from_, bytes):
                        from_ = from_.decode(encoding if encoding else "utf-8")
                    
                    # Filter for Joy/Christyjoy
                    if "joy" in from_.lower() or "christy" in from_.lower():
                        results.append(f"From: {from_}\nSubject: {subject}\nDate: {msg['Date']}")
        
        mail.close()
        mail.logout()
        return "\n\n".join(results) if results else "No shared folders from Joy found."

    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == "__main__":
    USER = "henry.ops.iokai@gmail.com"
    PASS = "muixqszczxvotcua"
    print(search_joy(USER, PASS))
