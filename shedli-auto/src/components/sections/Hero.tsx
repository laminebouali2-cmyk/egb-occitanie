"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, PhoneIncoming } from "lucide-react";
import { SITE } from "@/lib/constants";
import { averageRating, reviewCount } from "@/lib/reviews";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: delay + 0.1, ease: [0.25, 0.1, 0.25, 1] as const },
});

export function Hero() {
  return (
    <section className="relative z-0 overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-6 pt-20 pb-6 lg:min-h-[calc(100svh-72px)] lg:grid-cols-2 lg:gap-20 lg:pt-0 lg:pb-0">
          {/* ——— Text ——— */}
          <div className="max-w-xl lg:py-20">
            {/* Social proof */}
            <motion.div {...fade(0.05)}>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-soft px-3 py-1.5 mb-5 lg:mb-7">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-2.5 h-2.5 lg:w-3 lg:h-3 ${i < Math.round(averageRating) ? "text-star" : "text-border-strong"}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[11px] lg:text-xs font-medium text-text-secondary">
                  {averageRating}/5 · {reviewCount} avis Google
                </span>
              </div>
            </motion.div>

            <motion.h1
              {...fade(0.15)}
              className="text-[1.75rem] leading-[1.12] sm:text-[2.25rem] lg:text-[3rem] font-semibold text-text tracking-[-0.025em]"
            >
              Pare-brise fissuré&nbsp;?
              <br />
              <span className="text-primary-500">Ne perdez pas de temps.</span>
            </motion.h1>

            <motion.p
              {...fade(0.25)}
              className="mt-4 text-[15px] lg:text-[17px] text-text-secondary leading-relaxed max-w-[420px]"
            >
              Contactez notre technicien. Il se déplace chez vous dans les Yvelines
              et en Île-de-France, gère votre dossier d&apos;assurance — et <strong className="text-text font-medium">vous ne payez rien</strong>.
            </motion.p>

            {/* Proof points — desktop only */}
            <motion.div {...fade(0.35)} className="mt-5 hidden sm:flex flex-col gap-2">
              {[
                "Intervention à domicile — vous ne bougez pas",
                "Agréé toutes assurances",
                "Collage garanti à vie",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-text-muted shrink-0" />
                  <span className="text-sm text-text-secondary">{point}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fade(0.4)} className="mt-6 lg:mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-primary-500/20 transition-all duration-200 hover:bg-primary-700 hover:shadow-md active:scale-[0.98]"
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
          </div>

          {/* ——— Desktop Image ——— */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
          >
            <div className="relative aspect-[3/4] max-h-[560px] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/hero-mechanic.jpg"
                alt="Technicien Shedli Auto remplaçant un pare-brise sur un véhicule"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 0px, 50vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="absolute bottom-6 left-6 rounded-xl border border-white/20 bg-white/95 backdrop-blur-sm px-4 py-3 shadow-lg shadow-black/5"
            >
              <p className="text-xs font-semibold text-text">+200 pare-brise remplacés</p>
              <p className="text-[11px] text-text-muted">en Île-de-France</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mobile image — taller ratio to show full image */}
      <motion.div
        className="relative mx-5 mb-6 overflow-hidden rounded-2xl lg:hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
      >
        <div className="relative aspect-[4/3] w-full">
          <Image
            src="/images/hero-mechanic.jpg"
            alt="Technicien Shedli Auto remplaçant un pare-brise"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={75}
          />
        </div>
      </motion.div>
    </section>
  );
}
