import imaplib
import email
from email.header import decode_header

def get_body(msg):
    if msg.is_multipart():
        for part in msg.walk():
            ctype = part.get_content_type()
            cdisp = str(part.get('Content-Disposition'))
            if ctype == 'text/plain' and 'attachment' not in cdisp:
                return part.get_payload(decode=True).decode()
    else:
        return msg.get_payload(decode=True).decode()
    return ""

mail = imaplib.IMAP4_SSL('imap.gmail.com')
mail.login('henry.ops.iokai@gmail.com', 'muixqszczxvotcua')
mail.select('inbox')

status, data = mail.search(None, '(FROM "cristejoycalosor13@gmail.com")')
ids = data[0].split()

# Read last 3
for i in ids[-3:]:
    status, msg_data = mail.fetch(i, '(RFC822)')
    msg = email.message_from_bytes(msg_data[0][1])
    subject, encoding = decode_header(msg['Subject'])[0]
    if isinstance(subject, bytes):
        subject = subject.decode(encoding if encoding else 'utf-8')
    print(f"--- ID: {i.decode()} ---")
    print(f"Subject: {subject}")
    print(f"Date: {msg['Date']}")
    print(f"Body:\n{get_body(msg)}")
    print("-" * 30)

mail.logout()
