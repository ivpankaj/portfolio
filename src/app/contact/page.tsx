import MainLayout from "@/components/MainLayout";
import { ModernContact } from "@/components/ModernContact";

export const metadata = {
  title: "Contact | Pankaj Verma (ivpankaj)",
  description:
    "Let's build something exceptional. Get in touch with Pankaj Verma (ivpankaj) for premium web development, AI integration, and technical collaborations.",
  keywords: ["Contact Pankaj Verma", "Hire Software Developer", "Freelance MERN Developer", "AI Engineer Contact"],
  alternates: {
    canonical: "https://ivpankaj.online/contact",
  },
  openGraph: {
    title: "Contact | Pankaj Verma (ivpankaj)",
    description: "Let's build something exceptional. Get in touch with Pankaj Verma (ivpankaj) for premium web development.",
    url: "https://ivpankaj.online/contact",
    images: [{ url: "/ivpankaj.png", width: 1200, height: 630, alt: "Contact Pankaj Verma" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Pankaj Verma",
    description: "Get in touch with Pankaj Verma (ivpankaj) for premium web development.",
    images: ["/ivpankaj.png"],
  },
};

export default function Contact() {
  return (
    <MainLayout>
      <ModernContact />
    </MainLayout>
  );
}
