import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Meowly',
    category: 'Streaming Platform',
    role: 'Lead Developer',
    description: 'Modern streaming platform for anime and TV shows with Next.js and TypeScript.',
    image: '/projects/meowly.png',
    link: 'https://github.com/utkarshgupta188/meowly',
    challenge: 'Handling smooth video playback with multiple servers and managing state across tabs.',
    solution: 'Implemented a custom VideoPlayer with fallback logic and a dual-layered in-memory cache system.',
    impact: 'Seamless streaming experience with high user retention and zero lag.'
  },
  {
    title: 'GitDude',
    category: 'AI CLI Tool',
    role: 'Core Developer',
    description: 'AI-powered CLI tool that converts natural language to Git actions with multi-LLM support.',
    image: '/projects/gitdude.png',
    link: 'https://github.com/utkarshgupta188/gitdude',
    challenge: 'Converting natural language to precise Git actions safely without accidental data loss.',
    solution: 'Used advanced prompt engineering and multi-LLM support to validate commands before execution.',
    impact: 'Boosted developer productivity and reduced Git mistakes significantly.'
  },
  {
    title: 'CodeFlux',
    category: 'AI Gateway',
    role: 'System Architect',
    description: 'Intelligent AI routing gateway for autonomous agentic analysis and code management.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    link: 'https://github.com/utkarshgupta188/codeflux',
    challenge: 'Routing AI requests efficiently across multiple models while maintaining context.',
    solution: 'Built an intelligent routing gateway with autonomous agentic analysis for code management.',
    impact: 'Optimized API costs and improved response times for AI operations.'
  },
  {
    title: 'Meow CLI',
    category: 'Terminal Tool',
    role: 'Lead Developer',
    description: 'The purr-fect streamer from your terminal, engineered for fast content delivery.',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=1000',
    link: 'https://github.com/utkarshgupta188/meow-cli',
    challenge: 'Streaming content efficiently directly in the terminal environment.',
    solution: 'Engineered a lightweight streamer optimized for fast content delivery and minimal resource usage.',
    impact: 'Created a unique terminal experience for users who prefer CLI tools.'
  },
  {
    title: 'Dora Music',
    category: 'Audio Streaming',
    role: 'Full-stack Dev',
    description: 'Modern web-based music player with Glassmorphism UI and infinite radio streaming.',
    image: '/projects/dora.png',
    link: 'https://github.com/utkarshgupta188/dora-music',
    challenge: 'Creating a seamless infinite radio streaming experience with a glassmorphic UI.',
    solution: 'Leveraged modern audio APIs and optimized CSS for blur effects to ensure performance.',
    impact: 'High user engagement with smooth, continuous music playback.'
  },
  {
    title: 'Attendance Tracker',
    category: 'Data Scraper',
    role: 'Solo Developer',
    description: 'Custom API using BeautifulSoup to scrape and provide subject-wise attendance data.',
    image: '/projects/attendance.png',
    link: 'https://github.com/utkarshgupta188/lnctu',
    challenge: 'Scraping dynamic attendance data from legacy university portals reliably.',
    solution: 'Used BeautifulSoup and custom retry logic to handle slow and inconsistent server responses.',
    impact: 'Automated data collection, saving students time checking their attendance.'
  }
];

const ProjectCard = ({ project, index, onClick }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <motion.div 
      ref={containerRef}
      onClick={onClick}
      className="group block relative cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index % 2 * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900">
        <motion.img 
          style={{ scale: 1.1, y }}
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
        />
        <div className="absolute top-4 right-4 category-pill bg-white/90 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity">
          View Details
        </div>
      </div>
      
      <div className="mt-6 md:mt-8 flex flex-col gap-3 md:gap-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl md:text-3xl uppercase tracking-tight">{project.title}</h3>
            <p className="text-zinc-500 font-mono text-[10px] uppercase mt-1">
              {project.category} / {project.role}
            </p>
          </div>
          <div className="font-mono text-[10px] md:text-xs text-black/20">
            {index + 1 < 10 ? `0${index + 1}` : index + 1}
          </div>
        </div>
        <p className="text-zinc-600 text-sm md:text-base max-w-sm line-clamp-2">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-20 md:py-32 px-6 md:px-8">
      <motion.div 
        className="flex items-center gap-4 mb-16 md:mb-24"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="font-mono text-xs text-black/40">[ 01 ]</span>
        <h2 className="text-3xl md:text-6xl uppercase">Selected <span className="text-italic font-sans font-light lowercase">Works</span></h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} onClick={() => setSelectedProject(project)} />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="bg-white text-black max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-lg p-8 flex flex-col gap-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl uppercase tracking-tight font-bold">{selectedProject.title}</h3>
                  <p className="text-zinc-500 font-mono text-xs uppercase mt-1">
                    {selectedProject.category} / {selectedProject.role}
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-zinc-400 hover:text-black transition-colors text-2xl"
                >
                  ✕
                </button>
              </div>

              <div className="aspect-[16/9] bg-zinc-100 rounded-md overflow-hidden">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-contain" />
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <h4 className="font-mono text-xs uppercase text-zinc-400 mb-1">Description</h4>
                  <p className="text-sm text-zinc-700">{selectedProject.description}</p>
                </div>

                {selectedProject.challenge && (
                  <div>
                    <h4 className="font-mono text-xs uppercase text-zinc-400 mb-1">The Challenge</h4>
                    <p className="text-sm text-zinc-700">{selectedProject.challenge}</p>
                  </div>
                )}

                {selectedProject.solution && (
                  <div>
                    <h4 className="font-mono text-xs uppercase text-zinc-400 mb-1">The Solution</h4>
                    <p className="text-sm text-zinc-700">{selectedProject.solution}</p>
                  </div>
                )}

                {selectedProject.impact && (
                  <div>
                    <h4 className="font-mono text-xs uppercase text-zinc-400 mb-1">The Impact</h4>
                    <p className="text-sm text-zinc-700">{selectedProject.impact}</p>
                  </div>
                )}
              </div>

              <a 
                href={selectedProject.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-center mt-4"
              >
                View Live Project / Repository
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
