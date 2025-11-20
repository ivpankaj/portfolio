import Main from "@/components/Main";
import MainLayout from "@/components/MainLayout";
import Head from "next/head";
import React from "react";

const Page = () => {
  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>Pankaj Verma | ivpankaj | Portfolio</title>
        <meta
          name="description"
          content="Official portfolio of Pankaj Verma (ivpankaj) — Computer Science Engineer, MERN Stack Developer, and Software Developer."
        />
        <meta
          name="keywords"
          content="Pankaj Verma, ivpankaj, Pankaj portfolio, MERN developer, software developer India, web developer portfolio"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://ivpankaz.web.app/" />

        {/* Open Graph */}
        <meta property="og:title" content="Pankaj Verma | ivpankaj" />
        <meta
          property="og:description"
          content="Portfolio of Pankaj Verma — MERN stack developer and computer science engineer."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ivpankaz.web.app/" />
        <meta
          property="og:image"
          content="/ivpankaj.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pankaj Verma | ivpankaj" />
        <meta
          name="twitter:description"
          content="Portfolio of Pankaj Verma — Computer Science Engineer and MERN stack developer."
        />
        <meta
          name="twitter:image"
          content="https://ivpankaz.web.app/og-image.png"
        />

        {/* Favicon (optional but recommended) */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Correct Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Pankaj Verma",
            alternateName: "ivpankaj",
            url: "https://ivpankaz.web.app",
            jobTitle: "Software Developer",
            sameAs: [
              "https://instagram.com/vpnkz",
              "https://twitter.com/ivpankaj",
              "https://github.com/ivpankaj",
            ],
            image: "https://ivpankaz.web.app/og-image.png",
            description:
              "Official website of Pankaj Verma (ivpankaj), Computer Science Engineer and MERN Stack Developer.",
          }),
        }}
      />

      <MainLayout>
        <Main />
      </MainLayout>
    </>
  );
};

export default Page;
