import { SITE } from "@/lib/constants";
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-950" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16 py-20 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
            Un impact ? Une fissure ?
          </h2>
          <p className="mt-5 text-lg text-white/70 leading-relaxed">
            Appelez maintenant. On s&apos;occupe de tout : intervention,
            assurance, garantie. Vous ne faites rien.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-bold text-primary-700 shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
            >
              <Phone size={20} />
              {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border-[1.5px] border-white/20 px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-white/10 hover:border-white/30"
            >
              Demander un devis
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
