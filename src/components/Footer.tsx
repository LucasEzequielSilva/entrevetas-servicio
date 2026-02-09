const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-16 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-serif text-lg tracking-wide">Madero Studio</span>
        <div className="flex items-center gap-8 text-sm text-muted-foreground">
          <span>Valencia, Spain</span>
          <span className="hidden md:inline text-border">·</span>
          <a
            href="mailto:hello@maderostudio.es"
            className="hover:text-foreground transition-colors duration-300"
          >
            hello@maderostudio.es
          </a>
        </div>
        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Madero Studio
        </p>
      </div>
    </footer>
  );
};

export default Footer;
