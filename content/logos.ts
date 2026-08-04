/**
 * Partner / collaborator logos for the "Trusted by" marquee.
 *
 * Files live in /public/logos/ — already trimmed of surrounding
 * whitespace and normalized to a 220px height.
 *
 * `invertOnDark` is for logos whose artwork is dark (they'd disappear
 * against a dark surface), so they get a light chip behind them.
 */

export interface PartnerLogo {
  name: string;
  src: string | null;
  /** Rendered width in px — tune per logo so optical weight matches */
  width?: number;
}

export const partnerLogos: PartnerLogo[] = [
  { name: "MGTC — Malaysian Green Technology Corporation", src: "/logos/mgtc.png", width: 112 },
  { name: "iGEM — International Greentech & Eco Products Exhibition", src: "/logos/igem.png", width: 128 },
  { name: "MyCelik Network", src: "/logos/mycelik.png", width: 56 },
  { name: "Keluar Sekejap", src: "/logos/keluar-sekejap.png", width: 68 },
  { name: "World Expo 2025 Osaka", src: "/logos/expo-2025-osaka.png", width: 46 },
  { name: "Nexus International School Malaysia", src: "/logos/nexus.png", width: 46 },
];
