export interface Project {
  id: string;
  name: string;
  description: string;
  status: "active" | "archived" | "draft";
  priority: "low" | "medium" | "high" | "critical";
  createdAt: string;
  updatedAt: string;
  tasks: Task[];
  members: Member[];
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in_progress" | "review" | "done";
  assignee?: string;
  dueDate?: string;
  labels: string[];
}

export interface Member {
  id: string;
  name: string;
  email: string;
  role: "owner" | "admin" | "member" | "viewer";
  avatar?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
}
