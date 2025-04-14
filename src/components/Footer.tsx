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
      
      <div className="max-w-7xl mx-auto py-10 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <motion.div 
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-black dark:bg-white flex items-center justify-center mr-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="h-4 w-4 sm:h-6 sm:w-6 rounded-full bg-white dark:bg-black" />
              </motion.div>
              <span className="text-lg sm:text-xl font-bold text-black dark:text-white">Pankaj</span>
            </Link>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 max-w-sm">
              Beautiful, modern UI components and templates to help you build 
              stunning websites and web applications.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {["Twitter", "GitHub", "Discord", "YouTube"].map((platform) => (
                <motion.a
                  key={platform}
                  href="#"
                  className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
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
            <div key={column.title} className="col-span-1">
              <h3 className="text-sm font-medium text-black dark:text-white mb-3 sm:mb-4">{column.title}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
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
        <div className="mt-10 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col space-y-6 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
            <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm">
              © {new Date().getFullYear()} Aceternity. All rights reserved.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex items-center w-fit sm:max-w-xs">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full py-2 px-3 sm:px-4 pr-10 sm:pr-12 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white text-xs sm:text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-black dark:bg-white flex items-center justify-center"
                >
                  <span className="sr-only">Subscribe</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-3 w-3 sm:h-4 sm:w-4 text-white dark:text-black" 
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
                className="py-2 px-4 bg-black w-fit dark:bg-white text-white dark:text-black rounded-lg text-xs sm:text-sm font-medium"
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