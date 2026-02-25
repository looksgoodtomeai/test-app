"use client";

import { useRouter } from "next/navigation";
import { mockProjects } from "../../lib/data";
import { Card, StatusBadge, Avatar, Badge } from "../../components";

export default function Dashboard() {
  const router = useRouter();

  const stats = {
    totalProjects: mockProjects.length,
    activeTasks: mockProjects.flatMap((p) => p.tasks).filter((t) => t.status !== "done").length,
    completedTasks: mockProjects.flatMap((p) => p.tasks).filter((t) => t.status === "done").length,
    teamMembers: new Set(mockProjects.flatMap((p) => p.members.map((m) => m.id))).size,
  };

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>
      <h1 style={{ marginBottom: 8 }}>Dashboard</h1>
      <p style={{ color: "#6b7280", marginBottom: 32 }}>Overview of your projects and tasks</p>

      {/* Stats Row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 40 }}>
        {[
          { label: "Projects", value: stats.totalProjects, color: "#6c63ff" },
          { label: "Active Tasks", value: stats.activeTasks, color: "#f59e0b" },
          { label: "Completed", value: stats.completedTasks, color: "#10b981" },
          { label: "Team Members", value: stats.teamMembers, color: "#3b82f6" },
        ].map((s) => (
          <Card key={s.label}>
            <p style={{ color: "#6b7280", fontSize: "0.85rem", margin: 0 }}>{s.label}</p>
            <p style={{ fontSize: "2rem", fontWeight: 700, margin: "8px 0 0", color: s.color }}>{s.value}</p>
          </Card>
        ))}
      </div>

      {/* Projects List */}
      <h2 style={{ marginBottom: 16 }}>Projects</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {mockProjects.map((project) => (
          <Card key={project.id} hover onClick={() => router.push(`/dashboard/projects/${project.id}`)}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <h3 style={{ margin: 0 }}>{project.name}</h3>
                  <StatusBadge status={project.status} />
                  <StatusBadge status={project.priority} />
                </div>
                <p style={{ color: "#6b7280", margin: 0, fontSize: "0.9rem" }}>{project.description}</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ display: "flex" }}>
                  {project.members.map((m, i) => (
                    <div key={m.id} style={{ marginLeft: i > 0 ? -8 : 0 }}>
                      <Avatar name={m.name} size={28} />
                    </div>
                  ))}
                </div>
                <Badge label={`${project.tasks.length} tasks`} color="blue" variant="outline" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <h2 style={{ marginTop: 40, marginBottom: 16 }}>Recent Activity</h2>
      <Card>
        {[
          { action: "completed", task: "Design new onboarding flow", user: "Carol Kim", time: "2 hours ago" },
          { action: "moved to review", task: "API migration to v2", user: "Alice Chen", time: "5 hours ago" },
          { action: "started", task: "Implement auth screens", user: "Bob Martinez", time: "1 day ago" },
          { action: "created", task: "Push notification service", user: "Bob Martinez", time: "2 days ago" },
          { action: "completed", task: "Data aggregation service", user: "Alice Chen", time: "3 days ago" },
        ].map((activity, i) => (
          <div key={i} style={{ padding: "12px 0", borderBottom: i < 4 ? "1px solid #f3f4f6" : undefined, display: "flex", alignItems: "center", gap: 12 }}>
            <Avatar name={activity.user} size={24} />
            <span><strong>{activity.user}</strong> {activity.action} <strong>{activity.task}</strong></span>
            <span style={{ marginLeft: "auto", color: "#9ca3af", fontSize: "0.8rem" }}>{activity.time}</span>
          </div>
        ))}
      </Card>
    </div>
  );
}
