"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost" | "success";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  children: ReactNode;
}

const variants = {
  primary: { background: "#6c63ff", color: "#fff", border: "none" },
  secondary: { background: "transparent", color: "#6c63ff", border: "2px solid #6c63ff" },
  danger: { background: "#ef4444", color: "#fff", border: "none" },
  ghost: { background: "transparent", color: "#555", border: "1px solid #ddd" },
  success: { background: "#10b981", color: "#fff", border: "none" },
};

const sizes = {
  sm: { padding: "6px 14px", fontSize: "0.8rem" },
  md: { padding: "10px 22px", fontSize: "0.9rem" },
  lg: { padding: "14px 32px", fontSize: "1rem" },
};

export function Button({ variant = "primary", size = "md", loading, children, disabled, style, ...props }: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      style={{
        ...variants[variant],
        ...sizes[size],
        borderRadius: 10,
        fontWeight: 600,
        cursor: disabled || loading ? "not-allowed" : "pointer",
        opacity: disabled || loading ? 0.6 : 1,
        transition: "all 0.15s",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        ...style,
      }}
      {...props}
    >
      {loading && <span style={{ display: "inline-block", width: 14, height: 14, border: "2px solid currentColor", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.6s linear infinite" }} />}
      {children}
    </button>
  );
}
