import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, Search, GitBranch, File, X, ChevronRight, ChevronDown, Settings, Bell, User, Cpu, Mail, Briefcase, FileCode } from 'lucide-react';


const ContactMd = () => (
  <div className="p-6 font-mono text-sm text-white/80 h-full overflow-y-auto">
    <div className="text-blue-400 font-bold text-xl"># Contact Me</div>
    <div className="mt-4">Feel free to reach out to me through any of the following channels:</div>
    <div className="mt-4 flex flex-col gap-2">
      <div>- <span className="text-yellow-400">Email:</span> <a href="mailto:guptautkarsh231220@gmail.com" className="text-blue-400 hover:underline">guptautkarsh231220@gmail.com</a></div>
      <div>- <span className="text-yellow-400">GitHub:</span> <a href="https://github.com/utkarshgupta188" target="_blank" className="text-blue-400 hover:underline">github.com/utkarshgupta188</a></div>
      <div>- <span className="text-yellow-400">LinkedIn:</span> <a href="https://linkedin.com/in/utkarshgupta-dev" target="_blank" className="text-blue-400 hover:underline">linkedin.com/in/utkarshgupta-dev</a></div>
    </div>
    <div className="text-blue-400 font-bold text-lg mt-6">## Let's build something cool!</div>
    <div className="text-zinc-500 mt-2">// I'm always open to new opportunities and collaborations.</div>
  </div>
);

const SkillsCss = () => (
  <div className="p-6 font-mono text-sm text-white/80 h-full overflow-y-auto">
    <div className="text-purple-400">.programming</div> {`{`}
    <div className="ml-4 text-pink-400">languages: <span className="text-white">Python, JavaScript, TypeScript, PHP, C++, C, R</span>;</div>
    {`}`}
    <br />
    <div className="text-purple-400">.data-science-ai</div> {`{`}
    <div className="ml-4 text-pink-400">skills: <span className="text-white">Large Language Models, Data Analysis, PyTorch, Scikit-learn, NumPy, Pandas, Matplotlib</span>;</div>
    {`}`}
    <br />
    <div className="text-purple-400">.backend-db</div> {`{`}
    <div className="ml-4 text-pink-400">skills: <span className="text-white">FastAPI, Node.js, Flask, MySQL, PostgreSQL, Redis, Firebase</span>;</div>
    {`}`}
    <br />
    <div className="text-purple-400">.frontend-tools</div> {`{`}
    <div className="ml-4 text-pink-400">skills: <span className="text-white">React, Next.js, Vite, Git, Docker, Selenium, Postman, Nginx</span>;</div>
    {`}`}
  </div>
);

const AboutJsx = () => (
  <div className="p-6 font-mono text-sm text-white/80 h-full overflow-y-auto">
    <div className="text-pink-400">import <span className="text-white">React</span> from <span className="text-amber-300">'react'</span>;</div>
    <br />
    <div className="text-pink-400">const <span className="text-blue-400">AboutMe</span> = () =&gt; {`{`}</div>
    <div className="ml-4 text-pink-400">const <span className="text-white">profile</span> = {`{`}</div>
    <div className="ml-8 text-pink-400">name: <span className="text-amber-300">'Utkarsh Gupta'</span>,</div>
    <div className="ml-8 text-pink-400">role: <span className="text-amber-300">'Creative Web Developer'</span>,</div>
    <div className="ml-8 text-pink-400">location: <span className="text-amber-300">'Bhopal, India'</span>,</div>
    <div className="ml-8 text-pink-400">bio: <span className="text-amber-300">'Focusing on the intersection of Full-stack Development, AI, and Human-Centric Design. Currently building intelligent systems at LNCT Group of Colleges.'</span></div>
    <div className="ml-4 text-pink-400">{`}`};</div>
    <br />
    <div className="ml-4 text-pink-400">return <span className="text-white">profile</span>;</div>
    <div className="text-pink-400">{`}`};</div>
    <br />
    <div className="text-pink-400">export default <span className="text-blue-400">AboutMe</span>;</div>
  </div>
);

