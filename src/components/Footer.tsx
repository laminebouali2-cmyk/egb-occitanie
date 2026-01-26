import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-white">
      <div className="container">
        {/* Main Footer */}
        <div className="py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            {/* Brand Column */}
            <div className="md:col-span-5">
              <Link href="/" className="inline-block mb-8">
                <span className="text-2xl font-medium tracking-tight">
                  <span className="text-white">EGB</span>
                  <span className="text-stone-500 ml-2">Occitanie</span>
                </span>
              </Link>
              <p className="text-stone-400 leading-relaxed max-w-sm mb-8">
                Construction de villas, rénovations haut de gamme et extensions sur-mesure.
                L&apos;excellence artisanale au service de vos projets d&apos;exception à Toulouse et en Occitanie.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-white group"
              >
                <span className="border-b border-stone-600 group-hover:border-white transition-colors">
                  Démarrer un projet
                </span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
            </div>

            {/* Navigation */}
            <div className="md:col-span-2">
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-500 mb-6">
                Navigation
              </h4>
              <nav className="flex flex-col gap-4">
                {[
                  { href: '/', label: 'Accueil' },
                  { href: '/expertise', label: 'Expertises' },
                  { href: '/projets', label: 'Réalisations' },
                  { href: '/contact', label: 'Contact' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-stone-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Expertises */}
            <div className="md:col-span-2">
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-500 mb-6">
                Expertises
              </h4>
              <nav className="flex flex-col gap-4">
                {[
                  { href: '/expertise#construction', label: 'Construction' },
                  { href: '/expertise#renovation', label: 'Rénovation' },
                  { href: '/expertise#extension', label: 'Extension' },
                  { href: '/expertise#sinistres', label: 'Sinistres' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-stone-400 hover:text-white transition-colors duration-300 block"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div className="md:col-span-3">
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-500 mb-6">
                Contact
              </h4>
              <address className="not-italic flex flex-col gap-4 text-stone-400">
                <p>Toulouse & Occitanie</p>
                <a
                  href="tel:+33665015882"
                  className="hover:text-white transition-colors duration-300 block"
                >
                  06 65 01 58 82
                </a>
                <a
                  href="mailto:contact@egb-occitanie.fr"
                  className="hover:text-white transition-colors duration-300 block"
                >
                  contact@egb-occitanie.fr
                </a>
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-stone-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-stone-500">
              © {currentYear} EGB Occitanie. Tous droits réservés.
            </p>
            <div className="flex gap-8">
              <Link
                href="/mentions-legales"
                className="text-sm text-stone-500 hover:text-white transition-colors duration-300"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="text-sm text-stone-500 hover:text-white transition-colors duration-300"
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
