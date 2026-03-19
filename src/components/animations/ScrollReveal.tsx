"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion, type TargetAndTransition } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: "fade" | "slide-up" | "slide-left" | "slide-right" | "scale" | "blur";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const hiddenVariants: Record<string, TargetAndTransition> = {
  fade: { opacity: 0 },
  "slide-up": { opacity: 0, y: 40 },
  "slide-left": { opacity: 0, x: -40 },
  "slide-right": { opacity: 0, x: 40 },
  scale: { opacity: 0, scale: 0.95 },
  blur: { opacity: 0, filter: "blur(8px)" },
};

const visibleBase = {
  opacity: 1,
  x: 0,
  y: 0,
  scale: 1,
  filter: "blur(0px)",
};

export default function ScrollReveal({
  children,
  variant = "slide-up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={hiddenVariants[variant]}
      whileInView={{
        ...visibleBase,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1],
        },
      }}
      viewport={{ once, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
