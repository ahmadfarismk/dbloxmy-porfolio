import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { PageHero } from "@/components/sections/page-hero";
import { services } from "@/content/services";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Roblox game development, brand and media virtualization, educational games, workshops, and expo activations — built and shipped by D'Blox.",
};

const panelGradients = [
  "from-violet-600/25 to-fuchsia-500/10",
  "from-cyan-500/20 to-blue-600/10",
  "from-emerald-500/20 to-teal-500/10",
  "from-rose-500/20 to-amber-400/10",
  "from-indigo-500/25 to-violet-500/10",
  "from-sky-500/20 to-cyan-400/10",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="What We Actually"
        highlight="Build"
        description="Five disciplines, one team. Engage us for a single piece or the entire production."
      />

      <section className="pb-24 md:pb-32">
        <div className="container-site space-y-16 md:space-y-24">
          {services.map((service, index) => {
            const flipped = index % 2 === 1;
            return (
              <FadeIn key={service.title} direction={flipped ? "left" : "right"}>
                <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
                  {/* Text */}
                  <div className={cn(flipped && "md:order-2")}>
                    <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/15 text-violet-300">
                      <service.icon className="size-6" aria-hidden />
                    </div>
                    <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="mt-6 space-y-2.5">
                      {service.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-center gap-2.5 text-sm text-secondary-foreground"
                        >
                          <Check
                            className="size-4 shrink-0 text-success"
                            aria-hidden
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual panel */}
                  <div className={cn(flipped && "md:order-1")}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                      {service.image ? (
                        <>
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                        </>
                      ) : (
                        <div
                          className={cn(
                            "flex h-full w-full items-center justify-center bg-gradient-to-br",
                            panelGradients[index % panelGradients.length]
                          )}
                        >
                          <service.icon
                            className="size-20 text-white/25"
                            aria-hidden
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-secondary/20 py-20">
        <div className="container-site text-center">
          <FadeIn>
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Not sure what you need yet?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground md:text-base">
              Tell us the goal — we&rsquo;ll recommend the scope.
            </p>
            <div className="mt-8 flex justify-center">
              <MagneticButton>
                <Button asChild size="lg">
                  <Link href={siteConfig.cta.primary.href}>
                    {siteConfig.cta.primary.label}
                    <ArrowRight aria-hidden />
                  </Link>
                </Button>
              </MagneticButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
