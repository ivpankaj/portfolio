"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    SiReact, SiNextdotjs, SiMongodb, SiPostgresql,
    SiAmazonwebservices, SiFirebase, SiFigma, SiTailwindcss,
    SiTypescript, SiNodedotjs
} from "react-icons/si";

const bentoItems = [
    {
        title: "CORE ARCHITECTURE",
        description: "Orchestrating complex digital experiences with Next.js and high-performance React patterns.",
        icon: <div className="flex gap-4 drop-shadow-sm"><SiReact size={32} className="text-[#61DAFB]" /><SiNextdotjs size={32} className="text-black" /></div>,
        className: "md:col-span-2 md:row-span-2 bg-gray-50",
        visual: (
            <div className="absolute right-[-5%] top-10 w-[55%] h-[75%] bg-white rounded-l-2xl border border-black/5 shadow-sm p-5 flex flex-col gap-3 overflow-hidden transition-transform duration-500 group-hover:-translate-x-3">
                <div className="flex gap-2 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                </div>
                <div className="w-full h-4 bg-gray-100 rounded-sm"></div>
                <div className="w-4/5 h-4 bg-gray-100 rounded-sm"></div>
                <div className="w-full h-20 bg-gray-50 rounded-sm mt-auto border border-gray-100 flex flex-col gap-2 p-2">
                    <div className="w-1/2 h-2 bg-gray-200 rounded-sm"></div>
                    <div className="w-3/4 h-2 bg-gray-200 rounded-sm"></div>
                </div>
            </div>
        )
    },
    {
        title: "DATA SYNTHESIS",
        description: "Schema-less and relational data modeling.",
        icon: <div className="flex gap-3 drop-shadow-sm"><SiMongodb size={24} className="text-[#47A248]" /><SiPostgresql size={24} className="text-[#4169E1]" /></div>,
        className: "md:col-span-1 md:row-span-1 bg-gray-50/50",
        visual: (
            <div className="absolute right-6 top-[45%] -translate-y-1/2 flex items-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-3 h-10 bg-green-400 rounded-t-sm"></div>
                <div className="w-3 h-6 bg-blue-400 rounded-t-sm"></div>
                <div className="w-3 h-14 bg-indigo-400 rounded-t-sm"></div>
                <div className="w-3 h-8 bg-purple-400 rounded-t-sm"></div>
            </div>
        )
    },
    {
        title: "CLOUD COMPUTE",
        description: "Serverless scaling and autonomous deployment.",
        icon: <div className="flex gap-3 drop-shadow-sm"><SiAmazonwebservices size={24} className="text-[#FF9900]" /><SiFirebase size={24} className="text-[#FFCA28]" /></div>,
        className: "md:col-span-1 md:row-span-1 bg-gray-50/50",
        visual: (
            <div className="absolute -right-8 -top-8 w-40 h-40 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
        )
    },
    {
        title: "TYPE SAFETY",
        description: "Strictly typed autonomous systems.",
        icon: <SiTypescript size={24} className="text-[#3178C6] drop-shadow-sm" />,
        className: "md:col-span-1 md:row-span-2 bg-gray-50",
        visual: (
            <div className="absolute right-6 top-[40%] flex flex-col gap-2 font-mono text-xs text-blue-900/30 font-semibold group-hover:text-blue-900/50 transition-colors duration-500">
                <p>{"interface Data {"}</p>
                <p className="pl-4">{"id: string;"}</p>
                <p className="pl-4">{"sync: boolean;"}</p>
                <p>{"}"}</p>
            </div>
        )
    },
    {
        title: "INTERFACE DESIGN",
        description: "Optimized ergonomic UI/UX synthesis.",
        icon: <div className="flex gap-3 drop-shadow-sm"><SiFigma size={24} className="text-[#F24E1E]" /><SiTailwindcss size={24} className="text-[#06B6D4]" /></div>,
        className: "md:col-span-2 md:row-span-1 bg-gray-50/50",
        visual: (
            <div className="absolute right-12 top-1/2 -translate-y-1/2 flex items-center gap-4 opacity-80 group-hover:scale-105 transition-transform duration-500">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 shadow-md border-2 border-white"></div>
                <div className="w-16 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-md border-2 border-white"></div>
                <div className="w-10 h-10 rounded-xl transform rotate-12 bg-gradient-to-br from-yellow-400 to-orange-500 shadow-md border-2 border-white"></div>
            </div>
        )
    }
];

export const BentoSkills = () => {
    return (
        <div className=" bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 flex flex-col items-center">
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-4 px-4 py-1.5 border border-black/5 rounded-full">Capability Matrix</span>
                    <h2 className="text-5xl md:text-8xl font-black text-black mb-8 tracking-tighter text-center">SYSTEM <span className="text-gray-200">STACK</span></h2>
                    <div className="w-20 h-1 bg-black rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[220px]">
                    {bentoItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`
                relative group rounded-[32px] border border-black/[0.03] overflow-hidden
                p-10 flex flex-col justify-end ${item.className}
                hover:border-black/10 transition-colors shadow-[0_4px_20px_rgb(0,0,0,0.02)]
              `}
                        >
                            <div className="absolute top-10 left-10 transition-transform duration-500 group-hover:scale-110">
                                {item.icon}
                            </div>

                            {item.visual && item.visual}

                            <div className="relative z-10 w-2/3">
                                <h3 className="text-sm font-black text-black mb-2 uppercase tracking-widest">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                            </div>

                            {/* Subtle Background pattern */}
                            <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
