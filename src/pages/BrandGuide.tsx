import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const colors = [
  { name: "Warm White", hex: "#FAF8F5", css: "hsl(40, 20%, 98%)", usage: "Fondo principal" },
  { name: "Foreground", hex: "#2A2520", css: "hsl(30, 10%, 15%)", usage: "Textos y headers" },
  { name: "Accent / Wood", hex: "#B8864A", css: "hsl(30, 40%, 55%)", usage: "Acentos y detalles" },
  { name: "Stone", hex: "#A8A29E", css: "hsl(30, 5%, 65%)", usage: "Textos secundarios" },
  { name: "Cream", hex: "#F3EDE4", css: "hsl(40, 30%, 95%)", usage: "Fondos de tarjetas" },
  { name: "Card BG", hex: "#F0ECE6", css: "hsl(40, 15%, 96%)", usage: "Secciones alternas" },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const BrandGuide = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="px-6 md:px-16 py-8 border-b border-border flex items-center justify-between">
        <a href="/" className="font-serif text-xl tracking-wide hover:text-accent transition-colors">
          Madero Studio
        </a>
        <span className="text-sm tracking-widest uppercase text-muted-foreground">
          Guía de Identidad Visual
        </span>
      </header>

      <div className="max-w-5xl mx-auto px-6 md:px-16 py-16 md:py-24 space-y-24">

        {/* Intro */}
        <motion.section {...fadeUp}>
          <h1 className="text-4xl md:text-5xl tracking-tight mb-6">
            Identidad Visual
          </h1>
          <p className="text-muted-foreground font-light text-lg max-w-2xl leading-relaxed">
            Esta guía define los elementos visuales de Madero Studio para mantener coherencia
            en todos los puntos de contacto — web, redes sociales, impresos y presentaciones.
          </p>
        </motion.section>

        {/* Logo */}
        <motion.section {...fadeUp} className="space-y-8">
          <div>
            <p className="text-xs tracking-widest uppercase text-accent mb-4">01 — Logotipo</p>
            <h2 className="text-2xl md:text-3xl tracking-tight mb-4">Tipografía como marca</h2>
            <p className="text-muted-foreground font-light leading-relaxed max-w-xl">
              El logo se construye con Playfair Display. Sin símbolo, sin ícono.
              La elegancia está en la simplicidad tipográfica.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-foreground p-12 flex items-center justify-center">
              <span className="font-serif text-3xl md:text-4xl text-primary-foreground tracking-wide">
                Madero Studio
              </span>
            </div>
            <div className="bg-card p-12 flex items-center justify-center border border-border">
              <span className="font-serif text-3xl md:text-4xl text-foreground tracking-wide">
                Madero Studio
              </span>
            </div>
          </div>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>↳ Usar siempre en Playfair Display, peso Regular o Medium</p>
            <p>↳ Respetar espacio de protección mínimo alrededor del logo</p>
            <p>↳ Nunca distorsionar, rotar, ni añadir efectos</p>
          </div>
        </motion.section>

        {/* Colores */}
        <motion.section {...fadeUp} className="space-y-8">
          <div>
            <p className="text-xs tracking-widest uppercase text-accent mb-4">02 — Paleta de Color</p>
            <h2 className="text-2xl md:text-3xl tracking-tight mb-4">Tonos naturales y cálidos</h2>
            <p className="text-muted-foreground font-light leading-relaxed max-w-xl">
              La paleta refleja los materiales con los que trabajamos: madera, piedra, lino.
              Tonos neutros cálidos con un acento madera para detalles y llamadas a la acción.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {colors.map((c) => (
              <div key={c.name} className="space-y-3">
                <div
                  className="h-24 md:h-32 border border-border"
                  style={{ backgroundColor: c.hex }}
                />
                <div>
                  <p className="text-sm font-medium">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.hex}</p>
                  <p className="text-xs text-muted-foreground">{c.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Tipografía */}
        <motion.section {...fadeUp} className="space-y-8">
          <div>
            <p className="text-xs tracking-widest uppercase text-accent mb-4">03 — Tipografía</p>
            <h2 className="text-2xl md:text-3xl tracking-tight mb-4">Dos familias, un sistema</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-xs tracking-widest uppercase text-muted-foreground">Titulares</p>
              <p className="font-serif text-5xl md:text-6xl tracking-tight">Playfair Display</p>
              <p className="text-sm text-muted-foreground">
                Serif elegante para títulos, encabezados y el logotipo.
                Pesos: Regular (400), Medium (500), SemiBold (600).
              </p>
              <p className="font-serif text-2xl mt-4">
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-xs tracking-widest uppercase text-muted-foreground">Cuerpo</p>
              <p className="font-sans text-5xl md:text-6xl tracking-tight font-light">DM Sans</p>
              <p className="text-sm text-muted-foreground">
                Sans-serif limpia para cuerpo de texto, labels y UI.
                Pesos: Light (300), Regular (400), Medium (500).
              </p>
              <p className="font-sans text-2xl font-light mt-4">
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj
              </p>
            </div>
          </div>
        </motion.section>

        {/* Fotografía */}
        <motion.section {...fadeUp} className="space-y-8">
          <div>
            <p className="text-xs tracking-widest uppercase text-accent mb-4">04 — Fotografía</p>
            <h2 className="text-2xl md:text-3xl tracking-tight mb-4">Directrices de imagen</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">✓ Hacer</h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-light">
                <li>— Luz natural, suave, sin flash directo</li>
                <li>— Tonos cálidos, sin filtros saturados</li>
                <li>— Mostrar texturas y detalle del material</li>
                <li>— Composiciones limpias con aire alrededor</li>
                <li>— Incluir el proceso: manos, herramientas, taller</li>
                <li>— Encuadres a 45° o perspectivas arquitectónicas</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">✗ Evitar</h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-light">
                <li>— Fotos de stock genéricas</li>
                <li>— Filtros fríos o blanco/negro extremo</li>
                <li>— Composiciones recargadas</li>
                <li>— Textos superpuestos sobre la foto</li>
                <li>— Fotos borrosas o con baja resolución</li>
                <li>— Emojis o stickers en contenido de marca</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Instagram Templates */}
        <motion.section {...fadeUp} className="space-y-8">
          <div>
            <p className="text-xs tracking-widest uppercase text-accent mb-4">05 — Instagram</p>
            <h2 className="text-2xl md:text-3xl tracking-tight mb-4">Plantillas y estilo para feed</h2>
            <p className="text-muted-foreground font-light leading-relaxed max-w-xl">
              Mantené coherencia visual en el feed alternando entre estos tres tipos de post.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {/* Template 1: Foto sola */}
            <div className="aspect-square bg-card border border-border flex flex-col items-center justify-center p-4 md:p-6 text-center space-y-3">
              <div className="w-full h-3/4 bg-muted flex items-center justify-center text-xs text-muted-foreground">
                Foto del proyecto
              </div>
              <p className="text-[10px] md:text-xs text-muted-foreground tracking-wide uppercase">Tipo A — Solo foto</p>
            </div>

            {/* Template 2: Foto + texto */}
            <div className="aspect-square bg-foreground flex flex-col items-center justify-between p-4 md:p-6 text-center">
              <p className="text-[10px] md:text-xs text-primary-foreground/50 tracking-widest uppercase">Madero Studio</p>
              <div className="flex-1 flex items-center">
                <p className="font-serif text-primary-foreground text-sm md:text-lg leading-tight">
                  "Cada pieza<br />tiene una historia"
                </p>
              </div>
              <div className="h-[1px] w-8 bg-accent" />
            </div>

            {/* Template 3: Detalle / proceso */}
            <div className="aspect-square bg-card border border-border flex flex-col items-center justify-center p-4 md:p-6 text-center space-y-3">
              <div className="w-full h-3/4 bg-muted flex items-center justify-center text-xs text-muted-foreground">
                Detalle / proceso
              </div>
              <p className="text-[10px] md:text-xs text-muted-foreground tracking-wide uppercase">Tipo C — Close-up</p>
            </div>
          </div>

          <div className="bg-card border border-border p-6 md:p-8 space-y-4">
            <h3 className="text-lg font-medium">Reglas del feed</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground font-light">
              <ul className="space-y-2">
                <li>— Alternar: foto / quote / detalle</li>
                <li>— Máximo 2 fotos seguidas del mismo proyecto</li>
                <li>— Las quotes siempre sobre fondo oscuro</li>
                <li>— Hashtags al final, nunca más de 10</li>
              </ul>
              <ul className="space-y-2">
                <li>— Stories: mostrar el proceso (antes/después)</li>
                <li>— Reels: vídeos de taller, nunca con música pop</li>
                <li>— Destacados: usar íconos minimalistas</li>
                <li>— Bio: breve, con ubicación y email</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Tono de voz */}
        <motion.section {...fadeUp} className="space-y-8 pb-12">
          <div>
            <p className="text-xs tracking-widest uppercase text-accent mb-4">06 — Tono de Voz</p>
            <h2 className="text-2xl md:text-3xl tracking-tight mb-4">Cómo hablamos</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <p className="text-sm font-medium">Somos</p>
              <ul className="text-sm text-muted-foreground font-light space-y-1">
                <li>— Cercanos pero profesionales</li>
                <li>— Confiados sin ser arrogantes</li>
                <li>— Precisos y directos</li>
                <li>— Apasionados por el oficio</li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-medium">No somos</p>
              <ul className="text-sm text-muted-foreground font-light space-y-1">
                <li>— Agresivos comercialmente</li>
                <li>— Informales o "graciosos"</li>
                <li>— Técnicos sin contexto</li>
                <li>— Genéricos o impersonales</li>
              </ul>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 md:px-16 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Madero Studio — Guía de uso interno
        </p>
      </footer>
    </div>
  );
};

export default BrandGuide;
