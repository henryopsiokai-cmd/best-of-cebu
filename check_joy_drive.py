import imaplib
import email
from email.header import decode_header
import os

def check_inbox(user, password, search_query):
    try:
        # Connect to Gmail IMAP
        mail = imaplib.IMAP4_SSL("imap.gmail.com")
        mail.login(user, password)
        mail.select("inbox")

        # Search for messages
        status, messages = mail.search(None, search_query)
        if status != "OK":
            return f"Failed to search inbox with query: {search_query}"

        mail_ids = messages[0].split()
        if not mail_ids:
            return "No matching emails found."

        results = []
        # Get the latest 5 matching messages
        for i in mail_ids[-10:]:
            res, msg = mail.fetch(i, "(RFC822)")
            for response in msg:
                if isinstance(response, tuple):
                    msg = email.message_from_bytes(response[1])
                    subject, encoding = decode_header(msg["Subject"])[0]
                    if isinstance(subject, bytes):
                        subject = subject.decode(encoding if encoding else "utf-8")
                    from_, encoding = decode_header(msg.get("From"))[0]
                    if isinstance(from_, bytes):
                        from_ = from_.decode(encoding if encoding else "utf-8")
                    
                    date = msg.get("Date")
                    body = ""
                    if msg.is_multipart():
                        for part in msg.walk():
                            content_type = part.get_content_type()
                            if content_type == "text/plain":
                                body = part.get_payload(decode=True).decode()
                                break
                    else:
                        body = msg.get_payload(decode=True).decode()
                    
                    results.append(f"Date: {date}\nFrom: {from_}\nSubject: {subject}\nBody Snippet: {body[:200]}")
        
        mail.close()
        mail.logout()
        return "\n\n".join(results)

    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == "__main__":
    USER = "henry.ops.iokai@gmail.com"
    PASS = "muixqszczxvotcua"
    print("Searching for ALL 'drive-shares':")
    print(check_inbox(USER, PASS, '(FROM "drive-shares-dm-noreply@google.com")'))
    print("\nSearching for ALL 'Joy':")
    print(check_inbox(USER, PASS, '(OR (FROM "Joy") (TEXT "Joy"))'))
