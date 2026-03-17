import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const Process = () => {
  const { t } = useLanguage();

  const steps = [
    { number: "01", title: t("process.1.title") },
    { number: "02", title: t("process.2.title") },
    { number: "03", title: t("process.3.title") },
    { number: "04", title: t("process.4.title") },
  ];

  return (
    <section id="process" className="py-[70px] md:py-[100px] lg:py-[120px] px-6 md:px-10">
      <div className="max-w-[1000px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[12px] tracking-[0.3em] uppercase text-muted-foreground mb-4"
        >
          {t("process.label")}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[28px] md:text-[clamp(36px,3.5vw,44px)] tracking-tight mb-10 md:mb-16 leading-tight"
        >
          {t("process.title.1")}
        </motion.h2>

        <div className="flex flex-col">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-border last:border-b py-5 md:py-6 px-2 md:px-4 flex items-center gap-6 md:gap-10"
            >
              <span className="text-xs tracking-[0.2em] text-muted-foreground/50 font-light w-8 shrink-0">
                {step.number}
              </span>
              <div className="w-1 h-1 rounded-full bg-accent/40 shrink-0" />
              <h3 className="text-[20px] md:text-[24px] tracking-tight text-foreground/80">
                {step.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
