/**
 * Company story timeline — shown on /story.
 *
 * Images live in /public/story/<milestone>/ and are already optimized
 * (max 1600px, JPEG q85). To add more: drop the file in that folder and
 * add an entry here. Captions are free text — edit at will.
 */

export interface TimelineImage {
  src: string | null;
  caption: string;
}

export interface TimelineVideo {
  /** Path under /public — H.264 MP4 plays everywhere */
  src: string;
  /** Optional extra source (e.g. original .mov) offered as a fallback */
  fallbackSrc?: string;
  /** Poster frame shown before playback */
  poster: string;
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
  /** Optional video highlight for this milestone */
  video?: TimelineVideo;
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
      // TODO: add founding photos to /public/story/the-start/ when available
      { src: null, caption: "The founding team" },
      { src: null, caption: "First prototype build" },
      { src: null, caption: "Where it started" },
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
      { src: "/story/igem-2024/igem-2024-1.jpg", caption: "At the exhibition" },
      { src: "/story/igem-2024/igem-2024-2.jpg", caption: "Showing the build" },
      { src: "/story/igem-2024/igem-2024-3.jpg", caption: "Our first showcase" },
      { src: "/story/igem-2024/igem-2024-4.jpg", caption: "The D'Blox team" },
      { src: "/story/igem-2024/igem-2024-5.jpg", caption: "iGEM 2024 floor" },
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
      {
        src: "/story/keluar-sekejap/keluar-sekejap-1.jpg",
        caption: "The virtual set",
      },
      {
        src: "/story/keluar-sekejap/keluar-sekejap-2.jpg",
        caption: "On location",
      },
      {
        src: "/story/keluar-sekejap/keluar-sekejap-3.jpg",
        caption: "Behind the scenes",
      },
      {
        src: "/story/keluar-sekejap/keluar-sekejap-4.jpg",
        caption: "EP136 production",
      },
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
      {
        src: "/story/osaka-2025/osaka-2025-1.jpg",
        caption: "Malaysia Pavilion, Osaka",
      },
      {
        src: "/story/osaka-2025/osaka-2025-2.jpg",
        caption: "At World Expo 2025",
      },
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
      {
        src: "/story/mycelik-mou/mycelik-mou-1.jpg",
        caption: "The signing ceremony",
      },
      {
        src: "/story/mycelik-mou/mycelik-mou-2.jpg",
        caption: "D'Blox × MyCelik Network",
      },
    ],
  },
  {
    id: "finblox-launch",
    date: "September 2025",
    year: "2025",
    title: "D-Day! D'Blox × MyCelik — MMVC FinBlox Game",
    description:
      "Launch day. The MMVC FinBlox game goes live — a full financial-literacy experience built with MyCelik Network. Months of design, testing, and polish, out in the wild at last.",
    images: [
      { src: "/story/finblox/finblox-1.jpg", caption: "Launch day" },
      { src: "/story/finblox/finblox-2.jpg", caption: "FinBlox in action" },
      { src: "/story/finblox/finblox-3.jpg", caption: "Players on board" },
      { src: "/story/finblox/finblox-4.jpg", caption: "The team on D-Day" },
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
      { src: "/story/igem-2025/igem-2025-1.jpg", caption: "iGEM 2025 booth" },
      { src: "/story/igem-2025/igem-2025-2.jpg", caption: "Year-two showcase" },
      { src: "/story/igem-2025/igem-2025-3.jpg", caption: "Demoing the game" },
      { src: "/story/igem-2025/igem-2025-4.jpg", caption: "Visitors at iGEM" },
      { src: "/story/igem-2025/igem-2025-5.jpg", caption: "Back on the floor" },
    ],
  },
  {
    id: "gamecraft-uitm",
    date: "3 January 2026",
    year: "2026",
    title: "GameCraft Bootcamps 2026 — D'Blox × UiTM Permatang Pauh",
    description:
      "Teaching the next generation. D'Blox runs GameCraft Bootcamps 2026 with UiTM Permatang Pauh at NADI Seberang Jaya — a free school-holiday programme for ages 7–21 covering Roblox coding basics, game design concepts, and AI-assisted scripting. Hands-on from the first hour.",
    images: [
      {
        src: "/story/gamecraft-uitm/gamecraft-uitm-1.jpg",
        caption: "Certificate presentation",
      },
      {
        src: "/story/gamecraft-uitm/gamecraft-uitm-2.jpg",
        caption: "Bootcamp in session",
      },
      {
        src: "/story/gamecraft-uitm/gamecraft-uitm-3.jpg",
        caption: "The participants",
      },
      {
        src: "/story/gamecraft-uitm/gamecraft-uitm-4.jpg",
        caption: "GameCraft Bootcamps 2026",
      },
    ],
    video: {
      src: "/story/gamecraft-uitm/gamecraft-uitm-clip.mp4",
      poster: "/story/gamecraft-uitm/gamecraft-uitm-poster.jpg",
      caption: "Inside the GameCraft Bootcamp",
    },
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
