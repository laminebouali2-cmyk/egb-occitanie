"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, ChevronDown } from "lucide-react";
import { SITE } from "@/lib/constants";
import { averageRating, reviewCount } from "@/lib/reviews";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.55, 0.8]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ——— Background image with parallax ——— */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image
          src="/images/hero-windshield.jpg"
          alt="Remplacement pare-brise professionnel"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={85}
        />
      </motion.div>

      {/* ——— Multi-stop gradient overlay ——— */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity: overlayOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/90 via-primary-900/70 to-primary-950/95" />
      </motion.div>

      {/* ——— Noise texture ——— */}
      <div className="absolute inset-0 noise-overlay" />

      {/* ——— Subtle radial glow ——— */}
      <div
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #0062FF 0%, transparent 70%)" }}
      />

      {/* ——— Content ——— */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-16 pt-32 pb-24 lg:pt-40 lg:pb-32"
        style={{ opacity: contentOpacity }}
      >
        <div className="max-w-3xl">
          {/* Google rating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.08] backdrop-blur-sm border border-white/[0.08] px-4 py-2 mb-8"
          >
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`w-3.5 h-3.5 ${i < Math.round(averageRating) ? "text-accent-400" : "text-white/20"}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold text-white/90">
              {averageRating}/5
            </span>
            <span className="w-px h-3 bg-white/20" />
            <span className="text-sm text-white/50">
              {reviewCount} avis Google
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden">
            <motion.h1
              className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold text-white leading-[1.05] tracking-tight"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Pare-brise fissuré ?
              <br />
              <span className="gradient-text">On vient à vous.</span>
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            className="mt-7 text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Intervention à domicile dans les{" "}
            <strong className="text-white/80 font-medium">Yvelines</strong>.
            Prise en charge assurance directe. Devis gratuit en 2&nbsp;minutes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <a
              href={SITE.phoneHref}
              className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-primary-500 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-primary-600 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-8px_rgba(0,98,255,0.4)]"
            >
              <span className="absolute inset-0 rounded-2xl bg-primary-500 animate-pulse-ring" />
              <Phone size={20} className="relative z-10" />
              <span className="relative z-10">{SITE.phone}</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/25"
            >
              Demander un devis
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Trust micro-badges */}
          <motion.div
            className="mt-14 flex flex-wrap gap-x-8 gap-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            {[
              "Prise en charge assurance",
              "Intervention sous 48h",
              "Garantie 2 ans",
            ].map((label) => (
              <div key={label} className="flex items-center gap-2.5 text-sm text-white/50">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-success/20">
                  <svg className="h-3 w-3 text-success" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ——— Floating stats card ——— */}
        <motion.div
          className="hidden lg:block absolute right-16 bottom-32 z-20"
          initial={{ opacity: 0, x: 40, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="animate-float rounded-2xl bg-white/[0.07] backdrop-blur-xl border border-white/10 p-6 min-w-[200px]">
            <div className="text-4xl font-extrabold text-white">
              &lt;&thinsp;48h
            </div>
            <div className="mt-1 text-sm text-white/50 font-medium">
              Délai d&apos;intervention
            </div>
            <div className="mt-4 h-px bg-white/10" />
            <div className="mt-4 text-3xl font-extrabold text-accent-400">
              0&thinsp;&euro;
            </div>
            <div className="mt-1 text-sm text-white/50 font-medium">
              Avance de frais
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ——— Scroll indicator ——— */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-xs font-medium text-white/30 uppercase tracking-widest">
          Découvrir
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
