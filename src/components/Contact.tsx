import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import galleryBg from "@/assets/gallery-bg.mp4";

const WHATSAPP_NUMBER = "34611457391";

const Contact = () => {
  const { t } = useLanguage();
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <section id="contact" className="relative py-[70px] md:py-[100px] lg:py-[120px] px-6 md:px-10 overflow-hidden">
      {/* Video background */}
      <video
        src={galleryBg}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(30,10%,8%,0.88)] via-[hsl(30,15%,12%,0.85)] to-[hsl(25,20%,10%,0.9)]" />
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[28px] md:text-[clamp(36px,3.5vw,44px)] text-primary-foreground tracking-tight mb-4 leading-tight"
        >
          {t("contact.title")}
        </motion.h2>

        {/* Accent divider */}
        <div className="mx-auto h-[2px] w-12 bg-accent/50 mb-8" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-primary-foreground/60 font-light text-[15px] max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Cada proyecto comienza con una conversación. Contanos tu idea y diseñamos juntos la solución perfecta.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-4 rounded-full text-sm font-medium tracking-widest uppercase transition-colors duration-300 shadow-[0_8px_30px_-8px_hsl(var(--accent)/0.4)]"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          {t("contact.cta")}
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
