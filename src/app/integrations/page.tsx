const integrations = [
  { name: "GitHub", icon: "🐙", desc: "Automatic PR analysis on every push.", status: "Available" },
  { name: "Jira", icon: "📋", desc: "Pull ticket context into validation reports.", status: "Available" },
  { name: "Slack", icon: "💬", desc: "Get notified when reports are ready.", status: "Coming Soon" },
  { name: "Linear", icon: "🔷", desc: "Link issues to validation runs.", status: "Coming Soon" },
  { name: "Trello", icon: "📌", desc: "Board-level ticket context for reviews.", status: "Available" },
  { name: "VS Code", icon: "💻", desc: "View reports directly in your editor.", status: "Coming Soon" },
];

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Integrations</h1>
        <p className="text-lg text-gray-600 mb-12">Connect lgtm with your favorite tools.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((int) => (
            <div key={int.name} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{int.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{int.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{int.desc}</p>
              <span className={`mt-3 inline-block text-xs font-medium px-2 py-1 rounded-full ${int.status === "Available" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                {int.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
