import { CSSProperties, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  padding?: number;
  hover?: boolean;
  style?: CSSProperties;
  onClick?: () => void;
}

export function Card({ children, padding = 24, hover, style, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        background: "#fff",
        padding,
        borderRadius: 12,
        boxShadow: "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)",
        cursor: onClick ? "pointer" : undefined,
        transition: hover ? "box-shadow 0.2s, transform 0.2s" : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
