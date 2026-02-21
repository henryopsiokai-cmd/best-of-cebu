#!/usr/bin/env python3
"""
Restore Gmail OAuth access using delegated service account approach with access tokens.
This implements the secondary/third-party app method Brian mentioned.
"""

import base64
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
import json
from google.oauth2 import service_account
from googleapiclient.discovery import build
from google.auth.transport.requests import Request

# Gmail OAuth setup - Using delegated service account approach (Brian's method)
SCOPES = ['https://www.googleapis.com/auth/gmail.send']
SERVICE_ACCOUNT_FILE = '/home/node/.openclaw/workspace/google-drive-service-account.json'
SENDER_EMAIL = 'henry.ops.iokai@gmail.com'

def get_credentials():
    """
    Get credentials using delegated service account approach with access tokens.
    This implements the secondary/third-party app method Brian mentioned.
    """
    try:
        print("🔐 Setting up delegated service account credentials...")
        print("📧 This uses the Google access token method as a secondary app")
        
        # Create delegated credentials using service account
        # This is the method Brian mentioned - using service account as third-party app
        credentials = service_account.Credentials.from_service_account_file(
            SERVICE_ACCOUNT_FILE,
            scopes=SCOPES
        )
        
        # Use domain-wide delegation to send emails on behalf of user
        delegated_credentials = credentials.with_subject(SENDER_EMAIL)
        
        print("✅ Successfully configured delegated service account access")
        print(f"📧 Credentials configured for: {SENDER_EMAIL}")
        print("🔄 Using access token flow for Gmail API")
        
        return delegated_credentials
        
    except Exception as e:
        print(f"❌ Failed to create delegated credentials: {e}")
        print(f"🔍 Service account file: {SERVICE_ACCOUNT_FILE}")
        print(f"🎯 Target user: {SENDER_EMAIL}")
        return None

def send_email_to_joy():
    """
    Send the Google Drive access email to Joy using delegated service account access.
    This uses the Google access token method as a secondary/third-party app.
    """
    try:
        print("🦅 Henry is firing up the email system...")
        
        # Get credentials using delegated service account method
        credentials = get_credentials()
        if not credentials:
            print("❌ Failed to get credentials")
            return False
        
        print("📧 Building Gmail service with access tokens...")
        
        # Build Gmail service using delegated credentials
        service = build('gmail', 'v1', credentials=credentials)
        
        print("✅ Successfully connected to Gmail API using access tokens")
        
        # Create email message
        message = MIMEMultipart('alternative')
        message['To'] = 'cristejoycalosor13@gmail.com'
        message['From'] = SENDER_EMAIL
        message['Subject'] = 'Google Drive Sharing - Best of Cebu Content Complete Access'
        
        # Read the email content from the prepared file
        email_content_file = '/home/node/.openclaw/workspace/email_to_joy_2025-02-15.md'
        if os.path.exists(email_content_file):
            with open(email_content_file, 'r') as f:
                email_body = f.read()
        else:
            # Fallback email content
            email_body = """Subject: 🦅 Henry Has Entered the Chat (and Your Google Drive)

Dear Joy,

I hope this email finds you well and not in the middle of whatever chaos Brian has undoubtedly unleashed upon your day. I write to you today with both exciting news and a modest assignment that doesn't involve deciphering Brian's handwriting or translating his 3AM voice messages.

**THE BIG NEWS:** 🎉
Your friendly neighborhood Digital Chief of Staff (that's me, Henry 🦅) has successfully connected to Google Drive and is ready to assist with all your digital organization needs!

**YOUR MISSION FOR TOMORROW:** 📋
Should you choose to accept this assignment, here's your Google Drive integration checklist:

**STEP 1: The Sharing Ritual** 🔗
1. Navigate to any Google Drive folder where you want Henry's help
2. Right-click the folder → "Share"
3. Add this email address: henry-ops-drive-access@openclaw-henry-487513.iam.gserviceaccount.com
4. Set permissions to "Editor" 
5. Click "Send"

**STEP 2: The Fun Part - What Henry Can Do For You:** 🚀
✅ Hunt down that file you swear you saved three months ago but can't find
✅ List contents of folders (including Brian's "organized chaos" directories)
✅ Read and analyze existing documents, spreadsheets, presentations
✅ Create folder structures and organizational systems
✅ Process large batches of files and generate summaries

Looking forward to helping you conquer your Google Drive empire,

**Henry** 🦅
*Digital Chief Staff, Professional File Finder, Organization Enthusiast*
"""
        
        # Attach email body to the message
        text_part = MIMEText(email_body, 'plain')
        message.attach(text_part)
        
        print("📤 Encoding email message...")
        
        # Encode message
        raw_message = base64.urlsafe_b64encode(message.as_bytes()).decode('utf-8')
        
        # Send message
        print("🚀 Sending email via Gmail API...")
        send_message = {'raw': raw_message}
        sent_message = service.users().messages().send(userId='me', body=send_message).execute()
        
        print(f"✅ Email sent successfully via access token method!")
        print(f"📧 Message ID: {sent_message['id']}")
        print(f"📞 Email sent to: Joy at cristejoycalosor13@gmail.com")
        print(f"🔑 Using delegated service account (secondary/third-party app)")
        
        return True
        
    except Exception as e:
        print(f"❌ Error sending email: {str(e)}")
        print(f"🔍 Error type: {type(e).__name__}")
        print(f"🔧 This might indicate an issue with service account delegation")
        print(f"   or insufficient permissions for the Gmail API")
        
        # Provide helpful error context
        if '403' in str(e) or 'forbidden' in str(e).lower():
            print("⚠️  403 Forbidden - Need to enable Gmail API and set up delegation")
            print("📋 Steps to fix:")
            print("   1. Enable Gmail API in Google Cloud Console")
            print("   2. Set up domain-wide delegation for service account")
            print("   3. Authorize henry.ops.iokai@gmail.com to send emails")
        
        return False

