import AboutMe from "@/components/AboutMe";
import TestimonialCarousel from "@/components/Carousel";
import MainLayout from "@/components/MainLayout";

export const metadata = {
  title: "Services | Pankaj Verma (ivpankaj)",
  description:
    "Services offered by Pankaj Verma (ivpankaj) — MERN Stack Developer and Software Engineer.",
  alternates: {
    canonical: "https://ivpankaz.web.app/services",
  },
  openGraph: {
    title: "Services | Pankaj Verma (ivpankaj)",
    description:
      "Discover services provided by Pankaj Verma — full-stack development, UI creation, REST APIs, cloud integrations and more.",
    url: "https://ivpankaz.web.app/services",
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
    title: "Services | Pankaj Verma",
    description:
      "Explore services offered by Pankaj Verma — MERN Developer & Software Engineer.",
    images: ["/ivpankaj.png"],
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* JSON-LD Schema for Person */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Pankaj Verma",
            alternateName: "ivpankaj",
            url: "https://ivpankaz.web.app/services",
            jobTitle: "Software Developer",
            sameAs: [
              "https://instagram.com/vpnkz",
              "https://twitter.com/ivpankaj",
              "https://github.com/ivpankaj",
            ],
            image: "https://ivpankaz.web.app/ivpankaj.png",
          }),
        }}
      />

      <MainLayout>
        <AboutMe />
        <TestimonialCarousel />
      </MainLayout>
    </>
  );
}
