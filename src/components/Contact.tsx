import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 md:py-40 px-6 md:px-16 bg-foreground overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-widest uppercase text-primary-foreground/50 mb-8"
        >
          {t("contact.label")}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-5xl lg:text-6xl text-primary-foreground tracking-tight mb-8 leading-tight"
        >
          {t("contact.title.1")}
          <br />
          {t("contact.title.2")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary-foreground/60 font-light text-lg mb-12 max-w-lg mx-auto leading-relaxed"
        >
          {t("contact.desc")}
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="mailto:hello@maderostudio.es"
          className="inline-block border border-primary-foreground/30 text-primary-foreground px-10 py-4 text-sm tracking-widest uppercase hover:bg-primary-foreground hover:text-foreground transition-all duration-500"
        >
          {t("contact.cta")}
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
