import AboutMe from "@/components/AboutMe";
import TestimonialCarousel from "@/components/Carousel";
import MainLayout from "@/components/MainLayout";

export const metadata = {
  title: "Services | Pankaj Verma (ivpankaj)",
  description:
    "Services offered by Pankaj Verma (ivpankaj) — MERN Stack Developer and Software Engineer.",
  alternates: {
    canonical: "https://ivpankaj.online/services",
  },
};

export default function ServicesPage() {
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
            url: "https://ivpankaj.online/services",
            jobTitle: "Software Developer",
            sameAs: [
              "https://instagram.com/ivpankaj",
              "https://twitter.com/ivpankaj",
              "https://github.com/ivpankaj",
            ],
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
