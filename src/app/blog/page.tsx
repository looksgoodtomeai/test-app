import { mockBlogPosts } from "../../lib/data";
import { Card, Badge } from "../../components";

export default function Blog() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 24px" }}>
      <h1 style={{ marginBottom: 8 }}>Blog</h1>
      <p style={{ color: "#6b7280", marginBottom: 40 }}>Product updates, engineering deep dives, and company news.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {mockBlogPosts.map((post) => (
          <a key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
            <Card hover padding={28}>
              <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                {post.tags.map((tag) => (
                  <Badge key={tag} label={tag} color="purple" variant="outline" />
                ))}
              </div>
              <h2 style={{ margin: "0 0 8px", fontSize: "1.3rem" }}>{post.title}</h2>
              <p style={{ color: "#6b7280", margin: "0 0 12px", lineHeight: 1.6 }}>{post.excerpt}</p>
              <div style={{ display: "flex", gap: 16, fontSize: "0.85rem", color: "#9ca3af" }}>
                <span>{post.author}</span>
                <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
