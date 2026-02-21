import imaplib
import email
from email.header import decode_header
import os

def get_email_body(user, password, search_query):
    try:
        mail = imaplib.IMAP4_SSL("imap.gmail.com")
        mail.login(user, password)
        mail.select("inbox")

        status, messages = mail.search(None, search_query)
        if status != "OK":
            return "Failed to search inbox."

        mail_ids = messages[0].split()
        if not mail_ids:
            return "No emails found."

        latest_id = mail_ids[-1]
        res, msg = mail.fetch(latest_id, "(RFC822)")
        for response in msg:
            if isinstance(response, tuple):
                msg = email.message_from_bytes(response[1])
                if msg.is_multipart():
                    for part in msg.walk():
                        content_type = part.get_content_type()
                        content_disposition = str(part.get("Content-Disposition"))
                        try:
                            body = part.get_payload(decode=True).decode()
                        except:
                            continue
                        if content_type == "text/plain" and "attachment" not in content_disposition:
                            return body
                else:
                    return msg.get_payload(decode=True).decode()
        
        mail.close()
        mail.logout()

    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == "__main__":
    USER = "henry.ops.iokai@gmail.com"
    PASS = "muixqszczxvotcua"
    print(get_email_body(USER, PASS, '(SUBJECT "BestOfCebu")'))
