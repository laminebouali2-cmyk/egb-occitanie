'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * TrustBar — Studio-Grade Social Proof Component
 *
 * Design Philosophy:
 * ✅ Preuves quantifiables et vérifiables (pas de déclarations vagues)
 * ✅ Logos partenaires réels (pas d'icônes SVG génériques)
 * ✅ Chiffres qui différencient (pas d'obligations légales basiques)
 * ✅ Layout adaptatif : stats + logos partenaires
 *
 * Conversion Strategy:
 * - Section 1 : Chiffres clés différenciants (track record)
 * - Section 2 : Logos partenaires (crédibilité B2B)
 * - Placement idéal : APRÈS section valeur, PAS immédiatement après hero
 *
 * TODO après validation des chiffres réels:
 * - Remplacer "47 projets" par nombre réel
 * - Confirmer "0 retard depuis 2018" ou ajuster période
 * - Ajouter vrais logos partenaires dans /public/partners/
 */

// Chiffres clés différenciants
const keyStats = [
  {
    number: '47',
    label: 'Projets livrés',
    sublabel: 'depuis 2018',
  },
  {
    number: '100%',
    label: 'Respect des délais',
    sublabel: '0 retard de chantier',
  },
  {
    number: '2,1M€',
    label: 'Budget moyen',
    sublabel: 'par projet',
  },
  {
    number: '10M€',
    label: 'RC Professionnelle',
    sublabel: 'garantie décennale',
  },
];

// Logos partenaires — À remplacer par vraies images
// Structure attendue : /public/partners/nom-partenaire.png (PNG transparent, 400×200px)
const partners: Array<{ name: string; logo?: string; placeholder: string }> = [
  {
    name: 'Architecte Partenaire 1',
    logo: undefined, // À ajouter: '/partners/architecte-1.png'
    placeholder: 'AP1',
  },
  {
    name: 'Architecte Partenaire 2',
    logo: undefined, // À ajouter: '/partners/architecte-2.png'
    placeholder: 'AP2',
  },
  {
    name: 'Bureau d\'études',
    logo: undefined, // À ajouter: '/partners/bureau-etudes.png'
    placeholder: 'BE',
  },
  {
    name: 'Assureur Décennale',
    logo: undefined, // À ajouter: '/partners/assureur.png'
    placeholder: 'Assurance',
  },
  {
    name: 'Bureau de contrôle',
    logo: undefined, // À ajouter: '/partners/bureau-controle.png'
    placeholder: 'BC',
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-stone-200 bg-gradient-to-br from-stone-50 to-stone-100/50">
      <div className="container py-12 md:py-16">

        {/* Section 1 : Chiffres clés différenciants */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          {keyStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Nombre principal */}
              <p
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 800,
                  lineHeight: 1,
                  color: '#1c1917',
                  marginBottom: '8px',
                }}
              >
                {stat.number}
              </p>

              {/* Label principal */}
              <p
                style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  letterSpacing: '0.01em',
                  color: '#44403c',
                  marginBottom: '4px',
                }}
              >
                {stat.label}
              </p>

              {/* Sublabel contexte */}
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  color: '#78716c',
                  letterSpacing: '0.02em',
                }}
              >
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Séparateur visuel subtil */}
        <div className="h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent mb-12 md:mb-14" />

        {/* Section 2 : Partenaires de confiance */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Titre section partenaires */}
          <p
            className="text-center mb-8"
            style={{
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#78716c',
            }}
          >
            Nos partenaires de confiance
          </p>

          {/* Grid logos partenaires */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 0.7, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {partner.logo ? (
                  /* Logo réel (quand ajouté) */
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={140}
                    height={70}
                    className="object-contain"
                  />
                ) : (
                  /* Placeholder en attendant vrais logos */
                  <div
                    className="flex items-center justify-center border-2 border-stone-300 rounded-md"
                    style={{
                      width: '140px',
                      height: '70px',
                      background: '#ffffff',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        color: '#a8a29e',
                        letterSpacing: '0.02em',
                        textAlign: 'center',
                        padding: '0 8px',
                      }}
                    >
                      {partner.placeholder}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA discret vers page partenaires (optionnel) */}
          <div className="text-center mt-10">
            <a
              href="/expertise"
              className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors duration-200"
              style={{
                fontSize: '13px',
                fontWeight: 500,
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              <span>Découvrir notre réseau d'experts</span>
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
