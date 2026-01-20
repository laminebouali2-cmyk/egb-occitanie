'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

/**
 * CINEMATIC HERO — Scroll-Driven Image Sequence
 *
 * Concept : 192 frames d'une villa avec baies vitrées qui se referment.
 * Au scroll, on progresse dans la séquence (frame 1 → 192).
 * Le texte hero disparaît progressivement pendant la fermeture.
 *
 * Performance :
 * - Canvas pour affichage rapide
 * - Preload progressif (priorité frames 1-30, puis le reste)
 * - Mobile : version allégée (1 frame sur 2)
 */

const TOTAL_FRAMES = 192;
const FRAME_PATH = '/sequence/hero/frame-';
const SCROLL_HEIGHT = '300vh'; // Hauteur de scroll pour parcourir toute la séquence

export default function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Détection mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Preload des images avec stratégie progressive
  useEffect(() => {
    const frameStep = isMobile ? 2 : 1; // Mobile : 1 frame sur 2
    const totalToLoad = isMobile ? Math.floor(TOTAL_FRAMES / 2) : TOTAL_FRAMES;

    // Fonction de preload
    const loadImage = (index: number): Promise<HTMLImageElement> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        const frameNumber = String(index).padStart(3, '0');
        img.src = `${FRAME_PATH}${frameNumber}.jpg`;
        img.onload = () => {
          imagesRef.current[index] = img;
          setImagesLoaded(prev => prev + 1);
          resolve(img);
        };
        img.onerror = reject;
      });
    };

    // Stratégie de chargement :
    // 1. Charger frames 1-30 immédiatement (priorité haute)
    // 2. Charger le reste progressivement
    const loadSequence = async () => {
      // Phase 1 : Frames critiques (début de l'animation)
      const criticalFrames = Array.from(
        { length: Math.min(30, totalToLoad) },
        (_, i) => i * frameStep + 1
      );
      await Promise.all(criticalFrames.map(loadImage));

      // Phase 2 : Reste des frames (en arrière-plan)
      const remainingFrames = Array.from(
        { length: totalToLoad - criticalFrames.length },
        (_, i) => (i + criticalFrames.length) * frameStep + 1
      );

      // Charger par batch de 10 pour ne pas bloquer le navigateur
      for (let i = 0; i < remainingFrames.length; i += 10) {
        const batch = remainingFrames.slice(i, i + 10);
        await Promise.all(batch.map(loadImage));
      }
    };

    loadSequence();
  }, [isMobile]);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Mapping scroll → frame index
  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [1, TOTAL_FRAMES]
  );

  // Opacité et position du texte hero
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 0.7, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ['0%', '-15%']);

  // Dessiner la frame actuelle sur le canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateFrame = (index: number) => {
      const currentFrame = Math.round(index);
      const img = imagesRef.current[currentFrame];

      if (img && img.complete) {
        // Adapter le canvas à la taille de la fenêtre
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Dessiner l'image en mode "cover" (remplir sans déformer)
        const scale = Math.max(
          canvas.width / img.width,
          canvas.height / img.height
        );

        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    };

    const unsubscribe = frameIndex.on('change', updateFrame);
    return () => unsubscribe();
  }, [frameIndex, imagesLoaded]);

  // Resize handler pour le canvas
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: SCROLL_HEIGHT }}
    >
      {/* Conteneur sticky (reste fixé pendant le scroll) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-stone-950">

        {/* Canvas pour la séquence d'images */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ imageRendering: 'high-quality' }}
        />

        {/* Overlays cinématiques */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Vignette subtile */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.25) 100%)',
            }}
          />

          {/* Film grain (très subtil) */}
          <div
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            }}
          />
        </div>

        {/* Contenu texte hero (fade out au scroll) */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10"
          style={{ opacity: textOpacity, y: textY }}
        >
          <div className="container max-w-5xl">

            {/* Overline */}
            <motion.p
              className="text-overline text-stone-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              ENTREPRISE GÉNÉRALE DE BÂTIMENT
            </motion.p>

            {/* Headline principal */}
            <motion.h1
              className="text-white mb-6"
              style={{
                fontFamily: 'var(--font-serif)',
                letterSpacing: '-0.02em',
                lineHeight: '1.1',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Certaines villas
              <br />
              <span className="opacity-60">se transmettent</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-lead text-stone-300 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Parce qu'elles ont été pensées pour traverser le temps.
              <br />
              Construction sur-mesure en Occitanie depuis 1987.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="/contact" className="btn btn-primary">
                Démarrer un projet
                <svg
                  className="arrow"
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

              <Link href="/projets" className="btn-text text-white">
                Parcourir les réalisations
                <svg
                  className="arrow inline-block ml-2"
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
        </motion.div>

        {/* Loading indicator (affiché tant que frames critiques ne sont pas chargées) */}
        {imagesLoaded < 30 && (
          <div className="absolute inset-0 flex items-center justify-center bg-stone-950 z-20">
            <div className="text-center">
              <div className="w-32 h-1 bg-stone-800 rounded-full overflow-hidden mb-4">
                <div
                  className="h-full bg-stone-300 transition-all duration-300"
                  style={{ width: `${(imagesLoaded / 30) * 100}%` }}
                />
              </div>
              <p className="text-stone-500 text-sm">
                Chargement de l'expérience...
              </p>
            </div>
          </div>
        )}

        {/* Scroll indicator (disparaît au scroll) */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
        >
          <div className="flex flex-col items-center gap-2 text-stone-400">
            <p className="text-sm">Scrollez pour découvrir</p>
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
