"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SiReact, SiNextdotjs, SiNodedotjs, SiFirebase, SiAmazonwebservices, SiTailwindcss, SiTypescript, SiPython, SiOpenai } from "react-icons/si";
import { ArrowRight, Box, Cpu, Database, Activity } from "lucide-react";

const projects = [
    {
        title: "NEURAL TRANSIT / WE4YOU",
        subtitle: "TRANSPORTATION ENGINE",
        description: "Autonomous logistical orchestration system utilizing real-time driver telemetry and predictive geo-spatial indexing.",
        icon: <Cpu size={32} />,
        link: "/taxi-booking-app",
        tech: [
            { name: "Node.js", Icon: SiNodedotjs },
            { name: "React Native", Icon: SiReact },
            { name: "FastAPI", Icon: SiPython }
        ]
    },
    {
        title: "SYNAPSE LMS",
        subtitle: "COGNITIVE ARCHIVE",
        description: "Decentralized knowledge distribution network with asynchronous video serialization and performance analytics.",
        icon: <Database size={32} />,
        link: "/learning-management-system",
        tech: [
            { name: "Next.js", Icon: SiNextdotjs },
            { name: "Firebase", Icon: SiFirebase },
            { name: "TypeScript", Icon: SiTypescript }
        ]
    },
    {
        title: "ACADEMIA SYNC",
        subtitle: "RESEARCH INTERFACE",
        description: "Collaborative research protocol with real-time state synchronization and automated document processing.",
        icon: <Box size={32} />,
        link: "/cookmypapers",
        tech: [
            { name: "MERN Stack", Icon: SiReact },
            { name: "AWS S3", Icon: SiAmazonwebservices },
            { name: "Redux", Icon: SiReact }
        ]
    }
];

const lab = [
    {
        title: "CORE.GEN",
        description: "Experimental generative interfaces for automated digital asset production.",
        icon: <SiOpenai size={24} />,
    },
    {
        title: "METRIC.OS",
        description: "Global IoT sensor mesh for high-fidelity climate impact monitoring.",
        icon: <Activity size={24} />,
    }
];

export const ModernProjects = () => {
    return (
        <div className="min-h-screen bg-white text-black pb-32 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-32">
                    <span className="text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-8 block">Active Deployments</span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-none"
                    >
                        SYSTEM <br /> <span className="text-gray-200 uppercase">Archive</span>
                    </motion.h1>
                    <div className="w-24 h-1 bg-black rounded-full" />
                </div>

                {/* Project List */}
                <div className="space-y-40">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="group flex flex-col lg:flex-row gap-16 items-start"
                        >
                            <div className="lg:w-1/2 w-full">
                                <div className="relative aspect-[16/10] bg-gray-50 border border-black/[0.03] rounded-[48px] overflow-hidden shadow-2xl shadow-black/[0.02]">
                                    <div className="absolute inset-0 flex items-center justify-center text-black/5 group-hover:text-black transition-all duration-700">
                                        <div className="p-16 bg-white rounded-full border border-black/[0.03] shadow-xl scale-90 group-hover:scale-100 transition-transform duration-700">
                                            {project.icon}
                                        </div>
                                    </div>
                                    {/* AI Pattern Overlay */}
                                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                                </div>
                            </div>

                            <div className="lg:w-1/2 flex flex-col justify-center">
                                <span className="text-[10px] font-black uppercase tracking-[4px] text-gray-400 mb-6 block">
                                    {project.subtitle}
                                </span>
                                <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter group-hover:text-gray-500 transition-colors">
                                    {project.title}
                                </h2>
                                <p className="text-gray-500 text-lg mb-10 leading-relaxed font-light max-w-xl">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mb-12">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="flex items-center gap-2 text-[10px] px-4 py-2 rounded-full bg-white border border-black/[0.03] text-black font-black uppercase tracking-widest shadow-sm">
                                            <t.Icon size={12} className="opacity-40" />
                                            {t.name}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    href={project.link}
                                    className="w-fit flex items-center gap-3 px-10 py-5 bg-black text-white font-black text-xs uppercase tracking-widest rounded-3xl hover:bg-gray-800 transition-all shadow-xl shadow-black/10"
                                >
                                    Access Protocol <ArrowRight size={16} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Laboratory */}
                <div className="mt-60 border-t border-black/[0.03] pt-32">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                        <div>
                            <span className="text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-6 block">Experimental</span>
                            <h3 className="text-5xl font-black tracking-tighter">LABORATORY</h3>
                        </div>
                        <p className="text-gray-400 text-lg font-light max-w-sm">
                            Beta phase explorations into autonomous system behaviors.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {lab.map((p, i) => (
                            <div key={i} className="p-12 bg-gray-50/50 border border-black/[0.03] rounded-[48px] hover:bg-black hover:text-white transition-all duration-500 group">
                                <div className="mb-10 p-5 bg-white rounded-2xl w-fit group-hover:bg-white/10 transition-colors text-black group-hover:text-white shadow-sm">
                                    {p.icon}
                                </div>
                                <h4 className="text-2xl font-black mb-6 uppercase tracking-tight">{p.title}</h4>
                                <p className="text-gray-400 group-hover:text-gray-300 text-sm leading-relaxed font-light">{p.description}</p>
                                <div className="mt-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black group-hover:text-white">
                                    Status: ACTIVE <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
