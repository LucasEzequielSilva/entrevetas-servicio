import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import exteriorsImage from "@/assets/exteriors-cta.jpg";

const ExteriorsCTA = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section ref={sectionRef} className="px-4 md:px-6 pb-4 md:pb-6 bg-background">
      <div className="relative rounded-2xl md:rounded-3xl overflow-hidden min-h-[50vh] md:min-h-[70vh] flex items-center justify-center">
        <motion.img
          src={exteriorsImage}
          alt={t("exteriors.alt")}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ scale: imageScale }}
        />
        <div className="absolute inset-0 bg-foreground/50" />

        <div className="relative z-10 text-center px-6 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-[0.3em] uppercase text-primary-foreground/50 mb-6"
          >
            {t("exteriors.label")}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl text-primary-foreground tracking-tight leading-[1.1] mb-6"
          >
            {t("exteriors.title.1")}
            <br />
            <span className="italic font-light">{t("exteriors.title.2")}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-foreground/60 font-light text-lg mb-10 leading-relaxed"
          >
            {t("exteriors.desc")}
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-block border border-primary-foreground/30 text-primary-foreground px-10 py-4 text-sm tracking-widest uppercase hover:bg-primary-foreground hover:text-foreground transition-all duration-500 backdrop-blur-sm"
          >
            {t("exteriors.cta")}
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ExteriorsCTA;
