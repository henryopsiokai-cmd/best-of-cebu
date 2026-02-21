import imaplib
import email
import json
import os
from email.header import decode_header

def check_emails():
    user = 'henry.ops.iokai@gmail.com'
    password = 'muixqszczxvotcua' # From CREDENTIALS.md
    imap_url = 'imap.gmail.com'

    try:
        mail = imaplib.IMAP4_SSL(imap_url)
        mail.login(user, password)
        mail.select('inbox')

        # Search for emails from Joy
        status, data = mail.search(None, '(FROM "cristejoycalosor13@gmail.com")')
        
        if status != 'OK':
            print("ERROR: Search failed")
            return

        mail_ids = data[0].split()
        if not mail_ids:
            print("NO_MESSAGES")
            return

        # Get the latest 5 messages
        latest_ids = mail_ids[-5:]
        results = []

        for m_id in reversed(latest_ids):
            status, data = mail.fetch(m_id, '(RFC822)')
            if status != 'OK':
                continue

            raw_email = data[0][1]
            msg = email.message_from_bytes(raw_email)

            subject, encoding = decode_header(msg['subject'])[0]
            if isinstance(subject, bytes):
                subject = subject.decode(encoding if encoding else 'utf-8')

            date = msg.get('date')
            
            body = ""
            if msg.is_multipart():
                for part in msg.walk():
                    content_type = part.get_content_type()
                    content_disposition = str(part.get('Content-Disposition'))
                    if content_type == 'text/plain' and 'attachment' not in content_disposition:
                        body = part.get_payload(decode=True).decode()
                        break
            else:
                body = msg.get_payload(decode=True).decode()

            results.append({
                'id': m_id.decode(),
                'subject': subject,
                'date': date,
                'body': body
            })

        print(json.dumps(results, indent=2))
        mail.logout()

    except Exception as e:
        print(f"ERROR: {str(e)}")

if __name__ == "__main__":
    check_emails()
