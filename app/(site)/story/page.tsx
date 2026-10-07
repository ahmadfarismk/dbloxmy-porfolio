import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { PageHero } from "@/components/sections/page-hero";
import { Timeline } from "@/components/sections/timeline";
import { milestones } from "@/content/timeline";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "From a September 2024 starting point to World Expo Osaka and beyond — the D'Blox journey, milestone by milestone.",
};

export default function StoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="From First Commit to"
        highlight="World Stage"
        description="Every studio has a timeline. Ours moves fast — scroll through the milestones that made D'Blox."
      />

      {/* Scroll hint */}
      <div aria-hidden className="flex justify-center pb-16">
        <ChevronDown className="size-6 animate-bounce text-muted-foreground motion-reduce:animate-none" />
      </div>

      <section className="pb-24 md:pb-32">
        <div className="container-site max-w-5xl">
          <Timeline milestones={milestones} />
        </div>
      </section>

      {/* Story continues CTA */}
      <section className="pb-24 md:pb-32">
        <div className="container-site">
          <FadeIn>
            <div className="border-gradient mx-auto max-w-2xl rounded-3xl px-6 py-14 text-center">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                The story continues<span className="text-gradient">…</span>
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                The next milestone could be your project. Let&rsquo;s write it
                together.
              </p>
              <div className="mt-8 flex justify-center">
                <MagneticButton>
                  <Button asChild size="lg">
                    <Link href="/contact">
                      Start your chapter
                      <ArrowRight aria-hidden />
                    </Link>
                  </Button>
                </MagneticButton>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
