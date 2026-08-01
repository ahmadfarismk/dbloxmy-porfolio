/**
 * Gallery items — set `src` to a file in /public/gallery/ to show a real
 * image; while null a styled gradient placeholder renders.
 */

export type GalleryCategory =
  | "Events"
  | "Games"
  | "UI Design"
  | "Behind the Scenes";

export const galleryCategories: GalleryCategory[] = [
  "Events",
  "Games",
  "UI Design",
  "Behind the Scenes",
];

export interface GalleryItem {
  title: string;
  category: GalleryCategory;
  src: string | null;
  /** Tailwind gradient classes for the placeholder tile */
  gradient: string;
}

export const galleryItems: GalleryItem[] = [
  { title: "iGEM 2024 Booth", category: "Events", src: null, gradient: "from-emerald-600 to-cyan-500" },
  { title: "Neon City Gameplay", category: "Games", src: null, gradient: "from-violet-600 to-fuchsia-500" },
  { title: "Finblox HUD Design", category: "UI Design", src: null, gradient: "from-cyan-500 to-blue-600" },
  { title: "World Expo Osaka", category: "Events", src: null, gradient: "from-rose-500 to-orange-400" },
  { title: "Lobby Environment", category: "Games", src: null, gradient: "from-indigo-600 to-violet-500" },
  { title: "Team Build Night", category: "Behind the Scenes", src: null, gradient: "from-slate-600 to-slate-400" },
  { title: "Quest Menu Concepts", category: "UI Design", src: null, gradient: "from-fuchsia-500 to-pink-400" },
  { title: "MOU Signing Day", category: "Events", src: null, gradient: "from-amber-500 to-yellow-400" },
  { title: "Podcast World Set", category: "Games", src: null, gradient: "from-teal-500 to-emerald-400" },
  { title: "Greybox Playtest", category: "Behind the Scenes", src: null, gradient: "from-blue-600 to-indigo-400" },
  { title: "Shop UI Iterations", category: "UI Design", src: null, gradient: "from-purple-600 to-violet-400" },
  { title: "iGEM 2025 Return", category: "Events", src: null, gradient: "from-green-600 to-lime-400" },
];
