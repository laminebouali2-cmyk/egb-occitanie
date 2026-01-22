'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-end overflow-hidden bg-[#0a0a0a]"
      style={{ height: '100vh' }}
    >
      {/* Background Layer - Image cinématographique */}
      <motion.div
        className="absolute inset-0"
        style={{ scale }}
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            y,
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2787&auto=format&fit=crop')`,
            backgroundPosition: '65% center',
          }}
        />

        {/* Triple gradient overlay pour contrôle parfait du contraste */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/98 via-[#0a0a0a]/85 via-30% to-[#0a0a0a]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/95 via-transparent via-60% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/40 via-transparent to-transparent" />
      </motion.div>

      {/* Grid overlay subtil - Sophistication */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px),
                           repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)`,
        }}
      />

      {/* Content Container - Grid parfait */}
      <motion.div
        className="relative z-10 w-full pb-[8vh] md:pb-[10vh]"
        style={{ opacity }}
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-6 items-end">

            {/* Left Column - Contenu principal (8 colonnes desktop) */}
            <div className="col-span-12 lg:col-span-8 xl:col-span-7">

              {/* Overline - Micro-typographie perfectionnée */}
              <motion.div
                className="flex items-center gap-6 mb-10"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="h-[1px] w-20 bg-white/25" />
                <span
                  className="text-white/50 uppercase font-medium"
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.32em',
                    fontWeight: 500,
                  }}
                >
                  Entreprise Générale de Bâtiment
                </span>
              </motion.div>

              {/* Headline - Typographie monumentale */}
              <motion.h1
                className="text-white mb-10"
                style={{
                  fontSize: 'clamp(3.5rem, 9.5vw, 8rem)',
                  lineHeight: 0.92,
                  letterSpacing: '-0.03em',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 300,
                  textShadow: '0 4px 60px rgba(0,0,0,0.4)',
                }}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                Nous construisons
                <br />
                <span
                  className="text-white/40"
                  style={{
                    fontWeight: 275,
                    fontStyle: 'normal',
                  }}
                >
                  ce qui dure
                </span>
              </motion.h1>

              {/* Subtitle - Balance parfaite */}
              <motion.p
                className="text-white/70 mb-14 max-w-[520px]"
                style={{
                  fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)',
                  lineHeight: 1.6,
                  letterSpacing: '-0.01em',
                  fontWeight: 300,
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                Maîtres d'œuvre de vos projets d'exception à Toulouse et en Occitanie.
              </motion.p>

              {/* CTA Group - Buttons premium avec spacing parfait */}
              <motion.div
                className="flex flex-col sm:flex-row items-start gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Primary CTA - White minimal */}
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-3 bg-white text-[#0a0a0a] overflow-hidden transition-all duration-700 hover:shadow-[0_24px_100px_-12px_rgba(255,255,255,0.6)] hover:-translate-y-1"
                  style={{
                    padding: '1.125rem 2.25rem',
                    fontSize: '0.9375rem',
                    letterSpacing: '0.02em',
                    fontWeight: 500,
                  }}
                >
                  <span className="relative z-10">Démarrer votre projet</span>
                  <svg
                    className="relative z-10 w-4 h-4 transition-transform duration-700 ease-out group-hover:translate-x-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <span className="absolute inset-0 bg-white/90 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                </Link>

                {/* Secondary CTA - Ghost button */}
                <Link
                  href="/projets"
                  className="group inline-flex items-center gap-3 text-white/85 transition-all duration-500 hover:text-white"
                  style={{
                    padding: '1.125rem 2.25rem',
                    fontSize: '0.9375rem',
                    letterSpacing: '0.02em',
                    fontWeight: 500,
                    border: '1px solid rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span>Nos réalisations</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-500 ease-out group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>

            </div>

            {/* Right Column - Meta info (4 colonnes desktop) */}
            <div className="col-span-12 lg:col-span-4 xl:col-span-5 lg:pl-12 mt-16 lg:mt-0">
              <motion.div
                className="flex flex-col gap-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Stats minimalistes */}
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <p
                      className="text-white mb-1.5"
                      style={{
                        fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                        fontFamily: 'var(--font-serif)',
                        fontWeight: 300,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      200+
                    </p>
                    <p
                      className="text-white/40 uppercase"
                      style={{
                        fontSize: '0.6875rem',
                        letterSpacing: '0.08em',
                        fontWeight: 500,
                      }}
                    >
                      Projets
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-white mb-1.5"
                      style={{
                        fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                        fontFamily: 'var(--font-serif)',
                        fontWeight: 300,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      0
                    </p>
                    <p
                      className="text-white/40 uppercase"
                      style={{
                        fontSize: '0.6875rem',
                        letterSpacing: '0.08em',
                        fontWeight: 500,
                      }}
                    >
                      Retard
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-white mb-1.5"
                      style={{
                        fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                        fontFamily: 'var(--font-serif)',
                        fontWeight: 300,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      5+
                    </p>
                    <p
                      className="text-white/40 uppercase"
                      style={{
                        fontSize: '0.6875rem',
                        letterSpacing: '0.08em',
                        fontWeight: 500,
                        lineHeight: 1.4,
                      }}
                    >
                      Architectes
                    </p>
                  </div>
                </div>

                {/* Separator line */}
                <div className="h-[1px] w-full bg-white/10" />

                {/* Contact rapide */}
                <div className="flex flex-col gap-3">
                  <p
                    className="text-white/40 uppercase"
                    style={{
                      fontSize: '0.6875rem',
                      letterSpacing: '0.08em',
                      fontWeight: 500,
                    }}
                  >
                    Contact direct
                  </p>
                  <a
                    href="tel:+33665015882"
                    className="text-white/85 hover:text-white transition-colors duration-300"
                    style={{
                      fontSize: '1.125rem',
                      letterSpacing: '0.02em',
                      fontWeight: 400,
                    }}
                  >
                    06 65 01 58 82
                  </a>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator - Ultra minimaliste */}
      <motion.div
        className="absolute bottom-8 right-8 md:right-12 lg:right-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1.2 }}
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.12], [1, 0])
        }}
      >
        <div className="flex flex-col items-center gap-4">
          <p
            className="text-white/25 uppercase rotate-90 origin-center"
            style={{
              fontSize: '0.625rem',
              letterSpacing: '0.25em',
              fontWeight: 500,
              transformOrigin: 'center',
              whiteSpace: 'nowrap',
              transform: 'rotate(90deg) translateX(8px)',
            }}
          >
            Scroll
          </p>
          <motion.div
            className="w-[1px] h-24 bg-gradient-to-b from-white/20 to-transparent origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1.9, duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </motion.div>

      {/* Coordonnées géographiques - Détail premium discret */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 right-8 md:right-12 lg:right-16 hidden xl:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1.2 }}
      >
        <div className="flex flex-col items-end gap-4 text-white/15">
          <span
            style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.08em',
              fontWeight: 400,
            }}
          >
            43.5528°N
          </span>
          <div className="w-[1px] h-16 bg-white/10" />
          <span
            style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.08em',
              fontWeight: 400,
            }}
          >
            1.4647°E
          </span>
        </div>
      </motion.div>

    </section>
  );
}
