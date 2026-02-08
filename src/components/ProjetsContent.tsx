'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

/*
 * ==========================================================================
 * PAGE PROJETS — PARCOURS NEUROMARKETING EN 7 ACTES
 * ==========================================================================
 *
 * Ce n'est pas un portfolio. C'est un voyage émotionnel.
 *
 * ACT 1 — CAPTURE      → Le rêve (System 1, reptilian brain)
 * ACT 2 — ENVERGURE    → L'échelle du savoir-faire (Authority - Cialdini)
 * ACT 3 — DÉSIR        → La vie à l'intérieur (Future pacing - limbic)
 *         INTERLUDE     → Notre philosophie (StoryBrand: le client est le héros)
 * ACT 4 — SAVOIR-FAIRE → Le processus (Trust - neocortex)
 * ACT 5 — INTIMITÉ     → Les espaces privés + preuve sociale (Liking + Social Proof)
 * ACT 6 — DIVERSITÉ    → Portfolio complet (Commitment - "on fait tout")
 * ACT 7 — EXCLUSIVITÉ  → CTA sélectif (Scarcity - Hermès approach)
 *
 * Principes appliqués:
 * - Peak-End Rule (Kahneman): finir sur l'émotion la plus forte
 * - Loss Aversion: sous-entendre le risque d'un mauvais choix
 * - Contrast Effect: chantier → résultat = transformation puissante
 * - Reciprocity: donner de la valeur (expertise) avant de demander
 */

function Img({
  src,
  alt,
  priority = false,
  className = '',
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      className={`object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] ${className}`}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
    />
  );
}

function Overline({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontSize: '0.6875rem',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--color-stone-400)',
        fontWeight: 500,
      }}
    >
      {children}
    </span>
  );
}

function SectionTitle({
  children,
  size = 'md',
}: {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}) {
  const sizes = {
    sm: 'clamp(1.25rem, 2.2vw, 1.625rem)',
    md: 'clamp(1.5rem, 3vw, 2.25rem)',
    lg: 'clamp(2rem, 4vw, 3.25rem)',
  };
  return (
    <h2
      style={{
        fontFamily: 'var(--font-serif)',
        fontSize: sizes[size],
        fontWeight: 400,
        lineHeight: 1.2,
        color: 'var(--color-stone-900)',
      }}
    >
      {children}
    </h2>
  );
}

function Body({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={className}
      style={{
        fontSize: '0.9375rem',
        lineHeight: 1.7,
        color: 'var(--color-stone-500)',
        maxWidth: '38em',
      }}
    >
      {children}
    </p>
  );
}

function Divider() {
  return (
    <div
      className="mx-auto"
      style={{ width: '40px', height: '1px', background: 'var(--color-stone-300)' }}
    />
  );
}

/* Reusable fade-in wrapper */
function Reveal({
  children,
  delay = 0,
  className = '',
  isInView,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  isInView: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay }}
    >
      {children}
    </motion.div>
  );
}

