import { TextReveal } from "@/components/magicui/text-reveal";
import MainLayout from "@/components/MainLayout";
import { TimelineDemo } from "@/components/TimeLine";

export const metadata = {
  title: "About | Pankaj Verma - Best Software Developer in Noida",
  description:
    "Learn more about Pankaj Verma (ivpankaj) — A top-tier Software Developer based in Noida/Greater Noida. Specializing in MERN Stack and high-performance web applications.",
  alternates: {
    canonical: "https://ivpankaj.online/about",
  },
};

export default function TextRevealIntro() {
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
            url: "https://ivpankaj.online/about",
            jobTitle: "Software Developer",
            birthPlace: "Kushinagar, India",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Noida, India",
            },
            sameAs: [
              "https://instagram.com/ivpankaj",
              "https://twitter.com/ivpankaj",
              "https://github.com/ivpankaj",
            ],
          }),
        }}
      />

      <MainLayout>
        <TextReveal>
          {`Know me !\nBorn in Kushinagar, raised in Noida\n..and currently living in Noida too\n`}
        </TextReveal>

        <TimelineDemo />
      </MainLayout>
    </>
  );
}
