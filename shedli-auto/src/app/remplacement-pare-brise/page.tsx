import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Remplacement de Pare-Brise Yvelines (78) | Prix, Délai, Assurance",
  description:
    "Changement de pare-brise en 1h à domicile dans les Yvelines. Tous véhicules, prise en charge assurance directe, garantie 2 ans. Devis gratuit.",
  alternates: {
    canonical: "/remplacement-pare-brise",
  },
};

export default function RemplacementPareBrisePage() {
  return (
    <>
      {/* ——— Breadcrumb ——— */}
      <nav
        aria-label="Fil d'Ariane"
        className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16 pt-8"
      >
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li>
            <Link href="/" className="hover:text-primary-500 transition-colors">
              Accueil
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-text font-medium">Remplacement de pare-brise</li>
        </ol>
      </nav>

      {/* ——— Hero grid ——— */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — Copy */}
          <div className="lg:col-span-7">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text tracking-tight leading-tight">
              Remplacement de pare-brise à domicile dans les Yvelines
            </h1>

            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-xl">
              Intervention en 1&nbsp;heure, tous véhicules, prise en charge
              assurance directe. {SITE.name} se déplace chez vous partout dans
              le département 78 et en Île-de-France.
            </p>

            {/* Check list */}
            <ul className="mt-8 space-y-3">
              {[
                "Tous véhicules (citadine, SUV, utilitaire)",
                "Pare-brises certifiés normes européennes",
                "Garantie 2 ans pièce et pose",
                "Prise en charge assurance sans avance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-success shrink-0 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-10">
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-3 rounded-xl bg-primary-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary-500/25 transition-all duration-200 hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5"
              >
                <Phone size={20} />
                {SITE.phone}
              </a>
            </div>
          </div>

          {/* Right — Quick form placeholder */}
          <div className="lg:col-span-5">
            <div className="bg-white shadow-xl rounded-2xl p-8">
              <h2 className="text-xl font-bold text-text mb-2">
                Devis gratuit en 2 minutes
              </h2>
              <p className="text-text-secondary text-sm mb-6">
                Remplissez le formulaire, on vous rappelle dans l&apos;heure.
              </p>
              <div className="flex items-center justify-center h-48 rounded-xl bg-surface-soft border border-border border-dashed">
                <p className="text-text-muted text-sm">Formulaire à venir</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Nos interventions ——— */}
      <section className="bg-surface-soft py-20 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight text-center">
            Nos interventions
          </h2>
          <p className="mt-4 text-text-secondary text-center max-w-2xl mx-auto">
            Quel que soit le type de vitrage touché, nous intervenons
            directement chez vous avec le matériel professionnel adapté.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Remplacement complet",
                description:
                  "Pare-brise fissuré ou éclaté : on dépose l'ancien vitrage et on pose un pare-brise neuf certifié, en moins d'une heure.",
              },
              {
                title: "Réparation d'impact",
                description:
                  "Un impact inférieur à une pièce de 2 € ? On le répare sur place avec injection de résine, sans remplacement nécessaire.",
              },
              {
                title: "Vitrage latéral",
                description:
                  "Vitre latérale ou lunette arrière endommagée : nous remplaçons tous les vitrages de votre véhicule, toutes marques.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl bg-white p-8 shadow-sm border border-border"
              >
                {/* Icon placeholder */}
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-primary-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-text">{card.title}</h3>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— SEO Content ——— */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight">
            Tout savoir sur le remplacement de pare-brise
          </h2>

          <div className="mt-12 space-y-10">
            {/* Subsection 1 */}
            <div>
              <h3 className="text-xl font-semibold text-text">
                Quand faut-il remplacer son pare-brise ?
              </h3>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Un impact situé dans le champ de vision du conducteur, une
                fissure de plus de 2,5&nbsp;cm ou un éclat à moins de 5&nbsp;cm
                du bord du vitrage imposent un remplacement. Au-delà du
                contrôle technique, un pare-brise endommagé fragilise la
                structure du véhicule en cas de choc et réduit l&apos;efficacité
                de l&apos;airbag passager.
              </p>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Si l&apos;impact est petit et situé hors du champ de vision, une
                simple réparation par injection de résine peut suffire. Notre
                technicien évalue sur place la meilleure solution pour votre
                sécurité.
              </p>
            </div>

            {/* Subsection 2 */}
            <div>
              <h3 className="text-xl font-semibold text-text">
                Quelles marques de pare-brise utilisons-nous ?
              </h3>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Nous travaillons exclusivement avec des vitrages certifiés aux
                normes européennes (marquage E ou 43R). Nos fournisseurs
                incluent les grands équipementiers comme Saint-Gobain Sekurit,
                Pilkington, AGC et Fuyao. Chaque pare-brise est sélectionné en
                fonction de votre modèle de véhicule pour garantir un ajustement
                parfait, y compris les capteurs de pluie, caméras ADAS et
                antennes intégrées.
              </p>
            </div>

            {/* Subsection 3 */}
            <div>
              <h3 className="text-xl font-semibold text-text">
                Combien de temps dure l&apos;intervention ?
              </h3>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Le remplacement complet d&apos;un pare-brise prend entre 45
                minutes et 1&nbsp;heure et demie selon le véhicule. Les modèles
                équipés de systèmes ADAS (freinage automatique, aide au
                maintien de voie) nécessitent un calibrage supplémentaire qui
                peut ajouter 30 à 45 minutes. La réparation d&apos;un impact
                simple ne prend que 20 à 30 minutes.
              </p>
            </div>

            {/* Subsection 4 */}
            <div>
              <h3 className="text-xl font-semibold text-text">
                Peut-on rouler immédiatement après le remplacement ?
              </h3>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Nous utilisons des colles à polymérisation rapide qui permettent
                de reprendre la route après un temps de séchage d&apos;environ
                1&nbsp;heure. Pendant les 24 premières heures, il est
                recommandé d&apos;éviter les lavages haute pression, de ne pas
                claquer les portières et de laisser une fenêtre entrouverte de
                quelques millimètres pour équilibrer la pression.
              </p>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Notre technicien vous remet une fiche de consignes
                post-intervention pour que tout se passe parfaitement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— CTA Banner ——— */}
      <CtaBanner />
    </>
  );
}
