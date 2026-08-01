import { Suspense } from "react";

import { FadeInStagger, FadeInItem } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/sections/section-heading";
import { ProjectCard } from "@/components/sections/project-card";
import { ProjectsSkeleton } from "@/components/sections/skeletons";
import { getProjects } from "@/lib/data";

async function ProjectsGrid() {
  const projects = await getProjects();

  return (
    <FadeInStagger className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <FadeInItem key={project.slug}>
          <ProjectCard project={project} />
        </FadeInItem>
      ))}
    </FadeInStagger>
  );
}

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-y border-border/60 bg-secondary/20 py-24 md:py-32"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow="Featured projects"
          title="Games that grew, retained & earned"
          description="Case studies from experiences we've designed, built, and operated — with the numbers to prove it."
        />
        <Suspense fallback={<ProjectsSkeleton />}>
          <ProjectsGrid />
        </Suspense>
      </div>
    </section>
  );
}
