'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * HERO SECTION — Premium Architecture Hero
 *
 * Design Philosophy:
 * - Aspiration pure (villa golden hour)
 * - Texte blanc centré avec overlay subtil
 * - Hiérarchie typographique claire
 * - CTA unique fort "Discuter de mon projet"
 * - Trust signals discrets
 *
 * Layout:
 * - Image pleine largeur en background
 * - Contenu centré verticalement et horizontalement
 * - Parallax subtil au scroll
 */

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax subtil
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: '70vh', maxHeight: '80vh' }}
    >
      {/* Background Premium Gradient */}
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        {/* Gradient moderne architectural */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(135deg,
                #1C1917 0%,
                #292524 25%,
                #44403C 50%,
                #57534E 75%,
                #78716C 100%
              )
            `
          }}
        />

        {/* Overlay texture subtile */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(255,255,255,0.03) 2px,
                rgba(255,255,255,0.03) 4px
              )
            `
          }}
        />
      </motion.div>

      {/* Content - Centré */}
      <motion.div
        className="relative z-10 w-full px-6 md:px-12"
        style={{ opacity }}
      >
        <div className="max-w-[1200px] mx-auto text-center">

          {/* HEADLINE */}
          <motion.h1
            className="text-white mb-6"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', // 32px mobile → 52px desktop
              lineHeight: '1.2',
              letterSpacing: '-0.01em',
              fontWeight: 500,
              maxWidth: '720px',
              margin: '0 auto 24px auto',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.19, 1.0, 0.22, 1.0] }}
          >
            Certaines constructions deviennent patrimoine.
            <br />
            Dès leur conception.
          </motion.h1>

          {/* SUBHEADLINE */}
          <motion.p
            className="text-white/85 mb-8"
            style={{
              fontSize: 'clamp(0.95rem, 1.4vw, 1.125rem)', // 15px mobile → 18px desktop
              lineHeight: '1.6',
              letterSpacing: '0.005em',
              fontWeight: 300,
              maxWidth: '600px',
              margin: '0 auto 32px auto',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.19, 1.0, 0.22, 1.0] }}
          >
            EGB Occitanie conçoit et réalise les projets bâtis pour durer. Gros œuvre, rénovation, extension, construction sur-mesure.
          </motion.p>

          {/* CTA PRIMAIRE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.19, 1.0, 0.22, 1.0] }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 text-stone-900 bg-white hover:bg-stone-50 transition-all duration-300 ease-out"
              style={{
                padding: '16px 36px',
                fontSize: '15px',
                fontWeight: 500,
                letterSpacing: '0.02em',
                borderRadius: '2px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              }}
            >
              <span>Discuter de mon projet</span>
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
            className="mt-8 text-white/60 text-center"
            style={{
              fontSize: '13px',
              fontWeight: 300,
              letterSpacing: '0.05em',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Rénovation & construction d'excellence
            <span className="mx-3 text-white/40">•</span>
            Projets sur-mesure
            <span className="mx-3 text-white/40">•</span>
            Toulouse & Occitanie
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll Indicator (optionnel, subtil) */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0])
        }}
      >
        <div className="flex flex-col items-center gap-2 text-white/50">
          <p className="text-xs uppercase tracking-widest">Découvrir</p>
          <motion.svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </motion.svg>
        </div>
      </motion.div>

    </section>
  );
}
