import Link from "next/link";
import Image from "next/image";

export function ShedliLogo() {
  return (
    <Link href="/" aria-label="Shedli Auto — Accueil">
      <Image
        src="/images/logo-shedli-auto.svg"
        alt="Shedli Auto"
        width={280}
        height={100}
        className="h-[28px] lg:h-[32px] w-auto"
        priority
      />
    </Link>
  );
}
