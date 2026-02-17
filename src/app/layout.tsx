/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

/* --- GLOBAL SEO (Root Metadata) --- */
export const metadata: Metadata = {
  title: {
    default: "Pankaj Verma | ivpankaj",
    template: "%s | Pankaj Verma",
  },
  description:
    "Official portfolio of Pankaj Verma (ivpankaj) — Computer Science Engineer & MERN Stack Developer. Exploring software engineering, full-stack development, and AI.",
  keywords: [
    "Pankaj Verma",
    "ivpankaj",
    "Pankaj",
    "pankaj",
    "software developer",
    "best software developer in Noida",
    "best software developer in Greater Noida",
    "mern developer in Noida",
    "software engineer Noida",
    "portfolio",
    "full stack developer",
    "computer science engineer",
    "web development Greater Noida",
    "next.js developer",
    "react developer",
  ],
  metadataBase: new URL("https://ivpankaj.online"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Pankaj Verma | ivpankaj",
    description:
      "Portfolio of Pankaj Verma — MERN Stack Developer & Computer Science Engineer. View my projects, skills, and experience.",
    url: "https://ivpankaj.online",
    siteName: "ivpankaj",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/ivpankaj.png",
        width: 1200,
        height: 630,
        alt: "Pankaj Verma - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pankaj Verma | ivpankaj",
    description:
      "Portfolio of Pankaj Verma — MERN Stack Developer & Computer Science Engineer.",
    creator: "@ivpankaj",
    images: ["/ivpankaj.png"],
  },
  verification: {
    google: [
      "HkYS3evi3jqymwePJIQD6Ym4GZGNKhG28ZPB_K1ZfsY",
      "4G0C327upPlSMGFxrsmDaYGpYEF3UehJwpMzO8SYrVI"
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Pankaj Verma",
  },
  formatDetection: {
    telephone: false,
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
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className="antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L1YYQDVVHB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L1YYQDVVHB');
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
              alternateName: ["ivpankaj", "ivpankaj.online", "Pankaj"],
              description:
                "Best Software Developer in Noida & Greater Noida — Portfolio of Pankaj Verma (ivpankaj), a MERN Stack Developer & Computer Science Engineer.",
              url: "https://ivpankaj.online",
              jobTitle: "Software Developer",
              knowsAbout: [
                "Software Engineering",
                "MERN Stack",
                "React",
                "Next.js",
                "AI",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Noida",
                addressRegion: "Uttar Pradesh",
                addressCountry: "India"
              },
              sameAs: [
                "https://instagram.com/ivpankaj",
                "https://twitter.com/ivpankaj",
                "https://github.com/ivpankaj",
                "https://linkedin.com/in/ivpankaj",
              ],
              image: "https://ivpankaj.online/ivpankaj.png",
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
