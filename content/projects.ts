/**
 * Featured projects / case studies.
 * Replace with real games: set `image` to a file in /public/projects/
 * (e.g. "/projects/neon-city.jpg"). While `image` is null a branded
 * gradient placeholder renders instead.
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
}

export const projects: Project[] = [
  {
    slug: "neon-city-tycoon",
    title: "Neon City Tycoon",
    genre: "Tycoon",
    description:
      "A cyberpunk city-builder with deep progression and social systems, scaled to six-figure daily visits.",
    image: null,
    placeholderGradient: "from-violet-600 via-fuchsia-500 to-cyan-400",
    metrics: [
      { label: "Total Visits", value: 42, suffix: "M+" },
      { label: "D7 Retention", value: 31, suffix: "%" },
      { label: "Revenue Uplift", value: 68, suffix: "%", prefix: "+" },
    ],
    tags: ["Luau", "DataStores", "LiveOps", "Economy"],
  },
  {
    slug: "space-explorers",
    title: "Space Explorers",
    genre: "Simulator",
    description:
      "A co-op exploration simulator with cross-server fleets, seasonal content drops, and a player-driven economy.",
    image: null,
    placeholderGradient: "from-blue-600 via-indigo-500 to-emerald-400",
    metrics: [
      { label: "Total Visits", value: 18, suffix: "M+" },
      { label: "Avg. Session", value: 24, suffix: " min" },
      { label: "MAU Growth", value: 3, suffix: "x", prefix: "+" },
    ],
    tags: ["MemoryStore", "Open Cloud", "Matchmaking"],
  },
  {
    slug: "brand-runway",
    title: "Brand Runway",
    genre: "Brand Experience",
    description:
      "A fashion-brand activation with UGC drops and timed events — built end-to-end in eight weeks for a global partner.",
    image: null,
    placeholderGradient: "from-pink-500 via-rose-400 to-amber-300",
    metrics: [
      { label: "Launch Visits", value: 5, suffix: "M+" },
      { label: "UGC Items Sold", value: 900, suffix: "K" },
      { label: "Press Features", value: 12 },
    ],
    tags: ["UGC", "Brand Partnership", "Events"],
  },
];
