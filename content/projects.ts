/**
 * Featured projects / case studies.
 *
 * Only real, shipped work belongs here — the numbers are shown publicly.
 * To add a project: drop a cover image in /public/projects/ (or reuse one
 * from /public/story/), then add an entry below.
 */

export interface ProjectMetric {
  label: string;
  /** Numeric value used by the animated counter */
  value: number;
  /** Suffix appended after the number, e.g. "M+", "%" */
  suffix?: string;
  /** Prefix, e.g. "+" or "$" */
  prefix?: string;
}

export interface Project {
  slug: string;
  title: string;
  genre: string;
  description: string;
  image: string | null;
  /** Gradient used for the placeholder art while no image is set */
  placeholderGradient: string;
  metrics: ProjectMetric[];
  tags: string[];
  /** External link (e.g. the Roblox experience page) */
  href?: string;
  /** Label for the external link button */
  hrefLabel?: string;
}

export const projects: Project[] = [
  {
    slug: "finblox",
    title: "FinBlox",
    genre: "Education",
    description:
      "Not your normal challenge. A financial-literacy experience built with MyCelik Network, teaching money skills to young Malaysians through play. Live on Roblox and published under D'Blox Studios.",
    image: "/story/finblox/finblox-2.jpg",
    placeholderGradient: "from-violet-600 via-fuchsia-500 to-cyan-400",
    metrics: [
      { label: "Visits", value: 319 },
      { label: "Max Server Size", value: 64 },
      { label: "Launched", value: 2025 },
    ],
    tags: ["Luau", "Financial Literacy", "MyCelik Network", "Ages 16+"],
    href: "https://www.roblox.com/games/140407575953529/FinBlox",
    hrefLabel: "Play on Roblox",
  },
  {
    slug: "keluar-sekejap-ep136",
    title: "Keluar Sekejap — EP136",
    genre: "Brand Experience",
    description:
      "Gamifying and virtualizing Episode 136 of the Keluar Sekejap podcast — turning a conversation into a playable, explorable Roblox world and proving media content can live inside the platform.",
    image: "/story/keluar-sekejap/keluar-sekejap-1.jpg",
    placeholderGradient: "from-teal-500 via-emerald-400 to-cyan-400",
    metrics: [
      { label: "Episode", value: 136 },
      { label: "Delivered", value: 2024 },
    ],
    tags: ["Virtualization", "Brand Partnership", "World Building"],
  },
  {
    slug: "gamecraft-bootcamps-2026",
    title: "GameCraft Bootcamps 2026",
    genre: "Education Programme",
    description:
      "A free school-holiday bootcamp run with UiTM Permatang Pauh at NADI Seberang Jaya — taking students aged 7–21 from zero to their own working Roblox game, including AI-assisted scripting.",
    image: "/story/gamecraft-uitm/gamecraft-uitm-3.jpg",
    placeholderGradient: "from-blue-600 via-indigo-500 to-cyan-400",
    metrics: [
      { label: "Ages", value: 7, suffix: "–21" },
      { label: "Held", value: 2026 },
    ],
    tags: ["Workshop", "UiTM", "NADI Seberang Jaya", "Roblox Education"],
  },
];
