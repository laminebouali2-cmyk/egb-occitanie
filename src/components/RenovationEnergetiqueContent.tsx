'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

/* ── Reusable primitives ─────────────────────────────────── */

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

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontFamily: 'var(--font-serif)',
      fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
      fontWeight: 400,
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      color: 'var(--color-stone-900)',
    }}>
      {children}
    </h2>
  );
}

function Body({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={className} style={{
      fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
      lineHeight: 1.8,
      color: 'var(--color-stone-500)',
      fontWeight: 400,
    }}>
      {children}
    </p>
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

/* ── Main Component ─────────────────────────────────────── */

export function RenovationEnergetiqueContent() {
  return (
    <main>
      {/* ═══ 1. HERO ═══════════════════════════════════════ */}
      <section className="relative" style={{ height: '75vh', minHeight: '550px' }}>
        <Image
          src="/expertise-energetique.jpg"
          alt="Rénovation énergétique maison toulousaine — isolation et performance"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.45) 100%)',
          }}
        />

        <div className="absolute bottom-0 left-0 right-0 z-10 p-8 md:p-16">
          <div style={{ maxWidth: '800px' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Overline>Performance Énergétique</Overline>
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
                marginBottom: '1rem',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Moins consommer.
              <br />
              <span style={{ fontStyle: 'italic' }}>Mieux vivre.</span>
            </motion.h1>

            <motion.p
              style={{
                color: 'rgba(255,255,255,0.8)',
                fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)',
                lineHeight: 1.7,
                maxWidth: '500px',
                fontWeight: 300,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Réduire vos factures d&apos;énergie tout en améliorant
              votre confort au quotidien — c&apos;est le principe
              d&apos;une rénovation énergétique bien menée.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ═══ 2. URGENCY ════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: 'var(--color-stone-900)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <Reveal>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.75)',
                fontWeight: 300,
              }}>
                La majorité des maisons toulousaines construites avant 1980 sont
                classées DPE E, F ou G. Les factures d&apos;énergie ont considérablement
                augmenté ces dernières années, et la tendance ne s&apos;inversera pas.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.75)',
                fontWeight: 300,
                marginTop: '1.5rem',
              }}>
                Dès 2028, les logements classés DPE G seront interdits à la location.
                Au-delà de la contrainte réglementaire, une maison rénovée sur le plan
                énergétique gagne significativement en valeur — et surtout, en confort
                de vie pour ceux qui l&apos;habitent.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div
                className="mt-10"
                style={{ height: '1px', background: 'rgba(255,255,255,0.15)', maxWidth: '80px' }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 3. PHILOSOPHY ═════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Reveal>
                <Overline>Notre approche</Overline>
                <SectionTitle>
                  <span style={{ display: 'block', marginTop: '0.75rem' }}>
                    Le confort d&apos;abord.
                    <br />
                    <span style={{ fontStyle: 'italic' }}>Les économies suivent.</span>
                  </span>
                </SectionTitle>
              </Reveal>

              <Reveal delay={0.15}>
                <Body className="mt-6">
                  Trop souvent, la rénovation énergétique est réduite à des chiffres :
                  kWh économisés, classe DPE, retour sur investissement. Nous l&apos;abordons
                  différemment. Notre point de départ, c&apos;est votre confort.
                </Body>
              </Reveal>

              <Reveal delay={0.25}>
                <Body className="mt-4">
                  Une chaleur homogène en hiver sans courants d&apos;air. Une maison qui reste
                  fraîche en été sans climatisation. Un air intérieur sain, une humidité
                  maîtrisée, un silence retrouvé. Voilà ce que vous ressentez au quotidien
                  après une rénovation bien conçue.
                </Body>
              </Reveal>

              <Reveal delay={0.35}>
                <Body className="mt-4">
                  La baisse de vos factures et le gain de DPE sont des conséquences
                  naturelles de ce travail — pas l&apos;unique objectif. Quand le confort
                  est réel, les économies suivent toujours.
                </Body>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
                <Image
                  src="/interior-toulouse.jpg"
                  alt="Intérieur rénové maison toulousaine — salon lumineux avec arches en brique"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══ 5. EXPERTISE — 4 piliers ═════════════════════ */}
      <section className="pb-20 md:pb-32 bg-white">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Reveal>
              <Overline>Les interventions</Overline>
              <SectionTitle>
                <span style={{ display: 'block', marginTop: '0.75rem' }}>
                  Quatre leviers
                  <br />
                  pour transformer
                  <br />
                  <span style={{ fontStyle: 'italic' }}>votre confort.</span>
                </span>
              </SectionTitle>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                {
                  title: 'Isolation',
                  text: 'Combles, murs, planchers bas. Supprimer les ponts thermiques, c\u2019est éliminer les zones froides et obtenir une température homogène dans chaque pièce, été comme hiver.',
                },
                {
                  title: 'Menuiseries',
                  text: 'Double ou triple vitrage, rupture de pont thermique. Au-delà de la performance thermique, c\u2019est un confort acoustique retrouvé — particulièrement appréciable en centre-ville de Toulouse.',
                },
                {
                  title: 'Chauffage',
                  text: 'Pompe à chaleur, chaudière à condensation, système adapté à votre maison. Un chauffage efficace et correctement dimensionné consomme moins et chauffe mieux.',
                },
                {
                  title: 'Ventilation',
                  text: 'VMC double-flux, renouvellement d\u2019air maîtrisé. L\u2019air intérieur est assaini, l\u2019humidité régulée, et la chaleur récupérée — sans ouvrir les fenêtres en plein hiver.',
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={0.1 * i}>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.3rem',
                      fontWeight: 400,
                      color: 'var(--color-stone-900)',
                      marginBottom: '0.5rem',
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: 1.7,
                      color: 'var(--color-stone-500)',
                    }}>
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 6. DESIRE — image gallery ════════════════════ */}
      <section className="py-20 md:py-32" style={{ background: 'var(--color-stone-50)' }}>
        <div className="container">
          <Reveal>
            <div className="text-center mb-16">
              <Overline>Le résultat</Overline>
              <SectionTitle>
                <span style={{ display: 'block', marginTop: '0.75rem' }}>
                  Vivre dans une maison
                  <br />
                  <span style={{ fontStyle: 'italic' }}>qui prend soin de vous.</span>
                </span>
              </SectionTitle>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Reveal>
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/interior-kitchen.jpg"
                  alt="Cuisine rénovée — confort thermique et lumière naturelle"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/bedroom-toulouse.jpg"
                  alt="Chambre confortable — isolation performante, température idéale"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div className="text-center" style={{ maxWidth: '600px', margin: '3rem auto 0' }}>
              <Body>
                Une maison où la température est douce et constante, où l&apos;air est frais
                sans être froid, où le silence remplace le bruit de la rue.
                La rénovation énergétique, c&apos;est redécouvrir le plaisir de rentrer chez soi.
              </Body>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ 7. AIDES FINANCIÈRES ═════════════════════════ */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Reveal>
              <Overline>Aides 2025</Overline>
              <SectionTitle>
                <span style={{ display: 'block', marginTop: '0.75rem' }}>
                  Des aides substantielles
                  <br />
                  <span style={{ fontStyle: 'italic' }}>pour alléger votre projet.</span>
                </span>
              </SectionTitle>
              <Body className="mt-6">
                Plusieurs dispositifs publics sont cumulables pour financer
                une part importante de vos travaux. Nous montons l&apos;intégralité
                de vos dossiers — vous n&apos;avez rien à gérer.
              </Body>
            </Reveal>

            <div className="mt-12 space-y-0">
              {[
                {
                  title: 'MaPrimeRénov\u2019',
                  desc: 'Aide principale de l\u2019État, versée par l\u2019Anah. Jusqu\u2019à 20\u202f000\u202f\u20ac par logement selon vos revenus et le type de travaux. Cumulable avec les autres dispositifs. Logement de plus de 15 ans, résidence principale, travaux réalisés par un artisan RGE.',
                },
                {
                  title: '\u00c9co-PTZ',
                  desc: 'Prêt à taux zéro jusqu\u2019à 50\u202f000\u202f\u20ac, remboursable sur 20 ans. Aucune condition de ressources. Le montant dépend du nombre d\u2019actions engagées : 15\u202f000\u202f\u20ac pour une action, 25\u202f000\u202f\u20ac pour deux, 50\u202f000\u202f\u20ac pour une rénovation globale.',
                },
                {
                  title: 'CEE — Primes Énergie',
                  desc: 'Certificats d\u2019Économies d\u2019Énergie versés par les fournisseurs (EDF, Engie, Total). Entre 2\u202f000 et 5\u202f000\u202f\u20ac selon les travaux et vos revenus. Cumulables avec toutes les autres aides sans exception.',
                },
                {
                  title: 'TVA à 5,5\u202f%',
                  desc: 'Taux réduit appliqué automatiquement sur l\u2019ensemble des travaux de rénovation énergétique, contre 20\u202f% en temps normal. Sur un chantier à 50\u202f000\u202f\u20ac, cela représente une économie directe de plus de 7\u202f000\u202f\u20ac.',
                },
              ].map((aid, i) => (
                <Reveal key={aid.title} delay={0.05 * i}>
                  <div style={{ borderBottom: '1px solid var(--color-stone-200)', paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
                    <h3 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.15rem',
                      fontWeight: 400,
                      color: 'var(--color-stone-900)',
                      marginBottom: '0.4rem',
                    }}>
                      {aid.title}
                    </h3>
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: 1.75,
                      color: 'var(--color-stone-500)',
                    }}>
                      {aid.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <p style={{
                fontSize: '0.92rem',
                lineHeight: 1.75,
                color: 'var(--color-stone-900)',
                fontWeight: 500,
                marginTop: '2rem',
              }}>
                Nous montons vos dossiers — vous n&apos;avez rien à gérer.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 8. JOURNEY — 5 steps ═════════════════════════ */}
      <section className="py-20 md:py-32" style={{ background: 'var(--color-stone-50)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Reveal>
              <Overline>Votre parcours</Overline>
              <SectionTitle>
                <span style={{ display: 'block', marginTop: '0.75rem' }}>
                  Du diagnostic
                  <br />
                  <span style={{ fontStyle: 'italic' }}>à la performance.</span>
                </span>
              </SectionTitle>
              <Body className="mt-6">
                Cinq étapes claires pour transformer votre maison en un lieu
                confortable et économe, sans complexité pour vous.
              </Body>
            </Reveal>

            <div className="mt-16 space-y-16">
              {[
                {
                  step: '01',
                  title: 'L\u2019audit',
                  description: 'Audit énergétique complet de votre maison : thermographie infrarouge, analyse des déperditions, étude du bâti existant. Nous identifions précisément où votre maison perd de l\u2019énergie et quelles interventions auront le plus d\u2019impact.',
                },
                {
                  step: '02',
                  title: 'La stratégie',
                  description: 'Sur la base de l\u2019audit, nous définissons la combinaison optimale d\u2019interventions. Isolation, chauffage, ventilation, menuiseries — chaque action est choisie pour maximiser le gain de confort et l\u2019efficacité énergétique globale.',
                },
                {
                  step: '03',
                  title: 'Les aides',
                  description: 'Nous montons l\u2019intégralité de vos dossiers : MaPrimeRénov\u2019, Éco-PTZ, CEE, TVA réduite. Chaque aide est optimisée pour maximiser vos bénéfices. Vous signez, nous gérons tout le reste.',
                },
                {
                  step: '04',
                  title: 'Les travaux',
                  description: 'Les interventions sont coordonnées dans l\u2019ordre optimal : isolation d\u2019abord, puis ventilation et chauffage. Un seul conducteur de travaux supervise l\u2019ensemble. Points d\u2019avancement réguliers, perturbation minimale.',
                },
                {
                  step: '05',
                  title: 'Le résultat',
                  description: 'Nouveau DPE réalisé, gain de performance validé. Vous constatez la différence de confort dès les premiers jours, et les économies sur vos factures dès le premier hiver. Vos garanties sont remises, votre maison est transformée.',
                },
              ].map((item, i) => (
                <Reveal key={item.step} delay={0.1 * i}>
                  <div className="flex gap-8">
                    <div className="flex-shrink-0" style={{ width: '60px' }}>
                      <span style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '2.5rem',
                        fontWeight: 300,
                        color: 'var(--color-stone-200)',
                        lineHeight: 1,
                      }}>
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <h3 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.3rem',
                        fontWeight: 400,
                        color: 'var(--color-stone-900)',
                        marginBottom: '0.5rem',
                      }}>
                        {item.title}
                      </h3>
                      <p style={{
                        fontSize: '0.92rem',
                        lineHeight: 1.75,
                        color: 'var(--color-stone-500)',
                      }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══ 10. REASSURANCE ══════════════════════════════ */}
      <section className="pb-20 md:pb-32 bg-white">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Reveal>
              <Overline>Vos garanties</Overline>
              <SectionTitle>
                <span style={{ display: 'block', marginTop: '0.75rem' }}>
                  La sérénité,
                  <br />
                  <span style={{ fontStyle: 'italic' }}>à chaque étape.</span>
                </span>
              </SectionTitle>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Gain DPE garanti',
                  text: 'L\u2019amélioration de votre classement énergétique est contractuelle. Nous nous engageons sur le résultat, pas seulement sur les travaux.',
                },
                {
                  title: 'Artisans RGE certifiés',
                  text: 'Nos équipes sont certifiées RGE — condition indispensable pour bénéficier de l\u2019ensemble des aides financières publiques.',
                },
                {
                  title: 'Dossiers aides gérés',
                  text: 'MaPrimeRénov\u2019, Éco-PTZ, CEE — nous montons et suivons chaque dossier. Pas de paperasse pour vous, les aides sont intégrées à votre budget.',
                },
                {
                  title: 'Budget transparent',
                  text: 'Devis détaillé, prix forfaitaire. Chaque poste est chiffré clairement. Aucune mauvaise surprise, aucun dépassement.',
                },
                {
                  title: 'Confort immédiat',
                  text: 'La différence se ressent dès les premiers jours. Température homogène, silence, air sain — le changement est concret et perceptible.',
                },
                {
                  title: 'Valorisation patrimoine',
                  text: 'Votre maison gagne en valeur sur le marché immobilier. Un bon DPE est devenu un critère décisif pour les acquéreurs.',
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={0.08 * i}>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.1rem',
                      fontWeight: 400,
                      color: 'var(--color-stone-900)',
                      marginBottom: '0.35rem',
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontSize: '0.88rem',
                      lineHeight: 1.7,
                      color: 'var(--color-stone-500)',
                    }}>
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 11. FAQ ══════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: 'var(--color-stone-50)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Reveal>
              <Overline>Questions fréquentes</Overline>
              <SectionTitle>
                <span style={{ display: 'block', marginTop: '0.75rem' }}>
                  Tout ce que vous devez savoir
                  <br />
                  <span style={{ fontStyle: 'italic' }}>sur la rénovation énergétique.</span>
                </span>
              </SectionTitle>
            </Reveal>

            <div className="mt-12 space-y-0">
              {[
                {
                  q: 'Quelles aides pour la rénovation énergétique en 2025 ?',
                  a: 'Quatre dispositifs principaux sont cumulables : MaPrimeRénov\u2019 (jusqu\u2019à 20\u202f000\u202f\u20ac selon revenus et travaux), l\u2019Éco-PTZ (prêt à taux zéro jusqu\u2019à 50\u202f000\u202f\u20ac), les primes CEE versées par les fournisseurs d\u2019énergie, et la TVA réduite à 5,5\u202f%. Selon votre profil, ces aides peuvent couvrir une part significative du coût total des travaux. Nous montons l\u2019intégralité de vos dossiers.',
                },
                {
                  q: 'Comment améliorer le DPE de ma maison ?',
                  a: 'Un audit énergétique identifie les déperditions principales (toiture, murs, fenêtres, chauffage). En combinant isolation, menuiseries performantes, système de chauffage adapté et ventilation, il est possible de passer d\u2019un DPE G ou F à un DPE B ou C. L\u2019ordre et la combinaison des interventions sont déterminants pour le résultat.',
                },
                {
                  q: 'Par quoi commencer une rénovation énergétique ?',
                  a: 'Toujours par un audit énergétique. Il permet de hiérarchiser les interventions selon leur impact réel. En règle générale, l\u2019isolation (combles, puis murs) est le premier levier, suivie du remplacement du système de chauffage et de la ventilation. Nous définissons avec vous la stratégie optimale selon votre maison et votre budget.',
                },
                {
                  q: 'Combien de temps pour une rénovation énergétique ?',
                  a: 'La durée dépend de l\u2019ampleur des travaux. Une intervention ciblée (isolation des combles, remplacement de chauffage) prend quelques semaines. Une rénovation énergétique globale — isolation complète, menuiseries, chauffage, ventilation — s\u2019étale sur deux à quatre mois. Le planning est contractuel et les interventions sont coordonnées pour minimiser la gêne.',
                },
                {
                  q: 'Faut-il des artisans RGE pour les aides ?',
                  a: 'Oui, c\u2019est une condition obligatoire pour bénéficier de MaPrimeRénov\u2019, de l\u2019Éco-PTZ et des primes CEE. La certification RGE (Reconnu Garant de l\u2019Environnement) atteste de la compétence de l\u2019entreprise en matière de performance énergétique. Nos équipes sont certifiées RGE — vos aides sont sécurisées.',
                },
                {
                  q: 'Quel est le retour sur investissement ?',
                  a: 'Le retour sur investissement dépend de votre situation initiale, du type de travaux et des aides obtenues. Après déduction des aides, les économies sur vos factures d\u2019énergie permettent généralement de rentabiliser l\u2019investissement en quelques années. Au-delà du calcul financier, le gain de confort et la valorisation de votre bien sont immédiats.',
                },
              ].map((faq, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <details className="group" style={{ borderBottom: '1px solid var(--color-stone-200)' }}>
                    <summary
                      className="cursor-pointer flex items-center justify-between py-5"
                      style={{ color: 'var(--color-stone-900)', fontWeight: 500, fontSize: '1rem' }}
                    >
                      {faq.q}
                      <svg
                        className="w-4 h-4 transition-transform group-open:rotate-180 flex-shrink-0 ml-4"
                        style={{ color: 'var(--color-stone-400)' }}
                        fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="pb-5" style={{
                      fontSize: '0.9rem',
                      lineHeight: 1.75,
                      color: 'var(--color-stone-500)',
                      paddingRight: '2rem',
                    }}>
                      {faq.a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 12. CTA ═════════════════════════════════════ */}
      <section className="py-24 md:py-32" style={{ background: 'var(--color-stone-900)' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '650px', margin: '0 auto' }}>
            <Reveal>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: 400,
                lineHeight: 1.2,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
              }}>
                Améliorons
                <br />
                <span style={{ fontStyle: 'italic' }}>votre confort.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '0.95rem',
                lineHeight: 1.7,
                marginTop: '1.5rem',
                marginBottom: '2rem',
              }}>
                Un audit, une stratégie claire, des aides optimisées —
                parlons de votre maison et de ce qu&apos;elle peut devenir.
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
                    color: '#1C1917',
                    background: '#FFFFFF',
                  }}
                >
                  <span>Discuter de mon projet</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <a
                  href="tel:+33665015882"
                  className="inline-flex items-center gap-3 transition-all duration-300"
                  style={{
                    padding: '14px 32px',
                    fontSize: '13px',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                    color: '#FFFFFF',
                    border: '1px solid rgba(255,255,255,0.3)',
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>06 65 01 58 82</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 13. Related Services ═════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { href: '/renovation-maison-toulouse', label: 'Rénovation Maison', desc: 'Rénovation complète à Toulouse' },
                  { href: '/construction-villa-toulouse', label: 'Construction Villa', desc: 'Votre villa sur-mesure' },
                  { href: '/projets', label: 'Nos Réalisations', desc: 'Découvrir nos projets' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group py-4 transition-all"
                    style={{ borderBottom: '1px solid var(--color-stone-200)' }}
                  >
                    <h3 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1rem',
                      fontWeight: 400,
                      color: 'var(--color-stone-900)',
                      marginBottom: '0.25rem',
                    }}>
                      {link.label}
                    </h3>
                    <span className="flex items-center gap-2" style={{
                      fontSize: '0.8rem',
                      color: 'var(--color-stone-400)',
                    }}>
                      {link.desc}
                      <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
