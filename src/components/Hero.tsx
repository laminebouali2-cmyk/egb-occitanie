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

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-end overflow-hidden bg-stone-950"
    >
      {/* Background Image avec Parallax Subtil */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            y,
            backgroundImage: `url('https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2070&auto=format&fit=crop')`,
            backgroundPosition: '60% center',
          }}
        />

        {/* Gradient overlay - Zone sombre à gauche pour texte lisible */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/60 to-stone-950/20" />

        {/* Gradient vertical pour ancrer le texte */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
      </motion.div>

      {/* Content - Aligné bas-gauche (Composition asymétrique) */}
      <motion.div
        className="relative z-10 container pb-24 md:pb-32 lg:pb-40 w-full"
        style={{ opacity }}
      >
        <div className="max-w-4xl">

          {/* Overline - Tracking très large pour sophistication */}
          <motion.div
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="w-16 h-px bg-white/30" />
            <span className="text-white/60 text-[11px] tracking-[0.3em] uppercase font-medium">
              Entreprise Générale de Bâtiment
            </span>
          </motion.div>

          {/* Headline Principal - Typographie premium */}
          <motion.h1
            className="text-white mb-8 leading-[0.95] tracking-[-0.02em]"
            style={{
              fontSize: 'clamp(3rem, 8vw, 6.5rem)',
              fontFamily: 'var(--font-serif)',
              textShadow: '0 2px 40px rgba(0,0,0,0.3)',
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Nous construisons
            <br />
            <span className="text-white/50">ce qui dure</span>
          </motion.h1>

          {/* Subtitle - Font légère, espace généreux */}
          <motion.p
            className="text-white/75 text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Maîtres d'œuvre de vos projets d'exception à Toulouse et en Occitanie.
            Construction, rénovation, extension.
          </motion.p>

          {/* CTAs - Premium avec micro-interactions */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 bg-white text-stone-900 px-8 py-4 overflow-hidden transition-all duration-700 hover:shadow-[0_20px_80px_-10px_rgba(255,255,255,0.5)] hover:-translate-y-0.5"
            >
              <span className="relative z-10 font-medium text-[15px] tracking-wide">
                Démarrer votre projet
              </span>
              <svg
                className="relative z-10 w-4 h-4 transition-transform duration-700 ease-out group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              {/* Hover overlay */}
              <span className="absolute inset-0 bg-stone-50 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/projets"
              className="group inline-flex items-center gap-3 text-white/90 px-8 py-4 border border-white/20 backdrop-blur-sm transition-all duration-500 hover:border-white/40 hover:bg-white/10"
            >
              <span className="font-medium text-[15px] tracking-wide">
                Nos réalisations
              </span>
              <svg
                className="w-4 h-4 transition-transform duration-500 ease-out group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll Indicator - Minimaliste et élégant */}
      <motion.div
        className="absolute bottom-10 right-10 md:right-16 flex flex-col items-center gap-3 text-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0])
        }}
      >
        <p className="text-[10px] tracking-[0.2em] uppercase rotate-90 origin-center translate-x-3">
          Scroll
        </p>
        <motion.div
          className="w-px h-20 bg-gradient-to-b from-white/20 to-transparent origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.7, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>

      {/* Coordonnées géographiques - Détail premium */}
      <motion.div
        className="absolute top-1/2 right-10 md:right-16 hidden lg:flex flex-col gap-4 text-white/20 text-[11px] tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
      >
        <span>43.5528°N</span>
        <div className="w-px h-12 bg-white/10 mx-auto" />
        <span>1.4647°E</span>
      </motion.div>
    </section>
  );
}
