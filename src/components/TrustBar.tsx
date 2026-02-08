'use client';

import { motion } from 'framer-motion';

/**
 * TrustBar — Premium authority strip
 *
 * No icons, no badges, no SaaS-style shields.
 * Just powerful numbers that speak for themselves,
 * like the foyer of an architecture firm.
 */

const metrics = [
  { value: '15', unit: 'ans', label: 'd\'expertise en Occitanie' },
  { value: '200', unit: '+', label: 'projets livrés' },
  { value: '100', unit: '%', label: 'autorisations ABF obtenues' },
  { value: '24', unit: 'h', label: 'réponse garantie' },
];

export function TrustBar() {
  return (
    <section id="trustbar" className="relative bg-white border-b border-stone-100">
      <div className="container">
        <div className="py-12 md:py-16">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="relative text-center"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Large number */}
                <div className="flex items-baseline justify-center gap-0.5 mb-2">
                  <span
                    className="text-stone-900"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                      fontWeight: 300,
                      lineHeight: 1,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {metric.value}
                  </span>
                  <span
                    className="text-stone-400"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                      fontWeight: 300,
                    }}
                  >
                    {metric.unit}
                  </span>
                </div>
                {/* Label */}
                <p
                  className="text-stone-500"
                  style={{
                    fontSize: '0.8rem',
                    letterSpacing: '0.02em',
                    lineHeight: 1.4,
                  }}
                >
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
