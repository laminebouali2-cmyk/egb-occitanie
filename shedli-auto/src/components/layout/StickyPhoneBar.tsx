"use client";

import { Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

export function StickyPhoneBar() {
  return (
    <a
      href={SITE.phoneHref}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#09090b] text-white shadow-lg shadow-black/20 lg:hidden transition-transform duration-200 active:scale-95"
      aria-label="Appeler Shedli Auto"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <Phone size={20} strokeWidth={2} />
    </a>
  );
}
