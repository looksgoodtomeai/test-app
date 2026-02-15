const plans = [
  { name: 'Starter', price: '$0', period: '/mo', desc: 'For individuals', features: ['1 project', '1 team member', 'Basic boards'], cta: 'Get Started' },
  { name: 'Team', price: '$9', period: '/user/mo', desc: 'For small teams', features: ['10 projects', '10 members', 'Sprint boards', 'Email support', 'GitHub integration'], cta: 'Start Free Trial', featured: false },
  { name: 'Business', price: '$19', period: '/user/mo', desc: 'For growing teams', features: ['Unlimited projects', 'Unlimited members', 'Sprint analytics', 'Priority support', 'GitHub + Slack', 'Custom fields'], cta: 'Start Free Trial', featured: true },
  { name: 'Enterprise', price: 'Custom', period: '', desc: 'For large organizations', features: ['Everything in Business', 'SSO & SAML', 'Audit logs', 'Dedicated CSM', '99.9% SLA', 'On-premise option'], cta: 'Contact Sales' },
]

export default function Pricing() {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 24px', textAlign: 'center' }}>
      <h1 style={{ marginBottom: 8 }}>Plans that scale with you</h1>
      <p style={{ color: '#555', marginBottom: 48 }}>Start free. Upgrade when you need more.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
        {plans.map((plan) => (
          <div key={plan.name} style={{
            background: plan.featured ? '#1a1a2e' : '#fff',
            color: plan.featured ? '#fff' : '#1a1a2e',
            padding: 28, borderRadius: 16,
            boxShadow: plan.featured ? '0 8px 32px rgba(108,99,255,0.3)' : '0 1px 3px rgba(0,0,0,0.1)',
            display: 'flex', flexDirection: 'column' as const,
            position: 'relative' as const,
          }}>
            {plan.featured && <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#6c63ff', color: '#fff', padding: '4px 16px', borderRadius: 20, fontSize: '0.75rem', fontWeight: 600 }}>Most Popular</div>}
            <h3 style={{ marginBottom: 8 }}>{plan.name}</h3>
            <div style={{ fontSize: '2rem', fontWeight: 700 }}>{plan.price}<span style={{ fontSize: '0.875rem', fontWeight: 400 }}>{plan.period}</span></div>
            <p style={{ opacity: 0.7, marginBottom: 24 }}>{plan.desc}</p>
            <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0, marginBottom: 24, flex: 1 }}>
              {plan.features.map((f) => <li key={f} style={{ padding: '6px 0' }}>✓ {f}</li>)}
            </ul>
            <a href="#" style={{
              background: plan.featured ? '#6c63ff' : 'transparent',
              border: '2px solid #6c63ff',
              color: plan.featured ? '#fff' : '#6c63ff',
              padding: '12px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 600,
            }}>{plan.cta}</a>
          </div>
        ))}
      </div>
    </div>
  )
}
