import Hero from "@/components/Hero";
import Values from "@/components/Values";
import AboutDino from "@/components/AboutDino";
import Gallery from "@/components/Gallery";
import ProjectTypes from "@/components/ProjectTypes";
import Process from "@/components/Process";
import ExteriorsCTA from "@/components/ExteriorsCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background">
      <Hero />
      <Values />
      <AboutDino />
      <Gallery />
      <ProjectTypes />
      <Process />
      <ExteriorsCTA />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
