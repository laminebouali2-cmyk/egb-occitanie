import { Hero } from "@/components/Hero";
import { Maitrise } from "@/components/Maitrise";
import { Domaines } from "@/components/Domaines";
import { Methode } from "@/components/Methode";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Maitrise />
      <Domaines />
      <Methode />
      <ContactSection />
    </>
  );
}
