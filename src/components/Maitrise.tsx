"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Reveal, RevealContainer, RevealItem, ImageReveal, LineReveal } from "./Reveal";
import { LineButton } from "./MagneticButton";
import { durations, easings, springs } from "@/lib/animations";

export function Maitrise() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Parallax pour l'image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  const stats = [
    { value: 15, suffix: "+", label: "Années d'expérience" },
    { value: 200, suffix: "+", label: "Projets réalisés" },
    { value: 100, suffix: "%", label: "Projets livrés" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: durations.slow,
        ease: easings.easeOut,
      },
    },
  };

  return (
    <section ref={sectionRef} className="section bg-[var(--color-background)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image avec reveal et parallax */}
          <div className="relative">
            <ImageReveal direction="left" className="aspect-[4/3] lg:aspect-[4/5]">
              <motion.div
                className="w-full h-full img-container"
                style={{ y: imageY }}
                data-cursor="image"
              >
                {/* Placeholder - Replace with actual project image */}
                <div
                  className="w-full h-full"
                  style={{
                    background:
                      "linear-gradient(180deg, #e7e5e4 0%, #a8a29e 100%)",
                  }}
                />
              </motion.div>
            </ImageReveal>

            {/* Decorative frame */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 hidden lg:block pointer-events-none"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: durations.slow, delay: 0.6, ease: easings.easeOut }}
            >
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                <motion.rect
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  stroke="var(--color-border)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: durations.contemplative, delay: 0.8, ease: easings.reveal }}
                />
              </svg>
            </motion.div>
          </div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Line accent */}
            <LineReveal className="w-12 mb-8 text-[var(--color-muted)]" delay={0} />

            <motion.p className="text-overline mb-4" variants={itemVariants}>
              Notre maîtrise
            </motion.p>

            <motion.h2 className="mb-6" variants={itemVariants}>
              La rigueur au service
              <br />
              <span className="text-[var(--color-secondary)]">de vos projets</span>
            </motion.h2>

            <motion.p className="text-lead mb-10" variants={itemVariants}>
              Chaque projet est une promesse tenue. De la conception à la
              livraison, nous garantissons une exécution irréprochable, des
              délais respectés et une qualité sans compromis.
            </motion.p>

            {/* Stats avec animation de compteur */}
            <motion.div
              className="grid grid-cols-3 gap-8 mb-10"
              variants={itemVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: durations.slow,
                    delay: 0.4 + index * 0.1,
                    ease: easings.easeOut,
                  }}
                >
                  <motion.p
                    className="text-3xl md:text-4xl font-light text-[var(--color-primary)] mb-2 tabular-nums"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  >
                    <CountUp
                      value={stat.value}
                      suffix={stat.suffix}
                      isInView={isInView}
                      delay={0.6 + index * 0.1}
                    />
                  </motion.p>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <LineButton
                href="/projets"
                className="text-[var(--color-primary)] font-medium"
              >
                Voir nos réalisations
              </LineButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Composant CountUp interne
function CountUp({
  value,
  suffix = "",
  isInView,
  delay = 0,
}: {
  value: number;
  suffix?: string;
  isInView: boolean;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  if (isInView && !hasAnimated.current && ref.current) {
    hasAnimated.current = true;
    const duration = 2000;
    const startTime = performance.now() + delay * 1000;

    const animate = (currentTime: number) => {
      if (currentTime < startTime) {
        requestAnimationFrame(animate);
        return;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(value * eased);

      if (ref.current) {
        ref.current.textContent = current + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }

  return <span ref={ref}>0{suffix}</span>;
}
