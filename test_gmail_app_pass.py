import smtplib
from email.mime.text import MIMEText
import imaplib
import email

EMAIL = 'henry.ops.iokai@gmail.com'
PASSWORD = 'gcbtxqolnrlgawnl'

def check_recent():
    try:
        # Use IMAP to check inbox
        mail = imaplib.IMAP4_SSL('imap.gmail.com')
        mail.login(EMAIL, PASSWORD)
        mail.select('inbox')
        
        status, response = mail.search(None, 'UNSEEN')
        unread_msg_nums = response[0].split()
        
        if not unread_msg_nums:
            print("No unread messages.")
            return

        print(f"Found {len(unread_msg_nums)} unread messages. Recent ones:")
        
        # Get the latest 3 unread messages
        for num in unread_msg_nums[-3:]:
            status, data = mail.fetch(num, '(RFC822)')
            msg = email.message_from_bytes(data[0][1])
            print(f"From: {msg['from']}")
            print(f"Subject: {msg['subject']}")
            print("-" * 20)
            
        mail.close()
        mail.logout()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    check_recent()
