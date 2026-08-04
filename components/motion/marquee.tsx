import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * CSS-driven infinite marquee. Server component — zero JS shipped.
 *
 * The track is built from two identical halves and animates by -50%, so
 * the loop is seamless. Each half repeats `repeatPerHalf` copies of the
 * children: a half MUST be wider than the viewport or a gap appears at
 * the end of each cycle. With few/narrow items, raise `repeatPerHalf`.
 */
export function Marquee({
  children,
  className,
  duration = 40,
  reverse = false,
  repeatPerHalf = 2,
}: {
  children: ReactNode;
  className?: string;
  /** Seconds for one full loop */
  duration?: number;
  reverse?: boolean;
  /** Copies of `children` inside each half of the track */
  repeatPerHalf?: number;
}) {
  const half = (
    <div className="flex min-w-max items-center gap-6">
      {Array.from({ length: repeatPerHalf }).map((_, i) => (
        <div key={i} className="flex min-w-max items-center gap-6">
          {children}
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={cn(
        "group/marquee flex w-full overflow-hidden mask-fade-x",
        className
      )}
    >
      <div
        className={cn(
          "flex min-w-max shrink-0 items-center gap-6 pr-6 animate-marquee group-hover/marquee:[animation-play-state:paused] motion-reduce:animate-none",
          reverse && "[animation-direction:reverse]"
        )}
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {half}
        {/* Duplicate half for the seamless loop — hidden from a11y tree */}
        <div aria-hidden>{half}</div>
      </div>
    </div>
  );
}
