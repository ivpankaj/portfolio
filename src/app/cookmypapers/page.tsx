// src/app/cookmypapers/page.tsx
"use client"

import React, { JSX } from "react"
import {
  Layout,
  PenTool,
  Code,
  MonitorSpeaker,
  Users,
  Award,

} from "lucide-react"
import CookMyPapersSummary from "@/components/cmp";
import MainLayout from "@/components/MainLayout";

const FeatureCard: React.FC<{ title: string; desc: string; icon: React.ReactNode }> = ({
  title,
  desc,
  icon,
}) => (
  <div className="border border-black/10 rounded-lg p-4 bg-white flex gap-3">
    <div className="p-2 border border-black/10 rounded-lg">{icon}</div>
    <div>
      <h4 className="text-sm font-semibold text-black">{title}</h4>
      <p className="mt-1 text-[13px] text-black/70">{desc}</p>
    </div>
  </div>
)

export default function CookMyPapersOverview(): JSX.Element {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white text-black antialiased mt-14">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Header */}
          <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">CookMyPapers — Digital Creative Services</h1>
              <p className="mt-2 text-sm text-black/70">
                Premium design, website building, resume creation &amp; full-stack development services.
              </p>
            </div>
            <span className="text-xs text-black/60">Location: Noida, India</span>
          </header>

          {/* What they do */}
          <section className="mt-12">
            <h2 className="text-xl font-semibold">💼 What They Offer</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                title="Website Building"
                desc="Custom websites using modern responsive design &amp; tech tools."
                icon={<Layout className="w-5 h-5" />}
              />
              <FeatureCard
                title="Resume Crafting"
                desc="Professionally designed resumes, optimized for impact."
                icon={<PenTool className="w-5 h-5" />}
              />
              <FeatureCard
                title="Full-Stack Dev"
                desc="Back-end + front-end solutions to build functional web apps."
                icon={<Code className="w-5 h-5" />}
              />
              <FeatureCard
                title="Design Systems"
                desc="Consistent UI/UX & branding across products."
                icon={<MonitorSpeaker className="w-5 h-5" />}
              />
              <FeatureCard
                title="Client Support &amp; Consulting"
                desc="Work closely with clients to meet requirements &amp; vision."
                icon={<Users className="w-5 h-5" />}
              />
              <FeatureCard
                title="Quality &amp; User Satisfaction"
                desc="High satisfaction rates, clean design, premium feel."
                icon={<Award className="w-5 h-5" />}
              />
            </div>
          </section>

          {/* Metrics */}
          <section className="mt-12">
            <h2 className="text-xl font-semibold">📊 Key Metrics</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-black/80">
              <div className="border border-black/10 rounded-lg p-4 bg-white text-center">
                <h3 className="text-2xl font-bold">0+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="border border-black/10 rounded-lg p-4 bg-white text-center">
                <h3 className="text-2xl font-bold">0+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="border border-black/10 rounded-lg p-4 bg-white text-center">
                <h3 className="text-2xl font-bold">0%</h3>
                <p>Satisfaction Rate</p>
              </div>
              <div className="border border-black/10 rounded-lg p-4 bg-white text-center">
                <h3 className="text-2xl font-bold">0+</h3>
                <p>Resumes Made</p>
              </div>
            </div>
          </section>

          {/* Contact & Location */}
          <section className="mt-12">
            <h2 className="text-xl font-semibold">📍 Contact &amp; Info</h2>
            <div className="mt-4 text-sm text-black/70 space-y-2">
              <p>Email: cookmypapers@outlook.com</p>
              <p>Phone: +91 9911064724</p>
              <p>Address: Noida, India</p>
            </div>
          </section>

        </div>
        <CookMyPapersSummary />
      </div>
    </MainLayout>
  )
}
