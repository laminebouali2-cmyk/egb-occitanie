import Link from "next/link";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { SITE } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/remplacement-pare-brise" },
  { label: "Assurance", href: "/prise-en-charge-assurance" },
  { label: "Avis clients", href: "/avis" },
  { label: "Contact", href: "/contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20">
        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-xl font-bold text-white">
              Shedli Auto
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Spécialiste du remplacement de pare-brise à domicile dans les
              Yvelines.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Shedli Auto"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Instagram className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-primary-300"
                >
                  <Phone className="h-4 w-4 text-white/40" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-white/40" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <span className="inline-flex items-start gap-2 text-sm text-white/60">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                  {SITE.address.full}
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4 — Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Horaires
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="text-sm text-white/60">{SITE.hours.weekdays}</li>
              <li className="text-sm text-white/60">{SITE.hours.saturday}</li>
              <li className="text-sm text-white/60">{SITE.hours.sunday}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {SITE.name} &mdash;{" "}
            {SITE.legalForm} &mdash; SIRET&nbsp;: {SITE.siret}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/mentions-legales"
              className="text-xs text-white/40 transition-colors hover:text-white/70"
            >
              Mentions l&eacute;gales
            </Link>
            <Link
              href="/politique-de-confidentialite"
              className="text-xs text-white/40 transition-colors hover:text-white/70"
            >
              Politique de confidentialit&eacute;
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
