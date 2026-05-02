import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-8 relative overflow-hidden">
      {/* Decorative Background Text for Mobile/Desktop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2 }}
        className="absolute -right-20 top-1/4 text-[10rem] md:text-[20rem] font-bold font-mono rotate-90 pointer-events-none select-none whitespace-nowrap"
      >
        PORTFOLIO '26
      </motion.div>

      <div className="max-w-6xl relative z-10">
        <motion.h1 
          className="text-5xl sm:text-8xl md:text-[10rem] leading-[1] md:leading-[0.9] tracking-tighter"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Creative <br />
          <span className="text-italic font-sans font-light lowercase">Web</span> Developer
        </motion.h1>
        
        <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.p 
            className="max-w-sm md:max-w-md text-zinc-500 text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Focusing on the intersection of Full-stack Development, AI, and Human-Centric Design. Currently building intelligent systems at LNCT Group of Colleges.
          </motion.p>
          
          <motion.div 
            className="flex flex-col gap-1 md:gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-black/40">[ Based in ]</span>
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest">Bhopal, India</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-12 left-8 md:left-1/2 md:-translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="w-px h-12 bg-black/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full bg-black"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
