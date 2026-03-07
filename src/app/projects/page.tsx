import type { Metadata } from "next";
import MainLayout from "@/components/MainLayout";
import { ModernProjects } from "@/components/ModernProjects";
import { portfolioCounts, portfolioGroupCounts } from "@/data/portfolio-data";

export const metadata: Metadata = {
  title: "Projects | Pankaj Verma",
  description: `Explore ${portfolioCounts.current} current portfolio works by Pankaj Verma across ${portfolioGroupCounts.landingPages} landing pages, ${portfolioGroupCounts.dashboard} dashboard, and ${portfolioGroupCounts.projects} product builds, plus ${portfolioCounts.upcoming} upcoming projects.`,
  keywords: [
    "Pankaj Verma Projects",
    "ivpankaj Portfolio",
    "Landing Page Portfolio",
    "Dashboard Portfolio",
    "Web Product Portfolio",
  ],
  alternates: {
    canonical: "https://ivpankaj.online/projects",
  },
  openGraph: {
    title: "Projects | Pankaj Verma",
    description: `Explore ${portfolioCounts.current} current works and ${portfolioCounts.upcoming} upcoming builds by Pankaj Verma.`,
    url: "https://ivpankaj.online/projects",
    images: [
      {
        url: "/ivpankaj.png",
        width: 1200,
        height: 630,
        alt: "Pankaj Verma projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Pankaj Verma",
    description: `Explore ${portfolioCounts.current} current works by Pankaj Verma.`,
    images: ["/ivpankaj.png"],
  },
};

export default function ProjectPage() {
  return (
    <MainLayout>
      <ModernProjects />
    </MainLayout>
  );
}
