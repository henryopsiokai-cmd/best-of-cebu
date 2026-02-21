import imaplib
import email
from email.header import decode_header

def get_email_body(user, password, search_query):
    try:
        mail = imaplib.IMAP4_SSL("imap.gmail.com")
        mail.login(user, password)
        mail.select("inbox")
        status, messages = mail.search(None, search_query)
        if status != "OK": return "Search failed"
        mail_ids = messages[0].split()
        if not mail_ids: return "No emails found"
        
        latest_id = mail_ids[-1]
        res, msg_data = mail.fetch(latest_id, "(RFC822)")
        for response_part in msg_data:
            if isinstance(response_part, tuple):
                msg = email.message_from_bytes(response_part[1])
                if msg.is_multipart():
                    for part in msg.walk():
                        if part.get_content_type() == "text/plain":
                            return part.get_payload(decode=True).decode()
                else:
                    return msg.get_payload(decode=True).decode()
        mail.close()
        mail.logout()
    except Exception as e:
        return str(e)

if __name__ == "__main__":
    USER = "henry.ops.iokai@gmail.com"
    PASS = "muixqszczxvotcua"
    print(get_email_body(USER, PASS, '(SUBJECT "BestOfCebu")'))
