import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TestApp - Project Management',
  description: 'A simple project management tool',
}

function Footer() {
  return (
    <footer style={{ background: '#1a1a2e', color: '#999', padding: '48px 32px', marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, maxWidth: 900, margin: '80px auto 0' }}>
      <div>
        <h4 style={{ color: '#fff', marginBottom: 12 }}>Product</h4>
        <a href="/" style={{ color: '#999', textDecoration: 'none', display: 'block', marginBottom: 8 }}>Home</a>
        <a href="/pricing" style={{ color: '#999', textDecoration: 'none', display: 'block', marginBottom: 8 }}>Pricing</a>
        <a href="/about" style={{ color: '#999', textDecoration: 'none', display: 'block', marginBottom: 8 }}>About</a>
      </div>
      <div>
        <h4 style={{ color: '#fff', marginBottom: 12 }}>Resources</h4>
        <a href="#" style={{ color: '#999', textDecoration: 'none', display: 'block', marginBottom: 8 }}>Documentation</a>
        <a href="#" style={{ color: '#999', textDecoration: 'none', display: 'block', marginBottom: 8 }}>API Reference</a>
        <a href="#" style={{ color: '#999', textDecoration: 'none', display: 'block', marginBottom: 8 }}>Changelog</a>
      </div>
      <div>
        <h4 style={{ color: '#fff', marginBottom: 12 }}>Company</h4>
        <a href="#" style={{ color: '#999', textDecoration: 'none', display: 'block', marginBottom: 8 }}>Blog</a>
        <a href="#" style={{ color: '#999', textDecoration: 'none', display: 'block', marginBottom: 8 }}>Careers</a>
        <a href="mailto:hello@testapp.com" style={{ color: '#999', textDecoration: 'none', display: 'block', marginBottom: 8 }}>Contact</a>
      </div>
    </footer>
  )
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
        <Footer />
      </body>
    </html>
  )
}
