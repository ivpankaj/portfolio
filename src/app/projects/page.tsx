import MainLayout from "@/components/MainLayout";
import { ModernProjects } from "@/components/ModernProjects";

export const metadata = {
  title: "Projects | Pankaj Verma (ivpankaj)",
  description:
    "Explore the technical projects built by Pankaj Verma (ivpankaj) — MERN Stack Developer and Software Engineer specializing in modern web solutions.",
  keywords: ["Pankaj Verma Projects", "ivpankaj Portfolio Projects", "MERN Stack Projects", "Full Stack Web Apps", "Software Engineering Portfolio"],
  alternates: {
    canonical: "https://ivpankaj.online/projects",
  },
  openGraph: {
    title: "Projects | Pankaj Verma (ivpankaj)",
    description: "Explore the technical projects built by Pankaj Verma (ivpankaj) — MERN Stack Developer and Software Engineer.",
    url: "https://ivpankaj.online/projects",
    images: [{ url: "/ivpankaj.png", width: 1200, height: 630, alt: "Pankaj Verma - Projects" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Pankaj Verma",
    description: "Explore the technical projects built by Pankaj Verma (ivpankaj).",
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
