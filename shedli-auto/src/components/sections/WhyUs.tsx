"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

const card = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 lg:py-36 bg-surface-soft">
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-10 lg:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary-700 mb-3 lg:mb-4">
            L&apos;expérience Shedli
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.75rem] font-semibold text-text tracking-tight leading-[1.1] max-w-xl">
            On ne répare pas juste
            <br />
            des pare-brise.
          </h2>
          <p className="mt-4 text-sm lg:text-base text-text-secondary leading-relaxed max-w-lg">
            On prend en charge une situation stressante de A à Z.
            De l&apos;appel au dernier coup de chiffon, chaque détail est pensé pour vous.
          </p>
        </motion.div>

        {/* Sentinel for useInView — always visible */}
        <div ref={ref} />

        {/* ——— MOBILE LAYOUT — clean editorial, no bento ——— */}
        <div className="sm:hidden">
          {/* Photo */}
          <motion.div
            {...card(0)}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="rounded-2xl overflow-hidden relative aspect-[16/9] mb-8"
          >
            <Image
              src="/images/windshield-crack.jpg"
              alt="Remplacement de pare-brise — intervention Shedli Auto"
              fill
              className="object-cover"
              sizes="100vw"
              quality={75}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-white text-sm font-semibold">+200 interventions</p>
              <p className="text-white/60 text-[11px] mt-0.5">dans les Yvelines</p>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            {...card(0.08)}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="grid grid-cols-2 gap-3 mb-6"
          >
            <div className="rounded-xl border border-border bg-white p-4">
              <p className="text-2xl font-semibold text-text tracking-tight leading-none">
                +200
              </p>
              <p className="text-[11px] text-text-secondary mt-1.5">Interventions réalisées</p>
            </div>
            <div className="rounded-xl border border-border bg-white p-4">
              <p className="text-2xl font-semibold text-text tracking-tight leading-none">
                0<span className="text-sm text-text-muted ml-0.5">€</span>
              </p>
              <p className="text-[11px] text-text-secondary mt-1.5">Pris en charge assurance</p>
            </div>
          </motion.div>

          {/* Content items — clean editorial list */}
          <div className="space-y-0">
            <motion.div
              {...card(0.12)}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="border-t border-border py-5"
            >
              <h3 className="text-sm font-semibold text-text">On vient à vous</h3>
              <p className="mt-1.5 text-[13px] text-text-secondary leading-relaxed">
                Domicile, bureau, parking — vous ne bougez pas.
                Intervention dans tout le 78.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["Versailles", "Plaisir", "Saint-Germain", "Poissy", "Trappes"].map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center rounded-md bg-white border border-border px-2 py-0.5 text-[10px] text-text-muted"
                  >
                    {city}
                  </span>
                ))}
                <span className="inline-flex items-center rounded-md bg-white border border-border px-2 py-0.5 text-[10px] font-medium text-text-secondary">
                  +15 villes
                </span>
              </div>
            </motion.div>

            <motion.div
              {...card(0.16)}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="border-t border-border py-5"
            >
              <h3 className="text-sm font-semibold text-text">Agréé toutes assurances</h3>
              <p className="mt-1.5 text-[13px] text-text-secondary leading-relaxed">
                AXA, Macif, MAIF, Matmut, Groupama, MMA, Allianz — prise en charge directe.
              </p>
            </motion.div>

            <motion.div
              {...card(0.2)}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="border-t border-border py-5"
            >
              <h3 className="text-sm font-semibold text-text">Collage garanti à vie</h3>
              <p className="mt-1.5 text-[13px] text-text-secondary leading-relaxed">
                Adhésifs de dernière génération, pose conforme ECE R43. Un collage qui tient.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ——— DESKTOP BENTO GRID ——— */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
          {/* Card 1 — On vient à vous (wide) */}
          <motion.div
            {...card(0.04)}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="sm:col-span-2 rounded-2xl border border-border bg-white p-6 lg:p-10"
          >
            <h3 className="text-lg lg:text-xl font-semibold text-text tracking-tight">
              On vient à vous
            </h3>
            <p className="mt-1.5 text-[13px] lg:text-sm text-text-secondary leading-relaxed max-w-sm">
              Domicile, bureau, parking — vous ne bougez pas.
              Intervention dans tout le 78.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {["Versailles", "Plaisir", "Saint-Germain", "Poissy", "Trappes"].map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center rounded-md bg-surface-soft px-2 py-1 text-[10px] lg:text-[11px] font-medium text-text-muted"
                >
                  {city}
                </span>
              ))}
              <span className="inline-flex items-center rounded-md bg-surface-soft px-2 py-1 text-[10px] lg:text-[11px] font-medium text-text-secondary">
                +15 villes
              </span>
            </div>
          </motion.div>

          {/* Card 2 — Photo (tall) */}
          <motion.div
            {...card(0.08)}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="row-span-2 rounded-2xl overflow-hidden relative min-h-[320px] lg:min-h-0"
          >
            <Image
              src="/images/windshield-crack.jpg"
              alt="Remplacement de pare-brise fissuré — intervention Shedli Auto"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 0px, (max-width: 1024px) 50vw, 33vw"
              quality={80}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-white text-sm font-semibold">Techniciens certifiés</p>
              <p className="text-white/60 text-xs mt-0.5">+200 interventions dans les Yvelines</p>
            </div>
          </motion.div>

          {/* Card 3 — Stat: +200 */}
          <motion.div
            {...card(0.12)}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="rounded-2xl border border-border bg-white p-5 lg:p-7 flex flex-col justify-between"
          >
            <div className="mt-2 lg:mt-4">
              <p className="text-[2rem] lg:text-[2.5rem] font-semibold text-text tracking-tight leading-none">
                +200
              </p>
              <p className="text-[12px] lg:text-sm text-text-secondary mt-1.5">
                Interventions réalisées dans les Yvelines.
              </p>
            </div>
          </motion.div>

          {/* Card 4 — Stat: 0€ */}
          <motion.div
            {...card(0.16)}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="rounded-2xl border border-border bg-white p-5 lg:p-7 flex flex-col justify-between"
          >
            <div className="mt-2 lg:mt-4">
              <p className="text-[2rem] lg:text-[2.5rem] font-semibold text-text tracking-tight leading-none">
                0<span className="text-base lg:text-lg font-medium text-text-muted ml-0.5">€</span>
              </p>
              <p className="text-[12px] lg:text-sm text-text-secondary mt-1.5">
                Pas d&apos;avance, pas de franchise.
              </p>
            </div>
          </motion.div>

          {/* Card 5 — Agréé assurances (wide) */}
          <motion.div
            {...card(0.2)}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="sm:col-span-2 rounded-2xl border border-border bg-white p-6 lg:p-10"
          >
            <h3 className="text-lg lg:text-xl font-semibold text-text tracking-tight">
              Agréé toutes assurances
            </h3>
            <p className="mt-1.5 text-[13px] lg:text-sm text-text-secondary leading-relaxed">
              AXA, Macif, MAIF, Matmut, Groupama, MMA, Allianz —
              prise en charge directe. Donnez-nous votre numéro de contrat.
            </p>
          </motion.div>

          {/* Card 6 — Garantie collage */}
          <motion.div
            {...card(0.24)}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="rounded-2xl border border-border bg-white p-5 lg:p-7"
          >
            <h3 className="text-base lg:text-lg font-semibold text-text tracking-tight">
              Collage garanti à vie
            </h3>
            <p className="mt-1.5 text-[12px] lg:text-sm text-text-secondary leading-relaxed">
              Adhésifs de dernière génération, pose conforme ECE R43. Un collage qui tient, pour de bon.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-10 lg:mt-14 flex flex-col sm:flex-row gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-primary-500/20 transition-all duration-200 hover:bg-primary-700 hover:shadow-md active:scale-[0.98]"
          >
            <Phone size={16} strokeWidth={2.2} />
            Appeler — {SITE.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
