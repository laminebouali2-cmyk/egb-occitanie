"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Clock, ShieldAlert } from "lucide-react";

const dangers = [
  {
    icon: AlertTriangle,
    title: "Un impact se propage",
    description:
      "Un simple éclat peut devenir une fissure de 30 cm en quelques jours. Vibrations et températures accélèrent la propagation.",
  },
  {
    icon: ShieldAlert,
    title: "Contrôle technique refusé",
    description:
      "Un pare-brise fissuré dans le champ de vision entraîne un refus au contrôle technique.",
  },
  {
    icon: Clock,
    title: "Votre sécurité en jeu",
    description:
      "Le pare-brise assure 30 % de la rigidité du véhicule. Une fissure compromet votre protection en cas de choc.",
  },
];

export function PainPoint() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-16 lg:py-32 bg-surface-soft">
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
          {/* ——— Left — Copy ——— */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary-700 mb-3 lg:mb-4">
              Pourquoi agir vite
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.75rem] font-semibold text-text tracking-tight leading-[1.1]">
              Chaque fissure
              <br />
              est un risque.
            </h2>
            <p className="mt-4 text-sm lg:text-base text-text-secondary leading-relaxed">
              Ce qui ressemble à un simple impact peut vite devenir un problème
              coûteux et dangereux.
            </p>

            {/* Relief — clean, no colored badge */}
            <div className="mt-6 lg:mt-8 pt-6 border-t border-border">
              <p className="text-sm font-semibold text-text">
                Votre assurance couvre tout.
              </p>
              <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">
                Remplacement pris en charge à 100 %. On gère le dossier — 0&nbsp;€ d&apos;avance.
              </p>
            </div>
          </motion.div>

          {/* ——— Right — Danger cards ——— */}
          <div className="lg:col-span-7 space-y-3 lg:space-y-5">
            {dangers.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.25, 0.1, 0.25, 1] as const }}
                className="rounded-xl border border-border bg-white p-4 lg:p-6"
              >
                <div className="flex items-start gap-3 lg:gap-4">
                  <item.icon size={18} strokeWidth={1.5} className="text-text-muted shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-text">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[13px] lg:text-sm text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
