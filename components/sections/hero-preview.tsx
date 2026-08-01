"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, Coins, Gamepad2, Users } from "lucide-react";

import { NumberCounter } from "@/components/motion/number-counter";

/**
 * Stylized LiveOps dashboard mock shown under the hero headline.
 * Pure UI — replace with a real gameplay video/screenshot when
 * assets arrive (drop into /public and swap this component).
 */

const chartBars = [
  38, 52, 44, 61, 55, 72, 64, 80, 71, 88, 76, 94, 82, 100, 90, 97,
];

const stats = [
  { icon: Users, label: "Live CCU", value: 12480, suffix: "", accent: true },
  { icon: Activity, label: "D7 Retention", value: 31, suffix: "%" },
  { icon: Coins, label: "Robux / day", value: 240, suffix: "K" },
  { icon: Gamepad2, label: "Sessions", value: 86, suffix: "K" },
];

export function HeroPreview() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto mt-16 max-w-4xl md:mt-20">
      {/* Glow under the panel */}
      <div
        aria-hidden
        className="absolute -inset-x-8 top-8 -bottom-8 rounded-[2rem] bg-gradient-to-r from-violet-600/25 via-fuchsia-500/15 to-cyan-400/25 blur-2xl"
      />

      <div className="border-gradient relative overflow-hidden rounded-2xl glow-primary">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-3">
          <span className="size-2.5 rounded-full bg-rose-500/70" />
          <span className="size-2.5 rounded-full bg-amber-400/70" />
          <span className="size-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-3 text-xs text-muted-foreground">
            dblox — liveops dashboard
          </span>
          <span className="ml-auto flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
            </span>
            Live
          </span>
        </div>

        <div className="grid gap-4 bg-card/80 p-4 backdrop-blur-sm sm:p-6 md:grid-cols-[1fr_240px]">
          {/* Chart panel */}
          <div className="rounded-xl border border-border bg-secondary/40 p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">
                  Concurrent players
                </p>
                <p className="font-display text-2xl font-bold">
                  <NumberCounter value={12480} />
                </p>
              </div>
              <span className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                +18% this week
              </span>
            </div>
            <div
              className="flex h-28 items-end gap-1.5 sm:h-36"
              role="img"
              aria-label="Chart showing concurrent players trending upward"
            >
              {chartBars.map((height, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-violet-600 to-cyan-400"
                  initial={
                    reduceMotion ? { height: `${height}%` } : { height: "8%" }
                  }
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4 + i * 0.045,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                />
              ))}
            </div>
          </div>

          {/* Stats column */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-secondary/40 p-3.5"
              >
                <div className="flex items-center gap-2 text-muted-foreground">
                  <stat.icon className="size-3.5" aria-hidden />
                  <span className="text-[11px] uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
                <p className="mt-1.5 font-display text-lg font-bold">
                  <NumberCounter value={stat.value} suffix={stat.suffix} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
