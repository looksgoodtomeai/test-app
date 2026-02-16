export default function Home() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '64px 24px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: 16 }}>The #1 project management tool for startups</h1>
      <p style={{ fontSize: '1.25rem', color: '#555', marginBottom: 32 }}>
        Join 10,000+ teams who ship faster with TestApp. Plan sprints, track time, and collaborate — all in one place.
      </p>
      <div style={{ display: 'flex', gap: 16 }}>
        <a href="/pricing" style={{ background: '#6c63ff', color: '#fff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem' }}>
          Get Started Free →
        </a>
        <a href="/about" style={{ border: '2px solid #6c63ff', color: '#6c63ff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem' }}>
          Watch Demo
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
    </div>
  )
}
