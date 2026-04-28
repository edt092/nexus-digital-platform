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
import ServicesSchema from "@/components/schema/ServicesSchema";
import BreadcrumbSchema, { homeBreadcrumb } from "@/components/schema/BreadcrumbSchema";

export default function Home() {
  return (
    <>
      <ServicesSchema />
      <BreadcrumbSchema items={homeBreadcrumb} />
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
