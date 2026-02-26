import MainLayout from "@/components/MainLayout";
import { ModernAbout } from "@/components/ModernAbout";

export const metadata = {
  title: "About | Pankaj Verma - Modern Software Architect",
  description:
    "Learn more about the engineering mindset of Pankaj Verma (ivpankaj) — A specialist in high-performance web applications and scalable digital solutions.",
  keywords: ["About Pankaj Verma", "ivpankaj biography", "Software Architect Noida", "MERN Stack Professional"],
  alternates: {
    canonical: "https://ivpankaj.online/about",
  },
  openGraph: {
    title: "About | Pankaj Verma - Modern Software Architect",
    description: "Learn more about the engineering mindset of Pankaj Verma (ivpankaj) — A specialist in high-performance web applications.",
    url: "https://ivpankaj.online/about",
    images: [{ url: "/ivpankaj.png", width: 1200, height: 630, alt: "Pankaj Verma - About" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Pankaj Verma",
    description: "Learn more about the engineering mindset of Pankaj Verma (ivpankaj).",
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
