"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  ImagePlus,
  Sparkles,
  X,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { TimelineVideoPlayer } from "@/components/sections/timeline-video";
import type { Milestone, TimelineImage } from "@/content/timeline";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Lightbox                                                            */
/* ------------------------------------------------------------------ */

interface LightboxState {
  images: TimelineImage[];
  index: number;
}

function Lightbox({
  state,
  onClose,
  onNavigate,
}: {
  state: LightboxState;
  onClose: () => void;
  onNavigate: (delta: number) => void;
}) {
  const image = state.images[state.index];

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate(1);
      if (e.key === "ArrowLeft") onNavigate(-1);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNavigate]);

  if (!image?.src) return null;

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={image.caption}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image"
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
      >
        <X className="size-5" />
      </button>

      {state.images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(-1);
            }}
            className="absolute left-3 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(1);
            }}
            className="absolute right-3 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <ChevronRight className="size-6" />
          </button>
        </>
      )}

      <motion.figure
        key={image.src}
        className="relative max-h-full w-full max-w-4xl"
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.caption}
          width={1600}
          height={1200}
          sizes="(max-width: 896px) 100vw, 896px"
          className="max-h-[80vh] w-full rounded-xl object-contain"
        />
        <figcaption className="mt-3 text-center text-sm text-white/80">
          {image.caption}
          {state.images.length > 1 && (
            <span className="ml-2 text-white/50">
              {state.index + 1} / {state.images.length}
            </span>
          )}
        </figcaption>
      </motion.figure>
    </motion.div>
  );
}

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
  onOpen,
}: {
  image: TimelineImage;
  index: number;
  onOpen?: () => void;
}) {
  const inner = (
    <>
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
            <ImagePlus className="size-5 text-white/60" aria-hidden />
            <span className="px-2 text-center text-[10px] font-medium uppercase tracking-wider text-white/60">
              Photo slot
            </span>
          </div>
        )}
      </div>
      <figcaption className="truncate px-1 py-1.5 text-center text-[11px] text-muted-foreground">
        {image.caption}
      </figcaption>
    </>
  );

  const className = cn(
    "group/tile block w-full rounded-xl border border-border bg-surface p-2 pb-1 text-left shadow-lg transition-transform duration-300 hover:z-10 hover:-translate-y-1.5 hover:rotate-0 hover:scale-[1.04]",
    tileRotations[index % tileRotations.length]
  );

  if (image.src && onOpen) {
    return (
      <button
        type="button"
        onClick={onOpen}
        className={className}
        aria-label={`View larger: ${image.caption}`}
      >
        {inner}
      </button>
    );
  }

  return <figure className={className}>{inner}</figure>;
}

/* ------------------------------------------------------------------ */
/* Single milestone row                                                */
/* ------------------------------------------------------------------ */

function MilestoneItem({
  milestone,
  index,
  onOpenImage,
}: {
  milestone: Milestone;
  index: number;
  onOpenImage: (images: TimelineImage[], imageIndex: number) => void;
}) {
  const reduceMotion = useReducedMotion();
  const flipped = index % 2 === 1;
  const slideFrom = reduceMotion ? 0 : flipped ? 40 : -40;
  const withPhotos = milestone.images.filter((img) => img.src);

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
        className={cn("pl-12 md:pl-0", flipped ? "md:order-2" : "md:text-right")}
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

      {/* Photo collage + optional video */}
      <motion.div
        className={cn("mt-6 pl-12 md:mt-0 md:pl-0", flipped && "md:order-1")}
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -slideFrom }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.6,
          delay: 0.15,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
      >
        <div className="max-w-md">
          <div
            className={cn(
              "grid grid-cols-2 gap-3 sm:gap-4",
              milestone.upcoming && "opacity-90 saturate-[0.85]"
            )}
          >
            {milestone.images.map((image, i) => (
              <PhotoTile
                key={(image.src ?? image.caption) + i}
                image={image}
                index={i}
                onOpen={
                  image.src
                    ? () =>
                        onOpenImage(
                          withPhotos,
                          withPhotos.findIndex((p) => p.src === image.src)
                        )
                    : undefined
                }
              />
            ))}
          </div>

          {milestone.video ? (
            <TimelineVideoPlayer video={milestone.video} />
          ) : null}
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
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.6", "end 0.75"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  const openImage = useCallback(
    (images: TimelineImage[], index: number) =>
      setLightbox({ images, index: Math.max(0, index) }),
    []
  );

  const navigate = useCallback(
    (delta: number) =>
      setLightbox((current) => {
        if (!current) return current;
        const total = current.images.length;
        return { ...current, index: (current.index + delta + total) % total };
      }),
    []
  );

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
              onOpenImage={openImage}
            />
          )
        )}
      </ol>

      <AnimatePresence>
        {lightbox && (
          <Lightbox
            state={lightbox}
            onClose={() => setLightbox(null)}
            onNavigate={navigate}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
