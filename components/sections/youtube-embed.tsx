"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

import type { ProjectVideo } from "@/content/projects";

/**
 * Lightweight YouTube facade: shows a local poster until the visitor
 * clicks, then swaps in the privacy-friendly nocookie iframe. Nothing is
 * requested from YouTube on page load.
 */
export function YouTubeEmbed({ video }: { video: ProjectVideo }) {
  const [active, setActive] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-black">
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group/yt absolute inset-0 h-full w-full"
          aria-label={`Play video: ${video.title}`}
        >
          <Image
            src={video.poster}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 640px"
            className="object-cover"
          />
          <span className="absolute inset-0 bg-black/45 transition-colors group-hover/yt:bg-black/30" />
          <span className="absolute left-1/2 top-1/2 flex h-12 w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-[#f00] shadow-lg transition-transform duration-300 group-hover/yt:scale-110">
            <Play className="ml-0.5 size-6 fill-white text-white" aria-hidden />
          </span>
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-10 text-left text-sm font-medium text-white">
            {video.title}
          </span>
        </button>
      )}
    </div>
  );
}
