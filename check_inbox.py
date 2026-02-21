import imaplib
import email
from email.header import decode_header
import os

def check_email():
    username = "henry.ops.iokai@gmail.com"
    password = "muixqszczxvotcua"
    
    # Connect to Gmail IMAP
    try:
        mail = imaplib.IMAP4_SSL("imap.gmail.com")
        mail.login(username, password)
        mail.select("inbox")
        
        # Search for all unread messages
        status, messages = mail.search(None, 'UNSEEN')
        
        if status != 'OK' or not messages[0]:
            print("No new messages.")
            return

        print(f"Found {len(messages[0].split())} unread messages.\n")
        
        for num in messages[0].split():
            res, msg = mail.fetch(num, "(RFC822)")
            for response in msg:
                if isinstance(response, tuple):
                    msg = email.message_from_bytes(response[1])
                    subject, encoding = decode_header(msg["Subject"])[0]
                    if isinstance(subject, bytes):
                        subject = subject.decode(encoding if encoding else "utf-8")
                    
                    sender, encoding = decode_header(msg.get("From"))[0]
                    if isinstance(sender, bytes):
                        sender = sender.decode(encoding if encoding else "utf-8")
                    
                    print(f"From: {sender}")
                    print(f"Subject: {subject}")
                    print("-" * 20)

        mail.close()
        mail.logout()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    check_email()
