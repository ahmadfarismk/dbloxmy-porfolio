"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Like framer-motion's useReducedMotion, but guaranteed `false` on the server
 * AND on the first client render, flipping to the real preference only after
 * mount.
 *
 * Use this whenever reduced motion changes what gets RENDERED (different
 * elements or text). useReducedMotion can already be `true` on the first
 * client render while the server rendered `false`, which breaks hydration
 * (React error #418) for reduced-motion visitors. Components that only use the
 * preference to tweak animation values can keep useReducedMotion.
 */
export function useHydratedReducedMotion(): boolean {
  const prefers = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted && Boolean(prefers);
}
