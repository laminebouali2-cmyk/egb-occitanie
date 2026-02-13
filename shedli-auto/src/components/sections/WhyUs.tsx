"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MapPin, Clock, CreditCard, ShieldCheck, Award, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

const card = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-36 bg-surface-soft">
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-14 lg:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary-700 mb-4">
            L&apos;expérience Shedli
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-text tracking-tight leading-[1.1] max-w-xl">
            On ne répare pas juste
            <br />
            des pare-brise.
          </h2>
          <p className="mt-5 text-base text-text-secondary leading-relaxed max-w-lg">
            On simplifie une situation stressante. De l&apos;appel au dernier coup de
            chiffon, chaque détail est pensé pour que vous n&apos;ayez rien à faire.
          </p>
        </motion.div>

        {/* ——— Bento Grid ——— */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">

          {/* Card 1 — On vient à vous (large, span 2 cols) */}
          <motion.div
            {...card(0)}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="sm:col-span-2 rounded-2xl border border-border bg-white p-8 lg:p-10 relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-500 mb-5">
                <MapPin size={20} strokeWidth={1.8} />
              </div>
              <h3 className="text-xl font-semibold text-text tracking-tight">
                On vient à vous
              </h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed max-w-sm">
                Domicile, bureau, parking — vous ne bougez pas.
                Notre technicien se déplace dans tout le département 78,
                avec tout le matériel nécessaire.
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {["Versailles", "Plaisir", "Saint-Germain", "Poissy", "Trappes"].map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center rounded-md bg-surface-soft px-2 py-1 text-[11px] font-medium text-text-muted"
                  >
                    {city}
                  </span>
                ))}
                <span className="inline-flex items-center rounded-md bg-surface-soft px-2 py-1 text-[11px] font-medium text-primary-600">
                  +15 villes
                </span>
              </div>
            </div>
            {/* Subtle decorative gradient */}
            <div className="absolute top-0 right-0 w-[40%] h-full opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500 bg-gradient-to-l from-primary-400 to-transparent" />
          </motion.div>

          {/* Card 2 — Photo (tall, span 2 rows) */}
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
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              quality={80}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-white text-sm font-semibold">Techniciens certifiés</p>
              <p className="text-white/60 text-xs mt-0.5">+200 interventions dans les Yvelines</p>
            </div>
          </motion.div>

          {/* Card 3 — Stat: <48h */}
          <motion.div
            {...card(0.16)}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="rounded-2xl border border-border bg-white p-7 flex flex-col justify-between"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-500">
              <Clock size={20} strokeWidth={1.8} />
            </div>
            <div className="mt-6">
              <p className="text-[2.5rem] font-semibold text-text tracking-tight leading-none">
                &lt;48<span className="text-lg font-medium text-text-muted ml-0.5">h</span>
              </p>
              <p className="text-sm text-text-secondary mt-1.5">
                Temps moyen d&apos;intervention. Appelez le matin, c&apos;est réglé demain.
              </p>
            </div>
          </motion.div>

          {/* Card 4 — Stat: 0€ */}
          <motion.div
            {...card(0.22)}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="rounded-2xl border border-border bg-white p-7 flex flex-col justify-between"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-500">
              <CreditCard size={20} strokeWidth={1.8} />
            </div>
            <div className="mt-6">
              <p className="text-[2.5rem] font-semibold text-text tracking-tight leading-none">
                0<span className="text-lg font-medium text-text-muted ml-0.5">€</span>
              </p>
              <p className="text-sm text-text-secondary mt-1.5">
                Pas d&apos;avance, pas de franchise. On gère votre dossier assurance de A à Z.
              </p>
            </div>
          </motion.div>

          {/* Card 5 — Agréé assurances (wide, span 2 cols) */}
          <motion.div
            {...card(0.28)}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="sm:col-span-2 rounded-2xl border border-border bg-white p-8 lg:p-10"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-500">
                <ShieldCheck size={20} strokeWidth={1.8} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-text tracking-tight">
                  Agréé toutes assurances
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  AXA, Macif, MAIF, Matmut, Groupama, MMA, Allianz, BPCE,
                  Generali — la prise en charge est directe avec toutes les compagnies.
                  Vous n&apos;avez qu&apos;à nous donner votre numéro de contrat.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 6 — Garantie */}
          <motion.div
            {...card(0.34)}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="rounded-2xl border border-primary-100 bg-primary-50/30 p-7"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
              <Award size={20} strokeWidth={1.8} />
            </div>
            <h3 className="text-lg font-semibold text-text tracking-tight mt-5">
              Garantie 2 ans
            </h3>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              Vitrages certifiés conformes aux normes européennes ECE R43.
              Qualité équivalente constructeur.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-14 flex flex-col sm:flex-row gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-primary-500/20 transition-all duration-200 hover:bg-primary-600 hover:shadow-md active:scale-[0.98]"
          >
            <Phone size={16} strokeWidth={2.2} />
            Appeler — {SITE.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
