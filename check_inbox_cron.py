import imaplib
import email
from email.header import decode_header

def clean(text):
    return "".join(c if c.isalnum() else "_" for c in text)

def check_inbox(user, password):
    try:
        # Connect to Gmail
        imap = imaplib.IMAP4_SSL("imap.gmail.com")
        imap.login(user, password)
        
        status, messages = imap.select("INBOX")
        if status != "OK":
            print("Failed to select INBOX")
            return

        # Search for unread messages
        status, response = imap.search(None, 'UNSEEN')
        if status != "OK":
            print("Failed to search for UNSEEN messages")
            return

        messages = response[0].split()
        if not messages:
            print("No new messages.")
            imap.close()
            imap.logout()
            return

        print(f"Found {len(messages)} unread messages:\n")

        # Fetch the most recent 5 unread messages
        for num in messages[-5:]:
            res, msg = imap.fetch(num, "(RFC822)")
            for response_part in msg:
                if isinstance(response_part, tuple):
                    msg = email.message_from_bytes(response_part[1])
                    subject, encoding = decode_header(msg["Subject"])[0]
                    if isinstance(subject, bytes):
                        subject = subject.decode(encoding if encoding else "utf-8")
                    
                    from_, encoding = decode_header(msg["get"]("From"))[0]
                    if isinstance(from_, bytes):
                        from_ = from_.decode(encoding if encoding else "utf-8")
                    
                    print(f"From: {from_}")
                    print(f"Subject: {subject}")
                    print("-" * 30)

        imap.close()
        imap.logout()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    check_inbox("henry.ops.iokai@gmail.com", "muixqszczxvotcua")
