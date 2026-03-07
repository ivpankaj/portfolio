import type { Metadata } from "next";
import MainLayout from "@/components/MainLayout";
import { ModernAbout } from "@/components/ModernAbout";

export const metadata: Metadata = {
  title: "About | Pankaj Verma",
  description:
    "Learn more about Pankaj Verma, a developer focused on building landing pages, dashboards, and product interfaces with clear structure and clean execution.",
  keywords: [
    "About Pankaj Verma",
    "ivpankaj biography",
    "Software Developer Noida",
    "Portfolio Developer",
  ],
  alternates: {
    canonical: "https://ivpankaj.online/about",
  },
  openGraph: {
    title: "About | Pankaj Verma",
    description:
      "Learn more about Pankaj Verma and the kind of web work behind this portfolio.",
    url: "https://ivpankaj.online/about",
    images: [
      {
        url: "/ivpankaj.png",
        width: 1200,
        height: 630,
        alt: "Pankaj Verma about",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Pankaj Verma",
    description:
      "Learn more about Pankaj Verma and the work behind this portfolio.",
    images: ["/ivpankaj.png"],
  },
};

export default function AboutPage() {
  return (
    <MainLayout>
      <ModernAbout />
    </MainLayout>
  );
}
