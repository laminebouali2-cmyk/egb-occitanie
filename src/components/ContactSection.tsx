"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070')`,
          }}
        />
        <div className="absolute inset-0 bg-neutral-900/85" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-overline text-neutral-500 mb-4 block">Contact</span>
            <h2 className="text-white mb-6">
              Parlons de
              <br />
              <span className="text-neutral-400">votre projet</span>
            </h2>
            <p className="text-lg text-neutral-400 mb-10 leading-relaxed max-w-md">
              Une question, un projet en tête ? Notre équipe est à votre écoute
              pour vous accompagner dans votre réflexion.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a
                href="tel:+33500000000"
                className="flex items-center gap-4 text-white hover:text-neutral-300 transition-colors group"
              >
                <span className="w-12 h-12 border border-neutral-700 flex items-center justify-center group-hover:border-neutral-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <span className="font-medium">05 00 00 00 00</span>
              </a>

              <a
                href="mailto:contact@egb-occitanie.fr"
                className="flex items-center gap-4 text-white hover:text-neutral-300 transition-colors group"
              >
                <span className="w-12 h-12 border border-neutral-700 flex items-center justify-center group-hover:border-neutral-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="font-medium">contact@egb-occitanie.fr</span>
              </a>

              <div className="flex items-center gap-4 text-neutral-400">
                <span className="w-12 h-12 border border-neutral-700 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span>Toulouse, Occitanie</span>
              </div>
            </div>
          </motion.div>

          {/* Right - CTA Card */}
          <motion.div
            className="bg-white p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-normal mb-4">
              Démarrer votre projet
            </h3>
            <p className="text-neutral-500 mb-8 leading-relaxed">
              Décrivez-nous votre projet. Nous vous recontactons sous 24h
              pour échanger sur vos besoins et vous proposer un accompagnement personnalisé.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-neutral-600">
                <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Étude gratuite et sans engagement</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-600">
                <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Réponse sous 24 heures</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-600">
                <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Devis détaillé personnalisé</span>
              </div>
            </div>

            <Link href="/contact" className="btn btn-primary w-full">
              Demander un devis gratuit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
