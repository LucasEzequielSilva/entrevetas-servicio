import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Values from "@/components/Values";
import AboutDino from "@/components/AboutDino";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const Index = () => {
  return (
    <main className="bg-background">
      <Hero />
      <WhatsAppFAB />
      <Services />
      <Gallery />
      <Values />
      <AboutDino />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
