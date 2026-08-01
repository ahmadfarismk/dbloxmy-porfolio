import { FadeInStagger, FadeInItem } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/sections/section-heading";
import { processSteps } from "@/content/process";

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="How we work"
          title="A production pipeline, not guesswork"
          description="Six stages take your game from idea to a living, growing experience — with clear deliverables at every step."
        />

        <FadeInStagger className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <FadeInItem key={step.title}>
              <div className="group relative h-full rounded-2xl border border-border bg-card/50 p-6 transition-colors duration-300 hover:border-primary/40">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-violet-300">
                    <step.icon className="size-5" aria-hidden />
                  </div>
                  <span
                    className="font-display text-4xl font-bold text-muted/80"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
