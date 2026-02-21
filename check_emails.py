import imaplib
import email
from email.header import decode_header
import os

EMAIL = "henry.ops.iokai@gmail.com"
PASSWORD = "muixqszczxvotcua"

def check_inbox():
    try:
        # Connect to Gmail IMAP
        mail = imaplib.IMAP4_SSL("imap.gmail.com")
        mail.login(EMAIL, PASSWORD)
        mail.select("inbox")

        # Search for unread messages
        status, messages = mail.search(None, 'UNSEEN')
        
        if status != 'OK':
            print("No messages found.")
            return

        mail_ids = messages[0].split()
        if not mail_ids:
            print("No new unread messages.")
            return

        print(f"Found {len(mail_ids)} unread messages.\n")

        # Fetch the most recent 5 unread messages
        for i in mail_ids[-5:]:
            res, msg_data = mail.fetch(i, "(RFC822)")
            for response_part in msg_data:
                if isinstance(response_part, tuple):
                    msg = email.message_from_bytes(response_part[1])
                    subject, encoding = decode_header(msg["Subject"])[0]
                    if isinstance(subject, bytes):
                        subject = subject.decode(encoding if encoding else "utf-8")
                    
                    from_sender, encoding = decode_header(msg.get("From"))[0]
                    if isinstance(from_sender, bytes):
                        from_sender = from_sender.decode(encoding if encoding else "utf-8")
                    
                    date = msg.get("Date")
                    
                    print(f"From: {from_sender}")
                    print(f"Subject: {subject}")
                    print(f"Date: {date}")
                    print("-" * 30)

        mail.logout()
    except Exception as e:
        print(f"Error: {str(e)}")

if __name__ == "__main__":
    check_inbox()
