'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

/**
 * ProjetsContent — Editorial portfolio gallery
 *
 * Staggered grid: Olson Kundig vertical rhythm + Aman breathing room.
 * Images speak first. Text is minimal, editorial.
 * Aspect ratios: cinematic 2.35:1, landscape 4:3, portrait 3:4, tall 4:5.
 */

const projects = [
  {
    id: 1,
    title: 'Villa Contemporaine',
    location: 'Toulouse',
    category: 'Construction neuve',
    year: '2024',
    surface: '280 m²',
    description:
      'Architecture contemporaine, lignes épurées, matériaux nobles. Une villa conçue comme un lieu de vie, pas comme une démonstration.',
    image: '/realisation-1.jpg',
  },
  {
    id: 2,
    title: 'Réhabilitation Corps de Ferme',
    location: 'Albi',
    category: 'Rénovation',
    year: '2024',
    surface: '450 m²',
    description:
      'Transformer un corps de ferme du XIXe sans trahir son âme. Pierre, bois, lumière — chaque choix au service de l\'histoire du lieu.',
    image: '/realisation-2.jpg',
  },
  {
    id: 3,
    title: 'Extension Maison de Maître',
    location: 'Montauban',
    category: 'Extension',
    year: '2023',
    surface: '120 m²',
    description:
      'Un volume contemporain greffé sur une maison de caractère. Le dialogue entre deux époques, en toute discrétion.',
    image: '/realisation-3.jpg',
  },
  {
    id: 4,
    title: 'Mas Provençal',
    location: 'Occitanie',
    category: 'Construction',
    year: '2023',
    surface: '220 m²',
    description:
      'Le charme de la tradition, le confort du contemporain. Un mas pensé pour traverser les générations.',
    image: '/realisation-4.jpg',
  },
  {
    id: 5,
    title: 'Maison Passive',
    location: 'Castres',
    category: 'Construction neuve',
    year: '2023',
    surface: '180 m²',
    description:
      'Haute performance énergétique, matériaux biosourcés. Construire responsable, sans compromis sur l\'esthétique.',
    image: null,
  },
  {
    id: 6,
    title: 'Appartement Haussmannien',
    location: 'Toulouse Centre',
    category: 'Rénovation',
    year: '2022',
    surface: '200 m²',
    description:
      'Rénovation complète d\'un appartement de standing. Les moulures restent, le confort arrive.',
    image: null,
  },
];

const categories = ['Tous', 'Construction neuve', 'Rénovation', 'Extension'];

function ProjectImage({ src, alt }: { src: string | null; alt: string }) {
  if (!src) {
    return (
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ background: 'var(--color-stone-100)' }}
      >
        <span
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--color-stone-400)',
          }}
        >
          Bientôt disponible
        </span>
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
    />
  );
}

function ProjectMeta({
  category,
  location,
  year,
  surface,
}: {
  category: string;
  location: string;
  year: string;
  surface: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
      {[category, location, surface, year].map((item, i) => (
        <span key={i} className="flex items-center gap-4">
          {i > 0 && (
            <span
              className="w-[3px] h-[3px] rounded-full"
              style={{ background: 'var(--color-stone-300)' }}
            />
          )}
          <span
            style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-stone-400)',
            }}
          >
            {item}
          </span>
        </span>
      ))}
    </div>
  );
}

