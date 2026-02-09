import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Noble Materials",
    description:
      "We work exclusively with sustainably sourced European hardwoods — oak, walnut, ash — selected for character and longevity.",
  },
  {
    number: "02",
    title: "Custom Design",
    description:
      "Every piece is drawn to your space. No catalogue, no standard sizes. Each project begins with your architecture.",
  },
  {
    number: "03",
    title: "Master Craftsmanship",
    description:
      "Traditional joinery meets contemporary precision. Our workshop combines hand techniques with modern engineering.",
  },
];

const Values = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-widest uppercase text-muted-foreground mb-16"
        >
          What defines us
        </motion.p>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {values.map((value, i) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <span className="text-xs text-accent font-medium tracking-widest">
                {value.number}
              </span>
              <h3 className="text-2xl md:text-3xl mt-4 mb-4 tracking-tight">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
