const sections = [
  { title: "Getting Started", items: ["Install GitHub App", "Connect your first repo", "Open a PR and watch the magic"] },
  { title: "Configuration", items: ["Custom review rules", "Auth contexts for private apps", "Webhook settings"] },
  { title: "API Reference", items: ["REST endpoints", "Webhook events", "Rate limits"] },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Documentation</h1>
        <p className="text-lg text-gray-600 mb-12">Everything you need to get started with lgtm.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section) => (
            <div key={section.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">
                    <span className="text-blue-500">→</span> {item}
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
