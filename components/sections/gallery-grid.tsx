"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, ImagePlus, X } from "lucide-react";

import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
  type GalleryItem,
} from "@/content/gallery";
import { cn } from "@/lib/utils";

type Filter = "All" | GalleryCategory;

function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (delta: number) => void;
}) {
  const item = items[index];

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate(1);
      if (e.key === "ArrowLeft") onNavigate(-1);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNavigate]);

  if (!item?.src) return null;

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image"
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
      >
        <X className="size-5" />
      </button>

      {items.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(-1);
            }}
            className="absolute left-3 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(1);
            }}
            className="absolute right-3 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <ChevronRight className="size-6" />
          </button>
        </>
      )}

      <motion.figure
        key={item.src}
        className="relative w-full max-w-4xl"
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={item.src}
          alt={item.title}
          width={1600}
          height={1200}
          sizes="(max-width: 896px) 100vw, 896px"
          className="max-h-[80vh] w-full rounded-xl object-contain"
        />
        <figcaption className="mt-3 text-center text-sm text-white/80">
          {item.title}
          <span className="ml-2 text-white/50">
            {index + 1} / {items.length}
          </span>
        </figcaption>
      </motion.figure>
    </motion.div>
  );
}

export function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const filtered =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  const navigate = useCallback(
    (delta: number) =>
      setLightboxIndex((current) => {
        if (current === null) return current;
        const total = filtered.length;
        return (current + delta + total) % total;
      }),
    [filtered.length]
  );

  function selectFilter(category: Filter) {
    setFilter(category);
    setLightboxIndex(null);
  }

  return (
    <div>
      {/* Category filter */}
      <div
        role="group"
        aria-label="Filter gallery by category"
        className="mb-10 flex flex-wrap justify-center gap-2"
      >
        {(["All", ...galleryCategories] as Filter[]).map((category) => {
          const count =
            category === "All"
              ? galleryItems.length
              : galleryItems.filter((i) => i.category === category).length;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={filter === category}
              onClick={() => selectFilter(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                filter === category
                  ? "border-primary bg-primary/15 text-violet-300"
                  : "border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
              )}
            >
              {category}
              <span className="ml-1.5 text-xs opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.ul
        layout={!reduceMotion}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <motion.li
              key={item.title}
              layout={!reduceMotion}
              initial={
                reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94 }
              }
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3 }}
            >
              <button
                type="button"
                onClick={() => item.src && setLightboxIndex(i)}
                disabled={!item.src}
                aria-label={
                  item.src ? `View larger: ${item.title}` : item.title
                }
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border disabled:cursor-default"
              >
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
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4 pt-10 text-left">
                  <span className="block font-display text-sm font-semibold text-white">
                    {item.title}
                  </span>
                  <span className="block text-xs text-white/70">
                    {item.category}
                  </span>
                </span>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={filtered}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={navigate}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
