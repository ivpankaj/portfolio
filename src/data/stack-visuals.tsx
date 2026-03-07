import type { ComponentType } from "react";
import {
  Blocks,
  Braces,
  CheckCheck,
  Globe2,
  PanelsTopLeft,
  Rocket,
  ServerCog,
  Wrench,
} from "lucide-react";
import {
  SiFirebase,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiGooglechrome,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPostgresql,
  SiReact,
  SiResend,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type StackVisualComponent = ComponentType<{
  className?: string;
  size?: number;
}>;

export type StackVisualKey =
  | "react"
  | "nextjs"
  | "typescript"
  | "tailwindcss"
  | "framermotion"
  | "nodejs"
  | "routehandlers"
  | "firebase"
  | "resend"
  | "restintegrations"
  | "mongodb"
  | "postgresql"
  | "typedcontent"
  | "validation"
  | "figma"
  | "componentsystems"
  | "responsiveqa"
  | "seometadata"
  | "vscode"
  | "git"
  | "github"
  | "npm"
  | "chromedevtools"
  | "staticexport";

export type StackVisual = {
  label: string;
  Icon?: StackVisualComponent;
  image?: string;
  iconClassName: string;
  chipClassName: string;
};

export const stackVisuals: Record<StackVisualKey, StackVisual> = {
  react: {
    label: "React",
    Icon: SiReact,
    iconClassName: "text-[#61DAFB]",
    chipClassName: "bg-[#e9fbff] text-[#157ea8]",
  },
  nextjs: {
    label: "Next.js",
    Icon: SiNextdotjs,
    iconClassName: "text-black",
    chipClassName: "bg-[#f4f4f5] text-black",
  },
  typescript: {
    label: "TypeScript",
    Icon: SiTypescript,
    iconClassName: "text-[#3178C6]",
    chipClassName: "bg-[#edf4ff] text-[#2459bf]",
  },
  tailwindcss: {
    label: "Tailwind CSS",
    Icon: SiTailwindcss,
    iconClassName: "text-[#06B6D4]",
    chipClassName: "bg-[#ebfbff] text-[#0c7f95]",
  },
  framermotion: {
    label: "Framer Motion",
    Icon: SiFramer,
    iconClassName: "text-[#0055FF]",
    chipClassName: "bg-[#eef3ff] text-[#2447c6]",
  },
  nodejs: {
    label: "Node.js",
    Icon: SiNodedotjs,
    iconClassName: "text-[#339933]",
    chipClassName: "bg-[#eef9ee] text-[#287b28]",
  },
  routehandlers: {
    label: "Route Handlers",
    Icon: ServerCog,
    iconClassName: "text-black",
    chipClassName: "bg-[#f4f4f5] text-black",
  },
  firebase: {
    label: "Firebase",
    Icon: SiFirebase,
    iconClassName: "text-[#FFCA28]",
    chipClassName: "bg-[#fff9e8] text-[#a36b00]",
  },
  resend: {
    label: "Resend",
    Icon: SiResend,
    iconClassName: "text-black",
    chipClassName: "bg-[#f4f4f5] text-black",
  },
  restintegrations: {
    label: "REST Integrations",
    Icon: Wrench,
    iconClassName: "text-[#6b7280]",
    chipClassName: "bg-[#f5f5f5] text-[#4b5563]",
  },
  mongodb: {
    label: "MongoDB",
    Icon: SiMongodb,
    iconClassName: "text-[#47A248]",
    chipClassName: "bg-[#eef9f0] text-[#23723a]",
  },
  postgresql: {
    label: "PostgreSQL",
    Icon: SiPostgresql,
    iconClassName: "text-[#4169E1]",
    chipClassName: "bg-[#eef2ff] text-[#3153bc]",
  },
  typedcontent: {
    label: "Typed Content",
    Icon: Braces,
    iconClassName: "text-[#374151]",
    chipClassName: "bg-[#f5f5f5] text-[#374151]",
  },
  validation: {
    label: "Validation",
    Icon: CheckCheck,
    iconClassName: "text-[#1f8a4c]",
    chipClassName: "bg-[#eefaf2] text-[#1f8a4c]",
  },
  figma: {
    label: "Figma",
    Icon: SiFigma,
    iconClassName: "text-[#F24E1E]",
    chipClassName: "bg-[#fff1ed] text-[#c2410c]",
  },
  componentsystems: {
    label: "Component Systems",
    Icon: Blocks,
    iconClassName: "text-[#6b7280]",
    chipClassName: "bg-[#f5f5f5] text-[#4b5563]",
  },
  responsiveqa: {
    label: "Responsive QA",
    Icon: PanelsTopLeft,
    iconClassName: "text-[#2563eb]",
    chipClassName: "bg-[#edf4ff] text-[#2459bf]",
  },
  seometadata: {
    label: "SEO Metadata",
    Icon: Globe2,
    iconClassName: "text-[#0f766e]",
    chipClassName: "bg-[#eafbf8] text-[#0f766e]",
  },
  vscode: {
    label: "VS Code",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    iconClassName: "",
    chipClassName: "bg-[#edf4ff] text-[#2459bf]",
  },
  git: {
    label: "Git",
    Icon: SiGit,
    iconClassName: "text-[#F05032]",
    chipClassName: "bg-[#fff1ed] text-[#c2410c]",
  },
  github: {
    label: "GitHub",
    Icon: SiGithub,
    iconClassName: "text-black",
    chipClassName: "bg-[#f4f4f5] text-black",
  },
  npm: {
    label: "npm",
    Icon: SiNpm,
    iconClassName: "text-[#CB3837]",
    chipClassName: "bg-[#ffefef] text-[#b42318]",
  },
  chromedevtools: {
    label: "Chrome DevTools",
    Icon: SiGooglechrome,
    iconClassName: "text-[#4285F4]",
    chipClassName: "bg-[#eef4ff] text-[#2459bf]",
  },
  staticexport: {
    label: "Static Export",
    Icon: Rocket,
    iconClassName: "text-[#6f38d0]",
    chipClassName: "bg-[#f4efff] text-[#6f38d0]",
  },
};

export const stackMarqueeKeys: StackVisualKey[] = [
  "react",
  "nextjs",
  "typescript",
  "tailwindcss",
  "framermotion",
  "nodejs",
  "mongodb",
  "postgresql",
  "firebase",
  "figma",
  "vscode",
  "github",
  "npm",
  "resend",
];
