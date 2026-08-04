import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { Spotlight } from "@/components/motion/spotlight";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-40 md:pb-32 md:pt-52">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_35%,transparent_75%)]" />
      <Spotlight className="-top-40 left-1/2 -translate-x-1/2" />
      <Spotlight
        className="-right-64 top-32"
        color="var(--brand-accent)"
        size={640}
        opacity={0.14}
      />

      <div className="container-site relative">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <Badge className="mb-6 gap-1.5 px-3.5 py-1.5 text-xs">
              <Sparkles className="size-3.5" aria-hidden />
              Full-service Roblox game studio
            </Badge>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
              Build Roblox Experiences{" "}
              <span className="text-gradient">Players Remember</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              From concept to LiveOps — we design, build, and scale Roblox
              games with the systems, monetization, and events that turn
              players into communities.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton>
                <Button asChild size="lg">
                  <Link href={siteConfig.cta.primary.href}>
                    {siteConfig.cta.primary.label}
                    <ArrowRight aria-hidden />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button asChild variant="outline" size="lg">
                  <Link href={siteConfig.cta.secondary.href}>
                    {siteConfig.cta.secondary.label}
                  </Link>
                </Button>
              </MagneticButton>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
