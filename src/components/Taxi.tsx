// src/app/we4you/summary/page.tsx   (Next.js App Router)
// OR src/pages/we4you-summary.tsx   (Pages Router)
// Install icons if not already: npm install lucide-react


import React, { JSX } from "react"
import {

  ShieldCheck,
  Car,

  MessageCircle,
  Database,
  Bell,
  Cpu,
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

export default function ProjectSummaryPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-white text-black antialiased">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">We4You — Complete Project Summary</h1>
            <p className="mt-2 text-sm text-black/70">
              End-to-end ride booking and employee transport platform — detailed breakdown of modules,
              flow, and technology.
            </p>
          </div>
          <span className="text-xs text-black/60">Updated: Sept 18, 2025</span>
        </header>

        {/* Project Overview */}
        <Section title="📖 Project Overview">
          <p className="text-sm text-black/70 leading-relaxed">
            <strong>We4You</strong> is a comprehensive taxi booking and employee transport solution
            built to manage real-time ride allocation, driver tracking, chat, and sales/CRM features.
            The platform was designed with scalability and real-world constraints in mind, such as
            nearest-driver assignment, low-latency communication, and reliable notifications. The
            system supports multiple roles (employees, drivers, admins, doctors) with role-based
            access and workflow segregation.
          </p>
        </Section>

        {/* Booking Flow */}
        <Section title="🚖 Complete Taxi Booking Flow">
          <ol className="space-y-4 list-decimal list-inside text-sm text-black/80">
            <li>
              <strong>User Authentication:</strong> Employees, doctors, and admins log in using JWT.
              Tokens are validated on each API request.
            </li>
            <li>
              <strong>Ride Request:</strong> A user provides pickup and drop locations. The system
              validates constraints (timing, availability, employee eligibility).
            </li>
            <li>
              <strong>Driver Discovery & Assignment:</strong> Redis GEO queries find the nearest
              available driver within a configurable radius. If no driver is found, fallback
              expansion occurs. Ride details are saved in MongoDB.
            </li>
            <li>
              <strong>Ride Confirmation:</strong> Notifications sent via Firebase Cloud Messaging to
              driver and user. Ride status transitions to assigned.
            </li>
            <li>
              <strong>Real-time Tracking:</strong> Driver coordinates stream in via MQTT, relayed
              through Socket.IO to the passenger&apos;s client app.
            </li>
            <li>
              <strong>In-ride Communication:</strong> Secure one-to-one chat between user and driver
              (stored in MongoDB with unread counts).
            </li>
            <li>
              <strong>Ride Completion:</strong> Driver marks ride as completed. Status updated in
              MongoDB and analytics recorded for reporting.
            </li>
          </ol>
        </Section>

        {/* Modules */}
        <Section title="🧩 Core Modules">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-black/10 rounded-lg p-4">
              <h4 className="font-semibold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Authentication & Roles
              </h4>
              <p className="mt-2 text-sm text-black/70">
                Secure login flow with JWT. Supports drivers, employees, admins, and doctors with
                role-based authorization. Includes refresh token rotation.
              </p>
            </div>
            <div className="border border-black/10 rounded-lg p-4">
              <h4 className="font-semibold flex items-center gap-2">
                <Car className="w-4 h-4" /> Ride Booking & Assignment
              </h4>
              <p className="mt-2 text-sm text-black/70">
                Booking APIs allow users to request rides. Redis GEO used for efficient nearest
                driver search. MongoDB persists booking and ride lifecycle states.
              </p>
            </div>
            <div className="border border-black/10 rounded-lg p-4">
              <h4 className="font-semibold flex items-center gap-2">
                <Cpu className="w-4 h-4" /> Real-time Tracking
              </h4>
              <p className="mt-2 text-sm text-black/70">
                Drivers publish coordinates to MQTT broker. FastAPI + Socket.IO broadcasts live
                updates to passengers. Ensures sub-second location refresh.
              </p>
            </div>
            <div className="border border-black/10 rounded-lg p-4">
              <h4 className="font-semibold flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> Chat System
              </h4>
              <p className="mt-2 text-sm text-black/70">
                Secure user-driver messaging. Messages stored with sender/receiver IDs, timestamps,
                last message per room, and unread counters.
              </p>
            </div>
            <div className="border border-black/10 rounded-lg p-4">
              <h4 className="font-semibold flex items-center gap-2">
                <Bell className="w-4 h-4" /> Notification Service
              </h4>
              <p className="mt-2 text-sm text-black/70">
                Firebase Cloud Messaging integration. Dynamic function to send push notifications to
                targeted drivers or employees based on ride events.
              </p>
            </div>
            <div className="border border-black/10 rounded-lg p-4">
              <h4 className="font-semibold flex items-center gap-2">
                <Database className="w-4 h-4" /> CRM & Analytics
              </h4>
              <p className="mt-2 text-sm text-black/70">
                Customer tracking, automated follow-ups, sales performance insights. Optimized DB
                queries reduced latency by 45% for CRM workflows.
              </p>
            </div>
          </div>
        </Section>

        {/* Tech Stack */}
        <Section title="🛠 Detailed Tech Stack">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-black/10 rounded-lg p-4">
              <h4 className="font-semibold flex items-center gap-2">
                <Server className="w-4 h-4" /> Backend
              </h4>
              <ul className="mt-2 text-sm text-black/70 space-y-1">
                <li>FastAPI (Python) — API backend</li>
                <li>MongoDB — bookings, messages, ride states</li>
                <li>Redis (GEO) — nearest driver search, caching</li>
                <li>Nginx + Docker — containerized deployment</li>
              </ul>
            </div>
            <div className="border border-black/10 rounded-lg p-4">
              <h4 className="font-semibold flex items-center gap-2">
                <GitBranch className="w-4 h-4" /> Real-time Layer
              </h4>
              <ul className="mt-2 text-sm text-black/70 space-y-1">
                <li>MQTT — driver telemetry</li>
                <li>Socket.IO (ASGI) — chat &amp; live ride updates</li>
                <li>Firebase Cloud Messaging — notifications</li>
              </ul>
            </div>
            <div className="border border-black/10 rounded-lg p-4">
              <h4 className="font-semibold flex items-center gap-2">
                <Terminal className="w-4 h-4" /> Frontend & DevOps
              </h4>
              <ul className="mt-2 text-sm text-black/70 space-y-1">
                <li>Next.js + TypeScript — frontend UI</li>
                <li>Tailwind CSS — utility-first styling</li>
                <li>GitHub Actions — CI/CD pipeline</li>
                <li>Docker Compose — local orchestration</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Challenges & Solutions */}
        <Section title="⚡ Challenges & Solutions">
          <ul className="space-y-3 list-disc list-inside text-sm text-black/80">
            <li>
              <strong>Nearest Driver Search:</strong> Solved with Redis GEO queries and radius
              expansion fallback for high availability.
            </li>
            <li>
              <strong>Real-time Communication:</strong> Combined MQTT (lightweight driver telemetry)
              with Socket.IO (chat + updates).
            </li>
            <li>
              <strong>Chat Query Performance:</strong> Implemented compound indexes + pagination in
              MongoDB for efficient message retrieval.
            </li>
            <li>
              <strong>CRM Scalability:</strong> Refactored queries and caching, improving latency by
              45% and retrieval speeds by 35%.
            </li>
          </ul>
        </Section>

        {/* Footer */}
        <footer className="mt-16 text-center text-xs text-black/50">
          © {new Date().getFullYear()} We4You — Detailed Project Summary
        </footer>
      </div>
    </div>
  )
}
