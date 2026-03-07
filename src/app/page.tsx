import type { Metadata } from "next";
import MainLayout from "@/components/MainLayout";
import { ModernContact } from "@/components/ModernContact";
import { ModernHero } from "@/components/ModernHero";
import { PortfolioCollections } from "@/components/PortfolioCollections";
import { TechMarquee } from "@/components/TechMarquee";
import { WorkHighlight } from "@/components/WorkHighlight";
import { portfolioCounts } from "@/data/portfolio-data";

export const metadata: Metadata = {
  title: "Pankaj Verma | Landing Pages, Dashboards, and Product Builds",
  description: `Portfolio of Pankaj Verma featuring ${portfolioCounts.current} current works across landing pages, dashboard interfaces, and product builds, with ${portfolioCounts.upcoming} upcoming ideas in progress.`,
  keywords: [
    "Pankaj Verma",
    "ivpankaj",
    "Portfolio",
    "Landing Pages",
    "Dashboard Development",
    "Product UI",
    "Software Developer Noida",
  ],
  alternates: {
    canonical: "https://ivpankaj.online/",
  },
  openGraph: {
    title: "Pankaj Verma | Landing Pages, Dashboards, and Product Builds",
    description: `Portfolio of Pankaj Verma featuring ${portfolioCounts.current} current works and ${portfolioCounts.upcoming} upcoming builds.`,
    url: "https://ivpankaj.online/",
    images: [
      {
        url: "/ivpankaj.png",
        width: 1200,
        height: 630,
        alt: "Pankaj Verma portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pankaj Verma | Landing Pages, Dashboards, and Product Builds",
    description: `Portfolio of Pankaj Verma featuring ${portfolioCounts.current} current works.`,
    images: ["/ivpankaj.png"],
  },
};

export default function Page() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        <ModernHero />
        <TechMarquee />
        <PortfolioCollections />
        <WorkHighlight />
        <ModernContact />
      </div>
    </MainLayout>
  );
}
