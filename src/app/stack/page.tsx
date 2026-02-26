import MainLayout from "@/components/MainLayout";
import { BentoSkills } from "@/components/BentoSkills";
import { TechMarquee } from "@/components/TechMarquee";

export const metadata = {
    title: "Tech Stack | Pankaj Verma (ivpankaj)",
    description: "The modern tech stack used by Pankaj Verma to build high-performance applications.",
    keywords: ["Pankaj Verma Tech Stack", "MERN Stack Developer", "Next.js Tools", "React Skills", "Typescript Node.js MongoDB"],
    alternates: {
        canonical: "https://ivpankaj.online/stack",
    },
    openGraph: {
        title: "Tech Stack | Pankaj Verma (ivpankaj)",
        description: "The modern tech stack used by Pankaj Verma to build high-performance applications.",
        url: "https://ivpankaj.online/stack",
        images: [{ url: "/ivpankaj.png", width: 1200, height: 630, alt: "Pankaj Verma - Tech Stack" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Tech Stack | Pankaj Verma",
        description: "The modern tech stack used by Pankaj Verma to build high-performance applications.",
        images: ["/ivpankaj.png"],
    },
};

export default function StackPage() {
    return (
        <MainLayout>
            <div className="bg-white">
                <BentoSkills />
                <TechMarquee />
            </div>
        </MainLayout>
    );
}
