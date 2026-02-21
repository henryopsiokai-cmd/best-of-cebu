import imaplib
import email

EMAIL = 'henry.ops.iokai@gmail.com'
PASSWORD = 'muixqszczxvotcua'
JOY_EMAIL = 'cristejoycalosor13@gmail.com'

def check_gmail():
    try:
        mail = imaplib.IMAP4_SSL('imap.gmail.com')
        mail.login(EMAIL, PASSWORD)
        mail.select('inbox')
        
        status, response = mail.search(None, f'(UNSEEN FROM "{JOY_EMAIL}")')
        unread_ids = response[0].split()
        
        if not unread_ids:
            print("HEARTBEAT_OK")
        else:
            print(f"FOUND {len(unread_ids)} UNREAD")
            for msg_id in unread_ids:
                status, data = mail.fetch(msg_id, '(RFC822)')
                msg = email.message_from_bytes(data[0][1])
                print(f"Subject: {msg['subject']}")
                # Mark as seen if necessary? No, just checking.
        mail.logout()
    except Exception as e:
        print(f"ERROR: {e}")

if __name__ == '__main__':
    check_gmail()
