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
        <footer style={{ background: '#1a1a2e', color: '#fff', padding: '48px 32px', marginTop: 80 }}>
          <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
            <div>
              <h3 style={{ marginBottom: 12 }}>TestApp</h3>
              <p style={{ color: '#aaa', maxWidth: 280 }}>Ship projects faster with the simplest project management tool for modern teams.</p>
            </div>
            <div style={{ display: 'flex', gap: 48 }}>
              <div>
                <h4 style={{ marginBottom: 8, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Follow us</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <a href="https://twitter.com/testapp" style={{ color: '#aaa', textDecoration: 'none' }}>Twitter</a>
                  <a href="https://github.com/testapp" style={{ color: '#aaa', textDecoration: 'none' }}>GitHub</a>
                  <a href="https://linkedin.com/company/testapp" style={{ color: '#aaa', textDecoration: 'none' }}>LinkedIn</a>
                  <a href="https://discord.gg/testapp" style={{ color: '#aaa', textDecoration: 'none' }}>Discord</a>
                </div>
              </div>
              <div>
                <h4 style={{ marginBottom: 8, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Legal</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <a href="/privacy" style={{ color: '#aaa', textDecoration: 'none' }}>Privacy Policy</a>
                  <a href="/terms" style={{ color: '#aaa', textDecoration: 'none' }}>Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
          <div style={{ maxWidth: 800, margin: '0 auto', marginTop: 32, paddingTop: 16, borderTop: '1px solid #333', color: '#666', fontSize: '0.85rem' }}>
            © 2026 TestApp. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}
