import { TextFill } from "@/components/motion/text-fill";

/**
 * Statement section: one sentence that fills with light as you scroll.
 * Every claim here maps to shipped work (FinBlox, Jejak Wahyu, PKSK Onboard).
 */
export function Manifesto() {
  return (
    <section aria-label="What drives us" className="py-28 md:py-40">
      <div className="container-site">
        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Why D&rsquo;Blox
        </p>
        <TextFill
          className="max-w-5xl font-display text-3xl font-semibold leading-[1.2] tracking-tight sm:text-4xl md:text-5xl"
          text="We turn **classrooms, brands and big ideas** into Roblox worlds people actually want to play — financial literacy for varsity students, the Sirah across eight chapters, exam prep with Sang Kancil. Built in Malaysia, **shipped under our own name.**"
        />
      </div>
    </section>
  );
}
