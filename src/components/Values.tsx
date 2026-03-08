import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const Values = () => {
  const { t } = useLanguage();

  const values = [
    { number: "01", title: t("values.1.title"), description: t("values.1.desc") },
    { number: "02", title: t("values.2.title"), description: t("values.2.desc") },
    { number: "03", title: t("values.3.title"), description: t("values.3.desc") },
    { number: "04", title: t("values.4.title"), description: t("values.4.desc") },
  ];

  return (
    <section id="values" className="py-24 md:py-40 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-16"
        >
          {t("values.label")}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 md:gap-x-16 gap-y-14 md:gap-y-16">
          {values.map((value, i) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <span className="text-xs text-accent/60 font-light tracking-[0.2em]">
                {value.number}
              </span>
              <div className="h-[1px] w-0 group-hover:w-10 bg-accent/40 mt-3 mb-4 transition-all duration-500 ease-out" />
              <h3 className="text-lg md:text-xl mb-3 tracking-tight">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light text-sm">
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
