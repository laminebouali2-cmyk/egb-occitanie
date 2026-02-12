"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 2000, suffix: "+", prefix: "", label: "Interventions réalisées" },
  { value: 48, suffix: "h", prefix: "<", label: "Délai moyen" },
  { value: 0, suffix: "€", prefix: "", label: "Avance de frais" },
  { value: 2, suffix: " ans", prefix: "", label: "De garantie" },
];

function AnimatedNumber({
  value,
  suffix,
  prefix,
  active,
}: {
  value: number;
  suffix: string;
  prefix: string;
  active: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (value === 0) {
      setDisplay(0);
      return;
    }
    const duration = 1200;
    const steps = 50;
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
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, value]);

  return (
    <span>
      {prefix}
      {display.toLocaleString("fr-FR")}
      {suffix}
    </span>
  );
}

export function TrustBadges() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section className="border-y border-border bg-white">
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8 py-14 lg:py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-border"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="text-center lg:px-8"
            >
              <div className="text-2xl sm:text-3xl font-semibold text-text tracking-tight">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  active={inView}
                />
              </div>
              <div className="mt-1 text-[13px] text-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
