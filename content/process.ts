import {
  Search,
  PencilRuler,
  Hammer,
  FlaskConical,
  Rocket,
  Repeat,
  type LucideIcon,
} from "lucide-react";

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We align on goals, audience, and success metrics — then map the concept against what works on Roblox today.",
  },
  {
    icon: PencilRuler,
    title: "Prototyping",
    description:
      "Rapid greybox builds validate the core loop early, before a single polished asset is produced.",
  },
  {
    icon: Hammer,
    title: "Production",
    description:
      "Full development sprints with weekly playable builds — art, systems, UI, and content in parallel.",
  },
  {
    icon: FlaskConical,
    title: "Testing",
    description:
      "Closed playtests, telemetry review, and balancing passes catch issues before players ever see them.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "Coordinated release with store assets, sponsorship strategy, and day-one monitoring.",
  },
  {
    icon: Repeat,
    title: "LiveOps",
    description:
      "Post-launch events, content updates, and data-driven iteration keep the game growing.",
  },
];
