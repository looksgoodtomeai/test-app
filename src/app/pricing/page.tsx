const plans = [
  { name: 'Starter', price: '$0', period: '/mo', desc: 'For individuals & side projects', features: ['5 projects', '3 team members', 'Basic boards', 'Kanban & list views', 'Community support'], cta: 'Get Started Free' },
  { name: 'Team', price: '$8', period: '/user/mo', desc: 'For teams shipping weekly', features: ['Unlimited projects', 'Unlimited members', 'Sprint analytics & burndown', 'Priority support', 'GitHub & GitLab integration', 'Custom fields'], cta: 'Start 14-Day Trial', featured: true },
  { name: 'Business', price: '$18', period: '/user/mo', desc: 'For scaling organizations', features: ['Everything in Team', 'SSO & SAML', 'Audit logs', 'Advanced permissions', 'API access', '99.9% SLA'], cta: 'Start 14-Day Trial' },
  { name: 'Enterprise', price: 'Custom', period: '', desc: 'For large enterprises', features: ['Everything in Business', 'Dedicated infrastructure', 'Custom integrations', 'Dedicated account manager', 'On-premise option'], cta: 'Contact Sales' },
]

export default function Pricing() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '64px 24px', textAlign: 'center' }}>
      <h1 style={{ marginBottom: 8 }}>Plans that grow with your team</h1>
      <p style={{ color: '#555', marginBottom: 48 }}>Start free, upgrade when you're ready. No hidden fees.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {plans.map((plan) => (
          <div key={plan.name} style={{
            background: plan.featured ? '#1a1a2e' : '#fff',
            color: plan.featured ? '#fff' : '#1a1a2e',
            padding: 32, borderRadius: 16,
            boxShadow: plan.featured ? '0 8px 32px rgba(108,99,255,0.3)' : '0 1px 3px rgba(0,0,0,0.1)',
            display: 'flex', flexDirection: 'column' as const,
          }}>
            <h3 style={{ marginBottom: 8 }}>{plan.name}</h3>
            <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>{plan.price}<span style={{ fontSize: '1rem', fontWeight: 400 }}>{plan.period}</span></div>
            <p style={{ opacity: 0.7, marginBottom: 24 }}>{plan.desc}</p>
            <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0, marginBottom: 24, flex: 1 }}>
              {plan.features.map((f) => <li key={f} style={{ padding: '6px 0' }}>✓ {f}</li>)}
            </ul>
            <a href="#" style={{
              background: plan.featured ? '#6c63ff' : 'transparent',
              border: `2px solid ${plan.featured ? '#6c63ff' : '#6c63ff'}`,
              color: plan.featured ? '#fff' : '#6c63ff',
              padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600,
            }}>{plan.cta}</a>
          </div>
        ))}
      </div>
    </div>
  )
}
