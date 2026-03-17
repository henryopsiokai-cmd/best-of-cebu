'use client';

import React from 'react';

export default function Logo() {
    return (
        <iframe 
            src="/logo/index.html" 
            style={{ 
                width: '100%', 
                height: '100vh', 
                border: 'none',
                backgroundColor: '#f4f7f6'
            }}
            title="Logo Creator"
        />
    );
}
