"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { LineReveal } from "./Reveal";
import { durations, easings, springs } from "@/lib/animations";

const domains = [
  {
    id: "construction",
    title: "Construction neuve",
    description:
      "De la maison individuelle aux bâtiments tertiaires, nous concevons et réalisons des constructions durables et performantes.",
    href: "/expertise#construction",
  },
  {
    id: "renovation",
    title: "Rénovation",
    description:
      "Restructuration complète ou rénovation partielle, nous redonnons vie à vos espaces avec exigence et savoir-faire.",
    href: "/expertise#renovation",
  },
  {
    id: "extension",
    title: "Extension",
    description:
      "Agrandissement harmonieux de votre habitat, dans le respect de l'existant et des normes actuelles.",
    href: "/expertise#extension",
  },
];

export function Domaines() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

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
    <section ref={sectionRef} className="section bg-[var(--color-surface)]">
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
            Nos domaines
          </motion.p>

          <motion.h2 className="mb-6" variants={itemVariants}>
            Une expertise
            <span className="text-[var(--color-secondary)]"> complète</span>
          </motion.h2>

          <motion.p className="text-lead" variants={itemVariants}>
            Trois domaines d&apos;intervention, une même exigence de qualité.
          </motion.p>
        </motion.div>

        {/* Domains Grid avec effet hover premium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-border)]">
          {domains.map((domain, index) => (
            <DomainCard
              key={domain.id}
              domain={domain}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Composant carte avec animations premium
function DomainCard({
  domain,
  index,
  isInView,
}: {
  domain: (typeof domains)[0];
  index: number;
  isInView: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: durations.slow,
        delay: 0.3 + index * 0.15,
        ease: easings.easeOut,
      }}
    >
      <Link
        href={domain.href}
        className="group relative block bg-[var(--color-background)] p-8 md:p-12 h-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background hover effect */}
        <motion.div
          className="absolute inset-0 bg-[var(--color-primary)]"
          initial={{ y: "100%" }}
          animate={{ y: isHovered ? "0%" : "100%" }}
          transition={{
            duration: 0.5,
            ease: easings.reveal,
          }}
        />

        {/* Content wrapper */}
        <div className="relative z-10">
          {/* Number avec animation */}
          <motion.span
            className="block text-6xl md:text-7xl font-light transition-colors duration-500"
            animate={{
              color: isHovered
                ? "rgba(255,255,255,0.2)"
                : "var(--color-border)",
            }}
            transition={{ duration: 0.3 }}
          >
            {String(index + 1).padStart(2, "0")}
          </motion.span>

          {/* Content */}
          <div className="mt-8">
            <motion.h3
              className="text-xl md:text-2xl font-medium mb-4 transition-colors duration-300"
              animate={{
                color: isHovered ? "#ffffff" : "var(--color-primary)",
              }}
            >
              {domain.title}
            </motion.h3>

            <motion.p
              className="text-sm leading-relaxed mb-6 transition-colors duration-300"
              animate={{
                color: isHovered
                  ? "rgba(255,255,255,0.7)"
                  : "var(--color-text-secondary)",
              }}
            >
              {domain.description}
            </motion.p>

            {/* Arrow link */}
            <motion.span
              className="inline-flex items-center gap-2 text-sm font-medium"
              animate={{
                color: isHovered ? "#ffffff" : "var(--color-primary)",
              }}
            >
              En savoir plus
              <motion.svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                animate={{ x: isHovered ? 4 : 0 }}
                transition={springs.smooth}
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </motion.svg>
            </motion.span>
          </div>
        </div>

        {/* Corner accent on hover */}
        <motion.div
          className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-full h-full text-white/10" viewBox="0 0 50 50">
            <path d="M50 0 L50 50 L0 50" fill="currentColor" />
          </svg>
        </motion.div>
      </Link>
    </motion.div>
  );
}
