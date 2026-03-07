"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  groupedPortfolioItems,
  portfolioCounts,
  portfolioGroupCounts,
} from "@/data/portfolio-data";

const sectionDescriptions = {
  "landing-pages":
    "Brand-first pages built to introduce businesses clearly and convert visits into conversations.",
  dashboard:
    "Internal product work focused on visibility, control, and faster day-to-day actions.",
  projects:
    "Broader web products and business builds spanning AI, education, commerce, tools, and services.",
  upcoming:
    "Next wave concepts currently lined up for design and development.",
} as const;

export const ModernProjects = () => {
  return (
    <div className="min-h-screen bg-white px-6 pb-32 text-black">
      <div className="mx-auto max-w-7xl">
        <header className="mb-24">
          <span className="mb-6 block text-xs font-black uppercase tracking-[0.4em] text-gray-400">
            Portfolio Archive
          </span>
          <h1 className="text-6xl font-black tracking-tighter md:text-8xl">
            12 CURRENT,
            <span className="block text-gray-200">5 UPCOMING</span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-500">
            This archive is organized by the type of work shipped so far:
            landing pages, dashboard work, product builds, and upcoming ideas
            still in the pipeline.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { label: "Landing Pages", value: portfolioGroupCounts.landingPages },
              { label: "Dashboard", value: portfolioGroupCounts.dashboard },
              { label: "Projects", value: portfolioGroupCounts.projects },
              { label: "Upcoming", value: portfolioCounts.upcoming },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[24px] border border-black/5 bg-gray-50 px-5 py-6"
              >
                <p className="text-3xl font-black tracking-tight">{item.value}</p>
                <p className="mt-2 text-[11px] font-black uppercase tracking-[0.25em] text-gray-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </header>

        <div className="space-y-24">
          {groupedPortfolioItems.map((section, sectionIndex) => (
            <section key={section.group}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.05 }}
                className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.35em] text-gray-400">
                    Section {sectionIndex + 1}
                  </p>
                  <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                    {section.label}
                  </h2>
                </div>
                <p className="max-w-2xl text-sm leading-7 text-gray-500 md:text-right">
                  {sectionDescriptions[section.group]}
                </p>
              </motion.div>

              <div
                className={
                  section.group === "upcoming"
                    ? "grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
                    : "grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
                }
              >
                {section.items.map((item, itemIndex) => {
                  const upcoming = item.status === "upcoming";

                  return (
                    <motion.article
                      key={item.slug}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: itemIndex * 0.05 }}
                      className={`overflow-hidden rounded-[30px] border ${
                        upcoming
                          ? "border-dashed border-black/10 bg-gray-50"
                          : "border-black/5 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.05)]"
                      }`}
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          className={`object-cover ${
                            upcoming ? "grayscale" : ""
                          }`}
                        />
                        <div
                          className={`absolute inset-0 ${
                            upcoming
                              ? "bg-white/50"
                              : "bg-gradient-to-t from-black/50 via-black/10 to-transparent"
                          }`}
                        />
                        <div className="absolute left-5 top-5">
                          <span
                            className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] ${
                              upcoming
                                ? "border border-black/10 bg-white text-gray-500"
                                : "bg-white/15 text-white"
                            }`}
                          >
                            {upcoming ? "Coming Soon" : "Current Work"}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-2xl font-black tracking-tight">
                          {item.title}
                        </h3>
                        <p className="mt-4 text-sm leading-7 text-gray-600">
                          {item.summary}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] ${
                                upcoming
                                  ? "bg-white text-gray-500"
                                  : "bg-gray-100 text-gray-600"
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};
