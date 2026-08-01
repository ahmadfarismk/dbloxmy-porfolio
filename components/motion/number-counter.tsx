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
  /** Animation duration hint (spring-based, approximate) */
  duration?: number;
}

export function NumberCounter({
  value,
  prefix = "",
  suffix = "",
  className,
}: NumberCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    damping: 28,
    stiffness: 80,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    if (reduceMotion) {
      if (ref.current) {
        ref.current.textContent = `${prefix}${value.toLocaleString()}${suffix}`;
      }
      return;
    }
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(
          latest
        ).toLocaleString()}${suffix}`;
      }
    });
    return unsubscribe;
  }, [spring, prefix, suffix, reduceMotion, value]);

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${value}${suffix}`}>
      {reduceMotion ? `${prefix}${value.toLocaleString()}${suffix}` : `${prefix}0${suffix}`}
    </span>
  );
}
