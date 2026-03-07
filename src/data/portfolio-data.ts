export type PortfolioGroup = "landing-pages" | "dashboard" | "projects" | "upcoming";
export type PortfolioStatus = "current" | "upcoming";

export type PortfolioItem = {
  title: string;
  slug: string;
  group: PortfolioGroup;
  status: PortfolioStatus;
  summary: string;
  image: string;
  tags: string[];
  featured: boolean;
};

export const portfolioGroupLabels: Record<PortfolioGroup, string> = {
  "landing-pages": "Landing Pages",
  dashboard: "Dashboard",
  projects: "Projects",
  upcoming: "Upcoming",
};

export const portfolioGroupOrder: PortfolioGroup[] = [
  "landing-pages",
  "dashboard",
  "projects",
  "upcoming",
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: "CookMyTech",
    slug: "cookmytech",
    group: "landing-pages",
    status: "current",
    summary:
      "A modern landing page for a tech-first brand with clear positioning, clean sections, and strong conversion flow.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1974&auto=format&fit=crop",
    tags: ["Landing Page", "Brand Site", "Responsive"],
    featured: true,
  },
  {
    title: "ivpankaj",
    slug: "ivpankaj",
    group: "landing-pages",
    status: "current",
    summary:
      "A personal portfolio experience designed to present work, services, and contact pathways in a polished way.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1970&auto=format&fit=crop",
    tags: ["Portfolio", "Personal Brand", "UI"],
    featured: false,
  },
  {
    title: "Roshan Enterprises",
    slug: "roshan-enterprises",
    group: "landing-pages",
    status: "current",
    summary:
      "A business landing page focused on company credibility, service presentation, and direct inquiry generation.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    tags: ["Business Site", "Lead Generation", "Corporate"],
    featured: false,
  },
  {
    title: "For All Needs",
    slug: "for-all-needs",
    group: "dashboard",
    status: "current",
    summary:
      "An operational dashboard that brings requests, tracking, and daily actions into one simple management view.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["Dashboard", "Operations", "Admin Panel"],
    featured: true,
  },
  {
    title: "LookMyWebsite",
    slug: "lookmywebsite",
    group: "projects",
    status: "current",
    summary:
      "A web product built around website discovery, presentation, and browsing-first interaction patterns.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop",
    tags: ["Web Product", "Discovery", "Frontend"],
    featured: false,
  },
  {
    title: "CookMy AI",
    slug: "cookmy-ai",
    group: "projects",
    status: "current",
    summary:
      "An AI-oriented interface concept that organizes prompts, output flows, and smart assistance into one product layer.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    tags: ["AI", "Product UI", "Automation"],
    featured: true,
  },
  {
    title: "Dhaniyaa",
    slug: "dhaniyaa",
    group: "projects",
    status: "current",
    summary:
      "A branded product experience shaped around browsing, storytelling, and smooth conversion-focused navigation.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop",
    tags: ["Brand Product", "Commerce", "Responsive"],
    featured: false,
  },
  {
    title: "HotClass",
    slug: "hotclass",
    group: "projects",
    status: "current",
    summary:
      "An education-focused product interface with class visibility, structured access, and simple student-facing flows.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1974&auto=format&fit=crop",
    tags: ["EdTech", "Classes", "Web App"],
    featured: false,
  },
  {
    title: "Passport",
    slug: "passport",
    group: "projects",
    status: "current",
    summary:
      "A service-oriented web flow for document guidance, appointment steps, and process clarity around passport work.",
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1974&auto=format&fit=crop",
    tags: ["Service Flow", "Documents", "User Journey"],
    featured: false,
  },
  {
    title: "Kartncherry",
    slug: "kartncherry",
    group: "projects",
    status: "current",
    summary:
      "A commerce-style build centered on product browsing, offer visibility, and a lightweight purchase journey.",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
    tags: ["Commerce", "Catalog", "Storefront"],
    featured: false,
  },
  {
    title: "CookMyTools",
    slug: "cookmytools",
    group: "projects",
    status: "current",
    summary:
      "A collection-driven product interface for utility tools, quick actions, and repeat-use workflows.",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1974&auto=format&fit=crop",
    tags: ["Tools", "Utilities", "Productivity"],
    featured: false,
  },
  {
    title: "CookMyPapers",
    slug: "cookmypapers",
    group: "projects",
    status: "current",
    summary:
      "A writing and service product presence built around trust, clear offerings, and strong call-to-action sections.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop",
    tags: ["Content", "Service Product", "Branding"],
    featured: true,
  },
  {
    title: "Job Portal",
    slug: "job-portal",
    group: "upcoming",
    status: "upcoming",
    summary:
      "A planned hiring platform for job discovery, candidate profiles, and application workflows.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    tags: ["Hiring", "Portal", "Upcoming"],
    featured: false,
  },
  {
    title: "VS Code Extension",
    slug: "vs-code-extension",
    group: "upcoming",
    status: "upcoming",
    summary:
      "A planned developer extension focused on editor productivity and faster working loops.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2070&auto=format&fit=crop",
    tags: ["Developer Tools", "Extension", "Upcoming"],
    featured: false,
  },
  {
    title: "Browser Extension",
    slug: "browser-extension",
    group: "upcoming",
    status: "upcoming",
    summary:
      "A browser-first utility concept designed to bring quick actions directly into the browsing flow.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop",
    tags: ["Extension", "Utility", "Upcoming"],
    featured: false,
  },
  {
    title: "Desktop App",
    slug: "desktop-app",
    group: "upcoming",
    status: "upcoming",
    summary:
      "A desktop product planned for focused workflows, faster access, and a dedicated working environment.",
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=2070&auto=format&fit=crop",
    tags: ["Desktop", "Product", "Upcoming"],
    featured: false,
  },
  {
    title: "Mobile App",
    slug: "mobile-app",
    group: "upcoming",
    status: "upcoming",
    summary:
      "A mobile-first product in progress for on-the-go access, core actions, and polished small-screen UX.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1974&auto=format&fit=crop",
    tags: ["Mobile", "App", "Upcoming"],
    featured: false,
  },
];

export const currentPortfolioItems = portfolioItems.filter(
  (item) => item.status === "current",
);

export const upcomingPortfolioItems = portfolioItems.filter(
  (item) => item.status === "upcoming",
);

export const featuredPortfolioItems = currentPortfolioItems.filter(
  (item) => item.featured,
);

export const portfolioCounts = {
  current: currentPortfolioItems.length,
  upcoming: upcomingPortfolioItems.length,
  total: portfolioItems.length,
};

export const portfolioGroupCounts = {
  landingPages: portfolioItems.filter((item) => item.group === "landing-pages").length,
  dashboard: portfolioItems.filter((item) => item.group === "dashboard").length,
  projects: portfolioItems.filter((item) => item.group === "projects").length,
  upcoming: upcomingPortfolioItems.length,
};

export const groupedPortfolioItems = portfolioGroupOrder.map((group) => ({
  group,
  label: portfolioGroupLabels[group],
  items: portfolioItems.filter((item) => item.group === group),
}));
