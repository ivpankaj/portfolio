import type { Metadata } from "next";
import MainLayout from "@/components/MainLayout";
import { ModernServices } from "@/components/ModernServices";
import { portfolioGroupCounts } from "@/data/portfolio-data";

export const metadata: Metadata = {
  title: "Services | Pankaj Verma",
  description: `Services shaped by real portfolio work across ${portfolioGroupCounts.landingPages} landing pages, ${portfolioGroupCounts.dashboard} dashboard, and ${portfolioGroupCounts.projects} product builds.`,
  keywords: [
    "Software Development Services",
    "Landing Page Developer",
    "Dashboard Developer",
    "Product UI Development",
    "Web Developer Noida",
  ],
  alternates: {
    canonical: "https://ivpankaj.online/services",
  },
  openGraph: {
    title: "Services | Pankaj Verma",
    description:
      "Services focused on landing pages, dashboards, portfolio refreshes, and web product UI.",
    url: "https://ivpankaj.online/services",
    images: [
      {
        url: "/ivpankaj.png",
        width: 1200,
        height: 630,
        alt: "Pankaj Verma services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Pankaj Verma",
    description:
      "Landing pages, dashboards, portfolio refreshes, and product UI work.",
    images: ["/ivpankaj.png"],
  },
};

export default function ServicesPage() {
  return (
    <MainLayout>
      <ModernServices />
    </MainLayout>
  );
}
