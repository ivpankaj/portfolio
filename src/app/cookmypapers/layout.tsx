import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "CookMyPapers — Digital Creative Services",
    description: "Premium design, website building, resume creation & full-stack development services by CookMyPapers.",
    alternates: {
        canonical: "https://ivpankaj.online/cookmypapers",
    },
}

export default function CookMyPapersLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
