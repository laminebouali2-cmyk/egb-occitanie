'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * TrustBar — "La confiance se prouve"
 *
 * Neuromarketing angle: Loss Aversion + Cognitive Ease.
 * Each pillar addresses a core FEAR of the prospect
 * and flips it into a concrete, contractual promise.
 * Parallel structure "Un X, un Y" creates rhythm,
 * memorability, and subconscious pattern recognition.
 */

const pillars = [
  {
    title: 'Un prix, un contrat.',
    text: 'Le budget est forfaitaire, détaillé poste par poste. Le montant convenu est le montant final. Toujours.',
  },
  {
    title: 'Un visage, une voix.',
    text: 'Un seul interlocuteur de la première visite à la remise des clés. Une personne qui connaît votre projet par cœur.',
  },
  {
    title: 'Un planning, une parole.',
    text: 'Les délais sont inscrits au contrat. Chaque semaine, un point d\u2019avancement confirme que tout avance comme prévu.',
  },
  {
    title: 'Un résultat, une garantie.',
    text: 'Décennale, biennale, parfait achèvement. Artisans certifiés RGE et Qualibat. La qualité n\u2019est pas négociable.',
  },
];

export function TrustBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  return (
    <section ref={sectionRef} id="trustbar" className="relative bg-white">
      <div className="container">
        <div className="py-10 md:py-14">
          {/* Top line */}
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
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'var(--color-stone-400)',
              letterSpacing: '-0.01em',
            }}
          >
            La confiance ne se décrète pas. Elle se prouve.
          </motion.p>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.1 }}
              >
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.2rem, 1.6vw, 1.4rem)',
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    lineHeight: 1.25,
                    color: 'var(--color-stone-900)',
                  }}
                >
                  {pillar.title}
                </h3>

                <div
                  className="mb-4"
                  style={{
                    width: '28px',
                    height: '1.5px',
                    background: 'var(--color-stone-300)',
                  }}
                />

                <p
                  style={{
                    fontSize: '0.88rem',
                    lineHeight: 1.7,
                    color: 'var(--color-stone-500)',
                    fontWeight: 400,
                    maxWidth: '280px',
                  }}
                >
                  {pillar.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom line */}
          <motion.div
            className="w-full h-px bg-stone-200 mt-10 md:mt-12"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'right' }}
          />
        </div>
      </div>
    </section>
  );
}
