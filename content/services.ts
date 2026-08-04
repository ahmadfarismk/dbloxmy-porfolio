import {
  Gamepad2,
  Clapperboard,
  GraduationCap,
  Presentation,
  Users,
  type LucideIcon,
} from "lucide-react";

/**
 * What D'Blox actually offers.
 *
 * Every service here is backed by delivered work — keep it that way.
 * (Removed: UGC Experiences, Monetization Systems, Analytics &
 * Optimization, Backend Integrations, LiveOps & Events — none of these
 * matched the studio's real portfolio.)
 */

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
  /** Photo shown on the services page */
  image: string | null;
}

export const services: Service[] = [
  {
    icon: Gamepad2,
    title: "Roblox Game Development",
    description:
      "Full-cycle game production on Roblox — concept, Luau systems, world building, UI, and launch. We build experiences end to end and ship them under our own studio name.",
    highlights: ["Luau scripting", "Game systems & mechanics", "World building"],
    image: "/story/keluar-sekejap/keluar-sekejap-4.jpg",
  },
  {
    icon: Clapperboard,
    title: "Brand & Media Virtualization",
    description:
      "Bringing brands, shows, and campaigns inside Roblox as playable spaces. We rebuilt the Keluar Sekejap podcast set and ran an episode as a live virtual production.",
    highlights: ["Virtual sets & venues", "Campaign activations", "Media tie-ins"],
    image: "/story/keluar-sekejap/keluar-sekejap-3.jpg",
  },
  {
    icon: GraduationCap,
    title: "Educational & Serious Games",
    description:
      "Learning objectives turned into genuine gameplay. FinBlox teaches financial literacy to Malaysian students and powers the Money Mayhem Varsity Challenge.",
    highlights: [
      "Curriculum-aligned design",
      "Financial literacy",
      "Measurable outcomes",
    ],
    image: "/story/finblox/finblox-3.jpg",
  },
  {
    icon: Users,
    title: "Workshops & Bootcamps",
    description:
      "Hands-on Roblox development training for schools, universities, and community programmes — participants leave with a game they built themselves.",
    highlights: [
      "School & university programmes",
      "AI-assisted scripting",
      "Ages 7–21",
    ],
    image: "/story/gamecraft-uitm/gamecraft-uitm-3.jpg",
  },
  {
    icon: Presentation,
    title: "Expo & Event Activations",
    description:
      "Interactive Roblox showcases built for exhibition floors and live events — from iGEM Malaysia to the Malaysia Pavilion at World Expo 2025 Osaka.",
    highlights: ["Exhibition builds", "Live demos", "Booth experiences"],
    image: "/story/igem-2025/igem-2025-3.jpg",
  },
];
