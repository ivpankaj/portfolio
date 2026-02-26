import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Learning Management System (LMS) | Pankaj Verma",
    description: "A comprehensive LMS platform developed by Pankaj Verma, featuring course management, student tracking, and interactive learning.",
    keywords: ["Learning Management System", "LMS Platform", "EdTech Solution", "Next.js LMS", "Full Stack Education App"],
    alternates: {
        canonical: "https://ivpankaj.online/learning-management-system",
    },
    openGraph: {
        title: "Learning Management System (LMS) | Pankaj Verma",
        description: "A comprehensive LMS platform developed by Pankaj Verma, featuring course management, student tracking, and interactive learning.",
        url: "https://ivpankaj.online/learning-management-system",
        images: [{ url: "/ivpankaj.png", width: 1200, height: 630, alt: "LMS Project" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Learning Management System (LMS) | Pankaj Verma",
        description: "A comprehensive LMS platform developed by Pankaj Verma.",
        images: ["/ivpankaj.png"],
    },
}

export default function LMSLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
