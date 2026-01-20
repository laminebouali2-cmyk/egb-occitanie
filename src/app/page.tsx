import CinematicHero from "@/components/CinematicHero";
import { Introduction } from "@/components/Introduction";
import { Expertises } from "@/components/Expertises";
import { Realisations } from "@/components/Realisations";
import { Approche } from "@/components/Approche";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <CinematicHero />
      <Introduction />
      <Expertises />
      <Realisations />
      <Approche />
      <ContactSection />
    </>
  );
}
