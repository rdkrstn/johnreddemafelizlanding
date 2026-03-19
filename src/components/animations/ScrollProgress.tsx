"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

interface ScrollProgressProps {
  color?: string;
  height?: number;
}

export default function ScrollProgress({
  color,
  height = 2,
}: ScrollProgressProps) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <motion.div
      className="scroll-progress"
      style={{
        scaleX,
        height,
        ...(color ? { background: color } : {}),
      }}
    />
  );
}
