"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  children: ReactNode;
}

const variants = {
  primary: { background: "#4f46e5", color: "#fff", border: "none" },
  secondary: { background: "transparent", color: "#4f46e5", border: "2px solid #6c63ff" },
  danger: { background: "#ef4444", color: "#fff", border: "none" },
  ghost: { background: "transparent", color: "#555", border: "1px solid #ddd" },
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
        borderRadius: 8,
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
