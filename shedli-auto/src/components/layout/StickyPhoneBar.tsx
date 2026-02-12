"use client";

import Link from "next/link";
import { Phone, FileText } from "lucide-react";
import { SITE } from "@/lib/constants";

export function StickyPhoneBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.08)] lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      role="complementary"
      aria-label="Actions rapides"
    >
      <div className="grid h-16 grid-cols-2">
        {/* Call button */}
        <a
          href={SITE.phoneHref}
          className="flex items-center justify-center gap-2 bg-primary-500 text-sm font-semibold text-white transition-colors hover:bg-primary-600 active:bg-primary-700"
        >
          <Phone className="h-4 w-4" />
          Appeler
        </a>

        {/* Quote button */}
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 border-l border-border bg-white text-sm font-semibold text-primary-700 transition-colors hover:bg-surface-soft active:bg-surface-muted"
        >
          <FileText className="h-4 w-4" />
          Devis gratuit
        </Link>
      </div>
    </div>
  );
}
