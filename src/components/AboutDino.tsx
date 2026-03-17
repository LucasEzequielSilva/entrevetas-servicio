import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import dinoImage from "@/assets/dino-portrait.jpg";

const AboutDino = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-20 md:py-28 lg:py-32 px-6 md:px-16 bg-card overflow-hidden">
      {/* Decorative accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent to-accent/30" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center relative">
        {/* Image with layered frame */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Accent frame behind image */}
          <div className="absolute -top-4 -left-4 w-full h-full border border-accent/20 rounded-2xl md:rounded-3xl" />
          <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-accent/5 rounded-2xl md:rounded-3xl" />

          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/5] shadow-[0_20px_60px_-15px_hsl(var(--wood)/0.25)]">
            <img
              src={dinoImage}
              alt="Dino Monteleone — Entre Vetas"
              className="w-full h-full object-cover"
            />
            {/* Subtle gradient overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Label */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4"
          >
            El artesano
          </motion.p>

          <h2 className="text-[28px] md:text-[34px] lg:text-[40px] tracking-tight leading-[1.1] mb-3">
            {t("about.title")}
          </h2>

          {/* Accent divider */}
          <div className="h-[2px] w-12 bg-accent/50 mb-8" />

          <div className="space-y-5 text-muted-foreground leading-[1.8] text-[15px] font-light">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p className="italic text-foreground/70 border-l-2 border-accent/30 pl-5">
              {t("about.p3")}
            </p>
            <p>{t("about.p4")}</p>
            <p>{t("about.p5")}</p>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="h-[1px] w-8 bg-accent/40" />
            <p className="text-sm font-medium tracking-widest uppercase text-foreground/80">
              Dino Monteleone
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom decorative accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-t from-transparent to-accent/30" />
    </section>
  );
};

export default AboutDino;
