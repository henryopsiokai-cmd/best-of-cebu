'use client';

import React, { useState, useEffect } from 'react';

export default function DevAuth() {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        // Check if already authenticated
        const auth = localStorage.getItem('dev_auth');
        if (auth === 'true') {
            setAuthenticated(true);
        }
        setLoading(false);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple password - CHANGE THIS!
        if (password === 'cebu2026') {
            setAuthenticated(true);
            setError(false);
            localStorage.setItem('dev_auth', 'true');
        } else {
            setError(true);
        }
    };

    if (loading) {
        return (
            <div style={{ 
                minHeight: '100vh', 
                backgroundColor: '#1a1a1a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#666'
            }}>
                Loading...
            </div>
        );
    }

    if (!authenticated) {
        return (
            <div style={{ 
                minHeight: '100vh', 
                backgroundColor: '#1a1a1a',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Arial, sans-serif',
                color: '#fff'
            }}>
                <div style={{ textAlign: 'center', padding: '40px', maxWidth: '400px' }}>
                    <div style={{ 
                        fontSize: '24px', 
                        fontWeight: 'bold',
                        marginBottom: '30px',
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontStyle: 'italic'
                    }}>
                        Best of Cebu
                    </div>
                    <div style={{ 
                        fontSize: '14px', 
                        letterSpacing: '2px', 
                        textTransform: 'uppercase',
                        marginBottom: '20px',
                        color: '#888'
                    }}>
                        Development Access
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter access code"
                            style={{
                                padding: '12px 20px',
                                fontSize: '16px',
                                borderRadius: '8px',
                                border: error ? '2px solid #e74c3c' : '2px solid #333',
                                backgroundColor: '#2a2a2a',
                                color: '#fff',
                                width: '100%',
                                marginBottom: '20px',
                                outline: 'none'
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                padding: '12px 30px',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                borderRadius: '8px',
                                border: 'none',
                                backgroundColor: '#e67e22',
                                color: '#fff',
                                cursor: 'pointer',
                                width: '100%'
                            }}
                        >
                            Enter
                        </button>
                    </form>
                    {error && (
                        <div style={{ color: '#e74c3c', marginTop: '15px', fontSize: '14px' }}>
                            Incorrect access code
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // Show full site content after auth - redirect to main site
    return (
        <div style={{ 
            minHeight: '100vh', 
            backgroundColor: '#1a1a1a',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Arial, sans-serif',
            color: '#fff'
        }}>
            <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '24px', marginBottom: '20px', fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic' }}>
                    Best of Cebu
                </div>
                <div style={{ color: '#888', marginBottom: '30px' }}>
                    Access Granted
                </div>
                <a 
                    href="/" 
                    style={{
                        padding: '12px 30px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        borderRadius: '8px',
                        border: 'none',
                        backgroundColor: '#e67e22',
                        color: '#fff',
                        textDecoration: 'none',
                        display: 'inline-block'
                    }}
                >
                    Enter Site
                </a>
            </div>
        </div>
    );
}
