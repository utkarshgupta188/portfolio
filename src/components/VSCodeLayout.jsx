import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, Search, GitBranch, File, X, ChevronRight, ChevronDown, Settings, Bell, User, Cpu, Mail, Briefcase, FileCode, Blocks, Play, Download, Plus, Undo, RotateCcw, Check, MoreHorizontal } from 'lucide-react';

const ResumeMd = () => (
  <div className="p-6 font-mono text-white/80 max-w-4xl mx-auto">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <div>
        <div className="text-2xl sm:text-3xl font-bold text-white mb-1"># Utkarsh Gupta</div>
        <div className="text-blue-400 text-base sm:text-lg">Full-Stack Developer & AI Architect</div>
      </div>
      <button 
        onClick={() => window.open('https://utkarshgupta.rf.gd/resume.pdf', '_blank')}
        className="inline-flex items-center gap-2 bg-[#007acc] hover:bg-[#005f9e] text-white px-4 py-2 rounded transition-colors font-bold uppercase text-xs border-none cursor-pointer flex-shrink-0 self-start sm:self-center"
      >
        <Download size={14} />
        Download
      </button>
    </div>
    
    <div className="text-yellow-400 font-bold text-xl mt-6 border-b border-zinc-700 pb-2 mb-4">## Experience</div>
    <div className="mb-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-white font-bold gap-1">
        <span>Software Developer (Freelance)</span>
        <span className="text-zinc-400 text-xs sm:text-sm">2023 - Present</span>
      </div>
      <div className="text-pink-400 italic text-sm">Self-Employed</div>
      <ul className="list-disc ml-6 mt-2 text-zinc-300 text-sm">
        <li>Developed high-performance streaming platforms like Meowly using Next.js.</li>
        <li>Architected scalable real-time communication systems like Omiro using Go, Redis, and WebRTC.</li>
        <li>Built AI-powered applications such as GitDude and MindMate integrating advanced LLM workflows.</li>
      </ul>
    </div>

    <div className="text-yellow-400 font-bold text-xl mt-8 border-b border-zinc-700 pb-2 mb-4">## Education</div>
    <div className="mb-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-white font-bold gap-1">
        <span>B.Tech in Computer Science</span>
        <span className="text-zinc-400 text-xs sm:text-sm">2024 - 2028</span>
      </div>
      <div className="text-pink-400 italic text-sm">LNCT Group of Colleges, Bhopal</div>
      <div className="text-zinc-300 mt-1 text-sm">Focusing on Artificial Intelligence, Machine Learning, and Web Technologies.</div>
    </div>

    <div className="text-yellow-400 font-bold text-xl mt-8 border-b border-zinc-700 pb-2 mb-4">## Core Skills</div>
    <div className="text-zinc-300 leading-relaxed">
      <span className="text-white font-bold">Languages:</span> JavaScript, TypeScript, Python, Go, C++, PHP <br/>
      <span className="text-white font-bold">Frontend & Cross-Platform:</span> React, Next.js, Tailwind CSS, Tauri, Electron <br/>
      <span className="text-white font-bold">Backend & AI:</span> Node.js, FastAPI, WebSockets, WebRTC, Local LLMs <br/>
      <span className="text-white font-bold">Databases:</span> PostgreSQL, MySQL, Redis, Firebase <br/>
      <span className="text-white font-bold">Tools & Architecture:</span> Git, Docker, Microservices, Nginx, Linux
    </div>


  </div>
);

const ContactMd = () => (
  <div className="p-6 font-mono text-white/80">
    <div className="text-blue-400 font-bold text-xl"># Contact Me</div>
    <div className="mt-4">Feel free to reach out to me through any of the following channels:</div>
    <div className="mt-4 flex flex-col gap-2">
      <div>- <span className="text-yellow-400">Email:</span> <a href="mailto:guptautkarsh231220@gmail.com" className="text-blue-400 hover:underline">guptautkarsh231220@gmail.com</a></div>
      <div>- <span className="text-yellow-400">GitHub:</span> <a href="https://github.com/utkarshgupta188" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">github.com/utkarshgupta188</a></div>
      <div>- <span className="text-yellow-400">LinkedIn:</span> <a href="https://linkedin.com/in/utkarshgupta-dev" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">linkedin.com/in/utkarshgupta-dev</a></div>
    </div>
    <div className="text-blue-400 font-bold text-lg mt-6">## Let's build something cool!</div>
    <div className="text-zinc-500 mt-2">// I'm always open to new opportunities and collaborations.</div>
  </div>
);

const HoverSkill = ({ name, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <span 
      className="relative inline-block cursor-help group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-white hover:underline decoration-white/50">{name}</span>
      {isHovered && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-64 bg-[#252526] border border-[#454545] shadow-xl rounded z-50 p-2 text-xs normal-case cursor-default text-left pointer-events-none">
          <div className="font-bold text-blue-400 mb-1 border-b border-[#454545] pb-1">{name}</div>
          <div className="text-white/80 whitespace-normal break-words">{description}</div>
        </div>
      )}
    </span>
  );
};

