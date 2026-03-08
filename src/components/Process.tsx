import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const Process = () => {
  const { t } = useLanguage();
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    { number: "01", title: t("process.1.title"), description: t("process.1.desc") },
    { number: "02", title: t("process.2.title"), description: t("process.2.desc") },
    { number: "03", title: t("process.3.title"), description: t("process.3.desc") },
    { number: "04", title: t("process.4.title"), description: t("process.4.desc") },
    { number: "05", title: t("process.5.title"), description: t("process.5.desc") },
    { number: "06", title: t("process.6.title"), description: t("process.6.desc") },
    { number: "07", title: t("process.7.title"), description: t("process.7.desc") },
  ];

  return (
    <section id="process" className="py-24 md:py-40 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
        >
          {t("process.label")}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-5xl tracking-tight mb-4 leading-tight"
        >
          {t("process.title.1")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground font-light text-lg mb-16 md:mb-24 max-w-xl"
        >
          {t("process.subtitle")}
        </motion.p>

        <div className="flex flex-col">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative border-t border-border last:border-b cursor-pointer"
              onMouseEnter={() => setHoveredStep(i)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className="flex items-center gap-6 md:gap-10 py-6 md:py-8 px-2 md:px-4">
                <span className="text-xs tracking-[0.2em] text-muted-foreground/50 font-light w-8 shrink-0">
                  {step.number}
                </span>
                <div className="w-1 h-1 rounded-full bg-accent/40 shrink-0" />
                <h3 className="text-lg md:text-xl tracking-tight text-foreground/80 group-hover:text-foreground transition-colors duration-500">
                  {step.title}
                </h3>
              </div>

              {/* Hover reveal description */}
              <motion.div
                initial={false}
                animate={{
                  height: hoveredStep === i ? "auto" : 0,
                  opacity: hoveredStep === i ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="text-muted-foreground font-light text-sm md:text-[15px] leading-relaxed pl-[4.5rem] md:pl-[5.5rem] pr-4 pb-6 md:pb-8 max-w-lg">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
