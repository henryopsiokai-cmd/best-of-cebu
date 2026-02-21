import imaplib
import email
from email.header import decode_header

def debug_search(user, password):
    try:
        mail = imaplib.IMAP4_SSL("imap.gmail.com")
        mail.login(user, password)
        mail.select("inbox")

        # Search for any message with "joy" or "christy" in sender
        status, messages = mail.search(None, '(OR FROM "Joy" FROM "Christy")')
        if status != "OK":
            return "Failed to search inbox."

        mail_ids = messages[0].split()
        if not mail_ids:
            return "No emails from Joy or Christy found at all."

        results = []
        for i in mail_ids[-5:]:
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
                    results.append(f"From: {from_}\nSubject: {subject}\nDate: {msg['Date']}")
        
        mail.close()
        mail.logout()
        return "\n\n".join(results)

    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == "__main__":
    USER = "henry.ops.iokai@gmail.com"
    PASS = "muixqszczxvotcua"
    print(debug_search(USER, PASS))
