"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Twitter,
  Github,
  Linkedin,
  User,
  Cpu,
  Activity,
  FolderOpen
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative w-full bg-white border-t border-black">
      <div className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Logo & Vision */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
            
              <span className="text-2xl font-black text-black tracking-tighter uppercase">Pankaj</span>
            </Link>
            <p className="text-gray-500 text-lg font-light max-w-sm leading-relaxed mb-10">
              Architecting the future of <span className="text-black font-semibold">autonomous digital</span> ecosystems.
              Bridging the gap between raw data and human-centric intelligence.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Github, href: "https://github.com/ivpankaj" },
                { Icon: Linkedin, href: "https://linkedin.com/in/ivpankaj" },
                { Icon: Twitter, href: "https://x.com/ivpankaj" }
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="p-4 bg-black text-white rounded-2xl hover:bg-gray-800 transition-all flex items-center justify-center"
                >
                  <social.Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Matrix */}
          <div>
            <h3 className="text-[11px] font-black text-black uppercase tracking-[0.3em] mb-10 border-b border-black w-fit pb-1">Protocols</h3>
            <ul className="space-y-4">
              {[
                { name: "Archive", href: "/projects", Icon: FolderOpen },
                { name: "Bio-Sync", href: "/about", Icon: User },
                { name: "Services", href: "/services", Icon: Cpu },
                { name: "Stack", href: "/stack", Icon: Activity },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-4 text-sm font-black text-black/40 hover:text-black transition-colors uppercase tracking-widest group"
                  >
                    <item.Icon size={16} className="group-hover:scale-110 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connection Status */}
          <div>
            <h3 className="text-[11px] font-black text-black uppercase tracking-[0.3em] mb-10 border-b border-black w-fit pb-1">System</h3>
            <div className="space-y-6">
              <div className="p-6 border-2 border-black rounded-3xl bg-black text-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest">Global Status</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]" />
                </div>
                <p className="text-xl font-black uppercase tracking-tighter">OPERATIONAL</p>
                <div className="mt-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  Encryption Layer: ACTIVE
                </div>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 text-center">
                © {new Date().getFullYear()} Pankaj Verma // 2.4.0
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
