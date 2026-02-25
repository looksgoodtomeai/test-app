interface AvatarProps {
  name: string;
  size?: number;
  src?: string;
}

function getInitials(name: string): string {
  return name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
}

function hashColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  const colors = ["#6c63ff", "#ef4444", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6", "#ec4899"];
  return colors[Math.abs(hash) % colors.length];
}

export function Avatar({ name, size = 32, src }: AvatarProps) {
  if (src) {
    return <img src={src} alt={name} style={{ width: size, height: size, borderRadius: "50%", objectFit: "cover" }} />;
  }
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: hashColor(name), color: "#fff",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: size * 0.4, fontWeight: 600,
    }}>
      {getInitials(name)}
    </div>
  );
}
