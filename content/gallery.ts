/**
 * Gallery items. Images are shared with the story timeline
 * (/public/story/...) so there's only one copy of each file.
 * To add more: drop the file into /public/gallery/ or /public/story/<event>/
 * and add an entry below.
 */

export type GalleryCategory =
  | "Events"
  | "Games"
  | "Workshops"
  | "Partnerships";

export const galleryCategories: GalleryCategory[] = [
  "Events",
  "Games",
  "Workshops",
  "Partnerships",
];

export interface GalleryItem {
  title: string;
  category: GalleryCategory;
  src: string | null;
  /** Tailwind gradient classes used only when `src` is null */
  gradient: string;
}

export const galleryItems: GalleryItem[] = [
  // --- Events ---
  { title: "iGEM 2024 — Our First Expo", category: "Events", src: "/story/igem-2024/igem-2024-1.jpg", gradient: "from-emerald-600 to-cyan-500" },
  { title: "iGEM 2024 Showcase", category: "Events", src: "/story/igem-2024/igem-2024-3.jpg", gradient: "from-emerald-600 to-teal-500" },
  { title: "iGEM 2024 — The Team", category: "Events", src: "/story/igem-2024/igem-2024-4.jpg", gradient: "from-green-600 to-emerald-400" },
  { title: "World Expo Osaka 2025", category: "Events", src: "/story/osaka-2025/osaka-2025-1.jpg", gradient: "from-rose-500 to-orange-400" },
  { title: "Malaysia Pavilion, Osaka", category: "Events", src: "/story/osaka-2025/osaka-2025-2.jpg", gradient: "from-red-500 to-rose-400" },
  { title: "iGEM 2025 — Year Two", category: "Events", src: "/story/igem-2025/igem-2025-1.jpg", gradient: "from-green-600 to-lime-400" },
  { title: "iGEM 2025 Booth", category: "Events", src: "/story/igem-2025/igem-2025-2.jpg", gradient: "from-lime-600 to-green-400" },
  { title: "iGEM 2025 Demo Floor", category: "Events", src: "/story/igem-2025/igem-2025-3.jpg", gradient: "from-teal-600 to-green-400" },
  { title: "Visitors at iGEM 2025", category: "Events", src: "/story/igem-2025/igem-2025-5.jpg", gradient: "from-emerald-500 to-lime-400" },

  // --- Games ---
  { title: "FinBlox Launch Day", category: "Games", src: "/story/finblox/finblox-1.jpg", gradient: "from-violet-600 to-fuchsia-500" },
  { title: "FinBlox in Action", category: "Games", src: "/story/finblox/finblox-2.jpg", gradient: "from-indigo-600 to-violet-500" },
  { title: "FinBlox Players", category: "Games", src: "/story/finblox/finblox-3.jpg", gradient: "from-purple-600 to-violet-400" },
  { title: "Keluar Sekejap — Virtual Set", category: "Games", src: "/story/keluar-sekejap/keluar-sekejap-1.jpg", gradient: "from-teal-500 to-emerald-400" },
  { title: "Keluar Sekejap EP136", category: "Games", src: "/story/keluar-sekejap/keluar-sekejap-3.jpg", gradient: "from-cyan-500 to-teal-400" },
  { title: "EP136 Production", category: "Games", src: "/story/keluar-sekejap/keluar-sekejap-4.jpg", gradient: "from-sky-500 to-cyan-400" },

  // --- Workshops ---
  { title: "GameCraft Bootcamps 2026 — Certificate Day", category: "Workshops", src: "/story/gamecraft-uitm/gamecraft-uitm-1.jpg", gradient: "from-blue-600 to-cyan-400" },
  { title: "GameCraft Bootcamp in Session", category: "Workshops", src: "/story/gamecraft-uitm/gamecraft-uitm-2.jpg", gradient: "from-indigo-600 to-blue-400" },
  { title: "GameCraft Participants", category: "Workshops", src: "/story/gamecraft-uitm/gamecraft-uitm-3.jpg", gradient: "from-blue-500 to-indigo-400" },
  { title: "GameCraft Bootcamps 2026 Poster", category: "Workshops", src: "/story/gamecraft-uitm/gamecraft-uitm-4.jpg", gradient: "from-sky-600 to-blue-400" },
  { title: "Nexus International School", category: "Workshops", src: "/story/nexus/nexus-1.jpg", gradient: "from-amber-500 to-orange-400" },
  { title: "Nexus Session", category: "Workshops", src: "/story/nexus/nexus-2.jpg", gradient: "from-orange-500 to-amber-400" },
  { title: "Nexus Workshop", category: "Workshops", src: "/story/nexus/nexus-3.jpg", gradient: "from-yellow-500 to-orange-400" },
  { title: "Nexus Students", category: "Workshops", src: "/story/nexus/nexus-4.jpg", gradient: "from-amber-600 to-yellow-400" },

  // --- Partnerships ---
  { title: "MyCelik Network MOU Signing", category: "Partnerships", src: "/story/mycelik-mou/mycelik-mou-1.jpg", gradient: "from-fuchsia-500 to-pink-400" },
  { title: "D'Blox × MyCelik Network", category: "Partnerships", src: "/story/mycelik-mou/mycelik-mou-2.jpg", gradient: "from-pink-500 to-rose-400" },
  { title: "The Team on D-Day", category: "Partnerships", src: "/story/finblox/finblox-4.jpg", gradient: "from-violet-500 to-purple-400" },
];
