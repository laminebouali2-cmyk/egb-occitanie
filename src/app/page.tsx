import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { Expertises } from "@/components/Expertises";
import { Realisations } from "@/components/Realisations";
import { Approche } from "@/components/Approche";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Expertises />
      <Realisations />
      <Approche />
      <ContactSection />
    </>
  );
}
