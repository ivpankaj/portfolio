"use client";

import { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  X,
  Menu,
  FolderKanban,
  User,
  Briefcase,
  Mail,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <>
      {/* Floating navbar */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-11/12 md:w-10/12 lg:w-3/4 rounded-full py-3 px-6 z-50 flex items-center justify-between shadow-lg backdrop-blur-md bg-white/80 dark:bg-zinc-900/80`}
      >
        <div className="flex items-center">
          <div className="w-10 h-10 flex items-center justify-center mr-3">
            <Image
              src="https://ik.imagekit.io/ivpankaj/public/pankaj__1_-removebg-preview.png?updatedAt=1746425529510"
              alt="Logo"
              width={40}
              height={40}
            />
          </div>
          <Link
            href="/"
            className="text-xl font-bold text-gray-800 dark:text-gray-200"
          >
            <span className="font-bold text-lg md:text-xl cursor-pointer">
              Pankaj
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-gray-800 dark:text-gray-200">
          <Link href="/projects" className="flex items-center gap-1 font-medium hover:opacity-70">
            <FolderKanban size={16} />
            Projects
          </Link>
          <Link href="/about" className="flex items-center gap-1 font-medium hover:opacity-70">
            <User size={16} />
            About
          </Link>
          <Link href="/services" className="flex items-center gap-1 font-medium hover:opacity-70">
            <Briefcase size={16} />
            Services
          </Link>
          <Link href="/contact" className="flex items-center gap-1 font-medium hover:opacity-70">
            <Mail size={16} />
            Contact
          </Link>
        </div>

        {/* Theme & Mobile Menu Buttons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 md:hidden bg-gray-200 dark:bg-gray-700 rounded-full"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 w-11/12 bg-white dark:bg-zinc-900 rounded-lg p-4 z-50 md:hidden shadow-lg animate-fadeIn text-gray-800 dark:text-gray-200">
          <div className="flex flex-col space-y-4">
            <Link href="/projects" className="flex items-center gap-2 font-medium hover:opacity-70">
              <FolderKanban size={16} />
              Projects
            </Link>
            <Link href="/about" className="flex items-center gap-2 font-medium hover:opacity-70">
              <User size={16} />
              About
            </Link>
            <Link href="/services" className="flex items-center gap-2 font-medium hover:opacity-70">
              <Briefcase size={16} />
              Services
            </Link>
            <Link href="/contact" className="flex items-center gap-2 font-medium hover:opacity-70">
              <Mail size={16} />
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
