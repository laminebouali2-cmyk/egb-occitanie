'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

const etapes = [
  {
    number: '01',
    title: 'L\'écoute',
    subtitle: 'Comprendre votre vision',
    description: 'Nous prenons le temps de comprendre vos aspirations, votre mode de vie et vos contraintes. Chaque projet commence par une conversation approfondie.',
  },
  {
    number: '02',
    title: 'L\'étude',
    subtitle: 'Concevoir sur-mesure',
    description: 'Plans, estimations, choix des matériaux. Nous élaborons une proposition technique et financière transparente, adaptée à vos exigences.',
  },
  {
    number: '03',
    title: 'La réalisation',
    subtitle: 'Construire avec excellence',
    description: 'Nos équipes coordonnent chaque corps de métier avec rigueur. Un interlocuteur unique vous accompagne tout au long du chantier.',
  },
  {
    number: '04',
    title: 'La livraison',
    subtitle: 'Garantir votre satisfaction',
    description: 'Vérifications minutieuses, ajustements si nécessaires. Nous ne considérons un projet achevé que lorsque vous êtes pleinement satisfait.',
  },
];

const engagements = [
  'Devis détaillé et transparent',
  'Planning respecté',
  'Interlocuteur unique',
  'Garantie décennale',
];

export function Approche() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="section bg-stone-100">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Introduction */}
          <div>
            <motion.div
              className="sticky top-32"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-stone-400" />
                <span className="text-overline">Notre Approche</span>
              </div>

              <h2 className="mb-8">
                L&apos;excellence
                <br />
                <span className="text-stone-400">à chaque étape</span>
              </h2>

              <p className="text-lead mb-10">
                De la première rencontre à la remise des clés, nous vous accompagnons
                avec exigence et transparence.
              </p>

              {/* Engagements */}
              <div className="bg-white p-8 mb-8">
                <h4 className="text-sm font-semibold text-stone-900 mb-6 tracking-wide">
                  NOS ENGAGEMENTS
                </h4>
                <ul className="space-y-4">
                  {engagements.map((engagement, index) => (
                    <motion.li
                      key={engagement}
                      className="flex items-center gap-4 text-stone-600"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      <span className="w-2 h-2 bg-stone-900 rounded-full flex-shrink-0" />
                      {engagement}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <Link href="/contact" className="btn btn-primary">
                Démarrer votre projet
                <svg
                  className="w-4 h-4"
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

          {/* Right - Steps */}
          <div className="space-y-12">
            {etapes.map((etape, index) => (
              <motion.div
                key={etape.number}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              >
                {/* Connection Line */}
                {index < etapes.length - 1 && (
                  <div className="absolute left-6 top-20 bottom-0 w-px bg-stone-300" />
                )}

                <div className="flex gap-8">
                  {/* Number Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-stone-900 text-white flex items-center justify-center text-sm font-medium">
                      {etape.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pb-12">
                    <span className="text-sm text-stone-500 block mb-2">
                      {etape.subtitle}
                    </span>
                    <h3 className="text-2xl mb-4">{etape.title}</h3>
                    <p className="text-stone-600 leading-relaxed">
                      {etape.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
