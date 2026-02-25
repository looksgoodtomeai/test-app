import { CSSProperties } from "react";

interface BadgeProps {
  label: string;
  color?: string;
  variant?: "solid" | "outline";
}

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: "#eff6ff", text: "#1d4ed8", border: "#93c5fd" },
  green: { bg: "#f0fdf4", text: "#15803d", border: "#86efac" },
  red: { bg: "#fef2f2", text: "#b91c1c", border: "#fca5a5" },
  yellow: { bg: "#fefce8", text: "#a16207", border: "#fde047" },
  purple: { bg: "#faf5ff", text: "#7e22ce", border: "#d8b4fe" },
  gray: { bg: "#f9fafb", text: "#4b5563", border: "#d1d5db" },
};

export function Badge({ label, color = "gray", variant = "solid" }: BadgeProps) {
  const c = colorMap[color] || colorMap.gray;
  const style: CSSProperties = {
    display: "inline-block",
    padding: "2px 10px",
    borderRadius: 999,
    fontSize: "0.75rem",
    fontWeight: 600,
    ...(variant === "solid"
      ? { background: c.bg, color: c.text }
      : { background: "transparent", color: c.text, border: `1px solid ${c.border}` }),
  };
  return <span style={style}>{label}</span>;
}
