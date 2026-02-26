"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
    SiPostgresql, SiTensorflow, SiExpress, SiRedis,
    SiRust, SiSolana
} from "react-icons/si";

const projects = [
    {
        title: "NeuroDashboard X",
        category: "GEN-AI // SUSTAINABILITY",
        description: "Neural network visualization for carbon sequestration forecasting across fragmented global datasets.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop",
        tech: [
            { name: "Next.js", Icon: SiNextdotjs },
            { name: "TensorFlow", Icon: SiTensorflow },
            { name: "PostgreSQL", Icon: SiPostgresql }
        ],
        link: "#",
        github: "#"
    },
    {
        title: "Quantum SaaS",
        category: "ENTERPRISE INTELLIGENCE",
        description: "Predictive CRM infrastructure with autonomous lead generation and vector-based analytics.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        tech: [
            { name: "React", Icon: SiReact },
            { name: "Express", Icon: SiExpress },
            { name: "Redis", Icon: SiRedis }
        ],
        link: "#",
        github: "#"
    },
    {
        title: "Aether Protocol",
        category: "DECENTRALIZED COMPUTE",
        description: "High-throughput liquid staking protocol optimized for ultra-low latency mesh networks.",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2064&auto=format&fit=crop",
        tech: [
            { name: "Rust", Icon: SiRust },
            { name: "Solana", Icon: SiSolana },
            { name: "Tailwind", Icon: SiTailwindcss }
        ],
        link: "#",
        github: "#"
    }
];

export const WorkHighlight = () => {
    return (
        <div className="py-40 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-6 block">PROJECT ARCHIVE</span>
                        <h2 className="text-5xl md:text-8xl font-black text-black mb-6 tracking-tighter">
                            SELECT <span className="text-gray-200">WORK</span>
                        </h2>
                        <p className="text-gray-400 text-xl font-light leading-relaxed">
                            A curated exhibition of high-performance digital architectures.
                        </p>
                    </div>
                    <button className="flex items-center gap-3 text-black font-black uppercase text-xs tracking-widest group border-b-2 border-black pb-2">
                        EXPLORE ALL <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[16/11] rounded-[40px] overflow-hidden mb-10 bg-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-black/[0.03]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                                />

                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="absolute top-8 right-8 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    <a href={project.github} className="p-4 bg-white rounded-full border border-black/5 text-black hover:bg-black hover:text-white transition-all shadow-xl">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.link} className="p-4 bg-black rounded-full text-white hover:bg-gray-800 transition-all shadow-xl">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="px-6">
                                <span className="text-[10px] font-black uppercase tracking-[3px] text-gray-300 mb-4 block">
                                    {project.category}
                                </span>
                                <h3 className="text-3xl font-black text-black mb-6 tracking-tight group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-10 line-clamp-2 leading-relaxed font-light">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t.name} className="flex items-center gap-2 text-[10px] px-3 py-1.5 rounded-full bg-gray-50 border border-black/[0.03] text-gray-600 font-black uppercase tracking-widest">
                                            <t.Icon size={12} className="opacity-50" />
                                            {t.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
