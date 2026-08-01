import Image from "next/image";

import { Marquee } from "@/components/motion/marquee";
import { partnerLogos, type PartnerLogo } from "@/content/logos";

/**
 * Trusted-by marquee. When a logo has `src`, it renders grayscale and
 * colors on hover; while `src` is null a styled wordmark placeholder shows.
 */
function LogoItem({ logo }: { logo: PartnerLogo }) {
  return (
    <div className="flex h-12 w-40 shrink-0 items-center justify-center rounded-lg px-4 opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
      {logo.src ? (
        <Image
          src={logo.src}
          alt={logo.name}
          width={128}
          height={40}
          className="max-h-8 w-auto object-contain"
        />
      ) : (
        <span className="select-none whitespace-nowrap font-display text-base font-bold tracking-wide text-slate-300">
          {logo.name}
        </span>
      )}
    </div>
  );
}

export function TrustedBy() {
  return (
    <section aria-label="Trusted by" className="border-y border-border/60 py-12">
      <div className="container-site">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by studios, brands & publishers
        </p>
      </div>
      <Marquee duration={36}>
        {partnerLogos.map((logo) => (
          <LogoItem key={logo.name} logo={logo} />
        ))}
      </Marquee>
    </section>
  );
}
