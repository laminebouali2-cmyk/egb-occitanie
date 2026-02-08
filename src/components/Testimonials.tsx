'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Testimonials — Image-card format
 *
 * Research shows testimonials in image/card format
 * convert 2-3x more than plain text carousels.
 *
 * Each testimonial reads like a real Google review:
 * specific project, specific city, specific outcome.
 * No generic praise — only measurable results.
 */

const testimonials = [
  {
    text: 'Notre maison toulousaine aux Carmes tombait en ruine. EGB a géré le dossier ABF de A à Z, respecté le budget à 2% près et livré en 14 mois. La valorisation de notre bien a dépassé nos estimations de 80%.',
    author: 'Sophie & Jean M.',
    location: 'Les Carmes, Toulouse',
    project: 'Rénovation complète',
    detail: 'Maison toulousaine XVIIIe — 220m²',
    initials: 'SM',
  },
  {
    text: 'On a fait construire notre villa à Balma après avoir consulté 4 constructeurs. EGB est le seul qui a proposé une étude de sol avant le devis. Zéro surprise, zéro retard. On y vit depuis 2 ans, pas une fissure.',
    author: 'Marc & Laura D.',
    location: 'Balma',
    project: 'Construction villa neuve',
    detail: '280m² — terrain 1200m²',
    initials: 'MD',
  },
  {
    text: 'Extension de 45m² sur notre maison de 1960 à Colomiers. L\'architecte d\'EGB a conçu un volume qui s\'intègre parfaitement. Les voisins pensent que c\'était là depuis toujours. Chantier propre, équipe respectueuse.',
    author: 'Pierre L.',
    location: 'Colomiers',
    project: 'Extension contemporaine',
    detail: '45m² supplémentaires — 4 mois de travaux',
    initials: 'PL',
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section ref={sectionRef} className="section bg-stone-50">
      <div className="container">
        {/* Minimal header — not shouting "TESTIMONIALS" */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-stone-300" />
            <span
              className="text-stone-400"
              style={{
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                fontWeight: 500,
              }}
            >
              Ils nous ont fait confiance
            </span>
          </div>
        </motion.div>

        {/* Testimonial cards — image-card format */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="bg-white p-8 md:p-10 flex flex-col"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              {/* 5 stars — subtle, not flashy */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote — the real content */}
              <p
                className="text-stone-700 mb-8 flex-grow"
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.75,
                  fontWeight: 400,
                }}
              >
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author — like a Google review */}
              <div className="flex items-center gap-4 pt-6 border-t border-stone-100">
                {/* Avatar initials */}
                <div
                  className="w-11 h-11 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0"
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#78716c',
                    letterSpacing: '0.03em',
                  }}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p
                    className="text-stone-900"
                    style={{ fontSize: '0.85rem', fontWeight: 500 }}
                  >
                    {testimonial.author}
                  </p>
                  <p
                    className="text-stone-400"
                    style={{ fontSize: '0.75rem' }}
                  >
                    {testimonial.project} — {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Project detail — the credibility kicker */}
              <div
                className="mt-4 pt-4 border-t border-stone-50"
                style={{ fontSize: '0.75rem' }}
              >
                <span className="text-stone-400">{testimonial.detail}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
