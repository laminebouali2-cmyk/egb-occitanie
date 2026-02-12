import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description:
    "Mentions légales du site shedliauto.com — Shedli Auto, remplacement de pare-brise dans les Yvelines.",
  alternates: {
    canonical: "/mentions-legales",
  },
};

export default function MentionsLegalesPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-text">
          Mentions légales
        </h1>

        {/* Éditeur du site */}
        <h2 className="mt-12 text-xl font-bold text-text">
          Éditeur du site
        </h2>
        <div className="mt-4 text-text-secondary leading-relaxed space-y-1">
          <p>
            <strong className="text-text">{SITE.legalName}</strong>
          </p>
          <p>{SITE.legalForm}</p>
          <p>RCS {SITE.rcs}</p>
          <p>SIREN : {SITE.siren}</p>
          <p>SIRET : {SITE.siret}</p>
          <p>TVA intracommunautaire : {SITE.tva}</p>
          <p>Code APE : {SITE.ape}</p>
          <p>Siège social : {SITE.address.full}</p>
          <p>
            Responsable de la publication : {SITE.manager} ({SITE.managerRole})
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

        {/* Hébergeur */}
        <h2 className="mt-12 text-xl font-bold text-text">Hébergeur</h2>
        <div className="mt-4 text-text-secondary leading-relaxed space-y-1">
          <p>
            <strong className="text-text">Vercel Inc.</strong>
          </p>
          <p>340 S Lemon Ave #4133</p>
          <p>Walnut, CA 91789, USA</p>
          <p>
            Site :{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:underline"
            >
              vercel.com
            </a>
          </p>
        </div>

        {/* Propriété intellectuelle */}
        <h2 className="mt-12 text-xl font-bold text-text">
          Propriété intellectuelle
        </h2>
        <p className="mt-4 text-text-secondary leading-relaxed">
          L&apos;ensemble du contenu de ce site (textes, images, logos,
          graphismes, icônes, sons, logiciels, etc.) est la propriété exclusive
          de {SITE.legalName} ou de ses partenaires et est protégé par les lois
          françaises et internationales relatives à la propriété intellectuelle.
          Toute reproduction, représentation, modification, publication ou
          adaptation de tout ou partie des éléments du site, quel que soit le
          moyen ou le procédé utilisé, est interdite sans autorisation écrite
          préalable de {SITE.legalName}.
        </p>

        {/* Responsabilité */}
        <h2 className="mt-12 text-xl font-bold text-text">Responsabilité</h2>
        <p className="mt-4 text-text-secondary leading-relaxed">
          {SITE.legalName} s&apos;efforce d&apos;assurer au mieux
          l&apos;exactitude et la mise à jour des informations diffusées sur ce
          site. Toutefois, {SITE.legalName} ne peut garantir l&apos;exactitude,
          la précision ou l&apos;exhaustivité des informations mises à
          disposition. En conséquence, {SITE.legalName} décline toute
          responsabilité pour toute imprécision, inexactitude ou omission portant
          sur des informations disponibles sur ce site.
        </p>

        {/* Données personnelles */}
        <h2 className="mt-12 text-xl font-bold text-text">
          Données personnelles
        </h2>
        <p className="mt-4 text-text-secondary leading-relaxed">
          Conformément au Règlement Général sur la Protection des Données (RGPD)
          et à la loi Informatique et Libertés, vous disposez d&apos;un droit
          d&apos;accès, de rectification, de suppression et d&apos;opposition au
          traitement de vos données personnelles. Pour exercer ces droits,
          contactez-nous par email à{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-primary-500 hover:underline"
          >
            {SITE.email}
          </a>
          . Pour en savoir plus, consultez notre{" "}
          <Link
            href="/politique-confidentialite"
            className="text-primary-500 hover:underline"
          >
            politique de confidentialité
          </Link>
          .
        </p>

        {/* Cookies */}
        <h2 className="mt-12 text-xl font-bold text-text">Cookies</h2>
        <p className="mt-4 text-text-secondary leading-relaxed">
          Ce site utilise des cookies à des fins de mesure d&apos;audience
          (Google Analytics). Ces cookies permettent d&apos;analyser la
          fréquentation et l&apos;utilisation du site afin d&apos;en améliorer
          le contenu et l&apos;ergonomie. Vous pouvez paramétrer votre
          navigateur pour refuser les cookies.
        </p>

        {/* Droit applicable */}
        <h2 className="mt-12 text-xl font-bold text-text">
          Droit applicable
        </h2>
        <p className="mt-4 text-text-secondary leading-relaxed">
          Les présentes mentions légales sont régies par le droit français. En
          cas de litige, les tribunaux français seront seuls compétents.
        </p>
      </div>
    </section>
  );
}
