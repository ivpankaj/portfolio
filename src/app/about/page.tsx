import { TextReveal } from "@/components/magicui/text-reveal";
import MainLayout from "@/components/MainLayout";
import { TimelineDemo } from "@/components/TimeLine";

export const metadata = {
  title: "About | Pankaj Verma (ivpankaj)",
  description:
    "Learn more about Pankaj Verma (ivpankaj) — Computer Science Engineer, MERN Developer, born in Kushinagar and living in Noida.",
  alternates: {
    canonical: "https://ivpankaz.web.app/about",
  },
  openGraph: {
    title: "About | Pankaj Verma (ivpankaj)",
    description:
      "Know more about Pankaj Verma — MERN stack developer and Computer Science Engineer.",
    url: "https://ivpankaz.web.app/about",
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
    title: "About | Pankaj Verma",
    description:
      "Portfolio of Pankaj Verma — MERN stack developer and Computer Science Engineer.",
    images: ["/ivpankaj.png"],
  },
};

export default function TextRevealIntro() {
  return (
    <>
      {/* JSON-LD for Person Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Pankaj Verma",
            alternateName: "ivpankaj",
            url: "https://ivpankaz.web.app/about",
            jobTitle: "Software Developer",
            birthPlace: "Kushinagar, India",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Noida, India",
            },
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
        <TextReveal>
          {`Know me !\nBorn in Kushinagar, raised in Noida\n..and currently living in Noida too\n`}
        </TextReveal>

        <TimelineDemo />
      </MainLayout>
    </>
  );
}
