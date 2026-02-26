import MainLayout from "@/components/MainLayout";
import React from "react";
import { Metadata } from "next";
import { ModernHero } from "@/components/ModernHero";
import { TechMarquee } from "@/components/TechMarquee";
import { BentoSkills } from "@/components/BentoSkills";
import { WorkHighlight } from "@/components/WorkHighlight";
import { ModernContact } from "@/components/ModernContact";

export const metadata: Metadata = {
  title: "Pankaj Verma | Modern Software Developer & Engineer",
  description: "Experience the next level of digital craft. Portfolio of Pankaj Verma (ivpankaj), specializing in modern web architecture, AI, and premium user experiences.",
  keywords: ["Pankaj Verma", "ivpankaj", "Modern Portfolio", "Tech Portfolio", "Full Stack Developer", "AI Engineer", "Software Developer Noida"],
  alternates: {
    canonical: "https://ivpankaj.online/",
  },
  openGraph: {
    title: "Pankaj Verma | Modern Software Developer & Engineer",
    description: "Experience the next level of digital craft. Portfolio of Pankaj Verma (ivpankaj), specializing in modern web architecture, AI, and premium user experiences.",
    url: "https://ivpankaj.online/",
    images: [{ url: "/ivpankaj.png", width: 1200, height: 630, alt: "Pankaj Verma - Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pankaj Verma | Modern Software Developer & Engineer",
    description: "Experience the next level of digital craft. Portfolio of Pankaj Verma (ivpankaj).",
    images: ["/ivpankaj.png"],
  },
};

const Page = () => {
  return (
    <MainLayout>
      <div className="bg-white min-h-screen">
        <ModernHero />
        <TechMarquee />
        <BentoSkills />
        <WorkHighlight />
        <ModernContact />
      </div>
    </MainLayout>
  );
};

export default Page;
