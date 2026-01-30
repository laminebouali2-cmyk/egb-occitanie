"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface RenovateurHeaderProps {
  onOpenDemo: () => void;
}

export function RenovateurHeader({ onOpenDemo }: RenovateurHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: "Fonctionnalites" },
    { href: "#how-it-works", label: "Comment ca marche" },
    { href: "#pricing", label: "Tarifs" },
  ];

  return (
    <motion.header
      className={`rnv-header ${isScrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="rnv-header-container">
        {/* Logo */}
        <Link href="/renovateur-ia" className="rnv-logo">
          <div className="rnv-logo-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 20.0391 3 19.5304 3 19V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="rnv-logo-text">Renovateur</span>
          <span className="rnv-logo-badge">IA</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="rnv-nav" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="rnv-nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="rnv-header-actions">
          <Link href="/" className="rnv-btn-text">
            Retour au site
          </Link>
          <button onClick={onOpenDemo} className="rnv-btn-primary">
            Essayer gratuitement
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="rnv-mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu mobile"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="rnv-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rnv-mobile-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button onClick={onOpenDemo} className="rnv-btn-primary mobile-cta">
                Essayer gratuitement
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
