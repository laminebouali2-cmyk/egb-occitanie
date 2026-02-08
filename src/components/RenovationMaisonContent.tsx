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

export function RenovationMaisonContent() {
  return (
    <main>
      {/* ═══ ACT 1: CAPTURE ═══════════════════════════════ */}
      <section className="relative" style={{ height: '75vh', minHeight: '550px' }}>
        <Image
          src="/expertise-renovation.jpg"
          alt="Rénovation maison toulousaine en brique rose"
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
              <Overline>Rénovation à Toulouse</Overline>
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
              Votre maison a une histoire.
              <br />
              <span style={{ fontStyle: 'italic' }}>Nous lui écrivons la suite.</span>
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
              Rénovation complète, restauration de caractère,
              performance énergétique — chaque projet est unique,
              comme la maison qui l&apos;accueille.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ═══ ACT 2: PHILOSOPHY ════════════════════════════ */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Reveal>
                <Overline>Notre approche</Overline>
                <SectionTitle>
                  <span style={{ display: 'block', marginTop: '0.75rem' }}>
                    On ne rénove pas une maison.
                    <br />
                    On la <span style={{ fontStyle: 'italic' }}>réinvente.</span>
                  </span>
                </SectionTitle>
              </Reveal>

              <Reveal delay={0.15}>
                <Body className="mt-6">
                  Chaque maison toulousaine raconte quelque chose. Les murs en brique rose,
                  les hauteurs sous plafond généreuses, la lumière du Sud qui entre par les
                  fenêtres — tout cela fait partie de ce que vous aimez déjà.
                </Body>
              </Reveal>

              <Reveal delay={0.25}>
                <Body className="mt-4">
                  Notre travail commence par l&apos;écoute. Comprendre ce que vous voulez garder,
                  ce que vous voulez transformer, et ce que votre maison peut devenir.
                  Ensuite seulement, on construit.
                </Body>
              </Reveal>

              <Reveal delay={0.35}>
                <Body className="mt-4">
                  Du diagnostic initial à la remise des clés, un seul interlocuteur vous
                  accompagne. Pas de sous-traitance cascade, pas d&apos;intermédiaires —
                  une équipe intégrée qui connaît votre projet par cœur.
                </Body>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
                <Image
                  src="/interior-toulouse.jpg"
                  alt="Intérieur rénové maison toulousaine — salon lumineux avec arches"
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

      {/* ═══ ACT 3: LOCAL EXPERTISE ══════════════════════ */}
      <section className="pb-20 md:pb-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <Reveal className="order-2 lg:order-1">
              <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <Image
                  src="/construction-toulouse.jpg"
                  alt="Chantier de rénovation à Toulouse — savoir-faire artisanal"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>

            <div className="order-1 lg:order-2">
              <Reveal>
                <Overline>Expertise toulousaine</Overline>
                <SectionTitle>
                  <span style={{ display: 'block', marginTop: '0.75rem' }}>
                    La brique rose
                    <br />
                    n&apos;a pas de secrets
                    <br />
                    <span style={{ fontStyle: 'italic' }}>pour nous.</span>
                  </span>
                </SectionTitle>
              </Reveal>

              <Reveal delay={0.15}>
                <Body className="mt-6">
                  Les maisons toulousaines traditionnelles — brique rose, murs porteurs épais,
                  hauteurs sous plafond de 3 mètres — demandent un savoir-faire que seule
                  l&apos;expérience locale peut apporter.
                </Body>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="mt-8 space-y-6">
                  {[
                    {
                      title: 'Conservation du patrimoine',
                      text: 'Nettoyage par micro-gommage, rejointoiement à la chaux naturelle. Votre façade en brique est préservée, pas cachée.',
                    },
                    {
                      title: 'Isolation respectueuse',
                      text: 'Isolation par l\'intérieur en laine de bois respirante — compatible avec la brique ancienne, sans risque de condensation.',
                    },
                    {
                      title: 'Conformité urbanistique',
                      text: 'Zones ABF, PLU centre historique, déclarations préalables — nous maîtrisons les contraintes réglementaires toulousaines.',
                    },
                    {
                      title: 'Traitement des pathologies',
                      text: 'Humidité par remontées capillaires, électricité vétuste, plomberie ancienne — diagnostic complet avant chaque intervention.',
                    },
                  ].map((item, i) => (
                    <Reveal key={item.title} delay={0.1 * i}>
                      <div>
                        <h3 style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.1rem',
                          fontWeight: 400,
                          color: 'var(--color-stone-900)',
                          marginBottom: '0.25rem',
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
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ACT 4: TRANSFORMATION (Desire) ══════════════ */}
      <section className="py-20 md:py-32" style={{ background: 'var(--color-stone-50)' }}>
        <div className="container">
          <Reveal>
            <div className="text-center mb-16">
              <Overline>Le résultat</Overline>
              <SectionTitle>
                <span style={{ display: 'block', marginTop: '0.75rem' }}>
                  Imaginez rentrer chez vous
                  <br />
                  <span style={{ fontStyle: 'italic' }}>et tout redécouvrir.</span>
                </span>
              </SectionTitle>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Reveal>
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/interior-kitchen.jpg"
                  alt="Cuisine rénovée premium — chêne, marbre noir, laiton"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/interior-living.jpg"
                  alt="Salon rénové contemporain — double hauteur, cheminée"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/bedroom-toulouse.jpg"
                  alt="Chambre rénovée — bois, lumière naturelle, vue jardin"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/interior-bedroom.jpg"
                  alt="Suite parentale minimaliste — baies vitrées, nature"
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
                Une cuisine où la lumière entre à flots. Un salon qui respire.
                Des chambres qui donnent envie de rester. La rénovation,
                c&apos;est retrouver le plaisir de vivre chez soi.
              </Body>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ ACT 5: LE PARCOURS ══════════════════════════ */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Reveal>
              <Overline>Votre parcours</Overline>
              <SectionTitle>
                <span style={{ display: 'block', marginTop: '0.75rem' }}>
                  De la première rencontre
                  <br />
                  <span style={{ fontStyle: 'italic' }}>à la remise des clés.</span>
                </span>
              </SectionTitle>
              <Body className="mt-6">
                Chaque étape est pensée pour que vous gardiez le contrôle
                et la sérénité, du premier échange à la réception de votre maison transformée.
              </Body>
            </Reveal>

            <div className="mt-16 space-y-16">
              {[
                {
                  step: '01',
                  title: 'La rencontre',
                  description: 'Nous visitons votre maison ensemble. On écoute, on observe, on diagnostique. Structure, réseaux, isolation, humidité — rien n\'est laissé au hasard. Vous repartez avec une vision claire de ce qui est possible.',
                },
                {
                  step: '02',
                  title: 'La conception',
                  description: 'Avec notre architecte partenaire si nécessaire, nous concevons votre projet. Plans, choix de matériaux, distribution des espaces — tout est validé avec vous. Des perspectives 3D vous permettent de vous projeter avant le premier coup de marteau.',
                },
                {
                  step: '03',
                  title: 'La transparence',
                  description: 'Un devis détaillé, poste par poste. Un planning précis, semaine par semaine. Un prix forfaitaire qui ne bougera pas. Les aides financières (MaPrimeRénov\', Éco-PTZ, CEE) sont intégrées et nous gérons vos dossiers.',
                },
                {
                  step: '04',
                  title: 'La réalisation',
                  description: 'Votre conducteur de travaux supervise chaque journée de chantier. Un point hebdomadaire avec photos vous tient informé. Coordination des corps d\'état, contrôle qualité, respect du planning — c\'est notre métier.',
                },
                {
                  step: '05',
                  title: 'La livraison',
                  description: 'Visite de réception ensemble, vérification point par point. Remise de vos garanties (décennale, parfait achèvement, biennale), certificats de conformité, et carnet d\'entretien. Votre maison vous attend.',
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

      {/* ═══ ACT 6: REASSURANCE ══════════════════════════ */}
      <section className="pb-20 md:pb-32 bg-white">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Reveal>
              <Overline>Vos garanties</Overline>
              <SectionTitle>
                <span style={{ display: 'block', marginTop: '0.75rem' }}>
                  La sérénité,
                  <br />
                  <span style={{ fontStyle: 'italic' }}>incluse dans chaque projet.</span>
                </span>
              </SectionTitle>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Un interlocuteur unique',
                  text: 'Du premier rendez-vous à la livraison, une seule personne vous accompagne. Pas de renvoi entre services, pas de perte d\'information.',
                },
                {
                  title: 'Budget forfaitaire',
                  text: 'Le prix convenu est le prix final. Notre devis détaillé couvre chaque poste — aucun dépassement, aucune mauvaise surprise.',
                },
                {
                  title: 'Délais contractuels',
                  text: 'Le planning est inscrit au contrat. Chaque semaine, un point d\'avancement vous confirme que tout se déroule comme prévu.',
                },
                {
                  title: 'Garanties complètes',
                  text: 'Garantie décennale (10 ans), garantie biennale (2 ans), garantie de parfait achèvement (1 an). Assurances professionnelles.',
                },
                {
                  title: 'Artisans qualifiés RGE',
                  text: 'Nos équipes sont certifiées RGE, Qualibat — condition indispensable pour bénéficier des aides financières MaPrimeRénov\' et Éco-PTZ.',
                },
                {
                  title: 'Aides financières gérées',
                  text: 'Nous montons vos dossiers MaPrimeRénov\', Éco-PTZ, CEE. Pas de paperasse pour vous — les aides sont directement intégrées à votre budget.',
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

      {/* ═══ ACT 7: FAQ (SEO) ════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: 'var(--color-stone-50)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Reveal>
              <Overline>Questions fréquentes</Overline>
              <SectionTitle>
                <span style={{ display: 'block', marginTop: '0.75rem' }}>
                  Tout ce que vous devez savoir
                  <br />
                  <span style={{ fontStyle: 'italic' }}>avant de vous lancer.</span>
                </span>
              </SectionTitle>
            </Reveal>

            <div className="mt-12 space-y-0">
              {[
                {
                  q: 'Comment se déroule une rénovation complète ?',
                  a: 'Chaque rénovation commence par une visite technique approfondie de votre maison : structure, réseaux, isolation, humidité. Nous établissons un diagnostic complet et une proposition sur-mesure. La conception se fait en collaboration avec vous, et un architecte intervient si des modifications structurelles sont nécessaires. Le chantier est planifié semaine par semaine, avec un conducteur de travaux dédié et des points d\'avancement réguliers.',
                },
                {
                  q: 'Quel budget prévoir pour une rénovation à Toulouse ?',
                  a: 'Le budget dépend de l\'ampleur des travaux, de la surface et du niveau de finition souhaité. Chaque projet étant unique, nous établissons un devis précis après visite plutôt que de donner des fourchettes génériques. Ce que nous garantissons : un prix forfaitaire définitif, sans dépassement, avec le détail de chaque poste de travaux. Les aides financières sont intégrées dès le départ.',
                },
                {
                  q: 'Comment rénover une maison en brique rose ?',
                  a: 'La brique rose toulousaine nécessite des techniques spécifiques : nettoyage par micro-gommage (pas de sablage agressif), rejointoiement à la chaux naturelle, isolation par l\'intérieur en matériaux respirants (laine de bois). En zone ABF (centre historique), des contraintes s\'appliquent sur les façades, menuiseries et toitures — nous maîtrisons ces réglementations et gérons les dossiers ABF intégralement.',
                },
                {
                  q: 'Combien de temps dure une rénovation ?',
                  a: 'La durée varie selon l\'ampleur : comptez 2-3 mois pour une rénovation légère (sols, peintures, cuisine), 4-6 mois pour une rénovation complète, et 6-9 mois pour une rénovation lourde avec modifications structurelles. Le planning est contractuel et respecté — nous planifions avec rigueur pour éviter tout retard.',
                },
                {
                  q: 'Quelles aides financières pour rénover en 2025 ?',
                  a: 'Plusieurs dispositifs sont cumulables : MaPrimeRénov\' (jusqu\'à 20 000€ selon revenus et travaux), Éco-PTZ (prêt à taux zéro jusqu\'à 50 000€), CEE (primes énergie), TVA réduite à 5,5% sur les travaux de rénovation énergétique. Nous montons l\'intégralité de vos dossiers d\'aides — c\'est inclus dans notre accompagnement.',
                },
                {
                  q: 'Peut-on habiter pendant les travaux ?',
                  a: 'Cela dépend de l\'ampleur. Pour une rénovation par zone, il est souvent possible de rester en aménageant pièce par pièce. Pour une rénovation complète touchant l\'électricité et la plomberie, un logement temporaire est recommandé. Nous pouvons phaser les travaux selon vos contraintes pour minimiser la gêne.',
                },
                {
                  q: 'Faut-il un permis de construire ?',
                  a: 'Pas pour une rénovation intérieure sans modification de façade. Une déclaration préalable est nécessaire si vous modifiez l\'aspect extérieur (fenêtres, toiture, couleur façade). Un permis de construire est requis pour les extensions de plus de 20m² ou les surélévations. Nous gérons toutes les démarches administratives.',
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

      {/* ═══ ACT 8: CTA ══════════════════════════════════ */}
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
                Parlez-nous
                <br />
                <span style={{ fontStyle: 'italic' }}>de votre maison.</span>
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
                Chaque projet commence par une conversation.
                Racontez-nous votre maison, vos envies, vos contraintes —
                nous vous dirons honnêtement ce qui est possible.
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

      {/* ═══ Related Services ════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { href: '/construction-villa-toulouse', label: 'Construction Villa', desc: 'Votre villa sur-mesure à Toulouse' },
                  { href: '/extension-maison-toulouse', label: 'Extension Maison', desc: 'Agrandir sans déménager' },
                  { href: '/renovation-energetique-toulouse', label: 'Rénovation Énergétique', desc: 'Performance et économies' },
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
