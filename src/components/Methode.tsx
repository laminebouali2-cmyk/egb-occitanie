"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { LineReveal } from "./Reveal";
import { durations, easings } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Écoute",
    description:
      "Nous analysons votre projet, vos contraintes et vos attentes pour définir un cahier des charges précis.",
  },
  {
    number: "02",
    title: "Étude",
    description:
      "Nos équipes élaborent une solution technique et financière adaptée, dans le respect des normes et réglementations.",
  },
  {
    number: "03",
    title: "Réalisation",
    description:
      "Pilotage rigoureux du chantier, coordination des corps de métiers, suivi qualité et respect des délais.",
  },
  {
    number: "04",
    title: "Livraison",
    description:
      "Réception des travaux, vérifications complètes et accompagnement jusqu'à la parfaite satisfaction.",
  },
];

export function Methode() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  // Scroll progress pour la ligne de connexion
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end center"],
  });

  const lineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16 md:mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <LineReveal className="w-12 mb-8 text-[var(--color-muted)]" />

          <motion.p className="text-overline mb-4" variants={itemVariants}>
            Notre méthode
          </motion.p>

          <motion.h2 className="mb-6" variants={itemVariants}>
            Un processus clair,
            <br />
            <span className="text-[var(--color-secondary)]">
              des résultats prévisibles
            </span>
          </motion.h2>

          <motion.p className="text-lead" variants={itemVariants}>
            Chaque projet suit une méthodologie éprouvée qui garantit qualité,
            transparence et sérénité.
          </motion.p>
        </motion.div>

        {/* Steps avec ligne de progression */}
        <div className="relative">
          {/* Ligne de connexion animée (desktop) */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-[var(--color-border)]">
            <motion.div
              className="h-full bg-[var(--color-primary)] origin-left"
              style={{ width: lineProgress }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <StepCard
                key={step.number}
                step={step}
                index={index}
                isInView={isInView}
                total={steps.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Composant étape avec animations premium
function StepCard({
  step,
  index,
  isInView,
  total,
}: {
  step: (typeof steps)[0];
  index: number;
  isInView: boolean;
  total: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardInView = useInView(cardRef, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={cardRef}
      className="relative"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: durations.slow,
        delay: 0.3 + index * 0.15,
        ease: easings.easeOut,
      }}
    >
      {/* Number avec dot animé */}
      <div className="flex items-center gap-4 mb-6">
        <motion.span
          className="text-2xl font-light text-[var(--color-muted)]"
          initial={{ opacity: 0 }}
          animate={cardInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
        >
          {step.number}
        </motion.span>

        {/* Dot avec pulse */}
        <motion.div
          className="relative"
          initial={{ scale: 0 }}
          animate={cardInView ? { scale: 1 } : {}}
          transition={{
            duration: 0.5,
            delay: 0.3 + index * 0.1,
            ease: easings.easeOut,
          }}
        >
          <div className="w-3 h-3 rounded-full bg-[var(--color-primary)]" />
          <motion.div
            className="absolute inset-0 rounded-full bg-[var(--color-primary)]"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={cardInView ? { scale: 2, opacity: 0 } : {}}
            transition={{
              duration: 1,
              delay: 0.4 + index * 0.1,
              ease: "easeOut",
            }}
          />
        </motion.div>
      </div>

      {/* Content */}
      <motion.h3
        className="text-xl font-medium text-[var(--color-primary)] mb-3"
        initial={{ opacity: 0, x: -10 }}
        animate={cardInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: durations.normal,
          delay: 0.4 + index * 0.1,
          ease: easings.easeOut,
        }}
      >
        {step.title}
      </motion.h3>

      <motion.p
        className="text-sm text-[var(--color-text-secondary)] leading-relaxed"
        initial={{ opacity: 0 }}
        animate={cardInView ? { opacity: 1 } : {}}
        transition={{
          duration: durations.normal,
          delay: 0.5 + index * 0.1,
          ease: easings.easeOut,
        }}
      >
        {step.description}
      </motion.p>

      {/* Ligne verticale vers le bas (mobile) */}
      {index < total - 1 && (
        <motion.div
          className="md:hidden absolute left-[5px] top-12 w-px h-[calc(100%+2rem)] bg-[var(--color-border)]"
          initial={{ scaleY: 0 }}
          animate={cardInView ? { scaleY: 1 } : {}}
          transition={{
            duration: durations.slow,
            delay: 0.3 + index * 0.1,
            ease: easings.easeOut,
          }}
          style={{ transformOrigin: "top" }}
        />
      )}
    </motion.div>
  );
}
