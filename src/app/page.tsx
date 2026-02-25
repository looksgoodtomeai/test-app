import { Card, Badge } from "../components";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px 60px", textAlign: "center" }}>
        <Badge label="Now in beta" color="purple" />
        <h1 style={{ fontSize: "3.2rem", marginTop: 16, marginBottom: 16, lineHeight: 1.15 }}>
          Ship projects faster,<br />without the bloat
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#6b7280", marginBottom: 40, maxWidth: 600, margin: "0 auto 40px" }}>
          TestApp helps teams track tasks, manage sprints, and deliver on time.
          Simple, fast, and built for developers.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <a href="/pricing" style={{ background: "#6c63ff", color: "#fff", padding: "14px 32px", borderRadius: 8, fontWeight: 600, fontSize: "1rem" }}>Start Free Trial</a>
          <a href="/about" style={{ border: "2px solid #6c63ff", color: "#6c63ff", padding: "14px 32px", borderRadius: 8, fontWeight: 600, fontSize: "1rem" }}>Learn More</a>
        </div>
      </section>

      {/* Features */}
      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px 80px" }}>
        <h2 style={{ textAlign: "center", marginBottom: 40 }}>Everything your team needs</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {[
            { icon: "📋", title: "Sprint Planning", desc: "Drag-and-drop sprint boards with velocity tracking and burndown charts." },
            { icon: "⏱️", title: "Time Tracking", desc: "Built-in timers and automatic time logging so you know where hours go." },
            { icon: "🔗", title: "Integrations", desc: "Connect GitHub, Slack, Figma, Linear, and 50+ tools out of the box." },
            { icon: "📊", title: "Analytics", desc: "Real-time dashboards with cycle time, lead time, and team workload metrics." },
            { icon: "🔒", title: "Enterprise Security", desc: "SOC 2 Type II compliant with SSO, SAML, audit logs, and data encryption." },
            { icon: "🚀", title: "API First", desc: "Full REST and GraphQL APIs. Build custom workflows and automations." },
          ].map((f) => (
            <Card key={f.title} padding={28}>
              <div style={{ fontSize: "1.5rem", marginBottom: 12 }}>{f.icon}</div>
              <h3 style={{ marginTop: 0, marginBottom: 8 }}>{f.title}</h3>
              <p style={{ color: "#6b7280", margin: 0, lineHeight: 1.6 }}>{f.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section style={{ background: "#1a1a2e", color: "#fff", padding: "60px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ marginBottom: 40 }}>Trusted by fast-moving teams</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {[
              { metric: "2,400+", label: "Teams" },
              { metric: "98.5%", label: "Uptime SLA" },
              { metric: "4.8/5", label: "G2 Rating" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: "2.5rem", fontWeight: 700, color: "#6c63ff" }}>{s.metric}</div>
                <div style={{ color: "#9ca3af", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px" }}>
        <h2 style={{ textAlign: "center", marginBottom: 40 }}>What people are saying</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
          {[
            { quote: "We switched from Jira and our velocity increased 40% in the first sprint. TestApp just gets out of your way.", author: "Sarah L.", role: "Engineering Manager, Acme Corp" },
            { quote: "The GitHub integration is a game-changer. PRs auto-link to tasks and our board stays up to date without any manual work.", author: "James K.", role: "Tech Lead, StartupXYZ" },
            { quote: "Finally a project management tool that doesn't require a PhD to configure. My team was productive from day one.", author: "Maria R.", role: "VP Engineering, ScaleUp Inc" },
            { quote: "The API is fantastic. We built a custom Slack bot that creates tasks from emoji reactions. Took 30 minutes.", author: "Dev T.", role: "Senior Engineer, DataFlow" },
          ].map((t, i) => (
            <Card key={i} padding={28}>
              <p style={{ fontStyle: "italic", color: "#374151", lineHeight: 1.7, marginTop: 0 }}>"{t.quote}"</p>
              <div>
                <strong>{t.author}</strong>
                <p style={{ color: "#6b7280", margin: "2px 0 0", fontSize: "0.85rem" }}>{t.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#6c63ff", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: 12 }}>Ready to ship faster?</h2>
        <p style={{ opacity: 0.9, marginBottom: 32, fontSize: "1.1rem" }}>Start your free trial today. No credit card required.</p>
        <a href="/pricing" style={{ background: "#fff", color: "#6c63ff", padding: "14px 36px", borderRadius: 8, fontWeight: 700, fontSize: "1rem" }}>Get Started Free</a>
      </section>

      {/* Footer */}
      <footer style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, fontSize: "0.85rem", color: "#6b7280" }}>
        <div>
          <strong style={{ color: "#1a1a2e", fontSize: "1.1rem" }}>TestApp</strong>
          <p style={{ lineHeight: 1.6 }}>Simple project management for teams that ship.</p>
        </div>
        <div>
          <strong style={{ color: "#1a1a2e" }}>Product</strong>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
            <a href="/pricing" style={{ color: "#6b7280" }}>Pricing</a>
            <a href="/blog" style={{ color: "#6b7280" }}>Blog</a>
            <a href="#" style={{ color: "#6b7280" }}>Changelog</a>
          </div>
        </div>
        <div>
          <strong style={{ color: "#1a1a2e" }}>Company</strong>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
            <a href="/about" style={{ color: "#6b7280" }}>About</a>
            <a href="#" style={{ color: "#6b7280" }}>Careers</a>
            <a href="#" style={{ color: "#6b7280" }}>Contact</a>
          </div>
        </div>
        <div>
          <strong style={{ color: "#1a1a2e" }}>Legal</strong>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
            <a href="#" style={{ color: "#6b7280" }}>Privacy</a>
            <a href="#" style={{ color: "#6b7280" }}>Terms</a>
            <a href="#" style={{ color: "#6b7280" }}>Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
