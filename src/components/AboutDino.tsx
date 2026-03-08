import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import dinoImage from "@/assets/dino-portrait.jpg";

const AboutDino = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-16 bg-background">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/5]">
            <img
              src={dinoImage}
              alt="Dino Monteleone — Entre Vetas"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
            {t("about.label")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-8">
            {t("about.title")}
          </h2>

          <p className="text-muted-foreground leading-relaxed text-[15px]">
            {t("about.text")}
          </p>

          <p className="mt-8 text-sm font-medium tracking-wide text-foreground">
            — Dino Monteleone
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutDino;
