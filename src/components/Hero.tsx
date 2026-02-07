'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * HERO SECTION — Conversion-Optimized Studio Approach
 *
 * Design Philosophy (Studio-Grade):
 * ✅ Value proposition quantifiable et immédiate
 * ✅ Preuve sociale visible dès les premières secondes
 * ✅ Image réelle de chantier valorisée (pas d'overlay destructeur)
 * ✅ Hiérarchie visuelle claire : chiffres → promesse → CTA
 * ✅ Un seul CTA principal fort
 *
 * Conversion Strategy:
 * - Ligne 1 : Crédibilité (chiffres réels)
 * - Ligne 2-3 : Promesse (bénéfice émotionnel + rationnel)
 * - CTA : Action claire et engageante
 * - Trust minimal mais puissant (pas de décoration)
 *
 * Image Hero:
 * - Photo réelle villa moderne Occitanie (oliviers, lavande, architecture contemporaine)
 * - Overlay minimal optimisé pour golden hour lighting
 * - A/B tester variantes de headline avec chiffres différents (à venir)
 */

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax très subtil (pas décoratif, améliore profondeur)
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Background Image — Vraie photo chantier ou stock temporaire */}
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        {/* Image Hero — Villa moderne Occitanie avec oliviers et lavande */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/hero-villa-occitanie.jpg')`,
          }}
        />

        {/* Overlay MINIMAL — Optimisé pour l'image golden hour
            L'image a déjà un bel éclairage naturel, on garde l'overlay très léger */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to bottom,
                rgba(0, 0, 0, 0.08) 0%,
                rgba(0, 0, 0, 0.18) 40%,
                rgba(0, 0, 0, 0.28) 100%
              )
            `
          }}
        />
      </motion.div>

      {/* Content — Hiérarchie conversion-focused */}
      <motion.div
        className="relative z-10 w-full px-6 md:px-12"
        style={{ opacity: contentOpacity }}
      >
        <div className="max-w-[1100px] mx-auto text-center">

          {/* CRÉDIBILITÉ — Chiffres réels immédiatement visibles */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.19, 1.0, 0.22, 1.0] }}
          >
            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#ffffff',
                textShadow: '0 2px 12px rgba(0,0,0,0.4)',
              }}
            >
              47 projets livrés à Toulouse depuis 2018
            </p>
          </motion.div>

          {/* HEADLINE — Promesse émotionnelle + rationnelle */}
          <motion.h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.75rem, 6.5vw, 5.5rem)',
              lineHeight: '1.08',
              letterSpacing: '-0.03em',
              fontWeight: 300,
              maxWidth: '980px',
              margin: '0 auto 28px auto',
              color: '#ffffff',
              textShadow: '0 3px 20px rgba(0,0,0,0.6), 0 6px 40px rgba(0,0,0,0.3)',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.19, 1.0, 0.22, 1.0] }}
          >
            Les projets bâtis pour durer
            <br />
            <span style={{ fontWeight: 500 }}>sont livrés à temps</span>
          </motion.h1>

          {/* SUBHEADLINE — Bénéfices concrets */}
          <motion.p
            style={{
              fontSize: 'clamp(1.15rem, 2vw, 1.5rem)',
              lineHeight: '1.6',
              letterSpacing: '0.005em',
              fontWeight: 500,
              maxWidth: '820px',
              margin: '0 auto 52px auto',
              color: '#f5f5f5',
              textShadow: '0 2px 16px rgba(0,0,0,0.5)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.19, 1.0, 0.22, 1.0] }}
          >
            Gros œuvre, rénovation, extension, construction neuve.
            <br />
            100% de nos chantiers respectent les délais et le budget annoncé.
          </motion.p>

          {/* CTA — UN SEUL CTA PRINCIPAL fort */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.19, 1.0, 0.22, 1.0] }}
          >
            {/* CTA Primaire — Action engagement fort */}
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 text-stone-900 bg-white hover:bg-stone-50 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl"
              style={{
                padding: '22px 48px',
                fontSize: '17px',
                fontWeight: 700,
                letterSpacing: '0.01em',
                borderRadius: '6px',
                boxShadow: '0 6px 40px rgba(0,0,0,0.35), 0 2px 12px rgba(0,0,0,0.2)',
              }}
            >
              <span>Estimer mon projet</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            {/* CTA Secondaire — Beaucoup plus discret */}
            <Link
              href="/projets"
              className="group inline-flex items-center gap-2 text-white/90 hover:text-white transition-all duration-200"
              style={{
                fontSize: '15px',
                fontWeight: 500,
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
                textDecorationThickness: '1px',
              }}
            >
              <span>Voir 47 réalisations</span>
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          {/* TRUST MINIMAL — Seulement éléments différenciants forts */}
          <motion.div
            className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center"
            style={{
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.02em',
              color: '#e5e5e5',
              textShadow: '0 1px 8px rgba(0,0,0,0.4)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75 }}
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>0 retard de chantier depuis 2018</span>
            </div>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Budget moyen 2,1M€ par projet</span>
            </div>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Garantie décennale + RC Pro 10M€</span>
            </div>
          </motion.div>

        </div>
      </motion.div>

    </section>
  );
}
