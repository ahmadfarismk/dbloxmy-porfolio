import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { WhatWeBuild } from "@/components/sections/what-we-build";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <WhatWeBuild />
      <FeaturedProjects />
      <Process />
      <Testimonials />
      <FinalCta />
    </>
  );
}
