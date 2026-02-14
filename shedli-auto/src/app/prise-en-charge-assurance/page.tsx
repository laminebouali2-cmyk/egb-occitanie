"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Phone, ShieldCheck, FileText, Clock, CreditCard, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" as const },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Vous nous appelez",
    description: "Munissez-vous de votre carte grise et numéro de contrat. On fait le point ensemble.",
  },
  {
    icon: FileText,
    number: "02",
    title: "On contacte votre assureur",
    description: "Ouverture du dossier bris de glace et accord de prise en charge — on gère tout.",
  },
  {
    icon: Clock,
    number: "03",
    title: "Intervention à domicile",
    description: "Notre technicien certifié se déplace chez vous avec tout le matériel nécessaire.",
  },
  {
    icon: CreditCard,
    number: "04",
    title: "Vous ne payez rien",
    description: "La facture va directement à votre assurance. Aucune avance de frais.",
  },
];

const faqs = [
  {
    question: "Est-ce que je dois déclarer le sinistre moi-même ?",
    answer: `Non, ${SITE.name} s'en occupe. Nous contactons directement votre assureur pour ouvrir le dossier bris de glace et obtenir l'accord de prise en charge.`,
  },
  {
    question: "Mon bonus/malus est-il impacté ?",
    answer: "Non. Un sinistre bris de glace n'affecte pas votre coefficient bonus-malus. C'est un sinistre sans responsabilité qui n'entraîne aucune majoration de votre prime.",
  },
  {
    question: "Combien ça coûte sans garantie bris de glace ?",
    answer: "Sans garantie, le coût dépend de votre véhicule (capteurs ADAS, pare-brise chauffant, etc.). Comptez entre 250 € et 600 €. On vous donne un devis précis et gratuit avant toute intervention.",
  },
  {
    question: "Puis-je choisir librement mon réparateur ?",
    answer: `Oui. La loi française garantit le libre choix du réparateur. Même si votre assureur propose un réseau partenaire, vous êtes libre de faire appel à ${SITE.name}. La prise en charge est identique.`,
  },
  {
    question: "Quels documents sont nécessaires ?",
    answer: "Carte grise (certificat d'immatriculation), numéro de contrat d'assurance, et nom de votre compagnie. Pas de panique si vous n'avez pas tout sous la main — on vous guide par téléphone.",
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

export default function PriseEnChargeAssurancePage() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="mx-auto w-full max-w-5xl px-5 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="mb-10">
            <ol className="flex items-center gap-2 text-sm text-text-muted">
              <li>
                <Link href="/" className="hover:text-primary-500 transition-colors">Accueil</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-text font-medium">Prise en charge assurance</li>
            </ol>
          </nav>

          <motion.div {...fade(0)} className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-text tracking-tight leading-[1.1]">
              Votre assurance prend tout en charge.
              <br />
              <span className="text-primary-500">Vous ne payez rien.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-text-secondary leading-relaxed max-w-lg">
              On gère votre dossier bris de glace de A à Z. Aucune démarche,
              aucune avance de frais, aucune paperasse.
            </p>
          </motion.div>

          {/* Reassurance banner */}
          <motion.div
            {...fade(0.15)}
            className="mt-10 rounded-xl border border-success/20 bg-success/[0.04] p-6 flex items-start gap-4 max-w-2xl"
          >
            <ShieldCheck size={22} className="text-success shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-text">
                Garantie bris de glace = 0 € à payer
              </p>
              <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                Dans la majorité des contrats auto (tiers étendu ou tous risques),
                le remplacement de votre pare-brise est intégralement couvert.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ——— 4 étapes — vertical timeline ——— */}
      <section className="py-20 lg:py-28 bg-surface-soft">
        <div className="mx-auto w-full max-w-4xl px-5 lg:px-8">
          <motion.div {...fade(0)} className="text-center mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary-700 mb-4">
              Comment ça marche
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-text tracking-tight">
              4 étapes, 0 paperasse.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                {...fade(0.1 + i * 0.1)}
                className="rounded-xl border border-border bg-white p-6 group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-500 transition-colors group-hover:bg-primary-100">
                    <step.icon size={18} strokeWidth={1.8} />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-text-muted uppercase tracking-wider">
                      Étape {step.number}
                    </span>
                  </div>
                </div>
                <h3 className="text-base font-semibold text-text">{step.title}</h3>
                <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fade(0.4)} className="mt-10 text-center">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2.5 rounded-xl bg-primary-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-primary-500/20 transition-all duration-200 hover:bg-primary-600 hover:shadow-md active:scale-[0.98]"
            >
              <Phone size={16} strokeWidth={2.2} />
              Appeler — {SITE.phone}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ——— Key info cards ——— */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto w-full max-w-4xl px-5 lg:px-8">
          <motion.div {...fade(0)} className="mb-12">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary-700 mb-4">
              Tout comprendre
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-text tracking-tight">
              Ce qu&apos;il faut savoir.
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                title: "La garantie bris de glace",
                text: "Elle fait partie de la plupart des contrats auto (tiers étendu). Elle couvre tous les vitrages : pare-brise, lunette arrière, vitres latérales, toit panoramique. Vous êtes libre de choisir votre réparateur.",
              },
              {
                title: "La franchise",
                text: "Montant restant à votre charge : entre 0 € et 100 € selon votre contrat. Certains assureurs la suppriment chez un réparateur agréé. On vous indique le montant exact avant toute intervention.",
              },
              {
                title: "Assurances acceptées",
                text: "Toutes les compagnies : AXA, Macif, MAIF, Matmut, Groupama, MMA, Allianz, GMF, MAAF, Generali, Direct Assurance, L'Olivier — et toutes les autres.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fade(0.1 + i * 0.1)}
                className="flex items-start gap-4"
              >
                <CheckCircle2 size={18} className="text-primary-500 shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-semibold text-text">{item.title}</h3>
                  <p className="mt-1 text-sm text-text-secondary leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— FAQ — accordion ——— */}
      <section className="py-20 lg:py-28 bg-surface-soft">
        <div className="mx-auto w-full max-w-3xl px-5 lg:px-8">
          <motion.div {...fade(0)} className="mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary-700 mb-4">
              Questions fréquentes
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-text tracking-tight">
              On répond à tout.
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
              <span className="text-white/40">On s&apos;occupe de tout.</span>
            </h2>
            <p className="mt-4 text-base text-white/40 leading-relaxed max-w-md mx-auto">
              Un seul appel suffit. Intervention, assurance, garantie.
            </p>
            <div className="mt-8">
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2.5 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#09090b] transition-all duration-200 hover:bg-white/90 active:scale-[0.98]"
              >
                <Phone size={16} strokeWidth={2.2} />
                {SITE.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
