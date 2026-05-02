import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    period: '2024 – 2028',
    title: 'B.Tech Computer Science',
    org: 'LNCT Group of Colleges',
    description: "Focusing on AI, Machine Learning, and Web Development. Maintaining a strong 8.5 CGPA while leading technical projects."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 md:py-32 px-6 md:px-8 border-y border-black/10">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-16 md:mb-24"
      >
        <span className="font-mono text-xs text-black/40">[ 02 ]</span>
        <h2 className="text-3xl md:text-6xl uppercase">Background <span className="text-italic font-sans font-light lowercase">& Education</span></h2>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-16 md:gap-32"
      >
        {experiences.map((exp, index) => (
          <motion.div key={exp.org} variants={itemVariants} className="flex flex-col md:flex-row gap-6 md:gap-16">
            <div className="md:w-1/3">
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-black/40">{exp.period}</span>
            </div>
            <div className="md:w-2/3">
              <div className="flex flex-col gap-3 md:gap-4">
                <h3 className="text-2xl md:text-4xl uppercase tracking-tighter">{exp.title}</h3>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <span className="font-mono text-xs md:text-sm uppercase tracking-wider text-zinc-500">{exp.org}</span>
                  <span className="hidden md:block w-1 h-1 rounded-full bg-black/20" />
                  <p className="font-mono text-xs md:text-sm text-zinc-400 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
