import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import dinoImage from "@/assets/dino-portrait.jpg";

const AboutDino = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-14 md:py-20 lg:py-24 px-6 md:px-16 bg-background">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
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
          <h2 className="text-[24px] md:text-[30px] lg:text-[36px] tracking-tight leading-[1.1] mb-6">
            {t("about.title")}
          </h2>

          <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
            <p>{t("about.p4")}</p>
            <p>{t("about.p5")}</p>
          </div>

          <p className="mt-8 text-sm font-medium tracking-wide text-foreground">
            — Dino Monteleone
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutDino;
