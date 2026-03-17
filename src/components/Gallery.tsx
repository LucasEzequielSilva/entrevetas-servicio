import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import video1 from "@/assets/video-1.mp4";
import video2 from "@/assets/video-2.mp4";
import galleryBg from "@/assets/gallery-bg.mp4";

type GalleryItem =
  | { type: "image"; src: string; alt: string; labelKey: string; altKey: string; span?: string }
  | { type: "video"; src: string; labelKey: string; altKey: string; span?: string };

const Gallery = () => {
  const { t } = useLanguage();

  const projects: GalleryItem[] = [
    { type: "image", src: gallery1, alt: "Celosía de listones de madera", labelKey: "gallery.1", altKey: "gallery.1.alt", span: "md:col-span-2 md:row-span-2" },
    { type: "image", src: gallery2, alt: "Altillo de madera maciza", labelKey: "gallery.2", altKey: "gallery.2.alt" },
    { type: "video", src: video1, labelKey: "gallery.5", altKey: "gallery.5.alt" },
    { type: "image", src: gallery3, alt: "Restauración de mesa", labelKey: "gallery.3", altKey: "gallery.3.alt", span: "md:col-span-2" },
    { type: "video", src: video2, labelKey: "gallery.6", altKey: "gallery.6.alt" },
  ];

  return (
    <section id="gallery" className="relative py-14 md:py-20 lg:py-24 px-6 md:px-16 overflow-hidden">
      {/* Background video */}
      <video
        src={galleryBg}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-4"
        >
          {t("gallery.label")}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-[28px] md:text-[34px] lg:text-[40px] tracking-tight mb-10 md:mb-12 text-foreground"
        >
          {t("gallery.title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6 auto-rows-[260px] md:auto-rows-[300px]">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden cursor-pointer ${project.span || ""}`}
            >
              {project.type === "image" ? (
                <img
                  src={project.src}
                  alt={t(project.altKey)}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
              ) : (
                <video
                  src={project.src}
                  muted
                  loop={project.src !== video2}
                  playsInline
                  autoPlay
                  ref={(el) => { if (el) el.playbackRate = 1; }}
                  aria-label={t(project.altKey)}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-700" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                <div className="h-[1px] w-8 bg-accent mb-3 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100 origin-left" />
                <span className="text-sm tracking-widest uppercase text-primary-foreground">
                  {t(project.labelKey)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
