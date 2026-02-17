// src/app/we4you/page.tsx  (Next.js App Router)
// OR src/pages/we4you.tsx (Pages Router)
// Make sure you installed: npm install lucide-react
"use client"

import React, { JSX } from "react"
import {
  Users,
  ShieldCheck,
  Car,
  MapPin,
  MessageCircle,
  Database,
  Bell,
  Cpu,
  Server,
  GitBranch,
  Terminal,
} from "lucide-react"
import ProjectSummaryPage from "@/components/Taxi";
import MainLayout from "@/components/MainLayout";

const Feature: React.FC<{ title: string; desc: string; icon: React.ReactNode }> = ({
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

export default function Page(): JSX.Element {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white text-black antialiased mt-14">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Header */}
          <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">We4You — Taxi Booking Platform</h1>
              <p className="mt-2 text-sm text-black/70">
                End-to-end ride booking, assignment, and management system.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                className="px-3 py-1 border border-black rounded text-sm hover:bg-black hover:text-white transition"
                onClick={() => navigator.clipboard?.writeText("github.com/your-org/we4you")}
              >
                Copy repo
              </button>
              <span className="text-xs text-black/60">Last updated: Sept 18, 2025</span>
            </div>
          </header>

          {/* Taxi Booking Flow */}
          <section className="mt-12">
            <h2 className="text-xl font-semibold">🚖 Taxi Booking Flow</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Feature
                title="1. Authentication"
                desc="Secure login with JWT, role-based users (employees, drivers, admins, doctors)."
                icon={<ShieldCheck className="w-5 h-5" />}
              />
              <Feature
                title="2. Ride Request"
                desc="User books a taxi, enters pickup &amp; drop location."
                icon={<MapPin className="w-5 h-5" />}
              />
              <Feature
                title="3. Driver Assignment"
                desc="Nearest driver assigned via Redis GEO + ride persisted in MongoDB."
                icon={<Car className="w-5 h-5" />}
              />
              <Feature
                title="4. Real-time Tracking"
                desc="Driver location updated with MQTT + Socket.IO."
                icon={<Cpu className="w-5 h-5" />}
              />
              <Feature
                title="5. Notifications"
                desc="Firebase Cloud Messaging alerts users &amp; drivers of updates."
                icon={<Bell className="w-5 h-5" />}
              />
              <Feature
                title="6. Ride Management"
                desc="Driver dashboard shows active/upcoming/completed rides."
                icon={<Users className="w-5 h-5" />}
              />
            </div>
          </section>

          {/* Features */}
          <section className="mt-12">
            <h2 className="text-xl font-semibold">✨ Key Features</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Feature
                title="Chat System"
                desc="One-to-one chat with unread counts, last message tracking, stored in MongoDB."
                icon={<MessageCircle className="w-5 h-5" />}
              />
              <Feature
                title="CRM & Analytics"
                desc="Customer tracking, automated follow-ups, and sales insights."
                icon={<Database className="w-5 h-5" />}
              />
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mt-12">
            <h2 className="text-xl font-semibold">🛠 Tech Stack</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border border-black/10 rounded-lg p-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Server className="w-4 h-4" /> Backend
                </h4>
                <ul className="mt-2 text-sm text-black/70 space-y-1">
                  <li>FastAPI (Python)</li>
                  <li>MongoDB (bookings, messages)</li>
                  <li>Redis GEO (nearest driver)</li>
                </ul>
              </div>
              <div className="border border-black/10 rounded-lg p-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <GitBranch className="w-4 h-4" /> Real-time
                </h4>
                <ul className="mt-2 text-sm text-black/70 space-y-1">
                  <li>MQTT (driver telemetry)</li>
                  <li>Socket.IO (chat + live updates)</li>
                  <li>FCM (push notifications)</li>
                </ul>
              </div>
              <div className="border border-black/10 rounded-lg p-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> Frontend & Ops
                </h4>
                <ul className="mt-2 text-sm text-black/70 space-y-1">
                  <li>Next.js + TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Docker + Nginx</li>
                  <li>GitHub Actions (CI/CD)</li>
                </ul>
              </div>
            </div>
          </section>


        </div>
        <ProjectSummaryPage />
      </div>
    </MainLayout>
  )
}
