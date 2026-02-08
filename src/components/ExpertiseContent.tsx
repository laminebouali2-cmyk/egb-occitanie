'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

/* ── Primitives ──────────────────────────────────────────── */

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Overline({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      fontSize: '0.7rem',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.25em',
      color: 'var(--color-stone-400)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
    }}>
      {children}
    </span>
  );
}

function Divider() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      className="my-20 md:my-28 mx-auto"
      style={{ height: '1px', background: 'var(--color-stone-200)', maxWidth: '120px' }}
      initial={{ scaleX: 0 }}
      animate={inView ? { scaleX: 1 } : {}}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}

/* ── Services Data ───────────────────────────────────────── */

const services = [
  {
    href: '/construction-villa-toulouse',
    image: '/hero-toulouse.jpg',
    overline: 'Construction neuve',
    title: 'Bâtir votre vision.',
    text: 'Faire construire, c\u2019est donner vie à un rêve. Choisir l\u2019emplacement, l\u2019orientation, la lumière. Créer un lieu qui vous ressemble, sans compromis. Du premier plan à la remise des clés.',
    aspect: '3/4',
  },
  {
    href: '/renovation-maison-toulouse',
    image: '/interior-toulouse.jpg',
    overline: 'Rénovation',
    title: 'Réinventer ce qui existe.',
    text: 'Votre maison a une histoire. Nous lui écrivons la suite. Redécouvrir des volumes, apporter la lumière, moderniser sans effacer l\u2019âme du lieu. La brique rose toulousaine n\u2019a pas de secrets pour nous.',
    aspect: '4/5',
  },
  {
    href: '/extension-maison-toulouse',
    image: '/interior-living.jpg',
    overline: 'Extension',
    title: 'Grandir sans partir.',
    text: 'Vous aimez votre quartier, votre jardin. Mais il manque une chambre, un bureau, un espace de vie. L\u2019extension, c\u2019est agrandir votre vie sans tout recommencer.',
    aspect: '3/4',
  },
  {
    href: '/renovation-energetique-toulouse',
    image: '/interior-kitchen.jpg',
    overline: 'Performance énergétique',
    title: 'Moins consommer. Mieux vivre.',
    text: 'Isolation, chauffage, ventilation. Le confort d\u2019abord, les économies suivent. Nous gérons vos dossiers d\u2019aides MaPrimeRénov\u2019 et Éco-PTZ de A à Z.',
    aspect: '4/5',
  },
];

/* ── Main Component ──────────────────────────────────────── */

