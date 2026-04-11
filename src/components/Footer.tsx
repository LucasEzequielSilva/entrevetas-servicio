import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import fullLogo from "@/assets/ev-logo-dark.png";

const WHATSAPP_NUMBER = "34611457391";

const Footer = () => {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { key: "nav.services", href: "#services" },
    { key: "nav.gallery", href: "#gallery" },
    { key: "nav.process", href: "#process" },
    { key: "nav.about", href: "#about" },
    { key: "nav.contact", href: "#contact" },
  ];

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="relative bg-foreground text-primary-foreground overflow-hidden">
      {/* Top accent line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="max-w-[1300px] mx-auto px-6 md:px-10">
        {/* Main footer content */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5"
          >
            <img
              src={fullLogo}
              alt="Entre Vetas"
              className="h-[40px] w-auto brightness-0 invert mb-6"
            />
            <p className="text-primary-foreground/50 text-sm font-light leading-relaxed max-w-xs">
              {t("hero.subtitle")}
            </p>
          </motion.div>

          {/* Navigation column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-3"
          >
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-primary-foreground/30 mb-6 font-medium">
              {t("nav.services")}
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => smoothScroll(e, link.href)}
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300 font-light w-fit"
                >
                  {t(link.key)}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-4"
          >
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-primary-foreground/30 mb-6 font-medium">
              {t("nav.contact")}
            </h4>
            <div className="flex flex-col gap-4">
              {/* Location */}
              <div className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 mt-0.5 text-accent/70 shrink-0">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <div>
                  <p className="text-sm text-primary-foreground/60 font-light">{t("footer.location")}</p>
                  <p className="text-xs text-primary-foreground/35 font-light mt-1">{t("footer.zone")}</p>
                </div>
              </div>

              {/* Email */}
              <a
                href="mailto:Monteleonegabrieldino@gmail.com"
                className="flex items-center gap-3 group"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-accent/70 shrink-0">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13 2 4" />
                </svg>
                <span className="text-sm text-primary-foreground/60 group-hover:text-primary-foreground transition-colors duration-300 font-light">
                  Monteleonegabrieldino@gmail.com
                </span>
              </a>

              {/* Social links */}
              <div className="flex items-center gap-4 mt-2">
                <a
                  href="https://www.instagram.com/entrevetas.servicios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-primary-foreground/10 flex items-center justify-center hover:border-accent/40 hover:bg-accent/10 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary-foreground/50">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-primary-foreground/10 flex items-center justify-center hover:border-accent/40 hover:bg-accent/10 transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary-foreground/50">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/30 font-light">
            &copy; {currentYear} Entre Vetas — Carpintería a medida
          </p>
          <p className="text-xs text-primary-foreground/20 font-light">
            Altea, Alicante
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
