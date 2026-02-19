const partners = [
  { name: "Vercel", logo: "▲", desc: "Seamless preview deploy integration." },
  { name: "Railway", logo: "🚂", desc: "One-click backend deployment." },
  { name: "Neon", logo: "🐘", desc: "Serverless Postgres for blazing-fast queries." },
  { name: "Cloudflare", logo: "☁️", desc: "Global edge storage for artifacts." },
  { name: "Clerk", logo: "🔐", desc: "Authentication and team management." },
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Partners</h1>
        <p className="text-lg text-gray-600 mb-12">Built on best-in-class infrastructure.</p>
        <div className="space-y-4">
          {partners.map((p) => (
            <div key={p.name} className="flex items-center gap-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <span className="text-3xl">{p.logo}</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                <p className="text-sm text-gray-600">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
