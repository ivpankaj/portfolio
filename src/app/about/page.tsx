import { TextReveal } from "@/components/magicui/text-reveal";
import MainLayout from "@/components/MainLayout";
import { TimelineDemo } from "@/components/TimeLine";
import Head from "next/head";

export default function TextRevealIntro() {
  return (
    <>
          <Head>
        <title>ivpankaj | Pankaj</title>
        <meta
          name="description"
          content=" Portfolio of ivpankaj, A computer science engineer"
        />
        <link rel="canonical" href="https://ivpankaj.web.app/about" />

        {/* Open Graph */}
        <meta property="og:title" content="ivpankaj" />
        <meta property="og:image" content="https://ivpankaj.web.app" />

        {/* Twitter */}
        <meta name="twitter:card" content="portfolio of ivpankaj" />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Portfolio",
            name: "ivpankaj",
            description: "Portfolio of ivpankaj.",
            brand: "ivpankaj",
            
          }),
        }}
      />
      <MainLayout>
        <TextReveal>
          {
            "Know me ! \nBorn in Kushinagar, raised in Noida \n ..and currently living in Noida too \n "
          }
        </TextReveal>
        <TimelineDemo/>
      </MainLayout>
    </>
  );
}
