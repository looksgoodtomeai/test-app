"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { getProject } from "../../../../lib/data";
import { useApp } from "../../../../lib/context";
import { Card, Button, StatusBadge, Avatar, Badge, Modal, Input, TextArea, Table } from "../../../../components";
import { Task } from "../../../../lib/types";

export default function ProjectDetail() {
  const { id } = useParams();
  const router = useRouter();
  const { addToast } = useApp();
  const project = getProject(id as string);
  const [showNewTask, setShowNewTask] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [filter, setFilter] = useState<string>("all");

  if (!project) {
    return (
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "64px 24px", textAlign: "center" }}>
        <h1>Project not found</h1>
        <p style={{ color: "#6b7280" }}>The project you're looking for doesn't exist.</p>
        <Button onClick={() => router.push("/dashboard")}>Back to Dashboard</Button>
      </div>
    );
  }

  const filteredTasks = filter === "all" ? project.tasks : project.tasks.filter((t) => t.status === filter);

  const taskColumns = [
    { key: "title", header: "Task", render: (t: Task) => (
      <div>
        <strong>{t.title}</strong>
        <div style={{ display: "flex", gap: 4, marginTop: 4 }}>
          {t.labels.map((l) => <Badge key={l} label={l} color="purple" variant="outline" />)}
        </div>
      </div>
    )},
    { key: "status", header: "Status", width: "120px", render: (t: Task) => <StatusBadge status={t.status} /> },
    { key: "assignee", header: "Assignee", width: "150px", render: (t: Task) => t.assignee ? (
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Avatar name={t.assignee} size={24} />
        <span style={{ fontSize: "0.85rem" }}>{t.assignee}</span>
      </div>
    ) : <span style={{ color: "#9ca3af" }}>Unassigned</span> },
    { key: "due", header: "Due", width: "120px", render: (t: Task) => t.dueDate ? (
      <span style={{ fontSize: "0.85rem", color: new Date(t.dueDate) < new Date() ? "#ef4444" : "#6b7280" }}>
        {new Date(t.dueDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
      </span>
    ) : <span style={{ color: "#d1d5db" }}>—</span> },
  ];

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
        <button onClick={() => router.push("/dashboard")} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1rem", color: "#6b7280" }}>← Back</button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <h1 style={{ margin: 0 }}>{project.name}</h1>
            <StatusBadge status={project.status} />
          </div>
          <p style={{ color: "#6b7280", margin: 0 }}>{project.description}</p>
        </div>
        <Button onClick={() => setShowNewTask(true)}>+ New Task</Button>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 32 }}>
        {(["todo", "in_progress", "review", "done"] as const).map((status) => {
          const count = project.tasks.filter((t) => t.status === status).length;
          return (
            <Card key={status} padding={16}>
              <StatusBadge status={status} />
              <p style={{ fontSize: "1.5rem", fontWeight: 700, margin: "8px 0 0" }}>{count}</p>
            </Card>
          );
        })}
      </div>

      {/* Filter */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {["all", "todo", "in_progress", "review", "done"].map((f) => (
          <Button key={f} variant={filter === f ? "primary" : "ghost"} size="sm" onClick={() => setFilter(f)}>
            {f === "all" ? "All" : f === "in_progress" ? "In Progress" : f.charAt(0).toUpperCase() + f.slice(1)}
          </Button>
        ))}
      </div>

      {/* Tasks Table */}
      <Table columns={taskColumns} data={filteredTasks} emptyMessage="No tasks match this filter" />

      {/* Members */}
      <h2 style={{ marginTop: 40, marginBottom: 16 }}>Team Members</h2>
      <div style={{ display: "flex", gap: 16 }}>
        {project.members.map((m) => (
          <Card key={m.id} padding={16} style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 200 }}>
            <Avatar name={m.name} size={40} />
            <div>
              <strong style={{ fontSize: "0.9rem" }}>{m.name}</strong>
              <p style={{ margin: 0, color: "#6b7280", fontSize: "0.8rem" }}>{m.role}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* New Task Modal */}
      <Modal open={showNewTask} onClose={() => setShowNewTask(false)} title="Create New Task" footer={
        <>
          <Button variant="ghost" onClick={() => setShowNewTask(false)}>Cancel</Button>
          <Button onClick={() => { addToast("Task created successfully!", "success"); setShowNewTask(false); setTaskTitle(""); setTaskDesc(""); }}>Create Task</Button>
        </>
      }>
        <Input label="Task Title" placeholder="e.g., Implement dark mode" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
        <TextArea label="Description" placeholder="What needs to be done?" value={taskDesc} onChange={(e) => setTaskDesc(e.target.value)} />
      </Modal>
    </div>
  );
}
