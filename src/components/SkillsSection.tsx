"use client";
import React from "react";
import {
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiMongodb,
    SiTailwindcss,
    SiTypescript,
    SiFirebase,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiGit,
    SiGithub,
    SiPostman
} from "react-icons/si";
import { motion } from "framer-motion";



const SkillsSection = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
                >
                    Tech Stack
                </motion.h2>

                <div className="flex flex-col gap-14 w-full max-w-6xl mx-auto">
                    {/* Frontend */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 w-fit mx-auto md:mx-0">
                            Frontend (What Users See)
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center md:justify-items-start">
                            {[
                                { name: "React", icon: SiReact, color: "#61DAFB" },
                                { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
                                { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
                                { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
                                { name: "CSS3", icon: SiCss3, color: "#1572B6" },
                                { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
                                { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
                            ].map((skill, index) => (
                                <SkillCard key={index} skill={skill} index={index} />
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300 w-fit mx-auto md:mx-0">
                            Backend (Logic & Data)
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center md:justify-items-start">
                            {[
                                { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
                                { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
                                { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
                            ].map((skill, index) => (
                                <SkillCard key={index} skill={skill} index={index} />
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-300 w-fit mx-auto md:mx-0">
                            Tools (Productivity)
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center md:justify-items-start">
                            {[
                                { name: "Git", icon: SiGit, color: "#F05032" },
                                { name: "GitHub", icon: SiGithub, color: "#181717" },
                                { name: "Postman", icon: SiPostman, color: "#FF6C37" }
                            ].map((skill, index) => (
                                <SkillCard key={index} skill={skill} index={index} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Old grid removed */}
            </div>
        </section>
    );
};

const SkillCard = ({ skill, index }: { skill: any, index: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center group cursor-pointer"
    >
        <div className="relative p-6 bg-white dark:bg-white/5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-100 dark:border-gray-800">
            <skill.icon
                size={48}
                className="transition-colors duration-300 group-hover:scale-110"
                style={{ color: skill.color === "#000000" ? "currentColor" : skill.color }}
            />
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-300 font-medium group-hover:text-purple-500 transition-colors">
            {skill.name}
        </p>
    </motion.div>
);

export default SkillsSection;
