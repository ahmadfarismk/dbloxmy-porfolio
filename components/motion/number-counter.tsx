"use client";

import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

interface NumberCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  /** Skip thousands separators — use for years (2025, not 2,025) */
  plain?: boolean;
}

export function NumberCounter({
  value,
  prefix = "",
  suffix = "",
  className,
  plain = false,
}: NumberCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 28, stiffness: 80 });

  const format = (n: number) =>
    `${prefix}${plain ? String(n) : n.toLocaleString()}${suffix}`;

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    if (reduceMotion) {
      if (ref.current) ref.current.textContent = format(value);
      return;
    }
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) ref.current.textContent = format(Math.round(latest));
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spring, prefix, suffix, reduceMotion, value, plain]);

  return (
    <span ref={ref} className={className} aria-label={format(value)}>
      {reduceMotion ? format(value) : format(0)}
    </span>
  );
}
