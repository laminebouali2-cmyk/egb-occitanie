'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const painPoints = [
  {
    number: '01',
    title: 'Des plans jamais respectés.',
    text: 'Vous concevez. L\'entreprise « adapte ». Le client découvre un résultat qui n\'a plus rien à voir avec votre vision.',
  },
  {
    number: '02',
    title: 'Des budgets qui explosent.',
    text: 'Le devis initial était une promesse. La facture finale est une surprise. C\'est votre crédibilité qui en souffre.',
  },
  {
    number: '03',
    title: 'Des retards sans fin.',
    text: 'Le chantier devait durer 8 mois. Au 14e mois, votre client ne vous appelle plus pour vous remercier.',
  },
];

const commitments = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Plans respectés au millimètre.',
    text: 'Votre conception est sacrée. Aucune modification sans votre accord explicite.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: 'Budget forfaitaire garanti.',
    text: 'Le prix signé est le prix payé. Pas d\'avenants surprise. Votre client sait exactement où il va.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Planning contractuel.',
    text: 'Chaque date est un engagement. Nous préférons finir en avance que chercher des excuses.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: 'Un interlocuteur dédié.',
    text: 'Vous avez un contact direct, joignable, qui connaît votre dossier. Pas un standard téléphonique.',
  },
];

const steps = [
  {
    number: '1',
    title: 'Vous présentez.',
    text: 'Un email, un appel, un café. Vous nous mettez en relation avec votre client. Deux minutes.',
  },
  {
    number: '2',
    title: 'On exécute.',
    text: 'Étude, devis, chantier, livraison. On gère l\'intégralité du projet avec l\'exigence que vous attendez.',
  },
  {
    number: '3',
    title: 'Vous êtes rémunéré.',
    text: 'Chaque projet recommandé est valorisé. Les conditions sont discutées en direct, sans intermédiaire.',
  },
];

const audiences = [
  {
    title: 'Architectes',
    text: 'Vous dessinez, nous construisons. Fidèlement. Chaque détail de votre conception est respecté comme un engagement.',
    detail: 'Gros œuvre, second œuvre, finitions — votre vision, notre exécution.',
  },
  {
    title: 'Agents immobiliers',
    text: 'Valorisez les biens de vos clients. Proposez un service rénovation ou extension qui transforme une vente en deux transactions.',
    detail: 'Rénovation, extension, mise aux normes — un levier pour chaque mandat.',
  },
  {
    title: 'Courtiers & CGP',
    text: 'Vos clients empruntent pour construire. Donnez-leur un partenaire dont le budget est aussi précis que votre dossier de financement.',
    detail: 'Devis forfaitaire, zéro avenant — le dossier de prêt reste cohérent.',
  },
  {
    title: 'Notaires & Gestionnaires',
    text: 'Succession, division, valorisation patrimoniale. Vos clients ont besoin d\'un exécutant de confiance pour leurs projets immobiliers.',
    detail: 'Division, rénovation, mise en conformité — chaque opération sécurisée.',
  },
];

const proofNumbers = [
  { value: '4', unit: 'ans', label: 'd\'activité continue' },
  { value: '1M€+', unit: '', label: 'de CA annuel' },
  { value: '0', unit: '', label: 'litige en cours' },
  { value: '100%', unit: '', label: 'garantie décennale' },
];

const faqItems = [
  {
    q: 'Quel type de projets acceptez-vous ?',
    a: 'Construction neuve, rénovation complète, extension, gros œuvre. Projets résidentiels et tertiaires à partir de 100 000 € HT sur Toulouse et toute l\'Occitanie.',
  },
  {
    q: 'Faut-il signer un contrat d\'exclusivité ?',
    a: 'Non. Aucun engagement, aucune exclusivité. Vous restez libre de travailler avec qui vous souhaitez. On gagne votre confiance projet après projet.',
  },
  {
    q: 'Comment se passe la rémunération ?',
    a: 'Les conditions sont discutées en direct lors de notre premier échange. Chaque partenariat est sur-mesure, transparent et formalisé.',
  },
  {
    q: 'Comment suivre l\'avancement d\'un chantier ?',
    a: 'Vous disposez d\'un interlocuteur dédié et d\'un accès au suivi de chantier. Points réguliers, photos, planning — vous êtes informé comme si c\'était votre propre projet.',
  },
  {
    q: 'Et si un problème survient pendant le chantier ?',
    a: 'On le règle. Garantie décennale, assurances complètes, process de gestion des aléas rodé sur des dizaines de chantiers. Votre client est protégé, votre réputation aussi.',
  },
];

