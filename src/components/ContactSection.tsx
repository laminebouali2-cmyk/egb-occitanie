'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="section bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-stone-900" />
              <span className="text-overline">Contactez-nous</span>
            </div>

            <h2 className="mb-8">
              Votre projet
              <br />
              <span className="text-stone-400">mérite une conversation</span>
            </h2>

            <p className="text-lead mb-12 max-w-lg">
              Chaque projet est unique. Prenons le temps d&apos;en discuter pour
              comprendre vos besoins et vous proposer l&apos;accompagnement idéal.
            </p>

            {/* Contact Methods */}
            <div className="space-y-8 mb-12">
              <motion.a
                href="tel:+33665015882"
                className="group flex items-start gap-6"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-14 h-14 bg-stone-100 flex items-center justify-center flex-shrink-0 group-hover:bg-stone-900 transition-colors duration-300">
                  <svg
                    className="w-5 h-5 text-stone-600 group-hover:text-white transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-sm text-stone-500 block mb-1">Téléphone</span>
                  <span className="text-xl text-stone-900 group-hover:text-stone-600 transition-colors">
                    06 65 01 58 82
                  </span>
                </div>
              </motion.a>

              <motion.a
                href="mailto:contact@egb-occitanie.fr"
                className="group flex items-start gap-6"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="w-14 h-14 bg-stone-100 flex items-center justify-center flex-shrink-0 group-hover:bg-stone-900 transition-colors duration-300">
                  <svg
                    className="w-5 h-5 text-stone-600 group-hover:text-white transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-sm text-stone-500 block mb-1">Email</span>
                  <span className="text-xl text-stone-900 group-hover:text-stone-600 transition-colors">
                    contact@egb-occitanie.fr
                  </span>
                </div>
              </motion.a>

              <motion.div
                className="flex items-start gap-6"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="w-14 h-14 bg-stone-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-stone-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-sm text-stone-500 block mb-1">Zone d&apos;intervention</span>
                  <span className="text-xl text-stone-900">
                    Toulouse & Occitanie
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - CTA Card */}
          <motion.div
            className="bg-stone-900 p-10 md:p-14 text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: 'var(--font-serif)', color: '#FFFFFF' }}>
              Parlons de votre projet
            </h3>

            <p className="text-stone-400 text-lg mb-10 leading-relaxed">
              Décrivez-nous votre vision. Nous vous recontactons sous 24h pour
              un premier échange sans engagement.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              {[
                'Étude personnalisée offerte',
                'Réponse sous 24 heures',
                'Devis détaillé et transparent',
                'Accompagnement de A à Z',
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-5 h-5 rounded-full border border-stone-600 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span className="text-stone-300">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 bg-white text-stone-900 px-8 py-5 font-medium transition-all duration-500 hover:bg-stone-100 hover:shadow-2xl w-full justify-center"
            >
              Demander une étude gratuite
              <svg
                className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1"
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

            <p className="text-center text-stone-500 text-sm mt-6">
              Sans engagement • Réponse garantie
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
