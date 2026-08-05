import Link from "next/link";
import Image from "next/image";

import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * D'Blox logo lockup: the real brand mark (white variant, since the
 * source art is black and the site is dark-first) plus the wordmark
 * set in the site's display font.
 *
 * Assets in /public/logo/ — both white and black variants are available.
 */
export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — home`}
      className={cn(
        "group flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-foreground",
        className
      )}
    >
      <Image
        src="/logo/dblox-mark-white.png"
        alt=""
        width={32}
        height={36}
        priority
        className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
      />
      {showWordmark ? (
        <span>
          D&rsquo;Blox
          <span className="sr-only"> — {siteConfig.tagline}</span>
        </span>
      ) : (
        <span className="sr-only">
          {siteConfig.name} — {siteConfig.tagline}
        </span>
      )}
    </Link>
  );
}
