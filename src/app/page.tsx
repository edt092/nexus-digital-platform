import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Pillars from "@/components/Pillars";
import GrowthStack from "@/components/GrowthStack";
import Projects from "@/components/Projects";
import Manifesto from "@/components/Manifesto";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PainPoints />
      <Pillars />
      <GrowthStack />
      <Projects />
      <Manifesto />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
