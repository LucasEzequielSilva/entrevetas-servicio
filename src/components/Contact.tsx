import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-40 px-6 md:px-16 bg-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-widest uppercase text-primary-foreground/50 mb-8"
        >
          Start a project
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl text-primary-foreground tracking-tight mb-8 leading-tight"
        >
          Let's discuss
          <br />
          your project.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary-foreground/60 font-light text-lg mb-12 max-w-lg mx-auto leading-relaxed"
        >
          Whether you have detailed plans or just an idea, we'd love to hear about it.
          Every great piece starts with a conversation.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          href="mailto:hello@maderostudio.es"
          className="inline-block border border-primary-foreground/30 text-primary-foreground px-10 py-4 text-sm tracking-widest uppercase hover:bg-primary-foreground hover:text-foreground transition-all duration-500"
        >
          Get in touch
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
