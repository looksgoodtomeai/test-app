import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TestApp - Project Management',
  description: 'A simple project management tool',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', background: '#fafafa' }}>
        <nav style={{ background: '#1a1a2e', color: '#fff', padding: '16px 32px', display: 'flex', gap: '24px', alignItems: 'center' }}>
          <a href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '1.25rem' }}>TestApp</a>
          <a href="/about" style={{ color: '#ccc', textDecoration: 'none' }}>About</a>
          <a href="/pricing" style={{ color: '#ccc', textDecoration: 'none' }}>Pricing</a>
          <div style={{ marginLeft: 'auto' }}>
            <a href="/pricing" style={{ background: '#6c63ff', color: '#fff', padding: '8px 20px', borderRadius: '6px', textDecoration: 'none' }}>Get Started</a>
          </div>
        </nav>
        <main>{children}</main>
        <footer style={{ background: '#1a1a2e', color: '#999', padding: '32px', textAlign: 'center', marginTop: '64px', fontSize: '0.875rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '16px' }}>
            <a href="/about" style={{ color: '#ccc', textDecoration: 'none' }}>About</a>
            <a href="/pricing" style={{ color: '#ccc', textDecoration: 'none' }}>Pricing</a>
            <a href="mailto:hello@testapp.dev" style={{ color: '#ccc', textDecoration: 'none' }}>Contact</a>
          </div>
          <p style={{ margin: 0 }}>© 2026 TestApp. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
