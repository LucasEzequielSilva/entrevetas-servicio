import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import servicePergola from "@/assets/service-pergola.jpg";
import serviceDeck from "@/assets/service-deck.jpg";
import serviceInterior from "@/assets/service-interior.jpg";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { image: servicePergola, titleKey: "services.1.title", descKey: "services.1.desc", altKey: "services.1.alt" },
    { image: serviceDeck, titleKey: "services.2.title", descKey: "services.2.desc", altKey: "services.2.alt" },
    { image: serviceInterior, titleKey: "services.3.title", descKey: "services.3.desc", altKey: "services.3.alt" },
  ];

  return (
    <section id="services" className="py-14 md:py-20 lg:py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-4"
        >
          {t("services.label")}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-[38px] md:text-[clamp(42px,4vw,64px)] tracking-tight mb-10 md:mb-14 leading-tight"
        >
          {t("services.title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl md:rounded-2xl aspect-[4/3] mb-5">
              <img
                  src={service.image}
                  alt={t(service.altKey)}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-700" />
              </div>
              <h3 className="text-[28px] md:text-[32px] tracking-tight mb-2">
                {t(service.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light text-[16px] md:text-[17px]">
                {t(service.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
