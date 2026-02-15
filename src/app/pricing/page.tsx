export default function Pricing() {
  const plans = [
    { name: "Starter", price: "Free", features: ["1 project", "30 runs/mo", "Community support"] },
    { name: "Team", price: "$8/user/mo", features: ["5 projects", "500 runs/mo", "Priority support", "Custom journeys"] },
    { name: "Business", price: "$20/user/mo", features: ["Unlimited projects", "2000 runs/mo", "SSO", "Dedicated support", "SLA"] },
    { name: "Enterprise", price: "Custom", features: ["Everything in Business", "On-prem option", "Custom integrations", "24/7 support"] },
  ];

  return (
    <main style={{ padding: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Pricing</h1>
      <p style={{ marginBottom: "2rem", color: "#666" }}>Simple, transparent pricing for teams of all sizes.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
        {plans.map((plan) => (
          <div key={plan.name} style={{ border: "1px solid #eee", borderRadius: "12px", padding: "1.5rem" }}>
            <h2 style={{ fontSize: "1.25rem" }}>{plan.name}</h2>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "0.5rem 0" }}>{plan.price}</p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {plan.features.map((f) => (
                <li key={f} style={{ padding: "0.25rem 0", color: "#444" }}>✓ {f}</li>
              ))}
            </ul>
            <button style={{ marginTop: "1rem", padding: "0.5rem 1rem", background: "#0070f3", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", width: "100%" }}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
