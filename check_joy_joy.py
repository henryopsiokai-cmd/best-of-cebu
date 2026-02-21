import imaplib
import email
from email.header import decode_header
import datetime

EMAIL = 'henry.ops.iokai@gmail.com'
PASSWORD = 'muixqszczxvotcua'
JOY_EMAIL = 'cristejoycalosor13@gmail.com'

def get_text(msg):
    if msg.is_multipart():
        for part in msg.walk():
            if part.get_content_type() == 'text/plain':
                return part.get_payload(decode=True).decode()
    else:
        return msg.get_payload(decode=True).decode()
    return ""

def check_gmail():
    try:
        mail = imaplib.IMAP4_SSL('imap.gmail.com')
        mail.login(EMAIL, PASSWORD)
        mail.select('inbox')
        
        # Search for all emails from Joy
        status, response = mail.search(None, f'FROM "{JOY_EMAIL}"')
        msg_ids = response[0].split()
        
        if not msg_ids:
            print("NO_EMAILS_FROM_JOY")
            return

        # Check the last 3 emails
        print(f"Checking last {min(3, len(msg_ids))} emails from Joy...")
        for msg_id in msg_ids[-3:]:
            status, data = mail.fetch(msg_id, '(RFC822)')
            msg = email.message_from_bytes(data[0][1])
            subject, encoding = decode_header(msg['subject'])[0]
            if isinstance(subject, bytes):
                subject = subject.decode(encoding or 'utf-8')
            
            date = msg['date']
            body = get_text(msg)
            
            print(f"DATE: {date}")
            print(f"SUBJECT: {subject}")
            print(f"BODY: {body[:500]}...") # First 500 chars
            print("-" * 30)
            
        mail.logout()
    except Exception as e:
        print(f"ERROR: {e}")

if __name__ == '__main__':
    check_gmail()
