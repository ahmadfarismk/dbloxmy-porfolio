import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight, Hammer } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/sections/page-hero";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { ProjectsSkeleton } from "@/components/sections/skeletons";
import { getProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies from Roblox experiences D'Blox has designed, built, and operated — with visits, retention, and revenue numbers.",
};

async function AllProjects() {
  const projects = await getProjects();
  return <ProjectsShowcase projects={projects} />;
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Work That"
        highlight="Performs"
        description="Every case study below shipped, scaled, and earned. Real screenshots and final numbers drop in as they're cleared for publication."
      />

      <section className="pb-24 md:pb-32">
        <div className="container-site">
          <Suspense fallback={<ProjectsSkeleton />}>
            <AllProjects />
          </Suspense>

          {/* In-production teaser */}
          <FadeIn>
            <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-dashed border-border bg-card/50 p-8 text-center sm:flex-row sm:text-left">
              <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Hammer className="size-6" aria-hidden />
                </div>
                <div>
                  <h2 className="font-display text-lg font-semibold">
                    More in production
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    New titles and brand collaborations are being built right
                    now — including our upcoming education project.
                  </p>
                </div>
              </div>
              <Button asChild variant="outline" className="shrink-0">
                <Link href="/story">
                  See what&rsquo;s next
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
