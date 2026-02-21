import imaplib

EMAIL = 'henry.ops.iokai@gmail.com'
# Cleaning any possible hidden characters or spaces
PASSWORD = 'gcbtxqolnrlgawnl'.strip()

def test_login():
    try:
        print(f"Attempting login for {EMAIL}...")
        mail = imaplib.IMAP4_SSL('imap.gmail.com')
        mail.login(EMAIL, PASSWORD)
        print("✅ Login Successful!")
        mail.logout()
    except Exception as e:
        print(f"❌ Login Failed: {e}")

if __name__ == '__main__':
    test_login()
