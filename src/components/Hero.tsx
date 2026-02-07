'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * HERO SECTION — Full-screen Premium with Background Image
 *
 * Design inspired by cinematic real-estate heroes:
 * - Full viewport height with villa background image
 * - Gradient overlay for text readability
 * - Subtle noise texture for premium feel
 * - Overline + Headline (with italic accent) + Subtitle + CTAs + Trust signals
 * - Parallax content fade on scroll
 * - Scroll indicator at bottom
 */

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax: content moves up and fades as user scrolls
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  // Scroll indicator fades out quickly
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero-villa.jpg"
          alt="Villa contemporaine premium en Occitanie"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(12,10,9,0.70) 0%, rgba(12,10,9,0.50) 50%, rgba(12,10,9,0.80) 100%)',
          }}
        />
        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full px-6 md:px-12"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-[1000px] mx-auto text-center">
          {/* Overline */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.19, 1.0, 0.22, 1.0] }}
          >
            <span
              className="text-white/60"
              style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
                fontWeight: 500,
              }}
            >
              Construction & Rénovation Premium
            </span>
          </motion.div>

          {/* HEADLINE */}
          <motion.h1
            className="text-white mb-8"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.25rem, 6vw, 4.5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              fontWeight: 400,
            }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.19, 1.0, 0.22, 1.0] }}
          >
            Certaines constructions
            <br />
            <span style={{ fontStyle: 'italic' }}>deviennent patrimoine.</span>
            <br />
            Dès leur conception.
          </motion.h1>

          {/* SUBHEADLINE */}
          <motion.p
            className="text-white/80 mb-12 mx-auto"
            style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
              lineHeight: 1.7,
              maxWidth: '600px',
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.19, 1.0, 0.22, 1.0] }}
          >
            EGB Occitanie conçoit et réalise les projets bâtis pour durer.
            Gros œuvre, rénovation, extension — sur-mesure en Occitanie.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.19, 1.0, 0.22, 1.0] }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-white hover:bg-stone-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                padding: '16px 32px',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '0.02em',
                color: 'var(--color-stone-900)',
              }}
            >
              <span>Discuter de mon projet</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
              className="group inline-flex items-center gap-3 text-white border border-white/40 hover:bg-white/10 hover:border-white/60 transition-all duration-300"
              style={{
                padding: '16px 32px',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '0.02em',
              }}
            >
              <span>Voir nos réalisations</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          {/* TRUST SIGNALS */}
          <motion.div
            className="mt-16 text-white/50 text-center"
            style={{
              fontSize: '13px',
              fontWeight: 400,
              letterSpacing: '0.08em',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <span>Toulouse & Occitanie</span>
            <span className="mx-4">•</span>
            <span>15 ans d&apos;expertise</span>
            <span className="mx-4">•</span>
            <span>Projets sur-mesure</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        style={{ opacity: scrollIndicatorOpacity }}
      >
        <button
          onClick={() => scrollToSection('#trustbar')}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors cursor-pointer"
        >
          <span className="text-xs uppercase tracking-widest">Découvrir</span>
          <motion.svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </motion.svg>
        </button>
      </motion.div>
    </section>
  );
}
