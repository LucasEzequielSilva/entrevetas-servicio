import Hero from "@/components/Hero";
import Values from "@/components/Values";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import ExteriorsCTA from "@/components/ExteriorsCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background">
      <Hero />
      <Values />
      <Gallery />
      <Process />
      <ExteriorsCTA />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
