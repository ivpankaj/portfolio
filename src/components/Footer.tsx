"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Aceternity UI", href: "#" },
      { name: "UI Components", href: "#" },
      { name: "Templates", href: "#" },
      { name: "Pro Version", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "#" },
      { name: "Tutorials", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Changelog", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
      { name: "License", href: "#" },
      { name: "Cookies", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative w-full bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      {/* Animated accent line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-black dark:via-white to-transparent opacity-20" />
      
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <motion.div 
                className="h-10 w-10 rounded-full bg-black dark:bg-white flex items-center justify-center mr-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="h-6 w-6 rounded-full bg-white dark:bg-black" />
              </motion.div>
              <span className="text-xl font-bold text-black dark:text-white">Aceternity</span>
            </Link>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 max-w-sm">
              Beautiful, modern UI components and templates to help you build 
              stunning websites and web applications.
            </p>
            <div className="flex space-x-4">
              {["Twitter", "GitHub", "Discord", "YouTube"].map((platform) => (
                <motion.a
                  key={platform}
                  href="#"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {platform}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-medium text-black dark:text-white mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                      whileHover={{ x: 2 }}
                      whileTap={{ x: 0 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section with newsletter */}
        <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Aceternity. All rights reserved.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex items-center max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full py-2 px-4 pr-12 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-7 w-7 rounded-full bg-black dark:bg-white flex items-center justify-center"
                >
                  <span className="sr-only">Subscribe</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 text-white dark:text-black" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </motion.button>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="py-2 px-4 bg-black dark:bg-white text-white dark:text-black rounded-lg text-sm font-medium"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}