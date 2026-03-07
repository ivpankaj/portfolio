import Link from "next/link";
import { Activity, FolderOpen, Github, Linkedin, Twitter, User } from "lucide-react";
import { portfolioCounts, portfolioGroupCounts } from "@/data/portfolio-data";

export function Footer() {
  return (
    <footer className="relative w-full border-t border-black bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-8 flex items-center gap-3">
              <span className="text-2xl font-black uppercase tracking-tighter text-black">
                Pankaj
              </span>
            </Link>

            <p className="mb-10 max-w-xl text-lg font-light leading-relaxed text-gray-500">
              A portfolio centered on landing pages, dashboards, and product
              work. The current archive shows shipped client and personal builds
              with a second wave of ideas already lined up.
            </p>

            <div className="flex gap-4">
              {[
                { Icon: Github, href: "https://github.com/ivpankaj" },
                { Icon: Linkedin, href: "https://linkedin.com/in/ivpankaj" },
                { Icon: Twitter, href: "https://x.com/ivpankaj" },
              ].map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  className="flex items-center justify-center rounded-2xl bg-black p-4 text-white transition-all hover:bg-gray-800"
                >
                  <social.Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-10 w-fit border-b border-black pb-1 text-[11px] font-black uppercase tracking-[0.3em] text-black">
              Explore
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Projects", href: "/projects", Icon: FolderOpen },
                { name: "About", href: "/about", Icon: User },
                { name: "Services", href: "/services", Icon: Activity },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-4 text-sm font-black uppercase tracking-widest text-black/40 transition-colors hover:text-black"
                  >
                    <item.Icon
                      size={16}
                      className="transition-transform group-hover:scale-110"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-10 w-fit border-b border-black pb-1 text-[11px] font-black uppercase tracking-[0.3em] text-black">
              Snapshot
            </h3>

            <div className="rounded-[28px] border-2 border-black bg-black p-6 text-white">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-gray-400">
                Portfolio Status
              </p>
              <div className="mt-5 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-black">{portfolioCounts.current}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                    Current
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-black">{portfolioCounts.upcoming}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                    Upcoming
                  </p>
                </div>
              </div>
              <div className="mt-5 space-y-2 text-[10px] font-black uppercase tracking-[0.18em] text-gray-400">
                <p>{portfolioGroupCounts.landingPages} landing pages</p>
                <p>{portfolioGroupCounts.dashboard} dashboard</p>
                <p>{portfolioGroupCounts.projects} project builds</p>
              </div>
            </div>

            <p className="mt-6 text-center text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
              Copyright {new Date().getFullYear()} Pankaj Verma
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