const SkillsCss = () => (
  <div className="p-6 font-mono text-white/80">
    <div className="text-purple-400">.programming</div> {`{`}
    <div className="ml-4 text-pink-400">languages: <span className="text-white">
      <HoverSkill name="Python" description="Used heavily in AI platforms like GitDude and CodeFlux." />,{' '}
      <HoverSkill name="JavaScript" description="Deep knowledge of ES6+, DOM manipulation, and asynchronous patterns." />,{' '}
      <HoverSkill name="TypeScript" description="Strict typing for robust, enterprise-grade Next.js applications." />,{' '}
      <HoverSkill name="Go" description="Building high-performance, concurrent backend services like Omiro." />,{' '}
      <HoverSkill name="PHP" description="Legacy maintenance and server-side logic." />,{' '}
      <HoverSkill name="C++" description="Strong fundamentals in OOP and data structures." />,{' '}
      <HoverSkill name="C" description="Low-level memory management and system programming." />,{' '}
      <HoverSkill name="R" description="Statistical computing and data visualization." />
    </span>;</div>
    {`}`}
    <br />
    <div className="text-purple-400">.data-science-ai</div> {`{`}
    <div className="ml-4 text-pink-400">skills: <span className="text-white">
      <HoverSkill name="Large Language Models" description="Expertise in integrating local and API-driven LLMs for autonomous agents." />,{' '}
      <HoverSkill name="Data Analysis" description="Web scraping (Attendance Tracker) and structured data pipelines." />,{' '}
      <HoverSkill name="PyTorch" description="Building and fine-tuning neural networks." />,{' '}
      <HoverSkill name="Scikit-learn" description="Implementing classical machine learning algorithms." />,{' '}
      <HoverSkill name="NumPy" description="High-performance numerical computations." />,{' '}
      <HoverSkill name="Pandas" description="Data manipulation and analysis." />,{' '}
      <HoverSkill name="Matplotlib" description="Creating static, animated, and interactive visualizations." />
    </span>;</div>
    {`}`}
    <br />
    <div className="text-purple-400">.backend-db</div> {`{`}
    <div className="ml-4 text-pink-400">skills: <span className="text-white">
      <HoverSkill name="FastAPI" description="Building lightning-fast Python backend APIs." />,{' '}
      <HoverSkill name="Node.js" description="Scalable event-driven JavaScript backend services." />,{' '}
      <HoverSkill name="Flask" description="Lightweight Python web frameworks." />,{' '}
      <HoverSkill name="MySQL" description="Relational database design and complex queries." />,{' '}
      <HoverSkill name="PostgreSQL" description="Advanced open-source relational databases." />,{' '}
      <HoverSkill name="Redis" description="In-memory data structures for high-speed caching." />,{' '}
      <HoverSkill name="Firebase" description="Realtime NoSQL databases and authentication." />
    </span>;</div>
    {`}`}
    <br />
    <div className="text-purple-400">.frontend-tools</div> {`{`}
    <div className="ml-4 text-pink-400">skills: <span className="text-white">
      <HoverSkill name="React" description="Building dynamic, highly interactive component-based UIs." />,{' '}
      <HoverSkill name="Next.js" description="Server-side rendering and full-stack React architecture." />,{' '}
      <HoverSkill name="Tailwind CSS" description="Utility-first styling for rapid, beautiful UI development." />,{' '}
      <HoverSkill name="Vite" description="Next-generation frontend tooling for blazing fast builds." />,{' '}
      <HoverSkill name="Git" description="Version control, branching strategies, and CI/CD pipelines." />,{' '}
      <HoverSkill name="Docker" description="Containerizing applications for consistent deployment." />,{' '}
      <HoverSkill name="Selenium" description="Automated browser testing and advanced web scraping." />,{' '}
      <HoverSkill name="Postman" description="API design, testing, and documentation." />,{' '}
      <HoverSkill name="Nginx" description="Reverse proxying and serving static assets." />
    </span>;</div>
    {`}`}
    <br />
    <div className="text-purple-400">.cross-platform</div> {`{`}
    <div className="ml-4 text-pink-400">frameworks: <span className="text-white">
      <HoverSkill name="Electron" description="Building heavy, native desktop applications using web technologies." />,{' '}
      <HoverSkill name="Tauri" description="Creating highly optimized, blazing-fast desktop apps with Rust backends." />,{' '}
      <HoverSkill name="Capacitor" description="Compiling web apps into native iOS and Android mobile apps." />
    </span>;</div>
    {`}`}
    <br />
    <div className="text-purple-400">.realtime-systems</div> {`{`}
    <div className="ml-4 text-pink-400">architecture: <span className="text-white">
      <HoverSkill name="WebSockets" description="Full-duplex bidirectional communication for real-time chat." />,{' '}
      <HoverSkill name="WebRTC" description="Peer-to-peer video, audio, and data streaming." />,{' '}
      <HoverSkill name="Microservices" description="Designing distributed, scalable backend architectures." />,{' '}
      <HoverSkill name="Pub/Sub" description="Message routing and event-driven architectures." />
    </span>;</div>
    {`}`}
  </div>
);

const AboutJsx = () => (
  <div className="p-6 font-mono text-white/80">
    <div className="text-pink-400">import <span className="text-white">React</span> from <span className="text-amber-300">'react'</span>;</div>
    <br />
    <div className="text-pink-400">const <span className="text-blue-400">AboutMe</span> = () =&gt; {`{`}</div>
    <div className="ml-4 text-pink-400">const <span className="text-white">profile</span> = {`{`}</div>
    <div className="ml-8 text-pink-400">name: <span className="text-amber-300">'Utkarsh Gupta'</span>,</div>
    <div className="ml-8 text-pink-400">role: <span className="text-amber-300">'Full-Stack Developer & AI Architect'</span>,</div>
    <div className="ml-8 text-pink-400">location: <span className="text-amber-300">'Bhopal, India'</span>,</div>
    <div className="ml-8 text-pink-400">education: <span className="text-amber-300">'B.Tech CS @ LNCT Group of Colleges'</span>,</div>
    <div className="ml-8 text-pink-400">techStack: [</div>
    <div className="ml-12 text-amber-300">'React', 'Next.js', 'FastAPI', 'Node.js', 'Python', 'TypeScript'</div>
    <div className="ml-8 text-pink-400">],</div>
    <div className="ml-8 text-pink-400">passions: [</div>
    <div className="ml-12 text-amber-300">'Scalable Systems', 'Agentic AI Workflows', 'High-Performance Streaming'</div>
    <div className="ml-8 text-pink-400">],</div>
    <div className="ml-8 text-pink-400">currentFocus: <span className="text-amber-300">`</span></div>
    <div className="ml-12 text-amber-300">Engineering production-ready AI platforms (like GitDude and CodeFlux) </div>
    <div className="ml-12 text-amber-300">and robust streaming architectures (like Meowly). I love turning</div>
    <div className="ml-12 text-amber-300">complex backend logic into seamless, intuitive human experiences.</div>
    <div className="ml-8 text-amber-300">`</div>
    <div className="ml-4 text-pink-400">{`}`};</div>
    <br />
    <div className="ml-4 text-pink-400">return <span className="text-white">profile</span>;</div>
    <div className="text-pink-400">{`}`};</div>
    <br />
    <div className="text-pink-400">export default <span className="text-blue-400">AboutMe</span>;</div>
  </div>
);

