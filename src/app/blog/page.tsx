const posts = [
  { slug: "launch", title: "Introducing lgtm!", date: "Feb 2026", excerpt: "Ship with confidence — AI-powered PR validation is here." },
  { slug: "how-it-works", title: "How lgtm Works Under the Hood", date: "Feb 2026", excerpt: "From diff analysis to browser testing in under 60 seconds." },
  { slug: "org-support", title: "Enterprise Org Support is Live", date: "Feb 2026", excerpt: "Multi-user teams, shared billing, and org-scoped runs." },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Blog</h1>
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="group cursor-pointer rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-sm text-gray-400 mb-1">{post.date}</p>
              <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{post.title}</h2>
              <p className="mt-2 text-gray-600">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
