'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * HERO SECTION — Light & Modern Architecture Hero
 *
 * Design Philosophy:
 * - Clean, light aesthetic with modern architecture
 * - Clear typography with strong contrast
 * - Professional and aspirational
 * - Crisp CTAs with clear hierarchy
 *
 * Layout:
 * - Light background with subtle gradients
 * - Centered content with architectural accents
 * - Subtle parallax on scroll
 */

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax subtil
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: '85vh', maxHeight: '95vh' }}
    >
      {/* Light Background with Gradient */}
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        {/* Clean gradient - light blue-gray to white */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(135deg,
                #8B9DAF 0%,
                #9BAAB8 25%,
                #ABB7C4 50%,
                #BCC5CF 75%,
                #CDD4DC 100%
              )
            `
          }}
        />

        {/* Subtle light overlay for depth */}
        <div className="absolute inset-0 bg-white/10" />

        {/* Decorative architectural element - subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 60px,
                rgba(255,255,255,0.5) 60px,
                rgba(255,255,255,0.5) 61px
              )
            `
          }}
        />
      </motion.div>

      {/* Content - Centered */}
      <motion.div
        className="relative z-10 w-full px-6 md:px-12"
        style={{ opacity }}
      >
        <div className="max-w-[1200px] mx-auto text-center">

          {/* HEADLINE - Dark text on light background */}
          <motion.h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
              fontWeight: 300,
              maxWidth: '900px',
              margin: '0 auto 32px auto',
              color: '#1a1a1a',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.19, 1.0, 0.22, 1.0] }}
          >
            Certaines constructions
            <br />
            deviennent <span style={{ fontWeight: 400 }}>patrimoine</span>
          </motion.h1>

          {/* SUBHEADLINE */}
          <motion.p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)',
              lineHeight: '1.6',
              letterSpacing: '0.005em',
              fontWeight: 400,
              maxWidth: '700px',
              margin: '0 auto 48px auto',
              color: '#2d3748',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.19, 1.0, 0.22, 1.0] }}
          >
            EGB Occitanie conçoit et réalise les projets bâtis pour durer.
            <br />
            Gros œuvre, rénovation, extension, construction sur-mesure.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.19, 1.0, 0.22, 1.0] }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 text-white bg-stone-900 hover:bg-stone-800 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
              style={{
                padding: '20px 44px',
                fontSize: '16px',
                fontWeight: 500,
                letterSpacing: '0.01em',
                borderRadius: '4px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              }}
            >
              <span>Démarrer un projet</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              href="/projets"
              className="group inline-flex items-center justify-center gap-2.5 text-stone-900 border-2 border-stone-900/20 hover:border-stone-900/40 hover:bg-stone-900/5 transition-all duration-300 ease-out"
              style={{
                padding: '18px 36px',
                fontSize: '16px',
                fontWeight: 500,
                letterSpacing: '0.01em',
                borderRadius: '4px',
              }}
            >
              <span>Voir nos réalisations</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          {/* TRUST SIGNALS */}
          <motion.div
            className="mt-12 text-center"
            style={{
              fontSize: '14px',
              fontWeight: 400,
              letterSpacing: '0.02em',
              color: '#4a5568',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Construction d'excellence
            <span className="mx-4 text-stone-400">•</span>
            Projets sur-mesure
            <span className="mx-4 text-stone-400">•</span>
            Toulouse & Occitanie
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0])
        }}
      >
        <div className="flex flex-col items-center gap-2 text-stone-600">
          <p className="text-xs uppercase tracking-widest font-medium">Découvrir</p>
          <motion.svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </motion.svg>
        </div>
      </motion.div>

    </section>
  );
}
