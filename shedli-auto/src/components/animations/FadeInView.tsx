"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface FadeInViewProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "none";
  once?: boolean;
}

export default function FadeInView({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
}: FadeInViewProps) {
  const prefersReducedMotion = useReducedMotion();

  const yOffset = direction === "up" ? 24 : 0;

  return (
    <motion.div
      className={className}
      initial={
        prefersReducedMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: yOffset }
      }
      whileInView={{ opacity: 1, y: 0 }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.5, delay, ease: "easeOut" }
      }
      viewport={{ once, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}
