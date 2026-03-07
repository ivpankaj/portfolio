"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  FolderKanban,
  Globe2,
  PanelsTopLeft,
  Rocket,
} from "lucide-react";
import {
  groupedPortfolioItems,
  portfolioCounts,
  type PortfolioGroup,
} from "@/data/portfolio-data";

const groupMeta: Record<
  PortfolioGroup,
  {
    description: string;
    icon: React.ReactNode;
    accent: string;
    badge: string;
  }
> = {
  "landing-pages": {
    description:
      "Brand-facing pages built to introduce products, services, and businesses with clarity.",
    icon: <Globe2 size={18} />,
    accent: "bg-[#fff4e8] text-[#ad5a00]",
    badge: "Launch-ready",
  },
  dashboard: {
    description:
      "Admin and internal workflow surfaces focused on visibility, action-taking, and clean control.",
    icon: <PanelsTopLeft size={18} />,
    accent: "bg-[#eef5ff] text-[#2754c5]",
    badge: "Operational",
  },
  projects: {
    description:
      "Broader product-style builds spanning AI, education, commerce, tools, and service experiences.",
    icon: <FolderKanban size={18} />,
    accent: "bg-[#eef8f1] text-[#1e7a43]",
    badge: "Current builds",
  },
  upcoming: {
    description:
      "Ideas queued for the next round of building across platforms and developer tooling.",
    icon: <Rocket size={18} />,
    accent: "bg-[#f5efff] text-[#6b34c9]",
    badge: "In pipeline",
  },
};

export const PortfolioCollections = () => {
  return (
    <section className="bg-[#f6f3ee] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="mb-4 block text-xs font-black uppercase tracking-[0.35em] text-gray-400">
              Portfolio Breakdown
            </span>
            <h2 className="text-5xl font-black tracking-tight text-black md:text-7xl">
              WHAT IS
              <span className="block text-gray-300">INSIDE HERE</span>
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-gray-500">
            Instead of a stack showcase, this section maps the actual portfolio:
            the kind of work shipped, the categories it sits in, and the names
            already inside the archive.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[0.95fr,1.55fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-[40px] bg-black p-10 text-white shadow-[0_30px_90px_rgba(0,0,0,0.14)]"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-white/45">
              Archive Snapshot
            </span>
            <h3 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-5xl">
              {portfolioCounts.current} current works.
              <span className="mt-2 block text-white/35">
                {portfolioCounts.upcoming} upcoming ideas.
              </span>
            </h3>

            <p className="mt-8 max-w-md text-base leading-8 text-white/65">
              The homepage now points directly to your portfolio categories
              instead of a generic capability block. It gives visitors a quick
              understanding of what you have already built.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { label: "Sections", value: groupedPortfolioItems.length },
                { label: "Current", value: portfolioCounts.current },
                { label: "Upcoming", value: portfolioCounts.upcoming },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[24px] border border-white/10 bg-white/5 px-4 py-5"
                >
                  <p className="text-3xl font-black tracking-tight">
                    {item.value}
                  </p>
                  <p className="mt-2 text-[10px] font-black uppercase tracking-[0.25em] text-white/45">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/projects"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[11px] font-black uppercase tracking-[0.28em] text-black transition-colors hover:bg-gray-100"
            >
              Open Full Archive
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {groupedPortfolioItems.map((section, index) => {
              const meta = groupMeta[section.group];
              const previewItems = section.items.slice(
                0,
                section.group === "projects" ? 4 : 3,
              );
              const extraItems = section.items.length - previewItems.length;
              const coverImage = section.items[0]?.image;

              return (
                <motion.article
                  key={section.group}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.07 }}
                  className="overflow-hidden rounded-[34px] border border-black/5 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.05)]"
                >
                  <div className="relative h-44 overflow-hidden">
                    {coverImage ? (
                      <Image
                        src={coverImage}
                        alt={section.label}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                      <div className="flex items-center justify-between gap-4">
                        <span
                          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] ${meta.accent}`}
                        >
                          {meta.icon}
                          {meta.badge}
                        </span>
                        <span className="text-sm font-black tracking-tight text-white/75">
                          {section.items.length} items
                        </span>
                      </div>
                      <h3 className="mt-4 text-3xl font-black tracking-tight">
                        {section.label}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-sm leading-7 text-gray-600">
                      {meta.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {previewItems.map((item) => (
                        <span
                          key={item.slug}
                          className="rounded-full bg-gray-100 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-gray-600"
                        >
                          {item.title}
                        </span>
                      ))}
                      {extraItems > 0 ? (
                        <span className="rounded-full border border-dashed border-black/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-gray-400">
                          +{extraItems} more
                        </span>
                      ) : null}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
