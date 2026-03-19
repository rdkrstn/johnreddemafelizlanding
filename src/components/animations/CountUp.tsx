"use client";

import { useEffect, useRef } from "react";
import {
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

interface CountUpProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  once?: boolean;
}

export default function CountUp({
  end,
  prefix = "",
  suffix = "",
  duration = 2,
  className = "",
  once = true,
}: CountUpProps) {
  const prefersReducedMotion = useReducedMotion();
  const spanRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: once,
    threshold: 0.3,
  });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  const rounded = useTransform(springValue, (latest) => Math.round(latest));

  // Trigger the animation when the element scrolls into view
  useEffect(() => {
    if (prefersReducedMotion) return;

    if (inView && !hasAnimated.current) {
      motionValue.set(end);
      if (once) {
        hasAnimated.current = true;
      }
    } else if (!inView && !once) {
      motionValue.set(0);
    }
  }, [inView, end, motionValue, once, prefersReducedMotion]);

  // Subscribe to rounded value changes and update the DOM directly.
  // This avoids re-renders on every animation frame for smooth performance.
  useEffect(() => {
    if (prefersReducedMotion) return;

    const unsubscribe = rounded.on("change", (latest) => {
      if (spanRef.current) {
        spanRef.current.textContent = `${prefix}${latest.toLocaleString()}${suffix}`;
      }
    });
    return unsubscribe;
  }, [rounded, prefix, suffix, prefersReducedMotion]);

  // Display the final value immediately when reduced motion is preferred
  if (prefersReducedMotion) {
    return (
      <span className={className}>
        {prefix}
        {end.toLocaleString()}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={inViewRef} className={className}>
      <span ref={spanRef}>
        {prefix}0{suffix}
      </span>
    </span>
  );
}
