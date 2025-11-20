import ContactPage from "@/components/Contact";
import GlobeDiv from "@/components/magicui/text-reveal2";
import MainLayout from "@/components/MainLayout";

export const metadata = {
  title: "Contact | Pankaj Verma (ivpankaj)",
  description:
    "Contact Pankaj Verma (ivpankaj) — Get in touch for collaboration, projects, and opportunities.",
  alternates: {
    canonical: "https://ivpankaz.web.app/contact",
  },
  openGraph: {
    title: "Contact | Pankaj Verma (ivpankaj)",
    description:
      "Connect with Pankaj Verma — MERN Stack Developer & Computer Science Engineer.",
    url: "https://ivpankaz.web.app/contact",
    images: [
      {
        url: "/ivpankaj.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Pankaj Verma",
    description:
      "Reach out to Pankaj Verma — Software Developer & MERN Specialist.",
    images: ["/ivpankaj.png"],
  },
};

export default function Contact() {
  return (
    <>
      {/* JSON-LD Schema for Person Contact Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Pankaj Verma",
            alternateName: "ivpankaj",
            url: "https://ivpankaz.web.app/contact",
            jobTitle: "Software Developer",
            sameAs: [
              "https://instagram.com/vpnkz",
              "https://twitter.com/ivpankaj",
              "https://github.com/ivpankaj",
            ],
            image: "https://ivpankaz.web.app/ivpankaj.png",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              email: "ivpnkz@gmail.com",
            },
          }),
        }}
      />

      <MainLayout>
        <GlobeDiv />
        <ContactPage />
      </MainLayout>
    </>
  );
}
