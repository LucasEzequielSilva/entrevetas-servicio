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
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[24px] md:text-[30px] lg:text-[36px] text-primary-foreground tracking-tight leading-[1.1] mb-5"
          >
            {t("exteriors.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-foreground/60 font-light text-base md:text-lg leading-relaxed"
          >
            {t("exteriors.desc")}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ExteriorsCTA;
