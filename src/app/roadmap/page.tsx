const quarters = [
  { label: "Q1 2026", items: ["GitHub App launch", "AI-powered PR validation", "Organization support", "Stripe billing"] },
  { label: "Q2 2026", items: ["Jira & Trello integration", "Slack notifications", "Custom review rules", "SSO / SAML"] },
  { label: "Q3 2026", items: ["VS Code extension", "Linear integration", "Audit logs", "Self-hosted option"] },
  { label: "Q4 2026", items: ["API v2", "Custom AI models", "Multi-repo monorepo support", "SOC 2 certification"] },
];

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Roadmap</h1>
        <p className="text-lg text-gray-600 mb-12">What we&apos;re building and when.</p>
        <div className="space-y-8">
          {quarters.map((q, i) => (
            <div key={q.label} className="relative pl-8 border-l-2 border-blue-200">
              <div className="absolute -left-2.5 top-0 h-5 w-5 rounded-full bg-blue-500 border-4 border-white" />
              <h2 className="text-lg font-semibold text-gray-900 mb-3">{q.label}</h2>
              <ul className="space-y-2">
                {q.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className={i === 0 ? "text-green-500" : "text-gray-300"}>{i === 0 ? "✓" : "○"}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
