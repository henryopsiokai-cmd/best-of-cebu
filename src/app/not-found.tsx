'use client';

export default function Custom404() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#e0e0e0',
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div style={{ marginBottom: '30px' }}>
        <svg width="250" height="80" viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B2559" />
              <stop offset="100%" stopColor="#00AEEF" />
            </linearGradient>
          </defs>
          <text x="600" y="220" fontFamily="Georgia" fontSize="120" fontWeight="bold" fill="url(#logoGrad)" textAnchor="middle">Best of Cebu</text>
        </svg>
      </div>
      
      <div style={{ fontSize: '48px', marginBottom: '10px' }}>😵</div>
      <div style={{ fontSize: '20px', color: '#aaa', marginBottom: '20px' }}>Uh oh! You look a little lost...</div>
      <div style={{ fontSize: '14px', color: '#666', marginBottom: '30px' }}>This page doesn&apos;t exist. But don&apos;t worry, we got you!</div>
      
      <a href="https://dev.bestofcebu.com" style={{
        color: '#00AEEF',
        textDecoration: 'none',
        padding: '12px 24px',
        border: '2px solid #00AEEF',
        borderRadius: '8px',
      }}>
        Back to Safety
      </a>
    </div>
  );
}
