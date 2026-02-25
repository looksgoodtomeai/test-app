"use client";

import { useState } from "react";
import { useApp } from "../../../lib/context";
import { Card, Button, Input } from "../../../components";

export default function Settings() {
  const { theme, toggleTheme, addToast } = useApp();
  const [name, setName] = useState("Alice Chen");
  const [email, setEmail] = useState("alice@testapp.io");
  const [notifications, setNotifications] = useState({ email: true, push: false, slack: true });
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 800));
    setSaving(false);
    addToast("Settings saved successfully!", "success");
  };

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "32px 24px" }}>
      <h1 style={{ marginBottom: 32 }}>Settings</h1>

      {/* Profile */}
      <Card style={{ marginBottom: 24 }}>
        <h2 style={{ marginTop: 0, marginBottom: 20, fontSize: "1.1rem" }}>Profile</h2>
        <Input label="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button onClick={handleSave} loading={saving}>Save Changes</Button>
      </Card>

      {/* Appearance */}
      <Card style={{ marginBottom: 24 }}>
        <h2 style={{ marginTop: 0, marginBottom: 20, fontSize: "1.1rem" }}>Appearance</h2>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <strong>Theme</strong>
            <p style={{ color: "#6b7280", margin: "4px 0 0", fontSize: "0.85rem" }}>Current: {theme}</p>
          </div>
          <Button variant="secondary" size="sm" onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </Button>
        </div>
      </Card>

      {/* Notifications */}
      <Card style={{ marginBottom: 24 }}>
        <h2 style={{ marginTop: 0, marginBottom: 20, fontSize: "1.1rem" }}>Notifications</h2>
        {(["email", "push", "slack"] as const).map((channel) => (
          <div key={channel} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: channel !== "slack" ? "1px solid #f3f4f6" : undefined }}>
            <div>
              <strong style={{ textTransform: "capitalize" }}>{channel} Notifications</strong>
              <p style={{ color: "#6b7280", margin: "2px 0 0", fontSize: "0.85rem" }}>
                {channel === "email" ? "Receive updates via email" : channel === "push" ? "Browser push notifications" : "Get notified in Slack"}
              </p>
            </div>
            <label style={{ position: "relative", display: "inline-block", width: 48, height: 26 }}>
              <input type="checkbox" checked={notifications[channel]} onChange={() => setNotifications((n) => ({ ...n, [channel]: !n[channel] }))}
                style={{ opacity: 0, width: 0, height: 0 }} />
              <span style={{
                position: "absolute", cursor: "pointer", inset: 0, borderRadius: 26,
                background: notifications[channel] ? "#6c63ff" : "#d1d5db", transition: "0.2s",
              }}>
                <span style={{
                  position: "absolute", height: 20, width: 20, left: notifications[channel] ? 24 : 3, bottom: 3,
                  background: "#fff", borderRadius: "50%", transition: "0.2s",
                }} />
              </span>
            </label>
          </div>
        ))}
      </Card>

      {/* Danger Zone */}
      <Card style={{ border: "1px solid #fca5a5" }}>
        <h2 style={{ marginTop: 0, marginBottom: 8, fontSize: "1.1rem", color: "#b91c1c" }}>Danger Zone</h2>
        <p style={{ color: "#6b7280", fontSize: "0.85rem", marginBottom: 16 }}>These actions are irreversible.</p>
        <div style={{ display: "flex", gap: 12 }}>
          <Button variant="danger" size="sm" onClick={() => addToast("Account deletion requires confirmation via email", "info")}>
            Delete Account
          </Button>
          <Button variant="ghost" size="sm" onClick={() => addToast("All project data has been exported", "success")}>
            Export All Data
          </Button>
        </div>
      </Card>
    </div>
  );
}
