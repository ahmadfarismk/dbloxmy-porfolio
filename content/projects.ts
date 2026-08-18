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
      // Official key art from the Roblox experience page
      "/projects/finblox-cover.png",
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
    slug: "jejak-wahyu",
    title: "Jejak Wahyu",
    genre: "Education",
    description:
      "An eight-chapter journey through the Sirah of Rasulullah SAW, built with Fly High Education Centre — quizzes aligned to the UPKK syllabus, entirely in Bahasa Melayu.",
    longDescription:
      "Players step into Madrasah Wahyu and open portals into eight worlds of Sirah — the old market of Mecca, Rumah Cahaya, the hidden dakwah alleys, the hijrah journey, the oasis of miracles, the battlefields, and finally Warisan Cahaya. Each chapter is its own adventure with interactive puzzles, a chapter quiz mapped to the UPKK syllabus, collectible stars, unlockable cosmetics, and progress saved across all eight chapters. Built entirely in Bahasa Melayu for all ages with no violent content.",
    images: ["/projects/jejak-wahyu-cover.jpg"],
    placeholderGradient: "from-amber-600 via-orange-500 to-yellow-400",
    metrics: [
      { label: "Visits", value: 312 },
      { label: "Chapters", value: 8, plain: true },
      { label: "Launched", value: 2026, plain: true },
    ],
    tags: ["Luau", "Sirah", "UPKK Syllabus", "Bahasa Melayu", "Fly High"],
    facts: [
      { label: "Partner", value: "Fly High Education Centre" },
      { label: "Chapters", value: "8 (3 free, 5 VIP)" },
      { label: "Curriculum", value: "Quizzes aligned to UPKK syllabus" },
      { label: "Language", value: "100% Bahasa Melayu" },
      { label: "Features", value: "Global star leaderboard & achievement gallery" },
      { label: "Launched", value: "June 2026" },
    ],
    href: "https://www.roblox.com/games/124356726222612/Jejak-Wahyu",
    hrefLabel: "Play on Roblox",
  },
  {
    slug: "pksk-onboard",
    title: "PKSK Onboard: Misi ke Asrama",
    genre: "Education",
    description:
      "Exam prep turned into an open world. Built with Fly High Education Centre to help students prepare for the PKSK special-school entrance exam.",
    longDescription:
      "Players explore PKSK World alongside Sang Kancil, touring the Muzium Sekolah Khusus covering SBP, MRSM, SMKA, KV, SMT and more. Three stages of challenges build up to the Bilik Peperiksaan and quiz rooms, where students test what they've learned and collect points to climb the leaderboard. The goal is simple — make revision for a high-stakes entrance exam something students actually want to do.",
    images: ["/projects/pksk-cover.jpg"],
    placeholderGradient: "from-sky-500 via-cyan-500 to-emerald-400",
    metrics: [
      { label: "Visits", value: 59 },
      { label: "Stages", value: 3, plain: true },
      { label: "Launched", value: 2026, plain: true },
    ],
    tags: ["Luau", "PKSK Prep", "Leaderboards", "Fly High"],
    facts: [
      { label: "Partner", value: "Fly High Education Centre" },
      { label: "Focus", value: "PKSK entrance-exam preparation" },
      { label: "Covers", value: "SBP, MRSM, SMKA, KV, SMT & more" },
      { label: "Structure", value: "Stages 1–3 + exam room & quiz" },
      { label: "Launched", value: "July 2026" },
    ],
    href: "https://www.roblox.com/games/126056624561474/PKSK-Onboard-Misi-ke-Asrama",
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
