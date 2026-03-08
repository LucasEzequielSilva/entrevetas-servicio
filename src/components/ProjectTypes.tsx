import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const ProjectTypes = () => {
  const { t } = useLanguage();

  const items = [
    t("projects.1"),
    t("projects.2"),
    t("projects.3"),
    t("projects.4"),
    t("projects.5"),
  ];

  return (
    <section className="py-24 md:py-40 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
        >
          {t("projects.label")}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-5xl tracking-tight mb-16 md:mb-24 leading-tight"
        >
          {t("projects.title")}
        </motion.h2>

        <div className="flex flex-col">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-border last:border-b py-5 md:py-6 px-2 md:px-4 flex items-center gap-6"
            >
              <span className="text-xs tracking-[0.2em] text-muted-foreground/50 font-light w-8 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-lg md:text-xl tracking-tight text-foreground/80">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTypes;
