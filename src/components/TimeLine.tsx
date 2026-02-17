import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "April 2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-6">
            Started working as Full Stack Developer at <span className="text-green-400">Fourbrick Technology (Noida)</span>
          </p>
          <div className="space-y-4">
            <div className="dark:bg-black p-4 rounded-lg border border-black dark:border-white">
              <h4 className="font-medium text-neutral-900 dark:text-white mb-2">Key Contributions</h4>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-emerald-500 mr-2">✓</span>
                  <span className="text-neutral-700 dark:text-neutral-300">Developed scalable microservices using Node.js, Kafka, and Redis</span>
                </li>
                <li className="flex items-start"><span className="text-emerald-500 mr-2">✓</span>
                  <span className="text-neutral-700 dark:text-neutral-300">Integrated real-time features using Socket.IO in the job portal</span>
                </li>
                <li className="flex items-start"><span className="text-emerald-500 mr-2">✓</span>
                  <span className="text-neutral-700 dark:text-neutral-300">Containerized services using Docker and deployed via Kubernetes</span>
                </li>
                <li className="flex items-start"><span className="text-emerald-500 mr-2">✓</span>
                  <span className="text-neutral-700 dark:text-neutral-300">Led frontend development using Next.js 15 and TailwindCSS</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "January 2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-6">
            Joined <span className="text-green-400">Mployee.me (Noida/Remote)</span> as a Full Stack Developer
          </p>
          <div className="space-y-4">
            <div className="dark:bg-black p-4 rounded-lg border border-black dark:border-white">
              <h4 className="font-medium text-neutral-900 dark:text-white mb-2">Development Highlights</h4>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>
                  <span className="text-neutral-700 dark:text-neutral-300">Built a performance-optimized UI library from scratch</span>
                </li>
                <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>
                  <span className="text-neutral-700 dark:text-neutral-300">Set up CI/CD pipelines using GitHub Actions and Vercel</span>
                </li>
                <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>
                  <span className="text-neutral-700 dark:text-neutral-300">Migrated legacy components to reusable modern design system</span>
                </li>
                <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>
                  <span className="text-neutral-700 dark:text-neutral-300">Implemented dynamic routing and protected routes in Next.js</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "July 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-4">
            My first company, joined as Full Stack Developer at <span className="text-green-400">Dosso21 Services Pvt Ltd (Noida)</span>
          </p>
          <div className="space-y-4">
            <div className="dark:bg-black p-4 rounded-lg border border-black dark:border-white">
              <h4 className="font-medium text-neutral-900 dark:text-white mb-2">Major Projects</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-emerald-500 mr-2">✅</span>
                  <div>
                    <p className="text-neutral-800 dark:text-neutral-200 font-medium">Company Website Builder</p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">Developed a CMS to manage client websites dynamically</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-emerald-500 mr-2">✅</span>
                  <div>
                    <p className="text-neutral-800 dark:text-neutral-200 font-medium">Dynamic Form System</p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">Created reusable form components with validation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-emerald-500 mr-2">✅</span>
                  <div>
                    <p className="text-neutral-800 dark:text-neutral-200 font-medium">Authentication &amp; Role Management</p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">JWT-based auth with admin/user dashboard separation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-emerald-500 mr-2">✅</span>
                  <div>
                    <p className="text-neutral-800 dark:text-neutral-200 font-medium">PDF &amp; File Upload Integration</p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">Drag &amp; drop file upload with Cloudinary support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
