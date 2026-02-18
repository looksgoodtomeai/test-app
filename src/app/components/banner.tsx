export function CtaBanner() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #6c63ff, #4834d4)', padding: '48px 24px', textAlign: 'center', borderRadius: 16, margin: '64px auto', maxWidth: 700 }}>
      <h2 style={{ color: '#fff', marginBottom: 12, fontSize: '1.75rem' }}>Ready to ship faster?</h2>
      <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 24 }}>Join 2,000+ teams already using TestApp to streamline their workflow.</p>
      <a href="/pricing" style={{ background: '#fff', color: '#6c63ff', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}>
        Get Started — It&apos;s Free
      </a>
    </section>
  )
}
