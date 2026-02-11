"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { Truck, Zap, Shield, Award, Phone } from "lucide-react";

const advantages = [
  {
    icon: Truck,
    title: "Intervention mobile",
    description:
      "On se déplace chez vous, à votre bureau, sur votre parking. Vous ne bougez pas.",
  },
  {
    icon: Zap,
    title: "Rapidité",
    description:
      "Intervention sous 24 à 48h. Le remplacement prend environ 1 heure.",
  },
  {
    icon: Shield,
    title: "Prise en charge assurance",
    description:
      "On gère tout le dossier avec votre assureur. Zéro avance de frais.",
  },
  {
    icon: Award,
    title: "Garantie 2 ans",
    description:
      "Pare-brises certifiés aux normes européennes. Garantie pièce et pose.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function WhyUs() {
  return (
    <section className="py-20 lg:py-32 bg-surface-soft">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left — Image placeholder */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary-100 to-primary-50 border border-primary-200/50 overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-primary-500/10 flex items-center justify-center mb-4">
                    <Truck className="w-10 h-10 text-primary-500" />
                  </div>
                  <p className="text-primary-700/50 text-sm font-medium">
                    Photo du technicien
                  </p>
                  <p className="text-primary-700/30 text-xs mt-1">
                    À remplacer par photo réelle
                  </p>
                </div>
              </div>

              {/* Floating stat */}
              <div className="absolute -bottom-5 -right-5 rounded-2xl bg-white px-6 py-5 shadow-xl border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-success/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-text">100%</div>
                    <div className="text-xs text-text-muted">
                      Clients satisfaits
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary-500 mb-4">
              Pourquoi nous choisir
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-text tracking-tight leading-tight">
              Le spécialiste pare-brise
              <br />
              qui vient à vous
            </h2>
            <p className="mt-5 text-lg text-text-secondary leading-relaxed max-w-lg">
              Pas besoin de poser un jour de congé ni de faire la queue en
              centre. On intervient où vous êtes.
            </p>

            {/* Advantages list */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="mt-10 space-y-1"
            >
              {advantages.map((adv) => (
                <motion.div
                  key={adv.title}
                  variants={itemVariants}
                  className="flex items-start gap-5 py-5 border-b border-border/50 last:border-0"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-500">
                    <adv.icon size={22} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text">
                      {adv.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-3 rounded-xl bg-primary-500 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-600 hover:-translate-y-0.5 hover:shadow-md"
              >
                <Phone size={18} />
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
