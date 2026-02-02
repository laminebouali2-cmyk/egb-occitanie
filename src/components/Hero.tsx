'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * HERO SECTION — Light & Airy Architecture Hero
 *
 * Design Philosophy:
 * - Bright, clear aesthetic with blue sky and modern villa
 * - Clean typography with strong readability
 * - Professional and aspirational
 * - Crisp CTAs with clear hierarchy
 *
 * Layout:
 * - Light background with clear architecture image
 * - Centered content with excellent contrast
 * - Subtle parallax on scroll
 * - Minimal overlay for text readability
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
      style={{ minHeight: '100vh' }}
    >
      {/* Light Background with Clear Image */}
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        {/* Clear blue sky + modern villa image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075')`,
          }}
        />

        {/* Very light overlay for subtle text contrast only */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(135deg,
                rgba(255, 255, 255, 0.45) 0%,
                rgba(255, 255, 255, 0.35) 25%,
                rgba(255, 255, 255, 0.40) 50%,
                rgba(255, 255, 255, 0.30) 75%,
                rgba(255, 255, 255, 0.35) 100%
              )
            `
          }}
        />

        {/* Subtle pattern overlay for texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 60px,
                rgba(0,0,0,0.3) 60px,
                rgba(0,0,0,0.3) 61px
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

          {/* HEADLINE - Dark text on light background for maximum contrast */}
          <motion.h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
              fontWeight: 300,
              maxWidth: '950px',
              margin: '0 auto 32px auto',
              color: '#1a1a1a',
              textShadow: '0 2px 30px rgba(255,255,255,0.9), 0 0 60px rgba(255,255,255,0.7)',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.19, 1.0, 0.22, 1.0] }}
          >
            Certaines constructions
            <br />
            deviennent <span style={{ fontWeight: 500 }}>patrimoine</span>
          </motion.h1>

          {/* SUBHEADLINE */}
          <motion.p
            style={{
              fontSize: 'clamp(1.1rem, 1.9vw, 1.4rem)',
              lineHeight: '1.65',
              letterSpacing: '0.01em',
              fontWeight: 500,
              maxWidth: '750px',
              margin: '0 auto 48px auto',
              color: '#2d3748',
              textShadow: '0 1px 20px rgba(255,255,255,0.9), 0 0 40px rgba(255,255,255,0.6)',
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
              className="group inline-flex items-center justify-center gap-3 text-white bg-stone-900 hover:bg-stone-800 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl"
              style={{
                padding: '20px 44px',
                fontSize: '16px',
                fontWeight: 600,
                letterSpacing: '0.01em',
                borderRadius: '4px',
                boxShadow: '0 4px 30px rgba(0,0,0,0.2)',
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
              className="group inline-flex items-center justify-center gap-2.5 text-stone-900 border-2 border-stone-900/30 hover:border-stone-900/60 hover:bg-stone-900/10 transition-all duration-300 ease-out"
              style={{
                padding: '18px 36px',
                fontSize: '16px',
                fontWeight: 500,
                letterSpacing: '0.01em',
                borderRadius: '4px',
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(10px)',
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
              fontWeight: 500,
              letterSpacing: '0.03em',
              color: '#57534e',
              textShadow: '0 1px 10px rgba(255,255,255,0.8)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Construction d'excellence
            <span className="mx-4" style={{ color: '#a8a29e' }}>•</span>
            Projets sur-mesure
            <span className="mx-4" style={{ color: '#a8a29e' }}>•</span>
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
        <div
          className="flex flex-col items-center gap-2"
          style={{
            color: '#57534e',
            textShadow: '0 1px 10px rgba(255,255,255,0.8)'
          }}
        >
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
