import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const Values = () => {
  const { t } = useLanguage();

  const values = [
    { number: "01", title: t("values.1.title"), description: t("values.1.desc") },
    { number: "02", title: t("values.2.title"), description: t("values.2.desc") },
    { number: "03", title: t("values.3.title"), description: t("values.3.desc") },
  ];

  return (
    <section className="py-24 md:py-40 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-widest uppercase text-muted-foreground mb-16"
        >
          {t("values.label")}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {values.map((value, i) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <span className="text-xs text-accent font-medium tracking-widest">
                {value.number}
              </span>
              <h3 className="text-2xl md:text-3xl mt-4 mb-4 tracking-tight">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