export function ExpertiseContent() {
  return (
    <main>
      {/* ═══ HERO ═══════════════════════════════════════════ */}
      <section className="relative" style={{ height: '70vh', minHeight: '500px' }}>
        <Image
          src="/aerial-toulouse.jpg"
          alt="Vue aérienne d'un domaine à Toulouse — EGB Occitanie"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.5) 100%)',
          }}
        />

        <div className="absolute bottom-0 left-0 right-0 z-10 p-8 md:p-16">
          <div style={{ maxWidth: '700px' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Overline>Nos expertises</Overline>
            </motion.div>

            <motion.h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                fontWeight: 400,
                lineHeight: 1.12,
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                marginTop: '1rem',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Quatre savoir-faire.
              <br />
              <span style={{ fontStyle: 'italic' }}>Une même exigence.</span>
            </motion.h1>

            <motion.p
              style={{
                color: 'rgba(255,255,255,0.75)',
                fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)',
                lineHeight: 1.7,
                maxWidth: '480px',
                fontWeight: 300,
                marginTop: '1rem',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Construction, rénovation, extension, performance énergétique.
              Chaque projet porte notre signature : rigueur, transparence,
              et le souci du détail qui fait la différence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ═══ EDITORIAL INTRO ════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div style={{ maxWidth: '700px', margin: '0 auto' }} className="text-center">
            <Reveal>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                fontWeight: 400,
                lineHeight: 1.5,
                color: 'var(--color-stone-900)',
                fontStyle: 'italic',
              }}>
                &laquo;&nbsp;Nous ne sommes pas une entreprise qui fait tout.
                Nous sommes une entreprise qui fait bien
                ce qu&apos;elle sait faire.&nbsp;&raquo;
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p style={{
                fontSize: '0.88rem',
                color: 'var(--color-stone-400)',
                marginTop: '1.5rem',
                lineHeight: 1.7,
              }}>
                Quatre domaines, choisis et maîtrisés. Pour chacun d&apos;eux,
                une équipe dédiée, un processus éprouvé, et la même promesse :
                que votre projet soit entre les meilleures mains.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══ SERVICES GRID ══════════════════════════════════ */}
      <section className="pb-20 md:pb-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {services.map((service, i) => (
              <Reveal key={service.href} delay={0.1 * i}>
                <Link href={service.href} className="group block">
                  {/* Image */}
                  <div
                    className="relative overflow-hidden mb-6"
                    style={{ aspectRatio: service.aspect }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div
                      className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                      style={{ background: 'rgba(0,0,0,0.05)' }}
                    />
                  </div>

                  {/* Text */}
                  <Overline>{service.overline}</Overline>
                  <h2
                    className="mt-2 mb-3"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.3rem, 2vw, 1.7rem)',
                      fontWeight: 400,
                      lineHeight: 1.2,
                      color: 'var(--color-stone-900)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {service.title}
                  </h2>
                  <p style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    color: 'var(--color-stone-500)',
                    maxWidth: '420px',
                  }}>
                    {service.text}
                  </p>

                  {/* Link indicator */}
                  <span
                    className="inline-flex items-center gap-2 mt-4 transition-all duration-300 group-hover:gap-3"
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      color: 'var(--color-stone-900)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    Découvrir
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PHILOSOPHY BAND ════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: 'var(--color-stone-900)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
                {[
                  {
                    title: 'Un interlocuteur unique.',
                    text: 'Du premier rendez-vous à la remise des clés. Pas de renvoi entre services — une personne qui connaît votre projet.',
                  },
                  {
                    title: 'Un budget qui ne bouge pas.',
                    text: 'Prix forfaitaire, détaillé poste par poste. Le montant convenu est le montant final. Toujours.',
                  },
                  {
                    title: 'Des délais qui se respectent.',
                    text: 'Le planning est contractuel. Chaque semaine, un point d\u2019avancement confirme que tout avance comme prévu.',
                  },
                ].map((item, i) => (
                  <Reveal key={item.title} delay={0.1 * i}>
                    <div>
                      <h3 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.05rem',
                        fontWeight: 400,
                        color: '#FFFFFF',
                        lineHeight: 1.3,
                        marginBottom: '0.5rem',
                      }}>
                        {item.title}
                      </h3>
                      <p style={{
                        fontSize: '0.85rem',
                        lineHeight: 1.7,
                        color: 'rgba(255,255,255,0.5)',
                      }}>
                        {item.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ CTA ════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <Reveal>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: 400,
                lineHeight: 1.2,
                color: 'var(--color-stone-900)',
                letterSpacing: '-0.02em',
              }}>
                Un projet en tête&nbsp;?
                <br />
                <span style={{ fontStyle: 'italic' }}>Parlons-en.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p style={{
                color: 'var(--color-stone-500)',
                fontSize: '0.95rem',
                lineHeight: 1.7,
                marginTop: '1.5rem',
                marginBottom: '2rem',
              }}>
                Que vous partiez d&apos;une page blanche ou d&apos;un bien existant,
                chaque projet commence par une conversation.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    padding: '14px 32px',
                    fontSize: '13px',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                    color: '#FFFFFF',
                    background: 'var(--color-stone-900)',
                  }}
                >
                  <span>Discuter de mon projet</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <Link
                  href="/projets"
                  className="inline-flex items-center gap-3 transition-all duration-300"
                  style={{
                    padding: '14px 32px',
                    fontSize: '13px',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                    color: 'var(--color-stone-900)',
                    border: '1px solid var(--color-stone-300)',
                  }}
                >
                  Voir nos réalisations
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
