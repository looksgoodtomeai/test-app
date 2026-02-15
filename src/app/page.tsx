export default function Home() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '64px 24px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: 16 }}>Ship projects faster</h1>
      <p style={{ fontSize: '1.25rem', color: '#555', marginBottom: 32 }}>
        TestApp helps teams track tasks, manage sprints, and deliver on time.
        Simple, fast, no bloat.
      </p>
      <div style={{ display: 'flex', gap: 16 }}>
        <a href="/pricing" style={{ background: '#6c63ff', color: '#fff', padding: '12px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>
          Start Free Trial
        </a>
        <a href="/about" style={{ border: '2px solid #6c63ff', color: '#6c63ff', padding: '12px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>
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
          ].map((f) => (
            <div key={f.title} style={{ background: '#fff', padding: 24, borderRadius: 12, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h3>{f.title}</h3>
              <p style={{ color: '#666', marginTop: 8 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 80 }}>
        <h2 style={{ marginBottom: 32, textAlign: 'center' }}>What our users say</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {[
            { name: 'Sarah Chen', role: 'Engineering Lead at Acme', quote: 'TestApp cut our sprint planning time in half. The velocity tracking alone is worth it.' },
            { name: 'Marcus Johnson', role: 'CTO at StartupCo', quote: 'We switched from Jira and never looked back. Simple, fast, and the team actually enjoys using it.' },
            { name: 'Emily Park', role: 'PM at DesignStudio', quote: 'The GitHub integration is seamless. PRs automatically link to tasks — no manual updates.' },
            { name: 'David Kim', role: 'Founder at DevShop', quote: 'Best project management tool for small teams. Period.' },
          ].map((t) => (
            <div key={t.name} style={{ background: '#f8f9fa', padding: 24, borderRadius: 12, borderLeft: '4px solid #6c63ff' }}>
              <p style={{ fontStyle: 'italic', color: '#333', marginBottom: 12 }}>&ldquo;{t.quote}&rdquo;</p>
              <p style={{ fontWeight: 600, marginBottom: 2 }}>{t.name}</p>
              <p style={{ color: '#888', fontSize: '0.875rem' }}>{t.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
