"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { LineReveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { durations, easings, springs } from "@/lib/animations";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

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
    <section
      ref={sectionRef}
      className="section bg-[var(--color-primary)] text-white relative overflow-hidden"
    >
      {/* Subtle pattern background */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.03 } : {}}
        transition={{ duration: durations.contemplative }}
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="contactGrid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contactGrid)" />
        </svg>
      </motion.div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="w-12 h-px bg-white/30 mb-8"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{
                duration: durations.contemplative,
                ease: easings.reveal,
              }}
              style={{ transformOrigin: "left" }}
            />

            <motion.p
              className="text-overline !text-white/50 mb-4"
              variants={itemVariants}
            >
              Votre projet
            </motion.p>

            <motion.h2 className="!text-white mb-6" variants={itemVariants}>
              Parlons de votre
              <br />
              <span className="text-white/70">prochain projet</span>
            </motion.h2>

            <motion.p
              className="text-lg text-white/60 max-w-md mb-10"
              variants={itemVariants}
            >
              Une question, un projet en tête ? Notre équipe est disponible pour
              échanger et vous accompagner.
            </motion.p>

            {/* Contact Info */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <ContactItem
                icon={
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                href="tel:+33500000000"
                label="05 00 00 00 00"
                delay={0.4}
                isInView={isInView}
              />

              <ContactItem
                icon={
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                  </svg>
                }
                href="mailto:contact@egb-occitanie.fr"
                label="contact@egb-occitanie.fr"
                delay={0.5}
                isInView={isInView}
              />
            </motion.div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            className="bg-white p-8 md:p-12"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={
              isInView ? { opacity: 1, y: 0, scale: 1 } : {}
            }
            transition={{
              duration: durations.slow,
              delay: 0.3,
              ease: easings.easeOut,
            }}
          >
            <motion.h3
              className="text-2xl font-medium text-[var(--color-primary)] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: durations.normal,
                delay: 0.5,
                ease: easings.easeOut,
              }}
            >
              Démarrer un projet
            </motion.h3>

            <motion.p
              className="text-[var(--color-text-secondary)] mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{
                duration: durations.normal,
                delay: 0.6,
                ease: easings.easeOut,
              }}
            >
              Décrivez votre projet et nous vous recontacterons sous 24 heures
              pour en discuter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: durations.normal,
                delay: 0.7,
                ease: easings.easeOut,
              }}
            >
              <MagneticButton
                as="a"
                href="/contact"
                className="btn btn-primary w-full md:w-auto"
                strength={0.15}
              >
                <span className="flex items-center gap-2">
                  Nous contacter
                  <motion.svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
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
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Corner accent */}
      <motion.div
        className="absolute top-0 left-0 w-24 h-24 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: durations.contemplative, delay: 0.5 }}
      >
        <svg className="w-full h-full text-white/5" viewBox="0 0 100 100">
          <motion.path
            d="M0 100 L0 0 L100 0"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{
              duration: durations.contemplative,
              delay: 0.7,
              ease: easings.reveal,
            }}
          />
        </svg>
      </motion.div>
    </section>
  );
}

// Composant contact item avec animation
function ContactItem({
  icon,
  href,
  label,
  delay,
  isInView,
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
  delay: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      className="flex items-center gap-4"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: durations.normal,
        delay,
        ease: easings.easeOut,
      }}
    >
      <motion.div
        className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/70"
        whileHover={{
          borderColor: "rgba(255,255,255,0.4)",
          scale: 1.05,
        }}
        transition={springs.smooth}
      >
        {icon}
      </motion.div>
      <motion.a
        href={href}
        className="text-white hover:text-white/70 transition-colors"
        whileHover={{ x: 4 }}
        transition={springs.smooth}
      >
        {label}
      </motion.a>
    </motion.div>
  );
}