const ProjectsJson = () => (
  <div className="p-6 font-mono text-white/80">
    <div className="text-yellow-400">[</div>
    <div className="ml-4 text-yellow-400">{`{`}</div>
    <div className="ml-8"><span className="text-blue-400">"title"</span>: <span className="text-amber-300">"Meowly"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"category"</span>: <span className="text-amber-300">"Streaming Platform"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"description"</span>: <span className="text-amber-300">"Modern streaming platform for anime and TV shows with Next.js and TypeScript."</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"repo"</span>: <span className="text-amber-300">"https://github.com/utkarshgupta188/meowly"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"live"</span>: <span className="text-amber-300">"https://meowly.qzz.io"</span></div>
    <div className="ml-4 text-yellow-400">{`}`},</div>
    <div className="ml-4 text-yellow-400">{`{`}</div>
    <div className="ml-8"><span className="text-blue-400">"title"</span>: <span className="text-amber-300">"GitDude"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"category"</span>: <span className="text-amber-300">"AI CLI Tool"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"description"</span>: <span className="text-amber-300">"AI-powered CLI tool that converts natural language to Git actions with multi-LLM support."</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"repo"</span>: <span className="text-amber-300">"https://github.com/utkarshgupta188/gitdude"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"live"</span>: <span className="text-amber-300">"https://pypi.org/project/gitdude"</span></div>
    <div className="ml-4 text-yellow-400">{`}`},</div>
    <div className="ml-4 text-yellow-400">{`{`}</div>
    <div className="ml-8"><span className="text-blue-400">"title"</span>: <span className="text-amber-300">"CodeFlux"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"category"</span>: <span className="text-amber-300">"AI Gateway"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"description"</span>: <span className="text-amber-300">"Intelligent AI routing gateway for autonomous agentic analysis and code management."</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"repo"</span>: <span className="text-amber-300">"https://github.com/utkarshgupta188/codeflux"</span></div>
    <div className="ml-4 text-yellow-400">{`}`},</div>
    <div className="ml-4 text-yellow-400">{`{`}</div>
    <div className="ml-8"><span className="text-blue-400">"title"</span>: <span className="text-amber-300">"Meow CLI"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"category"</span>: <span className="text-amber-300">"Terminal Tool"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"description"</span>: <span className="text-amber-300">"The purr-fect streamer from your terminal, engineered for fast content delivery."</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"repo"</span>: <span className="text-amber-300">"https://github.com/utkarshgupta188/meow-cli"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"live"</span>: <span className="text-amber-300">"https://pypi.org/project/meowtv"</span></div>
    <div className="ml-4 text-yellow-400">{`}`},</div>
    <div className="ml-4 text-yellow-400">{`{`}</div>
    <div className="ml-8"><span className="text-blue-400">"title"</span>: <span className="text-amber-300">"Dora Music"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"category"</span>: <span className="text-amber-300">"Audio Streaming"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"description"</span>: <span className="text-amber-300">"Modern web-based music player with Glassmorphism UI and infinite radio streaming."</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"repo"</span>: <span className="text-amber-300">"https://github.com/utkarshgupta188/dora-music"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"live"</span>: <span className="text-amber-300">"https://dora-music.vercel.app"</span></div>
    <div className="ml-4 text-yellow-400">{`}`},</div>
    <div className="ml-4 text-yellow-400">{`{`}</div>
    <div className="ml-8"><span className="text-blue-400">"title"</span>: <span className="text-amber-300">"Omiro"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"category"</span>: <span className="text-amber-300">"Real-time System"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"description"</span>: <span className="text-amber-300">"Scalable real-time chat & WebRTC video matching system using Go, Redis, WebSockets, and microservices."</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"repo"</span>: <span className="text-amber-300">"https://github.com/utkarshgupta188/omiro"</span></div>
    <div className="ml-4 text-yellow-400">{`}`},</div>
    <div className="ml-4 text-yellow-400">{`{`}</div>
    <div className="ml-8"><span className="text-blue-400">"title"</span>: <span className="text-amber-300">"MindMate"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"category"</span>: <span className="text-amber-300">"AI Web App"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"description"</span>: <span className="text-amber-300">"AI-powered mental wellness companion web application."</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"repo"</span>: <span className="text-amber-300">"https://github.com/utkarshgupta188/mindmate"</span></div>
    <div className="ml-4 text-yellow-400">{`}`},</div>
    <div className="ml-4 text-yellow-400">{`{`}</div>
    <div className="ml-8"><span className="text-blue-400">"title"</span>: <span className="text-amber-300">"tgupload"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"category"</span>: <span className="text-amber-300">"Cloud Backend"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"description"</span>: <span className="text-amber-300">"Personal cloud storing files in Telegram via a bot with a FastAPI backend."</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"repo"</span>: <span className="text-amber-300">"https://github.com/utkarshgupta188/tgupload"</span></div>
    <div className="ml-4 text-yellow-400">{`}`},</div>
    <div className="ml-4 text-yellow-400">{`{`}</div>
    <div className="ml-8"><span className="text-blue-400">"title"</span>: <span className="text-amber-300">"Attendance Tracker"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"category"</span>: <span className="text-amber-300">"Data Scraper"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"description"</span>: <span className="text-amber-300">"Custom API using BeautifulSoup to scrape and provide subject-wise attendance data."</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"repo"</span>: <span className="text-amber-300">"https://github.com/utkarshgupta188/lnctu"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"live"</span>: <span className="text-amber-300">"https://lnctu.vercel.app"</span></div>
    <div className="ml-4 text-yellow-400">{`}`},</div>
    <div className="ml-4 text-yellow-400">{`{`}</div>
    <div className="ml-8"><span className="text-blue-400">"title"</span>: <span className="text-amber-300">"MeowTV"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"category"</span>: <span className="text-amber-300">"Streaming Platform"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"description"</span>: <span className="text-amber-300">"Classic streaming platform for live TV and movies."</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"repo"</span>: <span className="text-amber-300">"https://github.com/utkarshgupta188/meowtv"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"live"</span>: <span className="text-amber-300">"https://meowtv.qzz.io"</span></div>
    <div className="ml-4 text-yellow-400">{`}`}</div>
    <div className="text-yellow-400">]</div>
  </div>
);

const ExperienceJs = () => (
  <div className="p-6 font-mono text-white/80">
    <div className="text-pink-400">export const <span className="text-blue-400">getExperience</span> = () =&gt; [</div>
    <div className="ml-4 text-yellow-400">{`{`}</div>
    <div className="ml-8 text-pink-400">period: <span className="text-amber-300">'2024 – 2028'</span>,</div>
    <div className="ml-8 text-pink-400">title: <span className="text-amber-300">'B.Tech Computer Science'</span>,</div>
    <div className="ml-8 text-pink-400">org: <span className="text-amber-300">'LNCT Group of Colleges'</span>,</div>
    <div className="ml-8 text-pink-400">description: <span className="text-amber-300">'Focusing on AI, Machine Learning, and Web Development. Maintaining a strong 8.5 CGPA while leading technical projects.'</span></div>
    <div className="ml-4 text-yellow-400">{`}`}</div>
    <div className="text-pink-400">];</div>
  </div>
);

const PackageJson = () => (
  <div className="p-6 font-mono text-white/80">
    <div className="text-yellow-400">{`{`}</div>
    <div className="ml-4"><span className="text-blue-400">"name"</span>: <span className="text-amber-300">"utkarsh-portfolio"</span>,</div>
    <div className="ml-4"><span className="text-blue-400">"version"</span>: <span className="text-amber-300">"1.0.0"</span>,</div>
    <div className="ml-4"><span className="text-blue-400">"private"</span>: <span className="text-blue-400">true</span>,</div>
    <div className="ml-4"><span className="text-blue-400">"dependencies"</span>: {`{`}</div>
    <div className="ml-8"><span className="text-blue-400">"react"</span>: <span className="text-amber-300">"^18.2.0"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"react-dom"</span>: <span className="text-amber-300">"^18.2.0"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"framer-motion"</span>: <span className="text-amber-300">"^10.16.4"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"lucide-react"</span>: <span className="text-amber-300">"^0.284.0"</span></div>
    <div className="ml-4">{`}`},</div>
    <div className="ml-4"><span className="text-blue-400">"devDependencies"</span>: {`{`}</div>
    <div className="ml-8"><span className="text-blue-400">"tailwindcss"</span>: <span className="text-amber-300">"^3.4.1"</span>,</div>
    <div className="ml-8"><span className="text-blue-400">"vite"</span>: <span className="text-amber-300">"^5.0.0"</span></div>
    <div className="ml-4">{`}`}</div>
    <div className="text-yellow-400">{`}`}</div>
  </div>
);

