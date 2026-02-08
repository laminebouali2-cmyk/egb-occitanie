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

export function ConstructionVillaContent() {
  return (
    <main>
      {/* ═══ ACT 1: HERO ═══════════════════════════════════ */}
      <section className="relative" style={{ height: '75vh', minHeight: '550px' }}>
        <Image
          src="/hero-toulouse.jpg"
          alt="Villa contemporaine avec piscine et jardin paysager à Toulouse"
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
              <Overline>Construction Neuve</Overline>
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
              Construire aujourd&apos;hui.
              <br />
              <span style={{ fontStyle: 'italic' }}>Habiter demain.</span>
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
              Villas sur-mesure à Toulouse et en Haute-Garonne.
              Architecture unique, performance RE2020,
              accompagnement de A à Z.
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
                <Overline>Notre vision</Overline>
                <SectionTitle>
                  <span style={{ display: 'block', marginTop: '0.75rem' }}>
                    Chaque villa est
                    <br />
                    une promesse
                    <br />
                    <span style={{ fontStyle: 'italic' }}>de vie.</span>
                  </span>
                </SectionTitle>
              </Reveal>

              <Reveal delay={0.15}>
                <Body className="mt-6">
                  Nous ne construisons pas des maisons de catalogue. Chaque projet
                  naît d&apos;une conversation : votre manière de vivre, vos rituels du
                  matin, la lumière que vous aimez, les espaces où votre famille
                  se retrouve.
                </Body>
              </Reveal>

              <Reveal delay={0.25}>
                <Body className="mt-4">
                  Avec nos architectes partenaires, nous dessinons une villa qui
                  n&apos;appartient qu&apos;à vous. Pas de plans recyclés, pas de compromis
                  sur les volumes ou les matériaux. Chaque détail est pensé pour
                  votre quotidien.
                </Body>
              </Reveal>

              <Reveal delay={0.35}>
                <Body className="mt-4">
                  Du terrain nu à la remise des clés, un seul interlocuteur vous
                  accompagne. Il connaît votre projet par cœur, anticipe vos
                  questions, et veille à ce que chaque étape avance sereinement.
                </Body>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
                <Image
                  src="/aerial-toulouse.jpg"
                  alt="Vue aérienne d'une villa avec piscine et jardin paysager à Toulouse"
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

      {/* ═══ ACT 3: EXPERTISE ══════════════════════════════ */}
      <section className="pb-20 md:pb-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <Reveal className="order-2 lg:order-1">
              <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <Image
                  src="/construction-toulouse.jpg"
                  alt="Chantier de construction villa en cours à Toulouse"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>

            <div className="order-1 lg:order-2">
              <Reveal>
                <Overline>Notre savoir-faire</Overline>
                <SectionTitle>
                  <span style={{ display: 'block', marginTop: '0.75rem' }}>
                    Du premier plan
                    <br />
                    <span style={{ fontStyle: 'italic' }}>au dernier détail.</span>
                  </span>
                </SectionTitle>
              </Reveal>

              <Reveal delay={0.15}>
                <Body className="mt-6">
                  Construire une villa demande une maîtrise globale : architecture,
                  structure, thermique, réseaux, finitions. Nous coordonnons chaque
                  corps de métier pour un résultat sans compromis.
                </Body>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="mt-8 space-y-6">
                  {[
                    {
                      title: 'Architecture sur-mesure',
                      text: 'Nos architectes partenaires conçoivent chaque villa comme une pièce unique. Plans, volumes, orientation — tout est adapté à votre terrain et à votre mode de vie.',
                    },
                    {
                      title: 'Performance RE2020',
                      text: 'Isolation renforcée, ventilation double-flux, pompe à chaleur, menuiseries performantes. Votre villa est confortable été comme hiver, avec des factures énergétiques maîtrisées.',
                    },
                    {
                      title: 'Suivi rigoureux',
                      text: 'Un conducteur de travaux dédié, des points hebdomadaires avec photos, un planning contractuel respecté. Vous êtes informé à chaque étape.',
                    },
                    {
                      title: 'Terrains et implantation',
                      text: 'Étude de sol, analyse du PLU, orientation solaire, contraintes de voisinage — nous vous accompagnons dès la recherche du terrain pour valider la faisabilité de votre projet.',
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

      {/* ═══ ACT 4: DESIRE ═════════════════════════════════ */}
      <section className="py-20 md:py-32" style={{ background: 'var(--color-stone-50)' }}>
        <div className="container">
          <Reveal>
            <div className="text-center mb-16">
              <Overline>L&apos;intérieur</Overline>
              <SectionTitle>
                <span style={{ display: 'block', marginTop: '0.75rem' }}>
                  Des espaces pensés
                  <br />
                  <span style={{ fontStyle: 'italic' }}>pour votre quotidien.</span>
                </span>
              </SectionTitle>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Reveal>
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/interior-living.jpg"
                  alt="Salon contemporain d'une villa neuve — lumière naturelle, volumes généreux"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/interior-kitchen.jpg"
                  alt="Cuisine premium d'une villa sur-mesure — îlot central, matériaux nobles"
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
                Vivre dans une maison pensée pour soi, c&apos;est une sensation
                particulière. Les pièces s&apos;enchaînent naturellement, la lumière
                entre exactement là où vous l&apos;avez imaginée, et chaque
                recoin a sa raison d&apos;être.
              </Body>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ ACT 5: LE PARCOURS ════════════════════════════ */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Reveal>
              <Overline>Votre parcours</Overline>
              <SectionTitle>
                <span style={{ display: 'block', marginTop: '0.75rem' }}>
                  Du rêve au seuil
                  <br />
                  <span style={{ fontStyle: 'italic' }}>de votre porte.</span>
                </span>
              </SectionTitle>
              <Body className="mt-6">
                Chaque étape est pensée pour que vous gardiez le contrôle
                et la sérénité, du premier échange à la réception de votre villa.
              </Body>
            </Reveal>

            <div className="mt-16 space-y-16">
              {[
                {
                  step: '01',
                  title: 'L\u2019écoute',
                  description: 'Premier rendez-vous pour comprendre votre rêve. Mode de vie, besoins, terrain, budget, contraintes — nous posons les bases ensemble avant de dessiner quoi que ce soit.',
                },
                {
                  step: '02',
                  title: 'Le dessin',
                  description: 'Notre architecte partenaire conçoit vos plans. Perspectives 3D, choix des matériaux, distribution des espaces — plusieurs itérations jusqu\u2019à ce que vous disiez : c\u2019est exactement ça.',
                },
                {
                  step: '03',
                  title: 'Les fondations',
                  description: 'Dépôt du permis de construire, étude de sol, études thermiques RE2020. Une fois le permis obtenu et le contrat signé, le chantier démarre sur des bases solides.',
                },
                {
                  step: '04',
                  title: 'L\u2019élévation',
                  description: 'Structure, charpente, couverture, menuiseries, réseaux, isolation, finitions. Un point hebdomadaire avec photos vous tient informé de chaque avancée.',
                },
                {
                  step: '05',
                  title: 'La remise des clés',
                  description: 'Visite de réception ensemble, vérification point par point. Remise de vos garanties, certificats de conformité, et carnet d\u2019entretien. Votre villa vous attend.',
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

      {/* ═══ ACT 6: REASSURANCE ════════════════════════════ */}
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
                  title: 'Contrat CCMI',
                  text: 'Le Contrat de Construction de Maison Individuelle vous protège légalement : prix forfaitaire, délai garanti, livraison conforme. Le cadre le plus sécurisant pour construire.',
                },
                {
                  title: 'Prix forfaitaire',
                  text: 'Le prix convenu est le prix final. Notre devis détaillé couvre chaque poste de travaux — aucun dépassement, aucune mauvaise surprise en cours de chantier.',
                },
                {
                  title: 'Délais contractuels',
                  text: 'Le planning est inscrit au contrat. Chaque semaine, un point d\u2019avancement vous confirme que tout se déroule comme prévu.',
                },
                {
                  title: 'Garanties décennales',
                  text: 'Garantie décennale (10 ans, structure), garantie biennale (2 ans, équipements), garantie de parfait achèvement (1 an). Assurances professionnelles complètes.',
                },
                {
                  title: 'Architectes partenaires',
                  text: 'Nous travaillons avec des architectes toulousains spécialisés en habitat individuel. Chaque villa bénéficie d\u2019une conception architecturale unique et soignée.',
                },
                {
                  title: 'Accompagnement terrain',
                  text: 'Vous n\u2019avez pas encore de terrain ? Nous vous aidons à chercher, analyser et valider la faisabilité de votre projet sur chaque parcelle envisagée.',
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

      {/* ═══ ACT 7: FAQ (SEO) ══════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: 'var(--color-stone-50)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Reveal>
              <Overline>Questions fréquentes</Overline>
              <SectionTitle>
                <span style={{ display: 'block', marginTop: '0.75rem' }}>
                  Tout ce que vous devez savoir
                  <br />
                  <span style={{ fontStyle: 'italic' }}>avant de construire.</span>
                </span>
              </SectionTitle>
            </Reveal>

            <div className="mt-12 space-y-0">
              {[
                {
                  q: 'Comment se déroule un projet de construction ?',
                  a: 'Le projet commence par une rencontre pour comprendre vos besoins et analyser votre terrain. Vient ensuite la conception architecturale avec plans et perspectives 3D. Après obtention du permis de construire, le chantier démarre avec un suivi hebdomadaire jusqu\u2019à la remise des clés. Un interlocuteur unique vous accompagne à chaque étape.',
                },
                {
                  q: 'Quel budget prévoir pour construire à Toulouse ?',
                  a: 'Le budget dépend de la surface, du terrain, du niveau de finition et de la complexité architecturale. Chaque projet étant unique, nous établissons un devis précis après étude plutôt que de donner des fourchettes génériques. Ce que nous garantissons : un prix forfaitaire définitif, sans dépassement, détaillé poste par poste.',
                },
                {
                  q: 'Combien de temps faut-il pour construire une villa ?',
                  a: 'La durée globale inclut la phase d\u2019études et de permis de construire, puis la phase de chantier proprement dite. Le planning est contractuel et adapté à la complexité de chaque projet. Un suivi rigoureux semaine par semaine garantit le respect des délais convenus.',
                },
                {
                  q: 'Faut-il un architecte obligatoirement ?',
                  a: 'L\u2019architecte est obligatoire pour toute construction supérieure à 150 m\u00B2 de surface de plancher. En dessous de ce seuil, nous recommandons vivement de travailler avec un architecte pour optimiser les plans, le confort et la valeur de votre villa. Nos architectes partenaires sont spécialisés en habitat individuel à Toulouse.',
                },
                {
                  q: 'Quels quartiers pour construire autour de Toulouse ?',
                  a: 'Castanet-Tolosan, Ramonville, Balma, Quint-Fonsegrives, Colomiers, L\u2019Union, Pibrac, Saint-Orens font partie des communes prisées. Le choix dépend de vos priorités : proximité emploi, écoles, cadre de vie, budget terrain. Nous vous accompagnons dans l\u2019analyse de chaque secteur.',
                },
                {
                  q: 'Quelles garanties pour une construction neuve ?',
                  a: 'Toute construction neuve bénéficie de trois garanties légales obligatoires : la garantie de parfait achèvement (1 an), la garantie biennale couvrant les équipements (2 ans), et la garantie décennale couvrant la structure (10 ans). Le contrat CCMI ajoute un cadre juridique protecteur avec prix et délais garantis.',
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

      {/* ═══ ACT 8: CTA ════════════════════════════════════ */}
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
                Construisons
                <br />
                <span style={{ fontStyle: 'italic' }}>votre villa.</span>
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
                Parlez-nous de votre terrain, de vos envies, de la vie
                que vous imaginez — nous vous dirons comment la construire.
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

      {/* ═══ Related Services ══════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { href: '/renovation-maison-toulouse', label: 'Rénovation Maison', desc: 'Redonner vie à votre maison' },
                  { href: '/extension-maison-toulouse', label: 'Extension Maison', desc: 'Agrandir sans déménager' },
                  { href: '/projets', label: 'Nos Réalisations', desc: 'Découvrir nos projets livrés' },
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
