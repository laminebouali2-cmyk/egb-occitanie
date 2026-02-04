'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface PageHeroProps {
  overline?: string;
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

/**
 * PageHero — Studio-Grade Conversion Component
 *
 * Design Philosophy:
 * ✅ Image valorisée, pas d'overlay destructeur
 * ✅ Hiérarchie claire : overline → title → description → CTA
 * ✅ Stats optionnelles pour crédibilité immédiate
 * ✅ Responsive mobile-first (60vh sur mobile, 75vh desktop)
 * ✅ Sécurité : pas de dangerouslySetInnerHTML
 *
 * Conversion Strategy:
 * - Overline = contexte/catégorie
 * - Title = promesse principale
 * - Description = bénéfices concrets
 * - Primary CTA = action engagement
 * - Secondary CTA = action découverte (optionnel et discret)
 * - Stats = preuves quantifiables (optionnel)
 */
export function PageHero({
  overline,
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  stats,
}: PageHeroProps) {
  return (
    <section className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: '60vh', // Mobile-first
      }}
      // eslint-disable-next-line react/no-unknown-property
      css={{
        '@media (min-width: 768px)': {
          minHeight: '75vh',
        }
      }}
    >
      {/* Background Image — Valorisée avec overlay minimal */}
      <div className="absolute inset-0">
        {backgroundImage ? (
          <>
            {/* Image réelle de chantier */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${backgroundImage}')`,
              }}
            />
            {/* Overlay MINIMAL — Ajuster selon luminosité de l'image */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(to bottom,
                    rgba(0, 0, 0, 0.12) 0%,
                    rgba(0, 0, 0, 0.25) 60%,
                    rgba(0, 0, 0, 0.35) 100%
                  )
                `
              }}
            />
          </>
        ) : (
          /* Fallback : gradient neutre pro (pas de pattern inutile) */
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(135deg,
                  #292524 0%,
                  #1c1917 50%,
                  #292524 100%
                )
              `,
            }}
          />
        )}
      </div>

      {/* Content — Hiérarchie conversion-optimized */}
      <div className="relative z-10 container text-center px-6 py-20">
        <div className="max-w-4xl mx-auto">

          {/* Overline — Contexte/Catégorie */}
          {overline && (
            <motion.p
              className="text-xs md:text-sm uppercase tracking-widest font-semibold mb-5"
              style={{
                color: backgroundImage ? '#ffffff' : '#a8a29e',
                textShadow: backgroundImage ? '0 1px 8px rgba(0,0,0,0.4)' : 'none',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {overline}
            </motion.p>
          )}

          {/* Title — Promesse principale */}
          <motion.h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.25rem, 5.5vw, 4.75rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.025em',
              fontWeight: 300,
              color: backgroundImage ? '#ffffff' : '#fafaf9',
              marginBottom: '24px',
              textShadow: backgroundImage
                ? '0 3px 18px rgba(0,0,0,0.6), 0 6px 36px rgba(0,0,0,0.3)'
                : 'none',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
            {subtitle && (
              <>
                <br />
                <span style={{ fontWeight: 500 }}>{subtitle}</span>
              </>
            )}
          </motion.h1>

          {/* Description — Bénéfices concrets (texte pur, pas HTML) */}
          {description && (
            <motion.p
              style={{
                fontSize: 'clamp(1.1rem, 1.9vw, 1.4rem)',
                lineHeight: '1.65',
                letterSpacing: '0.005em',
                fontWeight: 500,
                color: backgroundImage ? '#f5f5f5' : '#d6d3d1',
                maxWidth: '850px',
                margin: '0 auto 40px auto',
                textShadow: backgroundImage ? '0 2px 12px rgba(0,0,0,0.5)' : 'none',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {description}
            </motion.p>
          )}

          {/* Stats — Preuves quantifiables (optionnel) */}
          {stats && stats.length > 0 && (
            <motion.div
              className="flex flex-wrap items-center justify-center gap-8 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p
                    style={{
                      fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                      fontWeight: 700,
                      color: backgroundImage ? '#ffffff' : '#fafaf9',
                      lineHeight: 1,
                      marginBottom: '6px',
                      textShadow: backgroundImage ? '0 2px 12px rgba(0,0,0,0.5)' : 'none',
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontSize: '13px',
                      fontWeight: 500,
                      letterSpacing: '0.02em',
                      color: backgroundImage ? '#e5e5e5' : '#a8a29e',
                      textShadow: backgroundImage ? '0 1px 6px rgba(0,0,0,0.4)' : 'none',
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          )}

          {/* CTAs — Primary fort + Secondary discret */}
          {(primaryCTA || secondaryCTA) && (
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {/* Primary CTA — Blanc sur fond sombre ou foncé sur fond clair */}
              {primaryCTA && (
                <Link
                  href={primaryCTA.href}
                  className="group inline-flex items-center justify-center gap-3 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl"
                  style={{
                    padding: '20px 44px',
                    fontSize: '16px',
                    fontWeight: 700,
                    letterSpacing: '0.01em',
                    borderRadius: '6px',
                    ...(backgroundImage
                      ? {
                          color: '#1c1917',
                          background: '#ffffff',
                          boxShadow: '0 6px 36px rgba(0,0,0,0.35), 0 2px 12px rgba(0,0,0,0.2)',
                        }
                      : {
                          color: '#ffffff',
                          background: '#1c1917',
                          boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                        }
                    ),
                  }}
                >
                  <span>{primaryCTA.text}</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              )}

              {/* Secondary CTA — Très discret, texte souligné */}
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="group inline-flex items-center gap-2 transition-all duration-200"
                  style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    color: backgroundImage ? 'rgba(255,255,255,0.9)' : '#d6d3d1',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px',
                    textDecorationThickness: '1px',
                  }}
                >
                  <span>{secondaryCTA.text}</span>
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
