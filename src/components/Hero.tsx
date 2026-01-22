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
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-end overflow-hidden bg-[#0a0a0a]"
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

        {/* Gradient overlay optimisé pour lisibilité maximale */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/98 via-[#0a0a0a]/92 via-30% to-[#0a0a0a]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/98 via-[#0a0a0a]/50 via-45% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/70 via-transparent to-transparent" />
      </motion.div>

      {/* Vignette pour depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.35) 100%)',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full pb-[10vh] md:pb-[12vh]"
        style={{ opacity }}
      >
        <div className="container">
          <div className="max-w-6xl">

            {/* Overline */}
            <motion.div
              className="flex items-center gap-5 mb-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, delay: 0.2, ease: [0.19, 1.0, 0.22, 1.0] }}
            >
              <span className="h-[1px] w-16 bg-white/20" />
              <span
                className="text-white/45 uppercase"
                style={{
                  fontSize: '9.5px',
                  fontWeight: 500,
                  letterSpacing: '0.35em',
                }}
              >
                Entreprise Générale de Bâtiment
              </span>
            </motion.div>

            {/* Headline - 2 lignes maximum */}
            <motion.h1
              className="text-white mb-10"
              style={{
                fontSize: 'clamp(3.5rem, 9.5vw, 8.5rem)',
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                fontFamily: 'var(--font-serif)',
                fontWeight: 275,
                textShadow: '0 8px 100px rgba(0,0,0,0.6)',
                maxWidth: '1100px',
              }}
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.45, ease: [0.19, 1.0, 0.22, 1.0] }}
            >
              Nous construisons <span className="text-white/40" style={{ fontWeight: 250 }}>ce qui dure</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-white/70 mb-16 max-w-[620px]"
              style={{
                fontSize: 'clamp(1.125rem, 1.65vw, 1.5rem)',
                lineHeight: 1.6,
                letterSpacing: '-0.01em',
                fontWeight: 300,
              }}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.75, ease: [0.19, 1.0, 0.22, 1.0] }}
            >
              Maîtres d'œuvre de vos projets d'exception à Toulouse et en Occitanie.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-start gap-4"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.05, ease: [0.19, 1.0, 0.22, 1.0] }}
            >
              {/* Primary CTA */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3.5 bg-white text-[#0a0a0a] overflow-hidden transition-all duration-700 ease-out hover:shadow-[0_30px_140px_-20px_rgba(255,255,255,0.7)] hover:-translate-y-2"
                style={{
                  padding: '1.25rem 2.75rem',
                  fontSize: '0.9375rem',
                  letterSpacing: '0.025em',
                  fontWeight: 500,
                }}
              >
                <span className="relative z-10">Démarrer un projet</span>
                <svg
                  className="relative z-10 w-[15px] h-[15px] transition-transform duration-700 ease-out group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <span className="absolute inset-0 bg-white/95 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/projets"
                className="group inline-flex items-center gap-3.5 text-white/85 transition-all duration-500 hover:text-white hover:border-white/35"
                style={{
                  padding: '1.25rem 2.75rem',
                  fontSize: '0.9375rem',
                  letterSpacing: '0.025em',
                  fontWeight: 500,
                  border: '1px solid rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <span>Nos réalisations</span>
                <svg
                  className="w-[15px] h-[15px] transition-transform duration-500 ease-out group-hover:translate-x-1.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Contact rapide discret */}
            <motion.div
              className="mt-12 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.4 }}
            >
              <span className="text-white/30 text-sm">ou appelez directement</span>
              <a
                href="tel:+33665015882"
                className="text-white/70 hover:text-white text-lg font-light tracking-wide transition-colors duration-300"
              >
                06 65 01 58 82
              </a>
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 right-10 md:right-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 1.3 }}
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0])
        }}
      >
        <div className="flex flex-col items-center gap-5">
          <p
            className="text-white/20 uppercase"
            style={{
              fontSize: '0.625rem',
              letterSpacing: '0.28em',
              fontWeight: 500,
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
            }}
          >
            Scroll
          </p>
          <motion.div
            className="w-[1px] h-28 bg-gradient-to-b from-white/15 to-transparent origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 2.0, duration: 1.8, ease: [0.19, 1.0, 0.22, 1.0] }}
          />
        </div>
      </motion.div>

      {/* Coordonnées géographiques */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 right-10 md:right-16 hidden xl:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.3 }}
      >
        <div className="flex flex-col items-end gap-5 text-white/12">
          <span style={{ fontSize: '0.6875rem', letterSpacing: '0.1em', fontWeight: 400 }}>
            43.5528°N
          </span>
          <div className="w-[1px] h-20 bg-white/8" />
          <span style={{ fontSize: '0.6875rem', letterSpacing: '0.1em', fontWeight: 400 }}>
            1.4647°E
          </span>
        </div>
      </motion.div>

    </section>
  );
}
