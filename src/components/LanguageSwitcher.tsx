import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

const languages: { code: Language; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-sm tracking-widest">
      {languages.map((lang, i) => (
        <span key={lang.code} className="flex items-center gap-1">
          {i > 0 && <span className="text-primary-foreground/40">/</span>}
          <button
            onClick={() => setLanguage(lang.code)}
            className={`transition-colors duration-300 ${
              language === lang.code
                ? "text-primary-foreground"
                : "text-primary-foreground/40 hover:text-primary-foreground/70"
            }`}
          >
            {lang.label}
          </button>
        </span>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
