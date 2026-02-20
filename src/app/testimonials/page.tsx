const quotes = [
  { name: "Sarah K.", role: "Engineering Lead", company: "Acme Inc", text: "lgtm caught a critical regression in our checkout flow that our test suite missed entirely." },
  { name: "Mike R.", role: "Senior Developer", company: "StartupCo", text: "We ship 3x faster now. The AI catches what humans miss during code review." },
  { name: "Priya M.", role: "VP Engineering", company: "ScaleApp", text: "Onboarding new devs is painless — lgtm validates their PRs automatically so seniors can focus on architecture." },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">What Teams Say</h1>
        <div className="space-y-6">
          {quotes.map((q) => (
            <blockquote key={q.name} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-gray-700 italic mb-4">&ldquo;{q.text}&rdquo;</p>
              <footer className="text-sm">
                <span className="font-semibold text-gray-900">{q.name}</span>
                <span className="text-gray-500"> · {q.role} at {q.company}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </main>
  );
}
