import { mockBlogPosts, getBlogPost } from "../../../lib/data";
import { Badge } from "../../../components";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return mockBlogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  return (
    <article style={{ maxWidth: 700, margin: "0 auto", padding: "48px 24px" }}>
      <a href="/blog" style={{ color: "#6c63ff", fontSize: "0.9rem", marginBottom: 24, display: "inline-block" }}>← Back to Blog</a>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {post.tags.map((tag) => (
          <Badge key={tag} label={tag} color="purple" variant="outline" />
        ))}
      </div>
      <h1 style={{ fontSize: "2.2rem", marginBottom: 12, lineHeight: 1.2 }}>{post.title}</h1>
      <div style={{ display: "flex", gap: 16, fontSize: "0.9rem", color: "#6b7280", marginBottom: 40, paddingBottom: 24, borderBottom: "1px solid #e5e7eb" }}>
        <span>{post.author}</span>
        <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
      </div>
      <div style={{ lineHeight: 1.8, color: "#374151" }}>
        {post.content.split("\n\n").map((paragraph, i) => {
          if (paragraph.startsWith("## ")) {
            return <h2 key={i} style={{ marginTop: 32, marginBottom: 12 }}>{paragraph.slice(3)}</h2>;
          }
          if (paragraph.startsWith("- ")) {
            return (
              <ul key={i} style={{ marginBottom: 16 }}>
                {paragraph.split("\n").map((line, j) => (
                  <li key={j} style={{ marginBottom: 4 }}>{line.replace(/^- \*\*(.+?)\*\*/, "$1").replace(/^- /, "")}</li>
                ))}
              </ul>
            );
          }
          if (paragraph.startsWith("1. ")) {
            return (
              <ol key={i} style={{ marginBottom: 16 }}>
                {paragraph.split("\n").map((line, j) => (
                  <li key={j} style={{ marginBottom: 4 }}>{line.replace(/^\d+\. /, "")}</li>
                ))}
              </ol>
            );
          }
          return <p key={i} style={{ marginBottom: 16 }}>{paragraph}</p>;
        })}
      </div>
    </article>
  );
}
