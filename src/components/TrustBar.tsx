'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * TrustBar — Emotional value strip
 *
 * Not stats. Not badges. Not SaaS marketing.
 * Four pillars of what makes the experience premium:
 * empathy, bespoke service, transparency, excellence.
 * Like the promise wall at a luxury architecture firm.
 */

const pillars = [
  {
    word: 'Écoute',
    promise: 'Votre vision guide chaque décision. On comprend avant de construire.',
  },
  {
    word: 'Sur-mesure',
    promise: 'Aucun projet identique. Chaque solution est pensée pour vous.',
  },
  {
    word: 'Transparence',
    promise: 'Un interlocuteur dédié, un budget respecté, zéro surprise.',
  },
  {
    word: 'Excellence',
    promise: 'Du gros œuvre aux finitions, nous ne transigeons jamais.',
  },
];

export function TrustBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  return (
    <section ref={sectionRef} id="trustbar" className="relative bg-white">
      <div className="container">
        <div className="py-16 md:py-24">
          {/* Thin separator line at top */}
          <motion.div
            className="w-full h-px bg-stone-200 mb-16 md:mb-20"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'left' }}
          />

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
                    fontSize: 'clamp(1.4rem, 2vw, 1.75rem)',
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    lineHeight: 1.2,
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
            className="w-full h-px bg-stone-200 mt-16 md:mt-20"
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
