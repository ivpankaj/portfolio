import MainLayout from "@/components/MainLayout";
import { ModernServices } from "@/components/ModernServices";

export const metadata = {
  title: "Services | Pankaj Verma (ivpankaj)",
  description:
    "Explore the technical services offered by Pankaj Verma (ivpankaj) — Professional web development, mobile solutions, and system architecture.",
  keywords: ["Software Development Services", "Hire Web Developer Noida", "MERN Stack Freelancer", "Custom SaaS Development", "IT Consulting"],
  alternates: {
    canonical: "https://ivpankaj.online/services",
  },
  openGraph: {
    title: "Services | Pankaj Verma (ivpankaj)",
    description: "Explore the technical services offered by Pankaj Verma (ivpankaj) — Professional web development, mobile solutions, and system architecture.",
    url: "https://ivpankaj.online/services",
    images: [{ url: "/ivpankaj.png", width: 1200, height: 630, alt: "Pankaj Verma - Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Pankaj Verma",
    description: "Explore the technical services offered by Pankaj Verma (ivpankaj).",
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
