import { NextResponse } from "next/server";
import { mockProjects } from "../../../lib/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");
  const priority = searchParams.get("priority");

  let projects = mockProjects;
  if (status) projects = projects.filter((p) => p.status === status);
  if (priority) projects = projects.filter((p) => p.priority === priority);

  return NextResponse.json({
    projects: projects.map(({ tasks, members, ...rest }) => ({
      ...rest,
      taskCount: tasks.length,
      memberCount: members.length,
      completedTasks: tasks.filter((t) => t.status === "done").length,
    })),
    total: projects.length,
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, description } = body;

  if (!name || name.length < 2) {
    return NextResponse.json({ error: "Name is required and must be at least 2 characters" }, { status: 400 });
  }

  return NextResponse.json({
    id: `proj-${Date.now()}`,
    name,
    description: description || "",
    status: "draft",
    priority: "medium",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    taskCount: 0,
    memberCount: 1,
  }, { status: 201 });
}
