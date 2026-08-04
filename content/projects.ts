/**
 * Featured projects / case studies.
 *
 * Only real, shipped work belongs here — the numbers are shown publicly.
 *
 * `images` drives the auto-rotating preview on each card and the gallery
 * inside the detail view. The first image is the cover. Add as many as
 * you like; drop files into /public/projects/ or reuse /public/story/.
 */

export interface ProjectMetric {
  label: string;
  /** Numeric value used by the animated counter */
  value: number;
  /** Suffix appended after the number, e.g. "M+", "%" */
  suffix?: string;
  /** Prefix, e.g. "+" or "$" */
  prefix?: string;
  /** Skip thousands separators (for years) */
  plain?: boolean;
}

export interface ProjectVideo {
  /** YouTube video id, e.g. "-X680LVdHSg" */
  youtubeId: string;
  title: string;
  /** Local poster image — avoids loading anything from YouTube up front */
  poster: string;
}

export interface Project {
  slug: string;
  title: string;
  genre: string;
  /** Short blurb shown on the card */
  description: string;
  /** Longer write-up shown in the expanded detail view */
  longDescription?: string;
  /** Preview images — first one is the cover */
  images: string[];
  /** Gradient fallback if `images` is empty */
  placeholderGradient: string;
  metrics: ProjectMetric[];
  tags: string[];
  /** Extra facts listed in the detail view */
  facts?: { label: string; value: string }[];
  /** External link (e.g. the Roblox experience page) */
  href?: string;
  hrefLabel?: string;
  video?: ProjectVideo;
}

export const projects: Project[] = [
  {
    slug: "finblox",
    title: "FinBlox",
    genre: "Education",
    description:
      "Not your normal challenge. A financial-literacy experience built with MyCelik Network, teaching money skills to young Malaysians through play.",
    longDescription:
      "FinBlox powers the Money Mayhem Varsity Challenge (MMVC) 2025 — a national financial-literacy competition held at Sasana Kijang, Bank Negara Malaysia. Built with MyCelik Network, the experience turns budgeting, saving, and investing decisions into a competitive Roblox game that university students play head-to-head. Published on Roblox under D'Blox Studios and rated for ages 16+.",
    images: [
      // TODO: swap in the official FinBlox key art as the cover once saved
      // to /public/projects/finblox-cover.jpg
      "/story/finblox/finblox-3.jpg",
      "/story/finblox/finblox-2.jpg",
      "/story/finblox/finblox-1.jpg",
      "/story/finblox/finblox-4.jpg",
    ],
    placeholderGradient: "from-violet-600 via-fuchsia-500 to-cyan-400",
    metrics: [
      { label: "Visits", value: 319 },
      { label: "Max Server Size", value: 64 },
      { label: "Launched", value: 2025, plain: true },
    ],
    tags: ["Luau", "Financial Literacy", "MyCelik Network", "Ages 16+"],
    facts: [
      { label: "Event", value: "Money Mayhem Varsity Challenge 2025" },
      { label: "Venue", value: "Sasana Kijang, Bank Negara Malaysia" },
      { label: "Date", value: "10 September 2025" },
      { label: "Partner", value: "MyCelik Network" },
      { label: "Genre", value: "Education" },
    ],
    href: "https://www.roblox.com/games/140407575953529/FinBlox",
    hrefLabel: "Play on Roblox",
  },
  {
    slug: "keluar-sekejap-ep136",
    title: "Keluar Sekejap — EP136",
    genre: "Brand Experience",
    description:
      "Gamifying and virtualizing Episode 136 of the Keluar Sekejap podcast — turning a conversation into a playable, explorable Roblox world.",
    longDescription:
      "For Episode 136, we rebuilt the Keluar Sekejap set inside Roblox and ran the episode as a virtual production — hosts appearing as avatars in a faithfully recreated studio, streamed alongside the real recording. It proved that Malaysian media content can live natively inside Roblox rather than simply being advertised there.",
    images: [
      "/story/keluar-sekejap/keluar-sekejap-4.jpg",
      "/story/keluar-sekejap/keluar-sekejap-3.jpg",
      "/story/keluar-sekejap/keluar-sekejap-1.jpg",
      "/story/keluar-sekejap/keluar-sekejap-2.jpg",
    ],
    placeholderGradient: "from-teal-500 via-emerald-400 to-cyan-400",
    metrics: [
      { label: "Episode", value: 136, plain: true },
      { label: "Delivered", value: 2024, plain: true },
    ],
    tags: ["Virtualization", "Brand Partnership", "World Building"],
    facts: [
      { label: "Format", value: "Virtual podcast production" },
      { label: "Episode", value: "EP136" },
      { label: "Delivered", value: "December 2024" },
    ],
    video: {
      youtubeId: "-X680LVdHSg",
      title: "Keluar Sekejap EP136 — the Roblox virtual episode",
      poster: "/story/keluar-sekejap/keluar-sekejap-3.jpg",
    },
  },
  {
    slug: "gamecraft-bootcamps-2026",
    title: "GameCraft Bootcamps 2026",
    genre: "Education Programme",
    description:
      "A free school-holiday bootcamp with UiTM Permatang Pauh — taking students aged 7–21 from zero to their own working Roblox game.",
    longDescription:
      "Run with UiTM Permatang Pauh at NADI Seberang Jaya, GameCraft Bootcamps 2026 is a free school-holiday programme covering Roblox coding fundamentals, game design concepts, and AI-assisted scripting. Every participant leaves with a game they built themselves, plus free modules, stationery, and meals. Hands-on from the first hour.",
    images: [
      "/story/gamecraft-uitm/gamecraft-uitm-3.jpg",
      "/story/gamecraft-uitm/gamecraft-uitm-1.jpg",
      "/story/gamecraft-uitm/gamecraft-uitm-2.jpg",
      "/story/gamecraft-uitm/gamecraft-uitm-4.jpg",
    ],
    placeholderGradient: "from-blue-600 via-indigo-500 to-cyan-400",
    metrics: [
      { label: "Ages", value: 7, suffix: "–21" },
      { label: "Held", value: 2026, plain: true },
    ],
    tags: ["Workshop", "UiTM", "NADI Seberang Jaya", "Roblox Education"],
    facts: [
      { label: "Date", value: "3 January 2026" },
      { label: "Venue", value: "NADI Seberang Jaya" },
      { label: "Partner", value: "UiTM Permatang Pauh" },
      { label: "Open to", value: "Students aged 7–21" },
      { label: "Cost", value: "Free — modules & meals included" },
    ],
  },
];
