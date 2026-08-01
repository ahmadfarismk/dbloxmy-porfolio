import { cn } from "@/lib/utils";

/**
 * Decorative radial spotlight glow — pure CSS, server component.
 * Position with absolute utilities from the parent.
 */
export function Spotlight({
  className,
  color = "var(--brand-primary)",
  size = 900,
  opacity = 0.28,
}: {
  className?: string;
  color?: string;
  size?: number;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full blur-3xl", className)}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 65%)`,
        opacity,
      }}
    />
  );
}
