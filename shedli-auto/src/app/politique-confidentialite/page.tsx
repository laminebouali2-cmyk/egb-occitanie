import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description:
    "Politique de confidentialité du site shedliauto.com — Informations sur la collecte et le traitement de vos données personnelles.",
  alternates: {
    canonical: "/politique-confidentialite",
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-text">
          Politique de confidentialité
        </h1>
        <p className="mt-4 text-text-secondary leading-relaxed">
          La présente politique de confidentialité décrit comment{" "}
          {SITE.legalName} collecte, utilise et protège vos données personnelles
          conformément au Règlement Général sur la Protection des Données (RGPD)
          et à la loi Informatique et Libertés.
        </p>

        {/* Responsable du traitement */}
        <h2 className="mt-12 text-xl font-bold text-text">
          Responsable du traitement
        </h2>
        <div className="mt-4 text-text-secondary leading-relaxed space-y-1">
          <p>
            <strong className="text-text">{SITE.legalName}</strong>
          </p>
          <p>{SITE.legalForm}</p>
          <p>Siège social : {SITE.address.full}</p>
          <p>SIRET : {SITE.siret}</p>
          <p>
            Responsable : {SITE.manager} ({SITE.managerRole})
          </p>
          <p>
            Email :{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-primary-500 hover:underline"
            >
              {SITE.email}
            </a>
          </p>
          <p>
            Téléphone :{" "}
            <a
              href={SITE.phoneHref}
              className="text-primary-500 hover:underline"
            >
              {SITE.phone}
            </a>
          </p>
        </div>

        {/* Données collectées */}
        <h2 className="mt-12 text-xl font-bold text-text">
          Données collectées
        </h2>
        <p className="mt-4 text-text-secondary leading-relaxed">
          Dans le cadre de nos services, nous sommes amenés à collecter les
          données personnelles suivantes via notre formulaire de contact :
        </p>
        <ul className="mt-3 list-disc list-inside text-text-secondary leading-relaxed space-y-1">
          <li>Nom et prénom</li>
          <li>Numéro de téléphone</li>
          <li>Adresse email</li>
          <li>
            Informations relatives au véhicule (marque, modèle, immatriculation)
          </li>
        </ul>

        {/* Finalité du traitement */}
        <h2 className="mt-12 text-xl font-bold text-text">
          Finalité du traitement
        </h2>
        <p className="mt-4 text-text-secondary leading-relaxed">
          Vos données personnelles sont collectées et traitées pour les finalités
          suivantes :
        </p>
        <ul className="mt-3 list-disc list-inside text-text-secondary leading-relaxed space-y-1">
          <li>Rappel client suite à une demande de contact</li>
          <li>Établissement de devis</li>
          <li>Gestion des rendez-vous et interventions</li>
          <li>Suivi de la relation client</li>
        </ul>

        {/* Base légale */}
        <h2 className="mt-12 text-xl font-bold text-text">Base légale</h2>
        <p className="mt-4 text-text-secondary leading-relaxed">
          Le traitement de vos données repose sur les bases légales suivantes :
        </p>
        <ul className="mt-3 list-disc list-inside text-text-secondary leading-relaxed space-y-1">
          <li>
            <strong className="text-text">Intérêt légitime :</strong> traitement
            nécessaire à la gestion de notre activité commerciale (réponse aux
            demandes, gestion des rendez-vous)
          </li>
          <li>
            <strong className="text-text">Consentement :</strong> lorsque vous
            remplissez notre formulaire de contact, vous consentez au traitement
            de vos données pour les finalités décrites ci-dessus
          </li>
        </ul>

        {/* Durée de conservation */}
        <h2 className="mt-12 text-xl font-bold text-text">
          Durée de conservation
        </h2>
        <p className="mt-4 text-text-secondary leading-relaxed">
          Vos données personnelles sont conservées pour une durée maximale de{" "}
          <strong className="text-text">3 ans</strong> à compter du dernier
          contact. Au-delà de cette période, vos données sont supprimées ou
          anonymisées.
        </p>

        {/* Droits des personnes */}
        <h2 className="mt-12 text-xl font-bold text-text">Vos droits</h2>
        <p className="mt-4 text-text-secondary leading-relaxed">
          Conformément au RGPD, vous disposez des droits suivants sur vos
          données personnelles :
        </p>
        <ul className="mt-3 list-disc list-inside text-text-secondary leading-relaxed space-y-1">
          <li>
            <strong className="text-text">Droit d&apos;accès :</strong> obtenir
            la confirmation que vos données sont traitées et en recevoir une
            copie
          </li>
          <li>
            <strong className="text-text">Droit de rectification :</strong>{" "}
            corriger des données inexactes ou incomplètes
          </li>
          <li>
            <strong className="text-text">Droit de suppression :</strong>{" "}
            demander l&apos;effacement de vos données
          </li>
          <li>
            <strong className="text-text">Droit d&apos;opposition :</strong>{" "}
            vous opposer au traitement de vos données
          </li>
          <li>
            <strong className="text-text">Droit à la portabilité :</strong>{" "}
            recevoir vos données dans un format structuré
          </li>
          <li>
            <strong className="text-text">
              Droit à la limitation du traitement :
            </strong>{" "}
            demander la suspension du traitement dans certains cas
          </li>
        </ul>
        <p className="mt-4 text-text-secondary leading-relaxed">
          Pour exercer ces droits, envoyez un email à{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-primary-500 hover:underline"
          >
            {SITE.email}
          </a>
          . Nous nous engageons à répondre dans un délai de 30 jours. Vous
          pouvez également introduire une réclamation auprès de la CNIL (
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 hover:underline"
          >
            www.cnil.fr
          </a>
          ).
        </p>

        {/* Cookies */}
        <h2 className="mt-12 text-xl font-bold text-text">Cookies</h2>
        <p className="mt-4 text-text-secondary leading-relaxed">
          Ce site utilise uniquement des cookies de mesure d&apos;audience via{" "}
          <strong className="text-text">Google Analytics</strong>. Ces cookies
          permettent de collecter des informations anonymes sur la fréquentation
          du site (nombre de visites, pages consultées, durée des sessions) afin
          d&apos;en améliorer le contenu et l&apos;ergonomie.
        </p>
        <p className="mt-3 text-text-secondary leading-relaxed">
          Vous pouvez à tout moment paramétrer votre navigateur pour refuser les
          cookies ou être averti lors de leur dépôt. La désactivation des
          cookies n&apos;affecte pas le fonctionnement du site.
        </p>

        {/* Sécurité */}
        <h2 className="mt-12 text-xl font-bold text-text">
          Sécurité des données
        </h2>
        <p className="mt-4 text-text-secondary leading-relaxed">
          Nous mettons en place des mesures techniques et organisationnelles
          appropriées pour protéger vos données personnelles contre la
          destruction, la perte, l&apos;altération, la divulgation ou
          l&apos;accès non autorisé. Le site est hébergé sur des serveurs
          sécurisés et l&apos;ensemble des échanges sont chiffrés via HTTPS.
        </p>

        {/* Modifications */}
        <h2 className="mt-12 text-xl font-bold text-text">
          Modifications de la politique
        </h2>
        <p className="mt-4 text-text-secondary leading-relaxed">
          Nous nous réservons le droit de modifier la présente politique de
          confidentialité à tout moment. Toute modification sera publiée sur
          cette page. Nous vous invitons à la consulter régulièrement.
        </p>
      </div>
    </section>
  );
}
