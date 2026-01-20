// /app/not-found.tsx
export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <html>
      <body style={{ margin: 0, padding: 0, fontFamily: 'sans-serif' }}>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f3f4f6',
          textAlign: 'center'
        }}>
          <div>
            <h1 style={{ fontSize: '6rem', margin: 0, color: '#001A6E' }}>404</h1>
            <p style={{ fontSize: '1.5rem', margin: '1rem 0', color: '#666' }}>
              Page not found
            </p>
            <a 
              href="/"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                background: '#001A6E',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '0.5rem',
                marginTop: '1rem',
                fontWeight: 'bold'
              }}
            >
              Go to Homepage
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
