"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

/**
 * Contact form — currently composes an email in the visitor's mail app
 * via mailto (no backend needed). Swap `handleSubmit` for an API route
 * or form service (e.g. Resend, Formspree) when ready.
 */

const projectTypes = [
  "New Roblox game",
  "Brand / media virtualization",
  "Educational or serious game",
  "Workshop or bootcamp",
  "Expo or event activation",
  "Something else",
];

const inputClasses =
  "w-full rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[${projectType}] Project inquiry from ${name}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\n${message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-1.5 block text-sm font-medium"
          >
            Name
          </label>
          <input
            id="contact-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="mb-1.5 block text-sm font-medium"
          >
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-type"
          className="mb-1.5 block text-sm font-medium"
        >
          What are you building?
        </label>
        <select
          id="contact-type"
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          className={inputClasses}
        >
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-sm font-medium"
        >
          Tell us about it
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Goals, timeline, references — anything that helps us understand the project."
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg">
          <Send aria-hidden />
          Send inquiry
        </Button>
        <span className="text-xs text-muted-foreground">
          or{" "}
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-emerald-400 underline underline-offset-4"
          >
            message us on WhatsApp
          </a>{" "}
          for a faster reply
        </span>
      </div>
      <p className="text-xs text-muted-foreground">
        Submitting opens your email app with the message pre-filled.
      </p>
    </form>
  );
}
