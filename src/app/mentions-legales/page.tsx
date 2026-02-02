import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du site EGB Occitanie.",
};

export default function MentionsLegalesPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-[var(--color-background)]">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="mb-12">Mentions légales</h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[var(--color-primary)] mb-4">
                Éditeur du site
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-4">
                EGB OCCITANIE – SAS au capital social variable
                <br />
                Entreprise générale de bâtiment
                <br />
                Siège social : 18 rue du Lauragais, 31450 Deyme
                <br />
                SIRET : 893 232 801 00025
                <br />
                TVA intracommunautaire : FR83893232801
                <br />
                RCS Toulouse
              </p>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Dirigeant : Sergiu Lungu
                <br />
                Directeur de la publication : Lamine Bouali
              </p>
              <p className="text-[var(--color-text-secondary)]">
                Email : contact@egb-occitanie.fr
                <br />
                Téléphone : 06 65 01 58 82
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[var(--color-primary)] mb-4">
                Hébergement
              </h2>
              <p className="text-[var(--color-text-secondary)]">
                Ce site est hébergé par Vercel Inc.
                <br />
                340 S Lemon Ave #4133
                <br />
                Walnut, CA 91789, USA
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[var(--color-primary)] mb-4">
                Propriété intellectuelle
              </h2>
              <p className="text-[var(--color-text-secondary)]">
                L&apos;ensemble du contenu de ce site (textes, images, vidéos,
                logos, etc.) est protégé par le droit d&apos;auteur. Toute
                reproduction, même partielle, est interdite sans autorisation
                préalable.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[var(--color-primary)] mb-4">
                Responsabilité
              </h2>
              <p className="text-[var(--color-text-secondary)]">
                Les informations contenues sur ce site sont données à titre
                indicatif. EGB Occitanie ne saurait être tenu responsable des
                erreurs ou omissions, ni des résultats qui pourraient être
                obtenus par un mauvais usage de ces informations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-[var(--color-primary)] mb-4">
                Crédits
              </h2>
              <p className="text-[var(--color-text-secondary)]">
                Conception et développement : EGB Occitanie
                <br />
                Photographies : À compléter
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
