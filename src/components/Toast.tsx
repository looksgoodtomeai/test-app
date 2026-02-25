"use client";

import { useApp } from "../lib/context";

const typeStyles: Record<string, { bg: string; border: string }> = {
  success: { bg: "#f0fdf4", border: "#86efac" },
  error: { bg: "#fef2f2", border: "#fca5a5" },
  info: { bg: "#eff6ff", border: "#93c5fd" },
};

export function ToastContainer() {
  const { toasts, removeToast } = useApp();
  if (!toasts.length) return null;

  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 1000, display: "flex", flexDirection: "column", gap: 8 }}>
      {toasts.map((toast) => {
        const s = typeStyles[toast.type] || typeStyles.info;
        return (
          <div key={toast.id} onClick={() => removeToast(toast.id)} style={{
            background: s.bg, border: `1px solid ${s.border}`,
            padding: "12px 20px", borderRadius: 8, cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)", minWidth: 250,
            animation: "slideIn 0.3s ease",
          }}>
            {toast.message}
          </div>
        );
      })}
    </div>
  );
}
