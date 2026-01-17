"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { TextReveal, LineReveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { durations, easings, springs } from "@/lib/animations";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  // Scroll progress pour le parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms avec spring pour la fluidité
  const backgroundY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "30%"]),
    { stiffness: 100, damping: 30 }
  );

  const contentY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "15%"]),
    { stiffness: 100, damping: 30 }
  );

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Variants pour le stagger d'entrée
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: durations.slow,
        ease: easings.easeOut,
      },
    },
  };

  const lineVariants = {
    hidden: {
      scaleX: 0,
    },
    visible: {
      scaleX: 1,
      transition: {
        duration: durations.contemplative,
        ease: easings.reveal,
        delay: 0.8,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background avec parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Gradient de fond sophistiqué */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 118, 0.15), transparent),
              radial-gradient(ellipse 60% 30% at 80% 80%, rgba(168, 162, 158, 0.1), transparent),
              linear-gradient(180deg, #fafaf9 0%, #f5f5f4 100%)
            `,
          }}
        />

        {/* Lignes architecturales subtiles */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>

      {/* Content avec parallax inverse */}
      <motion.div
        className="container relative z-10"
        style={{ y: contentY, opacity }}
      >
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Ligne décorative */}
          <motion.div
            className="w-16 h-px bg-[var(--color-muted)] mb-8 origin-left"
            variants={lineVariants}
          />

          {/* Overline */}
          <motion.p
            className="text-overline mb-6"
            variants={itemVariants}
          >
            Construction & Bâtiment
          </motion.p>

          {/* Main Headline — word by word reveal */}
          <motion.div variants={itemVariants}>
            <h1 className="text-[var(--color-primary)] mb-4">
              <TextReveal as="span" className="block" delay={0.4}>
                Nous construisons
              </TextReveal>
            </h1>
            <h1 className="text-[var(--color-secondary)] mb-8">
              <TextReveal as="span" className="block" delay={0.6}>
                ce qui dure
              </TextReveal>
            </h1>
          </motion.div>

          {/* Subtitle avec reveal classique */}
          <motion.p
            className="text-lead max-w-xl mb-12"
            variants={itemVariants}
          >
            Entreprise générale de bâtiment en Occitanie.
            <br />
            Expertise technique, maîtrise des délais, excellence d&apos;exécution.
          </motion.p>

          {/* CTAs avec magnetic effect */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <MagneticButton
              as="a"
              href="/projets"
              className="btn btn-primary"
              strength={0.15}
            >
              <span className="relative z-10 flex items-center gap-2">
                Découvrir nos projets
                <motion.svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={springs.smooth}
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </motion.svg>
              </span>
            </MagneticButton>

            <MagneticButton
              as="a"
              href="/contact"
              className="btn btn-outline group"
              strength={0.15}
            >
              <span className="relative z-10">Nous contacter</span>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator — contemplatif */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: durations.slow, delay: 1.5, ease: easings.easeOut }}
      >
        <motion.div
          className="flex flex-col items-center gap-3"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-[10px] text-[var(--color-muted)] tracking-[0.3em] uppercase font-light">
            Explorer
          </span>
          <div className="relative w-px h-16">
            <div className="absolute inset-0 bg-[var(--color-border)]" />
            <motion.div
              className="absolute top-0 left-0 w-full bg-[var(--color-primary)]"
              initial={{ height: "0%", top: "0%" }}
              animate={{
                height: ["0%", "40%", "0%"],
                top: ["0%", "30%", "100%"],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Corner accent — détail architectural */}
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: durations.contemplative, delay: 1 }}
      >
        <svg
          className="w-full h-full text-[var(--color-border)]"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M100 0 L100 100 L0 100"
            stroke="currentColor"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: durations.contemplative,
              delay: 1.2,
              ease: easings.easeOut,
            }}
          />
        </svg>
      </motion.div>
    </section>
  );
}
