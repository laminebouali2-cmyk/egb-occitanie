"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, PhoneIncoming } from "lucide-react";
import { SITE } from "@/lib/constants";
import { averageRating, reviewCount } from "@/lib/reviews";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-300/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid min-h-[calc(100svh-72px)] grid-cols-1 items-center gap-12 pt-28 pb-16 lg:grid-cols-2 lg:gap-16 lg:pt-0 lg:pb-0">
          {/* ——— Text ——— */}
          <div className="max-w-xl">
            {/* Rating badge */}
            <motion.div {...fade(0.1)}>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-soft px-3.5 py-1.5 mb-8">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-3 h-3 ${i < Math.round(averageRating) ? "text-star" : "text-border-strong"}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs font-medium text-text-secondary">
                  {averageRating}/5 · {reviewCount} avis Google
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fade(0.2)}
              className="text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-[3.25rem] font-semibold text-text tracking-[-0.025em]"
            >
              Votre pare-brise,{" "}
              <span className="text-primary-500">réparé chez vous.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              {...fade(0.3)}
              className="mt-5 text-base sm:text-lg text-text-secondary leading-relaxed max-w-md"
            >
              Intervention mobile dans les Yvelines sous 24&#8209;48h.
              Prise en charge assurance directe. Devis gratuit en 2&nbsp;minutes.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fade(0.4)} className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-primary-500/20 transition-all duration-200 hover:bg-primary-600 hover:shadow-md hover:shadow-primary-500/25 active:scale-[0.98]"
              >
                <Phone size={16} strokeWidth={2.2} />
                Appeler — {SITE.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-border bg-white px-6 py-3.5 text-sm font-semibold text-text transition-all duration-200 hover:bg-surface-soft hover:border-border-strong active:scale-[0.98]"
              >
                <PhoneIncoming size={16} strokeWidth={2.2} />
                Être rappelé
              </Link>
            </motion.div>

            {/* Trust markers */}
            <motion.div
              {...fade(0.55)}
              className="mt-10 flex flex-wrap gap-x-5 gap-y-2"
            >
              {[
                "Agréé toutes assurances",
                "Intervention sous 48h",
                "Garantie 2 ans",
              ].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 text-[13px] text-text-muted"
                >
                  <svg className="w-3.5 h-3.5 text-success" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ——— Image ——— */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative aspect-[3/4] max-h-[640px] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/hero-mechanic.jpg"
                alt="Technicien Shedli Auto remplaçant un pare-brise sur un véhicule"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 0px, 50vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-white px-4 py-3 shadow-lg shadow-black/5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-success/10">
                  <svg className="w-4 h-4 text-success" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-text">+2 000 interventions</p>
                  <p className="text-[11px] text-text-muted">dans les Yvelines</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mobile image */}
      <motion.div
        className="relative mx-5 mb-8 overflow-hidden rounded-2xl lg:hidden"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="relative aspect-[4/3] w-full">
          <Image
            src="/images/hero-mechanic.jpg"
            alt="Technicien Shedli Auto remplaçant un pare-brise"
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
            quality={80}
          />
        </div>
      </motion.div>
    </section>
  );
}
