"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "+200", label: "Interventions" },
  { value: "0 €", label: "À votre charge" },
  { value: "À vie", label: "Garantie collage" },
  { value: "5/5", label: "Google" },
];

export function TrustBadges() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref} className="border-y border-border bg-white">
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="grid grid-cols-4 divide-x divide-border"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="py-4 lg:py-7 text-center">
              <p className="text-sm sm:text-lg lg:text-2xl font-semibold text-text tracking-tight leading-tight">
                {stat.value}
              </p>
              <p className="text-[9px] sm:text-[10px] lg:text-xs text-text-muted mt-0.5 lg:mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
