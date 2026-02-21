import imaplib
import email

EMAIL = 'henry.ops.iokai@gmail.com'
PASSWORD = 'muixqszczxvotcua'

def check_gmail():
    try:
        print(f"Attempting login with new App Password...")
        mail = imaplib.IMAP4_SSL('imap.gmail.com')
        mail.login(EMAIL, PASSWORD)
        print("✅ Login Successful!")
        
        mail.select('inbox')
        status, response = mail.search(None, 'UNSEEN')
        unread_ids = response[0].split()
        
        if not unread_ids:
            print("No new unread emails.")
        else:
            print(f"Found {len(unread_ids)} unread emails. Here are the most recent 3:")
            for msg_id in unread_ids[-3:]:
                status, data = mail.fetch(msg_id, '(RFC822)')
                msg = email.message_from_bytes(data[0][1])
                print(f"From: {msg['from']}")
                print(f"Subject: {msg['subject']}")
                print("-" * 20)
        
        mail.logout()
    except Exception as e:
        print(f"❌ Login Failed: {e}")

if __name__ == '__main__':
    check_gmail()