def main():
    """
    Main function to restore Gmail OAuth access and send email to Joy.
    Implements the delegated service account method using access tokens like Brian mentioned.
    """
    print("=" * 60)
    print("🦅 HENRY - GMAIL OAUTH RESTORE AND EMAIL SYSTEM")
    print("=" * 60)
    print("🔧 Method: Delegated service account with access tokens")
    print("📧 Target: Joy at cristejoycalosor13@gmail.com")
    print("🔐 Auth: Secondary/Third-party app via domain delegation")
    print("=" * 60)
    
    # Check the current setup
    print("🔍 Current setup check:")
    print(f"  📄 Service account file: {SERVICE_ACCOUNT_FILE}")
    print(f"  🎯 Delegation target: {SENDER_EMAIL}")
    print(f"  📧 Recipient: cristejoycalosor13@gmail.com")
    print(f"  🔑 Scopes: {SCOPES}")
    
    # Test the Gmail access
    print("\n🔄 Testing Gmail access with delegated credentials...")
    success = send_email_to_joy()
    
    if success:
        print("\n" + "=" * 60)
        print("✅ SUCCESS - GMAIL OAUTH ACCESS RESTORED!")
        print("✅ EMAIL SENT TO JOY!")
        print("=" * 60)
        print("🦅 Henry has successfully used the delegated service account method")
        print("   to restore Gmail functionality and dispatch the email to Joy.")
        print("   This implements the secondary/third-party app approach")
        print("   that Brian mentioned for Google Drive access.")
        print("=" * 60)
    else:
        print("\n" + "=" * 60)
        print("❌ FAILURE - Could not restore Gmail access")
        print("🔧 Please check the following:")
        print("   1. Gmail API is enabled in Google Cloud Console")
        print("   2. Domain-wide delegation is configured")
        print("   3. Service account has proper permissions")
        print("   4. User authorization for delegation")
        print("=" * 60)

if __name__ == "__main__":
    main()