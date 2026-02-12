import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Pare-Brise à Domicile Yvelines | Intervention Mobile",
  description:
    "Plus besoin de vous déplacer. Shedli Auto remplace votre pare-brise chez vous, sur votre parking ou à votre bureau. Yvelines et Île-de-France.",
  alternates: {
    canonical: "/intervention-mobile",
  },
};

export default function InterventionMobilePage() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-950" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16 py-24 lg:py-32">
          <nav aria-label="Fil d'Ariane" className="mb-10">
            <ol className="flex items-center gap-2 text-sm text-white/50">
              <li>
                <Link
                  href="/"
                  className="hover:text-white/80 transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/80 font-medium">
                Intervention mobile
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Intervention mobile — Votre pare-brise remplacé où vous voulez
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl">
              Plus besoin de vous déplacer ni de perdre une journée.{" "}
              {SITE.name} vient directement à vous avec tout le matériel
              professionnel nécessaire, partout dans les Yvelines et en
              Île-de-France.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-bold text-primary-700 shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
              >
                <Phone size={20} />
                {SITE.phone}
              </a>
              <Link
                href="/remplacement-pare-brise"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-[1.5px] border-white/20 px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-white/10 hover:border-white/30"
              >
                Nos prestations
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ——— 3 Locations ——— */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight text-center">
            On intervient où vous êtes
          </h2>
          <p className="mt-4 text-text-secondary text-center max-w-2xl mx-auto">
            Choisissez le lieu qui vous arrange, notre technicien s&apos;adapte
            à votre emploi du temps.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Chez vous */}
            <div className="rounded-2xl bg-surface-soft p-8 text-center border border-border">
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                <svg
                  className="w-7 h-7 text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text">Chez vous</h3>
              <p className="mt-3 text-text-secondary leading-relaxed">
                À votre domicile, dans votre allée ou votre garage. Vous
                restez au chaud pendant qu&apos;on travaille.
              </p>
            </div>

            {/* À votre bureau */}
            <div className="rounded-2xl bg-surface-soft p-8 text-center border border-border">
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                <svg
                  className="w-7 h-7 text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text">À votre bureau</h3>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Sur le parking de votre entreprise, pendant vos heures de
                travail. Votre pare-brise est prêt à la pause.
              </p>
            </div>

            {/* Sur votre parking */}
            <div className="rounded-2xl bg-surface-soft p-8 text-center border border-border">
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                <svg
                  className="w-7 h-7 text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h-.375a1.5 1.5 0 01-1.5-1.5v-3a1.5 1.5 0 011.5-1.5h17.25a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-.375m-17.25 0h17.25"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text">
                Sur votre parking
              </h3>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Centre commercial, gare, supermarché... Déposez votre véhicule
                et récupérez-le pare-brise neuf.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Comment se passe l'intervention ——— */}
      <section className="bg-surface-soft py-20 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight text-center">
            Comment se passe l&apos;intervention
          </h2>
          <p className="mt-4 text-text-secondary text-center max-w-2xl mx-auto">
            Un processus rodé, réalisé par un technicien certifié, directement
            sur votre lieu de choix.
          </p>

          <div className="mt-14 max-w-2xl mx-auto space-y-8">
            {[
              {
                step: 1,
                title: "Arrivée et diagnostic",
                description:
                  "Notre technicien arrive à l'heure convenue avec tout le matériel nécessaire dans son véhicule atelier. Il inspecte le vitrage et confirme l'intervention.",
              },
              {
                step: 2,
                title: "Protection du véhicule",
                description:
                  "Des bâches de protection sont installées sur la carrosserie, le tableau de bord et les sièges pour éviter toute rayure ou salissure.",
              },
              {
                step: 3,
                title: "Dépose de l'ancien vitrage",
                description:
                  "Le pare-brise endommagé est découpé et retiré avec précaution à l'aide d'un outil de découpe professionnel, sans abîmer la carrosserie.",
              },
              {
                step: 4,
                title: "Pose du nouveau pare-brise",
                description:
                  "Le nouveau vitrage certifié est posé avec une colle polyuréthane haute résistance. Les joints, capteurs et accessoires sont réinstallés.",
              },
              {
                step: 5,
                title: "Nettoyage complet",
                description:
                  "Le véhicule est nettoyé intégralement : résidus de colle, éclats de verre, traces sur la carrosserie. Vous le retrouvez comme neuf.",
              },
              {
                step: 6,
                title: "Contrôle final et consignes",
                description:
                  "Un contrôle d'étanchéité est effectué. Le technicien vous remet un certificat de pose et les consignes pour les 24 premières heures.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center text-sm font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Zone d'intervention ——— */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight text-center">
            Nos zones d&apos;intervention
          </h2>
          <p className="mt-4 text-text-secondary text-center max-w-2xl mx-auto">
            Nous intervenons dans tout le département des Yvelines (78) et les
            communes limitrophes d&apos;Île-de-France.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {SITE.zone.cities.map((city) => (
              <span
                key={city}
                className="inline-flex items-center rounded-full bg-surface-soft border border-border px-4 py-2 text-sm font-medium text-text-secondary"
              >
                {city}
              </span>
            ))}
          </div>

          <p className="mt-8 text-center text-text-muted text-sm">
            Votre ville n&apos;est pas dans la liste ?{" "}
            <a
              href={SITE.phoneHref}
              className="text-primary-500 font-medium hover:underline"
            >
              Appelez-nous
            </a>
            , nous intervenons probablement chez vous.
          </p>
        </div>
      </section>

      {/* ——— CTA Banner ——— */}
      <CtaBanner />
    </>
  );
}
