import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import video1 from "@/assets/video-1.mp4";
import video2 from "@/assets/video-2.mp4";

type GalleryItem =
  | { type: "image"; src: string; alt: string; labelKey: string }
  | { type: "video"; src: string; labelKey: string };

const Gallery = () => {
  const { t } = useLanguage();

  const projects: GalleryItem[] = [
    { type: "image", src: gallery1, alt: "Celosía de listones de madera", labelKey: "gallery.1" },
    { type: "image", src: gallery2, alt: "Altillo de madera maciza", labelKey: "gallery.2" },
    { type: "image", src: gallery3, alt: "Restauración de mesa", labelKey: "gallery.3" },
    { type: "video", src: video1, labelKey: "gallery.5" },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden aspect-[4/5] cursor-pointer"
            >
              {project.type === "image" ? (
                <img
                  src={project.src}
                  alt={project.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <video
                  src={project.src}
                  muted
                  loop
                  playsInline
                  autoPlay
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
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
