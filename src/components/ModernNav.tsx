"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Stack", href: "/stack" },
    { name: "Services", href: "/services" },
];

export const ModernNav = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className={`
          flex items-center justify-between p-2 rounded-2xl border transition-all duration-300
          ${isScrolled
                        ? "bg-white/80 border-black/5 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                        : "bg-transparent border-transparent"
                    }
        `}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 pl-4">
                      
                        <span className="font-bold text-xl tracking-tighter text-black uppercase">Pankaj</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="px-4 py-2 text-sm font-semibold text-gray-400 hover:text-black transition-colors relative group uppercase tracking-wider"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 pr-2">
                        <div className="hidden sm:flex items-center gap-2 mr-4">
                            <a href="https://github.com/ivpankaj" target="_blank" className="p-2 text-gray-400 hover:text-black transition-colors">
                                <Github size={18} />
                            </a>
                            <a href="https://linkedin.com/in/ivpankaj" target="_blank" className="p-2 text-gray-400 hover:text-black transition-colors">
                                <Linkedin size={18} />
                            </a>
                        </div>
                        <Link
                            href="/contact"
                            className="px-6 py-2.5 bg-black text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-gray-800 transition-all shadow-xl shadow-black/10"
                        >
                            Connect
                        </Link>
                        <button
                            className="md:hidden p-2 text-black"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute top-full left-0 right-0 mt-4 mx-4 p-8 bg-white border border-black/5 backdrop-blur-2xl rounded-[32px] md:hidden z-50 shadow-2xl"
                    >
                        <div className="flex flex-col gap-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-3xl font-black text-gray-300 hover:text-black transition-colors uppercase tracking-tighter"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="h-px bg-black/5 my-2" />
                            <div className="flex items-center gap-6">
                                <Github size={24} className="text-gray-400" />
                                <Linkedin size={24} className="text-gray-400" />
                                <Twitter size={24} className="text-gray-400" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
