import Main from "@/components/Main";
import MainLayout from "@/components/MainLayout";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pankaj Verma | Best Software Developer in Noida & Greater Noida",
  description: "Official portfolio of Pankaj Verma (ivpankaj) — Top-rated Software Developer in Noida & Greater Noida. Specializing in MERN Stack, React, and Full-Stack Development.",
  keywords: ["Pankaj Verma", "ivpankaj", "pankaj", "Software Developer Noida", "Best Web Developer Noida", "Greater Noida Software Engineer", "MERN Stack Developer India"],
  alternates: {
    canonical: "https://ivpankaj.online"
  },
  verification: {
    google: "4G0C327upPlSMGFxrsmDaYGpYEF3UehJwpMzO8SYrVI",
  },
};

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Pankaj Verma Portfolio",
            url: "https://ivpankaj.online",
            author: {
              "@type": "Person",
              name: "Pankaj Verma"
            },
            description: "Official portfolio of Pankaj Verma (ivpankaj) — Computer Science Engineer & MERN Stack Developer."
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
