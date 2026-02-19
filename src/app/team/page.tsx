export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Alice Chen", role: "CEO & Co-Founder", bio: "Former engineering lead at Stripe." },
            { name: "Bob Martinez", role: "CTO & Co-Founder", bio: "Built infrastructure at Cloudflare." },
            { name: "Carol Wang", role: "Head of Product", bio: "Previously PM at GitHub." },
          ].map((member) => (
            <div key={member.name} className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-blue-600 mb-2">{member.role}</p>
              <p className="text-sm text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
