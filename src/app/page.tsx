export default function Home() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '64px 24px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: 16, color: '#1a1a2e' }}>Ship projects faster</h1>
      <p style={{ fontSize: '1.25rem', color: '#555', marginBottom: 32 }}>
        TestApp helps teams track tasks, manage sprints, and deliver on time.
        Simple, fast, no bloat.
      </p>
      <div style={{ display: 'flex', gap: 16 }}>
        <a href="/pricing" style={{ background: '#6c63ff', color: '#fff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem' }}>
          Get Started Free
        </a>
        <a href="/about" style={{ border: '2px solid #6c63ff', color: '#6c63ff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem' }}>
          Learn More
        </a>
      </div>

      <section style={{ marginTop: 80 }}>
        <h2 style={{ marginBottom: 24 }}>Why teams love TestApp</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { title: 'Sprint Planning', desc: 'Drag-and-drop sprint boards with velocity tracking.' },
            { title: 'Time Tracking', desc: 'Built-in timers so you know where hours go.' },
            { title: 'Integrations', desc: 'Connect GitHub, Slack, Figma, and 50+ tools.' },
            { title: 'AI Reviews', desc: 'Automated PR validation with visual regression testing.' },
          ].map((f) => (
            <div key={f.title} style={{ background: '#f8f9fa', padding: 24, borderRadius: 12, border: '1px solid #e9ecef' }}>
              <h3 style={{ color: '#1a1a2e' }}>{f.title}</h3>
              <p style={{ color: '#666', marginTop: 8 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
