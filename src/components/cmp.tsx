
import React, { JSX } from "react"
import {
  Layout,
  PenTool,
  Code,

} from "lucide-react"

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mt-12">
    <h2 className="text-xl font-semibold">{title}</h2>
    <div className="mt-6 space-y-4">{children}</div>
  </section>
)

export default function CookMyPapersSummary(): JSX.Element {
  return (
    <div className="min-h-screen bg-white text-black antialiased">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              CookMyPapers — Detailed Project Summary
            </h1>
            <p className="mt-2 text-sm text-black/70">
              In-depth look at services, workflow, tools, and value proposition.
            </p>
          </div>
          <span className="text-xs text-black/60">Updated: {new Date().getFullYear()}</span>
        </header>

        {/* Project Purpose */}
        <Section title="📖 Purpose & Vision">
          <p className="text-sm text-black/70 leading-relaxed">
            CookMyPapers aims to empower individuals &amp; businesses by offering polished digital products — websites, resumes, full-stack web solutions — that balance aesthetics with functionality. The mission is to deliver fast, reliable, professional creative work, backed by modern technologies &amp; tools. Established in Noida, serving clients who want standout digital presence.
          </p>
        </Section>

        {/* Workflow / Service Process */}
        <Section title="🔧 Service Process / How It Works">
          <ol className="space-y-4 list-decimal list-inside text-sm text-black/80">
            <li>
              <strong>Client Inquiry:</strong> Client reaches out via contact form or email with project details.
            </li>
            <li>
              <strong>Requirement Gathering:</strong> Discuss project scope (website/resume/design), timelines, deliverables.
            </li>
            <li>
              <strong>Proposal & Quote:</strong> Send cost estimate, mockups/styles, platform/tech stack options.
            </li>
            <li>
              <strong>Design Phase:</strong> Create wireframes or design drafts (UI/UX). Client feedback loops.
            </li>
            <li>
              <strong>Development Phase:</strong> Build website or application, or craft resume template/design. Ensure responsive layout &amp; cross-device support.
            </li>
            <li>
              <strong>Testing &amp; Revisions:</strong> Review visuals, functionality, fix bugs or polish design across devices &amp; browsers.
            </li>
            <li>
              <strong>Delivery &amp; Deployment:</strong> Handover final files; if website, host or deploy. Provide source files or editable versions.
            </li>
            <li>
              <strong>Support &amp; Maintenance:</strong> Optional maintenance, updates, or revisions after delivery.
            </li>
          </ol>
        </Section>

        {/* Services / Modules */}
        <Section title="🧩 Modules & Key Services">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-black/10 rounded-lg p-4">
              <h4 className="flex items-center gap-2 font-semibold">
                <Layout className="w-4 h-4" /> Web Design & Development
              </h4>
              <p className="mt-2 text-sm text-black/70">
                Creation of custom websites (static or dynamic), responsive layouts, modern UI/UX design.
              </p>
            </div>
            <div className="border border-black/10 rounded-lg p-4">
              <h4 className="flex items-center gap-2 font-semibold">
                <PenTool className="w-4 h-4" /> Resume & Branding Design
              </h4>
              <p className="mt-2 text-sm text-black/70">
                Professionally styled resumes, templates, branding materials (logos, visuals).
              </p>
            </div>
            <div className="border border-black/10 rounded-lg p-4">
              <h4 className="flex items-center gap-2 font-semibold">
                <Code className="w-4 h-4" /> Full-Stack Solutions
              </h4>
              <p className="mt-2 text-sm text-black/70">
                Backend + frontend, integrations, deployment — for clients needing web apps or functional sites.
              </p>
            </div>
          </div>
        </Section>

        {/* Tools & Tech Stack (guessed/implied) */}
        <Section title="🛠 Tools & Tech Stack">
          <p className="text-sm text-black/70 leading-relaxed">
            While CookMyPapers doesn&apos;t publicly list every tool, based on the offerings, one can infer the stack includes:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-black/70 list-disc list-inside">
            <li>Modern front-end frameworks (React, Next.js or similar) for building sites and resumes.</li>
            <li>CSS frameworks & design tooling for responsive design / prototyping.</li>
            <li>Backend services or static site hosting (Vercel or similar) for deployment.</li>
            <li>Graphics tools for design (e.g. Figma/Adobe or equivalents) for branding &amp; mockups.</li>
            <li>Email/contact infrastructure for client communication (forms, inbox). </li>
            <li>Metrics &amp; analytics for tracking satisfaction, clients, project portfolio.</li>
          </ul>
        </Section>

        {/* Strengths, Differentiators */}
        <Section title="⭐ Strengths & Differentiators">
          <ul className="space-y-3 list-disc list-inside text-sm text-black/80">
            <li><strong>Design-First Approach:</strong> Emphasis on modern, premium design &amp; attention to detail.</li>
            <li><strong>All-in-One Service:</strong> Website + design + resumes + dev, so clients get bundled solutions.</li>
            <li><strong>Quick Turnaround:</strong> Likely fast delivery given the product-based service style.</li>
            <li><strong>Client Satisfaction:</strong> Show metrics to build trust (though some numbers are placeholders “0+”).</li>
            <li><strong>Transparent Contact &amp; Location Info:</strong> Visible address, email, phone — helps trust.</li>
          </ul>
        </Section>

        {/* Areas for Improvement / Observations */}
        <Section title="⚠️ Observations & Improvement Opportunities">
          <ul className="space-y-3 list-disc list-inside text-sm text-black/80">
            <li>Update metrics to reflect real numbers (rather than “0+”) for credibility.</li>
            <li>Provide portfolio samples or case studies to show real work quality.</li>
            <li>Clarify turnaround times and pricing for various services.</li>
            <li>Enhance site speed &amp; SEO like client-side reviews, testimonials, visual consistency.</li>
          </ul>
        </Section>

        <footer className="mt-16 text-center text-xs text-black/50">
          © {new Date().getFullYear()} CookMyPapers — Summary View
        </footer>
      </div>
    </div>
  )
}
