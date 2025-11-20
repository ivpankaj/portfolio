

import React, { JSX } from "react"
import {
  BookOpen,

  Video,
  FileText,
  Award,

  Server,
  GitBranch,
  Terminal,

} from "lucide-react"

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mt-12">
    <h2 className="text-xl font-semibold">{title}</h2>
    <div className="mt-6 space-y-4">{children}</div>
  </section>
)

export default function LMSSummaryPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-white text-black antialiased">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Learning Management System — Detailed Summary
            </h1>
            <p className="mt-2 text-sm text-black/70">
              Comprehensive breakdown of modules, workflows, and technology behind the LMS.
            </p>
          </div>
          <span className="text-xs text-black/60">Updated: Sept 18, 2025</span>
        </header>

        {/* Project Overview */}
        <Section title="📖 Project Overview">
          <p className="text-sm text-black/70 leading-relaxed">
            The LMS is built to serve students, instructors, and administrators by providing a
            unified system for course delivery, assessments, and performance analytics. It ensures
            scalability for thousands of learners and integrates modern technologies for smooth
            content delivery and real-time engagement.
          </p>
        </Section>

        {/* Learning Flow */}
        <Section title="📚 Complete Learning Flow">
          <ol className="space-y-4 list-decimal list-inside text-sm text-black/80">
            <li><strong>User Authentication:</strong> Students and instructors log in with JWT/OAuth.</li>
            <li><strong>Course Enrollment:</strong> Students browse catalog, enroll, and get access.</li>
            <li><strong>Content Delivery:</strong> Video lectures, PDFs, and notes available with streaming support.</li>
            <li><strong>Interactive Learning:</strong> Quizzes, assignments, and peer discussion forums.</li>
            <li><strong>Progress Tracking:</strong> Dashboards track completion %, scores, and deadlines.</li>
            <li><strong>Certification:</strong> Auto-generate certificates after passing thresholds.</li>
            <li><strong>Analytics & Reports:</strong> Instructors monitor student performance and optimize courses.</li>
          </ol>
        </Section>

        {/* Core Modules */}
        <Section title="🧩 Core Modules">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-black/10 rounded-lg p-4">
              <h4 className="flex items-center gap-2 font-semibold">
                <BookOpen className="w-4 h-4" /> Course Builder
              </h4>
              <p className="mt-2 text-sm text-black/70">
                Instructors create structured courses with modules, lessons, and resources.
              </p>
            </div>
            <div className="border border-black/10 rounded-lg p-4">
              <h4 className="flex items-center gap-2 font-semibold">
                <Video className="w-4 h-4" /> Multimedia Learning
              </h4>
              <p className="mt-2 text-sm text-black/70">
                Videos, notes, and presentations available anytime with secure cloud hosting.
              </p>
            </div>
            <div className="border border-black/10 rounded-lg p-4">
              <h4 className="flex items-center gap-2 font-semibold">
                <FileText className="w-4 h-4" /> Assessment Engine
              </h4>
              <p className="mt-2 text-sm text-black/70">
                Quizzes, assignments, and grading system with auto and manual evaluation.
              </p>
            </div>
            <div className="border border-black/10 rounded-lg p-4">
              <h4 className="flex items-center gap-2 font-semibold">
                <Award className="w-4 h-4" /> Certification
              </h4>
              <p className="mt-2 text-sm text-black/70">
                Auto-issued certificates with unique IDs and verification.
              </p>
            </div>
          </div>
        </Section>

        {/* Tech Stack */}
        <Section title="🛠 Tech Stack">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-black/10 rounded-lg p-4">
              <h4 className="flex items-center gap-2 font-semibold"><Server className="w-4 h-4" /> Backend</h4>
              <ul className="mt-2 text-sm text-black/70 space-y-1">
                <li>Django REST / FastAPI — API backend</li>
                <li>PostgreSQL — relational DB for courses & users</li>
                <li>Redis — caching & background tasks</li>
              </ul>
            </div>
            <div className="border border-black/10 rounded-lg p-4">
              <h4 className="flex items-center gap-2 font-semibold"><GitBranch className="w-4 h-4" /> Real-time Layer</h4>
              <ul className="mt-2 text-sm text-black/70 space-y-1">
                <li>WebSockets — live classes, chat</li>
                <li>Firebase — notifications</li>
                <li>Celery — async tasks</li>
              </ul>
            </div>
            <div className="border border-black/10 rounded-lg p-4">
              <h4 className="flex items-center gap-2 font-semibold"><Terminal className="w-4 h-4" /> Frontend & DevOps</h4>
              <ul className="mt-2 text-sm text-black/70 space-y-1">
                <li>Next.js + TypeScript — UI</li>
                <li>Tailwind CSS — styling</li>
                <li>Docker, GitHub Actions — CI/CD</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Challenges & Solutions */}
        <Section title="⚡ Challenges & Solutions">
          <ul className="space-y-3 list-disc list-inside text-sm text-black/80">
            <li><strong>Scalable Video Delivery:</strong> Solved with adaptive bitrate streaming & CDN caching.</li>
            <li><strong>Concurrent Users:</strong> Load balancing + horizontal scaling handled spikes in usage.</li>
            <li><strong>Assessment Performance:</strong> Optimized DB indexes for large quiz/assignment datasets.</li>
            <li><strong>Engagement:</strong> Added forums, leaderboards, and gamification.</li>
          </ul>
        </Section>

        <footer className="mt-16 text-center text-xs text-black/50">
          © {new Date().getFullYear()} LMS — Detailed Project Summary
        </footer>
      </div>
    </div>
  )
}
