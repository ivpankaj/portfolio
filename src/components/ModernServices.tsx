"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Code2,
    Smartphone,
    Globe,
    Cpu,
    ShieldCheck,
    Rocket,
    ArrowRight,
    Search,
    Zap,
    Layers
} from "lucide-react";

const services = [
    {
        title: "SYSTEM ARCHITECTURE",
        description: "Designing high-availability autonomous ecosystems using Next.js, distributed microservices, and neural-optimized data streams.",
        icon: <Layers size={32} />,
        features: ["Edge Optimization", "Semantic Indexing", "Real-time State Sync"]
    },
    {
        title: "MOBILE INTERFACE",
        description: "Engineering cross-platform mobile environments with React Native, focusing on biometric integration and sub-second interaction speed.",
        icon: <Smartphone size={32} />,
        features: ["Native Bridge Logic", "Deterministic UI", "Atomic Components"]
    },
    {
        title: "CORE ENGINEERING",
        description: "Full-cycle system development from vector database orchestration to high-performance API synthesis.",
        icon: <Cpu size={32} />,
        features: ["GraphQL Mesh", "Event-Driven IO", "Schema Evolution"]
    },
    {
        title: "CLOUD INFRA",
        description: "Orchestrating serverless compute clusters on AWS and Firebase with autonomous CI/CD pipelines and zero-trust security.",
        icon: <Zap size={32} />,
        features: ["Auto-scaling Mesh", "Encryption at REST", "Logic Isolation"]
    }
];

export const ModernServices = () => {
    return (
        <div className="min-h-screen bg-white text-black pb-32 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header Sub-section */}
                <div className="mb-32">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 mb-8 block">Operational Domains</span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-none"
                    >
                        SERVICE <br /> <span className="text-gray-200">MATRIX</span>
                    </motion.h1>
                    <p className="text-gray-400 text-xl font-light max-w-2xl leading-relaxed tracking-tight">
                        Initializing specialized protocols for high-capacity digital transformation and
                        <span className="text-black font-semibold uppercase ml-1">autonomous system integration</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group p-12 bg-gray-50/50 border border-black/[0.03] rounded-[56px] hover:bg-black hover:text-white transition-all duration-700 flex flex-col justify-between"
                        >
                            <div>
                                <div className="mb-10 p-5 bg-white rounded-2xl w-fit text-black shadow-sm group-hover:bg-white/10 group-hover:text-white transition-colors duration-500">
                                    {service.icon}
                                </div>

                                <h2 className="text-3xl font-black mb-6 tracking-tighter uppercase">
                                    {service.title}
                                </h2>

                                <p className="text-gray-400 text-lg mb-12 leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                                    {service.description}
                                </p>

                                <div className="grid grid-cols-1 gap-4">
                                    {service.features.map((f) => (
                                        <div key={f} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[3px]">
                                            <div className="w-2 h-px bg-black group-hover:bg-white transition-colors shadow-[0_0_8px_rgba(0,0,0,1)] group-hover:shadow-[0_0_8px_rgba(255,255,255,1)]" />
                                            {f}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-20 pt-10 border-t border-black/[0.03] group-hover:border-white/10 flex items-center justify-between">
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">Protocol {index + 1}</span>
                                <button className="flex items-center gap-3 text-xs font-black uppercase tracking-widest group/btn">
                                    INITIATE <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Integration Protocol */}
                <div className="mt-60 rounded-[64px] bg-black p-12 md:p-24 text-white overflow-hidden relative">
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
                        <div className="max-w-2xl">
                            <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
                                READY TO <br /> SYNC?
                            </h3>
                            <p className="text-gray-400 text-xl font-light leading-relaxed">
                                Join the network and deploy your next high-performance digital ecosystem with autonomous precision.
                            </p>
                        </div>
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-6 bg-white text-black font-black text-xs uppercase tracking-[0.3em] rounded-3xl shadow-2xl hover:bg-gray-100 transition-all text-center whitespace-nowrap"
                        >
                            Open Connection
                        </motion.a>
                    </div>
                    {/* Background Light Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[160px] pointer-events-none" />
                </div>
            </div>
        </div>
    );
};
