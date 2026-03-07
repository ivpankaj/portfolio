"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Blocks,
  BriefcaseBusiness,
  LayoutTemplate,
  PanelsTopLeft,
} from "lucide-react";
import { portfolioCounts, portfolioGroupCounts } from "@/data/portfolio-data";

const services = [
  {
    title: "Landing Pages",
    description:
      "Marketing and business-facing pages built to present a brand clearly, explain the offer, and collect leads without clutter.",
    icon: <LayoutTemplate size={32} />,
    features: ["Brand positioning", "Responsive sections", "Conversion-focused layout"],
  },
  {
    title: "Dashboards",
    description:
      "Internal panels and control surfaces that bring actions, tracking, and daily workflow visibility into one easy interface.",
    icon: <PanelsTopLeft size={32} />,
    features: ["Admin views", "Workflow clarity", "Quick-access actions"],
  },
  {
    title: "Product Builds",
    description:
      "Web product interfaces for tools, service platforms, AI concepts, and niche business ideas that need a usable frontend.",
    icon: <Blocks size={32} />,
    features: ["Product UI", "Feature organization", "Scalable component structure"],
  },
  {
    title: "Portfolio Refreshes",
    description:
      "Visual and content updates for personal brands or business websites that need sharper copy, cleaner layout, and a better first impression.",
    icon: <BriefcaseBusiness size={32} />,
    features: ["Copy cleanup", "Visual polish", "Content restructuring"],
  },
];

export const ModernServices = () => {
  return (
    <div className="min-h-screen bg-white px-6 pb-32 text-black">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24">
          <span className="mb-8 block text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
            Service Areas
          </span>
          <motion.h1
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 text-6xl font-black leading-none tracking-tighter md:text-8xl"
          >
            WHAT I
            <span className="block text-gray-200">BUILD</span>
          </motion.h1>
          <p className="max-w-3xl text-xl font-light leading-relaxed tracking-tight text-gray-500">
            Most of the current portfolio sits across{" "}
            <span className="font-semibold text-black">
              {portfolioGroupCounts.landingPages} landing pages
            </span>
            ,{" "}
            <span className="font-semibold text-black">
              {portfolioGroupCounts.dashboard} dashboard
            </span>
            , and{" "}
            <span className="font-semibold text-black">
              {portfolioGroupCounts.projects} product builds
            </span>
            . That mix shapes how I approach new client work and personal
            experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              className="group flex h-full flex-col justify-between rounded-[40px] border border-black/[0.05] bg-gray-50/70 p-10 transition-all duration-500 hover:bg-black hover:text-white"
            >
              <div>
                <div className="mb-8 w-fit rounded-2xl bg-white p-4 text-black shadow-sm transition-colors duration-500 group-hover:bg-white/10 group-hover:text-white">
                  {service.icon}
                </div>

                <h2 className="mb-5 text-3xl font-black tracking-tight">
                  {service.title}
                </h2>

                <p className="mb-10 text-lg font-light leading-relaxed text-gray-500 transition-colors duration-500 group-hover:text-gray-300">
                  {service.description}
                </p>

                <div className="grid gap-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.28em]"
                    >
                      <div className="h-px w-4 bg-current" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="relative mt-24 overflow-hidden rounded-[48px] bg-black p-12 text-white md:p-20">
          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-gray-400">
                Current Snapshot
              </p>
              <h3 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
                {portfolioCounts.current} live works.
                <span className="block text-gray-500">
                  {portfolioCounts.upcoming} more on the way.
                </span>
              </h3>
              <p className="mt-6 text-lg font-light leading-relaxed text-gray-400">
                If you need a landing page, a dashboard, or a web product that
                looks clean and reads clearly, this portfolio is already moving
                in that direction.
              </p>
            </div>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex w-fit items-center gap-3 rounded-2xl bg-white px-8 py-4 text-xs font-black uppercase tracking-[0.3em] text-black transition-all hover:bg-gray-100"
            >
              Start a Project
              <ArrowRight size={16} />
            </motion.a>
          </div>
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[180px]" />
        </div>
      </div>
    </div>
  );
};
