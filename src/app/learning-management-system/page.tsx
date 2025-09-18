// src/app/lms/page.tsx
"use client"

import React, { JSX } from "react"
import { BookOpen, Video, FileText, Award, Cpu, Server } from "lucide-react"
import LMSSummaryPage from "@/components/Lms";
import MainLayout from "@/components/MainLayout";

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mt-12">
    <h2 className="text-xl font-semibold">{title}</h2>
    <div className="mt-6 space-y-4">{children}</div>
  </section>
)

export default function LMSOverviewPage(): JSX.Element {
  return (
    <MainLayout>
    <div className="min-h-screen bg-white text-black antialiased mt-14">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Learning Management System (LMS)</h1>
            <p className="mt-2 text-sm text-black/70">
              Centralized platform for online learning, course management, and student engagement.
            </p>
          </div>
          <span className="text-xs text-black/60">Updated: Sept 18, 2025</span>
        </header>

        {/* Project Overview */}
        <Section title="📖 Project Overview">
          <p className="text-sm text-black/70 leading-relaxed">
            Our <strong>LMS</strong> enables institutions, instructors, and learners to collaborate
            seamlessly. It supports course creation, video lectures, quizzes, assessments, progress
            tracking, and certification in a scalable environment.
          </p>
        </Section>

        {/* Core Features */}
        <Section title="🧩 Core Features">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-black/10 rounded-lg p-4">
              <h4 className="flex items-center gap-2 font-semibold">
                <BookOpen className="w-4 h-4" /> Course Management
              </h4>
              <p className="mt-2 text-sm text-black/70">
                Create, update, and publish structured courses with modules and lessons.
              </p>
            </div>
            <div className="border border-black/10 rounded-lg p-4">
              <h4 className="flex items-center gap-2 font-semibold">
                <Video className="w-4 h-4" /> Video Lectures
              </h4>
              <p className="mt-2 text-sm text-black/70">
                Stream lectures with adaptive video quality and cloud storage.
              </p>
            </div>
            <div className="border border-black/10 rounded-lg p-4">
              <h4 className="flex items-center gap-2 font-semibold">
                <FileText className="w-4 h-4" /> Quizzes & Assignments
              </h4>
              <p className="mt-2 text-sm text-black/70">
                Interactive quizzes and assignments with automated evaluation.
              </p>
            </div>
            <div className="border border-black/10 rounded-lg p-4">
              <h4 className="flex items-center gap-2 font-semibold">
                <Award className="w-4 h-4" /> Certifications
              </h4>
              <p className="mt-2 text-sm text-black/70">
                Award certificates upon course completion, backed by verification.
              </p>
            </div>
          </div>
        </Section>

        {/* Tech Stack */}
        <Section title="🛠 Tech Stack">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-black/10 rounded-lg p-4">
              <h4 className="flex items-center gap-2 font-semibold">
                <Server className="w-4 h-4" /> Backend
              </h4>
              <ul className="mt-2 text-sm text-black/70 space-y-1">
                <li>FastAPI / Django REST — API backend</li>
                <li>PostgreSQL — relational data store</li>
                <li>Redis — caching & session management</li>
              </ul>
            </div>
            <div className="border border-black/10 rounded-lg p-4">
              <h4 className="flex items-center gap-2 font-semibold">
                <Cpu className="w-4 h-4" /> Frontend & DevOps
              </h4>
              <ul className="mt-2 text-sm text-black/70 space-y-1">
                <li>Next.js + TypeScript — frontend UI</li>
                <li>Tailwind CSS — styling</li>
                <li>Docker & CI/CD pipelines</li>
              </ul>
            </div>
          </div>
        </Section>
      </div>
      <LMSSummaryPage/>
    </div>
    </MainLayout>
  )
}
