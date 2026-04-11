import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import galleryPergola from "@/assets/gallery-pergola.jpg";
import video1 from "@/assets/video-1.mp4";
import video2 from "@/assets/video-2.mp4";
import galleryPorton from "@/assets/gallery-porton.jpg";
import galleryBg from "@/assets/gallery-bg.mp4";

type GalleryItem =
  | { type: "image"; src: string; alt: string; labelKey: string; altKey: string }
  | { type: "video"; src: string; labelKey: string; altKey: string };

const Gallery = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const projects: (GalleryItem & { className: string })[] = [
    {
      type: "image",
      src: galleryPergola,
      alt: "Pérgola de madera exterior",
      labelKey: "gallery.4",
      altKey: "gallery.4.alt",
      className: "md:col-span-2 md:row-span-2",
    },
    {
      type: "image",
      src: galleryPorton,
      alt: "Portón corredizo de madera",
      labelKey: "gallery.6",
      altKey: "gallery.6.alt",
      className: "",
    },
    {
      type: "video",
      src: video1,
      labelKey: "gallery.5",
      altKey: "gallery.5.alt",
      className: "",
    },
    {
      type: "image",
      src: gallery1,
      alt: "Celosía de listones de madera",
      labelKey: "gallery.1",
      altKey: "gallery.1.alt",
      className: "md:col-span-2",
    },
    {
      type: "image",
      src: gallery2,
      alt: "Altillo de madera maciza",
      labelKey: "gallery.2",
      altKey: "gallery.2.alt",
      className: "",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative py-[70px] md:py-[100px] lg:py-[120px] px-4 md:px-10 overflow-hidden"
    >
      {/* Parallax background video */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <video
          src={galleryBg}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[120%] object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-background/88 backdrop-blur-sm" />

      <div className="max-w-[1300px] mx-auto relative z-10">
        {/* Section header with luxury reveal */}
        <div className="mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[11px] tracking-[0.3em] uppercase text-accent font-medium"
          >
            {t("gallery.label")}
          </motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="h-[1px] w-16 bg-accent/40 mt-4 mb-5 origin-left"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[28px] md:text-[clamp(32px,3vw,42px)] tracking-tight text-foreground"
          >
            {t("gallery.title")}
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[240px] md:auto-rows-[280px]">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${project.className}`}
            >
              {/* Media */}
              {project.type === "image" ? (
                <img
                  src={project.src}
                  alt={t(project.altKey)}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-all duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
              ) : (
                <video
                  src={project.src}
                  muted
                  loop={project.src !== video2}
                  playsInline
                  autoPlay
                  aria-label={t(project.altKey)}
                  className="w-full h-full object-cover object-center transition-all duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
              )}

              {/* Hover overlay — luxury gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Label — slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                <div className="h-[1px] w-0 group-hover:w-10 bg-accent transition-all duration-700 delay-100 mb-3" />
                <span className="text-[11px] md:text-xs tracking-[0.2em] uppercase text-primary-foreground/90 font-light">
                  {t(project.labelKey)}
                </span>
              </div>

              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/0 group-hover:ring-white/10 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
