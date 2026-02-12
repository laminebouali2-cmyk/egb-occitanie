"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Clock, ShieldAlert, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/constants";

const dangers = [
  {
    icon: AlertTriangle,
    title: "Un impact se propage",
    description:
      "Un simple éclat peut devenir une fissure de 30 cm en quelques jours. Les vibrations, les changements de température et les nids-de-poule accélèrent la propagation.",
  },
  {
    icon: ShieldAlert,
    title: "Contrôle technique refusé",
    description:
      "Un pare-brise fissuré dans le champ de vision du conducteur entraîne un refus au contrôle technique. Ne prenez pas le risque.",
  },
  {
    icon: Clock,
    title: "Votre sécurité, chaque jour",
    description:
      "Le pare-brise assure 30 % de la rigidité structurelle du véhicule. Une fissure compromet la protection en cas de choc ou de retournement.",
  },
];

export function PainPoint() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24 lg:py-32 bg-surface-soft">
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
          {/* ——— Left — Copy ——— */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary-700 mb-4">
              Pourquoi agir vite
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-text tracking-tight leading-[1.1]">
              Chaque fissure
              <br />
              est un risque.
            </h2>
            <p className="mt-5 text-base text-text-secondary leading-relaxed">
              Ce qui ressemble à un simple impact peut vite devenir un problème
              coûteux et dangereux. Plus vous attendez, plus le remplacement
              complet devient inévitable.
            </p>

            {/* Relief block */}
            <div className="mt-8 rounded-xl border border-success/20 bg-success/[0.04] p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck size={20} className="text-success shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-text">
                    La bonne nouvelle ?
                  </p>
                  <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                    Votre assurance couvre le remplacement à 100 %. On gère
                    le dossier pour vous — 0 € d&apos;avance, 0 paperasse.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ——— Right — Danger cards ——— */}
          <div className="lg:col-span-7 space-y-5">
            {dangers.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.1 }}
                className="group rounded-xl border border-border bg-white p-6 transition-shadow duration-200 hover:shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-500 transition-colors duration-200 group-hover:bg-primary-100">
                    <item.icon size={18} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">
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
