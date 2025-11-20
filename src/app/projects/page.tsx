import MainLayout from "@/components/MainLayout";
import ProjectsPage from "@/components/Projects";

export const metadata = {
  title: "Projects | Pankaj Verma (ivpankaj)",
  description:
    "Explore the projects built by Pankaj Verma (ivpankaj) — MERN Stack Developer and Software Engineer.",
  alternates: {
    canonical: "https://ivpankaz.web.app/projects",
  },
  openGraph: {
    title: "Projects | Pankaj Verma (ivpankaj)",
    description:
      "Browse the development projects created by Pankaj Verma — full stack applications, UI designs and tools.",
    url: "https://ivpankaz.web.app/projects",
    images: [
      {
        url: "/ivpankaj.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Pankaj Verma",
    description:
      "Projects created by Pankaj Verma — MERN stack developer & software engineer.",
    images: ["/ivpankaj.png"],
  },
};

export default function ProjectPage() {
  return (
    <>
      {/* JSON-LD for Person Projects */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Pankaj Verma",
            alternateName: "ivpankaj",
            url: "https://ivpankaz.web.app/projects",
            jobTitle: "Software Developer",
            sameAs: [
              "https://instagram.com/ivpankaj",
              "https://twitter.com/ivpankaj",
              "https://github.com/ivpankaj",
            ],
            image: "https://ivpankaz.web.app/ivpankaj.png",
          }),
        }}
      />

      <MainLayout>
        <ProjectsPage />
      </MainLayout>
    </>
  );
}
