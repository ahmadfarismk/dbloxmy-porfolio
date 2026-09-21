import type { CSSProperties } from "react";

/**
 * Decorative floating squares that echo the small blocks breaking off the
 * D'Blox mark. Tilted 15° like the logo, drifting slowly. Pure CSS, so it
 * ships no JavaScript. Hidden below md so it never crowds the headline.
 */

interface Square {
  top: string;
  left?: string;
  right?: string;
  size: number;
  tone: "ghost" | "violet" | "cyan";
  duration: number;
  delay: number;
}

const SQUARES: Square[] = [
  // left cluster — trails up-left, like the logo
  { top: "16%", left: "9%", size: 20, tone: "ghost", duration: 9, delay: 0 },
  { top: "25%", left: "15%", size: 11, tone: "violet", duration: 7, delay: -2 },
  { top: "10%", left: "17%", size: 8, tone: "ghost", duration: 8, delay: -4 },
  { top: "34%", left: "6%", size: 14, tone: "cyan", duration: 10, delay: -1 },
  { top: "45%", left: "12%", size: 7, tone: "ghost", duration: 6, delay: -3 },
  // right cluster
  { top: "20%", right: "9%", size: 16, tone: "ghost", duration: 8, delay: -5 },
  { top: "31%", right: "16%", size: 10, tone: "cyan", duration: 9, delay: -2 },
  { top: "13%", right: "20%", size: 7, tone: "violet", duration: 7, delay: -6 },
  { top: "47%", right: "7%", size: 11, tone: "ghost", duration: 11, delay: -1 },
  { top: "57%", right: "15%", size: 8, tone: "violet", duration: 8, delay: -3 },
];

const TONES: Record<Square["tone"], string> = {
  ghost: "border-white/30 bg-white/[0.08]",
  violet: "border-violet-400/50 bg-violet-500/30",
  cyan: "border-cyan-300/50 bg-cyan-400/25",
};

export function PixelScatter() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
      {SQUARES.map((sq, i) => (
        <span
          key={i}
          className={`pixel-float absolute rounded-[3px] border ${TONES[sq.tone]}`}
          style={
            {
              top: sq.top,
              left: sq.left,
              right: sq.right,
              width: sq.size,
              height: sq.size,
              animationDuration: `${sq.duration}s`,
              animationDelay: `${sq.delay}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
