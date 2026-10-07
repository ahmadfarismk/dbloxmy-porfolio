import type { Metadata } from "next";

import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/sections/page-hero";
import { GalleryGrid } from "@/components/sections/gallery-grid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Screenshots, event photos, UI design, and behind-the-scenes moments from the D'Blox studio.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A Visual Journey Through"
        highlight="Our Creations"
        description="Game worlds, expo floors, UI craft, and the build nights in between."
      />

      <section className="pb-24 md:pb-32">
        <div className="container-site">
          <FadeIn>
            <GalleryGrid />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
