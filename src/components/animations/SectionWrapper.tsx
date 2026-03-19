"use client";

import { ReactNode, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import clsx from "clsx";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  delay?: number;
  className?: string;
  bg?: "dark" | "navy" | "surface" | "card-bg" | string;
  maxWidth?: string;
}

const bgMap: Record<string, string> = {
  dark: "bg-dark",
  navy: "bg-navy",
  surface: "bg-surface",
  "card-bg": "bg-card-bg",
};

export default function SectionWrapper({
  children,
  id,
  delay = 0,
  className = "",
  bg = "dark",
  maxWidth = "max-w-6xl",
}: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.section
      id={id}
      ref={ref}
      role="region"
      className={clsx(
        bgMap[bg] || bg,
        "px-4 sm:px-8 md:px-16 lg:px-24",
        "py-16 sm:py-20 md:py-28",
        className
      )}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay, duration: 1, ease: "easeOut" },
        },
      }}
    >
      <div className={clsx("mx-auto flex flex-col gap-8", maxWidth)}>
        {children}
      </div>
    </motion.section>
  );
}
