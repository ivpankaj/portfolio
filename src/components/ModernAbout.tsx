"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, GraduationCap, MapPin, Rocket } from "lucide-react";
import { portfolioCounts, portfolioGroupCounts } from "@/data/portfolio-data";
import { TimelineDemo } from "./TimeLine";

export const ModernAbout = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white pb-32 text-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-48 flex flex-col items-center gap-24 lg:flex-row">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto aspect-square w-full max-w-lg"
            >
              <div className="absolute inset-[-10px] rounded-[80px] bg-gradient-to-tr from-orange-100 via-amber-50 to-sky-100 opacity-60 blur-xl" />

              <div className="relative z-10 flex h-full w-full items-center justify-center overflow-hidden rounded-[80px] border border-black/[0.03] bg-white p-4 shadow-2xl shadow-black/[0.02]">
                <img
                  src="https://ik.imagekit.io/ivpankaj/public/pankaj3-removebg-preview.png?updatedAt=1746425529329"
                  alt="Pankaj Verma"
                  className="h-full w-full object-cover grayscale brightness-105"
                />
              </div>
            </motion.div>
          </div>

          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="mb-8 block text-xs font-black uppercase tracking-[0.4em] text-gray-400">
                About Me
              </span>
              <h2 className="mb-10 text-6xl font-black uppercase leading-none tracking-tighter md:text-8xl">
                BUILDS,
                <span className="block text-gray-200">NOT BUZZWORDS</span>
              </h2>

              <p className="mb-12 text-xl font-light leading-relaxed tracking-tight text-gray-500 md:text-2xl">
                I am Pankaj Verma, a developer based in Noida who likes turning
                ideas into clear, launch-ready interfaces. Most of my work sits
                around landing pages, dashboards, and practical web products
                that need clean structure and straightforward execution.
              </p>

              <p className="mb-16 max-w-3xl text-base leading-8 text-gray-500">
                Right now the portfolio includes {portfolioCounts.current}{" "}
                current builds across {portfolioGroupCounts.landingPages} landing
                pages, {portfolioGroupCounts.dashboard} dashboard, and{" "}
                {portfolioGroupCounts.projects} project builds. I keep the
                process simple: understand the page or product clearly, shape the
                content well, then build the UI so it feels ready to use.
              </p>

              <div className="grid grid-cols-2 gap-x-12 gap-y-12">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-black">
                    <GraduationCap size={18} strokeWidth={2.5} />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      Education
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-400">
                    B.Tech in Computer Science
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-black">
                    <MapPin size={18} strokeWidth={2.5} />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      Base
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-400">
                    Noida, Uttar Pradesh
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-black">
                    <Cpu size={18} strokeWidth={2.5} />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      Focus
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-400">
                    Frontend systems and product UI
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-black">
                    <Rocket size={18} strokeWidth={2.5} />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      Direction
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-400">
                    Better products with cleaner presentation
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative">
          <div className="mb-24">
            <span className="mb-6 block text-center text-xs font-black uppercase tracking-[0.4em] text-gray-400">
              Journey
            </span>
            <h3 className="mb-8 text-center text-5xl font-black uppercase tracking-tighter md:text-7xl">
              EXPERIENCE
              <span className="block text-gray-200">TIMELINE</span>
            </h3>
            <div className="mx-auto h-1 w-16 rounded-full bg-black" />
          </div>

          <div className="rounded-[64px] border border-black/[0.03] bg-gray-50/30 p-8 shadow-[0_40px_100px_rgba(0,0,0,0.01)] md:p-12">
            <TimelineDemo />
          </div>
        </div>
      </div>
    </div>
  );
};
