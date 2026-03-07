import type { StackVisualKey } from "@/data/stack-visuals";

export type StackCategoryId =
  | "frontend"
  | "backend"
  | "data"
  | "design"
  | "tools";

export type StackReference = {
  label: string;
  visuals: StackVisualKey[];
};

export type StackTool = {
  name: string;
  note: string;
  emphasis: "primary" | "support";
  visuals: StackVisualKey[];
};

export type StackCategory = {
  id: StackCategoryId;
  eyebrow: string;
  title: string;
  description: string;
  tools: StackTool[];
};

export const stackHighlights = [
  {
    label: "Frontend Core",
    value: { label: "React + Next.js", visuals: ["react", "nextjs"] },
  },
  {
    label: "Language",
    value: { label: "TypeScript", visuals: ["typescript"] },
  },
  {
    label: "Styling",
    value: { label: "Tailwind CSS", visuals: ["tailwindcss"] },
  },
  {
    label: "Motion",
    value: { label: "Framer Motion", visuals: ["framermotion"] },
  },
  {
    label: "Forms + Mail",
    value: { label: "Route Handlers + Resend", visuals: ["routehandlers", "resend"] },
  },
  {
    label: "Delivery",
    value: { label: "Static Export", visuals: ["staticexport"] },
  },
];

export const stackSetupGroups: Array<{
  label: string;
  items: StackReference[];
}> = [
  {
    label: "Interface",
    items: [
      { label: "Next.js", visuals: ["nextjs"] },
      { label: "React", visuals: ["react"] },
      { label: "TypeScript", visuals: ["typescript"] },
      { label: "Tailwind CSS", visuals: ["tailwindcss"] },
    ],
  },
  {
    label: "Behavior",
    items: [
      { label: "Route Handlers", visuals: ["routehandlers"] },
      { label: "Firebase", visuals: ["firebase"] },
      { label: "Resend", visuals: ["resend"] },
      { label: "REST Integrations", visuals: ["restintegrations"] },
    ],
  },
  {
    label: "Delivery",
    items: [
      { label: "Responsive QA", visuals: ["responsiveqa"] },
      { label: "SEO Metadata", visuals: ["seometadata"] },
      { label: "Static Export", visuals: ["staticexport"] },
    ],
  },
];

