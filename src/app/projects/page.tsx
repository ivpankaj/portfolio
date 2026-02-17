import MainLayout from "@/components/MainLayout";
import ProjectsPage from "@/components/Projects";

export const metadata = {
  title: "Projects | Pankaj Verma (ivpankaj)",
  description:
    "Explore the projects built by Pankaj Verma (ivpankaj) — MERN Stack Developer and Software Engineer.",
  alternates: {
    canonical: "https://ivpankaj.online/projects",
  },
};

export default function ProjectPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Pankaj Verma",
            alternateName: "ivpankaj",
            url: "https://ivpankaj.online/projects",
            jobTitle: "Software Developer",
            sameAs: [
              "https://instagram.com/ivpankaj",
              "https://twitter.com/ivpankaj",
              "https://github.com/ivpankaj",
            ],
          }),
        }}
      />

      <MainLayout>
        <ProjectsPage />
      </MainLayout>
    </>
  );
}
