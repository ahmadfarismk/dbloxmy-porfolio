/**
 * Global site configuration.
 */

export interface NavLink {
  label: string;
  href: string;
}

export const siteConfig = {
  name: "D'Blox",
  tagline: "Roblox Game Development Studio",
  description:
    "D'Blox is a Malaysian Roblox game development studio building playable experiences, brand virtualizations, educational games, and hands-on workshops.",
  url: "https://dblox.my",
  email: "dbloxmy@gmail.com",
  /** Primary contact channel — opens a WhatsApp chat */
  whatsapp: "https://wa.link/olkc48",
  instagram: "https://www.instagram.com/dbloxmy/",
  cta: {
    primary: { label: "Chat With Us", href: "/contact" },
    secondary: { label: "View Our Work", href: "/projects" },
  },
  socials: {
    whatsapp: "https://wa.link/olkc48",
    instagram: "https://www.instagram.com/dbloxmy/",
    email: "mailto:dbloxmy@gmail.com",
    roblox: "https://www.roblox.com/games/140407575953529/FinBlox",
    // TODO: add Discord / TikTok / YouTube when available
  },
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Our Story", href: "/story" },
  { label: "Contact", href: "/contact" },
];
