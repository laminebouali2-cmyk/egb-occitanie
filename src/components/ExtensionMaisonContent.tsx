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

export function ExtensionMaisonContent() {
  return (
    <main>
      {/* ═══ ACT 1: HERO ═══════════════════════════════════ */}
      <section className="relative" style={{ height: '75vh', minHeight: '550px' }}>
        <Image
          src="/expertise-extension.jpg"
          alt="Extension maison contemporaine à Toulouse — agrandissement harmonieux"
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
              <Overline>Extension &amp; Agrandissement</Overline>
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
              Votre maison grandit
              <br />
              <span style={{ fontStyle: 'italic' }}>avec votre vie.</span>
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
              Gagner de l&apos;espace sans quitter votre quartier,
              votre jardin, votre vie — c&apos;est tout l&apos;art
              d&apos;une extension bien pensée.
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
                <Overline>Pourquoi agrandir</Overline>
                <SectionTitle>
                  <span style={{ display: 'block', marginTop: '0.75rem' }}>
                    Rester chez soi.
                    <br />
                    Gagner en espace.
                    <br />
                    <span style={{ fontStyle: 'italic' }}>En liberté.</span>
                  </span>
                </SectionTitle>
              </Reveal>

              <Reveal delay={0.15}>
                <Body className="mt-6">
                  La famille s&apos;agrandit, le télétravail s&apos;installe, les enfants
                  grandissent et réclament leur propre espace. Le besoin de mètres carrés
                  supplémentaires est réel — mais déménager ne l&apos;est pas forcément.
                </Body>
              </Reveal>

              <Reveal delay={0.25}>
                <Body className="mt-4">
                  Vous aimez votre quartier, vos voisins, le chemin de l&apos;école, le jardin
                  que vous avez mis des années à faire pousser. Tout cela a une valeur
                  qu&apos;aucun bien immobilier ne peut remplacer.
                </Body>
              </Reveal>

              <Reveal delay={0.35}>
                <Body className="mt-4">
                  L&apos;extension permet de garder ce qui compte et d&apos;ajouter ce qui manque.
                  Un projet sur-mesure, pensé avec vous, qui s&apos;intègre à l&apos;existant
                  comme s&apos;il avait toujours été là.
                </Body>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
                <Image
                  src="/interior-living.jpg"
                  alt="Salon contemporain double hauteur — extension lumineuse"
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

      {/* ═══ ACT 3: TYPES D'EXTENSION ═════════════════════ */}
      <section className="pb-20 md:pb-32 bg-white">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Reveal>
              <Overline>Les possibilités</Overline>
              <SectionTitle>
                <span style={{ display: 'block', marginTop: '0.75rem' }}>
                  Quatre façons
                  <br />
                  <span style={{ fontStyle: 'italic' }}>d&apos;agrandir.</span>
                </span>
              </SectionTitle>
            </Reveal>

            <div className="mt-12 space-y-10">
              {[
                {
                  title: 'Extension latérale',
                  text: 'La solution la plus accessible. Construction en plain-pied sur le terrain adjacent à votre maison — côté jardin ou en fond de parcelle. Elle s\u2019adapte à tous les usages : salon agrandi, suite parentale, cuisine ouverte. Un raccordement direct à l\u2019existant, sans escalier, sans contrainte de circulation.',
                },
                {
                  title: 'Ossature bois',
                  text: 'Rapide à mettre en œuvre, écologique, résolument contemporaine. La structure est préfabriquée en atelier puis montée sur site en quelques semaines. Un chantier sec, peu de nuisances, et une performance thermique naturellement élevée. Le bois s\u2019associe avec élégance à la brique rose toulousaine.',
                },
                {
                  title: 'Surélévation',
                  text: 'Quand le terrain ne permet pas de s\u2019étendre, on s\u2019élève. Un étage complet au-dessus de l\u2019existant — chambres, salle de bain, mezzanine. Le jardin reste intact, la surface habitable double. C\u2019est le projet le plus ambitieux, mais aussi le plus transformateur.',
                },
                {
                  title: 'Véranda & verrière',
                  text: 'La lumière comme matériau principal. De grandes baies vitrées ouvrent votre intérieur sur le jardin, créant un espace de vie panoramique. Salon d\u2019hiver, salle à manger baignée de soleil — la verrière redéfinit le rapport entre votre maison et l\u2019extérieur.',
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
                      fontSize: '0.92rem',
                      lineHeight: 1.75,
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

      {/* ═══ ACT 4: DESIRE ════════════════════════════════ */}
      <section className="py-20 md:py-32" style={{ background: 'var(--color-stone-50)' }}>
        <div className="container">
          <Reveal>
            <div className="text-center mb-16">
              <Overline>Le résultat</Overline>
              <SectionTitle>
                <span style={{ display: 'block', marginTop: '0.75rem' }}>
                  Imaginez l&apos;espace
                  <br />
                  <span style={{ fontStyle: 'italic' }}>que vous méritez.</span>
                </span>
              </SectionTitle>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Reveal>
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/interior-bedroom.jpg"
                  alt="Suite parentale minimaliste — baies vitrées, lumière naturelle"
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
                  alt="Chambre chaleureuse — bois, lumière douce, vue jardin"
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
                Une chambre baignée de lumière. Un bureau qui donne sur le jardin.
                Un salon où toute la famille tient enfin à l&apos;aise.
                L&apos;extension, c&apos;est vivre mieux — chez soi.
              </Body>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ ACT 5: JOURNEY ═══════════════════════════════ */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Reveal>
              <Overline>Votre parcours</Overline>
              <SectionTitle>
                <span style={{ display: 'block', marginTop: '0.75rem' }}>
                  De l&apos;idée à l&apos;espace
                  <br />
                  <span style={{ fontStyle: 'italic' }}>en plus.</span>
                </span>
              </SectionTitle>
              <Body className="mt-6">
                Chaque étape est pensée pour que vous gardiez le contrôle
                et la sérénité, de la première esquisse à votre nouvelle pièce de vie.
              </Body>
            </Reveal>

            <div className="mt-16 space-y-16">
              {[
                {
                  step: '01',
                  title: 'L\u2019étude',
                  description: 'Nous visitons votre maison et votre terrain ensemble. Analyse de faisabilité, consultation du PLU, étude de la structure existante. Vous repartez avec deux ou trois options concrètes, chacune adaptée à votre parcelle et à vos besoins.',
                },
                {
                  step: '02',
                  title: 'La conception',
                  description: 'Avec notre architecte partenaire, nous dessinons votre extension. Plans détaillés, perspectives 3D, choix de matériaux. L\u2019objectif : une intégration harmonieuse avec l\u2019existant, comme si la maison avait toujours eu cette forme.',
                },
                {
                  step: '03',
                  title: 'Les autorisations',
                  description: 'Déclaration préalable ou permis de construire, avis ABF si nécessaire — nous constituons et déposons l\u2019intégralité du dossier administratif. Vous n\u2019avez aucune démarche à faire.',
                },
                {
                  step: '04',
                  title: 'Le chantier',
                  description: 'Construction de l\u2019extension, raccordement à l\u2019existant, finitions. Un conducteur de travaux dédié supervise chaque journée. Point d\u2019avancement hebdomadaire avec photos — vous savez toujours où en est votre projet.',
                },
                {
                  step: '05',
                  title: 'La réception',
                  description: 'Visite de réception ensemble, vérification point par point. Remise de vos garanties — décennale, biennale, parfait achèvement — et de tous les certificats de conformité. Votre nouvel espace vous attend.',
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

      {/* ═══ ACT 6: REASSURANCE ═══════════════════════════ */}
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
                  title: 'Intégration architecturale',
                  text: 'L\u2019extension s\u2019intègre à votre maison existante — matériaux, volumes, lignes de toiture. Depuis la rue, on ne distingue pas l\u2019ancien du nouveau.',
                },
                {
                  title: 'Permis de construire géré',
                  text: 'Dossier complet, dépôt en mairie, suivi d\u2019instruction, réponse aux demandes de pièces complémentaires. L\u2019administratif, c\u2019est notre affaire.',
                },
                {
                  title: 'Budget forfaitaire',
                  text: 'Le prix convenu est le prix final. Notre devis détaillé couvre chaque poste — aucun dépassement, aucune mauvaise surprise en cours de chantier.',
                },
                {
                  title: 'Délais respectés',
                  text: 'Le planning est inscrit au contrat. Chaque semaine, un point d\u2019avancement vous confirme que tout se déroule comme prévu.',
                },
                {
                  title: 'Garanties construction neuve',
                  text: 'Garantie décennale, garantie biennale, garantie de parfait achèvement. Votre extension bénéficie des mêmes protections qu\u2019une construction neuve.',
                },
                {
                  title: 'Conseil personnalisé',
                  text: 'Étude de faisabilité gratuite, plusieurs scénarios présentés. On vous conseille honnêtement avant que vous ne vous engagiez.',
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

      {/* ═══ ACT 7: FAQ (SEO) ═════════════════════════════ */}
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
                  q: 'Quel type d\u2019extension choisir ?',
                  a: 'Le choix dépend de votre terrain, du PLU applicable et de vos besoins. Si vous disposez d\u2019espace au sol, l\u2019extension latérale est la plus simple et la plus accessible. Si le terrain est petit, la surélévation permet de gagner un étage complet sans toucher au jardin. L\u2019ossature bois offre rapidité et performance thermique. La véranda apporte lumière et ouverture sur l\u2019extérieur. Nous étudions toutes les options lors de la visite de faisabilité.',
                },
                {
                  q: 'Faut-il un permis de construire ?',
                  a: 'Pour une extension de plus de 20\u00A0m\u00B2, un permis de construire est obligatoire. Entre 5 et 20\u00A0m\u00B2, une déclaration préalable suffit. En zone couverte par un PLU (cas de Toulouse), le seuil monte à 40\u00A0m\u00B2 si la surface totale après travaux reste sous 150\u00A0m\u00B2. Au-delà de 150\u00A0m\u00B2 de surface totale, le recours à un architecte DPLG est obligatoire. Nous gérons l\u2019intégralité des démarches administratives.',
                },
                {
                  q: 'Combien de temps pour une extension ?',
                  a: 'Comptez plusieurs mois au total, en incluant la phase administrative. La conception et le montage du dossier prennent quelques semaines. L\u2019instruction du permis de construire dure deux mois (trois en zone ABF). Le délai de recours des tiers ajoute deux mois. Les travaux en eux-mêmes varient selon l\u2019ampleur du projet — d\u2019une extension modeste à une surélévation complète, la durée de chantier s\u2019adapte.',
                },
                {
                  q: 'Peut-on habiter pendant les travaux ?',
                  a: 'Dans la majorité des cas, oui. Pour une extension latérale ou une véranda, le chantier est séparé de la partie habitée — vous pouvez rester chez vous avec une gêne limitée. Pour une surélévation qui implique la dépose de la toiture, un logement temporaire est nécessaire pendant la phase de mise hors d\u2019eau. Nous adaptons le phasage du chantier à vos contraintes.',
                },
                {
                  q: 'Extension ou déménagement : que choisir ?',
                  a: 'L\u2019extension est souvent plus avantageuse financièrement qu\u2019un déménagement vers une maison plus grande, surtout à Toulouse où le marché immobilier est tendu. Au-delà du budget, vous conservez votre quartier, votre jardin, vos habitudes. Et vous personnalisez l\u2019espace exactement comme vous le souhaitez. Nous réalisons une étude comparative gratuite pour vous aider à prendre la bonne décision.',
                },
                {
                  q: 'Comment s\u2019intègre l\u2019extension à l\u2019existant ?',
                  a: 'C\u2019est le cœur de notre travail. L\u2019architecte conçoit l\u2019extension pour qu\u2019elle s\u2019harmonise avec votre maison : continuité des matériaux, des lignes de toiture, des proportions. Le raccordement entre l\u2019existant et le neuf est traité avec soin — isolation du pont thermique, étanchéité, cohérence des finitions intérieures. Le résultat doit sembler naturel, pas rapporté.',
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

      {/* ═══ ACT 8: CTA ═══════════════════════════════════ */}
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
                Agrandissons
                <br />
                <span style={{ fontStyle: 'italic' }}>votre maison.</span>
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
                Chaque projet commence par une visite et une conversation.
                Décrivez-nous votre maison, vos besoins, vos envies —
                nous vous proposerons les meilleures options.
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

      {/* ═══ Related Services ═════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { href: '/construction-villa-toulouse', label: 'Construction Villa', desc: 'Votre villa sur-mesure à Toulouse' },
                  { href: '/renovation-maison-toulouse', label: 'Rénovation Maison', desc: 'Rénover et transformer l\u2019existant' },
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
