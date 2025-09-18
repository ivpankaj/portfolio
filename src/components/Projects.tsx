"use client"

import React, { JSX } from "react"
import Link from "next/link"
import { Car, BookOpen, FileText, Rocket } from "lucide-react"

type Project = {
  title: string
  description: string
  icon: React.ReactNode
  link?: string
  upcoming?: boolean
}

const projects: Project[] = [
  {
    title: "Taxi Booking App (We4You)",
    description: "Complete ride-hailing platform with real-time tracking.",
    icon: <Car className="w-7 h-7" />,
    link: "/taxi-booking-app",
  },
  {
    title: "Learning Management System",
    description: "Course management, quizzes, video lectures & certification.",
    icon: <BookOpen className="w-7 h-7" />,
    link: "/learning-management-system",
  },
  {
    title: "CookMyPapers",
    description: "Academic writing & research assistance platform.",
    icon: <FileText className="w-7 h-7" />,
    link: "/cookmypapers",
  },
]

const upcomingProjects: Project[] = [
  {
    title: "AI Content Generator",
    description: "Smart AI tools for essays, blogs & reports.",
    icon: <Rocket className="w-7 h-7" />,
    upcoming: true,
  },
  {
    title: "Employee Management System",
    description: "Seamless workforce allocation & shift scheduling.",
    icon: <Rocket className="w-7 h-7" />,
    upcoming: true,
  },
]

export default function ProjectsPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-12 mt-14">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight">My Projects</h1>
          <p className="mt-3 text-base text-black/70">
            A showcase of my built & upcoming applications.
          </p>
        </header>

        {/* Active Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Link key={idx} href={project.link || "#"}>
              <div className="border border-black/10 rounded-lg p-6 hover:shadow-md transition cursor-pointer">
                <div className="flex items-center gap-3">
                  {project.icon}
                  <h2 className="font-semibold text-xl">{project.title}</h2>
                </div>
                <p className="mt-3 text-sm text-black/70">{project.description}</p>
                <span className="mt-4 inline-block text-sm font-medium underline">
                  View Project →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Upcoming Projects */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-center">🚀 Upcoming Projects</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingProjects.map((project, idx) => (
              <div
                key={idx}
                className="border border-black/10 rounded-lg p-6 bg-black/5 text-center"
              >
                <div className="flex justify-center mb-3">{project.icon}</div>
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="mt-2 text-sm text-black/70">{project.description}</p>
                <span className="mt-4 inline-block text-xs font-medium text-black/50">
                  Coming Soon
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 text-center text-xs text-black/60">
          © {new Date().getFullYear()} — Projects Showcase
        </footer>
      </div>
    </div>
  )
}
