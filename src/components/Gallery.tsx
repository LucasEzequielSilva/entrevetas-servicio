import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import video1 from "@/assets/video-1.mp4";
import video2 from "@/assets/video-2.mp4";

type GalleryItem =
  | { type: "image"; src: string; alt: string; labelKey: string; span?: string }
  | { type: "video"; src: string; labelKey: string; span?: string };

const Gallery = () => {
  const { t } = useLanguage();

  const projects: GalleryItem[] = [
    { type: "image", src: gallery1, alt: "Celosía de listones de madera", labelKey: "gallery.1", span: "md:col-span-2 md:row-span-2" },
    { type: "image", src: gallery2, alt: "Altillo de madera maciza", labelKey: "gallery.2" },
    { type: "video", src: video1, labelKey: "gallery.5" },
    { type: "image", src: gallery3, alt: "Restauración de mesa", labelKey: "gallery.3", span: "md:col-span-2" },
    { type: "video", src: video2, labelKey: "gallery.6" },
  ];

  return (
    <section className="py-24 md:py-40 px-6 md:px-16 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-widest uppercase text-muted-foreground mb-16"
        >
          {t("gallery.label")}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[280px] md:auto-rows-[320px]">
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
                  alt={project.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
              ) : (
                <video
                  src={project.src}
                  muted
                  loop
                  playsInline
                  autoPlay
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
