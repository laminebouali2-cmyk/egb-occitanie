'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

/**
 * Realisations — Editorial portfolio grid
 *
 * Inspired by airelles.com and architectural magazines.
 * Asymmetric layout with breathing room.
 * Large hero image + offset smaller images.
 * Minimal text — let the images speak.
 * Premium hover interactions.
 */

const projects = [
  {
    title: 'Villa Contemporaine',
    subtitle: 'Construction neuve',
    location: 'Toulouse',
    description:
      'Architecture moderne, matériaux nobles, finitions d\'exception. Une villa conçue comme un lieu de vie unique.',
    image: '/realisation-1.jpg',
    aspect: 'aspect-[4/3]',
  },
  {
    title: 'Appartement Toulousain',
    subtitle: 'Rénovation complète',
    location: 'Toulouse Centre',
    description:
      'Transformer l\'existant en quelque chose qui vous ressemble. Chaque détail repensé.',
    image: '/realisation-2.jpg',
    aspect: 'aspect-[3/4]',
  },
  {
    title: 'Extension Jardin',
    subtitle: 'Extension sur-mesure',
    location: 'Haute-Garonne',
    description:
      'Agrandir sans dénaturer. Un volume contemporain en harmonie avec l\'existant.',
    image: '/realisation-3.jpg',
    aspect: 'aspect-[3/4]',
  },
  {
    title: 'Mas Provençal',
    subtitle: 'Construction',
    location: 'Occitanie',
    description:
      'Le charme de la tradition, le confort du contemporain. Un mas pensé pour traverser les générations.',
    image: '/realisation-4.jpg',
    aspect: 'aspect-[4/3]',
  },
];

export function Realisations() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section ref={sectionRef} className="bg-white overflow-hidden" style={{ padding: 'clamp(5rem, 12vw, 10rem) 0' }}>
      <div className="container">
        {/* Section Header — editorial, left-aligned */}
        <motion.div
          className="mb-20 md:mb-28"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-stone-900" />
            <span className="text-overline">Nos Réalisations</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h2 className="max-w-xl">
              Chaque projet
              <br />
              <span className="text-stone-400">raconte une histoire</span>
            </h2>

            <Link
              href="/projets"
              className="group inline-flex items-center gap-3 self-start md:self-auto pb-1"
              style={{
                fontSize: '0.85rem',
                fontWeight: 500,
                letterSpacing: '0.02em',
                borderBottom: '1px solid var(--color-stone-300)',
                transition: 'border-color 0.3s ease',
              }}
            >
              <span>Voir tous les projets</span>
              <svg
                className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* Editorial Grid — Row 1: Large left + tall right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Featured — large landscape */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <Link href="/projets" className="group block">
              <div className="relative aspect-[4/3] overflow-hidden mb-5">
                <Image
                  src={projects[0].image}
                  alt={projects[0].title}
                  fill
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <p
                    className="text-stone-400 mb-1"
                    style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                  >
                    {projects[0].subtitle} — {projects[0].location}
                  </p>
                  <h3
                    className="group-hover:text-stone-500 transition-colors duration-300"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                      fontWeight: 400,
                    }}
                  >
                    {projects[0].title}
                  </h3>
                </div>
                <svg
                  className="w-5 h-5 text-stone-300 group-hover:text-stone-900 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </motion.div>

          {/* Tall portrait */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <Link href="/projets" className="group block h-full">
              <div className="relative aspect-[3/4] lg:aspect-auto lg:h-[calc(100%-3.5rem)] overflow-hidden mb-5">
                <Image
                  src={projects[1].image}
                  alt={projects[1].title}
                  fill
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <p
                    className="text-stone-400 mb-1"
                    style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                  >
                    {projects[1].subtitle} — {projects[1].location}
                  </p>
                  <h3
                    className="group-hover:text-stone-500 transition-colors duration-300"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                      fontWeight: 400,
                    }}
                  >
                    {projects[1].title}
                  </h3>
                </div>
                <svg
                  className="w-5 h-5 text-stone-300 group-hover:text-stone-900 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Editorial Grid — Row 2: Portrait left + landscape right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-20 md:mb-28">
          {/* Portrait */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.45 }}
          >
            <Link href="/projets" className="group block h-full">
              <div className="relative aspect-[3/4] lg:aspect-auto lg:h-[calc(100%-3.5rem)] overflow-hidden mb-5">
                <Image
                  src={projects[2].image}
                  alt={projects[2].title}
                  fill
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <p
                    className="text-stone-400 mb-1"
                    style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                  >
                    {projects[2].subtitle} — {projects[2].location}
                  </p>
                  <h3
                    className="group-hover:text-stone-500 transition-colors duration-300"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                      fontWeight: 400,
                    }}
                  >
                    {projects[2].title}
                  </h3>
                </div>
                <svg
                  className="w-5 h-5 text-stone-300 group-hover:text-stone-900 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </motion.div>

          {/* Large landscape */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.6 }}
          >
            <Link href="/projets" className="group block">
              <div className="relative aspect-[4/3] overflow-hidden mb-5">
                <Image
                  src={projects[3].image}
                  alt={projects[3].title}
                  fill
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <p
                    className="text-stone-400 mb-1"
                    style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                  >
                    {projects[3].subtitle} — {projects[3].location}
                  </p>
                  <h3
                    className="group-hover:text-stone-500 transition-colors duration-300"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                      fontWeight: 400,
                    }}
                  >
                    {projects[3].title}
                  </h3>
                </div>
                <svg
                  className="w-5 h-5 text-stone-300 group-hover:text-stone-900 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Emotional CTA band — not a button, a statement */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p
            className="mb-8"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 400,
              color: 'var(--color-stone-400)',
              maxWidth: '500px',
              margin: '0 auto',
              lineHeight: 1.4,
            }}
          >
            Votre projet mérite la même attention.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3"
            style={{
              fontSize: '0.85rem',
              fontWeight: 500,
              letterSpacing: '0.02em',
              color: 'var(--color-stone-900)',
              borderBottom: '1.5px solid var(--color-stone-900)',
              paddingBottom: '4px',
              transition: 'color 0.3s ease',
            }}
          >
            <span>Parlons de votre vision</span>
            <svg
              className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
