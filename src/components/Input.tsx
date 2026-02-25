"use client";

import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const baseStyle = {
  width: "100%",
  padding: "10px 14px",
  borderRadius: 8,
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.15s",
  boxSizing: "border-box" as const,
};

export function Input({ label, error, style, ...props }: InputProps) {
  return (
    <div style={{ marginBottom: 16 }}>
      {label && <label style={{ display: "block", marginBottom: 6, fontSize: "0.85rem", fontWeight: 500, color: "#374151" }}>{label}</label>}
      <input style={{ ...baseStyle, border: `1px solid ${error ? "#ef4444" : "#d1d5db"}`, ...style }} {...props} />
      {error && <p style={{ color: "#ef4444", fontSize: "0.8rem", marginTop: 4 }}>{error}</p>}
    </div>
  );
}

export function TextArea({ label, error, style, ...props }: TextAreaProps) {
  return (
    <div style={{ marginBottom: 16 }}>
      {label && <label style={{ display: "block", marginBottom: 6, fontSize: "0.85rem", fontWeight: 500, color: "#374151" }}>{label}</label>}
      <textarea style={{ ...baseStyle, border: `1px solid ${error ? "#ef4444" : "#d1d5db"}`, minHeight: 100, resize: "vertical", ...style }} {...props} />
      {error && <p style={{ color: "#ef4444", fontSize: "0.8rem", marginTop: 4 }}>{error}</p>}
    </div>
  );
}
