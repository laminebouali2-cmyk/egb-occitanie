"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/remplacement-pare-brise" },
  { label: "Assurance", href: "/prise-en-charge-assurance" },
  { label: "Avis", href: "/avis" },
  { label: "Contact", href: "/contact" },
] as const;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 16);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
            : "bg-white/0"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:h-[72px] lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-text transition-colors duration-300"
          >
            Shedli Auto
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Navigation principale"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-text-secondary transition-colors duration-200 hover:text-text"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop phone CTA */}
          <a
            href={SITE.phoneHref}
            className="hidden items-center gap-2 rounded-lg bg-primary-500 px-4 py-2 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-primary-600 lg:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" />
            {SITE.phone}
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden"
            aria-label={isMobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMobileOpen}
          >
            <div className="relative h-5 w-5">
              <span
                className={`absolute left-0 block h-[1.5px] w-5 rounded-full transition-all duration-300 ${
                  isMobileOpen
                    ? "top-[9px] rotate-45 bg-white"
                    : "top-0.5 bg-text"
                }`}
              />
              <span
                className={`absolute left-0 top-[9px] block h-[1.5px] w-5 rounded-full transition-all duration-300 ${
                  isMobileOpen
                    ? "opacity-0 scale-x-0 bg-white"
                    : "opacity-100 scale-x-100 bg-text"
                }`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] w-5 rounded-full transition-all duration-300 ${
                  isMobileOpen
                    ? "top-[9px] -rotate-45 bg-white"
                    : "top-[17px] bg-text"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-[#09090b] lg:hidden"
          >
            <nav
              className="flex flex-1 flex-col items-center justify-center gap-2"
              aria-label="Menu mobile"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="block py-3 text-center text-xl font-semibold text-white transition-colors hover:text-white/80"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              className="px-6 pb-10"
            >
              <a
                href={SITE.phoneHref}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-primary-500 px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-600"
              >
                <Phone className="h-4 w-4" />
                Appeler — {SITE.phone}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
