import imaplib
import email
from email.header import decode_header
import os

def check_inbox():
    user = "henry.ops.iokai@gmail.com"
    # The CREDENTIALS.md shows muix... as the updated password
    password = "muixqszczxvotcua"
    imap_url = "imap.gmail.com"

    try:
        mail = imaplib.IMAP4_SSL(imap_url)
        mail.login(user, password)
        mail.select("inbox")

        # Search for all unread messages
        status, messages = mail.search(None, 'UNSEEN')
        
        if status != 'OK' or not messages[0]:
            print("No new messages.")
            return

        mail_ids = messages[0].split()
        print(f"Found {len(mail_ids)} unread messages.\n")

        for i in mail_ids:
            res, msg = mail.fetch(i, "(RFC822)")
            for response in msg:
                if isinstance(response, tuple):
                    msg = email.message_from_bytes(response[1])
                    subject, encoding = decode_header(msg["Subject"])[0]
                    if isinstance(subject, bytes):
                        subject = subject.decode(encoding if encoding else "utf-8")
                    
                    from_ = msg.get("From")
                    date_ = msg.get("Date")
                    
                    print(f"--- Message {i.decode()} ---")
                    print(f"From: {from_}")
                    print(f"Subject: {subject}")
                    print(f"Date: {date_}")
                    
                    # Extract body
                    body = ""
                    if msg.is_multipart():
                        for part in msg.walk():
                            content_type = part.get_content_type()
                            content_disposition = str(part.get("Content-Disposition"))
                            if content_type == "text/plain" and "attachment" not in content_disposition:
                                body = part.get_payload(decode=True).decode()
                                break
                    else:
                        body = msg.get_payload(decode=True).decode()
                    
                    print(f"Body snippet: {body[:500]}...")
                    print("-" * 20)

        mail.close()
        mail.logout()

    except Exception as e:
        print(f"Error: {str(e)}")

if __name__ == "__main__":
    check_inbox()
