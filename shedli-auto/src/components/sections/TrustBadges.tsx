"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, CreditCard, ShieldCheck, Star } from "lucide-react";

const stats = [
  {
    icon: Zap,
    value: "<\u200948h",
    label: "Délai d'intervention",
  },
  {
    icon: CreditCard,
    value: "0 €",
    label: "À votre charge",
  },
  {
    icon: ShieldCheck,
    value: "2 ans",
    label: "De garantie",
  },
  {
    icon: Star,
    value: "5/5",
    label: "Sur Google (7 avis)",
  },
];

export function TrustBadges() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section className="bg-surface-soft">
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8 py-10 lg:py-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="flex items-center gap-3.5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-500">
                <stat.icon size={18} strokeWidth={1.8} />
              </div>
              <div>
                <div className="text-lg font-semibold text-text tracking-tight leading-tight">
                  {stat.value}
                </div>
                <div className="text-[12px] text-text-muted leading-tight mt-0.5">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
