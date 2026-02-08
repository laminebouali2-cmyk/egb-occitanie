'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/expertise', label: 'Expertises' },
  { href: '/projets', label: 'Réalisations' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOnHero, setIsOnHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 50);
      setIsOnHero(scrollPos < window.innerHeight * 0.7); // On hero si dans les 70% du viewport
    };
    handleScroll(); // Init
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[100]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Background - always visible except on hero */}
        <motion.div
          className="absolute inset-0 bg-white/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOnHero ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-stone-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOnHero ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        />

        <div className="container relative">
          <nav className="flex items-center justify-between h-20 md:h-24" role="navigation" aria-label="Navigation principale">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/"
                className="relative z-10 group"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="EGB Occitanie - Retour à l'accueil"
              >
                <span
                  className={`text-xl font-medium tracking-tight transition-colors duration-300 ${
                    isOnHero && !isMobileMenuOpen ? 'text-white' : 'text-stone-900'
                  }`}
                >
                  EGB
                </span>
                <span
                  className={`text-xl ml-1.5 transition-colors duration-300 ${
                    isOnHero && !isMobileMenuOpen ? 'text-white/60' : 'text-stone-400'
                  }`}
                >
                  Occitanie
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden md:flex items-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 group ${
                    isOnHero ? 'text-white/80 hover:text-white' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                    isOnHero ? 'bg-white' : 'bg-stone-900'
                  }`} />
                </Link>
              ))}

              <a
                href="tel:+33665015882"
                className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                  isOnHero ? 'text-white/90 hover:text-white' : 'text-stone-700 hover:text-stone-900'
                }`}
                aria-label="Appeler EGB Occitanie au 06 65 01 58 82"
              >
                06 65 01 58 82
              </a>

              <Link
                href="/contact"
                className="px-6 py-3 text-sm font-medium transition-all duration-300"
                style={{
                  backgroundColor: isOnHero ? '#FFFFFF' : 'var(--color-stone-900)',
                  color: isOnHero ? 'var(--color-stone-900)' : '#FFFFFF',
                }}
              >
                Démarrer un projet
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="relative z-10 md:hidden p-2 -mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  className={`block h-0.5 origin-left transition-colors duration-300 ${
                    isOnHero && !isMobileMenuOpen ? 'bg-white' : 'bg-stone-900'
                  }`}
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? -1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.span
                  className={`block h-0.5 transition-colors duration-300 ${
                    isOnHero && !isMobileMenuOpen ? 'bg-white' : 'bg-stone-900'
                  }`}
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className={`block h-0.5 origin-left transition-colors duration-300 ${
                    isOnHero && !isMobileMenuOpen ? 'bg-white' : 'bg-stone-900'
                  }`}
                  style={{ width: isMobileMenuOpen ? '100%' : '60%' }}
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? 1 : 0,
                    width: isMobileMenuOpen ? '100%' : '60%',
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-[99] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="container h-full flex flex-col justify-center">
              <nav className="flex flex-col gap-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center gap-4"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-sm text-stone-400 group-hover:text-stone-600 transition-colors">
                        0{index + 1}
                      </span>
                      <span
                        className="text-4xl font-light text-stone-900 group-hover:text-stone-600 transition-colors"
                        style={{ fontFamily: 'var(--font-serif)' }}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="mt-8"
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-stone-900 text-white px-8 py-4 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Démarrer un projet
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </motion.div>
              </nav>

              {/* Contact info */}
              <motion.div
                className="absolute bottom-12 left-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <p className="text-sm text-stone-400 mb-3">Contact</p>
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:+33665015882"
                    className="text-sm text-stone-600 hover:text-stone-900 transition-colors font-medium"
                  >
                    06 65 01 58 82
                  </a>
                  <a
                    href="mailto:contact@egb-occitanie.fr"
                    className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    contact@egb-occitanie.fr
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
