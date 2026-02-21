import imaplib
import email
from email.header import decode_header
import json

def get_last_sent():
    try:
        mail = imaplib.IMAP4_SSL('imap.gmail.com')
        mail.login('henry.ops.iokai@gmail.com', 'muix bshd fvve wmdl')
        mail.select('"[Gmail]/Sent Mail"')
        _, data = mail.search(None, 'ALL')
        ids = data[0].split()
        if not ids:
            return "No sent mail found."
        
        _, msg_data = mail.fetch(ids[-1], '(RFC822)')
        msg = email.message_from_bytes(msg_data[0][1])
        
        result = {
            "To": msg["To"],
            "Subject": msg["Subject"],
            "Date": msg["Date"],
            "Body": ""
        }
        
        if msg.is_multipart():
            for part in msg.walk():
                if part.get_content_type() == 'text/plain':
                    result["Body"] = part.get_payload(decode=True).decode()
                    break
        else:
            result["Body"] = msg.get_payload(decode=True).decode()
            
        return result
    except Exception as e:
        return f"Error: {e}"

if __name__ == "__main__":
    print(json.dumps(get_last_sent(), indent=2))
