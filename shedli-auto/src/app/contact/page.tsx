import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Phone, Clock, Mail, MapPin, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Shedli Auto | Remplacement Pare-Brise Yvelines",
  description:
    "Contactez Shedli Auto pour un remplacement ou une réparation de pare-brise dans les Yvelines. Devis gratuit, intervention rapide à domicile. Appelez le 06 28 43 88 44.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-text sm:text-5xl">
            Contactez-nous
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Un appel suffit. On s&apos;occupe de tout.
          </p>
        </div>

        {/* Grid: Form + Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left — Form placeholder */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white border border-border p-8 shadow-sm">
              <p className="text-lg font-semibold text-text">
                Formulaire de contact à venir
              </p>
              <p className="mt-3 text-sm text-text-secondary">
                En attendant, appelez-nous directement au{" "}
                <a
                  href={SITE.phoneHref}
                  className="font-bold text-primary-500 hover:underline"
                >
                  {SITE.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Right — Contact info */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white border border-border p-8 shadow-sm">
              {/* Phone */}
              <div className="border-b border-border/50 py-5 first:pt-0">
                <div className="flex items-start gap-4">
                  <Phone size={20} className="mt-1 text-primary-500 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-text-secondary">
                      Téléphone
                    </p>
                    <a
                      href={SITE.phoneHref}
                      className="text-xl font-bold text-text hover:text-primary-500 transition"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="border-b border-border/50 py-5">
                <div className="flex items-start gap-4">
                  <Clock size={20} className="mt-1 text-primary-500 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-text-secondary">
                      Horaires
                    </p>
                    <p className="text-sm text-text mt-1">
                      {SITE.hours.weekdays}
                    </p>
                    <p className="text-sm text-text">{SITE.hours.saturday}</p>
                    <p className="text-sm text-text">{SITE.hours.sunday}</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="border-b border-border/50 py-5">
                <div className="flex items-start gap-4">
                  <MessageCircle
                    size={20}
                    className="mt-1 text-primary-500 shrink-0"
                  />
                  <div>
                    <p className="text-sm font-medium text-text-secondary">
                      WhatsApp
                    </p>
                    <a
                      href={SITE.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-primary-500 hover:underline"
                    >
                      Envoyer un message
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="border-b border-border/50 py-5">
                <div className="flex items-start gap-4">
                  <Mail size={20} className="mt-1 text-primary-500 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-text-secondary">
                      Email
                    </p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-sm font-semibold text-primary-500 hover:underline"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="py-5">
                <div className="flex items-start gap-4">
                  <MapPin
                    size={20}
                    className="mt-1 text-primary-500 shrink-0"
                  />
                  <div>
                    <p className="text-sm font-medium text-text-secondary">
                      Adresse
                    </p>
                    <p className="text-sm text-text mt-1">
                      {SITE.address.full}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16">
          <iframe
            title="Shedli Auto — Plaisir, Yvelines"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41912.36!2d1.9280!3d48.8220!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6882d1e5f1b3b%3A0x40b82c3688c5540!2s78370%20Plaisir!5e0!3m2!1sfr!2sfr!4v1700000000000"
            className="w-full rounded-2xl border border-border aspect-[21/9]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
