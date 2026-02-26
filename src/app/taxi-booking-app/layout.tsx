import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Taxi Booking App | Pankaj Verma",
    description: "A real-time taxi booking application with driver matching, GPS tracking, and secure payments.",
    keywords: ["Taxi Booking App", "Ride Hailing Application", "Real-time GPS Tracking System", "Next.js Ride Sharing App"],
    alternates: {
        canonical: "https://ivpankaj.online/taxi-booking-app",
    },
    openGraph: {
        title: "Taxi Booking App | Pankaj Verma",
        description: "A real-time taxi booking application with driver matching, GPS tracking, and secure payments.",
        url: "https://ivpankaj.online/taxi-booking-app",
        images: [{ url: "/ivpankaj.png", width: 1200, height: 630, alt: "Taxi Booking App" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Taxi Booking App | Pankaj Verma",
        description: "A real-time taxi booking application with driver matching, GPS tracking, and secure payments.",
        images: ["/ivpankaj.png"],
    },
}

export default function TaxiAppLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
