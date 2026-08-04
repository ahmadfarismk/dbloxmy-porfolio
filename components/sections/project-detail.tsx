"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Gamepad2, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { YouTubeEmbed } from "@/components/sections/youtube-embed";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

/** Expanded case-study view shown when a project card is clicked. */
export function ProjectDetail({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] overflow-y-auto bg-black/85 p-4 backdrop-blur-sm sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} — project details`}
        className="mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero image */}
        <div className="relative aspect-[16/9] w-full">
          {project.images.length > 0 ? (
            <Image
              src={project.images[active]}
              alt={`${project.title} preview ${active + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          ) : (
            <div
              className={cn(
                "h-full w-full bg-gradient-to-br",
                project.placeholderGradient
              )}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close details"
            className="absolute right-4 top-4 rounded-full bg-background/80 p-2 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
          >
            <X className="size-5" />
          </button>

          <div className="absolute bottom-4 left-5 right-5">
            <Badge variant="accent" className="mb-2 bg-background/70 backdrop-blur-sm">
              {project.genre}
            </Badge>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              {project.title}
            </h2>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          {/* Thumbnail strip */}
          {project.images.length > 1 ? (
            <div className="mb-6 flex gap-2 overflow-x-auto pb-1">
              {project.images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show preview ${i + 1}`}
                  aria-pressed={i === active}
                  className={cn(
                    "relative h-14 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-colors",
                    i === active
                      ? "border-primary"
                      : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          ) : null}

          <p className="text-sm leading-relaxed text-secondary-foreground md:text-base">
            {project.longDescription ?? project.description}
          </p>

          {/* Video */}
          {project.video ? (
            <div className="mt-6">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                Watch
              </h3>
              <YouTubeEmbed video={project.video} />
            </div>
          ) : null}

          {/* Facts */}
          {project.facts?.length ? (
            <>
              <Separator className="my-6" />
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                Project details
              </h3>
              <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {project.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      {fact.label}
                    </dt>
                    <dd className="mt-0.5 text-sm font-medium">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </>
          ) : null}

          <Separator className="my-6" />

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-[11px]">
                {tag}
              </Badge>
            ))}
          </div>

          {project.href ? (
            <Button asChild size="lg" className="mt-6 w-full sm:w-auto">
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                <Gamepad2 aria-hidden />
                {project.hrefLabel ?? "View project"}
                <ExternalLink aria-hidden />
              </a>
            </Button>
          ) : null}
        </div>
      </motion.div>
    </motion.div>
  );
}
