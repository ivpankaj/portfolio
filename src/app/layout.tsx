/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* --- GLOBAL SEO (Root Metadata) --- */
export const metadata: Metadata = {
  title: "Pankaj Verma | ivpankaj",
  description:
    "Official portfolio of Pankaj Verma (ivpankaj) — Computer Science Engineer & MERN Stack Developer.",
  keywords: [
    "Pankaj Verma",
    "ivpankaj",
    "software developer",
    "mern developer",
    "portfolio",
  ],
  metadataBase: new URL("https://ivpankaz.web.app"),
  openGraph: {
    title: "Pankaj Verma | ivpankaj",
    description:
      "Portfolio of Pankaj Verma — MERN Stack Developer & Computer Science Engineer.",
    url: "https://ivpankaz.web.app",
    siteName: "ivpankaj",
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
    title: "Pankaj Verma | ivpankaj",
    description:
      "Portfolio of Pankaj Verma — MERN Stack Developer & Computer Science Engineer.",
    images: ["/ivpankaj.png"],
  },
  alternates: {
    canonical: "https://ivpankaz.web.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Google Verifications */}
        <meta
          name="google-site-verification"
          content="HkYS3evi3jqymwePJIQD6Ym4GZGNKhG28ZPB_K1ZfsY"
        />

      </head>

      <body className="antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6F6G19EG1P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6F6G19EG1P');
          `}
        </Script>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Pankaj Verma",
              alternateName: "ivpankaj",
              description:
                "Portfolio of Pankaj Verma — MERN Stack Developer",
              url: "https://ivpankaz.web.app",
              sameAs: [
                "https://instagram.com/ivpankaj",
                "https://twitter.com/ivpankaj",
                "https://github.com/ivpankaj",
              ],
              image: "https://ivpankaz.web.app/ivpankaj.png",
            }),
          }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
