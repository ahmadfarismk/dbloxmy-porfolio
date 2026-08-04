"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Gamepad2, Maximize2, Youtube } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardLift } from "@/components/motion/card-lift";
import { NumberCounter } from "@/components/motion/number-counter";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

/** ms each preview image stays before rotating */
const ROTATE_MS = 4000;

export function ProjectCard({
  project,
  index = 0,
  onOpen,
}: {
  project: Project;
  /** Used to stagger rotation so cards don't flip in lockstep */
  index?: number;
  onOpen?: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = project.images.length;

  useEffect(() => {
    if (reduceMotion || paused || total <= 1) return;
    // Stagger each card's first flip by 700ms
    const offset = index * 700;
    const timer = setTimeout(() => {
      setSlide((s) => (s + 1) % total);
    }, ROTATE_MS + (slide === 0 ? offset : 0));
    return () => clearTimeout(timer);
  }, [slide, paused, reduceMotion, total, index]);

  return (
    <CardLift className="h-full">
      <Card
        className="group h-full overflow-hidden transition-colors duration-300 hover:border-accent/40"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Cover carousel — the whole thing opens the detail view */}
        <button
          type="button"
          onClick={onOpen}
          aria-label={`View details for ${project.title}`}
          className="relative block aspect-[16/9] w-full overflow-hidden"
        >
          {total > 0 ? (
            <AnimatePresence initial={false} mode="popLayout">
              <motion.div
                key={slide}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <Image
                  src={project.images[slide]}
                  alt={`${project.title} preview ${slide + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  priority={index === 0 && slide === 0}
                />
              </motion.div>
            </AnimatePresence>
          ) : (
            <div
              className={cn(
                "h-full w-full bg-gradient-to-br",
                project.placeholderGradient
              )}
            />
          )}

          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

          <Badge
            variant="accent"
            className="absolute left-4 top-4 bg-background/70 backdrop-blur-sm"
          >
            {project.genre}
          </Badge>

          {project.video ? (
            <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-background/70 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
              <Youtube className="size-3 text-red-500" aria-hidden />
              Video
            </span>
          ) : null}

          {/* Expand affordance */}
          <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-background/80 px-2.5 py-1.5 text-[11px] font-medium text-foreground opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
            <Maximize2 className="size-3" aria-hidden />
            View details
          </span>

          {/* Slide dots */}
          {total > 1 ? (
            <span className="absolute bottom-3 left-4 flex gap-1.5">
              {project.images.map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === slide ? "w-4 bg-white" : "w-1.5 bg-white/45"
                  )}
                />
              ))}
            </span>
          ) : null}
        </button>

        <CardContent className="p-6 pt-5">
          <h3 className="mb-2 font-display text-xl font-semibold">
            {project.title}
          </h3>
          <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {/* Metrics */}
          <dl className="mb-5 grid grid-cols-3 gap-3 rounded-xl border border-border bg-secondary/40 p-4">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col">
                <dt className="order-2 text-[10px] uppercase leading-tight tracking-wider text-muted-foreground">
                  {metric.label}
                </dt>
                <dd className="order-1 mb-0.5 font-display text-lg font-bold text-foreground">
                  <NumberCounter
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    plain={metric.plain}
                  />
                </dd>
              </div>
            ))}
          </dl>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-[11px]">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <Button variant="outline" size="sm" onClick={onOpen}>
              <Maximize2 aria-hidden />
              View details
            </Button>
            {project.href ? (
              <Button asChild size="sm">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Gamepad2 aria-hidden />
                  {project.hrefLabel ?? "View project"}
                  <ExternalLink aria-hidden />
                </a>
              </Button>
            ) : null}
          </div>
        </CardContent>
      </Card>
    </CardLift>
  );
}
