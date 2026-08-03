import Image from "next/image";
import { ArrowUpRight, ExternalLink, Gamepad2 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardLift } from "@/components/motion/card-lift";
import { NumberCounter } from "@/components/motion/number-counter";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <CardLift className="h-full">
      <Card className="group h-full overflow-hidden transition-colors duration-300 hover:border-accent/40">
        {/* Cover art */}
        <div className="relative aspect-[16/9] overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} gameplay screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div
              className={cn(
                "flex h-full w-full items-center justify-center bg-gradient-to-br transition-transform duration-500 group-hover:scale-105",
                project.placeholderGradient
              )}
            >
              <span className="px-4 text-center font-display text-2xl font-bold text-white/90 drop-shadow-md">
                {project.title}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          <Badge
            variant="accent"
            className="absolute left-4 top-4 bg-background/70 backdrop-blur-sm"
          >
            {project.genre}
          </Badge>
        </div>

        <CardContent className="p-6 pt-5">
          <div className="mb-2 flex items-center justify-between gap-2">
            <h3 className="font-display text-xl font-semibold">
              {project.title}
            </h3>
            <ArrowUpRight
              className="size-5 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-accent group-hover:opacity-100"
              aria-hidden
            />
          </div>
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
                  />
                </dd>
              </div>
            ))}
          </dl>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-[11px]">
                {tag}
              </Badge>
            ))}
          </div>

          {/* External link (e.g. the Roblox experience page) */}
          {project.href ? (
            <Button asChild size="sm" className="mt-5 w-full">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Gamepad2 aria-hidden />
                {project.hrefLabel ?? "View project"}
                <ExternalLink aria-hidden />
              </a>
            </Button>
          ) : null}
        </CardContent>
      </Card>
    </CardLift>
  );
}
