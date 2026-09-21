"use client";

import { useRef, type ElementType } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

import { useHydratedReducedMotion } from "@/components/motion/use-hydrated-reduced-motion";

import { cn } from "@/lib/utils";

/**
 * Scroll-linked text fill. Each character sweeps from a dim tone, through
 * a bright accent, to its final colour as the block scrolls through the
 * viewport — a wave of light passing across the sentence.
 *
 * Wrap phrases in **double asterisks** to give them the highlight colour.
 */

const DIM = "rgba(148, 163, 184, 0.2)";
const SWEEP = "#22D3EE"; // brand accent — the "light" passing over
const FINAL = "#F8FAFC";
const FINAL_HIGHLIGHT = "#A78BFA";

/** Fraction of total progress a single character takes to fill */
const CHAR_SPAN = 0.14;

interface Segment {
  text: string;
  highlight: boolean;
}

function parse(text: string): Segment[] {
  return text
    .split(/(\*\*[^*]+\*\*)/g)
    .filter(Boolean)
    .map((part) =>
      part.startsWith("**")
        ? { text: part.slice(2, -2), highlight: true }
        : { text: part, highlight: false }
    );
}

function Char({
  char,
  progress,
  start,
  highlight,
}: {
  char: string;
  progress: MotionValue<number>;
  start: number;
  highlight: boolean;
}) {
  const color = useTransform(
    progress,
    [start, start + CHAR_SPAN / 2, start + CHAR_SPAN],
    [DIM, SWEEP, highlight ? FINAL_HIGHLIGHT : FINAL]
  );
  return <motion.span style={{ color }}>{char}</motion.span>;
}

export function TextFill({
  text,
  as: Tag = "p",
  className,
}: {
  text: string;
  as?: ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useHydratedReducedMotion();
  const segments = parse(text);
  const plain = segments.map((s) => s.text).join("");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"],
  });

  if (reduceMotion) {
    return (
      <Tag ref={ref} className={className}>
        {segments.map((s, i) => (
          <span key={i} className={s.highlight ? "text-violet-400" : undefined}>
            {s.text}
          </span>
        ))}
      </Tag>
    );
  }

  // Assign each character its slot on the 0→1 progress line
  const total = plain.replace(/\s/g, "").length;
  let index = 0;

  return (
    <Tag ref={ref} className={className}>
      <span className="sr-only">{plain}</span>
      <span aria-hidden>
        {segments.map((segment, si) =>
          segment.text.split(/(\s+)/).map((word, wi) => {
            if (/^\s+$/.test(word)) return word;
            return (
              <span key={`${si}-${wi}`} className="inline-block whitespace-nowrap">
                {Array.from(word).map((char, ci) => {
                  const start = (index++ / Math.max(total, 1)) * (1 - CHAR_SPAN);
                  return (
                    <Char
                      key={ci}
                      char={char}
                      progress={scrollYProgress}
                      start={start}
                      highlight={segment.highlight}
                    />
                  );
                })}
              </span>
            );
          })
        )}
      </span>
    </Tag>
  );
}
