import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Gem,
  HeartHandshake,
  LineChart,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion/fade-in";
import { NumberCounter } from "@/components/motion/number-counter";
import { PageHero } from "@/components/sections/page-hero";
import { teamMembers } from "@/content/team";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet D'Blox — a Malaysian Roblox game development studio founded in 2024, building experiences for players, brands, and publishers.",
};

const values = [
  {
    icon: Gem,
    title: "Craft First",
    description:
      "Polish is not a phase at the end — every build we ship is something we'd play ourselves.",
  },
  {
    icon: Users,
    title: "Player-Centered",
    description:
      "Retention comes from respect. We design economies and events that reward players, never exploit them.",
  },
  {
    icon: LineChart,
    title: "Data-Driven",
    description:
      "Every decision is backed by telemetry — playtests, funnels, and dashboards guide each iteration.",
  },
  {
    icon: HeartHandshake,
    title: "True Partnership",
    description:
      "Brands and studios work directly with the people building their game. No layers, no surprises.",
  },
];

/** Replace with real numbers when available */
const stats = [
  { label: "Founded", value: 2024 },
  { label: "Projects Delivered", value: 6, suffix: "+" },
  { label: "Expo Appearances", value: 3 },
  { label: "Brand Partnerships", value: 2 },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="The Studio Behind the"
        highlight="Experiences"
        description="D'Blox is a Malaysian Roblox game development studio — a small team with big-production standards, building for players, brands, and publishers."
      />

      {/* Stats */}
      <section className="pb-20">
        <div className="container-site">
          <FadeIn>
            <dl className="mx-auto grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card p-5 text-center"
                >
                  <dd className="font-display text-3xl font-bold">
                    <NumberCounter value={stat.value} suffix={stat.suffix} />
                  </dd>
                  <dt className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </section>

      {/* Mission */}
      <section className="border-y border-border/60 bg-secondary/20 py-20 md:py-28">
        <div className="container-site">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Our mission
              </p>
              <p className="font-display text-2xl font-medium leading-snug sm:text-3xl">
                Prove that a studio from Malaysia can build{" "}
                <span className="text-gradient">world-class Roblox games</span>{" "}
                — and take partners along for the ride.
              </p>
              <div className="mt-8">
                <Button asChild variant="outline">
                  <Link href="/story">
                    Read our full story
                    <ArrowRight aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <FadeIn>
            <h2 className="mb-12 text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
              What we stand for
            </h2>
          </FadeIn>
          <FadeInStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <FadeInItem key={value.title}>
                <Card className="h-full transition-colors duration-300 hover:border-primary/40">
                  <CardContent className="p-6 pt-6">
                    <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/15 text-violet-300">
                      <value.icon className="size-5" aria-hidden />
                    </div>
                    <h3 className="mb-2 font-display text-lg font-semibold">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-border/60 bg-secondary/20 py-20 md:py-28">
        <div className="container-site">
          <FadeIn>
            <h2 className="mb-4 text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
              The team
            </h2>
            <p className="mx-auto mb-12 max-w-md text-center text-sm text-muted-foreground md:text-base">
              Small crew, shipped titles. Edit{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                content/team.ts
              </code>{" "}
              to add the real roster.
            </p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {teamMembers.map((member) => (
              <FadeInItem key={member.name + member.role}>
                <div className="flex flex-col items-center text-center">
                  {member.avatar ? (
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={112}
                      height={112}
                      className="mb-4 size-28 rounded-full object-cover"
                    />
                  ) : (
                    <span
                      aria-hidden
                      className="mb-4 flex size-28 items-center justify-center rounded-full bg-gradient-to-br from-violet-600/60 to-cyan-500/60 font-display text-2xl font-bold text-white"
                    >
                      {initials(member.name)}
                    </span>
                  )}
                  <h3 className="font-display text-base font-semibold">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {member.role}
                  </p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>
    </>
  );
}
