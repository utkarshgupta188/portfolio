import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="contact" className="py-32 px-8 bg-black text-white min-h-[80vh] flex flex-col justify-center relative overflow-hidden">
      {/* Background Text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.02, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[20rem] font-bold whitespace-nowrap pointer-events-none select-none"
      >
        LET'S CREATE
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl relative z-10"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-white/40">[ 04 ]</span>
          <h2 className="text-4xl md:text-6xl uppercase">Establish <span className="text-italic font-sans font-light lowercase text-zinc-400">Connection</span></h2>
        </motion.div>

        <motion.h3 variants={itemVariants} className="text-5xl md:text-8xl leading-tight mb-16">
          Have an idea? <br />
          <span className="text-zinc-500">Let's make it real.</span>
        </motion.h3>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:guptautkarsh231220@gmail.com"
            className="px-10 py-5 bg-white text-black font-mono uppercase tracking-widest text-sm hover:invert transition-all duration-500"
          >
            Initiate Email
          </motion.a>
          <div className="flex items-center gap-8 px-4">
            <motion.a
              whileHover={{ x: 5, color: '#fff' }}
              href="https://linkedin.com/in/utkarshgupta-dev"
              target="_blank"
              className="font-mono text-xs uppercase tracking-widest text-white/40 transition-colors"
            >
              LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ x: 5, color: '#fff' }}
              href="https://github.com/utkarshgupta188"
              target="_blank"
              className="font-mono text-xs uppercase tracking-widest text-white/40 transition-colors"
            >
              GitHub
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-12 left-8 right-8 flex justify-between items-end border-t border-white/10 pt-8"
      >
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">Utkarsh Gupta © 2026</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">BTech CS · BHOPAL, INDIA</span>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-white/20">
          Designed with <span className="italic">precision</span>
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;

