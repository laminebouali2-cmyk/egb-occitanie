import Link from "next/link";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { SITE } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Remplacement pare-brise", href: "/remplacement-pare-brise" },
  { label: "Intervention mobile", href: "/intervention-mobile" },
  { label: "Prise en charge assurance", href: "/prise-en-charge-assurance" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-[#09090b] text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-lg font-semibold text-white">
              Shedli Auto
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/40">
              Spécialiste du remplacement de pare-brise à domicile dans les
              Yvelines (78) et en Île-de-France.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Shedli Auto"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] text-white/40 transition-colors hover:bg-white/[0.08] hover:text-white/70"
              >
                <Instagram className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/25">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 transition-colors hover:text-white/70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/25">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
                >
                  <Phone className="h-3.5 w-3.5 text-white/30" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white/70"
                >
                  <Mail className="h-3.5 w-3.5 text-white/30" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <span className="inline-flex items-start gap-2 text-sm text-white/40">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/30" />
                  {SITE.address.full}
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/25">
              Horaires
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="text-sm text-white/40">{SITE.hours.weekdays}</li>
              <li className="text-sm text-white/40">{SITE.hours.saturday}</li>
              <li className="text-sm text-white/40">{SITE.hours.sunday}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} {SITE.name} &mdash; SASU &mdash; SIRET&nbsp;: {SITE.siret}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/mentions-legales"
              className="text-xs text-white/25 transition-colors hover:text-white/50"
            >
              Mentions l&eacute;gales
            </Link>
            <Link
              href="/politique-de-confidentialite"
              className="text-xs text-white/25 transition-colors hover:text-white/50"
            >
              Politique de confidentialit&eacute;
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