const PackageLockJson = () => (
  <div className="p-6 font-mono text-white/80">
    <div className="text-zinc-500">// package-lock.json</div>
    <div className="text-yellow-400">{`{`}</div>
    <div className="ml-4"><span className="text-blue-400">"name"</span>: <span className="text-amber-300">"utkarsh-portfolio"</span>,</div>
    <div className="ml-4"><span className="text-blue-400">"version"</span>: <span className="text-amber-300">"1.0.0"</span>,</div>
    <div className="ml-4"><span className="text-blue-400">"lockfileVersion"</span>: <span className="text-blue-400">3</span>,</div>
    <div className="ml-4"><span className="text-blue-400">"requires"</span>: <span className="text-blue-400">true</span>,</div>
    <div className="ml-4"><span className="text-blue-400">"packages"</span>: {`{`}</div>
    <div className="ml-8"><span className="text-blue-400">""</span>: {`{`}</div>
    <div className="ml-12"><span className="text-blue-400">"name"</span>: <span className="text-amber-300">"utkarsh-portfolio"</span>,</div>
    <div className="ml-12"><span className="text-blue-400">"version"</span>: <span className="text-amber-300">"1.0.0"</span></div>
    <div className="ml-8">{`}`}</div>
    <div className="ml-4">{`}`}</div>
    <div className="text-yellow-400">{`}`}</div>
  </div>
);

