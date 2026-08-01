import { Suspense } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { FadeInStagger, FadeInItem } from "@/components/motion/fade-in";
import { CardLift } from "@/components/motion/card-lift";
import { SectionHeading } from "@/components/sections/section-heading";
import { TestimonialsSkeleton } from "@/components/sections/skeletons";
import { getTestimonials } from "@/lib/data";
import type { Testimonial } from "@/content/testimonials";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <CardLift className="h-full">
      <Card className="h-full transition-colors duration-300 hover:border-accent/40">
        <CardContent className="flex h-full flex-col p-6 pt-6">
          <Quote className="mb-4 size-6 text-accent/60" aria-hidden />
          <blockquote className="flex-1 text-sm leading-relaxed text-secondary-foreground">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            {testimonial.avatar ? (
              <Image
                src={testimonial.avatar}
                alt=""
                width={44}
                height={44}
                className="size-11 rounded-full object-cover"
              />
            ) : (
              <span
                aria-hidden
                className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600/70 to-cyan-500/70 font-display text-sm font-bold text-white"
              >
                {initials(testimonial.name)}
              </span>
            )}
            <div>
              <p className="text-sm font-semibold text-foreground">
                {testimonial.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
          </figcaption>
        </CardContent>
      </Card>
    </CardLift>
  );
}

async function TestimonialsGrid() {
  const testimonials = await getTestimonials();

  return (
    <FadeInStagger className="grid gap-6 md:grid-cols-3">
      {testimonials.map((testimonial) => (
        <FadeInItem key={testimonial.name}>
          <TestimonialCard testimonial={testimonial} />
        </FadeInItem>
      ))}
    </FadeInStagger>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 border-y border-border/60 bg-secondary/20 py-24 md:py-32"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow="Testimonials"
          title="Partners who shipped with us"
          description="Studio owners, brand partners, and community managers on what it's like to build with D'Blox."
        />
        <Suspense fallback={<TestimonialsSkeleton />}>
          <TestimonialsGrid />
        </Suspense>
      </div>
    </section>
  );
}
