import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/site/logo";
import { navLinks, siteConfig } from "@/content/site";

const socialLinks = [
  { label: "Discord", href: siteConfig.socials.discord },
  { label: "Twitter / X", href: siteConfig.socials.twitter },
  { label: "YouTube", href: siteConfig.socials.youtube },
  { label: "Roblox", href: siteConfig.socials.roblox },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container-site py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Connect
            </h3>
            <ul className="space-y-2.5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-accent transition-colors hover:text-accent/80"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p>
            Not affiliated with Roblox Corporation. Roblox is a trademark of
            Roblox Corporation.
          </p>
        </div>
      </div>
    </footer>
  );
}
