import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "CookMyPapers — Digital Creative Services",
    description: "Premium design, website building, resume creation & full-stack development services by CookMyPapers.",
    keywords: ["CookMyPapers", "Web Design Services Noida", "Resume Building", "Full Stack Development Studio", "Pankaj Verma Client Project"],
    alternates: {
        canonical: "https://ivpankaj.online/cookmypapers",
    },
    openGraph: {
        title: "CookMyPapers — Digital Creative Services",
        description: "Premium design, website building, resume creation & full-stack development services.",
        url: "https://ivpankaj.online/cookmypapers",
        images: [{ url: "/ivpankaj.png", width: 1200, height: 630, alt: "CookMyPapers Portfolio" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "CookMyPapers — Digital Creative Services",
        description: "Premium design, website building, resume creation & full-stack development services.",
        images: ["/ivpankaj.png"],
    },
}

export default function CookMyPapersLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
