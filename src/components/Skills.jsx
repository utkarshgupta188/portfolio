import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: 'Programming',
    skills: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'C++', 'C', 'R']
  },
  {
    category: 'Data Science / AI',
    skills: ['Large Language Models', 'Data Analysis', 'PyTorch', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib']
  },
  {
    category: 'Backend / DB',
    skills: ['FastAPI', 'Node.js', 'Flask', 'MySQL', 'PostgreSQL', 'Redis', 'Firebase']
  },
  {
    category: 'Frontend / Tools',
    skills: ['React', 'Next.js', 'Vite', 'Git', 'Docker', 'Selenium', 'Postman', 'Nginx']
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="relative py-20 md:py-32 px-6 md:px-8">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-16 md:mb-24"
      >
        <span className="font-mono text-xs text-black/40">[ 03 ]</span>
        <h2 className="text-3xl md:text-6xl uppercase">Competencies <span className="text-italic font-sans font-light lowercase">& Tools</span></h2>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
      >
        {skillGroups.map((group) => (
          <motion.div key={group.category} variants={itemVariants} className="flex flex-col gap-4 md:gap-6">
            <h3 className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-black/40 border-b border-black/10 pb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="category-pill hover:bg-black hover:text-white transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>


      {/* Certifications Mini Section */}
      <div className="mt-20 md:mt-32 pt-20 md:pt-32 border-t border-black/10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:w-1/3"
          >
            <h3 className="text-xl md:text-2xl uppercase">Certifications</h3>
          </motion.div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {[
              'Postman API Fundamentals Student Expert',
              'OCI 2025 Certified Generative AI Professional',
              'Python Development & Data Science',
              'PHP for Beginners: The Complete PHP MySQL PDO Course'
            ].map((cert) => (
              <motion.div key={cert} variants={itemVariants} className="flex items-start gap-4">
                <span className="font-mono text-[10px] text-black/20 mt-1">/</span>
                <span className="text-xs md:text-sm uppercase tracking-wide text-zinc-600">{cert}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

