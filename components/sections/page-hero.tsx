import { FadeIn } from "@/components/motion/fade-in";
import { Spotlight } from "@/components/motion/spotlight";

/** Shared header for interior pages. */
export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow: string;
  title: string;
  /** Portion of the title rendered with the gradient */
  highlight?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 md:pb-20 md:pt-44">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
      <Spotlight className="-top-56 left-1/2 -translate-x-1/2" size={720} />

      <div className="container-site relative">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </p>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {title}{" "}
              {highlight ? (
                <span className="text-gradient">{highlight}</span>
              ) : null}
            </h1>
            {description ? (
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
