/**
 * Global site configuration.
 * Replace placeholder copy, links, and socials with real company data.
 */

export interface NavLink {
  label: string;
  href: string;
}

export const siteConfig = {
  name: "D'Blox",
  tagline: "Roblox Game Development Studio",
  description:
    "D'Blox is a full-service Roblox game development studio building high-quality experiences, scalable multiplayer systems, monetization features, and LiveOps for brands and publishers.",
  url: "https://dblox.example.com", // TODO: real domain
  email: "hello@dblox.example.com", // TODO: real email
  cta: {
    primary: { label: "Book a Discovery Call", href: "/contact" },
    secondary: { label: "View Our Work", href: "/projects" },
  },
  socials: {
    discord: "#", // TODO
    twitter: "#", // TODO
    youtube: "#", // TODO
    roblox: "#", // TODO
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
