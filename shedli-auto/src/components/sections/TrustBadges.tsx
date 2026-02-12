"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 48, suffix: "h", prefix: "<", label: "Délai d'intervention" },
  { value: 0, suffix: "€", prefix: "", label: "Avance de frais" },
  { value: 2, suffix: " ans", prefix: "", label: "Garantie pièce & pose" },
  { value: 100, suffix: "%", prefix: "", label: "Clients satisfaits" },
];

function AnimatedNumber({
  value,
  suffix,
  prefix,
  inView,
}: {
  value: number;
  suffix: string;
  prefix: string;
  inView: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (value === 0) {
      setDisplay(0);
      return;
    }

    let start = 0;
    const duration = 1200;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function TrustBadges() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative z-10 -mt-16 pb-12">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] border border-border/50 px-6 py-8 sm:px-10 sm:py-10"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-border/60">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="text-center lg:px-6"
              >
                <div className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-primary-700 leading-none tracking-tight">
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    inView={inView}
                  />
                </div>
                <div className="mt-2 text-sm font-medium text-text-secondary">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
