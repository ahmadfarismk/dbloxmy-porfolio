import Image from "next/image";

import { Marquee } from "@/components/motion/marquee";
import { partnerLogos, type PartnerLogo } from "@/content/logos";

/**
 * Trusted-by marquee. Logos sit on a light chip so brand colours stay
 * legible against the dark background regardless of whether the source
 * art is transparent, white-backed, or dark.
 */
function LogoItem({ logo }: { logo: PartnerLogo }) {
  if (!logo.src) {
    return (
      <div className="flex h-16 w-40 shrink-0 items-center justify-center px-4 opacity-60">
        <span className="select-none whitespace-nowrap font-display text-base font-bold tracking-wide text-slate-300">
          {logo.name}
        </span>
      </div>
    );
  }

  return (
    <div className="flex h-20 shrink-0 items-center justify-center rounded-xl bg-white/90 px-5 py-3 opacity-75 grayscale transition-all duration-300 hover:bg-white hover:opacity-100 hover:grayscale-0">
      <Image
        src={logo.src}
        alt={logo.name}
        width={logo.width ?? 96}
        height={72}
        className="h-full w-auto object-contain"
        style={{ width: logo.width ?? 96 }}
      />
    </div>
  );
}

export function TrustedBy() {
  return (
    <section aria-label="Partners and collaborators" className="border-y border-border/60 py-12">
      <div className="container-site">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Collaborated with
        </p>
      </div>
      {/* 6 fairly narrow logos — repeat twice per half so the track is
          always wider than the viewport and the loop shows no gap */}
      <Marquee duration={34} repeatPerHalf={2}>
        {partnerLogos.map((logo) => (
          <LogoItem key={logo.name} logo={logo} />
        ))}
      </Marquee>
    </section>
  );
}
