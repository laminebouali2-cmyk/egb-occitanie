import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Pare-Brise Prise en Charge Assurance | 0\u20AC d\u2019Avance",
  description:
    "Votre pare-brise pris en charge par votre assurance, sans avance de frais. On g\u00E8re tout le dossier bris de glace. Yvelines.",
  alternates: {
    canonical: "/prise-en-charge-assurance",
  },
};

export default function PriseEnChargeAssurancePage() {
  return (
    <>
      {/* ——— Breadcrumb + Hero ——— */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16 pt-8 pb-16 lg:pb-24">
        <nav aria-label="Fil d'Ariane" className="mb-10">
          <ol className="flex items-center gap-2 text-sm text-text-muted">
            <li>
              <Link
                href="/"
                className="hover:text-primary-500 transition-colors"
              >
                Accueil
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-text font-medium">
              Prise en charge assurance
            </li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text tracking-tight leading-tight">
            Prise en charge assurance — Zéro avance, on gère tout
          </h1>
          <p className="mt-6 text-lg text-text-secondary leading-relaxed">
            Pare-brise fissuré ou éclaté ? Votre assurance prend en charge le
            remplacement. {SITE.name} s&apos;occupe de l&apos;intégralité des
            démarches administratives : vous n&apos;avez rien à avancer.
          </p>
        </div>
      </section>

      {/* ——— Big reassurance banner ——— */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16 pb-20">
        <div className="rounded-2xl bg-success/10 p-8 sm:p-10 flex flex-col sm:flex-row items-start gap-5">
          {/* Shield icon */}
          <div className="shrink-0 w-14 h-14 rounded-xl bg-success/20 flex items-center justify-center">
            <svg
              className="w-7 h-7 text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
          </div>
          <div>
            <p className="text-lg font-semibold text-text leading-relaxed">
              Dans la majorité des cas, le remplacement de votre pare-brise est
              intégralement pris en charge par votre assurance via la garantie
              bris de glace.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              Vous n&apos;avez aucune démarche à faire. Nous contactons
              directement votre assureur, obtenons l&apos;accord de prise en
              charge et intervenons chez vous. Aucune avance de frais.
            </p>
          </div>
        </div>
      </section>

      {/* ——— Comment ça marche — 4 steps ——— */}
      <section className="bg-surface-soft py-20 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight text-center">
            Comment ça marche
          </h2>
          <p className="mt-4 text-text-secondary text-center max-w-2xl mx-auto">
            En 4&nbsp;étapes simples, votre pare-brise est remplacé sans que
            vous n&apos;ayez à avancer un euro.
          </p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Vous nous appelez",
                description:
                  "Munissez-vous de votre numéro de contrat d\u2019assurance et de votre carte grise. On fait le point ensemble en 5 minutes.",
              },
              {
                step: 2,
                title: "On contacte votre assureur",
                description:
                  "Nous prenons en charge l\u2019ouverture du dossier bris de glace et obtenons l\u2019accord de prise en charge directement.",
              },
              {
                step: 3,
                title: "On intervient chez vous",
                description:
                  "Un technicien se déplace à domicile, à votre bureau ou sur votre parking pour remplacer le pare-brise.",
              },
              {
                step: 4,
                title: "Vous ne payez rien",
                description:
                  "La facture est envoyée directement à votre assurance. Au maximum, vous réglez la franchise (souvent 50\u00A0\u20AC).",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl bg-white p-8 shadow-sm border border-border text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-primary-500 text-white flex items-center justify-center text-lg font-bold mb-5">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-text">{item.title}</h3>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-3 rounded-xl bg-primary-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary-500/25 transition-all duration-200 hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5"
            >
              <Phone size={20} />
              Appelez-nous : {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ——— SEO Content — Tout comprendre ——— */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight">
            Tout comprendre sur la prise en charge
          </h2>

          <div className="mt-12 space-y-10">
            {/* La garantie bris de glace */}
            <div>
              <h3 className="text-xl font-semibold text-text">
                La garantie bris de glace
              </h3>
              <p className="mt-3 text-text-secondary leading-relaxed">
                La garantie bris de glace fait partie de la plupart des contrats
                d&apos;assurance auto, y compris les formules intermédiaires
                (tiers étendu). Elle couvre le remplacement ou la réparation de
                tous les vitrages du véhicule : pare-brise, lunette arrière,
                vitres latérales, toit panoramique et rétroviseurs.
              </p>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Si votre contrat inclut cette garantie, le remplacement de votre
                pare-brise est pris en charge, quel que soit le prestataire
                choisi. Vous n&apos;êtes pas obligé de passer par le réseau
                imposé par votre assureur.
              </p>
            </div>

            {/* La franchise */}
            <div>
              <h3 className="text-xl font-semibold text-text">
                La franchise bris de glace
              </h3>
              <p className="mt-3 text-text-secondary leading-relaxed">
                La franchise est le montant qui reste à votre charge après
                intervention de l&apos;assurance. Pour un remplacement de
                pare-brise, elle varie généralement entre 0&nbsp;&euro; et
                100&nbsp;&euro; selon votre contrat. Certains assureurs la
                suppriment si vous faites appel à un réparateur agréé ; d&apos;autres
                la suppriment systématiquement pour les réparations d&apos;impact
                (sans remplacement).
              </p>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Nous vous indiquons le montant exact de votre franchise avant
                toute intervention, sans surprise.
              </p>
            </div>

            {/* Quelles assurances */}
            <div>
              <h3 className="text-xl font-semibold text-text">
                Quelles assurances sont acceptées ?
              </h3>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Nous travaillons avec toutes les compagnies d&apos;assurance du
                marché français : Macif, MAIF, Matmut, Groupama, AXA, Allianz,
                GMF, MAAF, MMA, Generali, Direct Assurance, L&apos;Olivier,
                et bien d&apos;autres. Que vous soyez assuré au tiers étendu
                ou tous risques, nous gérons votre dossier.
              </p>
            </div>

            {/* Documents nécessaires */}
            <div>
              <h3 className="text-xl font-semibold text-text">
                Documents nécessaires
              </h3>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Pour constituer votre dossier, munissez-vous de :
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Votre carte grise (certificat d\u2019immatriculation)",
                  "Votre numéro de contrat d\u2019assurance",
                  "Le nom de votre compagnie d\u2019assurance",
                  "Votre permis de conduire (parfois demandé)",
                ].map((doc) => (
                  <li key={doc} className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-primary-500 shrink-0 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-text-secondary">{doc}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Pas de panique si vous n&apos;avez pas tout sous la main : notre
                équipe vous guide par téléphone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— FAQ inline ——— */}
      <section className="bg-surface-soft py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text tracking-tight">
            Questions fréquentes
          </h2>

          <div className="mt-12 space-y-10">
            <div>
              <h3 className="text-lg font-semibold text-text">
                Est-ce que je dois déclarer le sinistre moi-même ?
              </h3>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Non, {SITE.name} s&apos;en occupe. Nous contactons directement
                votre assureur pour ouvrir le dossier bris de glace et obtenir
                l&apos;accord de prise en charge. Vous n&apos;avez qu&apos;un
                seul appel à passer : celui que vous nous faites.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-text">
                Est-ce que mon bonus/malus est impacté ?
              </h3>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Non. Un sinistre bris de glace n&apos;affecte pas votre
                coefficient bonus-malus. C&apos;est un sinistre dit « sans
                responsabilité » qui n&apos;entraîne aucune majoration de votre
                prime d&apos;assurance.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-text">
                Combien coûte le remplacement si je n&apos;ai pas la garantie
                bris de glace ?
              </h3>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Sans garantie bris de glace, le coût dépend du modèle de votre
                véhicule et du type de pare-brise (avec ou sans capteurs,
                caméra ADAS, chauffant, etc.). Comptez en moyenne entre
                250&nbsp;&euro; et 600&nbsp;&euro;. Nous vous communiquons un
                devis gratuit et précis avant toute intervention.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-text">
                Puis-je choisir librement mon réparateur ?
              </h3>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Oui, absolument. La loi française vous garantit le libre choix
                du réparateur. Même si votre assureur vous propose un réseau
                partenaire, vous êtes libre de faire appel à {SITE.name}. La
                prise en charge est identique.
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
