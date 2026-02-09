import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const Process = () => {
  const { t } = useLanguage();

  const steps = [
    { number: "01", title: t("process.1.title"), description: t("process.1.desc") },
    { number: "02", title: t("process.2.title"), description: t("process.2.desc") },
    { number: "03", title: t("process.3.title"), description: t("process.3.desc") },
  ];

  return (
    <section className="py-24 md:py-40 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-widest uppercase text-muted-foreground mb-6"
        >
          {t("process.label")}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl tracking-tight mb-20 max-w-2xl leading-tight"
        >
          {t("process.title.1")}
          <br />
          {t("process.title.2")}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 md:gap-20">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <div className="flex items-start gap-6">
                <span className="text-5xl md:text-6xl font-serif text-border select-none">
                  {step.number}
                </span>
                <div className="pt-2">
                  <h3 className="text-xl md:text-2xl mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
