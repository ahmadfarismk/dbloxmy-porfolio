/**
 * Trusted-by logos for the marquee.
 * Set `src` to a file in /public/logos/ (SVG preferred).
 * While `src` is null a styled wordmark placeholder renders.
 */

export interface PartnerLogo {
  name: string;
  src: string | null;
}

export const partnerLogos: PartnerLogo[] = [
  { name: "Pixel Forge", src: null },
  { name: "Nova Media", src: null },
  { name: "Orbit Interactive", src: null },
  { name: "Hyperline", src: null },
  { name: "Blockworks", src: null },
  { name: "Playlabs", src: null },
  { name: "Vertex Studio", src: null },
  { name: "Cosmic Games", src: null },
];
