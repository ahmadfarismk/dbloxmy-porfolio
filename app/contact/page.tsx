import type { Metadata } from "next";
import { Clock, Instagram, Mail, MessageCircle } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a discovery call with D'Blox — tell us about your Roblox game, brand experience, or idea and we'll respond within 48 hours.",
};

const contactChannels = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Chat with us directly — fastest reply",
    href: siteConfig.whatsapp,
    external: true,
    highlight: true,
  },
  {
    icon: Mail,
    title: "Email",
    description: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
    highlight: false,
  },
  {
    icon: Instagram,
    title: "Instagram",
    description: "@dbloxmy — see what we are building",
    href: siteConfig.socials.instagram,
    external: true,
    highlight: false,
  },
  {
    icon: Clock,
    title: "Response time",
    description: "Within 48 hours, usually faster",
    href: null,
    external: false,
    highlight: false,
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
                    className={cn(
                      "transition-colors duration-300 hover:border-primary/40",
                      channel.highlight && "border-success/40 bg-success/5"
                    )}
                  >
                    <CardContent className="flex items-center gap-4 p-5 pt-5">
                      <div
                        className={cn(
                          "flex size-11 shrink-0 items-center justify-center rounded-xl",
                          channel.highlight
                            ? "bg-success/15 text-emerald-400"
                            : "bg-primary/15 text-violet-300"
                        )}
                      >
                        <channel.icon className="size-5" aria-hidden />
                      </div>
                      <div>
                        <h2 className="font-display text-base font-semibold">
                          {channel.title}
                        </h2>
                        {channel.href ? (
                          <a
                            href={channel.href}
                            {...(channel.external
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                            className={cn(
                              "text-sm hover:underline",
                              channel.highlight
                                ? "text-emerald-400"
                                : "text-accent"
                            )}
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

                {/* Prominent WhatsApp CTA */}
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-[#25D366] text-black hover:bg-[#25D366]/90"
                >
                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle aria-hidden />
                    Chat on WhatsApp
                  </a>
                </Button>

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
