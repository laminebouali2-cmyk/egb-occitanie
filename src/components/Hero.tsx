'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ height: '90vh' }}
    >
      {/* Background Image Layer avec Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        <Image
          src="/hero-villa-occitanie.jpg"
          alt="Villa contemporaine en Occitanie au coucher du soleil"
          fill
          priority
          quality={95}
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Overlay gradient pour lisibilité texte */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                rgba(0,0,0,0.25) 0%,
                rgba(0,0,0,0.40) 100%
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
            className="text-white mb-8"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.25rem, 6vw, 4.5rem)', // 36px mobile → 72px desktop
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              fontWeight: 700,
              textShadow: '0 2px 24px rgba(0,0,0,0.3)',
              maxWidth: '800px',
              margin: '0 auto 32px auto',
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
            className="text-white/90 mb-10"
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', // 16px mobile → 20px desktop
              lineHeight: '1.5',
              letterSpacing: '0.01em',
              fontWeight: 400,
              maxWidth: '680px',
              margin: '0 auto 40px auto',
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
              className="group inline-flex items-center justify-center gap-3 text-white transition-all duration-200 ease-out"
              style={{
                padding: '20px 40px',
                fontSize: '17px',
                fontWeight: 500,
                letterSpacing: '0.01em',
                borderRadius: '4px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                backgroundColor: 'var(--color-stone-900)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-stone-950)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-stone-900)'}
            >
              <span>Discuter de mon projet</span>
              <svg
                className="w-5 h-5 transition-transform duration-200 ease-out group-hover:translate-x-1"
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
            className="mt-6 text-white/70 text-center"
            style={{
              fontSize: '14px',
              fontWeight: 300,
              letterSpacing: '0.03em',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Rénovation & construction d'excellence
            <span className="mx-4">•</span>
            Projets sur-mesure
            <span className="mx-4">•</span>
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
