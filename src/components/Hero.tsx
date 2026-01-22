'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Particle system - Effet neige/poussière atmosphérique
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    // Créer 150 particules
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.8 + 0.3,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();

        // Mouvement
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Reset position quand sort de l'écran
        if (particle.y > canvas.height) {
          particle.y = -10;
          particle.x = Math.random() * canvas.width;
        }
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-end overflow-hidden bg-[#0d0d0d]"
      style={{ height: '100vh' }}
    >
      {/* Background Image Layer */}
      <motion.div
        className="absolute inset-0"
        style={{ scale }}
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            y,
            backgroundImage: `url('https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2787&auto=format&fit=crop')`,
            backgroundPosition: '60% center',
          }}
        />

        {/* Quadruple gradient overlay - Contrôle cinématographique total */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/98 via-[#0d0d0d]/88 via-35% to-[#0d0d0d]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/95 via-[#0d0d0d]/40 via-50% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d]/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[#0d0d0d]/15" />
      </motion.div>

      {/* Canvas Particles - Effet atmosphérique */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Vignette subtile */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)',
        }}
      />

      {/* Content Grid */}
      <motion.div
        className="relative z-10 w-full pb-[9vh] md:pb-[11vh]"
        style={{ opacity }}
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-8 items-end">

            {/* Main Content - 9 columns desktop */}
            <div className="col-span-12 lg:col-span-9 xl:col-span-8">

              {/* Overline - Ultra refined */}
              <motion.div
                className="flex items-center gap-5 mb-12"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3, delay: 0.2, ease: [0.19, 1.0, 0.22, 1.0] }}
              >
                <span className="h-[1px] w-16 bg-white/20" />
                <span
                  className="text-white/45 uppercase tracking-[0.35em]"
                  style={{
                    fontSize: '9.5px',
                    fontWeight: 500,
                    letterSpacing: '0.35em',
                  }}
                >
                  Entreprise Générale de Bâtiment
                </span>
              </motion.div>

              {/* Headline - Monumentale */}
              <motion.h1
                className="text-white mb-9"
                style={{
                  fontSize: 'clamp(3.75rem, 10vw, 9rem)',
                  lineHeight: 0.90,
                  letterSpacing: '-0.035em',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 275,
                  textShadow: '0 6px 80px rgba(0,0,0,0.5)',
                }}
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.45, ease: [0.19, 1.0, 0.22, 1.0] }}
              >
                Nous construisons
                <br />
                <span
                  className="text-white/35"
                  style={{
                    fontWeight: 250,
                  }}
                >
                  ce qui dure
                </span>
              </motion.h1>

              {/* Subtitle - Parfaitement équilibrée */}
              <motion.p
                className="text-white/65 mb-16 max-w-[560px]"
                style={{
                  fontSize: 'clamp(1.0625rem, 1.6vw, 1.375rem)',
                  lineHeight: 1.65,
                  letterSpacing: '-0.012em',
                  fontWeight: 300,
                }}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.75, ease: [0.19, 1.0, 0.22, 1.0] }}
              >
                Maîtres d'œuvre de vos projets d'exception à Toulouse et en Occitanie.
                Construction, rénovation, extension.
              </motion.p>

              {/* CTA Group - Perfection des interactions */}
              <motion.div
                className="flex flex-col sm:flex-row items-start gap-4"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 1.05, ease: [0.19, 1.0, 0.22, 1.0] }}
              >
                {/* Primary CTA */}
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-3.5 bg-white text-[#0d0d0d] overflow-hidden transition-all duration-700 ease-out hover:shadow-[0_28px_120px_-16px_rgba(255,255,255,0.65)] hover:-translate-y-1.5"
                  style={{
                    padding: '1.1875rem 2.5rem',
                    fontSize: '0.9375rem',
                    letterSpacing: '0.025em',
                    fontWeight: 500,
                  }}
                >
                  <span className="relative z-10">Démarrer un projet</span>
                  <svg
                    className="relative z-10 w-[15px] h-[15px] transition-transform duration-700 ease-out group-hover:translate-x-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <span className="absolute inset-0 bg-white/92 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                </Link>

                {/* Secondary CTA */}
                <Link
                  href="/projets"
                  className="group inline-flex items-center gap-3.5 text-white/80 transition-all duration-500 hover:text-white hover:border-white/30"
                  style={{
                    padding: '1.1875rem 2.5rem',
                    fontSize: '0.9375rem',
                    letterSpacing: '0.025em',
                    fontWeight: 500,
                    border: '1px solid rgba(255,255,255,0.12)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <span>Nos réalisations</span>
                  <svg
                    className="w-[15px] h-[15px] transition-transform duration-500 ease-out group-hover:translate-x-1.5"
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

            {/* Right Column - Stats & Contact */}
            <div className="col-span-12 lg:col-span-3 xl:col-span-4 lg:pl-8 mt-20 lg:mt-0">
              <motion.div
                className="flex flex-col gap-10"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 1.3, ease: [0.19, 1.0, 0.22, 1.0] }}
              >
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-7">
                  <div>
                    <p
                      className="text-white mb-2"
                      style={{
                        fontSize: 'clamp(1.625rem, 2.8vw, 2.25rem)',
                        fontFamily: 'var(--font-serif)',
                        fontWeight: 275,
                        letterSpacing: '-0.025em',
                      }}
                    >
                      200+
                    </p>
                    <p
                      className="text-white/35 uppercase leading-tight"
                      style={{
                        fontSize: '0.6875rem',
                        letterSpacing: '0.1em',
                        fontWeight: 500,
                      }}
                    >
                      Projets réalisés
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-white mb-2"
                      style={{
                        fontSize: 'clamp(1.625rem, 2.8vw, 2.25rem)',
                        fontFamily: 'var(--font-serif)',
                        fontWeight: 275,
                        letterSpacing: '-0.025em',
                      }}
                    >
                      0
                    </p>
                    <p
                      className="text-white/35 uppercase leading-tight"
                      style={{
                        fontSize: '0.6875rem',
                        letterSpacing: '0.1em',
                        fontWeight: 500,
                      }}
                    >
                      Retard
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-white mb-2"
                      style={{
                        fontSize: 'clamp(1.625rem, 2.8vw, 2.25rem)',
                        fontFamily: 'var(--font-serif)',
                        fontWeight: 275,
                        letterSpacing: '-0.025em',
                      }}
                    >
                      5+
                    </p>
                    <p
                      className="text-white/35 uppercase leading-tight"
                      style={{
                        fontSize: '0.6875rem',
                        letterSpacing: '0.1em',
                        fontWeight: 500,
                        lineHeight: 1.5,
                      }}
                    >
                      Architectes
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] w-full bg-white/8" />

                {/* Contact Direct */}
                <div className="flex flex-col gap-3.5">
                  <p
                    className="text-white/35 uppercase"
                    style={{
                      fontSize: '0.6875rem',
                      letterSpacing: '0.1em',
                      fontWeight: 500,
                    }}
                  >
                    Contact direct
                  </p>
                  <a
                    href="tel:+33665015882"
                    className="text-white/80 hover:text-white transition-colors duration-400"
                    style={{
                      fontSize: '1.1875rem',
                      letterSpacing: '0.015em',
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

      {/* Scroll Indicator - Minimalisme extrême */}
      <motion.div
        className="absolute bottom-10 right-10 md:right-14 lg:right-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 1.3 }}
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0])
        }}
      >
        <div className="flex flex-col items-center gap-5">
          <p
            className="text-white/20 uppercase"
            style={{
              fontSize: '0.625rem',
              letterSpacing: '0.28em',
              fontWeight: 500,
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
            }}
          >
            Scroll
          </p>
          <motion.div
            className="w-[1px] h-28 bg-gradient-to-b from-white/15 to-transparent origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 2.0, duration: 1.8, ease: [0.19, 1.0, 0.22, 1.0] }}
          />
        </div>
      </motion.div>

      {/* Coordonnées géographiques */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 right-10 md:right-14 lg:right-16 hidden xl:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.3 }}
      >
        <div className="flex flex-col items-end gap-5 text-white/12">
          <span
            style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.1em',
              fontWeight: 400,
            }}
          >
            43.5528°N
          </span>
          <div className="w-[1px] h-20 bg-white/8" />
          <span
            style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.1em',
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
