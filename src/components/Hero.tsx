import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import heroVideo from "@/assets/hero-video.mp4";
import navLogo from "@/assets/ev-logo-full.png";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const WHATSAPP_NUMBER = "34600000000";

const navLinks = [
  { key: "nav.gallery", href: "#gallery" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.process", href: "#process" },
  { key: "nav.about", href: "#about" },
  { key: "nav.contact", href: "#contact" },
] as const;

const Hero = () => {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.7]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-end pb-20 md:pb-32 overflow-hidden p-4 md:p-6"
    >
      <motion.div className="absolute inset-4 md:inset-6 rounded-2xl md:rounded-3xl overflow-hidden" style={{ y: imageY, scale: imageScale }}>
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent"
          style={{ opacity: overlayOpacity }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
      </motion.div>

      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-16 py-8">
        <motion.img
          src={navLogo}
          alt="Entre Vetas"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-10 md:h-12 w-auto"
        />
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-6 md:gap-8"
        >
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="hidden min-[900px]:inline text-sm tracking-widest uppercase text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
            >
              {t(link.key)}
            </a>
          ))}
          <LanguageSwitcher />

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="min-[900px]:hidden flex flex-col justify-center items-center gap-[6px] p-1"
            aria-label="Open menu"
          >
            <span className="block w-[28px] h-[2.5px] bg-primary-foreground rounded-sm" />
            <span className="block w-[28px] h-[2.5px] bg-primary-foreground rounded-sm" />
            <span className="block w-[28px] h-[2.5px] bg-primary-foreground rounded-sm" />
          </button>
        </motion.div>
      </nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex flex-col items-center justify-center"
            onClick={() => setMenuOpen(false)}
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-8 right-6 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              aria-label="Close menu"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl tracking-widest uppercase text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-200"
                >
                  {t(link.key)}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero content */}
      <motion.div className="relative z-10 px-6 md:px-16 max-w-4xl" style={{ y: contentY }}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] tracking-tight mb-6"
        >
          {t("hero.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-primary-foreground/70 max-w-lg font-light leading-relaxed mb-10"
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#3C6E47] hover:bg-[#345f3e] text-white px-6 py-3.5 rounded-full text-sm font-medium transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t("hero.whatsapp")}
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground/80 hover:text-primary-foreground hover:border-primary-foreground/60 px-6 py-3.5 rounded-full text-sm font-medium transition-all duration-300"
          >
            {t("hero.services")}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
