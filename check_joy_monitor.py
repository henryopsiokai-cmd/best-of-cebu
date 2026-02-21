import imaplib
import email
import datetime
from email.header import decode_header
import json

def search_emails():
    username = "henry.ops.iokai@gmail.com"
    password = "muixqszczxvotcua"

    mail = imaplib.IMAP4_SSL("imap.gmail.com")
    try:
        mail.login(username, password)
        mail.select("inbox")

        senders = ['cristejoycalosor13@gmail.com', 'joy@bestofcebu.com']
        
        found_emails = []
        
        # Look for emails in the last 48 hours to be safe
        date_cutoff = (datetime.date.today() - datetime.timedelta(days=2)).strftime("%d-%b-%Y")
        
        for sender in senders:
            # Search filter: FROM <sender> SINCE <date>
            search_query = f'(FROM "{sender}" SINCE {date_cutoff})'
            status, messages = mail.search(None, search_query)
            
            if status == "OK":
                for num in messages[0].split():
                    status, data = mail.fetch(num, "(RFC822)")
                    if status == "OK":
                        msg = email.message_from_bytes(data[0][1])
                        
                        # Decode subject
                        subject_header = decode_header(msg["Subject"])
                        subject_parts = []
                        for part, encoding in subject_header:
                            if isinstance(part, bytes):
                                subject_parts.append(part.decode(encoding if encoding else "utf-8", errors="replace"))
                            else:
                                subject_parts.append(str(part))
                        subject = "".join(subject_parts)
                        
                        # Date
                        date_str = msg["Date"]
                        
                        # Body
                        body = ""
                        if msg.is_multipart():
                            for part in msg.walk():
                                content_type = part.get_content_type()
                                content_disposition = str(part.get("Content-Disposition"))
                                if content_type == "text/plain" and "attachment" not in content_disposition:
                                    try:
                                        body = part.get_payload(decode=True).decode(errors="replace")
                                    except:
                                        pass
                                    break
                        else:
                            try:
                                body = msg.get_payload(decode=True).decode(errors="replace")
                            except:
                                pass
                        
                        found_emails.append({
                            "sender": sender,
                            "subject": subject,
                            "date": date_str,
                            "body": body
                        })

        return found_emails
    finally:
        try:
            mail.logout()
        except:
            pass

if __name__ == "__main__":
    emails = search_emails()
    print(json.dumps(emails, indent=2))
