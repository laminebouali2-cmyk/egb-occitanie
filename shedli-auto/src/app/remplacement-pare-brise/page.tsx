"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";
import { Phone, PhoneIncoming, CheckCircle2, Wrench, Droplets, Grid3X3, ChevronDown } from "lucide-react";
import { useState } from "react";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" as const },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

const services = [
  {
    icon: Wrench,
    title: "Remplacement complet",
    description: "Pare-brise fissuré ou éclaté : dépose et pose d'un vitrage neuf certifié, en moins d'1 heure.",
  },
  {
    icon: Droplets,
    title: "Réparation d'impact",
    description: "Impact inférieur à une pièce de 2 € ? Réparation par injection de résine sur place, sans remplacement.",
  },
  {
    icon: Grid3X3,
    title: "Vitrage latéral & arrière",
    description: "Vitre latérale, lunette arrière, toit panoramique — on remplace tous les vitrages, toutes marques.",
  },
];

const faqs = [
  {
    question: "Quand faut-il remplacer son pare-brise ?",
    answer: "Un impact dans le champ de vision, une fissure de plus de 2,5 cm ou un éclat à moins de 5 cm du bord imposent un remplacement. Au-delà du CT, un pare-brise endommagé fragilise la structure du véhicule en cas de choc.",
  },
  {
    question: "Quelles marques de pare-brise utilisez-vous ?",
    answer: "Exclusivement des vitrages certifiés normes européennes (E / 43R) : Saint-Gobain Sekurit, Pilkington, AGC, Fuyao. Sélectionnés pour votre modèle exact, capteurs et ADAS inclus.",
  },
  {
    question: "Combien de temps dure l'intervention ?",
    answer: "45 min à 1h30 selon le véhicule. Les modèles ADAS (freinage auto, maintien de voie) nécessitent un calibrage supplémentaire de 30 à 45 min. Réparation d'impact : 20 à 30 min.",
  },
  {
    question: "Peut-on rouler immédiatement après ?",
    answer: "Oui, après 1h de séchage (colle polymérisation rapide). Évitez les lavages haute pression pendant 24h et laissez une fenêtre entrouverte de quelques mm pour équilibrer la pression.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-sm font-semibold text-text pr-4">{question}</span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-text-muted transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-60 pb-5" : "max-h-0"}`}
      >
        <p className="text-sm text-text-secondary leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function RemplacementPareBrisePage() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="mx-auto w-full max-w-6xl px-5 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="mb-10">
            <ol className="flex items-center gap-2 text-sm text-text-muted">
              <li>
                <Link href="/" className="hover:text-primary-500 transition-colors">Accueil</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-text font-medium">Remplacement de pare-brise</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...fade(0)} className="max-w-lg">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-text tracking-tight leading-[1.1]">
                Remplacement de pare-brise
                <br />
                <span className="text-primary-500">à domicile.</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-text-secondary leading-relaxed">
                Intervention en 1h, tous véhicules, prise en charge assurance directe.
                Partout dans les Yvelines (78) et en Île-de-France.
              </p>

              <div className="mt-6 flex flex-col gap-2">
                {[
                  "Tous véhicules (citadine, SUV, utilitaire)",
                  "Pare-brises certifiés normes européennes",
                  "Garantie 2 ans pièce et pose",
                  "Prise en charge assurance — 0 € d'avance",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 size={15} className="text-primary-500 shrink-0" />
                    <span className="text-sm text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-primary-500/20 transition-all duration-200 hover:bg-primary-600 hover:shadow-md active:scale-[0.98]"
                >
                  <Phone size={16} strokeWidth={2.2} />
                  Appeler — {SITE.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-border bg-white px-6 py-3.5 text-sm font-semibold text-text transition-all duration-200 hover:bg-surface-soft active:scale-[0.98]"
                >
                  <PhoneIncoming size={16} strokeWidth={2.2} />
                  Être rappelé
                </Link>
              </div>
            </motion.div>

            <motion.div
              {...fade(0.2)}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/hero-mechanic.jpg"
                alt="Technicien Shedli Auto remplaçant un pare-brise"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={80}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ——— Nos interventions ——— */}
      <section className="py-20 lg:py-28 bg-surface-soft">
        <div className="mx-auto w-full max-w-5xl px-5 lg:px-8">
          <motion.div {...fade(0)} className="text-center mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary-700 mb-4">
              Nos interventions
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-text tracking-tight">
              Quel que soit le vitrage touché.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                {...fade(0.1 + i * 0.1)}
                className="rounded-xl border border-border bg-white p-6 group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-500 transition-colors group-hover:bg-primary-100 mb-5">
                  <service.icon size={18} strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-semibold text-text">{service.title}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— FAQ — accordion ——— */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto w-full max-w-3xl px-5 lg:px-8">
          <motion.div {...fade(0)} className="mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary-700 mb-4">
              Questions fréquentes
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-text tracking-tight">
              Tout savoir sur le remplacement.
            </h2>
          </motion.div>

          <motion.div {...fade(0.1)}>
            {faqs.map((faq) => (
              <FaqItem key={faq.question} {...faq} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ——— Bottom CTA ——— */}
      <section className="bg-[#09090b] py-20 lg:py-28">
        <div className="mx-auto w-full max-w-3xl px-5 lg:px-8 text-center">
          <motion.div {...fade(0)}>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
              Pare-brise fissuré ?
              <br />
              <span className="text-white/40">C&apos;est réglé demain.</span>
            </h2>
            <p className="mt-4 text-base text-white/40 leading-relaxed max-w-md mx-auto">
              Un seul appel. On se déplace, on remplace, on garantit.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2.5 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#09090b] transition-all duration-200 hover:bg-white/90 active:scale-[0.98]"
              >
                <Phone size={16} strokeWidth={2.2} />
                {SITE.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/[0.1] px-6 py-3.5 text-sm font-semibold text-white/70 transition-all duration-200 hover:text-white hover:border-white/20 active:scale-[0.98]"
              >
                <PhoneIncoming size={16} strokeWidth={2.2} />
                Être rappelé
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
