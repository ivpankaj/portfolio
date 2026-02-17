import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Taxi Booking App | Pankaj Verma",
    description: "A real-time taxi booking application with driver matching, GPS tracking, and secure payments.",
    alternates: {
        canonical: "https://ivpankaj.online/taxi-booking-app",
    },
}

export default function TaxiAppLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
