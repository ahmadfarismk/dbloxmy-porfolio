import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeInStagger, FadeInItem } from "@/components/motion/fade-in";
import { CardLift } from "@/components/motion/card-lift";
import { SectionHeading } from "@/components/sections/section-heading";
import { services } from "@/content/services";

export function WhatWeBuild() {
  return (
    <section id="services" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="What we build"
          title="Every layer of a hit Roblox game"
          description="One team covering gameplay, economy, events, and infrastructure — so you don't have to stitch together freelancers."
        />

        <FadeInStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <FadeInItem key={service.title}>
              <CardLift className="h-full">
                <Card className="group h-full transition-colors duration-300 hover:border-primary/40">
                  <CardContent className="flex h-full flex-col p-6 pt-6">
                    <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-primary/15 text-violet-300 transition-colors duration-300 group-hover:bg-primary/25 group-hover:text-violet-200">
                      <service.icon className="size-5" aria-hidden />
                    </div>
                    <h3 className="mb-2 font-display text-lg font-semibold">
                      {service.title}
                    </h3>
                    <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.highlights.map((h) => (
                        <Badge key={h} variant="outline" className="text-[11px]">
                          {h}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CardLift>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
