import Link from "next/link";
import { Boxes } from "lucide-react";

import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Placeholder logo — swap the <Boxes> icon for the real logo image
 * (e.g. <Image src="/logo.svg" ... />) when assets are provided.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 font-display text-lg font-bold tracking-tight text-foreground",
        className
      )}
    >
      <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-cyan-400 text-white">
        <Boxes className="size-5" aria-hidden />
      </span>
      <span>
        D&rsquo;Blox
        <span className="sr-only"> — {siteConfig.tagline}</span>
      </span>
    </Link>
  );
}
