import { motion } from "framer-motion";
import heroImage from "@/assets/hero-carpentry.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-end pb-20 md:pb-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Taller de carpintería artesanal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
      </div>

      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-16 py-8">
        <span className="font-serif text-xl md:text-2xl tracking-wide text-primary-foreground">
          Madero Studio
        </span>
        <div className="flex items-center gap-6">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="text-sm tracking-widest uppercase text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
          >
            {t("nav.contact")}
          </a>
        </div>
      </nav>

      <div className="relative z-10 px-6 md:px-16 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] tracking-tight mb-6"
        >
          {t("hero.title.1")}
          <br />
          {t("hero.title.2")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-primary-foreground/70 max-w-lg font-light leading-relaxed"
        >
          {t("hero.subtitle.1")}
          <br className="hidden md:block" />
          {t("hero.subtitle.2")}
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
