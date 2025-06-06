import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Script from "next/script"; // ✅ import Script
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ivpankaj",
  description: "Portfolio of Pankaj, ivpankaj !",
  keywords: "ivpankaj, portfolio of pankaj",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="google-site-verification" content="4G0C327upPlSMGFxrsmDaYGpYEF3UehJwpMzO8SYrVI" />
      <meta name="google-site-verification" content="HkYS3evi3jqymwePJIQD6Ym4GZGNKhG28ZPB_K1ZfsY" />
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
      </head>
      <Head>
        <title>ivpankaj |</title>
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
      <body className="antialiased">
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
