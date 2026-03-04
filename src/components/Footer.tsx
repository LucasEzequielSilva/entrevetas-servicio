import { useLanguage } from "@/i18n/LanguageContext";
import fullLogo from "@/assets/ev-logo-full.png";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-6 md:px-16 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={fullLogo} alt="Entre Vetas - Carpintería & Construcciones" className="h-16 md:h-20 w-auto" />
        <div className="flex items-center gap-8 text-sm text-muted-foreground">
          <span>{t("footer.location")}</span>
          <span className="hidden md:inline text-border">·</span>
          <a
            href="mailto:hello@maderostudio.es"
            className="hover:text-foreground transition-colors duration-300"
          >
            hello@maderostudio.es
          </a>
        </div>
        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Entre Vetas
        </p>
      </div>
    </footer>
  );
};

export default Footer;