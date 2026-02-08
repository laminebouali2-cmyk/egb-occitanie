'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const pillars = [
  {
    word: 'On écoute avant de construire.',
    promise: 'Votre projet commence par vos mots, pas les nôtres. Chaque décision reflète votre vision, votre rythme de vie.',
  },
  {
    word: 'Rien n\u2019est standard.',
    promise: 'Pas de catalogue, pas de formule. Chaque maison est dessinée autour de ceux qui vont y vivre.',
  },
  {
    word: 'Le prix dit est le prix payé.',
    promise: 'Forfaitaire, détaillé, définitif. Un seul interlocuteur, zéro surprise, du premier jour au dernier.',
  },
  {
    word: 'La qualité ne se négocie pas.',
    promise: 'Garantie décennale, artisans certifiés. Chaque finition est contrôlée comme si c\u2019était notre propre maison.',
  },
];

export function TrustBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  return (
    <section ref={sectionRef} id="trustbar" className="relative bg-white">
      <div className="container">
        <div className="py-10 md:py-14">
          {/* Thin separator line at top */}
          <motion.div
            className="w-full h-px bg-stone-200 mb-10 md:mb-12"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'left' }}
          />

          {/* Editorial intro */}
          <motion.p
            className="text-center mb-10 md:mb-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'var(--color-stone-400)',
              letterSpacing: '-0.01em',
            }}
          >
            La confiance ne se décrète pas. Elle se construit.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.word}
                className="relative"
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + index * 0.12 }}
              >
                {/* The keyword — serif, editorial */}
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)',
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    lineHeight: 1.3,
                    color: 'var(--color-stone-900)',
                  }}
                >
                  {pillar.word}
                </h3>

                {/* Small accent line */}
                <div
                  className="mb-4"
                  style={{
                    width: '28px',
                    height: '1.5px',
                    background: 'var(--color-stone-300)',
                  }}
                />

                {/* The promise — understated, human */}
                <p
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    color: 'var(--color-stone-500)',
                    fontWeight: 400,
                    maxWidth: '280px',
                  }}
                >
                  {pillar.promise}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Thin separator line at bottom */}
          <motion.div
            className="w-full h-px bg-stone-200 mt-10 md:mt-12"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'right' }}
          />
        </div>
      </div>
    </section>
  );
}
