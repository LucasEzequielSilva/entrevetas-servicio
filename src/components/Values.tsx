import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import iconRuler from "@/assets/icon-ruler.png";
import iconToolbox from "@/assets/icon-toolbox.png";
import iconSaw from "@/assets/icon-saw.png";

const Values = () => {
  const { t } = useLanguage();

  const values = [
    { number: "01", icon: iconRuler, title: t("values.1.title"), description: t("values.1.desc") },
    { number: "02", icon: iconToolbox, title: t("values.2.title"), description: t("values.2.desc") },
    { number: "03", icon: iconSaw, title: t("values.3.title"), description: t("values.3.desc") },
  ];

  return (
    <section id="values" className="py-14 md:py-20 lg:py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-10 md:mb-12"
        >
          {t("values.label")}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 md:gap-x-16 gap-y-14">
          {values.map((value, i) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="flex items-center gap-3 mb-1">
                <img src={value.icon} alt="" className="w-11 h-11 object-contain" />
                <span className="text-xs text-accent/60 font-light tracking-[0.2em]">
                  {value.number}
                </span>
              </div>
              <div className="h-[1px] w-0 group-hover:w-10 bg-accent/40 mt-3 mb-4 transition-all duration-500 ease-out" />
              <h3 className="text-[28px] md:text-[32px] mb-3 tracking-tight">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light text-[16px] md:text-[17px]">
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
