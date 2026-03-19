"use client";

import { createElement } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface TextRevealProps {
  text: string;
  delay?: number;
  staggerDelay?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

const wordVariants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

export default function TextReveal({
  text,
  delay = 0,
  staggerDelay = 0.04,
  className = "",
  as = "h2",
}: TextRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return createElement(as, { className }, text);
  }

  const words = text.split(" ");

  // Build custom container variants with the provided staggerDelay
  const customContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  return createElement(
    as,
    { className },
    <motion.span
      variants={customContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      aria-label={text}
      style={{ display: "flex", flexWrap: "wrap", gap: "0 0.3em" }}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          style={{ overflow: "hidden", display: "inline-block" }}
        >
          <motion.span
            variants={wordVariants}
            style={{ display: "inline-block" }}
            aria-hidden="true"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
