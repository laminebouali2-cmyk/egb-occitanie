"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import { averageRating, reviewCount } from "@/lib/reviews";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#09090b]">
      {/* ——— Gradient mesh — subtle, like Linear ——— */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full opacity-[0.15] blur-[120px]"
          style={{ background: "conic-gradient(from 180deg, #6366F1, #818CF8, #4F46E5, #6366F1)" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[60%] rounded-full opacity-[0.08] blur-[100px]"
          style={{ background: "conic-gradient(from 0deg, #818CF8, #6366F1, #A5B4FC, #818CF8)" }}
        />
      </div>

      {/* ——— Subtle grid ——— */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ——— Content ——— */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 sm:px-8 pt-36 pb-28 lg:pt-44 lg:pb-36">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 mb-10">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-3 h-3 ${i < Math.round(averageRating) ? "text-star" : "text-white/15"}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs font-medium text-white/50">
                {averageRating}/5 sur Google · {reviewCount} avis
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.08] tracking-[-0.025em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Pare-brise fissuré ?
            <br />
            <span className="text-white/40">On vient à vous.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mt-6 text-lg text-white/40 max-w-lg mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            Intervention mobile dans les Yvelines.
            Prise en charge assurance directe. Devis gratuit en 2 min.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2.5 rounded-lg bg-white px-6 py-3 text-sm font-medium text-[#09090b] transition-all duration-200 hover:bg-white/90"
            >
              <Phone size={16} />
              {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.1] px-6 py-3 text-sm font-medium text-white/70 transition-all duration-200 hover:text-white hover:border-white/20 hover:bg-white/[0.04]"
            >
              Demander un devis
              <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Trust line */}
          <motion.div
            className="mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {["Prise en charge assurance", "Sous 48h", "Garantie 2 ans"].map(
              (label) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 text-xs text-white/25"
                >
                  <svg
                    className="w-3.5 h-3.5 text-success/60"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {label}
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
