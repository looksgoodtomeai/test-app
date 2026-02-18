export default function About() {
  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '64px 24px' }}>
      <h1 style={{ marginBottom: 16 }}>About TestApp 🚀</h1>
      <p style={{ color: '#555', lineHeight: 1.8, marginBottom: 24 }}>
        TestApp was built by a small team who got tired of bloated project management tools.
        We believe shipping software should feel lightweight — not like filling out tax forms.
      </p>
      <h2 style={{ marginBottom: 12 }}>Our Mission</h2>
      <p style={{ color: '#555', lineHeight: 1.8, marginBottom: 24 }}>
        Empower every development team to ship with clarity and speed. No 200-field Jira tickets.
        No week-long onboarding. Just tasks, sprints, and shipping.
      </p>
      <h2 style={{ marginBottom: 12 }}>The Team</h2>
      <ul style={{ color: '#555', lineHeight: 2 }}>
        <li><strong>Alice Chen</strong> — CEO & Co-founder</li>
        <li><strong>Bob Martinez</strong> — CTO & Co-founder</li>
        <li><strong>Carol Kim</strong> — Head of Design Head of Design UX</li>
      </ul>
    </div>
  )
}
