/**
 * Company story timeline — shown on /story.
 * Each milestone has 3–4 image slots: set `src` to a file in
 * /public/story/ (e.g. "/story/igem-2024-booth.jpg") and the photo
 * renders in the collage; while null a styled placeholder shows.
 * Edit `description` freely — the layout adapts to any length.
 */

export interface TimelineImage {
  src: string | null;
  caption: string;
}

export interface Milestone {
  id: string;
  /** Full date label, e.g. "September 2024" */
  date: string;
  /** Year used for the big dividers between years */
  year: string;
  title: string;
  description: string;
  images: TimelineImage[];
  /** Marks a future milestone (dashed styling + badge) */
  upcoming?: boolean;
}

export const milestones: Milestone[] = [
  {
    id: "the-start",
    date: "September 2024",
    year: "2024",
    title: "The Start — Our Starting Point",
    description:
      "Where it all began. D'Blox is founded with a simple belief: Malaysian creators can build world-class Roblox experiences. First commits, first prototypes, and a lot of late nights.",
    images: [
      { src: null, caption: "The founding team" },
      { src: null, caption: "First prototype build" },
      { src: null, caption: "Our first workspace" },
    ],
  },
  {
    id: "igem-2024",
    date: "October 2024",
    year: "2024",
    title: "Our First Expo — iGEM 2024",
    description:
      "One month in and straight onto the show floor: the International Greentech & Eco Products Exhibition and Conference Malaysia (iGEM) 2024, October 9–11. Our first time showing the public what gamified experiences can do.",
    images: [
      { src: null, caption: "The D'Blox booth" },
      { src: null, caption: "Live demo session" },
      { src: null, caption: "Visitors trying the game" },
      { src: null, caption: "Team at iGEM 2024" },
    ],
  },
  {
    id: "keluar-sekejap",
    date: "December 2024",
    year: "2024",
    title: "Gamifying the Keluar Sekejap Podcast — EP136",
    description:
      "A wild opportunity lands: gamify and virtualize Episode 136 of the Keluar Sekejap podcast. We turned a conversation into a playable, explorable world — and proved content can live inside Roblox.",
    images: [
      { src: null, caption: "The virtual studio set" },
      { src: null, caption: "In-game podcast scene" },
      { src: null, caption: "Behind the build" },
    ],
  },
  {
    id: "osaka-2025",
    date: "April 2025",
    year: "2025",
    title: "Off to World Expo Osaka 2025!",
    description:
      "From Malaysia to the world stage — D'Blox heads to World Expo 2025 in Osaka, Japan. Showcasing how virtual experiences connect cultures, and bringing home ideas twice the size of our luggage.",
    images: [
      { src: null, caption: "Arriving at Expo Osaka" },
      { src: null, caption: "Malaysia Pavilion" },
      { src: null, caption: "Showcase moment" },
      { src: null, caption: "Team in Osaka" },
    ],
  },
  {
    id: "mycelik-mou",
    date: "July 2025",
    year: "2025",
    title: "Signed MOU with MyCelik Network",
    description:
      "Partnership, made official. We sign a Memorandum of Understanding with MyCelik Network — joining forces to bring financial literacy to young Malaysians through play.",
    images: [
      { src: null, caption: "The signing ceremony" },
      { src: null, caption: "D'Blox × MyCelik" },
      { src: null, caption: "Partnership handshake" },
    ],
  },
  {
    id: "finblox-launch",
    date: "September 2025",
    year: "2025",
    title: "D-Day! D'Blox × MyCelik — MMVC Finblox Game",
    description:
      "Launch day. The MMVC Finblox game goes live — a full financial-literacy experience built with MyCelik Network. Months of design, testing, and polish, out in the wild at last.",
    images: [
      { src: null, caption: "Launch event" },
      { src: null, caption: "Finblox gameplay" },
      { src: null, caption: "First players onboard" },
      { src: null, caption: "The team on D-Day" },
    ],
  },
  {
    id: "igem-2025",
    date: "October 2025",
    year: "2025",
    title: "Another Year with iGEM 2025!",
    description:
      "Back where it started — but bigger. One year after our debut, we return to iGEM 2025 with a stronger portfolio, a shipped brand game, and a booth that draws a crowd.",
    images: [
      { src: null, caption: "iGEM 2025 booth" },
      { src: null, caption: "Year-two showcase" },
      { src: null, caption: "Crowd at the demo" },
    ],
  },
  {
    id: "flyhigh-collab",
    date: "July 2026",
    year: "2026",
    title: "Upcoming Collab with FlyHigh Tuition Academy?!",
    description:
      "The next chapter is loading… an education collaboration with FlyHigh Tuition Academy is in the works. Learning, gamified. Watch this space.",
    images: [
      { src: null, caption: "Coming soon" },
      { src: null, caption: "Sneak peek" },
      { src: null, caption: "In the works" },
    ],
    upcoming: true,
  },
];
