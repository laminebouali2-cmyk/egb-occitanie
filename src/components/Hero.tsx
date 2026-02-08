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
      className="relative h-screen min-h-[700px] flex items-start justify-center overflow-hidden"
    >
      {/* Background Image — wide angle, show full scene */}
      <div className="absolute inset-0">
        <Image
          src="/hero-villa.jpg"
          alt="Villa contemporaine premium en Occitanie"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: 'center 35%' }}
          sizes="100vw"
          quality={90}
        />
        {/* Near-invisible overlay — just enough for text contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.03) 40%, rgba(0,0,0,0.18) 100%)',
          }}
        />
      </div>

      {/* Content — positioned upper third, not dead center */}
      <motion.div
        className="relative z-10 w-full px-6 md:px-12"
        style={{ y: contentY, opacity: contentOpacity, marginTop: '18vh' }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          {/* Overline */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <span
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
                fontWeight: 500,
                fontFamily: 'var(--font-sans)',
              }}
            >
              Prime Construction & Rénovation
            </span>
          </motion.div>

          {/* HEADLINE */}
          <motion.h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 5vw, 3.8rem)',
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              fontWeight: 400,
              color: '#FFFFFF',
              marginBottom: '1.5rem',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Certaines constructions
            <br />
            <span style={{ fontStyle: 'italic' }}>deviennent patrimoine.</span>
            <br />
            Dès leur conception.
          </motion.h1>

          {/* SUBHEADLINE */}
          <motion.div
            style={{ marginBottom: '2rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p
              style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: 'clamp(0.9rem, 1.3vw, 1.1rem)',
                lineHeight: 1.8,
                fontWeight: 300,
                maxWidth: '550px',
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 transition-all duration-300 hover:-translate-y-1"
              style={{
                padding: '14px 32px',
                fontSize: '13px',
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
                padding: '14px 32px',
                fontSize: '13px',
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
              marginTop: '3rem',
              fontSize: '12px',
              fontWeight: 400,
              letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.45)',
              textAlign: 'center',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <span>Toulouse & Occitanie</span>
            <span style={{ margin: '0 1rem' }}>•</span>
            <span>Accompagnement sur-mesure</span>
            <span style={{ margin: '0 1rem' }}>•</span>
            <span>Engagement qualité</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        style={{ opacity: scrollIndicatorOpacity }}
      >
        <button
          onClick={() => scrollToSection('#trustbar')}
          className="flex flex-col items-center gap-2 transition-colors cursor-pointer"
          style={{ color: 'rgba(255,255,255,0.4)' }}
        >
          <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Découvrir</span>
          <motion.svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </motion.svg>
        </button>
      </motion.div>
    </section>
  );
}
