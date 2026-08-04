"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { FadeInStagger, FadeInItem } from "@/components/motion/fade-in";
import { ProjectCard } from "@/components/sections/project-card";
import { ProjectDetail } from "@/components/sections/project-detail";
import type { Project } from "@/content/projects";

/** Grid of project cards plus the expandable detail overlay. */
export function ProjectsShowcase({ projects }: { projects: Project[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const openProject = projects.find((p) => p.slug === openSlug) ?? null;

  return (
    <>
      <FadeInStagger className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, i) => (
          <FadeInItem key={project.slug}>
            <ProjectCard
              project={project}
              index={i}
              onOpen={() => setOpenSlug(project.slug)}
            />
          </FadeInItem>
        ))}
      </FadeInStagger>

      <AnimatePresence>
        {openProject && (
          <ProjectDetail
            project={openProject}
            onClose={() => setOpenSlug(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