const VSCodeLayout = () => {
  const [activeFile, setActiveFile] = useState('About.jsx');
  const [openFiles, setOpenFiles] = useState(['About.jsx', 'Projects.jsx']);
  const [activeSidebar, setActiveSidebar] = useState('explorer');
  const [searchQuery, setSearchQuery] = useState('');
  const [githubData, setGithubData] = useState(null);
  const [fontSize, setFontSize] = useState(14);
  const [theme, setTheme] = useState('dark');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [terminalHeight, setTerminalHeight] = useState(224);
  const terminalRef = React.useRef(null);
  const isDraggingRef = React.useRef(false);
  const [terminalLines, setTerminalLines] = useState([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [zenMode, setZenMode] = useState(false);
  const [wordWrap, setWordWrap] = useState('on');
  const [showMinimap, setShowMinimap] = useState(false);
  const [isSrcOpen, setIsSrcOpen] = useState(true);
  const [explorerMenuOpen, setExplorerMenuOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [isLockModalOpen, setIsLockModalOpen] = useState(false);

  React.useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalLines, isTerminalOpen]);

  const handleMouseMove = React.useCallback((e) => {
    if (!isDraggingRef.current) return;
    const newHeight = window.innerHeight - e.clientY;
    if (newHeight > 100 && newHeight < window.innerHeight - 150) {
      setTerminalHeight(newHeight);
    }
  }, []);

  const handleMouseUp = React.useCallback(() => {
    isDraggingRef.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }, [handleMouseMove]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    isDraggingRef.current = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  React.useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const handleRunCode = () => {
    setIsTerminalOpen(true);
    let cmd = '';
    if (activeFile.endsWith('.jsx') || activeFile.endsWith('.js')) {
      cmd = `npm run test ${activeFile}`;
    } else if (activeFile.endsWith('.css')) {
      cmd = `npm run lint:css ${activeFile}`;
    } else if (activeFile.endsWith('.md')) {
      cmd = `cat ${activeFile}`;
    } else {
      cmd = `node ${activeFile}`;
    }
    setTimeout(() => {
      handleTerminalCommand(cmd);
    }, 100);
  };


  const handleTerminalCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();
    const newLines = [...terminalLines, { type: 'cmd', text: cmd }];

    if (cleanCmd === 'clear') {
      setTerminalLines([]);
      return;
    }

    let outputs = [];
    if (cleanCmd === 'help') {
      outputs = ['Available commands: help, clear, about, projects, npm run test [file], npm run dev, cat [file], echo [text]'];
    } else if (cleanCmd === 'about') {
      outputs = ['Utkarsh Gupta - Creative Web Developer'];
    } else if (cleanCmd === 'projects') {
      outputs = ['Meowly, GitDude, CodeFlux, Meow CLI, Dora Music, Attendance Tracker, MeowTV'];
    } else if (cleanCmd.startsWith('echo ')) {
      outputs = [cmd.substring(5)];
    } else if (cleanCmd.startsWith('cat ')) {
      const file = cmd.split(' ').pop();
      const fileData = files.find(f => f.name.toLowerCase() === file.toLowerCase());
      if (fileData) {
        outputs = [fileData.content];
      } else {
        outputs = [`cat: ${file}: No such file or directory`];
      }
    } else if (cleanCmd.startsWith('npm run lint:css')) {
      const file = cmd.split(' ').pop();
      outputs = [
        `> portfolio@1.0.0 lint:css`,
        `> stylelint ${file}`,
        ``,
        `No errors found in ${file}.`
      ];
    } else if (cleanCmd.startsWith('npm run test')) {
      const file = cmd.split(' ').pop();
      if (!file.endsWith('.jsx') && !file.endsWith('.js')) {
        outputs = [`Error: ${file} is not a valid test file. Try a .jsx or .js file.`];
      } else {
        outputs = [
          `> portfolio@1.0.0 test`,
          `> jest ${file}`,
          ``,
          ` PASS  src/components/${file}`,
          `  ✓ executes flawlessly (23 ms)`,
          ``,
          `Test Suites: 1 passed, 1 total`,
          `Tests:       1 passed, 1 total`,
          `Time:        1.42 s`
        ];
      }
    } else if (cleanCmd === 'npm run dev') {
      outputs = [
        '> portfolio@1.0.0 dev',
        '> vite',
        '',
        '  VITE v5.0.0  ready in 123 ms',
        '',
        '  ➜  Local:   http://localhost:5173/'
      ];
    } else if (cleanCmd.startsWith('node ')) {
      outputs = [`node: Cannot run internal system file.`];
    } else if (cleanCmd) {
      outputs = [`Command not found: ${cmd}`];
    }

    outputs.forEach(out => {
      newLines.push({ type: 'output', text: out });
    });

    setTerminalLines(newLines);
  };

  React.useEffect(() => {
    fetch('https://api.github.com/users/utkarshgupta188')
      .then(res => res.json())
      .then(data => setGithubData(data))
      .catch(err => console.error(err));
  }, []);

  const themes = {
    dark: {
      bg: '#1e1e1e',
      sidebar: '#252526',
      activity: '#333333',
      tabs: '#2d2d2d',
      text: '#cccccc',
      title: '#323233'
    },
    synthwave: {
      bg: '#262335',
      sidebar: '#1f1c2c',
      activity: '#1c1926',
      tabs: '#201c2c',
      text: '#ff7edb',
      title: '#1f1c2c'
    },
    dracula: {
      bg: '#282a36',
      sidebar: '#21222c',
      activity: '#1e1f29',
      tabs: '#191a21',
      text: '#f8f8f2',
      title: '#21222c'
    },
    monokai: {
      bg: '#272822',
      sidebar: '#1e1f1c',
      activity: '#171814',
      tabs: '#1e1f1c',
      text: '#f8f8f2',
      title: '#171814'
    },
    github_dark: {
      bg: '#0d1117',
      sidebar: '#0d1117',
      activity: '#010409',
      tabs: '#161b22',
      text: '#c9d1d9',
      title: '#010409'
    }
  };

  const currentTheme = themes[theme] || themes.dark;

  const files = [
    {
      name: 'About.jsx',
      icon: <User size={14} className="text-blue-400" />,
      component: <AboutJsx />,
      content: "import React from 'react'; const AboutMe = () => { name: 'Utkarsh Gupta', role: 'Creative Web Developer', bio: 'LNCT Group of Colleges' }"
    },
    {
      name: 'Projects.jsx',
      icon: <FileCode size={14} className="text-yellow-400" />,
      component: <ProjectsJson />,
      content: '"title": "Meowly", "GitDude", "CodeFlux", "Meow CLI", "Dora Music", "Attendance Tracker"'
    },
    {
      name: 'Experience.js',
      icon: <Briefcase size={14} className="text-yellow-400" />,
      component: <ExperienceJs />,
      content: "B.Tech Computer Science, LNCT Group of Colleges, 2024 - 2028"
    },
    {
      name: 'Skills.css',
      icon: <Cpu size={14} className="text-blue-400" />,
      component: <SkillsCss />,
      content: "Python, JavaScript, TypeScript, PHP, React, Next.js, AI, Gemini"
    },
    {
      name: 'Contact.md',
      icon: <Mail size={14} className="text-green-400" />,
      component: <ContactMd />,
      content: "# Contact Me, Email: guptautkarsh231220@gmail.com, GitHub, LinkedIn"
    },
    {
      name: 'Resume.md',
      icon: <File size={14} className="text-purple-400" />,
      component: <ResumeMd />,
      content: "# Utkarsh Gupta - Resume\n\nExperience:\n- Freelance Developer\n\nEducation:\n- B.Tech CS (2024-2028)\n\nSkills: React, Next.js, Python, FastAPI"
    },
    {
      name: 'package.json',
      icon: <FileCode size={14} className="text-yellow-400" />,
      component: <PackageJson />,
      content: "utkarsh-portfolio, version 1.0.0, react, framer-motion, lucide-react"
    },
    {
      name: 'package-lock.json',
      icon: <FileCode size={14} className="text-yellow-400" />,
      component: <PackageLockJson />,
      content: "package-lock.json, lockfileVersion 3"
    }
  ];

  const handleFileClick = (filename) => {
    setActiveFile(filename);
    if (!openFiles.includes(filename)) {
      setOpenFiles([...openFiles, filename]);
    }
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setActiveSidebar(null);
    }
  };

  const handleCloseFile = (filename, e) => {
    e.stopPropagation();
    const updatedOpenFiles = openFiles.filter(f => f !== filename);
    setOpenFiles(updatedOpenFiles);
    if (activeFile === filename) {
      setActiveFile(updatedOpenFiles[0] || '');
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  if (isClosed) {
    return (
      <div className="h-screen w-screen bg-[#0000aa] text-white font-mono flex flex-col justify-center items-center p-6 select-none text-center">
        <div className="text-8xl font-bold mb-6">:(</div>
        <div className="text-xl sm:text-2xl mb-4 max-w-2xl">A problem has been detected and your portfolio has been shut down to prevent damage to your computer.</div>
        <div className="text-sm text-white/60 mb-10">PORTFOLIO_ERROR_SYSTEM_CRASH</div>
        <div className="text-sm mb-6">If this is the first time you've seen this stop error screen, click below to restart.</div>
        <button 
          onClick={() => setIsClosed(false)} 
          className="bg-white text-[#0000aa] px-6 py-3 font-bold uppercase cursor-pointer hover:bg-zinc-200 border-none rounded shadow-lg transition-colors"
        >
          Restart Portfolio
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen font-sans overflow-hidden relative" style={{ backgroundColor: currentTheme.bg, color: currentTheme.text }}>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
      {/* Title Bar */}
      <div className="text-xs py-1.5 px-4 flex justify-between items-center text-white/60 select-none" style={{ backgroundColor: currentTheme.title }}>
        <div className="flex items-center gap-2">
          <span className="text-blue-500 font-bold">VS</span>
          <span>Visual Studio Code - Portfolio</span>
        </div>
        <div>Utkarsh Gupta</div>
        <div className="flex gap-4 items-center">
          {zenMode && (
            <div className="cursor-pointer bg-blue-600 hover:bg-blue-500 text-white px-2 py-0.5 rounded text-[10px] uppercase font-bold" onClick={() => setZenMode(false)}>
              Exit Zen Mode
            </div>
          )}
          <div className="cursor-pointer hover:text-white" title="Run Code" onClick={handleRunCode}>
            <Play size={14} />
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] cursor-pointer" title="Close" onClick={(e) => { e.stopPropagation(); setIsClosed(true); }} />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] cursor-pointer" title="Minimize" onClick={(e) => { e.stopPropagation(); setIsLockModalOpen(true); }} />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] cursor-pointer" title="Toggle Fullscreen" onClick={toggleFullscreen} />
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar (Icons) */}
        <div className={`w-12 flex flex-col items-center justify-between py-4 select-none ${zenMode ? 'hidden' : ''}`} style={{ backgroundColor: currentTheme.activity }}>
          <div className="flex flex-col items-center gap-6 w-full">
            <div
              className={`${activeSidebar === 'explorer' ? 'text-white border-l-2 border-blue-500' : 'text-white/40'} w-full flex justify-center py-1 cursor-pointer hover:text-white transition-colors`}
              onClick={() => setActiveSidebar(activeSidebar === 'explorer' ? null : 'explorer')}
            >
              <Folder size={20} />
            </div>
            <div
              className={`${activeSidebar === 'search' ? 'text-white border-l-2 border-blue-500' : 'text-white/40'} w-full flex justify-center py-1 cursor-pointer hover:text-white transition-colors`}
              onClick={() => setActiveSidebar(activeSidebar === 'search' ? null : 'search')}
            >
              <Search size={20} />
            </div>
            <div
              className={`${activeSidebar === 'git' ? 'text-white border-l-2 border-blue-500' : 'text-white/40'} w-full flex justify-center py-1 cursor-pointer hover:text-white transition-colors`}
              onClick={() => setActiveSidebar(activeSidebar === 'git' ? null : 'git')}
            >
              <GitBranch size={20} />
            </div>
            <div
              className={`${activeSidebar === 'extensions' ? 'text-white border-l-2 border-blue-500' : 'text-white/40'} w-full flex justify-center py-1 cursor-pointer hover:text-white transition-colors`}
              onClick={() => setActiveSidebar(activeSidebar === 'extensions' ? null : 'extensions')}
            >
              <Blocks size={20} />
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 w-full">
            <div
              className={`${activeSidebar === 'profile' ? 'text-white border-l-2 border-blue-500' : 'text-white/40'} w-full flex justify-center py-1 cursor-pointer hover:text-white transition-colors`}
              onClick={() => setActiveSidebar(activeSidebar === 'profile' ? null : 'profile')}
            >
              <User size={20} />
            </div>
            <div
              className={`${activeSidebar === 'settings' ? 'text-white border-l-2 border-blue-500' : 'text-white/40'} w-full flex justify-center py-1 cursor-pointer hover:text-white transition-colors`}
              onClick={() => setActiveSidebar(activeSidebar === 'settings' ? null : 'settings')}
            >
              <Settings size={20} />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className={`${activeSidebar ? 'w-full md:w-60 flex' : 'hidden'} flex-col text-sm select-none border-r border-[#1e1e1e] ${zenMode ? 'hidden' : ''}`} style={{ backgroundColor: currentTheme.sidebar }}>
          {activeSidebar === 'explorer' && (
            <>
              <div className="p-3 text-xs uppercase font-bold text-white/60 flex justify-between items-center relative">
                <span>Explorer</span>
                <span 
                  className="text-xs cursor-pointer hover:bg-white/10 px-1 rounded transition-colors"
                  onClick={() => setExplorerMenuOpen(!explorerMenuOpen)}
                >
                  ...
                </span>
                {explorerMenuOpen && (
                  <div className="absolute top-8 right-2 bg-[#252526] border border-[#333] shadow-lg rounded py-1 z-50 min-w-[120px]">
                    <div 
                      className="px-4 py-1 text-white/80 hover:bg-[#007acc] hover:text-white cursor-pointer normal-case"
                      onClick={() => {
                        setIsSrcOpen(false);
                        setExplorerMenuOpen(false);
                      }}
                    >
                      Collapse Folders
                    </div>
                  </div>
                )}
              </div>
              <div className="flex-1 overflow-y-auto">
                <div className="p-2 text-xs font-bold uppercase text-white/40 flex items-center gap-1">
                  <ChevronDown size={14} />
                  <span>PORTFOLIO</span>
                </div>
                <div className="ml-2">
                  <div 
                    className="flex items-center gap-1 p-1 text-white/60 cursor-pointer hover:bg-[#37373d]"
                    onClick={() => setIsSrcOpen(!isSrcOpen)}
                  >
                    {isSrcOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    <Folder size={14} className="text-blue-400" />
                    <span>src</span>
                  </div>
                  {isSrcOpen && (
                    <div className="ml-4">
                      {files.filter(f => !f.name.endsWith('.json')).map(file => (
                        <div
                          key={file.name}
                          className={`p-1 cursor-pointer flex items-center gap-2 hover:bg-[#37373d] ${activeFile === file.name ? 'bg-[#37373d] text-white' : 'text-white/60'}`}
                          onClick={() => handleFileClick(file.name)}
                        >
                          <span className="ml-2">{file.icon}</span>
                          <span>{file.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {files.filter(f => f.name.endsWith('.json')).map(file => (
                    <div
                      key={file.name}
                      className={`p-1 cursor-pointer flex items-center gap-2 hover:bg-[#37373d] ${activeFile === file.name ? 'bg-[#37373d] text-white' : 'text-white/60'}`}
                      onClick={() => handleFileClick(file.name)}
                    >
                      <span className="ml-2">{file.icon}</span>
                      <span>{file.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeSidebar === 'search' && (
            <>
              <div className="p-3 text-xs uppercase font-bold text-white/60">Search</div>
              <div className="p-4 flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Search files..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#3c3c3c] text-white p-1.5 text-xs border border-[#555555] focus:border-[#007acc] focus:outline-none"
                />
                <div className="text-xs text-white/40 mt-2">
                  {searchQuery ? (
                    <div>
                      Found in {files.filter(f =>
                        f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        f.content.toLowerCase().includes(searchQuery.toLowerCase())
                      ).length} files:
                      <div className="mt-2 flex flex-col gap-1">
                        {files.filter(f =>
                          f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          f.content.toLowerCase().includes(searchQuery.toLowerCase())
                        ).map(f => (
                          <div key={f.name} className="text-blue-400 cursor-pointer hover:underline" onClick={() => handleFileClick(f.name)}>
                            {f.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    "Type to search files..."
                  )}
                </div>
              </div>
            </>
          )}

          {activeSidebar === 'git' && (
            <>
              <div className="p-3 text-xs uppercase font-bold text-white/60 flex justify-between items-center">
                <span>Source Control</span>
                <div className="flex gap-2 text-white/40">
                  <RotateCcw size={14} className="cursor-pointer hover:text-white" title="Refresh" />
                  <Check size={14} className="cursor-pointer hover:text-white" title="Commit" />
                  <MoreHorizontal size={14} className="cursor-pointer hover:text-white" />
                </div>
              </div>
              <div className="p-3 text-xs flex flex-col gap-3">
                {/* Commit Message Box */}
                <div className="flex flex-col gap-2">
                  <textarea
                    placeholder="Message (Ctrl+Enter to commit)"
                    className="w-full bg-[#3c3c3c] text-white p-2 text-xs border border-[#555555] focus:border-[#007acc] focus:outline-none resize-none h-16 rounded"
                  />
                  <button className="bg-[#007acc] hover:bg-[#005f9e] text-white py-1 rounded text-xs font-bold transition-colors">
                    Commit
                  </button>
                </div>

                {/* Changes List (Empty) */}
                <div>
                  <div className="flex justify-between items-center text-white/60 text-xs font-bold uppercase mb-1">
                    <div className="flex items-center gap-1">
                      <ChevronDown size={12} />
                      <span>Changes</span>
                    </div>
                    <span className="bg-[#37373d] text-white/40 px-1.5 rounded-full text-[10px]">0</span>
                  </div>
                  
                  <div className="text-zinc-500 italic text-center py-4 text-[11px]">
                    No changes detected. Your branch is up to date with origin/main.
                  </div>
                </div>
              </div>
            </>
          )}

          {activeSidebar === 'extensions' && (
            <>
              <div className="p-3 text-xs uppercase font-bold text-white/60 flex justify-between items-center">
                <span>Extensions</span>
                <span className="text-xs">...</span>
              </div>
              <div className="px-3 mb-2">
                <input 
                  type="text" 
                  placeholder="Search Extensions in Marketplace" 
                  className="w-full bg-[#3c3c3c] text-white p-1.5 text-xs border border-[#555555] focus:outline-none focus:border-blue-500 rounded"
                />
              </div>
              <div className="flex-1 overflow-y-auto no-scrollbar">
                <div className="px-3 py-1 text-xs font-bold uppercase text-white/40 flex items-center gap-1 cursor-pointer">
                  <ChevronDown size={12} />
                  <span>Installed</span>
                </div>
                <div className="flex flex-col text-xs">
                  {/* Extension 1 */}
                  <div className="flex items-center gap-3 px-3 py-2 hover:bg-[#37373d] cursor-pointer group">
                    <div className="w-10 h-10 bg-[#2a2a2a] flex items-center justify-center rounded-md text-yellow-500 flex-shrink-0 border border-[#444]">
                      <FileCode size={20} />
                    </div>
                    <div className="flex-1 flex flex-col min-w-0">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-white group-hover:text-blue-400 truncate">JavaScript (ES6)</span>
                        <span className="text-white/40 text-[10px] flex-shrink-0">v2.0.4</span>
                      </div>
                      <div className="text-white/60 text-[11px] truncate">ECMAScript 6 code snippets</div>
                      <div className="text-white/40 text-[10px] flex items-center gap-1 mt-0.5">
                        <span className="truncate">Microsoft</span>
                        <span className="text-yellow-400">★ 4.8</span>
                        <span>(12M)</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Extension 2 */}
                  <div className="flex items-center gap-3 px-3 py-2 hover:bg-[#37373d] cursor-pointer group">
                    <div className="w-10 h-10 bg-[#2a2a2a] flex items-center justify-center rounded-md text-blue-500 flex-shrink-0 border border-[#444]">
                      <Cpu size={20} />
                    </div>
                    <div className="flex-1 flex flex-col min-w-0">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-white group-hover:text-blue-400 truncate">Python</span>
                        <span className="text-white/40 text-[10px] flex-shrink-0">v2024.2.1</span>
                      </div>
                      <div className="text-white/60 text-[11px] truncate">IntelliSense, Linting, Debugging</div>
                      <div className="text-white/40 text-[10px] flex items-center gap-1 mt-0.5">
                        <span className="truncate">Microsoft</span>
                        <span className="text-yellow-400">★ 4.5</span>
                        <span>(85M)</span>
                      </div>
                    </div>
                  </div>

                  {/* Extension 3 */}
                  <div className="flex items-center gap-3 px-3 py-2 hover:bg-[#37373d] cursor-pointer group">
                    <div className="w-10 h-10 bg-[#2a2a2a] flex items-center justify-center rounded-md text-cyan-500 flex-shrink-0 border border-[#444]">
                      <Blocks size={20} />
                    </div>
                    <div className="flex-1 flex flex-col min-w-0">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-white group-hover:text-blue-400 truncate">React ES7+</span>
                        <span className="text-white/40 text-[10px] flex-shrink-0">v4.4.5</span>
                      </div>
                      <div className="text-white/60 text-[11px] truncate">Snippets and search shortcuts</div>
                      <div className="text-white/40 text-[10px] flex items-center gap-1 mt-0.5">
                        <span className="truncate">dsznajder</span>
                        <span className="text-yellow-400">★ 4.7</span>
                        <span>(5M)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeSidebar === 'profile' && (
            <>
              <div className="p-3 text-xs uppercase font-bold text-white/60">Profile</div>
              <div className="p-4 flex flex-col gap-4 text-xs">
                <div className="flex items-center gap-3">
                  {githubData?.avatar_url ? (
                    <img src={githubData.avatar_url} alt="Utkarsh Gupta profile photo" loading="lazy" className="w-10 h-10 rounded-full border border-[#007acc]" />
                  ) : (
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">UG</div>
                  )}
                  <div>
                    <div className="font-bold text-white">{githubData?.name || 'Utkarsh Gupta'}</div>
                    <div className="text-white/40">@{githubData?.login || 'utkarshgupta188'}</div>
                  </div>
                </div>
                <div className="border-t border-[#3c3c3c] pt-2">
                  <div className="text-white/60 mb-1">Bio:</div>
                  <div className="text-white/40 italic">"{githubData?.bio || 'Coding the future...'}"</div>
                </div>
                <div className="text-xs text-white/40 mt-2 flex flex-col gap-1">
                  <div className="flex justify-between"><span>Public Repos:</span><span className="text-white">{githubData?.public_repos || 0}</span></div>

                  <div className="flex justify-between"><span>Followers:</span><span className="text-white">{githubData?.followers || 0}</span></div>
                  <div className="flex justify-between"><span>Following:</span><span className="text-white">{githubData?.following || 0}</span></div>
                  <div className="flex justify-between border-t border-[#3c3c3c] pt-1 mt-1"><span>Total Stars:</span><span className="text-yellow-400">★ 128</span></div>
                  <div className="flex justify-between"><span>Top Language:</span><span className="text-blue-400">JavaScript</span></div>
                  <div className="flex justify-between"><span>Contributions:</span><span className="text-green-400">1,234</span></div>
                </div>
                <div className="bg-[#3c3c3c] p-2 rounded mt-2">
                  <div className="text-white/60 font-bold mb-2">Coding Activity (7 Days)</div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-12 text-right">React</div>
                      <div className="flex-1 bg-[#252526] h-1.5 rounded-full overflow-hidden"><div className="bg-cyan-500 h-full w-[65%]"></div></div>
                      <div className="w-8 text-right text-white/40">18h</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-12 text-right">Python</div>
                      <div className="flex-1 bg-[#252526] h-1.5 rounded-full overflow-hidden"><div className="bg-blue-500 h-full w-[45%]"></div></div>
                      <div className="w-8 text-right text-white/40">12h</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-12 text-right">CSS</div>
                      <div className="flex-1 bg-[#252526] h-1.5 rounded-full overflow-hidden"><div className="bg-pink-500 h-full w-[25%]"></div></div>
                      <div className="w-8 text-right text-white/40">7h</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeSidebar === 'settings' && (
            <>
              <div className="p-3 text-xs uppercase font-bold text-white/60">Settings</div>
              <div className="p-4 flex flex-col gap-4 text-xs">
                <div>
                  <div className="text-white/60 mb-1">Theme</div>
                  <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className="w-full bg-[#3c3c3c] text-white p-1.5 text-xs border border-[#555555] focus:outline-none"
                  >
                    <option value="dark">VS Dark (Default)</option>
                    <option value="synthwave">Synthwave '84</option>
                    <option value="dracula">Dracula Official</option>
                    <option value="monokai">Monokai Pro</option>
                    <option value="github_dark">GitHub Dark</option>

                  </select>
                </div>
                <div>
                  <div className="text-white/60 mb-1">Font Size ({fontSize}px)</div>
                  <input
                    type="range"
                    min="10"
                    max="18"
                    value={fontSize}
                    onChange={(e) => setFontSize(parseInt(e.target.value))}
                    className="w-full cursor-pointer"
                  />
                </div>
                <div>
                  <div className="text-white/60 mb-1">Word Wrap</div>
                  <select
                    value={wordWrap}
                    onChange={(e) => setWordWrap(e.target.value)}
                    className="w-full bg-[#3c3c3c] text-white p-1.5 text-xs border border-[#555555] focus:outline-none"
                  >
                    <option value="off">Off</option>
                    <option value="on">On</option>
                  </select>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-white/60">Zen Mode</span>
                  <div
                    className={`w-8 h-4 rounded-full relative cursor-pointer ${zenMode ? 'bg-blue-500' : 'bg-[#555555]'}`}
                    onClick={() => setZenMode(!zenMode)}
                  >
                    <div className={`w-3 h-3 bg-white rounded-full absolute top-0.5 transition-all ${zenMode ? 'right-0.5' : 'left-0.5'}`}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-white/60">Minimap</span>
                  <div
                    className={`w-8 h-4 rounded-full relative cursor-pointer ${showMinimap ? 'bg-blue-500' : 'bg-[#555555]'}`}
                    onClick={() => setShowMinimap(!showMinimap)}
                  >
                    <div className={`w-3 h-3 bg-white rounded-full absolute top-0.5 transition-all ${showMinimap ? 'right-0.5' : 'left-0.5'}`}></div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Main Editor Area */}
        <div className={`flex-1 flex flex-col overflow-hidden ${activeSidebar ? 'hidden md:flex' : 'flex'}`} style={{ backgroundColor: currentTheme.bg }}>
          {/* Tabs */}
          <div className="flex overflow-x-auto text-sm select-none no-scrollbar" style={{ backgroundColor: currentTheme.tabs }}>
            {openFiles.map(file => (
              <div
                key={file}
                className={`flex items-center gap-2 px-4 py-2 cursor-pointer border-r border-[#252526] ${activeFile === file ? 'text-white' : 'text-white/40 hover:bg-[#2a2a2a]'}`}
                style={{ backgroundColor: activeFile === file ? currentTheme.bg : currentTheme.tabs }}
                onClick={() => setActiveFile(file)}
              >
                {files.find(f => f.name === file)?.icon}
                <span>{file}</span>
                <span
                  className="ml-2 hover:text-white hover:bg-white/10 rounded-full w-4 h-4 flex items-center justify-center"
                  onClick={(e) => handleCloseFile(file, e)}
                >
                  <X size={10} />
                </span>
              </div>
            ))}
          </div>

          {/* Breadcrumbs */}
          <div className="text-xs py-1 px-4 text-white/40 border-b border-[#252526] select-none" style={{ backgroundColor: currentTheme.bg }}>
            src &gt; {activeFile}
          </div>

          {/* Content */}
          <div className="flex-1 flex overflow-hidden relative" style={{ backgroundColor: currentTheme.bg }}>
            <div className={`flex-1 overflow-y-auto ${wordWrap === 'off' ? 'whitespace-nowrap overflow-x-auto' : 'break-words whitespace-pre-wrap'}`} style={{ fontSize: `${fontSize}px` }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFile}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className={`h-full ${wordWrap === 'off' ? 'min-w-max' : 'w-full'}`}
                >
                  {files.find(f => f.name === activeFile)?.component || (
                    <div className="flex flex-col items-center justify-center h-full text-white/20 gap-4">
                      <span className="text-6xl font-bold">VS</span>
                      <span>Select a file to view</span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            {showMinimap && (
              <div className="w-16 md:w-24 h-full border-l border-[#252526] bg-[#1e1e1e] opacity-50 hidden sm:block overflow-hidden relative select-none pointer-events-none">
                <div className="absolute top-0 right-0 w-[500%] h-[500%] transform origin-top-left scale-[0.2] text-[10px] text-white/40 leading-tight pointer-events-none opacity-50">
                  {files.find(f => f.name === activeFile)?.component}
                </div>
              </div>
            )}
          </div>

          {/* Terminal */}
          {isTerminalOpen && (
            <div className="flex flex-col font-mono text-xs border-t border-[#252526] relative" style={{ backgroundColor: currentTheme.bg, height: `${terminalHeight}px` }}>
              <div
                className="absolute top-0 left-0 w-full h-1.5 cursor-row-resize z-50 hover:bg-blue-500 transition-colors"
                onMouseDown={handleMouseDown}
              />
              <div className="bg-[#252526] px-4 py-1 flex justify-between items-center text-white/60 pt-2">
                <div className="flex gap-4">
                  <span className="text-white border-b border-blue-500 cursor-pointer">Terminal</span>
                  <span className="cursor-pointer">Output</span>
                  <span className="cursor-pointer">Problems</span>
                </div>
                <span className="cursor-pointer hover:text-white" onClick={() => setIsTerminalOpen(false)}>✕</span>
              </div>
              <div className="flex-1 p-3 overflow-y-auto font-mono text-green-400 whitespace-pre-wrap" style={{ backgroundColor: currentTheme.bg }} ref={terminalRef}>
                {terminalLines.map((line, index) => (
                  <div key={index}>
                    {line.type === 'cmd' ? (
                      <span>PS D:\portfolio&gt; <span className="text-white">{line.text}</span></span>
                    ) : (
                      <span className={line.type === 'output' ? 'text-zinc-500' : 'text-white'}>{line.text}</span>
                    )}
                  </div>
                ))}
                <div className="flex">
                  <span>PS D:\portfolio&gt;&nbsp;</span>
                  <input
                    type="text"
                    value={currentCommand}
                    onChange={(e) => setCurrentCommand(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleTerminalCommand(currentCommand);
                        setCurrentCommand('');
                      }
                    }}
                    className="flex-1 bg-transparent text-white focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-[#007acc] text-white text-xs px-4 py-1 flex justify-between items-center select-none">
        <div className="flex gap-4 items-center">
          <div className="bg-[#0066aa] px-2 py-0.5 flex items-center gap-1">
            <GitBranch size={12} />
            <span>main</span>
          </div>
          <span className="hidden sm:flex items-center gap-1"><span className="text-xs">⊗</span> 0 <span className="text-xs">⚠</span> 0</span>
        </div>
        <div className="flex gap-4 items-center whitespace-nowrap">
          <span className="hidden sm:inline">Ln 1, Col 1</span>
          <span className="hidden sm:inline">Spaces: 2</span>
          <span className="hidden sm:inline">UTF-8</span>
          <span>{
            activeFile.endsWith('.jsx') ? 'JavaScript React' :
            activeFile.endsWith('.js') ? 'JavaScript' :
            activeFile.endsWith('.md') ? 'Markdown' :
            activeFile.endsWith('.css') ? 'CSS' :
            activeFile.endsWith('.json') ? 'JSON' : 'Plain Text'
          }</span>
          <Bell size={12} />
        </div>
      </div>

      {isLockModalOpen && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
          <div className="bg-[#252526] border border-[#333] shadow-2xl rounded-lg p-6 max-w-sm w-full text-white font-sans">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-full text-white font-bold text-xl flex-shrink-0">
                !
              </div>
              <div className="font-bold text-lg">System Restriction</div>
            </div>
            <div className="text-white/80 text-sm mb-6">
              This window is locked and cannot be minimized. Contact administrator to use it.
            </div>
            <div className="flex justify-end">
              <button 
                onClick={() => setIsLockModalOpen(false)}
                className="bg-[#007acc] hover:bg-[#005f9e] text-white px-5 py-1.5 rounded text-sm font-bold cursor-pointer transition-colors border-none"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VSCodeLayout;
