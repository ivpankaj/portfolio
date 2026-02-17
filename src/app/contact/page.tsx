import ContactPage from "@/components/Contact";
import GlobeDiv from "@/components/magicui/text-reveal2";
import MainLayout from "@/components/MainLayout";

export const metadata = {
  title: "Contact | Pankaj Verma (ivpankaj)",
  description:
    "Contact Pankaj Verma (ivpankaj) — Get in touch for collaboration, projects, and opportunities.",
  alternates: {
    canonical: "https://ivpankaj.online/contact",
  },
};

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Pankaj Verma",
            alternateName: "ivpankaj",
            url: "https://ivpankaj.online/contact",
            jobTitle: "Software Developer",
            sameAs: [
              "https://instagram.com/ivpankaj",
              "https://twitter.com/ivpankaj",
              "https://github.com/ivpankaj",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "collaboration",
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
