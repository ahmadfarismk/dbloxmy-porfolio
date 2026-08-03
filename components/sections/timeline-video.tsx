"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AlertCircle, Play } from "lucide-react";

import type { TimelineVideo } from "@/content/timeline";

/**
 * Inline video highlight. Shows the poster frame until the visitor hits
 * play, so nothing downloads on page load. If the browser can't decode
 * any provided source (e.g. an HEVC .mov in Chrome), a clear notice
 * replaces the player instead of a silent black box.
 */
export function TimelineVideoPlayer({ video }: { video: TimelineVideo }) {
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handlePlay() {
    setPlaying(true);
    // Let the element mount before requesting playback
    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => setFailed(true));
    });
  }

  return (
    <figure className="mt-4 overflow-hidden rounded-xl border border-border bg-surface">
      <div className="relative aspect-video">
        {!playing ? (
          <button
            type="button"
            onClick={handlePlay}
            className="group/play absolute inset-0 h-full w-full"
            aria-label={`Play video: ${video.caption}`}
          >
            <Image
              src={video.poster}
              alt=""
              fill
              sizes="(max-width: 768px) 90vw, 420px"
              className="object-cover"
            />
            <span className="absolute inset-0 bg-black/40 transition-colors group-hover/play:bg-black/25" />
            <span className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary/90 shadow-lg transition-transform duration-300 group-hover/play:scale-110">
              <Play className="ml-0.5 size-6 fill-white text-white" aria-hidden />
            </span>
          </button>
        ) : failed ? (
          <div className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center">
            <AlertCircle className="size-6 text-amber-400" aria-hidden />
            <p className="text-sm font-medium">
              This browser can&rsquo;t play the video format
            </p>
            <a
              href={video.fallbackSrc ?? video.src}
              download
              className="text-xs text-accent underline underline-offset-4"
            >
              Download the clip instead
            </a>
          </div>
        ) : (
          <video
            ref={videoRef}
            controls
            playsInline
            poster={video.poster}
            preload="metadata"
            className="h-full w-full bg-black object-contain"
            onError={() => setFailed(true)}
          >
            <source src={video.src} type="video/mp4" />
            {video.fallbackSrc ? (
              <source src={video.fallbackSrc} type="video/quicktime" />
            ) : null}
          </video>
        )}
      </div>
      <figcaption className="px-3 py-2 text-center text-[11px] text-muted-foreground">
        {video.caption}
      </figcaption>
    </figure>
  );
}
