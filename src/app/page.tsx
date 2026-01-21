import { Hero } from "@/components/Hero";
// import CinematicHero from "@/components/CinematicHero"; // À réactiver quand les 192 frames seront ajoutées
import { Introduction } from "@/components/Introduction";
import { Expertises } from "@/components/Expertises";
import { Realisations } from "@/components/Realisations";
import { Approche } from "@/components/Approche";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <CinematicHero /> */}
      <Introduction />
      <Expertises />
      <Realisations />
      <Approche />
      <ContactSection />
    </>
  );
}
