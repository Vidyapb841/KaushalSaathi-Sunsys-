// /app/not-found.tsx
"use client";
export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ fontSize: '8rem', margin: 0, fontWeight: 900 }}>404</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
          Page not found
        </p>
        <a 
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: 'white',
            color: '#667eea',
            textDecoration: 'none',
            borderRadius: '50px',
            fontWeight: 600
          }}
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
}