const ProjectsJson = () => (
  <div className="p-6 font-mono text-sm text-white/80 h-full overflow-y-auto">
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
  <div className="p-6 font-mono text-sm text-white/80 h-full overflow-y-auto">
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

const VSCodeLayout = () => {
  const [activeFile, setActiveFile] = useState('About.jsx');
  const [openFiles, setOpenFiles] = useState(['About.jsx', 'Projects.jsx']);
  const [activeSidebar, setActiveSidebar] = useState('explorer');
  const [searchQuery, setSearchQuery] = useState('');
  const [githubData, setGithubData] = useState(null);
  const [fontSize, setFontSize] = useState(14);
  const [theme, setTheme] = useState('dark');

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
  ];

  const handleFileClick = (filename) => {
    setActiveFile(filename);
    if (!openFiles.includes(filename)) {
      setOpenFiles([...openFiles, filename]);
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

  return (
    <div className="flex flex-col h-screen font-sans overflow-hidden" style={{ backgroundColor: currentTheme.bg, color: currentTheme.text }}>
      {/* Title Bar */}
      <div className="text-xs py-1.5 px-4 flex justify-between items-center text-white/60 select-none" style={{ backgroundColor: currentTheme.title }}>
        <div className="flex items-center gap-2">
          <span className="text-blue-500 font-bold">VS</span>
          <span>Visual Studio Code - Portfolio</span>
        </div>
        <div>Utkarsh Gupta</div>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar (Icons) */}
        <div className="w-12 flex flex-col items-center justify-between py-4 select-none" style={{ backgroundColor: currentTheme.activity }}>
          <div className="flex flex-col items-center gap-6 w-full">
            <div
              className={`${activeSidebar === 'explorer' ? 'text-white border-l-2 border-blue-500' : 'text-white/40'} w-full flex justify-center py-1 cursor-pointer hover:text-white transition-colors`}
              onClick={() => setActiveSidebar('explorer')}
            >
              <Folder size={20} />
            </div>
            <div
              className={`${activeSidebar === 'search' ? 'text-white border-l-2 border-blue-500' : 'text-white/40'} w-full flex justify-center py-1 cursor-pointer hover:text-white transition-colors`}
              onClick={() => setActiveSidebar('search')}
            >
              <Search size={20} />
            </div>
            <div
              className={`${activeSidebar === 'git' ? 'text-white border-l-2 border-blue-500' : 'text-white/40'} w-full flex justify-center py-1 cursor-pointer hover:text-white transition-colors`}
              onClick={() => setActiveSidebar('git')}
            >
              <GitBranch size={20} />
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 w-full">
            <div
              className={`${activeSidebar === 'profile' ? 'text-white border-l-2 border-blue-500' : 'text-white/40'} w-full flex justify-center py-1 cursor-pointer hover:text-white transition-colors`}
              onClick={() => setActiveSidebar('profile')}
            >
              <User size={20} />
            </div>
            <div
              className={`${activeSidebar === 'settings' ? 'text-white border-l-2 border-blue-500' : 'text-white/40'} w-full flex justify-center py-1 cursor-pointer hover:text-white transition-colors`}
              onClick={() => setActiveSidebar('settings')}
            >
              <Settings size={20} />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-60 flex flex-col text-sm select-none border-r border-[#1e1e1e]" style={{ backgroundColor: currentTheme.sidebar }}>
          {activeSidebar === 'explorer' && (
            <>
              <div className="p-3 text-xs uppercase font-bold text-white/60 flex justify-between items-center">
                <span>Explorer</span>
                <span className="text-xs">...</span>
              </div>
              <div className="flex-1 overflow-y-auto">
                <div className="p-2 text-xs font-bold uppercase text-white/40 flex items-center gap-1">
                  <ChevronDown size={14} />
                  <span>PORTFOLIO</span>
                </div>
                <div className="ml-2">
                  <div className="flex items-center gap-1 p-1 text-white/60">
                    <ChevronDown size={14} />
                    <Folder size={14} className="text-blue-400" />
                    <span>src</span>
                  </div>
                  <div className="ml-4">
                    {files.map(file => (
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
              <div className="p-3 text-xs uppercase font-bold text-white/60">Source Control</div>
              <div className="p-4 text-xs text-white/40 flex flex-col gap-2">
                <div className="flex justify-between items-center text-white/60 bg-[#37373d] p-1.5 rounded">
                  <span>Changes</span>
                  <span className="bg-[#007acc] text-white px-1.5 rounded-full text-[10px]">0</span>
                </div>
                <div className="mt-2 text-zinc-500">// Your branch is up to date with origin/main.</div>
              </div>
            </>
          )}

          {activeSidebar === 'profile' && (
            <>
              <div className="p-3 text-xs uppercase font-bold text-white/60">Profile</div>
              <div className="p-4 flex flex-col gap-4 text-xs">
                <div className="flex items-center gap-3">
                  {githubData?.avatar_url ? (
                    <img src={githubData.avatar_url} alt="Avatar" className="w-10 h-10 rounded-full border border-[#007acc]" />
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
                  <div className="text-white/60 font-bold flex justify-between"><span>Developer Level:</span><span>42</span></div>
                  <div className="w-full bg-[#252526] h-1.5 mt-1 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full w-[85%]"></div>
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
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Minimap</span>
                  <div className="w-8 h-4 bg-blue-500 rounded-full relative cursor-pointer">
                    <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col overflow-hidden" style={{ backgroundColor: currentTheme.bg }}>
          {/* Tabs */}
          <div className="flex overflow-x-auto text-sm select-none" style={{ backgroundColor: currentTheme.tabs }}>
            {openFiles.map(file => {
              const fileData = files.find(f => f.name === file);
              return (
                <div
                  key={file}
                  className={`flex items-center gap-2 px-4 py-2 cursor-pointer border-r border-[#252526] ${activeFile === file ? 'text-white' : 'text-white/40 hover:bg-[#2a2a2a]'}`}
                  style={{ backgroundColor: activeFile === file ? currentTheme.bg : currentTheme.tabs }}
                  onClick={() => setActiveFile(file)}
                >
                  {fileData?.icon}
                  <span>{file}</span>
                  <span
                    className="ml-2 hover:text-white hover:bg-white/10 rounded-full w-4 h-4 flex items-center justify-center"
                    onClick={(e) => handleCloseFile(file, e)}
                  >
                    <X size={10} />
                  </span>
                </div>
              );
            })}
          </div>

          {/* Breadcrumbs */}
          <div className="text-xs py-1 px-4 text-white/40 border-b border-[#252526] select-none" style={{ backgroundColor: currentTheme.bg }}>
            src &gt; {activeFile}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto" style={{ backgroundColor: currentTheme.bg, fontSize: `${fontSize}px` }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFile}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="h-full"
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

          {/* Terminal */}
          <div className="h-40 border-t border-[#252526] flex flex-col font-mono text-xs" style={{ backgroundColor: currentTheme.bg }}>
            <div className="bg-[#252526] px-4 py-1 flex justify-between items-center text-white/60">
              <div className="flex gap-4">
                <span className="text-white border-b border-blue-500 cursor-pointer">Terminal</span>
                <span className="cursor-pointer">Output</span>
                <span className="cursor-pointer">Problems</span>
              </div>
              <span className="cursor-pointer">✕</span>
            </div>
            <div className="flex-1 p-3 overflow-y-auto text-green-400 bg-[#1e1e1e]">
              <div>PS D:\portfolio&gt; <span className="text-white">npm run dev</span></div>
              <div className="text-zinc-500">11:57:38 pm [vite] (client) hmr update ...</div>
              <div className="text-white">VITE v5.0.0 ready in 123 ms</div>
              <div>PS D:\portfolio&gt; <span className="text-white">▯</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-[#007acc] text-white text-xs px-4 py-1 flex justify-between items-center select-none">
        <div className="flex gap-4 items-center">
          <div className="bg-[#0066aa] px-2 py-0.5 flex items-center gap-1">
            <GitBranch size={12} />
            <span>main</span>
          </div>
          <span className="flex items-center gap-1"><span className="text-xs">⊗</span> 0 <span className="text-xs">⚠</span> 0</span>
        </div>
        <div className="flex gap-4 items-center">
          <span>Ln 1, Col 1</span>
          <span>Spaces: 2</span>
          <span>UTF-8</span>
          <span>React</span>
          <Bell size={12} />
        </div>
      </div>
    </div>
  );
};

export default VSCodeLayout;
