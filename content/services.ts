import {
  Gamepad2,
  CalendarClock,
  Coins,
  Shirt,
  BarChart3,
  ServerCog,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
}

export const services: Service[] = [
  {
    icon: Gamepad2,
    title: "Roblox Game Development",
    description:
      "Full-cycle game production from concept to launch — gameplay systems, world building, and polish that keeps players coming back.",
    highlights: ["Luau architecture", "Multiplayer systems", "World building"],
  },
  {
    icon: CalendarClock,
    title: "LiveOps & Events",
    description:
      "Seasonal events, content drops, and live operations calendars engineered to sustain engagement and grow DAU month over month.",
    highlights: ["Event pipelines", "Content cadence", "Community hooks"],
  },
  {
    icon: Coins,
    title: "Monetization Systems",
    description:
      "Game passes, developer products, battle passes, and economy design tuned for healthy conversion without hurting player trust.",
    highlights: ["Economy design", "Battle passes", "A/B pricing"],
  },
  {
    icon: Shirt,
    title: "UGC Experiences",
    description:
      "Branded UGC items, avatar experiences, and catalog strategies that extend reach across the Roblox ecosystem.",
    highlights: ["UGC catalog items", "Brand activations", "Avatar tech"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Optimization",
    description:
      "Funnel instrumentation, retention dashboards, and data-driven iteration loops that turn playtests into growth.",
    highlights: ["Retention funnels", "Session analytics", "KPI dashboards"],
  },
  {
    icon: ServerCog,
    title: "Backend Integrations",
    description:
      "External APIs, cross-server messaging, secure data stores, and web services that scale with millions of sessions.",
    highlights: ["Open Cloud APIs", "Data stores", "Web services"],
  },
];
