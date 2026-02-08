import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Introduction } from "@/components/Introduction";
import { Expertises } from "@/components/Expertises";
import { Realisations } from "@/components/Realisations";
import { Testimonials } from "@/components/Testimonials";
import { Approche } from "@/components/Approche";
import { ContactSection } from "@/components/ContactSection";
import { StickyCallButton } from "@/components/StickyCallButton";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Introduction />
      <Expertises />
      <Realisations />
      <Testimonials />
      <Approche />
      <ContactSection />
      <StickyCallButton />
    </>
  );
}
