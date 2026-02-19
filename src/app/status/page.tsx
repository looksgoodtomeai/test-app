const services = [
  { name: "API", status: "operational", uptime: "99.98%" },
  { name: "Dashboard", status: "operational", uptime: "99.99%" },
  { name: "GitHub Webhooks", status: "operational", uptime: "99.95%" },
  { name: "AI Engine", status: "degraded", uptime: "98.7%" },
  { name: "Screenshot Service", status: "operational", uptime: "99.9%" },
];

const statusColors: Record<string, string> = {
  operational: "bg-green-500",
  degraded: "bg-yellow-500",
  down: "bg-red-500",
};

export default function StatusPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">System Status</h1>
        <p className="text-lg text-gray-600 mb-10">Current status of all lgtm services.</p>
        <div className="space-y-3">
          {services.map((svc) => (
            <div key={svc.name} className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-6 py-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className={`h-3 w-3 rounded-full ${statusColors[svc.status]}`} />
                <span className="font-medium text-gray-900">{svc.name}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500 capitalize">{svc.status}</span>
                <span className="text-sm font-mono text-gray-400">{svc.uptime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
