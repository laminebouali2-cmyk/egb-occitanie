import { SITE } from "@/lib/constants";
import { MapPin } from "lucide-react";

export function ServiceZone() {
  return (
    <section className="py-20 lg:py-32 bg-surface-soft">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Map */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d168000!2d1.85!3d48.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e688e3869a57e7%3A0x40b82c3688c5580!2sYvelines!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zone d'intervention Shedli Auto — Yvelines"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary-500 mb-4">
              Zone d&apos;intervention
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text tracking-tight leading-tight">
              On intervient partout
              <br />
              dans les Yvelines
            </h2>
            <p className="mt-5 text-lg text-text-secondary leading-relaxed">
              De Versailles à Mantes-la-Jolie, de Saint-Germain-en-Laye à
              Rambouillet. Partout dans le 78 et en Île-de-France.
            </p>

            {/* Cities grid */}
            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {SITE.zone.cities.map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-2 text-sm text-text-secondary"
                >
                  <MapPin
                    size={14}
                    className="text-primary-500 shrink-0"
                  />
                  {city}
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-text-muted">
              Votre commune n&apos;est pas listée ? Appelez-nous, on couvre
              probablement votre secteur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
