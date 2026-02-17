import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Learning Management System (LMS) | Pankaj Verma",
    description: "A comprehensive LMS platform developed by Pankaj Verma, featuring course management, student tracking, and interactive learning.",
    alternates: {
        canonical: "https://ivpankaj.online/learning-management-system",
    },
}

export default function LMSLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
