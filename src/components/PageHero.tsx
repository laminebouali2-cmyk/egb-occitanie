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
}

/**
 * PageHero — Light & Clean Hero Component
 *
 * Modern, light hero section for internal pages
 * with clean typography and optional CTAs
 */
export function PageHero({
  overline,
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Light Background */}
      <div className="absolute inset-0">
        {backgroundImage ? (
          <>
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${backgroundImage}')`,
              }}
            />
            {/* Light overlay instead of dark */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/75 to-white/85" />
          </>
        ) : (
          /* Clean gradient background */
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(135deg,
                  #8B9DAF 0%,
                  #9BAAB8 25%,
                  #ABB7C4 50%,
                  #BCC5CF 75%,
                  #CDD4DC 100%
                )
              `,
            }}
          />
        )}

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 60px,
                rgba(0,0,0,0.5) 60px,
                rgba(0,0,0,0.5) 61px
              )
            `,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-6">
        <div className="max-w-4xl mx-auto">

          {/* Overline */}
          {overline && (
            <motion.p
              className="text-sm md:text-base uppercase tracking-wider font-medium mb-6"
              style={{ color: '#4a5568' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {overline}
            </motion.p>
          )}

          {/* Title */}
          <motion.h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.25rem, 5vw, 4rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              fontWeight: 300,
              color: '#1a1a1a',
              marginBottom: '24px',
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

          {/* Description */}
          {description && (
            <motion.p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)',
                lineHeight: '1.6',
                letterSpacing: '0.005em',
                fontWeight: 400,
                color: '#2d3748',
                maxWidth: '800px',
                margin: '0 auto 40px auto',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {primaryCTA && (
                <Link
                  href={primaryCTA.href}
                  className="group inline-flex items-center justify-center gap-3 text-white bg-stone-900 hover:bg-stone-800 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    padding: '18px 40px',
                    fontSize: '16px',
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                    borderRadius: '4px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                  }}
                >
                  <span>{primaryCTA.text}</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              )}

              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="group inline-flex items-center justify-center gap-2.5 text-stone-900 border-2 border-stone-900/20 hover:border-stone-900/40 hover:bg-stone-900/5 transition-all duration-300 ease-out"
                  style={{
                    padding: '16px 32px',
                    fontSize: '16px',
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                    borderRadius: '4px',
                  }}
                >
                  <span>{secondaryCTA.text}</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
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
