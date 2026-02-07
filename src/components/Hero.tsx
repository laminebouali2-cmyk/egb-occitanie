'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
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
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-villa.jpg"
          alt="Villa contemporaine premium en Occitanie"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        {/* Light overlay — keeps image luminous */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.03) 40%, rgba(0,0,0,0.18) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full px-6 md:px-12"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          {/* Overline */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.19, 1.0, 0.22, 1.0] }}
          >
            <span
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
                fontWeight: 500,
                fontFamily: 'var(--font-sans)',
              }}
            >
              Prime Construction & Rénovation
            </span>
          </motion.div>

          {/* HEADLINE — all white, forced via inline styles to override globals.css */}
          <motion.h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 6.5vw, 5rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              fontWeight: 400,
              color: '#FFFFFF',
              marginBottom: '2rem',
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

          {/* SUBHEADLINE — two separate lines like Kimi */}
          <motion.div
            style={{ marginBottom: '2.5rem' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.19, 1.0, 0.22, 1.0] }}
          >
            <p
              style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                lineHeight: 1.8,
                fontWeight: 300,
                maxWidth: '600px',
                margin: '0 auto',
                fontFamily: 'var(--font-sans)',
              }}
            >
              EGB Occitanie conçoit et réalise les projets bâtis pour durer.
              <br />
              Gros œuvre, rénovation, extension — sur-mesure en Occitanie.
            </p>
          </motion.div>

          {/* CTA BUTTONS */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.19, 1.0, 0.22, 1.0] }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 transition-all duration-300 hover:-translate-y-1"
              style={{
                padding: '16px 36px',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '0.02em',
                color: '#1C1917',
                background: '#FFFFFF',
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
              className="group inline-flex items-center gap-3 transition-all duration-300"
              style={{
                padding: '16px 36px',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '0.02em',
                color: '#FFFFFF',
                border: '1px solid rgba(255,255,255,0.5)',
                background: 'transparent',
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
            style={{
              marginTop: '4rem',
              fontSize: '13px',
              fontWeight: 400,
              letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.5)',
              textAlign: 'center',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <span>Toulouse & Occitanie</span>
            <span style={{ margin: '0 1rem' }}>•</span>
            <span>15 ans d&apos;expertise</span>
            <span style={{ margin: '0 1rem' }}>•</span>
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
          className="flex flex-col items-center gap-2 transition-colors cursor-pointer"
          style={{ color: 'rgba(255,255,255,0.5)' }}
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
