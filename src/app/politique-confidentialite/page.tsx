import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles du site EGB Occitanie.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-[var(--color-background)]">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="mb-12">Politique de confidentialité</h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[var(--color-primary)] mb-4">
                Collecte des données
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-4">
                EGB Occitanie collecte les données personnelles que vous nous
                transmettez volontairement via notre formulaire de contact :
              </p>
              <ul className="list-disc list-inside text-[var(--color-text-secondary)] space-y-2">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone (optionnel)</li>
                <li>Contenu de votre message</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[var(--color-primary)] mb-4">
                Utilisation des données
              </h2>
              <p className="text-[var(--color-text-secondary)]">
                Vos données sont utilisées uniquement pour répondre à vos
                demandes et vous recontacter dans le cadre de votre projet. Nous
                ne vendons ni ne partageons vos données personnelles avec des
                tiers.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[var(--color-primary)] mb-4">
                Conservation des données
              </h2>
              <p className="text-[var(--color-text-secondary)]">
                Vos données personnelles sont conservées pendant une durée
                maximale de 3 ans à compter de notre dernier contact, sauf
                obligation légale de conservation plus longue.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[var(--color-primary)] mb-4">
                Vos droits
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-[var(--color-text-secondary)] space-y-2">
                <li>Droit d&apos;accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l&apos;effacement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d&apos;opposition au traitement</li>
              </ul>
              <p className="text-[var(--color-text-secondary)] mt-4">
                Pour exercer ces droits, contactez-nous à :
                contact@egb-occitanie.fr
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[var(--color-primary)] mb-4">
                Cookies
              </h2>
              <p className="text-[var(--color-text-secondary)]">
                Ce site utilise uniquement des cookies techniques nécessaires au
                bon fonctionnement du site. Aucun cookie publicitaire ou de
                tracking n&apos;est utilisé.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[var(--color-primary)] mb-4">
                Contact
              </h2>
              <p className="text-[var(--color-text-secondary)]">
                Pour toute question concernant cette politique de
                confidentialité, contactez-nous :
                <br />
                Email : contact@egb-occitanie.fr
                <br />
                Téléphone : 05 00 00 00 00
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
