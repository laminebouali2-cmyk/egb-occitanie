import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border-subtle)]">
      <div className="container">
        {/* Main Footer */}
        <div className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            {/* Brand Column */}
            <div className="md:col-span-4">
              <Link href="/" className="inline-block">
                <span className="text-xl font-medium tracking-tight">
                  <span className="text-[var(--color-primary)]">EGB</span>
                  <span className="text-[var(--color-muted)] ml-1">
                    Occitanie
                  </span>
                </span>
              </Link>
              <p className="mt-6 text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-xs">
                Entreprise générale de bâtiment. Construction, rénovation et
                extension en Occitanie.
              </p>
            </div>

            {/* Navigation */}
            <div className="md:col-span-2">
              <h4 className="text-overline mb-6">Navigation</h4>
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  Accueil
                </Link>
                <Link
                  href="/projets"
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  Projets
                </Link>
                <Link
                  href="/expertise"
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  Expertise
                </Link>
                <Link
                  href="/contact"
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Services */}
            <div className="md:col-span-3">
              <h4 className="text-overline mb-6">Expertise</h4>
              <nav className="flex flex-col gap-4">
                <Link
                  href="/expertise#construction"
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  Construction neuve
                </Link>
                <Link
                  href="/expertise#renovation"
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  Rénovation
                </Link>
                <Link
                  href="/expertise#extension"
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  Extension
                </Link>
              </nav>
            </div>

            {/* Contact */}
            <div className="md:col-span-3">
              <h4 className="text-overline mb-6">Contact</h4>
              <address className="not-italic flex flex-col gap-4 text-sm text-[var(--color-text-secondary)]">
                <p>Toulouse, Occitanie</p>
                <a
                  href="tel:+33500000000"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  05 00 00 00 00
                </a>
                <a
                  href="mailto:contact@egb-occitanie.fr"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  contact@egb-occitanie.fr
                </a>
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[var(--color-border-subtle)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[var(--color-text-muted)]">
              © {currentYear} EGB Occitanie. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link
                href="/mentions-legales"
                className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
              >
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
