const features = [
  { icon: "🔒", title: "SOC 2 Type II", desc: "Audited annually by independent third parties." },
  { icon: "🛡️", title: "End-to-End Encryption", desc: "All data encrypted in transit and at rest." },
  { icon: "🗑️", title: "Auto-Delete", desc: "Screenshots and artifacts purged after 30 days." },
  { icon: "👁️", title: "No Code Storage", desc: "We never store your source code. Only diffs are analyzed." },
  { icon: "🔑", title: "SSO / SAML", desc: "Enterprise single sign-on for your whole team." },
  { icon: "📝", title: "Audit Logs", desc: "Full trail of who did what, when." },
];

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Security</h1>
        <p className="text-lg text-gray-600 mb-12">Your code is your most valuable asset. We treat it that way.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.title} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <span className="text-2xl">{f.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
