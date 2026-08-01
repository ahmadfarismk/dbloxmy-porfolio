import type { Metadata } from "next";
import { Clock, Mail, MessageSquare } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a discovery call with D'Blox — tell us about your Roblox game, brand experience, or idea and we'll respond within 48 hours.",
};

const contactChannels = [
  {
    icon: Mail,
    title: "Email",
    description: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MessageSquare,
    title: "Discord",
    description: "Join our server and say hi",
    href: siteConfig.socials.discord,
  },
  {
    icon: Clock,
    title: "Response time",
    description: "Within 48 hours, usually faster",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Something"
        highlight="Players Remember"
        description="Tell us about your game, brand, or idea — we'll come back with an honest take on scope, timeline, and budget."
      />

      <section className="pb-24 md:pb-32">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            {/* Channels */}
            <FadeIn direction="right">
              <div className="space-y-4">
                {contactChannels.map((channel) => (
                  <Card
                    key={channel.title}
                    className="transition-colors duration-300 hover:border-primary/40"
                  >
                    <CardContent className="flex items-center gap-4 p-5 pt-5">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-violet-300">
                        <channel.icon className="size-5" aria-hidden />
                      </div>
                      <div>
                        <h2 className="font-display text-base font-semibold">
                          {channel.title}
                        </h2>
                        {channel.href ? (
                          <a
                            href={channel.href}
                            className="text-sm text-accent hover:underline"
                          >
                            {channel.description}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">
                            {channel.description}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <div className="rounded-2xl border border-dashed border-border bg-card/50 p-5 text-sm leading-relaxed text-muted-foreground">
                  Prefer a call? Mention your timezone in the message and
                  we&rsquo;ll send a booking link.
                </div>
              </div>
            </FadeIn>

            {/* Form */}
            <FadeIn direction="left" delay={0.1}>
              <Card>
                <CardContent className="p-6 pt-6 sm:p-8 sm:pt-8">
                  <ContactForm />
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
