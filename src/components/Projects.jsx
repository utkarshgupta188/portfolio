import React from 'react';

const projects = [
  {
    title: 'MeowTV',
    category: 'Streaming Platform',
    role: 'Lead Developer',
    description: 'Modern streaming platform for anime and TV shows with Next.js and TypeScript.',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e898ad7?auto=format&fit=crop&q=80&w=1000',
    link: 'https://github.com/utkarshgupta188/meowtv'
  },
  {
    title: 'GitDude',
    category: 'AI CLI Tool',
    role: 'Core Developer',
    description: 'AI-powered CLI tool that converts natural language to Git actions with multi-LLM support.',
    image: '/projects/gitdude.png',
    link: 'https://github.com/utkarshgupta188/gitdude'
  },
  {
    title: 'CodeFlux',
    category: 'AI Gateway',
    role: 'System Architect',
    description: 'Intelligent AI routing gateway for autonomous agentic analysis and code management.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    link: 'https://github.com/utkarshgupta188/codeflux'
  },
  {
    title: 'Meow CLI',
    category: 'Terminal Tool',
    role: 'Lead Developer',
    description: 'The purr-fect streamer from your terminal, engineered for fast content delivery.',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=1000',
    link: 'https://github.com/utkarshgupta188/meow-cli'
  },
  {
    title: 'Dora Music',
    category: 'Audio Streaming',
    role: 'Full-stack Dev',
    description: 'Modern web-based music player with Glassmorphism UI and infinite radio streaming.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1000',
    link: 'https://github.com/utkarshgupta188/dora-music'
  },
  {
    title: 'Attendance Tracker',
    category: 'Data Scraper',
    role: 'Solo Developer',
    description: 'Custom API using BeautifulSoup to scrape and provide subject-wise attendance data.',
    image: '/projects/attendance.png',
    link: 'https://github.com/utkarshgupta188/attendance-tracker'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-8">
      <div className="flex items-center gap-4 mb-24 reveal">
        <span className="font-mono text-xs text-black/40">[ 01 ]</span>
        <h2 className="text-4xl md:text-6xl">Selected <span className="text-italic font-sans font-light">Works</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24">
        {projects.map((project, index) => (
          <a 
            key={project.title} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block reveal"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-200">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute top-4 right-4 category-pill bg-white/90 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity">
                View Project
              </div>
            </div>
            
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl md:text-3xl uppercase">{project.title}</h3>
                  <p className="text-zinc-500 font-mono text-xs uppercase mt-1">
                    {project.category} / {project.role}
                  </p>
                </div>
                <div className="font-mono text-xs text-black/20">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>
              </div>
              <p className="text-zinc-600 max-w-sm line-clamp-2">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
