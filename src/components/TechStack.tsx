import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";
import Image from "next/image";

interface ReviewItem {
  name: string;
  category: string;
  description: string;
  logo: string;
}

const reviews: ReviewItem[] = [
  {
    name: "React",
    category: "Frontend",
    description: "A JavaScript library for building user interfaces with component-based architecture.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    category: "Frontend",
    description: "React framework that enables server-side rendering and static site generation.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    category: "Language",
    description: "JavaScript with syntax for types, enhancing code quality and understandability.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine for server-side applications.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    category: "Backend",
    description: "Fast, unopinionated, minimalist web framework for Node.js applications.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    category: "Database",
    description: "NoSQL database that uses JSON-like documents with optional schemas.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    description: "Powerful, open source object-relational database system with strong reputation.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "GraphQL",
    category: "API",
    description: "Query language for APIs and runtime for executing those queries with existing data.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
  {
    name: "Redux",
    category: "State Management",
    description: "Predictable state container for JavaScript apps with centralized store.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Utility-first CSS framework for rapidly building custom user interfaces.",
    logo: "/tailwindcss-original.svg",
  },
  {
    name: "Docker",
    category: "DevOps",
    description: "Platform for developing, shipping, and running applications in containers.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "AWS",
    category: "Cloud",
    description: "Comprehensive cloud computing platform with over 200 services.",
    logo: "/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Firebase",
    category: "Backend as a Service",
    description: "Platform for developing web and mobile applications without server-side programming.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Jest",
    category: "Testing",
    description: "JavaScript testing framework with a focus on simplicity and support for large apps.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  },
  {
    name: "Git",
    category: "Version Control",
    description: "Distributed version control system for tracking changes in source code.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Python",
    category: "Language",
    description: "Interpreted high-level programming language known for its readability and versatility.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Django",
    category: "Backend",
    description: "High-level Python web framework that encourages rapid development.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  {
    name: "Redis",
    category: "Database",
    description: "In-memory data structure store used as database, cache, and message broker.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  {
    name: "Kubernetes",
    category: "DevOps",
    description: "Open-source system for automating deployment and scaling of containerized applications.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  },
  {
    name: "Webpack",
    category: "Build Tool",
    description: "Static module bundler for modern JavaScript applications.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

interface ReviewCardProps {
  img: string;
  name: string;
  category: string;
  body?: string;
}

const ReviewCard = ({
  img,
  name,
  category,
  body,
}: ReviewCardProps) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-black bg-white hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width={32} height={32} alt={`${name} logo`} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{category}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard
            key={review.name}
            img={review.logo}
            name={review.name}
            category={review.category}
          // body={review.description} 
          />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard
            key={review.name}
            img={review.logo}
            name={review.name}
            category={review.category}
          // body={review.description} 
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}