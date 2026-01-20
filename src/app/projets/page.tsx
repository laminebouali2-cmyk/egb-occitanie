import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nos Projets | Réalisations Construction & Rénovation",
  description:
    "Découvrez nos réalisations en construction neuve, rénovation et extension en Occitanie. Projets résidentiels et tertiaires livrés avec excellence.",
};

const projects = [
  {
    id: 1,
    title: "Villa contemporaine",
    location: "Toulouse",
    category: "Construction neuve",
    year: "2024",
    surface: "280 m²",
    description:
      "Maison contemporaine avec piscine et aménagements paysagers sur un terrain de 1500 m².",
  },
  {
    id: 2,
    title: "Réhabilitation corps de ferme",
    location: "Albi",
    category: "Rénovation",
    year: "2024",
    surface: "450 m²",
    description:
      "Transformation complète d'un corps de ferme du XIXe siècle en résidence principale avec dépendances.",
  },
  {
    id: 3,
    title: "Extension maison de maître",
    location: "Montauban",
    category: "Extension",
    year: "2023",
    surface: "120 m²",
    description:
      "Extension moderne en harmonie avec l'architecture existante, création d'un espace de vie lumineux.",
  },
  {
    id: 4,
    title: "Bâtiment tertiaire",
    location: "Toulouse",
    category: "Construction neuve",
    year: "2023",
    surface: "1200 m²",
    description:
      "Siège social d'entreprise certifié HQE, espaces de travail modulables et parking souterrain.",
  },
  {
    id: 5,
    title: "Maison passive",
    location: "Castres",
    category: "Construction neuve",
    year: "2023",
    surface: "180 m²",
    description:
      "Construction passive à très haute performance énergétique, matériaux biosourcés.",
  },
  {
    id: 6,
    title: "Appartement haussmannien",
    location: "Toulouse centre",
    category: "Rénovation",
    year: "2022",
    surface: "200 m²",
    description:
      "Rénovation complète d'un appartement de standing, préservation des éléments patrimoniaux.",
  },
];

const categories = ["Tous", "Construction neuve", "Rénovation", "Extension"];

export default function ProjetsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[var(--color-background)]">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-overline mb-4 animate-fade-in-up">
              Nos réalisations
            </p>
            <h1 className="mb-6 animate-fade-in-up delay-100">
              Des projets qui témoignent
              <br />
              de notre savoir-faire
            </h1>
            <p className="text-lead animate-fade-in-up delay-200">
              Chaque projet est unique. Découvrez une sélection de nos
              réalisations en construction, rénovation et extension.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-12 md:pb-16 bg-[var(--color-background)]">
        <div className="container">
          <div className="flex flex-wrap gap-4">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? "bg-[var(--color-primary)] text-white"
                    : "bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-elevated)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 md:pb-32 bg-[var(--color-background)]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Placeholder */}
                <div className="aspect-[4/3] img-container mb-6">
                  <div
                    className="w-full h-full"
                    style={{
                      background: `linear-gradient(135deg, #e5e5e5 0%, #d4d4d4 50%, #e5e5e5 100%)`,
                    }}
                  />
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest">
                    {project.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[var(--color-border)]" />
                  <span className="text-xs text-[var(--color-text-muted)]">
                    {project.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-medium text-[var(--color-primary)] mb-2 group-hover:text-[var(--color-secondary)] transition-colors">
                  {project.title}
                </h3>

                {/* Location & Surface */}
                <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                  {project.location} — {project.surface}
                </p>

                {/* Description */}
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-6">Vous avez un projet ?</h2>
            <p className="text-lead mb-10">
              Chaque projet mérite une attention particulière. Échangeons sur
              vos besoins et vos ambitions.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
