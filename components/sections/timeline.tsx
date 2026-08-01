"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { CalendarDays, ImagePlus, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Milestone, TimelineImage } from "@/content/timeline";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Polaroid-style photo tile                                           */
/* ------------------------------------------------------------------ */

const tileRotations = ["-rotate-2", "rotate-2", "rotate-1", "-rotate-1"];
const tileGradients = [
  "from-violet-600/50 to-fuchsia-500/30",
  "from-cyan-500/40 to-blue-600/30",
  "from-emerald-500/40 to-teal-500/30",
  "from-rose-500/40 to-amber-400/30",
];

function PhotoTile({
  image,
  index,
}: {
  image: TimelineImage;
  index: number;
}) {
  return (
    <figure
      className={cn(
        "group/tile rounded-xl border border-border bg-surface p-2 pb-1 shadow-lg transition-transform duration-300 hover:z-10 hover:-translate-y-1.5 hover:rotate-0 hover:scale-[1.04]",
        tileRotations[index % tileRotations.length]
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        {image.src ? (
          <Image
            src={image.src}
            alt={image.caption}
            fill
            sizes="(max-width: 768px) 45vw, 220px"
            className="object-cover"
          />
        ) : (
          <div
            className={cn(
              "flex h-full w-full flex-col items-center justify-center gap-1.5 bg-gradient-to-br",
              tileGradients[index % tileGradients.length]
            )}
          >
            <ImagePlus
              className="size-5 text-white/60 transition-transform duration-300 group-hover/tile:scale-110"
              aria-hidden
            />
            <span className="px-2 text-center text-[10px] font-medium uppercase tracking-wider text-white/60">
              Photo slot
            </span>
          </div>
        )}
      </div>
      <figcaption className="truncate px-1 py-1.5 text-center text-[11px] text-muted-foreground">
        {image.caption}
      </figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/* Single milestone row                                                */
/* ------------------------------------------------------------------ */

function MilestoneItem({
  milestone,
  index,
}: {
  milestone: Milestone;
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const flipped = index % 2 === 1;

  const slideFrom = reduceMotion ? 0 : flipped ? 40 : -40;

  return (
    <li className="relative md:grid md:grid-cols-2 md:gap-x-20">
      {/* Node dot on the line */}
      <motion.span
        aria-hidden
        className={cn(
          "absolute left-4 top-2 z-10 flex size-5 -translate-x-1/2 items-center justify-center rounded-full border-2 md:left-1/2",
          milestone.upcoming
            ? "border-dashed border-accent bg-background"
            : "border-primary bg-background"
        )}
        initial={reduceMotion ? { scale: 1 } : { scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
      >
        <span
          className={cn(
            "size-2 rounded-full",
            milestone.upcoming
              ? "animate-ping bg-accent motion-reduce:animate-none"
              : "bg-primary"
          )}
        />
        {!milestone.upcoming && (
          <span className="absolute size-2 rounded-full bg-violet-300" />
        )}
      </motion.span>

      {/* Text block */}
      <motion.div
        className={cn(
          "pl-12 md:pl-0",
          flipped
            ? "md:order-2 md:pl-0 md:text-left"
            : "md:text-right"
        )}
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: slideFrom }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <div
          className={cn(
            "flex flex-wrap items-center gap-2",
            !flipped && "md:justify-end"
          )}
        >
          <Badge
            variant={milestone.upcoming ? "accent" : "default"}
            className="gap-1.5"
          >
            <CalendarDays className="size-3" aria-hidden />
            {milestone.date}
          </Badge>
          {milestone.upcoming && (
            <Badge variant="success" className="gap-1">
              <Sparkles className="size-3" aria-hidden />
              Coming soon
            </Badge>
          )}
        </div>
        <h3 className="mt-3 font-display text-xl font-bold leading-snug sm:text-2xl">
          {milestone.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {milestone.description}
        </p>
      </motion.div>

      {/* Photo collage */}
      <motion.div
        className={cn(
          "mt-6 pl-12 md:mt-0 md:pl-0",
          flipped && "md:order-1"
        )}
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -slideFrom }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.6,
          delay: 0.15,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
      >
        <div
          className={cn(
            "grid max-w-md grid-cols-2 gap-3 sm:gap-4",
            milestone.upcoming && "opacity-90 saturate-[0.85]"
          )}
        >
          {milestone.images.map((image, i) => (
            <PhotoTile key={image.caption + i} image={image} index={i} />
          ))}
        </div>
      </motion.div>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/* Year divider                                                        */
/* ------------------------------------------------------------------ */

function YearDivider({ year }: { year: string }) {
  return (
    <li aria-hidden className="relative flex justify-start md:justify-center">
      <motion.span
        className="relative z-10 ml-12 select-none rounded-full border border-border bg-background px-6 py-2 font-display text-3xl font-bold text-gradient md:ml-0 md:text-4xl"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 0.5 }}
      >
        {year}
      </motion.span>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/* Timeline                                                            */
/* ------------------------------------------------------------------ */

export function Timeline({ milestones }: { milestones: Milestone[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.6", "end 0.75"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  // Interleave year dividers where the year changes
  const rows: Array<
    | { kind: "year"; year: string }
    | { kind: "milestone"; milestone: Milestone; index: number }
  > = [];
  let lastYear: string | null = null;
  milestones.forEach((milestone, index) => {
    if (milestone.year !== lastYear) {
      rows.push({ kind: "year", year: milestone.year });
      lastYear = milestone.year;
    }
    rows.push({ kind: "milestone", milestone, index });
  });

  return (
    <div ref={ref} className="relative">
      {/* Base line */}
      <div
        aria-hidden
        className="absolute bottom-0 left-4 top-0 w-px -translate-x-1/2 bg-border md:left-1/2"
      />
      {/* Scroll-progress fill */}
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-4 top-0 w-[3px] origin-top -translate-x-1/2 rounded-full bg-gradient-to-b from-violet-500 via-fuchsia-400 to-cyan-400 md:left-1/2"
        style={reduceMotion ? { scaleY: 1 } : { scaleY }}
      />

      <ol className="space-y-20 md:space-y-28">
        {rows.map((row) =>
          row.kind === "year" ? (
            <YearDivider key={`year-${row.year}`} year={row.year} />
          ) : (
            <MilestoneItem
              key={row.milestone.id}
              milestone={row.milestone}
              index={row.index}
            />
          )
        )}
      </ol>
    </div>
  );
}
