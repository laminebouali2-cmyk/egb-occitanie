import Link from "next/link";

export function ShedliLogo({ variant = "default" }: { variant?: "default" | "dark" }) {
  const isDark = variant === "dark";

  return (
    <Link
      href="/"
      className={`inline-flex items-stretch h-[30px] lg:h-8 rounded-[6px] border-[2px] overflow-hidden ${
        isDark ? "border-white/25" : "border-[#1a1a1a]"
      }`}
      aria-label="Shedli Auto — Accueil"
    >
      <span className="flex items-center bg-[#2563EB] px-2 lg:px-2.5">
        <span className="text-[12px] lg:text-[13px] font-bold text-white tracking-tight leading-none">
          Shedli
        </span>
      </span>
      <span
        className={`flex items-center px-2 lg:px-2.5 gap-1.5 ${
          isDark ? "bg-white/[0.08]" : "bg-white"
        }`}
      >
        <span
          className={`text-[12px] lg:text-[13px] font-extrabold tracking-tight leading-none ${
            isDark ? "text-white" : "text-[#1a1a1a]"
          }`}
        >
          AUTO
        </span>
        <span className="flex h-[8px] rounded-[0.5px] overflow-hidden">
          <span className="w-[3px] bg-[#002395]" />
          <span className={`w-[3px] ${isDark ? "bg-white/80" : "bg-white border-y border-[#e5e5e5]"}`} />
          <span className="w-[3px] bg-[#ED2939]" />
        </span>
      </span>
    </Link>
  );
}
