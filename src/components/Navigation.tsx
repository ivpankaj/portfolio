import { useState } from "react";
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

interface NavigationProps {
  darkMode: boolean;
  toggleTheme: () => void;
  themeClasses: {
    accent: string;
    highlight: string;
  };
}

export default function Navigation({
  darkMode,
  toggleTheme,
  themeClasses,
}: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Floating navbar */}
      <nav
        className={`${themeClasses.accent} fixed top-4 left-1/2 -translate-x-1/2 w-11/12 md:w-10/12 lg:w-3/4 rounded-full py-3 px-6 z-50 flex items-center justify-between shadow-lg backdrop-blur-md bg-opacity-80`}
      >
        <div className="flex items-center">
          <div className="w-10 h-10 flex items-center justify-center mr-3">
            <Image
              src="/pankaj__1_-removebg-preview.png"
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
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/projects"
            className="flex items-center gap-1 font-medium hover:opacity-70 transition-opacity"
          >
            <FolderKanban size={16} />
            Projects
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-1 font-medium hover:opacity-70 transition-opacity"
          >
            <User size={16} />
            About
          </Link>
          <Link
            href="/services"
            className="flex items-center gap-1 font-medium hover:opacity-70 transition-opacity"
          >
            <Briefcase size={16} />
            Services
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-1 font-medium hover:opacity-70 transition-opacity"
          >
            <Mail size={16} />
            Contact
          </Link>
        </div>

        {/* Theme & Mobile Menu Buttons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className={`${themeClasses.highlight} p-2 rounded-full transition-all duration-300 hover:scale-110`}
            aria-label={
              darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
            }
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`${themeClasses.highlight} p-2 md:hidden transition-all duration-300`}
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`fixed top-20 left-1/2 -translate-x-1/2 w-11/12 ${themeClasses.accent} rounded-lg p-4 z-50 md:hidden animate-fadeIn shadow-lg`}
        >
          <div className="flex flex-col space-y-4">
            <Link
              href="/projects"
              className="flex items-center gap-2 font-medium hover:opacity-70 transition-opacity"
            >
              <FolderKanban size={16} />
              Projects
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 font-medium hover:opacity-70 transition-opacity"
            >
              <User size={16} />
              About
            </Link>
            <Link
              href="/services"
              className="flex items-center gap-2 font-medium hover:opacity-70 transition-opacity"
            >
              <Briefcase size={16} />
              Services
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 font-medium hover:opacity-70 transition-opacity"
            >
              <Mail size={16} />
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
