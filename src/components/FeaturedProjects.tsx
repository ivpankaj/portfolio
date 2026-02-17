"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Taxi Booking App",
        category: "Mobile App",
        description: "A complete ride-hailing platform with real-time tracking, driver matching, and secure payments.",
        image: "https://images.unsplash.com/photo-1485637260824-92ef2e63c0af?q=80&w=2074&auto=format&fit=crop", // Placeholder
        link: "/taxi-booking-app",
        tags: ["React Native", "Firebase", "Google Maps API"]
    },
    {
        title: "LMS Platform",
        category: "Web Application",
        description: "Comprehensive Learning Management System with video streaming, quizzes, and certification generation.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop", // Placeholder
        link: "/learning-management-system",
        tags: ["Next.js", "Node.js", "MongoDB"]
    },
    {
        title: "CookMyPapers",
        category: "SaaS Product",
        description: "Academic writing assistant platform helping students with research and paper formatting.",
        image: "https://images.unsplash.com/photo-1456324504439-367cee10d6b1?q=80&w=2070&auto=format&fit=crop",
        link: "/cookmypapers",
        tags: ["React", "Express", "Stripe"]
    }
];

const FeaturedProjects = () => {
    return (
        <section className="py-24 bg-white dark:bg-black relative">
            {/* Background noise or pattern */}
            <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Featured Work
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-lg text-lg">
                            A selection of projects that solve real problems and deliver value.
                        </p>
                    </div>
                    <Link
                        href="/projects"
                        className="group flex items-center gap-2 text-lg font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400"
                    >
                        View all projects
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Link href={project.link} key={index} className="group block">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                            >
                                {/* Image Container */}
                                <div className="aspect-video w-full overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-3">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-1 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium rounded-md text-gray-700 dark:text-gray-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
