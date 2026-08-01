/**
 * Testimonials — replace with real quotes.
 * `avatar` accepts a /public path; while null an initialed avatar renders.
 */

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string | null;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "D'Blox rebuilt our core loop and retention doubled within a season. They think like a studio, not a contractor.",
    name: "Alex Rivera",
    role: "Studio Owner",
    company: "Pixel Forge Games",
    avatar: null,
  },
  {
    quote:
      "The team shipped our brand experience in eight weeks — on budget, on brand, and beyond the KPIs we set.",
    name: "Priya Sharma",
    role: "Brand Partnerships Lead",
    company: "Nova Media Group",
    avatar: null,
  },
  {
    quote:
      "Their LiveOps calendar keeps our community engaged month after month. Events go out on time, every time.",
    name: "Marcus Chen",
    role: "Community Manager",
    company: "Orbit Interactive",
    avatar: null,
  },
];
