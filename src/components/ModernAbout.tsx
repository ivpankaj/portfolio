"use client";

import React from "react";
import { motion } from "framer-motion";
import { TimelineDemo } from "./TimeLine";
import { User, Code, GraduationCap, MapPin, Heart, Cpu, Globe, Rocket } from "lucide-react";

export const ModernAbout = () => {
    return (
        <div className="min-h-screen bg-white text-black pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Profile Architecture */}
                <div className="flex flex-col lg:flex-row gap-24 items-center mb-60">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="relative w-full aspect-square max-w-lg mx-auto"
                        >
                            {/* AI Glow Ring */}
                            <div className="absolute inset-[-10px] rounded-[80px] bg-gradient-to-tr from-blue-100 via-indigo-50 to-purple-100 opacity-60 blur-xl animate-pulse" />

                            <div className="relative z-10 w-full h-full bg-white border border-black/[0.03] rounded-[80px] flex items-center justify-center p-4 overflow-hidden shadow-2xl shadow-black/[0.02]">
                                <img
                                    src="https://ik.imagekit.io/ivpankaj/public/pankaj3-removebg-preview.png?updatedAt=1746425529329"
                                    alt="Pankaj Verma"
                                    className="w-full h-full object-cover grayscale brightness-105"
                                />
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-8 block">Biographic Sync</span>
                            <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-12 leading-none uppercase">
                                PROGENITOR <br /> <span className="text-gray-200">DATA</span>
                            </h2>

                            <p className="text-gray-400 text-xl md:text-2xl leading-relaxed font-light mb-16 tracking-tight">
                                Technical lead <span className="text-black font-semibold">Pankaj Verma</span>. Specialized in
                                high-capacity neural architectures and full-stack systems. Bridging jurisdictional
                                data gaps with <span className="italic">autonomous</span> engineering solutions.
                            </p>

                            <div className="grid grid-cols-2 gap-y-12 gap-x-12">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-black">
                                        <GraduationCap size={18} strokeWidth={2.5} />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Education</span>
                                    </div>
                                    <p className="text-sm text-gray-400 font-medium">B.Tech // Computer Science</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-black">
                                        <MapPin size={18} strokeWidth={2.5} />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Base</span>
                                    </div>
                                    <p className="text-sm text-gray-400 font-medium">Noida, Uttar Pradesh</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-black">
                                        <Cpu size={18} strokeWidth={2.5} />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Domain</span>
                                    </div>
                                    <p className="text-sm text-gray-400 font-medium">Systems Engineering</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-black">
                                        <Rocket size={18} strokeWidth={2.5} />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Objective</span>
                                    </div>
                                    <p className="text-sm text-gray-400 font-medium">Artificial General Intelligence</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Trajectory Protocol */}
                <div className="relative">
                    <div className="mb-32">
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-6 block text-center">Temporal Index</span>
                        <h3 className="text-5xl md:text-8xl font-black text-center mb-8 tracking-tighter uppercase">
                            TRAJECTORY <br className="md:hidden" /> <span className="text-gray-200">PROTOCOL</span>
                        </h3>
                        <div className="w-16 h-1 bg-black mx-auto rounded-full" />
                    </div>

                    <div className="bg-gray-50/30 rounded-[64px] border border-black/[0.03] p-8 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.01)]">
                        <TimelineDemo />
                    </div>
                </div>
            </div>
        </div>
    );
};
