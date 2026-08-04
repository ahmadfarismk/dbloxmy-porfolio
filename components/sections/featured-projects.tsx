import { Suspense } from "react";

import { SectionHeading } from "@/components/sections/section-heading";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { ProjectsSkeleton } from "@/components/sections/skeletons";
import { getProjects } from "@/lib/data";

async function ProjectsGrid() {
  const projects = await getProjects();
  return <ProjectsShowcase projects={projects} />;
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
