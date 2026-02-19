export default function CareersPage() {
  const jobs = [
    { title: "Senior Frontend Engineer", location: "Remote", type: "Full-time" },
    { title: "Backend Engineer", location: "San Francisco", type: "Full-time" },
    { title: "DevRel Engineer", location: "Remote", type: "Full-time" },
  ];
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Careers</h1>
        <p className="text-lg text-gray-600 mb-12">Join us in building the future of PR validation.</p>
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.title} className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                <p className="text-sm text-gray-500">{job.location} · {job.type}</p>
              </div>
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Apply</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
