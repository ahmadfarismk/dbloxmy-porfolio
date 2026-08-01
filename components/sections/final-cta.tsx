import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { Spotlight } from "@/components/motion/spotlight";
import { siteConfig } from "@/content/site";

export function FinalCta() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-site">
        <FadeIn>
          <div className="border-gradient relative overflow-hidden rounded-3xl px-6 py-20 text-center md:px-12 md:py-28">
            <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
            <Spotlight
              className="-top-64 left-1/2 -translate-x-1/2"
              size={800}
              opacity={0.35}
            />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Ready to Build Your Next{" "}
                <span className="text-gradient">Roblox Hit?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                Tell us about your game, brand, or idea. We&rsquo;ll come back
                within 48 hours with an honest take on scope, timeline, and
                budget.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <MagneticButton>
                  <Button asChild size="lg">
                    <a href={`mailto:${siteConfig.email}`}>
                      <CalendarCheck aria-hidden />
                      Book a Discovery Call
                    </a>
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#projects">
                      See our work first
                      <ArrowRight aria-hidden />
                    </Link>
                  </Button>
                </MagneticButton>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
