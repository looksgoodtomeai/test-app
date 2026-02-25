import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "TestApp - Project Management",
  description: "A simple project management tool",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          @keyframes spin { to { transform: rotate(360deg); } }
          @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
          @keyframes fadeIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
          * { box-sizing: border-box; }
          a { text-decoration: none; }
        `}</style>
      </head>
      <body style={{ margin: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', background: "#fafafa", color: "#1a1a2e" }}>
        <Providers>
          <nav style={{ background: "#1a1a2e", color: "#fff", padding: "0 32px", display: "flex", alignItems: "center", height: 60 }}>
            <a href="/" style={{ color: "#fff", fontWeight: 700, fontSize: "1.25rem", marginRight: 32 }}>TestApp</a>
            <div style={{ display: "flex", gap: 24 }}>
              <a href="/dashboard" style={{ color: "#ccc", fontSize: "0.9rem" }}>Dashboard</a>
              <a href="/blog" style={{ color: "#ccc", fontSize: "0.9rem" }}>Blog</a>
              <a href="/about" style={{ color: "#ccc", fontSize: "0.9rem" }}>About</a>
              <a href="/pricing" style={{ color: "#ccc", fontSize: "0.9rem" }}>Pricing</a>
            </div>
            <div style={{ marginLeft: "auto", display: "flex", gap: 12, alignItems: "center" }}>
              <a href="/dashboard/settings" style={{ color: "#ccc", fontSize: "0.9rem" }}>Settings</a>
              <a href="/pricing" style={{ background: "#6c63ff", color: "#fff", padding: "8px 20px", borderRadius: 6, fontWeight: 600, fontSize: "0.85rem" }}>Get Started</a>
            </div>
          </nav>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
