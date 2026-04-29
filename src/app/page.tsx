import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Pillars from "@/components/Pillars";
import GrowthStack from "@/components/GrowthStack";
import Manifesto from "@/components/Manifesto";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServicesSchema from "@/components/schema/ServicesSchema";

export default function Home() {
  return (
    <>
      <ServicesSchema />
      <Navbar />
      <Hero />
      <PainPoints />
      <Pillars />
      <GrowthStack />
      <Manifesto />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
