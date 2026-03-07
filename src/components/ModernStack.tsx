"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Blocks, CheckCheck, MonitorCog, Rocket } from "lucide-react";
import { portfolioCounts } from "@/data/portfolio-data";
import { stackVisuals, type StackVisualKey } from "@/data/stack-visuals";
import {
  stackCategories,
  stackHighlights,
  stackSetupGroups,
  stackUseCases,
  stackWorkflow,
  type StackReference,
  type StackCategoryId,
} from "@/data/stack-data";

const iconMap: Record<StackCategoryId, React.ReactNode> = {
  frontend: renderVisual("react", 18),
  backend: renderVisual("nodejs", 18),
  data: renderVisual("postgresql", 18),
  design: renderVisual("figma", 18),
  tools: renderVisual("vscode", 18),
};

const accentMap: Record<StackCategoryId, string> = {
  frontend: "bg-[#eef5ff] text-[#295bc9]",
  backend: "bg-[#eef8f1] text-[#197447]",
  data: "bg-[#fff3e6] text-[#b96515]",
  design: "bg-[#fff1f1] text-[#b93b59]",
  tools: "bg-[#f4efff] text-[#6f38d0]",
};

function renderVisual(tech: StackVisualKey, size = 18) {
  const visual = stackVisuals[tech];

  if (visual.image) {
    return (
      <Image
        src={visual.image}
        alt={visual.label}
        width={size}
        height={size}
        className="h-auto w-auto"
      />
    );
  }

  if (!visual.Icon) {
    return null;
  }

  const Icon = visual.Icon;
  return <Icon size={size} className={visual.iconClassName} />;
}

function ReferencePill({
  reference,
  compact = false,
}: {
  reference: StackReference;
  compact?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-black/5 bg-white ${
        compact ? "px-3 py-1.5" : "px-4 py-2"
      }`}
    >
      <div className="flex items-center gap-1.5">
        {reference.visuals.map((visual) => (
          <span
            key={`${reference.label}-${visual}`}
            className={`inline-flex h-7 w-7 items-center justify-center rounded-full ${stackVisuals[visual].chipClassName}`}
          >
            {renderVisual(visual, 15)}
          </span>
        ))}
      </div>
      <span
        className={`font-semibold text-black ${
          compact ? "text-xs tracking-[0.08em]" : "text-sm"
        }`}
      >
        {reference.label}
      </span>
    </div>
  );
}

export const ModernStack = () => {
  return (
    <div className="min-h-screen bg-white px-6 pb-32 text-black">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 grid gap-10 xl:grid-cols-[1.08fr,0.92fr]">
          <div>
            <span className="mb-8 block text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
              Tech Stack
            </span>
            <motion.h1
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-6xl font-black leading-none tracking-tighter md:text-8xl"
            >
              TOOLS THAT
              <span className="block text-gray-200">SHIP THE WORK</span>
            </motion.h1>
            <p className="mt-8 max-w-3xl text-xl font-light leading-relaxed tracking-tight text-gray-500">
              The portfolio may span landing pages, dashboards, and product
              interfaces, but the stack behind that work stays practical:
              component-first UI, typed structure, clean styling, lightweight
              integrations, and a delivery flow built to launch without noise.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {stackHighlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[26px] border border-black/5 bg-gray-50 px-4 py-3"
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-400">
                    {item.label}
                  </p>
                  <div className="mt-2">
                    <ReferencePill reference={item.value} compact />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="overflow-hidden rounded-[40px] border border-black/5 bg-[#f6f3ee] p-8 md:p-10"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-black p-3 text-white">
                <MonitorCog size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-gray-400">
                  Current Setup
                </p>
                <h2 className="text-3xl font-black tracking-tight">
                  Built for fast iteration
                </h2>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {stackSetupGroups.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[26px] border border-black/5 bg-white p-5"
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-gray-400">
                    {item.label}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.items.map((reference) => (
                      <ReferencePill
                        key={`${item.label}-${reference.label}`}
                        reference={reference}
                        compact
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[26px] bg-black px-5 py-6 text-white">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-white/45">
                Why it stays this way
              </p>
              <p className="mt-3 text-lg leading-8 text-white/80">
                {portfolioCounts.current} shipped works is enough proof that a
                focused stack beats a bloated one. The goal is readable code,
                clear UI, and easier updates when the content changes.
              </p>
            </div>
          </motion.section>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {stackCategories.map((category, index) => (
            <motion.article
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="rounded-[36px] border border-black/5 bg-gray-50/80 p-8 md:p-10"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-xl">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] ${accentMap[category.id]}`}
                  >
                    {iconMap[category.id]}
                    {category.eyebrow}
                  </span>
                  <h2 className="mt-5 text-3xl font-black tracking-tight">
                    {category.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-3">
                {category.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-col gap-3 rounded-[24px] border border-black/5 bg-white px-5 py-4 sm:flex-row sm:items-start sm:justify-between"
                  >
                    <div className="max-w-xl">
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-1.5">
                          {tool.visuals.map((visual) => (
                            <span
                              key={`${tool.name}-${visual}`}
                              className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${stackVisuals[visual].chipClassName}`}
                            >
                              {renderVisual(visual, 18)}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm font-black uppercase tracking-[0.18em] text-black">
                          {tool.name}
                        </p>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        {tool.note}
                      </p>
                    </div>
                    <span
                      className={`w-fit rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] ${
                        tool.emphasis === "primary"
                          ? "bg-black text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {tool.emphasis === "primary" ? "Core" : "Support"}
                    </span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-24 grid gap-8 xl:grid-cols-[0.9fr,1.1fr]">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-[40px] bg-black p-8 text-white md:p-10"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/10 p-3 text-white">
                <Rocket size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-white/45">
                  Workflow
                </p>
                <h2 className="text-3xl font-black tracking-tight">
                  How the stack gets used
                </h2>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {stackWorkflow.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-[26px] border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-black text-black">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-black tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/70">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-[40px] border border-black/5 bg-white p-8 shadow-[0_24px_60px_rgba(0,0,0,0.05)] md:p-10"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-gray-100 p-3 text-black">
                <Blocks size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-gray-400">
                  Best Fit
                </p>
                <h2 className="text-3xl font-black tracking-tight">
                  What this stack is optimized for
                </h2>
              </div>
            </div>

            <div className="mt-8 grid gap-4">
              {stackUseCases.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-black/5 bg-gray-50 px-6 py-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="max-w-xl">
                      <h3 className="text-2xl font-black tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-gray-600">
                        {item.summary}
                      </p>
                    </div>
                    <div className="rounded-full bg-black p-2 text-white">
                      <CheckCheck size={16} />
                    </div>
                  </div>

                  <div className="mt-5 rounded-[22px] border border-black/5 bg-white px-4 py-3">
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-400">
                      Typical Mix
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.stack.map((reference) => (
                        <ReferencePill
                          key={`${item.title}-${reference.label}`}
                          reference={reference}
                          compact
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};
