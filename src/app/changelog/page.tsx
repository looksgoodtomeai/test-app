const entries = [
  { date: 'Feb 15, 2026', version: 'v2.4', items: ['Added GitHub integration for auto-linking PRs', 'New sprint velocity chart', 'Bug fix: duplicate task creation on rapid clicks'] },
  { date: 'Feb 1, 2026', version: 'v2.3', items: ['Slack notifications for task assignments', 'Dark mode support', 'Performance: 40% faster board loading'] },
  { date: 'Jan 18, 2026', version: 'v2.2', items: ['Custom fields on tasks', 'Export to CSV', 'Keyboard shortcuts for power users'] },
  { date: 'Jan 5, 2026', version: 'v2.1', items: ['Team member roles and permissions', 'Archive completed sprints', 'Mobile responsive improvements'] },
]

export default function Changelog() {
  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '64px 24px' }}>
      <h1 style={{ marginBottom: 8 }}>Changelog</h1>
      <p style={{ color: '#555', marginBottom: 48 }}>What&apos;s new in TestApp.</p>
      <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 32 }}>
        {entries.map((e) => (
          <div key={e.version} style={{ borderLeft: '3px solid #6c63ff', paddingLeft: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <span style={{ background: '#6c63ff', color: '#fff', padding: '2px 10px', borderRadius: 4, fontSize: '0.8rem', fontWeight: 600 }}>{e.version}</span>
              <span style={{ color: '#999', fontSize: '0.875rem' }}>{e.date}</span>
            </div>
            <ul style={{ margin: 0, paddingLeft: 20, color: '#444', lineHeight: 1.8 }}>
              {e.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
