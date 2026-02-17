"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";
import Image from "next/image";

const testimonials = [
    {
        name: "Alex Johnson",
        username: "@alexj_tech",
        body: "Pankaj is a wizard with React! He delivered our project ahead of schedule and the code quality was top-notch.",
        img: "https://avatar.vercel.sh/alex",
    },
    {
        name: "Sarah Williams",
        username: "@sarah_w",
        body: "Working with Pankaj was a breeze. He understood our requirements perfectly and the end result exceeded our expectations.",
        img: "https://avatar.vercel.sh/sarah",
    },
    {
        name: "David Chen",
        username: "@davidc_dev",
        body: "I was impressed by his problem-solving skills. He fixed a complex bug in our backend that had been plaguing us for weeks.",
        img: "https://avatar.vercel.sh/david",
    },
    {
        name: "Emily Davis",
        username: "@emily_d",
        body: "Highly recommend Pankaj for any full-stack work. He is professional, communicative, and very skilled.",
        img: "https://avatar.vercel.sh/emily",
    },
    {
        name: "Michael Brown",
        username: "@mike_b",
        body: "The UI he designed for our app is stunning. Our users love the new look and feel.",
        img: "https://avatar.vercel.sh/michael",
    },
    {
        name: "Lisa Wilson",
        username: "@lisa_w",
        body: "Pankaj is a true professional. He helped us scale our application to handle thousands of concurrent users.",
        img: "https://avatar.vercel.sh/lisa",
    },
];

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image className="rounded-full" width={32} height={32} alt={name} src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm text-gray-700 dark:text-gray-300">{body}</blockquote>
        </figure>
    );
};

export function Testimonials() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden py-20">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500">
                What People Say
            </h2>
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-black"></div>
        </div>
    );
}
