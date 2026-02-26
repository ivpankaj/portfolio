"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiTailwindcss,
    SiMongodb, SiPostgresql, SiDocker, SiAmazonwebservices, SiFirebase,
    SiExpress, SiPython, SiGraphql, SiStrapi, SiFigma, SiRedux, SiRedis, SiJavascript
} from "react-icons/si";

const tech = [
    { name: "React", Icon: SiReact, color: "#000000" },
    { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
    { name: "Node.js", Icon: SiNodedotjs, color: "#000000" },
    { name: "TypeScript", Icon: SiTypescript, color: "#000000" },
    { name: "TailwindCSS", Icon: SiTailwindcss, color: "#000000" },
    { name: "MongoDB", Icon: SiMongodb, color: "#000000" },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "#000000" },
    { name: "Docker", Icon: SiDocker, color: "#000000" },
    { name: "AWS", Icon: SiAmazonwebservices, color: "#000000" },
    { name: "Firebase", Icon: SiFirebase, color: "#000000" },
    { name: "Express", Icon: SiExpress, color: "#000000" },
    { name: "Python", Icon: SiPython, color: "#000000" },
    { name: "GraphQL", Icon: SiGraphql, color: "#000000" },
    { name: "Strapi", Icon: SiStrapi, color: "#000000" },
    { name: "Figma", Icon: SiFigma, color: "#000000" },
    { name: "Redux", Icon: SiRedux, color: "#000000" },
    { name: "Redis", Icon: SiRedis, color: "#000000" },
    { name: "JavaScript", Icon: SiJavascript, color: "#000000" },
];

export const TechMarquee = () => {
    return (
        <div className="py-16 bg-white border-y border-black/[0.03] overflow-hidden">
            <div className="flex whitespace-nowrap">
                {[...Array(2)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{
                            duration: 50,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex items-center gap-24 px-12"
                    >
                        {tech.map((item, idx) => (
                            <div key={`${item.name}-${idx}`} className="flex items-center gap-6 group">
                                <item.Icon
                                    size={32}
                                    className="text-black opacity-10 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <span className="text-3xl md:text-5xl font-black text-black/[0.03] uppercase group-hover:text-black transition-colors cursor-default tracking-tighter">
                                    {item.name}
                                </span>
                                <span className="text-black/5 font-light text-2xl">/</span>
                            </div>
                        ))}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
