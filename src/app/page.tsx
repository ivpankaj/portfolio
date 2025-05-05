import Main from "@/components/Main";
import MainLayout from "@/components/MainLayout";
import Head from "next/head";

import React from "react";

const Page = () => {
  return (
    <>
      <Head>
        <title>ivpankaj | Pankaj</title>
        <meta
          name="description"
          content=" Portfolio of ivpankaj, A computer science engineer"
        />
        <link rel="canonical" href="https://ivpankaj.web.app" />

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
        <Main />
      </MainLayout>
    </>
  );
};

export default Page;
