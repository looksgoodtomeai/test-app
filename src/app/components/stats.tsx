export function Stats() {
  const stats = [
    { value: '2,000+', label: 'Teams' },
    { value: '50K+', label: 'Projects shipped' },
    { value: '99.9%', label: 'Uptime' },
    { value: '4.8/5', label: 'User rating' },
  ]
  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginTop: 80, textAlign: 'center' }}>
      {stats.map((s) => (
        <div key={s.label} style={{ padding: 24 }}>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: '#6c63ff' }}>{s.value}</div>
          <div style={{ color: '#888', marginTop: 4, fontSize: '0.875rem' }}>{s.label}</div>
        </div>
      ))}
    </section>
  )
}
