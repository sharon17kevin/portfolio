import { motion } from "motion/react";

const Contact = () => {
  return (
    <section id="contact" className="relative bg-forest-800 py-24 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-forest-400/20 to-transparent" />
      <div className="absolute -right-20 -top-20 w-64 h-64 border border-white/[0.03] rounded-full" />
      <div className="absolute -left-10 -bottom-10 w-48 h-48 border border-white/[0.03] rounded-full" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="font-outfit text-xs tracking-[0.3em] uppercase text-forest-400 mb-4">
            Let's Connect
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-playfair text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6"
        >
          Have a project
          <br />
          <span className="italic text-forest-400">in mind?</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="editorial-rule max-w-32 mx-auto mb-8" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="font-outfit text-base md:text-lg text-white/50 max-w-lg mx-auto mb-12 leading-relaxed"
        >
          I'm always interested in hearing about new projects and opportunities.
          Whether it's AI, cloud infrastructure, or agricultural tech — let's build something meaningful.
        </motion.p>

        <motion.a
          href="mailto:sharon14kevin@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="group inline-flex items-center gap-3 font-outfit text-sm tracking-[0.2em] uppercase border border-white/20 text-white px-8 md:px-10 py-4 hover:bg-white hover:text-forest-800 transition-all duration-500"
        >
          <span>Send a Message</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
