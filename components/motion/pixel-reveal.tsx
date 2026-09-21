"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import {
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import { useHydratedReducedMotion } from "@/components/motion/use-hydrated-reduced-motion";

import { cn } from "@/lib/utils";

/**
 * Pixel reveal for images, drawn on a <canvas> overlay (canvas rather than
 * an SVG filter because SVG pixelate filters on HTML content are unreliable
 * in iOS Safari).
 *
 *  mode="pixelate" — scroll-scrubbed: the image starts as large blocks and
 *                    resolves to full detail as it scrolls into place.
 *                    Scrolling back re-pixelates it.
 *  mode="blocks"   — one-shot: a mosaic of dark, brand-tinted squares shrinks
 *                    away in a diagonal sweep when the image enters view,
 *                    echoing the squares breaking off the D'Blox mark.
 *
 * The real next/image stays underneath, so optimisation, lazy loading and
 * alt text are unaffected. The overlay is decorative and aria-hidden.
 * Parent must be `relative` with a defined size.
 */

type Mode = "pixelate" | "blocks";

const BLOCK_GROUT = "#060A16";
const BLOCK_PALETTE = [
  "#111A33",
  "#18203F",
  "#1F1A4A",
  "#12293F",
  "#1A2342",
  "#0F1730",
];
const BLOCK_SPARKS = ["#7C3AED", "#22D3EE", "#A78BFA"];
/** Smallest block size worth drawing — below this a mosaic just looks blurry */
const MIN_VISIBLE_PX = 6;

/** Deterministic per-cell hash so static and animated mosaics match exactly */
function cellHash(r: number, c: number) {
  let h = (r * 73856093) ^ (c * 19349663);
  h = Math.imul(h ^ (h >>> 13), 0x5bd1e995);
  return ((h ^ (h >>> 15)) >>> 0) / 4294967295;
}

function cellColor(r: number, c: number) {
  const h = cellHash(r, c);
  if (h < 0.07) return BLOCK_SPARKS[Math.floor((h / 0.07) * BLOCK_SPARKS.length)];
  return BLOCK_PALETTE[Math.floor(h * 997) % BLOCK_PALETTE.length];
}

