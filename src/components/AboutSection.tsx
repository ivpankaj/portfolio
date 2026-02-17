"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
    return (
        <section className="relative w-full py-20 px-4 md:px-8 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute top-1/3 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex-1 space-y-6"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
                        About Me
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                        I'm <span className="font-semibold text-purple-600 dark:text-purple-400">Pankaj Verma</span>, a passionate Software Developer based in <span className="font-semibold text-blue-600 dark:text-blue-400">Noida</span>. I simplify complex technology to build products that people love to use.
                    </p>
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                        I specialize in creating websites and applications that are fast, attractive, and easy to use. whether you need a simple portfolio or a complex business platform, I can help you build it.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                            <span className="text-2xl">🎓</span>
                            <span className="font-medium">B.Tech in CSE</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                            <span className="text-2xl">🚀</span>
                            <span className="font-medium">Full Stack Dev</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                            <span className="text-2xl">💡</span>
                            <span className="font-medium">Problem Solver</span>
                        </div>
                    </div>
                </motion.div>

                {/* Image/Visual - Keeping it simple or reusing an avatar if available, otherwise just text layout is fine, but let's add a placeholder for now or a code snippet visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex-1 w-full max-w-md relative"
                >
                    <div className="relative aspect-square w-full rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-1 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm -z-10 transform translate-x-4 translate-y-4"></div>
                        <div className="h-full w-full bg-[#1e1e1e] rounded-xl p-6 overflow-hidden font-mono text-sm">
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="space-y-2 text-gray-300">
                                <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = <span className="text-yellow-400">{"{"}</span></p>
                                <p className="pl-4">name: <span className="text-green-400">"Pankaj Verma"</span>,</p>
                                <p className="pl-4">role: <span className="text-green-400">"MERN Stack Developer"</span>,</p>
                                <p className="pl-4">location: <span className="text-green-400">"Noida, Uttar Pradesh"</span>,</p>
                                <p className="pl-4">skills: <span className="text-yellow-400">["React", "Next.js", "Node.js"]</span>,</p>
                                <p className="pl-4">hardWorker: <span className="text-blue-400">true</span>,</p>
                                <p className="pl-4">quickLearner: <span className="text-blue-400">true</span>,</p>
                                <p className="pl-4">hriable: <span className="text-blue-400">true</span></p>
                                <p><span className="text-yellow-400">{"}"}</span>;</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
