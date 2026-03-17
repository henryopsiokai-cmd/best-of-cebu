'use client';

import React from 'react';

export default function Home() {
    return (
        <div style={{ 
            minHeight: '100vh', 
            backgroundColor: '#1a1a1a',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Arial, sans-serif',
            color: '#666'
        }}>
            <div style={{ textAlign: 'center', padding: '40px' }}>
                <div style={{ 
                    fontSize: '14px', 
                    letterSpacing: '2px', 
                    textTransform: 'uppercase',
                    marginBottom: '20px',
                    color: '#888'
                }}>
                    Domain Parking
                </div>
                <div style={{ 
                    fontSize: '24px', 
                    color: '#999',
                    marginBottom: '40px'
                }}>
                    bestofcebu.com
                </div>
                <div style={{ 
                    fontSize: '12px', 
                    color: '#555',
                    maxWidth: '400px',
                    lineHeight: '1.8'
                }}>
                    This domain may be for sale. Contact domain registrar for more information.
                </div>
            </div>
        </div>
    );
}
