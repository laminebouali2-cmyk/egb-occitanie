"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { durations, easings, springs } from "@/lib/animations";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/projets", label: "Projets" },
    { href: "/expertise", label: "Expertise" },
    { href: "/contact", label: "Contact" },
  ];

  const menuItemVariants = {
    closed: { opacity: 0, y: 30, rotateX: -15 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: durations.normal,
        delay: 0.1 + i * 0.1,
        ease: easings.easeOut,
      },
    }),
    exit: (i: number) => ({
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        delay: i * 0.05,
        ease: easings.easeOut,
      },
    }),
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[100]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: durations.slow, ease: easings.easeOut }}
      >
        {/* Background avec blur */}
        <motion.div
          className="absolute inset-0 bg-white/95 backdrop-blur-md border-b border-[var(--color-border-subtle)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="container relative">
          <nav className="flex items-center justify-between h-20 md:h-24">
            {/* Logo avec animation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: durations.normal, delay: 0.2, ease: easings.easeOut }}
            >
              <Link
                href="/"
                className="relative z-10 text-xl font-medium tracking-tight group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <motion.span
                  className="inline-block text-[var(--color-primary)]"
                  whileHover={{ scale: 1.02 }}
                  transition={springs.smooth}
                >
                  EGB
                </motion.span>
                <span className="text-[var(--color-muted)] ml-1">Occitanie</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden md:flex items-center gap-12"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: durations.normal, delay: 0.3, ease: easings.easeOut }}
            >
              {navLinks.map((link, index) => (
                <NavLink key={link.href} href={link.href} delay={0.4 + index * 0.1}>
                  {link.label}
                </NavLink>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: durations.normal, delay: 0.7, ease: easings.easeOut }}
              >
                <MagneticButton
                  as="a"
                  href="/contact"
                  className="btn btn-primary text-sm py-3 px-6"
                  strength={0.1}
                >
                  Démarrer un projet
                </MagneticButton>
              </motion.div>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="relative z-10 md:hidden p-2 -mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  className="block h-0.5 bg-[var(--color-primary)] origin-left"
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? -1 : 0,
                    width: isMobileMenuOpen ? "100%" : "100%",
                  }}
                  transition={springs.smooth}
                />
                <motion.span
                  className="block h-0.5 bg-[var(--color-primary)]"
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    x: isMobileMenuOpen ? 10 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block h-0.5 bg-[var(--color-primary)] origin-left"
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? 1 : 0,
                    width: isMobileMenuOpen ? "100%" : "60%",
                  }}
                  transition={springs.smooth}
                />
              </div>
            </motion.button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu avec animation premium */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-[99] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: easings.easeOut }}
          >
            {/* Background pattern */}
            <motion.div
              className="absolute inset-0 opacity-[0.02]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.02 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern
                    id="mobileMenuGrid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#mobileMenuGrid)" />
              </svg>
            </motion.div>

            <div className="container h-full flex flex-col justify-center relative">
              {/* Line accent */}
              <motion.div
                className="absolute top-32 left-6 w-12 h-px bg-[var(--color-border)]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: durations.slow, delay: 0.3, ease: easings.reveal }}
                style={{ transformOrigin: "left" }}
              />

              <nav className="flex flex-col gap-6" style={{ perspective: 1000 }}>
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    custom={index}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    exit="exit"
                  >
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-4 text-4xl font-light text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-sm font-normal text-[var(--color-muted)] opacity-0 group-hover:opacity-100 transition-opacity">
                        0{index + 1}
                      </span>
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  custom={navLinks.length}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  exit="exit"
                  className="mt-8"
                >
                  <Link
                    href="/contact"
                    className="btn btn-primary text-base py-4 px-8 inline-flex"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Démarrer un projet
                  </Link>
                </motion.div>
              </nav>

              {/* Contact info au bas */}
              <motion.div
                className="absolute bottom-12 left-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: durations.normal, delay: 0.6, ease: easings.easeOut }}
              >
                <p className="text-sm text-[var(--color-muted)] mb-2">Contact</p>
                <a
                  href="mailto:contact@egb-occitanie.fr"
                  className="text-sm text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  contact@egb-occitanie.fr
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Composant NavLink avec effet hover premium
function NavLink({
  href,
  children,
  delay,
}: {
  href: string;
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: durations.normal, delay, ease: easings.easeOut }}
    >
      <Link
        href={href}
        className="relative text-sm font-medium text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors duration-300 tracking-wide group"
      >
        {children}
        <motion.span
          className="absolute -bottom-1 left-0 w-full h-px bg-[var(--color-primary)] origin-left"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3, ease: easings.easeOut }}
        />
      </Link>
    </motion.div>
  );
}
