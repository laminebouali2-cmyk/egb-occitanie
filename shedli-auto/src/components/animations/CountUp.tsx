"use client";

import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useTransform,
  animate,
  motion,
} from "framer-motion";

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export default function CountUp({
  end,
  duration = 2,
  suffix,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      animate(motionValue, end, {
        duration,
        ease: "easeOut",
      });
    }
  }, [isInView, motionValue, end, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${latest}${suffix ?? ""}`;
      }
    });
    return unsubscribe;
  }, [rounded, suffix]);

  return (
    <motion.span ref={ref} className={className}>
      0{suffix ?? ""}
    </motion.span>
  );
}
