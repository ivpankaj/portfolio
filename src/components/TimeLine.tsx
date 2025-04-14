import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div> 
          <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-6">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="space-y-4">
            <div className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
              <h4 className="font-medium text-neutral-900 dark:text-white mb-2">Key Achievements</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span className="text-neutral-700 dark:text-neutral-300">Launched Aceternity UI with 50+ components</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span className="text-neutral-700 dark:text-neutral-300">Released Pro version with advanced animations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span className="text-neutral-700 dark:text-neutral-300">Built complete documentation site with examples</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span className="text-neutral-700 dark:text-neutral-300">Gained 5,000+ users within first month</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-6">
            Started developing core UI components and design system fundamentals
          </p>
          <div className="space-y-4">
            <div className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
              <h4 className="font-medium text-neutral-900 dark:text-white mb-2">Development Highlights</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-neutral-700 dark:text-neutral-300">Created foundational design tokens and style system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-neutral-700 dark:text-neutral-300">Built first 10 core UI components</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-neutral-700 dark:text-neutral-300">Established responsive design patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-neutral-700 dark:text-neutral-300">Created animation library with Framer Motion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-4">
            Latest updates and releases for Aceternity
          </p>
          <div className="space-y-4">
            <div className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
              <h4 className="font-medium text-neutral-900 dark:text-white mb-2">Recent Updates</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-emerald-500 mr-2">✅</span>
                  <div>
                    <p className="text-neutral-800 dark:text-neutral-200 font-medium">Card Grid Component</p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">Fully responsive with animation options</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-emerald-500 mr-2">✅</span>
                  <div>
                    <p className="text-neutral-800 dark:text-neutral-200 font-medium">Startup Template</p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">Complete template with all essential sections</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-emerald-500 mr-2">✅</span>
                  <div>
                    <p className="text-neutral-800 dark:text-neutral-200 font-medium">File Upload Component</p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">Drag & drop with progress indicator</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-emerald-500 mr-2">✅</span>
                  <div>
                    <p className="text-neutral-800 dark:text-neutral-200 font-medium">Timeline Component</p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">Interactive with scroll animations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-emerald-500 mr-2">✅</span>
                  <div>
                    <p className="text-neutral-800 dark:text-neutral-200 font-medium">Registration System</p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">With form validation and user management</p>
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