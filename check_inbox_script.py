import imaplib
import email
import os
from email.header import decode_header

def check_inbox():
    user = "henry.ops.iokai@gmail.com"
    # The CREDENTIALS.md showed 'muixqszczxvotcua' as the updated password
    password = "muixqszczxvotcua"
    
    try:
        mail = imaplib.IMAP4_SSL("imap.gmail.com")
        mail.login(user, password)
        mail.select("inbox")
        
        # Search for unread messages
        status, messages = mail.search(None, 'UNSEEN')
        mail_ids = messages[0].split()
        
        if not mail_ids:
            print("No unread messages.")
            return

        print(f"Total unread messages: {len(mail_ids)}")
        
        # Get the latest 5 unread messages
        for i in mail_ids[-5:]:
            res, msg = mail.fetch(i, "(RFC822)")
            for response in msg:
                if isinstance(response, tuple):
                    msg = email.message_from_bytes(response[1])
                    subject, encoding = decode_header(msg["Subject"])[0]
                    if isinstance(subject, bytes):
                        subject = subject.decode(encoding if encoding else "utf-8")
                    
                    from_Address = msg.get("From")
                    print(f"\nFrom: {from_Address}")
                    print(f"Subject: {subject}")
                    
                    # Extract snippet
                    if msg.is_multipart():
                        for part in msg.walk():
                            content_type = part.get_content_type()
                            if content_type == "text/plain":
                                body = part.get_payload(decode=True).decode()
                                print(f"Snippet: {body[:200].strip()}...")
                                break
                    else:
                        body = msg.get_payload(decode=True).decode()
                        print(f"Snippet: {body[:200].strip()}...")
                        
        mail.close()
        mail.logout()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    check_inbox()
