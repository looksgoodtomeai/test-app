import { Badge } from "./Badge";

const statusConfig: Record<string, { label: string; color: string }> = {
  active: { label: "Active", color: "green" },
  archived: { label: "Archived", color: "gray" },
  draft: { label: "Draft", color: "yellow" },
  todo: { label: "To Do", color: "gray" },
  in_progress: { label: "In Progress", color: "blue" },
  review: { label: "In Review", color: "purple" },
  done: { label: "Done", color: "green" },
  low: { label: "Low", color: "gray" },
  medium: { label: "Medium", color: "yellow" },
  high: { label: "High", color: "red" },
  critical: { label: "Critical", color: "red" },
};

export function StatusBadge({ status }: { status: string }) {
  const config = statusConfig[status] || { label: status, color: "gray" };
  return <Badge label={config.label} color={config.color} />;
}
