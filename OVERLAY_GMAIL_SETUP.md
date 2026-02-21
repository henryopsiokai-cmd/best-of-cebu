# Henry Gmail OAuth Setup
Created: 2025-02-15

## OAuth Credentials
- **Client ID**: 792397459619-qgtnoklrvjjplofgh02io8d5pof14ijk.apps.googleusercontent.com
- **Project**: openclaw-henry-487513
- **Redirect URI**: http://localhost

## Authorization Scope Needed
- https://www.googleapis.com/auth/gmail.send
- https://www.googleapis.com/auth/gmail.readonly (for sent items)

## Authorization URL (Complete in Browser)
```
https://accounts.google.com/o/oauth2/auth?
  client_id=792397459619-qgtnoklrvjjplofgh02io8d5pof14ijk.apps.googleusercontent.com&
  redirect_uri=http://localhost&
  scope=https://www.googleapis.com/auth/gmail.send&
  response_type=code&
  access_type=offline&
  prompt=consent
```

## To Complete Setup
1. Follow authorization URL
2. Sign in as henry.ops.iokai@gmail.com
3. Grant Gmail permissions
4. Copy the authorization code from redirect
5. Run token exchange

## Status: AWAITING AUTHORIZATION CODE