import { Shield, Truck, Clock, BadgeCheck } from "lucide-react";

const badges = [
  {
    icon: Shield,
    label: "Prise en charge assurance",
    sub: "Sans avance de frais",
  },
  {
    icon: Truck,
    label: "Intervention à domicile",
    sub: "On vient à vous",
  },
  {
    icon: Clock,
    label: "Devis en 2 minutes",
    sub: "Gratuit, sans engagement",
  },
  {
    icon: BadgeCheck,
    label: "Garantie 2 ans",
    sub: "Pièce et main-d'œuvre",
  },
];

export function TrustBadges() {
  return (
    <section className="relative z-10 -mt-8 pb-8">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="group flex items-start gap-4 rounded-2xl bg-white p-5 lg:p-6 shadow-lg shadow-black/[0.03] border border-border/50 transition-shadow duration-300 hover:shadow-xl hover:shadow-black/[0.06]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-500 transition-colors group-hover:bg-primary-500 group-hover:text-white">
                <badge.icon size={22} strokeWidth={1.8} />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-text leading-tight">
                  {badge.label}
                </div>
                <div className="mt-0.5 text-xs text-text-muted">
                  {badge.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
