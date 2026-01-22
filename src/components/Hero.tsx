'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
      style={{ height: '100vh' }}
    >
      {/* Background Image Layer */}
      <motion.div
        className="absolute inset-0"
        style={{ scale }}
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            y,
            backgroundImage: `url('https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2787&auto=format&fit=crop')`,
            backgroundPosition: '60% center',
          }}
        />

        {/* Overlay blanc pour fond clair avec texte lisible */}
        <div className="absolute inset-0 bg-white/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 via-35% to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/40 via-50% to-transparent" />
      </motion.div>

      {/* Content - Centré verticalement */}
      <motion.div
        className="relative z-10 w-full"
        style={{ opacity }}
      >
        <div className="container">
          <div className="max-w-5xl">

            {/* Overline */}
            <motion.div
              className="flex items-center gap-5 mb-10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.19, 1.0, 0.22, 1.0] }}
            >
              <span className="h-[1px] w-16 bg-stone-900/20" />
              <span
                className="text-stone-600 uppercase"
                style={{
                  fontSize: '9.5px',
                  fontWeight: 500,
                  letterSpacing: '0.35em',
                }}
              >
                Entreprise Générale de Bâtiment
              </span>
            </motion.div>

            {/* Headline - 2 lignes: "Nous construisons" puis "ce qui dure" */}
            <motion.h1
              className="text-stone-900 mb-8"
              style={{
                fontSize: 'clamp(3.75rem, 10vw, 9rem)',
                lineHeight: 0.92,
                letterSpacing: '-0.035em',
                fontFamily: 'var(--font-serif)',
                fontWeight: 300,
              }}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.4, ease: [0.19, 1.0, 0.22, 1.0] }}
            >
              Nous construisons
              <br />
              <span className="text-stone-400" style={{ fontWeight: 250 }}>
                ce qui dure
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-stone-700 mb-14 max-w-[580px]"
              style={{
                fontSize: 'clamp(1.125rem, 1.6vw, 1.375rem)',
                lineHeight: 1.6,
                letterSpacing: '-0.01em',
                fontWeight: 300,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.7, ease: [0.19, 1.0, 0.22, 1.0] }}
            >
              Maîtres d'œuvre de vos projets d'exception à Toulouse et en Occitanie.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-start gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 1.0, ease: [0.19, 1.0, 0.22, 1.0] }}
            >
              {/* Primary CTA */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3.5 bg-stone-900 text-white overflow-hidden transition-all duration-600 ease-out hover:bg-stone-800 hover:shadow-[0_24px_100px_-16px_rgba(0,0,0,0.3)] hover:-translate-y-1.5"
                style={{
                  padding: '1.25rem 2.75rem',
                  fontSize: '0.9375rem',
                  letterSpacing: '0.02em',
                  fontWeight: 500,
                }}
              >
                <span className="relative z-10">Démarrer un projet</span>
                <svg
                  className="relative z-10 w-[15px] h-[15px] transition-transform duration-600 ease-out group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/projets"
                className="group inline-flex items-center gap-3.5 text-stone-700 hover:text-stone-900 transition-all duration-400 hover:border-stone-400"
                style={{
                  padding: '1.25rem 2.75rem',
                  fontSize: '0.9375rem',
                  letterSpacing: '0.02em',
                  fontWeight: 500,
                  border: '1px solid rgba(28,25,23,0.15)',
                }}
              >
                <span>Nos réalisations</span>
                <svg
                  className="w-[15px] h-[15px] transition-transform duration-400 ease-out group-hover:translate-x-1.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Contact rapide */}
            <motion.div
              className="mt-10 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1, delay: 1.3 }}
            >
              <span className="text-stone-500 text-sm">ou appelez</span>
              <a
                href="tel:+33665015882"
                className="text-stone-700 hover:text-stone-900 text-lg font-light tracking-wide transition-colors duration-300"
              >
                06 65 01 58 82
              </a>
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 right-12 md:right-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1.2 }}
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0])
        }}
      >
        <div className="flex flex-col items-center gap-4">
          <p
            className="text-stone-400 uppercase"
            style={{
              fontSize: '0.625rem',
              letterSpacing: '0.25em',
              fontWeight: 500,
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
            }}
          >
            Scroll
          </p>
          <motion.div
            className="w-[1px] h-24 bg-gradient-to-b from-stone-300 to-transparent origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1.9, duration: 1.6, ease: [0.19, 1.0, 0.22, 1.0] }}
          />
        </div>
      </motion.div>

    </section>
  );
}
