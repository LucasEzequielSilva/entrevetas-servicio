import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-carpentry.jpg";
import logoImg from "@/assets/logo-ev-horizontal.png";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Hero = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.7]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-end pb-20 md:pb-32 overflow-hidden p-4 md:p-6"
    >
      <motion.div className="absolute inset-4 md:inset-6 rounded-2xl md:rounded-3xl overflow-hidden" style={{ y: imageY, scale: imageScale }}>
        <img
          src={heroImage}
          alt="Taller de carpintería artesanal"
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent"
          style={{ opacity: overlayOpacity }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        <div className="absolute inset-0 bg-black/[0.18]" />
      </motion.div>

      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-16 py-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={logoImg}
            alt="Entre Vetas"
            className="h-[56px] md:h-[72px] w-auto"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-6"
        >
          <LanguageSwitcher />
          <a
            href="#contact"
            className="text-sm tracking-widest uppercase text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
          >
            {t("nav.contact")}
          </a>
        </motion.div>
      </nav>

      <motion.div className="relative z-10 px-6 md:px-16 max-w-4xl" style={{ y: contentY }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-[1px] bg-accent mb-8"
        />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] tracking-tight mb-6"
        >
          {t("hero.title.1")}
          <br />
          {t("hero.title.2")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-primary-foreground/70 max-w-lg font-light leading-relaxed"
        >
          {t("hero.subtitle.1")}
          <br className="hidden md:block" />
          {t("hero.subtitle.2")}
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="inline-flex items-center gap-3 mt-10 text-sm tracking-widest uppercase text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 group"
        >
          <span>{t("hero.scroll")}</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-accent"
          >
            ↓
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