export function ProjetsContent() {
  const heroRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const isGalleryInView = useInView(galleryRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <>
      {/* ================================================================
          HERO — Full-height editorial opening
          ================================================================ */}
      <section
        ref={heroRef}
        className="relative flex items-end overflow-hidden"
        style={{ height: '75vh', minHeight: '500px' }}
      >
        <div className="absolute inset-0">
          <motion.div className="absolute inset-0" style={{ y: heroY }}>
            <Image
              src="/realisation-1.jpg"
              alt="Réalisations EGB Occitanie"
              fill
              priority
              className="object-cover"
              style={{ objectPosition: 'center 40%' }}
              sizes="100vw"
              quality={85}
            />
          </motion.div>
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.35) 100%)',
            }}
          />
        </div>

        <motion.div
          className="relative z-10 w-full"
          style={{ opacity: heroOpacity }}
        >
          <div className="container pb-12 md:pb-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontSize: '0.6875rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.6)',
                marginBottom: '1.25rem',
              }}
            >
              Nos Réalisations
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                fontWeight: 400,
                lineHeight: 1.1,
                color: '#FFFFFF',
                maxWidth: '700px',
              }}
            >
              Des projets qui
              <br />
              parlent d&apos;eux-mêmes
            </motion.h1>
          </div>
        </motion.div>
      </section>

      {/* ================================================================
          FILTER BAR — Subtle, refined
          ================================================================ */}
      <section style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <div
            className="flex flex-wrap gap-1 items-center"
            style={{
              padding: '1.75rem 0',
              borderBottom: '1px solid var(--color-stone-200)',
            }}
          >
            {categories.map((category, index) => (
              <button
                key={category}
                className="cursor-pointer transition-colors duration-300"
                style={{
                  padding: '0.5rem 1.25rem',
                  fontSize: '0.75rem',
                  fontWeight: index === 0 ? 500 : 400,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: index === 0 ? 'var(--color-stone-900)' : 'var(--color-stone-400)',
                  background: index === 0 ? 'var(--color-stone-100)' : 'transparent',
                  border: 'none',
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          EDITORIAL GALLERY — Staggered, asymmetric, breathing
          ================================================================ */}
      <section
        ref={galleryRef}
        style={{ background: 'var(--color-white)', padding: 'clamp(4rem, 10vw, 8rem) 0' }}
      >
        <div className="container">

          {/* -----------------------------------------------------------
              ROW 1: Full-width cinematic — project #1
              ----------------------------------------------------------- */}
          <motion.div
            className="mb-6 md:mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <Link href="/projets" className="group block">
              <div className="relative aspect-[16/9] md:aspect-[2.35/1] overflow-hidden">
                <ProjectImage src={projects[0].image} alt={projects[0].title} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
              </div>
            </Link>
          </motion.div>

          {/* Caption — split layout: title left, description right */}
          <motion.div
            className="grid grid-cols-12 mb-24 md:mb-36"
            initial={{ opacity: 0 }}
            animate={isGalleryInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="col-span-12 lg:col-span-5 lg:col-start-1">
              <ProjectMeta
                category={projects[0].category}
                location={projects[0].location}
                year={projects[0].year}
                surface={projects[0].surface}
              />
              <h2
                className="mt-4"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontWeight: 400,
                  lineHeight: 1.2,
                  color: 'var(--color-stone-900)',
                }}
              >
                {projects[0].title}
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-7 mt-4 lg:mt-0 flex items-end">
              <p
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  color: 'var(--color-stone-500)',
                  maxWidth: '38em',
                }}
              >
                {projects[0].description}
              </p>
            </div>
          </motion.div>

          {/* -----------------------------------------------------------
              ROW 2: Staggered pair — 7col landscape + 5col portrait (offset down)
              ----------------------------------------------------------- */}
          <div className="grid grid-cols-12 gap-x-6 md:gap-x-8 mb-24 md:mb-36">
            <motion.div
              className="col-span-12 lg:col-span-7 mb-10 lg:mb-0"
              initial={{ opacity: 0, y: 40 }}
              animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              <Link href="/projets" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ProjectImage src={projects[1].image} alt={projects[1].title} />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
                </div>
              </Link>
              <div className="mt-5">
                <ProjectMeta
                  category={projects[1].category}
                  location={projects[1].location}
                  year={projects[1].year}
                  surface={projects[1].surface}
                />
                <h3
                  className="mt-3 mb-2"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.25rem, 2.2vw, 1.625rem)',
                    fontWeight: 400,
                    lineHeight: 1.25,
                    color: 'var(--color-stone-900)',
                  }}
                >
                  {projects[1].title}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: 1.7,
                    color: 'var(--color-stone-500)',
                    maxWidth: '38em',
                  }}
                >
                  {projects[1].description}
                </p>
              </div>
            </motion.div>

            <motion.div
              className="col-span-12 lg:col-span-5 lg:mt-24"
              initial={{ opacity: 0, y: 40 }}
              animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.45 }}
            >
              <Link href="/projets" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <ProjectImage src={projects[2].image} alt={projects[2].title} />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
                </div>
              </Link>
              <div className="mt-5">
                <ProjectMeta
                  category={projects[2].category}
                  location={projects[2].location}
                  year={projects[2].year}
                  surface={projects[2].surface}
                />
                <h3
                  className="mt-3 mb-2"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.25rem, 2.2vw, 1.625rem)',
                    fontWeight: 400,
                    lineHeight: 1.25,
                    color: 'var(--color-stone-900)',
                  }}
                >
                  {projects[2].title}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: 1.7,
                    color: 'var(--color-stone-500)',
                    maxWidth: '38em',
                  }}
                >
                  {projects[2].description}
                </p>
              </div>
            </motion.div>
          </div>

          {/* -----------------------------------------------------------
              INTERLUDE — Editorial text (Aman pattern)
              ----------------------------------------------------------- */}
          <motion.div
            className="grid grid-cols-12 mb-24 md:mb-36"
            initial={{ opacity: 0 }}
            animate={isGalleryInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
              <div
                className="mx-auto mb-6"
                style={{ width: '40px', height: '1px', background: 'var(--color-stone-300)' }}
              />
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                  fontWeight: 400,
                  lineHeight: 1.5,
                  color: 'var(--color-stone-400)',
                  maxWidth: '32em',
                  margin: '0 auto',
                }}
              >
                Chaque projet commence par une écoute.
                <br />
                Ce que vous imaginez, nous le rendons possible.
              </p>
            </div>
          </motion.div>

          {/* -----------------------------------------------------------
              ROW 3: Reversed — 5col portrait (offset) + 7col landscape
              ----------------------------------------------------------- */}
          <div className="grid grid-cols-12 gap-x-6 md:gap-x-8 mb-24 md:mb-36">
            <motion.div
              className="col-span-12 lg:col-span-5 lg:mt-16 mb-10 lg:mb-0 order-2 lg:order-1"
              initial={{ opacity: 0, y: 40 }}
              animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.55 }}
            >
              <Link href="/projets" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <ProjectImage src={projects[3].image} alt={projects[3].title} />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
                </div>
              </Link>
              <div className="mt-5">
                <ProjectMeta
                  category={projects[3].category}
                  location={projects[3].location}
                  year={projects[3].year}
                  surface={projects[3].surface}
                />
                <h3
                  className="mt-3 mb-2"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.25rem, 2.2vw, 1.625rem)',
                    fontWeight: 400,
                    lineHeight: 1.25,
                    color: 'var(--color-stone-900)',
                  }}
                >
                  {projects[3].title}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: 1.7,
                    color: 'var(--color-stone-500)',
                    maxWidth: '38em',
                  }}
                >
                  {projects[3].description}
                </p>
              </div>
            </motion.div>

            <motion.div
              className="col-span-12 lg:col-span-7 order-1 lg:order-2 mb-10 lg:mb-0"
              initial={{ opacity: 0, y: 40 }}
              animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.6 }}
            >
              <Link href="/projets" className="group block">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <ProjectImage src={projects[4].image} alt={projects[4].title} />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
                </div>
              </Link>
              <div className="mt-5">
                <ProjectMeta
                  category={projects[4].category}
                  location={projects[4].location}
                  year={projects[4].year}
                  surface={projects[4].surface}
                />
                <h3
                  className="mt-3 mb-2"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.25rem, 2.2vw, 1.625rem)',
                    fontWeight: 400,
                    lineHeight: 1.25,
                    color: 'var(--color-stone-900)',
                  }}
                >
                  {projects[4].title}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: 1.7,
                    color: 'var(--color-stone-500)',
                    maxWidth: '38em',
                  }}
                >
                  {projects[4].description}
                </p>
              </div>
            </motion.div>
          </div>

          {/* -----------------------------------------------------------
              ROW 4: Full-width cinematic — project #6
              ----------------------------------------------------------- */}
          <motion.div
            className="mb-6 md:mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.65 }}
          >
            <Link href="/projets" className="group block">
              <div className="relative aspect-[16/9] overflow-hidden">
                <ProjectImage src={projects[5].image} alt={projects[5].title} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
              </div>
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-12 mb-24 md:mb-36"
            initial={{ opacity: 0 }}
            animate={isGalleryInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="col-span-12 lg:col-span-5 lg:col-start-1">
              <ProjectMeta
                category={projects[5].category}
                location={projects[5].location}
                year={projects[5].year}
                surface={projects[5].surface}
              />
              <h3
                className="mt-3"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontWeight: 400,
                  lineHeight: 1.2,
                  color: 'var(--color-stone-900)',
                }}
              >
                {projects[5].title}
              </h3>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-7 mt-4 lg:mt-0 flex items-end">
              <p
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  color: 'var(--color-stone-500)',
                  maxWidth: '38em',
                }}
              >
                {projects[5].description}
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================================================================
          CTA — Emotional, not transactional
          ================================================================ */}
      <section
        style={{
          background: 'var(--color-stone-50)',
          padding: 'clamp(5rem, 12vw, 10rem) 0',
        }}
      >
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
              <div
                className="mx-auto mb-8"
                style={{ width: '40px', height: '1px', background: 'var(--color-stone-300)' }}
              />
              <h2
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: 'var(--color-stone-900)',
                }}
              >
                Votre projet mérite
                <br />
                la même attention
              </h2>
              <p
                className="mb-10"
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--color-stone-500)',
                  maxWidth: '38em',
                  margin: '0 auto 2.5rem auto',
                }}
              >
                Chaque projet commence par une conversation.
                Parlez-nous de ce que vous imaginez.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 transition-all duration-300 hover:-translate-y-1"
                style={{
                  padding: '1rem 2.25rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  color: 'var(--color-white)',
                  background: 'var(--color-stone-900)',
                }}
              >
                <span>Discuter de mon projet</span>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
