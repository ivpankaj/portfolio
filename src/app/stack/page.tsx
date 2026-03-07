import type { Metadata } from "next";
import MainLayout from "@/components/MainLayout";
import { ModernStack } from "@/components/ModernStack";

export const metadata: Metadata = {
  title: "Tech Stack",
  description:
    "Tech stack and tools used by Pankaj Verma across frontend systems, backend integrations, design workflow, and launch-ready web delivery.",
  keywords: [
    "Pankaj Verma Tech Stack",
    "ivpankaj tools",
    "React Next.js TypeScript",
    "Frontend Developer Stack",
    "Web Development Tools",
  ],
  alternates: {
    canonical: "https://ivpankaj.online/stack",
  },
  openGraph: {
    title: "Tech Stack | Pankaj Verma",
    description:
      "A focused look at the technologies, tools, and workflow behind Pankaj Verma's frontend and product work.",
    url: "https://ivpankaj.online/stack",
    images: [
      {
        url: "/ivpankaj.png",
        width: 1200,
        height: 630,
        alt: "Pankaj Verma tech stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Stack | Pankaj Verma",
    description:
      "Frontend stack, backend integrations, design workflow, and delivery tools used by Pankaj Verma.",
    images: ["/ivpankaj.png"],
  },
};

export default function StackPage() {
  return (
    <MainLayout>
      <ModernStack />
    </MainLayout>
  );
}