export function ProjetsContent() {
  const heroRef = useRef<HTMLElement>(null);
  const act2Ref = useRef<HTMLDivElement>(null);
  const act3Ref = useRef<HTMLDivElement>(null);
  const act4Ref = useRef<HTMLDivElement>(null);
  const act5Ref = useRef<HTMLDivElement>(null);
  const act6Ref = useRef<HTMLDivElement>(null);

  const act2InView = useInView(act2Ref, { once: true, margin: '-80px' });
  const act3InView = useInView(act3Ref, { once: true, margin: '-80px' });
  const act4InView = useInView(act4Ref, { once: true, margin: '-80px' });
  const act5InView = useInView(act5Ref, { once: true, margin: '-80px' });
  const act6InView = useInView(act6Ref, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <>
      {/* ================================================================
          ACT 1 — CAPTURE
          Le rêve. System 1. Pas besoin de mots.
          hero-toulouse.jpg: villa, lavande, cyprès, piscine
          ================================================================ */}
      <section
        ref={heroRef}
        className="relative flex items-end overflow-hidden"
        style={{ height: '80vh', minHeight: '550px' }}
      >
        <div className="absolute inset-0">
          <motion.div className="absolute inset-0" style={{ y: heroY }}>
            <Image
              src="/hero-toulouse.jpg"
              alt="Villa premium en Occitanie — construction sur-mesure EGB"
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
                'linear-gradient(to bottom, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.38) 100%)',
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
                color: 'rgba(255,255,255,0.55)',
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
              Imaginer. Construire.
              <br />
              Habiter.
            </motion.h1>
          </div>
        </motion.div>
      </section>

      {/* ================================================================
          ACT 2 — ENVERGURE
          Vue aérienne. Montre l'échelle. "Ce n'est pas un artisan,
          c'est une entreprise qui construit des domaines."
          Cialdini: Authority.
          ================================================================ */}
      <section
        ref={act2Ref}
        style={{ background: 'var(--color-white)', padding: 'clamp(4rem, 10vw, 8rem) 0' }}
      >
        <div className="container">
          <Reveal isInView={act2InView} className="mb-6 md:mb-8">
            <Link href="/projets" className="group block">
              <div className="relative aspect-[16/9] md:aspect-[2.35/1] overflow-hidden">
                <Img
                  src="/aerial-toulouse.jpg"
                  alt="Vue aérienne — domaine complet construit par EGB Occitanie"
                  className="group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
              </div>
            </Link>
          </Reveal>

          {/* Split caption: title left, insight right */}
          <Reveal isInView={act2InView} delay={0.15}>
            <div className="grid grid-cols-12 gap-y-4 mb-0">
              <div className="col-span-12 lg:col-span-5">
                <Overline>Construction neuve — Toulouse</Overline>
                <h2
                  className="mt-3"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                    fontWeight: 400,
                    lineHeight: 1.2,
                    color: 'var(--color-stone-900)',
                  }}
                >
                  Domaine Complet
                </h2>
              </div>
              <div className="col-span-12 lg:col-span-5 lg:col-start-7 flex items-end">
                <Body>
                  Gros œuvre, piscine, aménagements paysagers, terrasses — un projet mené de A à Z.
                  Un seul interlocuteur, de la fondation à la remise des clés.
                </Body>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================================================================
          ACT 3 — DÉSIR
          Les intérieurs. Future pacing: le prospect vit mentalement
          dans ces espaces. Limbic system activation.
          3 images: salon lifestyle → salon contemporain → cuisine
          ================================================================ */}
      <section
        ref={act3Ref}
        style={{ background: 'var(--color-stone-50)', padding: 'clamp(4rem, 10vw, 8rem) 0' }}
      >
        <div className="container">
          {/* Section intro */}
          <Reveal isInView={act3InView} className="mb-16 md:mb-24">
            <div className="max-w-lg">
              <Overline>L&apos;art de vivre à l&apos;intérieur</Overline>
              <SectionTitle size="lg">
                <>On ne construit pas des murs.<br />On crée des vies.</>
              </SectionTitle>
            </div>
          </Reveal>

          {/* Image grid: large lifestyle + 2 stacked right */}
          <div className="grid grid-cols-12 gap-6 md:gap-8 mb-6 md:mb-8">
            {/* Large left — mediterranean living */}
            <Reveal isInView={act3InView} delay={0.15} className="col-span-12 lg:col-span-7">
              <div className="group relative aspect-[4/3] overflow-hidden">
                <Img
                  src="/interior-toulouse.jpg"
                  alt="Salon méditerranéen — arches, jardin de lavande, lumière naturelle"
                  className="group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
              </div>
            </Reveal>

            {/* Right column — 2 stacked images */}
            <div className="col-span-12 lg:col-span-5 grid gap-6 md:gap-8">
              <Reveal isInView={act3InView} delay={0.3}>
                <div className="group relative aspect-[4/3] overflow-hidden">
                  <Img
                    src="/interior-living.jpg"
                    alt="Salon contemporain — béton, cheminée, double hauteur, art"
                    className="group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
                </div>
              </Reveal>
              <Reveal isInView={act3InView} delay={0.45}>
                <div className="group relative aspect-[4/3] overflow-hidden">
                  <Img
                    src="/interior-kitchen.jpg"
                    alt="Cuisine premium — chêne massif, marbre noir, suspensions laiton"
                    className="group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
                </div>
              </Reveal>
            </div>
          </div>

          {/* Micro-text under images — emotional, not technical */}
          <Reveal isInView={act3InView} delay={0.5}>
            <Body>
              Chaque espace est pensé pour la lumière, pour la circulation, pour le quotidien.
              Pas pour le magazine — pour vous.
            </Body>
          </Reveal>
        </div>
      </section>

      {/* ================================================================
          INTERLUDE — PHILOSOPHIE
          StoryBrand: le client est le héros. EGB est le guide.
          Ce texte donne de la valeur (Reciprocity) et positionne l'entreprise.
          ================================================================ */}
      <section style={{ background: 'var(--color-white)', padding: 'clamp(5rem, 12vw, 9rem) 0' }}>
        <div className="container">
          <div className="grid grid-cols-12">
            <motion.div
              className="col-span-12 lg:col-span-6 lg:col-start-4 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1 }}
            >
              <Divider />
              <p
                className="mt-8 mb-6"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.375rem, 2.8vw, 2rem)',
                  fontWeight: 400,
                  lineHeight: 1.45,
                  color: 'var(--color-stone-900)',
                  maxWidth: '28em',
                  margin: '2rem auto 1.5rem',
                }}
              >
                Le plus important dans un projet de construction,
                ce n&apos;est pas la pierre.
                <br />
                C&apos;est la confiance.
              </p>
              <p
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.75,
                  color: 'var(--color-stone-400)',
                  maxWidth: '34em',
                  margin: '0 auto',
                }}
              >
                Nous ne sommes pas là pour vous vendre une maison.
                Nous sommes là pour comprendre comment vous vivez,
                et construire autour de ça.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================
          ACT 4 — SAVOIR-FAIRE
          Construction en cours + résultat fini.
          Contrast Effect: chantier brut → résultat magnifique.
          C'est la section TRUST. Le neocortex valide.
          ================================================================ */}
      <section
        ref={act4Ref}
        style={{ background: 'var(--color-white)', padding: '0 0 clamp(4rem, 10vw, 8rem)' }}
      >
        <div className="container">
          <Reveal isInView={act4InView} className="mb-16 md:mb-24">
            <div className="max-w-lg">
              <Overline>Notre savoir-faire</Overline>
              <SectionTitle size="lg">
                <>Derrière chaque finition,<br />des centaines d&apos;heures de métier</>
              </SectionTitle>
            </div>
          </Reveal>

          {/* Staggered: construction left (portrait) + finished right (landscape) */}
          <div className="grid grid-cols-12 gap-x-6 md:gap-x-8">
            {/* Construction — portrait, powerful */}
            <Reveal isInView={act4InView} delay={0.15} className="col-span-12 lg:col-span-5 mb-10 lg:mb-0">
              <div className="group relative aspect-[3/4] overflow-hidden">
                <Img
                  src="/construction-toulouse.jpg"
                  alt="Chantier gros œuvre — maçons sur échafaudages, brique rose, Occitanie"
                  className="group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
              </div>
              <div className="mt-5">
                <Overline>En cours de construction</Overline>
                <p
                  className="mt-3"
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: 1.7,
                    color: 'var(--color-stone-500)',
                    maxWidth: '32em',
                  }}
                >
                  Gros œuvre en brique traditionnelle. Cinq compagnons sur site.
                  Les fondations ne se voient pas — elles se ressentent pendant 100 ans.
                </p>
              </div>
            </Reveal>

            {/* Finished result — landscape, pushed down for stagger */}
            <Reveal isInView={act4InView} delay={0.3} className="col-span-12 lg:col-span-7 lg:mt-20">
              <Link href="/projets" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Img
                    src="/realisation-1.jpg"
                    alt="Villa contemporaine terminée — piscine miroir, coucher de soleil"
                    className="group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
                </div>
              </Link>
              <div className="mt-5">
                <Overline>Projet livré — Villa Contemporaine, Toulouse</Overline>
                <p
                  className="mt-3"
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: 1.7,
                    color: 'var(--color-stone-500)',
                    maxWidth: '38em',
                  }}
                >
                  280 m² de lignes épurées, piscine miroir, terrasses panoramiques.
                  Du premier coup de pelle à la remise des clés : 14 mois, zéro retard.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================================================================
          ACT 5 — INTIMITÉ + PREUVE SOCIALE
          Les chambres = espaces privés. Emotional bond.
          + Témoignage client tissé dans le flux (Social Proof - Cialdini)
          ================================================================ */}
      <section
        ref={act5Ref}
        style={{ background: 'var(--color-stone-50)', padding: 'clamp(4rem, 10vw, 8rem) 0' }}
      >
        <div className="container">
          {/* Two bedrooms side by side */}
          <div className="grid grid-cols-12 gap-6 md:gap-8 mb-16 md:mb-24">
            <Reveal isInView={act5InView} className="col-span-12 lg:col-span-6">
              <div className="group relative aspect-[4/3] overflow-hidden">
                <Img
                  src="/bedroom-toulouse.jpg"
                  alt="Chambre lumineuse — bois clair, baies vitrées, vue jardin"
                  className="group-hover:scale-[1.03]"
                />
              </div>
            </Reveal>
            <Reveal isInView={act5InView} delay={0.15} className="col-span-12 lg:col-span-6">
              <div className="group relative aspect-[4/3] overflow-hidden">
                <Img
                  src="/interior-bedroom.jpg"
                  alt="Suite parentale panoramique — baies sol-plafond, nature"
                  className="group-hover:scale-[1.03]"
                />
              </div>
            </Reveal>
          </div>

          {/* Embedded testimonial — feels editorial, not marketing */}
          <Reveal isInView={act5InView} delay={0.3}>
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-8 lg:col-start-3">
                <div
                  className="text-center"
                  style={{
                    padding: 'clamp(2rem, 5vw, 3.5rem) 0',
                    borderTop: '1px solid var(--color-stone-200)',
                    borderBottom: '1px solid var(--color-stone-200)',
                  }}
                >
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="var(--color-stone-900)">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                      fontWeight: 400,
                      lineHeight: 1.6,
                      color: 'var(--color-stone-700)',
                      maxWidth: '36em',
                      margin: '0 auto 1.5rem',
                    }}
                  >
                    &ldquo;On a visité le chantier chaque semaine pendant 14 mois.
                    Pas une seule fois on n&apos;a eu de mauvaise surprise.
                    Quand on voit le résultat, on sait qu&apos;on a fait le bon choix.&rdquo;
                  </p>

                  <p
                    style={{
                      fontSize: '0.8125rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-stone-400)',
                    }}
                  >
                    Marc & Sophie D. — Villa 280m², Toulouse
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================================================================
          ACT 6 — DIVERSITÉ DU PORTFOLIO
          Montre qu'on fait tout: rénovation, extension, mas.
          Commitment (Cialdini): "si ils font tout ça, ils peuvent
          gérer mon projet aussi"
          ================================================================ */}
      <section
        ref={act6Ref}
        style={{ background: 'var(--color-white)', padding: 'clamp(4rem, 10vw, 8rem) 0' }}
      >
        <div className="container">
          <Reveal isInView={act6InView} className="mb-16 md:mb-24">
            <div className="max-w-lg">
              <Overline>Construction · Rénovation · Extension</Overline>
              <SectionTitle size="lg">
                <>Chaque projet est différent.<br />Notre exigence, jamais.</>
              </SectionTitle>
            </div>
          </Reveal>

          {/* 3-column grid — remaining projects */}
          <div className="grid grid-cols-12 gap-6 md:gap-8">
            <Reveal isInView={act6InView} delay={0.1} className="col-span-12 md:col-span-4">
              <Link href="/projets" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden mb-5">
                  <Img
                    src="/realisation-2.jpg"
                    alt="Rénovation appartement toulousain"
                    className="group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
                </div>
                <Overline>Rénovation complète — Toulouse</Overline>
                <h3
                  className="mt-2 group-hover:text-stone-500 transition-colors"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.125rem, 1.8vw, 1.375rem)',
                    fontWeight: 400,
                    color: 'var(--color-stone-900)',
                  }}
                >
                  Appartement Toulousain
                </h3>
              </Link>
            </Reveal>

            <Reveal isInView={act6InView} delay={0.2} className="col-span-12 md:col-span-4">
              <Link href="/projets" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden mb-5">
                  <Img
                    src="/realisation-3.jpg"
                    alt="Extension maison contemporaine Haute-Garonne"
                    className="group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
                </div>
                <Overline>Extension — Haute-Garonne</Overline>
                <h3
                  className="mt-2 group-hover:text-stone-500 transition-colors"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.125rem, 1.8vw, 1.375rem)',
                    fontWeight: 400,
                    color: 'var(--color-stone-900)',
                  }}
                >
                  Extension Jardin
                </h3>
              </Link>
            </Reveal>

            <Reveal isInView={act6InView} delay={0.3} className="col-span-12 md:col-span-4">
              <Link href="/projets" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden mb-5">
                  <Img
                    src="/realisation-4.jpg"
                    alt="Construction mas provençal Occitanie"
                    className="group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
                </div>
                <Overline>Construction — Occitanie</Overline>
                <h3
                  className="mt-2 group-hover:text-stone-500 transition-colors"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.125rem, 1.8vw, 1.375rem)',
                    fontWeight: 400,
                    color: 'var(--color-stone-900)',
                  }}
                >
                  Mas Provençal
                </h3>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================================================================
          ACT 7 — EXCLUSIVITÉ + CTA
          Scarcity (Cialdini): on ne prend pas tout le monde.
          Peak-End Rule (Kahneman): finir sur l'émotion la plus forte.
          L'approche Hermès: le client sent qu'il est sélectionné.
          ================================================================ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: '500px' }}
      >
        {/* Background: the lifestyle image as emotional anchor */}
        <div className="absolute inset-0">
          <Image
            src="/interior-toulouse.jpg"
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: 'center 60%' }}
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(28,25,23,0.75) 0%, rgba(28,25,23,0.85) 100%)',
            }}
          />
        </div>

        <div
          className="relative z-10 container flex items-center justify-center text-center"
          style={{ padding: 'clamp(5rem, 12vw, 10rem) 0' }}
        >
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Divider />
            <h2
              className="mt-8 mb-6"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
                fontWeight: 400,
                lineHeight: 1.15,
                color: '#FFFFFF',
              }}
            >
              Nous n&apos;accompagnons que
              <br />
              quelques projets par an.
            </h2>
            <p
              className="mb-10"
              style={{
                fontSize: '1rem',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.6)',
                maxWidth: '32em',
                margin: '0 auto 2.5rem auto',
              }}
            >
              Parce que chaque client mérite notre attention complète.
              Si votre projet est ambitieux, parlons-en.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 transition-all duration-300 hover:-translate-y-1"
                style={{
                  padding: '1rem 2.25rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  color: 'var(--color-stone-900)',
                  background: '#FFFFFF',
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
              <a
                href="tel:+33665015882"
                className="inline-flex items-center gap-2 transition-colors duration-300"
                style={{
                  padding: '1rem 1.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>06 65 01 58 82</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
