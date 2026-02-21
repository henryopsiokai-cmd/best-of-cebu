#!/usr/bin/env python3
"""
Multi-Account Manager for Google Antigravity
Handles account rotation and rate limit management
"""

import json
import os
from typing import List, Dict, Optional
from dataclasses import dataclass
import time

@dataclass
class Account:
    email: str
    auth_token: str
    expires_at: float
    rate_limited_until: Optional[float] = None
    
    def is_rate_limited(self) -> bool:
        if self.rate_limited_until is None:
            return False
        return time.time() < self.rate_limited_until
    
    def is_expired(self) -> bool:
        return time.time() > self.expires_at

class MultiAccountManager:
    def __init__(self, accounts_file: str = "~/.local/share/opencode/antigravity-accounts.json"):
        self.accounts_file = accounts_file  # Use relative path instead of expanduser
        self.accounts: List[Account] = []
        self.current_account_index = 0
        self.load_accounts()
    
    def load_accounts(self):
        """Load accounts from storage"""
        if os.path.exists(self.accounts_file):
            try:
                with open(self.accounts_file, 'r') as f:
                    data = json.load(f)
                    for account_data in data.get('accounts', []):
                        account = Account(
                            email=account_data['email'],
                            auth_token=account_data['auth_token'],
                            expires_at=account_data['expires_at'],
                            rate_limited_until=account_data.get('rate_limited_until')
                        )
                        self.accounts.append(account)
                self.current_account_index = data.get('current_index', 0)
            except Exception as e:
                print(f"⚠️ Error loading accounts: {e}")
                self.accounts = []
    
    def save_accounts(self):
        """Save accounts to storage"""
        data = {
            'accounts': [
                {
                    'email': acc.email,
                    'auth_token': acc.auth_token,
                    'expires_at': acc.expires_at,
                    'rate_limited_until': acc.rate_limited_until
                }
                for acc in self.accounts
            ],
            'current_index': self.current_account_index
        }
        
        # Ensure directory exists
        os.makedirs(os.path.dirname(self.accounts_file), exist_ok=True)
        
        with open(self.accounts_file, 'w') as f:
            json.dump(data, f, indent=2)
    
    def add_account(self, email: str, auth_token: str, expires_in: int = 3600):
        """Add a new account"""
        expires_at = time.time() + expires_in
        account = Account(email, auth_token, expires_at)
        self.accounts.append(account)
        self.save_accounts()
        print(f"✅ Added account: {email}")
    
    def get_current_account(self) -> Optional[Account]:
        """Get the current account"""
        if not self.accounts:
            return None
        
        if self.current_account_index >= len(self.accounts):
            self.current_account_index = 0
        
        return self.accounts[self.current_account_index]
    
    def get_next_account(self) -> Optional[Account]:
        """Get the next available account (automatic rotation)"""
        if not self.accounts:
            return None
        
        # Try up to all accounts
        for _ in range(len(self.accounts)):
            account = self.get_current_account()
            
            if account and not account.is_rate_limited() and not account.is_expired():
                print(f"🔗 Using account {self.current_account_index + 1}/{len(self.accounts)}: {account.email}")
                return account
            
            # Move to next account
            self.current_account_index = (self.current_account_index + 1) % len(self.accounts)
            self.save_accounts()
        
        print("⚠️ No available accounts (all rate-limited or expired)")
        return None
    
    def mark_rate_limited(self, account_email: str, duration: int = 3600):
        """Mark an account as rate-limited"""
        for account in self.accounts:
            if account.email == account_email:
                account.rate_limited_until = time.time() + duration
                print(f"🚫 Account rate-limited for {duration}s: {account_email}")
                self.save_accounts()
                break
    
    def refresh_token(self, email: str, new_auth_token: str, expires_in: int = 3600):
        """Refresh authentication token for an account"""
        for account in self.accounts:
            if account.email == email:
                account.auth_token = new_auth_token
                account.expires_at = time.time() + expires_in
                account.rate_limited_until = None  # Clear rate limit
                print(f"♻️ Token refreshed for: {email}")
                self.save_accounts()
                break

# CLI interface
if __name__ == "__main__":
    import argparse
    
    parser = argparse.ArgumentParser(description='Antigravity Multi-Account Manager')
    parser.add_argument('--list', action='store_true', help='List all accounts')
    parser.add_argument('--add', nargs=2, metavar=('EMAIL', 'TOKEN'), help='Add new account')
    parser.add_argument('--rate-limit', nargs=2, metavar=('EMAIL', 'DURATION'), help='Mark account rate-limited')
    parser.add_argument('--refresh', nargs=3, metavar=('EMAIL', 'TOKEN', 'EXPIRES_IN'), help='Refresh token')
    
    args = parser.parse_args()
    
    manager = MultiAccountManager()
    
    if args.list:
        print("📋 Accounts:")
        for i, acc in enumerate(manager.accounts):
            status = "active"
            if acc.is_rate_limited():
                status = "rate-limited"
            elif acc.is_expired():
                status = "expired"
            print(f"  {i+1}. {acc.email} [{status}]")
    
    elif args.add:
        manager.add_account(args.add[0], args.add[1])
    
    elif args.rate_limit:
        manager.mark_rate_limited(args.rate_limit[0], int(args.rate_limit[1]))
    
    elif args.refresh:
        manager.refresh_token(args.refresh[0], args.refresh[1], int(args.refresh[2]))
    
    else:
        # Interactive mode
        current = manager.get_next_account()
        if current:
            print(f"🎯 Current Account: {current.email}")
            print(f"📊 {len(manager.accounts)} accounts configured")
        else:
            print("⚠️ No accounts configured. Use --add to add accounts.")