/* ------------------------------------------------------------------ */
/*  PRIMITIVES                                                         */
/* ------------------------------------------------------------------ */

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export function ProfessionnelsContent() {
  const faqRef = useRef<HTMLElement>(null);
  const faqInView = useInView(faqRef, { once: true, margin: '-60px' });

  return (
    <main>
      {/* ============================================================
          HERO — Dark, authoritative, peer-to-peer
          ============================================================ */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          minHeight: '85vh',
          background: 'var(--color-stone-900)',
        }}
      >
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 container">
          <div className="max-w-3xl mx-auto text-center px-4">
            {/* Overline */}
            <motion.div
              className="mb-6 md:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span
                style={{
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: '0.7rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.3em',
                  fontWeight: 500,
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Programme Partenaires
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: 1.15,
                fontWeight: 400,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
              }}
            >
              Votre réputation
              <br />
              <span style={{ color: 'rgba(255,255,255,0.45)', fontStyle: 'italic' }}>
                précède la nôtre.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                lineHeight: 1.7,
                fontWeight: 400,
                maxWidth: '540px',
                margin: '0 auto 2.5rem',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Architectes, agents immobiliers, courtiers, prescripteurs.
              <br className="hidden sm:block" />
              Vous recommandez. On exécute. Vous êtes rémunéré.
            </motion.p>

            {/* CTA */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <a
                href="#contact-pro"
                className="inline-flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto justify-center"
                style={{
                  padding: '16px 36px',
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  color: 'var(--color-stone-900)',
                  background: '#FFFFFF',
                }}
              >
                <span>Devenir partenaire</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="tel:+33665015882"
                className="inline-flex items-center gap-3 transition-all duration-300 w-full sm:w-auto justify-center"
                style={{
                  padding: '16px 36px',
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255,255,255,0.25)',
                  background: 'transparent',
                }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Échanger directement</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade to white */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{ background: 'linear-gradient(to top, #FFFFFF 0%, transparent 100%)' }}
        />
      </section>

      {/* ============================================================
          PAIN POINTS — What professionals face daily
          ============================================================ */}
      <section className="section-sm bg-white">
        <div className="container">
          <Reveal>
            <p
              className="text-center mb-10 md:mb-16"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                fontWeight: 400,
                fontStyle: 'italic',
                color: 'var(--color-stone-400)',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              Quand vous recommandez un prestataire,
              c&apos;est votre nom qui est engagé.
              <br />
              On le sait. On agit en conséquence.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 md:gap-10">
            {painPoints.map((point, i) => (
              <Reveal key={point.number} delay={i * 0.1}>
                <div className="border-t border-stone-200 pt-6 md:pt-8">
                  <span
                    className="block mb-3"
                    style={{
                      fontSize: '0.7rem',
                      letterSpacing: '0.15em',
                      color: 'var(--color-stone-400)',
                      fontWeight: 500,
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    {point.number}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
                      fontWeight: 400,
                      color: 'var(--color-stone-900)',
                      marginBottom: '0.75rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {point.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-stone-500)' }}>
                    {point.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          COMMITMENTS — What we guarantee TO THEM
          ============================================================ */}
      <section className="section" style={{ background: 'var(--color-stone-50)' }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px" style={{ background: 'var(--color-stone-900)' }} />
                <span
                  style={{
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    fontWeight: 500,
                    color: 'var(--color-stone-500)',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  Nos engagements envers vous
                </span>
              </div>
              <h2
                className="mb-10 md:mb-14"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.75rem, 4vw, 2.8rem)',
                  fontWeight: 400,
                  color: 'var(--color-stone-900)',
                  lineHeight: 1.15,
                }}
              >
                Ce n&apos;est pas à votre client
                <br />
                <span style={{ color: 'var(--color-stone-400)' }}>de vérifier notre travail.</span>
              </h2>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {commitments.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div
                    className="bg-white p-6 md:p-8"
                    style={{ borderLeft: '2px solid var(--color-stone-200)' }}
                  >
                    <div className="mb-4" style={{ color: 'var(--color-stone-400)' }}>
                      {item.icon}
                    </div>
                    <h4
                      className="mb-2"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'var(--color-stone-900)',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--color-stone-500)' }}>
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          HOW IT WORKS — 3 steps
          ============================================================ */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="text-center mb-12 md:mb-16">
                <h2
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.75rem, 4vw, 2.8rem)',
                    fontWeight: 400,
                    color: 'var(--color-stone-900)',
                    lineHeight: 1.15,
                    marginBottom: '1rem',
                  }}
                >
                  Trois étapes.
                  <br />
                  <span style={{ color: 'var(--color-stone-400)' }}>Zéro complication.</span>
                </h2>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {steps.map((step, i) => (
                <Reveal key={step.number} delay={i * 0.12}>
                  <div className="text-center md:text-left">
                    <span
                      className="inline-block mb-4 md:mb-6"
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        fontWeight: 400,
                        color: 'var(--color-stone-200)',
                        lineHeight: 1,
                      }}
                    >
                      {step.number}
                    </span>
                    <h4
                      className="mb-3"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: 'var(--color-stone-900)',
                      }}
                    >
                      {step.title}
                    </h4>
                    <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-stone-500)' }}>
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHO WE WORK WITH — Audience segments
          ============================================================ */}
      <section className="section" style={{ background: 'var(--color-stone-900)' }}>
        <div className="container">
          <Reveal>
            <div className="text-center mb-10 md:mb-16">
              <span
                className="block mb-4"
                style={{
                  fontSize: '0.7rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.35)',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Qui peut devenir partenaire
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.75rem, 4vw, 2.8rem)',
                  fontWeight: 400,
                  color: '#FFFFFF',
                  lineHeight: 1.15,
                }}
              >
                Votre métier.{' '}
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>Notre réponse.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {audiences.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div
                  className="p-6 md:p-8 transition-all duration-300 hover:bg-white/[0.08]"
                  style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <h4
                    className="mb-3"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.15rem',
                      fontWeight: 400,
                      color: '#FFFFFF',
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="mb-3"
                    style={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)' }}
                  >
                    {item.text}
                  </p>
                  <p
                    style={{
                      fontSize: '0.78rem',
                      color: 'rgba(255,255,255,0.35)',
                      fontStyle: 'italic',
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          PROOF — Numbers
          ============================================================ */}
      <section className="section bg-white">
        <div className="container">
          <Reveal>
            <div className="text-center mb-10 md:mb-14">
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: 'var(--color-stone-400)',
                }}
              >
                Les chiffres parlent. On les laisse faire.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-3xl mx-auto">
            {proofNumbers.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.1}>
                <div className="text-center">
                  <span
                    className="block"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      fontWeight: 400,
                      color: 'var(--color-stone-900)',
                      lineHeight: 1.1,
                    }}
                  >
                    {item.value}
                    {item.unit && (
                      <span style={{ fontSize: '0.5em', color: 'var(--color-stone-400)' }}>
                        {' '}{item.unit}
                      </span>
                    )}
                  </span>
                  <span
                    className="block mt-2"
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--color-stone-500)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Single testimonial quote */}
          <Reveal delay={0.2}>
            <div className="max-w-2xl mx-auto mt-14 md:mt-20 text-center">
              <div
                className="w-12 h-px mx-auto mb-8"
                style={{ background: 'var(--color-stone-200)' }}
              />
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)',
                  fontWeight: 400,
                  color: 'var(--color-stone-700)',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                }}
              >
                &ldquo;On a consulté quatre constructeurs. EGB est le seul qui a proposé une étude
                de sol avant le devis. Zéro surprise, zéro retard. Exactement ce qu&apos;on veut
                pouvoir recommander à nos clients.&rdquo;
              </p>
              <p
                className="mt-4"
                style={{ fontSize: '0.85rem', color: 'var(--color-stone-400)', fontWeight: 500 }}
              >
                — Partenaire prescripteur, Toulouse
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          FAQ — Professional questions
          ============================================================ */}
      <section ref={faqRef} className="section" style={{ background: 'var(--color-stone-50)' }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <h2
                className="mb-10 md:mb-14"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  fontWeight: 400,
                  color: 'var(--color-stone-900)',
                  lineHeight: 1.15,
                }}
              >
                Questions fréquentes.
              </h2>
            </Reveal>

            <div className="space-y-0">
              {faqItems.map((item, i) => (
                <motion.div
                  key={item.q}
                  className="border-t border-stone-200 py-6 md:py-8"
                  initial={{ opacity: 0 }}
                  animate={faqInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <h4
                    className="mb-3"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: 'var(--color-stone-900)',
                    }}
                  >
                    {item.q}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.88rem',
                      lineHeight: 1.75,
                      color: 'var(--color-stone-500)',
                      maxWidth: '600px',
                    }}
                  >
                    {item.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA — Contact form
          ============================================================ */}
      <section id="contact-pro" className="section bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <Reveal>
              <h2
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.75rem, 4vw, 2.8rem)',
                  fontWeight: 400,
                  color: 'var(--color-stone-900)',
                  lineHeight: 1.15,
                }}
              >
                Parlons-en.
              </h2>
              <p
                className="mb-10 md:mb-12"
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--color-stone-500)',
                  maxWidth: '480px',
                  margin: '0 auto',
                }}
              >
                15 minutes suffisent pour voir si un partenariat fait sens.
                Sans engagement, sans formalité.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <form
                className="text-left space-y-5 mb-10"
                action="https://formspree.io/f/placeholder"
                method="POST"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="pro-name" className="block mb-1.5" style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--color-stone-700)' }}>
                      Nom complet
                    </label>
                    <input
                      id="pro-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      className="w-full"
                      style={{
                        padding: '14px 16px',
                        fontSize: '0.9rem',
                        border: '1.5px solid var(--color-stone-200)',
                        borderRadius: 0,
                        background: 'var(--color-stone-50)',
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="pro-profession" className="block mb-1.5" style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--color-stone-700)' }}>
                      Profession
                    </label>
                    <select
                      id="pro-profession"
                      name="profession"
                      required
                      className="w-full"
                      style={{
                        padding: '14px 16px',
                        fontSize: '0.9rem',
                        border: '1.5px solid var(--color-stone-200)',
                        borderRadius: 0,
                        background: 'var(--color-stone-50)',
                        color: 'var(--color-stone-700)',
                      }}
                    >
                      <option value="">Sélectionner</option>
                      <option value="architecte">Architecte</option>
                      <option value="agent-immobilier">Agent immobilier</option>
                      <option value="courtier">Courtier en crédit</option>
                      <option value="notaire">Notaire</option>
                      <option value="cgp">Gestionnaire de patrimoine</option>
                      <option value="autre">Autre prescripteur</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="pro-email" className="block mb-1.5" style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--color-stone-700)' }}>
                      Email professionnel
                    </label>
                    <input
                      id="pro-email"
                      name="email"
                      type="email"
                      required
                      placeholder="jean@cabinet.fr"
                      className="w-full"
                      style={{
                        padding: '14px 16px',
                        fontSize: '0.9rem',
                        border: '1.5px solid var(--color-stone-200)',
                        borderRadius: 0,
                        background: 'var(--color-stone-50)',
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="pro-phone" className="block mb-1.5" style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--color-stone-700)' }}>
                      Téléphone
                    </label>
                    <input
                      id="pro-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="06 XX XX XX XX"
                      className="w-full"
                      style={{
                        padding: '14px 16px',
                        fontSize: '0.9rem',
                        border: '1.5px solid var(--color-stone-200)',
                        borderRadius: 0,
                        background: 'var(--color-stone-50)',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="pro-message" className="block mb-1.5" style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--color-stone-700)' }}>
                    Un mot sur votre activité <span style={{ color: 'var(--color-stone-400)', fontWeight: 400 }}>(optionnel)</span>
                  </label>
                  <textarea
                    id="pro-message"
                    name="message"
                    rows={3}
                    placeholder="Votre spécialité, volume de projets, zone géographique..."
                    className="w-full"
                    style={{
                      padding: '14px 16px',
                      fontSize: '0.9rem',
                      border: '1.5px solid var(--color-stone-200)',
                      borderRadius: 0,
                      background: 'var(--color-stone-50)',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto transition-all duration-300 hover:-translate-y-1"
                  style={{
                    padding: '16px 48px',
                    fontSize: '14px',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                    color: '#FFFFFF',
                    background: 'var(--color-stone-900)',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Rejoindre le programme
                </button>
              </form>
            </Reveal>

            {/* Alternative CTA */}
            <Reveal delay={0.2}>
              <div
                className="pt-8 border-t border-stone-100"
                style={{ fontSize: '0.88rem', color: 'var(--color-stone-400)' }}
              >
                <p className="mb-2">Vous préférez un échange direct ?</p>
                <p>
                  <a
                    href="tel:+33665015882"
                    style={{ color: 'var(--color-stone-900)', fontWeight: 500 }}
                  >
                    06 65 01 58 82
                  </a>
                  {' · '}
                  <a
                    href="mailto:contact@egb-occitanie.fr"
                    style={{ color: 'var(--color-stone-900)', fontWeight: 500 }}
                  >
                    contact@egb-occitanie.fr
                  </a>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL — Back to main site
          ============================================================ */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 transition-colors"
            style={{
              fontSize: '0.85rem',
              color: 'var(--color-stone-400)',
              fontWeight: 400,
            }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour au site EGB Occitanie
          </Link>
        </div>
      </section>
    </main>
  );
}
