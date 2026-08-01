import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * CSS-driven infinite marquee. Content is duplicated once for a seamless
 * loop; animation pauses on hover. Server component — zero JS shipped.
 */
export function Marquee({
  children,
  className,
  duration = 40,
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  /** Seconds for one full loop */
  duration?: number;
  reverse?: boolean;
}) {
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
        {children}
        {/* Duplicate for seamless loop — hidden from a11y tree */}
        <div aria-hidden className="flex min-w-max items-center gap-6">
          {children}
        </div>
      </div>
    </div>
  );
}
