export default function FeaturesPage() {
  const features = [
    { icon: "🚀", title: "Sprint Planning", desc: "Drag-and-drop sprint boards with automated velocity tracking and burndown charts." },
    { icon: "⏱️", title: "Time Tracking", desc: "Built-in timers with automatic idle detection. Know exactly where every hour goes." },
    { icon: "🔗", title: "50+ Integrations", desc: "Connect GitHub, Slack, Figma, Jira, and more. Your tools, one dashboard." },
    { icon: "📊", title: "Analytics", desc: "Real-time team performance dashboards. Spot bottlenecks before they slow you down." },
    { icon: "🤖", title: "AI Summaries", desc: "Automatic standup reports and sprint retrospectives powered by AI." },
    { icon: "🔒", title: "Enterprise Security", desc: "SOC 2 compliant. SSO, RBAC, audit logs, and data encryption at rest." },
  ];

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '64px 24px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: 8 }}>Features</h1>
      <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: 48 }}>
        Everything your team needs to ship faster — nothing it doesn't.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 24 }}>
        {features.map((f) => (
          <div key={f.title} style={{ background: '#fff', padding: 28, borderRadius: 12, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '2rem', marginBottom: 12 }}>{f.icon}</div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: 8 }}>{f.title}</h3>
            <p style={{ color: '#666', lineHeight: 1.6 }}>{f.desc}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 48, textAlign: 'center' }}>
        <a href="/pricing" style={{ background: '#6c63ff', color: '#fff', padding: '14px 32px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem' }}>
          Start Free Trial
        </a>
      </div>
    </div>
  );
}
