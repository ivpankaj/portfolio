"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Twitter,
  Github,
  Linkedin,
  Globe,
  User,
  Mail,
  Folder,
  FileText,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative w-full bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      {/* Accent line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-black dark:via-white to-transparent opacity-20" />

      <div className="max-w-7xl mx-auto py-10 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Branding + Socials */}
          <div>
            <Link href="/" className="flex items-center mb-6">
              <Image
                        src="/pankaj__1_-removebg-preview.png"
                        alt="Logo"
                        width={40}
                        height={40}
                      />
              <span className="text-xl font-bold text-black dark:text-white ml-6">Pankaj</span>
            </Link>

            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 max-w-sm">
              Full-stack Developer passionate about building modern web applications.
            </p>

            <div className="flex gap-4">
              <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link
                  href="https://x.com/ivpankaj"
                  target="_blank"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  <Twitter size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link
                  href="https://github.com/ivpankaj"
                  target="_blank"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  <Github size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link
                  href="https://linkedin.com/in/ivpankaj15"
                  target="_blank"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  <Linkedin size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link
                  href="https://ivpankaj.vercel.app"
                  target="_blank"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  <Globe size={18} />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium text-black dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <motion.div whileHover={{ x: 2 }} whileTap={{ x: 0 }}>
                  <Link
                    href="/about"
                    className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <User size={16} /> About Me
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 2 }} whileTap={{ x: 0 }}>
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <Mail size={16} /> Contact
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 2 }} whileTap={{ x: 0 }}>
                  <Link
                    href="/projects"
                    className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <Folder size={16} /> Projects
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 2 }} whileTap={{ x: 0 }}>
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <FileText size={16} /> Resume
                  </Link>
                </motion.div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 pt-6 border-t border-neutral-200 dark:border-neutral-800 text-center">
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            © {new Date().getFullYear()} Pankaj. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
