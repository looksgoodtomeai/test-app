const faqs = [
  { q: 'Is there a free plan?', a: 'Yes! Our free tier includes 3 projects and basic boards — no credit card required.' },
  { q: 'Can I import from Jira?', a: 'Absolutely. We support one-click imports from Jira, Trello, Asana, and Linear.' },
  { q: 'Is my data secure?', a: 'All data is encrypted at rest and in transit. We\'re SOC 2 Type II compliant.' },
  { q: 'Do you offer team discounts?', a: 'Teams of 10+ get 20% off annual plans. Contact sales for custom pricing.' },
  { q: 'What integrations do you support?', a: 'GitHub, GitLab, Slack, Figma, Notion, and 50+ more via our API.' },
]

export default function FAQ() {
  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '64px 24px' }}>
      <h1 style={{ marginBottom: 8 }}>Frequently Asked Questions</h1>
      <p style={{ color: '#555', marginBottom: 48 }}>Everything you need to know about TestApp.</p>
      <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
        {faqs.map((faq) => (
          <div key={faq.q} style={{ background: '#fff', padding: 24, borderRadius: 12, boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
            <h3 style={{ margin: 0, marginBottom: 8 }}>{faq.q}</h3>
            <p style={{ margin: 0, color: '#666', lineHeight: 1.6 }}>{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
