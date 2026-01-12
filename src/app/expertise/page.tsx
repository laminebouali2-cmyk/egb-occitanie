import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notre Expertise | Construction, Rénovation, Extension",
  description:
    "Découvrez notre expertise en construction neuve, rénovation et extension en Occitanie. Savoir-faire technique, qualité d'exécution et respect des délais.",
};

const expertises = [
  {
    id: "construction",
    number: "01",
    title: "Construction neuve",
    subtitle: "De la conception à la livraison",
    description:
      "Nous réalisons des constructions neuves de qualité, de la maison individuelle aux bâtiments tertiaires. Chaque projet est pensé pour durer, optimisé pour le confort et la performance énergétique.",
    features: [
      "Maisons individuelles sur mesure",
      "Bâtiments tertiaires et commerciaux",
      "Respect des normes RE2020",
      "Garantie décennale",
    ],
  },
  {
    id: "renovation",
    number: "02",
    title: "Rénovation",
    subtitle: "Valoriser l'existant",
    description:
      "La rénovation demande expertise et sensibilité. Nous redonnons vie aux bâtiments anciens tout en préservant leur caractère, avec des solutions techniques adaptées aux contraintes de l'existant.",
    features: [
      "Restructuration complète",
      "Rénovation énergétique",
      "Mise aux normes",
      "Préservation du patrimoine",
    ],
  },
  {
    id: "extension",
    number: "03",
    title: "Extension",
    subtitle: "Agrandir harmonieusement",
    description:
      "Agrandir son habitat sans déménager, c'est possible. Nous concevons des extensions qui s'intègrent parfaitement à l'existant, qu'elles soient contemporaines ou traditionnelles.",
    features: [
      "Extensions horizontales et verticales",
      "Surélévations",
      "Aménagement de combles",
      "Vérandas et espaces de vie",
    ],
  },
];

const engagements = [
  {
    title: "Qualité",
    description:
      "Des matériaux sélectionnés et des finitions soignées pour des réalisations durables.",
  },
  {
    title: "Délais",
    description:
      "Un planning rigoureux et une coordination efficace pour respecter les engagements.",
  },
  {
    title: "Transparence",
    description:
      "Une communication claire à chaque étape, des devis détaillés sans surprise.",
  },
  {
    title: "Garanties",
    description:
      "Assurances décennale et responsabilité civile pour une sérénité totale.",
  },
];

export default function ExpertisePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[var(--color-background)]">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-overline mb-4 animate-fade-in-up">
              Notre expertise
            </p>
            <h1 className="mb-6 animate-fade-in-up delay-100">
              Le savoir-faire au service
              <br />
              de vos ambitions
            </h1>
            <p className="text-lead animate-fade-in-up delay-200">
              Construction, rénovation, extension : trois domaines
              d&apos;intervention, une même exigence de qualité et de
              professionnalisme.
            </p>
          </div>
        </div>
      </section>

      {/* Expertises */}
      <section className="pb-24 md:pb-32">
        {expertises.map((expertise, index) => (
          <div
            key={expertise.id}
            id={expertise.id}
            className={`section scroll-mt-24 ${
              index % 2 === 0
                ? "bg-[var(--color-background)]"
                : "bg-[var(--color-surface)]"
            }`}
          >
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="text-6xl md:text-8xl font-light text-[var(--color-border)] block mb-6">
                    {expertise.number}
                  </span>
                  <p className="text-overline mb-2">{expertise.subtitle}</p>
                  <h2 className="mb-6">{expertise.title}</h2>
                  <p className="text-lead mb-8">{expertise.description}</p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {expertise.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-[var(--color-text-secondary)]"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div
                  className={`aspect-[4/3] img-container ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div
                    className="w-full h-full"
                    style={{
                      background: `linear-gradient(${
                        135 + index * 30
                      }deg, #e5e5e5 0%, #d4d4d4 50%, #e5e5e5 100%)`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Engagements */}
      <section className="section bg-[var(--color-primary)]">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <p className="text-overline !text-white/50 mb-4">Nos engagements</p>
            <h2 className="!text-white mb-6">
              Des valeurs qui guident
              <br />
              chaque projet
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {engagements.map((engagement, index) => (
              <div
                key={index}
                className="border-t border-white/20 pt-8"
              >
                <h3 className="text-xl font-medium text-white mb-3">
                  {engagement.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {engagement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[var(--color-background)]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-6">Parlons de votre projet</h2>
            <p className="text-lead mb-10">
              Chaque projet est unique. Contactez-nous pour échanger sur vos
              besoins et obtenir une étude personnalisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary">
                Nous contacter
              </Link>
              <Link href="/projets" className="btn btn-outline">
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
