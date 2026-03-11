"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  featuredPortfolioItems,
  portfolioCounts,
  portfolioGroupLabels,
} from "@/data/portfolio-data";

export const WorkHighlight = () => {
  return (
    <section className="bg-white px-6 py-16 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="mb-5 block text-xs font-black uppercase tracking-[0.35em] text-gray-400">
              Featured Work
            </span>
            <h2 className="text-5xl font-black tracking-tight text-black md:text-7xl">
              REAL BUILDS,
              <span className="block text-gray-200">LIVE PORTFOLIO</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
              A focused look at shipped work across landing pages, dashboards,
              and product-style builds. The full archive currently includes{" "}
              <span className="font-semibold text-black">
                {portfolioCounts.current} current
              </span>{" "}
              projects with{" "}
              <span className="font-semibold text-black">
                {portfolioCounts.upcoming} upcoming
              </span>{" "}
              builds in progress.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex w-fit items-center gap-3 border-b-2 border-black pb-2 text-xs font-black uppercase tracking-[0.3em] text-black"
          >
            Explore Full Archive
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {featuredPortfolioItems.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.05)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                    {portfolioGroupLabels[project.group]}
                  </span>
                  <h3 className="text-3xl font-black tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm leading-7 text-gray-600">
                  {project.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
