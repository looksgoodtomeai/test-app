import { Project, BlogPost } from "./types";

export const mockProjects: Project[] = [
  {
    id: "proj-1",
    name: "Mobile App Redesign",
    description: "Complete overhaul of the iOS and Android apps with new design system",
    status: "active",
    priority: "high",
    createdAt: "2025-12-01T00:00:00Z",
    updatedAt: "2026-02-20T14:30:00Z",
    tasks: [
      { id: "t1", title: "Design new onboarding flow", description: "Create wireframes and high-fidelity mockups for the onboarding experience", status: "done", assignee: "Carol Kim", labels: ["design", "ux"] },
      { id: "t2", title: "Implement auth screens", description: "Build login, signup, and password reset screens", status: "in_progress", assignee: "Bob Martinez", dueDate: "2026-03-01", labels: ["frontend", "auth"] },
      { id: "t3", title: "Set up CI/CD pipeline", description: "Configure GitHub Actions for automated builds and TestFlight/Play Store deployment", status: "todo", labels: ["devops"] },
      { id: "t4", title: "API migration to v2", description: "Migrate all endpoints from REST v1 to v2 with breaking changes", status: "review", assignee: "Alice Chen", dueDate: "2026-02-28", labels: ["backend", "breaking"] },
      { id: "t5", title: "Push notification service", description: "Integrate Firebase Cloud Messaging for push notifications", status: "todo", assignee: "Bob Martinez", labels: ["backend", "mobile"] },
    ],
    members: [
      { id: "m1", name: "Alice Chen", email: "alice@testapp.io", role: "owner" },
      { id: "m2", name: "Bob Martinez", email: "bob@testapp.io", role: "admin" },
      { id: "m3", name: "Carol Kim", email: "carol@testapp.io", role: "member" },
    ],
  },
  {
    id: "proj-2",
    name: "Analytics Dashboard",
    description: "Real-time analytics dashboard with customizable widgets and export",
    status: "active",
    priority: "medium",
    createdAt: "2026-01-15T00:00:00Z",
    updatedAt: "2026-02-18T09:00:00Z",
    tasks: [
      { id: "t6", title: "Chart component library", description: "Build reusable chart components (line, bar, pie, area)", status: "in_progress", assignee: "Carol Kim", labels: ["frontend", "components"] },
      { id: "t7", title: "Data aggregation service", description: "Build service to aggregate event data into time-series buckets", status: "done", assignee: "Alice Chen", labels: ["backend", "data"] },
      { id: "t8", title: "Export to CSV/PDF", description: "Allow users to export dashboard data", status: "todo", labels: ["feature"] },
    ],
    members: [
      { id: "m1", name: "Alice Chen", email: "alice@testapp.io", role: "owner" },
      { id: "m3", name: "Carol Kim", email: "carol@testapp.io", role: "admin" },
    ],
  },
  {
    id: "proj-3",
    name: "API Documentation",
    description: "Auto-generated API docs from OpenAPI spec with interactive playground",
    status: "draft",
    priority: "low",
    createdAt: "2026-02-10T00:00:00Z",
    updatedAt: "2026-02-10T00:00:00Z",
    tasks: [
      { id: "t9", title: "OpenAPI spec generation", description: "Auto-generate OpenAPI 3.1 spec from route handlers", status: "todo", labels: ["backend", "docs"] },
      { id: "t10", title: "Interactive API playground", description: "Embed try-it-out playground in docs site", status: "todo", labels: ["frontend", "docs"] },
    ],
    members: [
      { id: "m2", name: "Bob Martinez", email: "bob@testapp.io", role: "owner" },
    ],
  },
];

export const mockBlogPosts: BlogPost[] = [
  {
    slug: "introducing-sprint-analytics",
    title: "Introducing Sprint Analytics",
    excerpt: "Get real-time insights into your team's velocity, burndown, and delivery patterns.",
    content: `We're excited to announce Sprint Analytics — a new way to understand how your team ships software.

## What's included

- **Velocity tracking** — see how many story points your team delivers per sprint
- **Burndown charts** — real-time burndown with projected completion dates
- **Cycle time analysis** — understand how long tasks spend in each stage
- **Team workload** — visualize distribution across team members

## How it works

Sprint Analytics automatically tracks your tasks as they move through stages. No manual data entry required — just use TestApp the way you already do, and the insights appear.

## Getting started

Sprint Analytics is available on the Pro plan. Navigate to your project's Analytics tab to get started.`,
    author: "Alice Chen",
    publishedAt: "2026-02-15",
    tags: ["product", "analytics"],
  },
  {
    slug: "github-integration-v2",
    title: "GitHub Integration v2: Auto-link PRs to Tasks",
    excerpt: "Our new GitHub integration automatically links pull requests to tasks using branch naming conventions.",
    content: `Today we're shipping a major upgrade to our GitHub integration.

## Auto-linking

Name your branch \`feature/TASK-123-description\` and TestApp automatically links the PR to task TASK-123. When the PR merges, the task moves to Done.

## PR Status in Tasks

See the PR status directly on the task card — open, reviewing, merged, or failed CI. No more switching between GitHub and your project board.

## Setup

1. Go to Settings → Integrations → GitHub
2. Install the TestApp GitHub App
3. Select your repositories
4. That's it — branches will auto-link going forward`,
    author: "Bob Martinez",
    publishedAt: "2026-02-01",
    tags: ["integrations", "github", "engineering"],
  },
  {
    slug: "soc2-compliance",
    title: "TestApp is Now SOC 2 Type II Compliant",
    excerpt: "We've completed our SOC 2 Type II audit, reinforcing our commitment to enterprise security.",
    content: `Security has always been a priority at TestApp. Today we're proud to announce we've achieved SOC 2 Type II compliance.

## What this means

SOC 2 Type II certification verifies that our security controls have been tested and proven effective over a sustained period. This covers:

- **Security** — protection against unauthorized access
- **Availability** — system uptime and performance commitments
- **Confidentiality** — protection of sensitive data

## For enterprise customers

You can request our SOC 2 report through your account manager or via Settings → Security → Compliance Documents.`,
    author: "Alice Chen",
    publishedAt: "2026-01-20",
    tags: ["security", "enterprise", "compliance"],
  },
];

export function getProject(id: string): Project | undefined {
  return mockProjects.find((p) => p.id === id);
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return mockBlogPosts.find((p) => p.slug === slug);
}