export const stackCategories: StackCategory[] = [
  {
    id: "frontend",
    eyebrow: "UI Foundation",
    title: "Interface Systems",
    description:
      "Most builds start with composable UI sections, a clear app shell, and typed code so the interface stays predictable while the content evolves.",
    tools: [
      {
        name: "React",
        note: "Component-driven UI for reusable sections and product surfaces.",
        emphasis: "primary",
        visuals: ["react"],
      },
      {
        name: "Next.js",
        note: "Routing, metadata, export flow, and app-level structure.",
        emphasis: "primary",
        visuals: ["nextjs"],
      },
      {
        name: "TypeScript",
        note: "Typed props, content maps, and safer refactors.",
        emphasis: "primary",
        visuals: ["typescript"],
      },
      {
        name: "Tailwind CSS",
        note: "Fast layout work and consistent design tokens.",
        emphasis: "primary",
        visuals: ["tailwindcss"],
      },
      {
        name: "Framer Motion",
        note: "Controlled motion for reveals, transitions, and UI emphasis.",
        emphasis: "support",
        visuals: ["framermotion"],
      },
    ],
  },
  {
    id: "backend",
    eyebrow: "Logic Layer",
    title: "Backend and Integrations",
    description:
      "For forms, basic product logic, and service workflows, I keep the backend practical with lightweight APIs and focused integrations instead of unnecessary complexity.",
    tools: [
      {
        name: "Node.js",
        note: "Runtime for server-side logic and utility workflows.",
        emphasis: "primary",
        visuals: ["nodejs"],
      },
      {
        name: "Next.js Route Handlers",
        note: "Simple endpoints for contact flows and page-connected features.",
        emphasis: "primary",
        visuals: ["nextjs", "routehandlers"],
      },
      {
        name: "Firebase",
        note: "Useful for auth, storage, and quick product experiments.",
        emphasis: "support",
        visuals: ["firebase"],
      },
      {
        name: "Resend",
        note: "Transactional email handling for inquiry and contact flows.",
        emphasis: "support",
        visuals: ["resend"],
      },
      {
        name: "REST Integrations",
        note: "Connecting third-party services without overbuilding the stack.",
        emphasis: "support",
        visuals: ["restintegrations"],
      },
    ],
  },
  {
    id: "data",
    eyebrow: "Data Shape",
    title: "Content and Storage",
    description:
      "The data layer changes with the job. For content-heavy builds I keep the source simple and typed. For app flows I am comfortable with both document and relational structures.",
    tools: [
      {
        name: "MongoDB",
        note: "Flexible document models for evolving product ideas.",
        emphasis: "support",
        visuals: ["mongodb"],
      },
      {
        name: "PostgreSQL",
        note: "Relational structure when data integrity matters more.",
        emphasis: "support",
        visuals: ["postgresql"],
      },
      {
        name: "Typed Content Objects",
        note: "Clean local content maps for pages, cards, and metadata.",
        emphasis: "primary",
        visuals: ["typedcontent"],
      },
      {
        name: "Validation-first Payloads",
        note: "Keeping form and request shapes understandable from the start.",
        emphasis: "support",
        visuals: ["validation"],
      },
    ],
  },
  {
    id: "design",
    eyebrow: "Interface Craft",
    title: "Design and Delivery",
    description:
      "The visual side is handled close to the code: layout planning, responsive passes, component consistency, and launch-ready SEO details all stay inside the same workflow.",
    tools: [
      {
        name: "Figma",
        note: "Quick layout planning, references, and design direction.",
        emphasis: "primary",
        visuals: ["figma"],
      },
      {
        name: "Component Systems",
        note: "Reusable sections that keep pages consistent as they grow.",
        emphasis: "primary",
        visuals: ["componentsystems"],
      },
      {
        name: "Responsive QA",
        note: "Desktop and mobile checks before anything is called done.",
        emphasis: "primary",
        visuals: ["responsiveqa"],
      },
      {
        name: "SEO Metadata",
        note: "Titles, descriptions, Open Graph, sitemap, and manifest basics.",
        emphasis: "support",
        visuals: ["seometadata"],
      },
    ],
  },
  {
    id: "tools",
    eyebrow: "Daily Setup",
    title: "Tools I Reach For",
    description:
      "The day-to-day toolset stays simple so iteration remains fast from idea to preview to shipped update.",
    tools: [
      {
        name: "VS Code",
        note: "Primary editor for shipping and debugging work quickly.",
        emphasis: "primary",
        visuals: ["vscode"],
      },
      {
        name: "Git + GitHub",
        note: "Version control, history, and clean deployment handoff.",
        emphasis: "primary",
        visuals: ["git", "github"],
      },
      {
        name: "npm",
        note: "Package management and project script workflow.",
        emphasis: "support",
        visuals: ["npm"],
      },
      {
        name: "Chrome DevTools",
        note: "Layout inspection, responsiveness, and runtime debugging.",
        emphasis: "primary",
        visuals: ["chromedevtools"],
      },
      {
        name: "Static Export Flow",
        note: "Stable deployment path for fast portfolio-style sites.",
        emphasis: "support",
        visuals: ["staticexport"],
      },
    ],
  },
];

export const stackWorkflow = [
  {
    title: "Shape the page",
    description:
      "Start with content structure, section order, and the clearest path for the user.",
  },
  {
    title: "Build the system",
    description:
      "Turn that structure into typed components with responsive layout rules and reusable patterns.",
  },
  {
    title: "Wire the behavior",
    description:
      "Add forms, integrations, and any lightweight backend logic needed for the page or product.",
  },
  {
    title: "Polish and ship",
    description:
      "Run mobile checks, metadata cleanup, final QA, and then move it into a deployable state.",
  },
];

export const stackUseCases = [
  {
    title: "Landing Pages",
    summary:
      "Clean sections, clear content hierarchy, and fast-loading frontend delivery for launch-focused websites.",
    stack: [
      { label: "Next.js", visuals: ["nextjs"] },
      { label: "React", visuals: ["react"] },
      { label: "Tailwind CSS", visuals: ["tailwindcss"] },
      { label: "SEO Metadata", visuals: ["seometadata"] },
      { label: "Static Export", visuals: ["staticexport"] },
    ],
  },
  {
    title: "Dashboards",
    summary:
      "Structured UI, reusable components, and practical action flows for internal tools and admin views.",
    stack: [
      { label: "React", visuals: ["react"] },
      { label: "TypeScript", visuals: ["typescript"] },
      { label: "Component Systems", visuals: ["componentsystems"] },
      { label: "Route Handlers", visuals: ["routehandlers"] },
      { label: "Responsive QA", visuals: ["responsiveqa"] },
    ],
  },
  {
    title: "Product Interfaces",
    summary:
      "Flexible frontend systems for AI concepts, utility tools, service flows, and web products that need room to grow.",
    stack: [
      { label: "Next.js", visuals: ["nextjs"] },
      { label: "Node.js", visuals: ["nodejs"] },
      { label: "Firebase", visuals: ["firebase"] },
      { label: "REST Integrations", visuals: ["restintegrations"] },
      { label: "Component Systems", visuals: ["componentsystems"] },
    ],
  },
];