export function PixelReveal({
  src,
  alt,
  sizes,
  mode = "pixelate",
  className,
  imgClassName,
  initialPixelSize = 28,
  blockSize = 22,
  priority,
}: {
  src: string;
  alt: string;
  sizes: string;
  mode?: Mode;
  className?: string;
  imgClassName?: string;
  initialPixelSize?: number;
  blockSize?: number;
  priority?: boolean;
}) {
  const reduceMotion = useHydratedReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const offscreenRef = useRef<HTMLCanvasElement | null>(null);
  const lastPx = useRef(-1);
  const blocksDone = useRef(false);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start 0.95", "center 0.55"],
  });
  const inView = useInView(wrapRef, { once: true, amount: 0.35 });

  /** Size the canvas to its box at device resolution; returns CSS dims. */
  const prepareCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return null;
    const W = wrap.clientWidth;
    const H = wrap.clientHeight;
    if (!W || !H) return null;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cw = Math.round(W * dpr);
    const ch = Math.round(H * dpr);
    if (canvas.width !== cw || canvas.height !== ch) {
      canvas.width = cw;
      canvas.height = ch;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx, W, H };
  }, []);

  /* ---------------------------- pixelate --------------------------- */

  // Exponential from initialPixelSize down to MIN_VISIBLE_PX, then snap to
  // sharp. Blocks of 2–5px just read as a blurry photo, so we skip them: the
  // image is always either clearly pixelated or fully resolved, and the
  // canvas crossfades out at the snap.
  const pxFor = useCallback(
    (p: number) => {
      if (p >= 1) return 1;
      const t = Math.max(p, 0);
      const ratio = MIN_VISIBLE_PX / initialPixelSize;
      return Math.max(MIN_VISIBLE_PX, Math.round(initialPixelSize * Math.pow(ratio, t)));
    },
    [initialPixelSize]
  );

  const drawPixelated = useCallback(
    (px: number, force = false) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      if (!force && px === lastPx.current) return;
      lastPx.current = px;

      if (px <= 1) {
        canvas.style.opacity = "0";
        return;
      }
      canvas.style.opacity = "1";

      // Fallback lookup: a cached image can finish loading before hydration,
      // in which case onLoad never reaches us.
      const img =
        imgRef.current ?? wrapRef.current?.querySelector("img") ?? null;
      if (!img || !img.complete || !img.naturalWidth) return;
      imgRef.current = img;
      const prepared = prepareCanvas();
      if (!prepared) return;
      const { ctx, W, H } = prepared;

      // object-cover source rect
      const scale = Math.max(W / img.naturalWidth, H / img.naturalHeight);
      const sw = W / scale;
      const sh = H / scale;
      const sx = (img.naturalWidth - sw) / 2;
      const sy = (img.naturalHeight - sh) / 2;

      const cols = Math.ceil(W / px);
      const rows = Math.ceil(H / px);
      const off = offscreenRef.current ?? document.createElement("canvas");
      offscreenRef.current = off;
      off.width = cols;
      off.height = rows;
      const octx = off.getContext("2d");
      if (!octx) return;
      octx.imageSmoothingEnabled = true;
      octx.imageSmoothingQuality = "high";
      octx.drawImage(img, sx, sy, sw, sh, 0, 0, cols, rows);

      ctx.imageSmoothingEnabled = false;
      ctx.clearRect(0, 0, W, H);
      ctx.drawImage(off, 0, 0, cols, rows, 0, 0, cols * px, rows * px);
      canvas.style.background = "transparent";
    },
    [prepareCanvas]
  );

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (mode === "pixelate" && !reduceMotion) drawPixelated(pxFor(p));
  });

  /* ----------------------------- blocks ---------------------------- */

  const drawBlocksStatic = useCallback(() => {
    const prepared = prepareCanvas();
    if (!prepared) return;
    const { ctx, W, H } = prepared;
    const cols = Math.ceil(W / blockSize);
    const rows = Math.ceil(H / blockSize);
    ctx.fillStyle = BLOCK_GROUT;
    ctx.fillRect(0, 0, W, H);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        ctx.fillStyle = cellColor(r, c);
        ctx.fillRect(c * blockSize + 1, r * blockSize + 1, blockSize - 1, blockSize - 1);
      }
    }
    if (canvasRef.current) canvasRef.current.style.background = "transparent";
  }, [blockSize, prepareCanvas]);

  useEffect(() => {
    if (mode !== "blocks" || reduceMotion || !inView || blocksDone.current) return;
    const prepared = prepareCanvas();
    const canvas = canvasRef.current;
    if (!prepared || !canvas) return;
    const { ctx, W, H } = prepared;

    const cols = Math.ceil(W / blockSize);
    const rows = Math.ceil(H / blockSize);
    const DUR = 0.32;
    const cells: { x: number; y: number; delay: number; color: string }[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // diagonal sweep from the top-left, roughened with noise
        const sweep = ((c / cols + r / rows) / 2) * 0.55;
        cells.push({
          x: c * blockSize,
          y: r * blockSize,
          delay: sweep + Math.random() * 0.28,
          color: cellColor(r, c),
        });
      }
    }

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = (now - start) / 1000;
      ctx.clearRect(0, 0, W, H);
      let alive = false;
      for (const cell of cells) {
        const local = (t - cell.delay) / DUR;
        if (local >= 1) continue;
        alive = true;
        const k = local <= 0 ? 1 : 1 - local * local * local; // ease-in cubic shrink
        // Grout is not redrawn, so the image cracks through the seams on the
        // first frame, then each tile shrinks away.
        const size = (blockSize - 1) * k;
        const inset = 1 + (blockSize - 1 - size) / 2;
        ctx.fillStyle = cell.color;
        ctx.fillRect(cell.x + inset, cell.y + inset, size, size);
      }
      if (alive) {
        frame = requestAnimationFrame(tick);
      } else {
        blocksDone.current = true;
        canvas.style.display = "none";
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [mode, reduceMotion, inView, blockSize, prepareCanvas]);

  /* ------------------------ mount + resize ------------------------- */

  const redraw = useCallback(() => {
    if (reduceMotion) return;
    if (mode === "pixelate") drawPixelated(pxFor(scrollYProgress.get()), true);
    else if (!inView && !blocksDone.current) drawBlocksStatic();
  }, [reduceMotion, mode, drawPixelated, pxFor, scrollYProgress, inView, drawBlocksStatic]);

  useEffect(() => {
    redraw();
    const wrap = wrapRef.current;
    if (!wrap) return;
    const ro = new ResizeObserver(() => redraw());
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [redraw]);

  return (
    <div ref={wrapRef} className={cn("absolute inset-0 overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", imgClassName)}
        onLoad={(e) => {
          imgRef.current = e.currentTarget;
          if (mode === "pixelate") redraw();
        }}
      />
      {!reduceMotion && (
        <canvas
          ref={canvasRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full bg-surface transition-opacity duration-300"
        />
      )}
    </div>
  );
}
