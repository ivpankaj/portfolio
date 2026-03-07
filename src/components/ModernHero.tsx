"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {
  SiAmazonwebservices,
  SiFigma,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { portfolioCounts, portfolioGroupCounts } from "@/data/portfolio-data";

const icons = [
  { Icon: SiReact, color: "text-blue-500", top: "15%", left: "12%" },
  { Icon: SiNextdotjs, color: "text-black", top: "25%", left: "85%" },
  { Icon: SiNodedotjs, color: "text-green-600", top: "75%", left: "18%" },
  { Icon: SiTypescript, color: "text-blue-600", top: "85%", left: "78%" },
  { Icon: SiTailwindcss, color: "text-cyan-500", top: "45%", left: "88%" },
  { Icon: SiMongodb, color: "text-green-700", top: "20%", left: "65%" },
  { Icon: SiAmazonwebservices, color: "text-orange-500", top: "65%", left: "8%" },
  { Icon: SiFirebase, color: "text-yellow-600", top: "88%", left: "42%" },
  { Icon: SiFigma, color: "text-red-500", top: "8%", left: "48%" },
];

const workLabels = [
  `${portfolioGroupCounts.landingPages} landing pages`,
  `${portfolioGroupCounts.dashboard} dashboard`,
  `${portfolioGroupCounts.projects} product builds`,
];

export const ModernHero = () => {
  return (
    <div className="relative flex min-h-[95vh] items-center justify-center overflow-hidden bg-white text-black">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#000 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="absolute -left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-orange-100/60 blur-[140px]" />
      <div className="absolute -right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-sky-100/60 blur-[140px]" />

      {icons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute hidden md:block ${item.color} opacity-40`}
          style={{ top: item.top, left: item.left }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1, y: [0, -15, 0] }}
          transition={{
            duration: 6 + Math.random() * 2,
            repeat: Infinity,
            delay: index * 0.1,
          }}
        >
          <item.Icon size={42} />
        </motion.div>
      ))}

      <div className="z-20 mx-auto flex w-full max-w-[90rem] flex-col items-center justify-between gap-12 px-6 lg:flex-row lg:gap-24">
        <motion.div
          className="relative h-64 w-64 flex-shrink-0 md:h-80 md:w-80 lg:h-[500px] lg:w-[500px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <div className="relative z-10 flex h-full w-full items-center justify-center overflow-visible">
            <img
              src="https://ik.imagekit.io/ivpankaj/public/pankaj3-removebg-preview.png?updatedAt=1746425529329"
              alt="Pankaj Verma"
              className="h-[112%] w-auto max-w-none -translate-y-5 object-contain grayscale opacity-90 brightness-105 drop-shadow-[0_24px_60px_rgba(0,0,0,0.12)] md:-translate-y-6 lg:h-[118%] lg:-translate-y-10"
            />
          </div>
        </motion.div>

        <motion.div
          className="z-20 flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          <span className="mb-6 block text-xs font-black uppercase tracking-[0.4em] text-gray-400 lg:inline-block">
            Portfolio Refresh
          </span>

          <h1 className="mb-8 text-[clamp(4rem,12vw,12rem)] font-black leading-[0.85] tracking-tighter text-black">
            PANKAJ <br />
            <span className="uppercase text-gray-200">VERMA</span>
          </h1>

          <p className="mb-12 max-w-3xl text-xl font-light leading-relaxed tracking-tight text-gray-500 md:text-2xl">
            Building landing pages, dashboards, and product experiences for
            businesses and ideas that need a clean launch-ready web presence.
            The archive currently holds{" "}
            <span className="font-semibold text-black">
              {portfolioCounts.current} shipped works
            </span>{" "}
            with{" "}
            <span className="font-semibold text-black">
              {portfolioCounts.upcoming} more in progress
            </span>
            .
          </p>

          <div className="mb-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            {workLabels.map((label) => (
              <span
                key={label}
                className="rounded-full border border-black/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-gray-600"
              >
                {label}
              </span>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row lg:justify-start">
            <Link
              href="/projects"
              className="flex w-full items-center justify-center rounded-2xl bg-black px-10 py-5 font-bold text-white shadow-xl shadow-black/10 transition-all hover:bg-gray-800 sm:w-auto"
            >
              View Work
            </Link>

            <motion.a
              href="https://drive.google.com/file/d/1x1zFawaMUXD-7xVfu0igNXkStrlpBRGB/view"
              target="_blank"
              whileHover={{ scale: 1.02, backgroundColor: "rgb(249 250 251)" }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center rounded-2xl border border-black/10 bg-transparent px-10 py-5 text-center font-bold text-black transition-all sm:w-auto"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-50/50 to-transparent" />
    </div>
  );
};
