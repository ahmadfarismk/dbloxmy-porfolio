"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ImagePlus } from "lucide-react";

import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
} from "@/content/gallery";
import { cn } from "@/lib/utils";

type Filter = "All" | GalleryCategory;

export function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const reduceMotion = useReducedMotion();

  const filtered =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <div>
      {/* Category filter */}
      <div
        role="group"
        aria-label="Filter gallery by category"
        className="mb-10 flex flex-wrap justify-center gap-2"
      >
        {(["All", ...galleryCategories] as Filter[]).map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={filter === category}
            onClick={() => setFilter(category)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              filter === category
                ? "border-primary bg-primary/15 text-violet-300"
                : "border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.ul layout={!reduceMotion} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.li
              key={item.title}
              layout={!reduceMotion}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3 }}
            >
              <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                {item.src ? (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className={cn(
                      "flex h-full w-full items-center justify-center bg-gradient-to-br transition-transform duration-500 group-hover:scale-105",
                      item.gradient
                    )}
                  >
                    <ImagePlus className="size-8 text-white/40" aria-hidden />
                  </div>
                )}
                {/* Caption overlay */}
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-10">
                  <p className="font-display text-sm font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="text-xs text-white/70">{item.category}</p>
                </figcaption>
              </figure>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
