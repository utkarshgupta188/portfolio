import { Scroll } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

export default function OverlayUI() {
    const fadeUp = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: false, amount: 0.4 },
        transition: { duration: 0.8, ease: "easeOut" }
    }

    const staggerContainer = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: false, amount: 0.2 },
        transition: { staggerChildren: 0.2 }
    }

    const fadeItem = {
        initial: { opacity: 0, x: -20 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.5 }
    }

    return (
        <Scroll html style={{ width: '100%' }}>

            {/* Page 1 (0-100vh) - Hero */}
            <div className="w-full h-screen flex flex-col justify-center px-8 md:px-24 lg:px-40">
                <motion.div
                    {...fadeUp}
                    className="max-w-3xl"
                >
                    <h1 className="text-5xl md:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-4 drop-shadow-[0_0_25px_rgba(45,212,191,0.6)]">
                        Utkarsh Gupta
                    </h1>
                    <h2 className="text-xl md:text-2xl text-cyan-400 font-mono tracking-widest mb-6 border-l-4 border-cyan-500 pl-4">
                        DATA SCIENCE & LLM ENTHUSIAST
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed glass-panel p-6 border border-white/10 rounded-xl bg-black/40 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
                        Contributor with expertise in Data Science and LLMs. Passionate about AI, ML, and web development. Exploring how technology can solve real problems and bring ideas to life through code.
                    </p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="text-xs text-slate-500 font-mono mt-12 uppercase tracking-widest animate-pulse flex items-center gap-2"
                    >
                        <span className="w-8 h-[1px] bg-slate-500"></span> Scroll to traverse the topology
                    </motion.div>
                </motion.div>
            </div>

            {/* Page 2 (100-200vh) - About Me */}
            <div className="w-full h-screen flex flex-col justify-center px-8 md:px-24 lg:px-40">
                <motion.div {...fadeUp} className="max-w-3xl">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-purple-400 mb-6 drop-shadow-[0_0_15px_rgba(192,132,252,0.5)]">
                        Summary
                    </h2>
                    <div className="glass-panel p-8 border border-purple-500/20 bg-black/50 backdrop-blur-lg rounded-2xl shadow-[0_0_30px_rgba(192,132,252,0.1)] text-left flex flex-col gap-4">
                        <p className="text-slate-300 text-lg leading-relaxed">
                            I'm <span className="text-cyan-400 font-semibold">Utkarsh Gupta</span>, a BTech Computer Science student at LNCT Group of Colleges, passionate about AI, ML, and web development. I love exploring how technology can solve real problems and bring ideas to life through code.
                        </p>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            I actively participate in hackathons, hands-on projects, and IoT experiments to keep learning and improving my skills.
                        </p>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            Always curious and open to collaboration, I enjoy connecting with people who share a passion for innovation and tech.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Page 3 (200-300vh) - Experience & Education */}
            <div className="w-full h-screen flex flex-col justify-center px-8 md:px-24 lg:px-40">
                <motion.div {...fadeUp} className="max-w-3xl">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-blue-400 mb-10 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]">
                        Trajectory
                    </h2>

                    <motion.div
                        {...staggerContainer}
                        className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500/50 before:to-transparent"
                    >
                        {/* Item 1 - Education */}
                        <motion.div variants={fadeItem} className="relative flex items-center group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-cyan-500/50 bg-slate-900 text-cyan-500 shadow-[0_0_10px_rgba(45,212,191,0.2)] shrink-0 z-10 transition-transform group-hover:scale-110">
                            </div>
                            <div className="ml-8 w-full glass-panel p-6 border border-white/5 bg-black/40 backdrop-blur-md rounded-xl hover:border-cyan-500/30 transition-colors pointer-events-auto">
                                <div className="flex flex-col mb-2">
                                    <span className="text-cyan-400 font-mono text-sm mb-1">Sep 2024 - Sep 2028</span>
                                    <h3 className="text-2xl font-bold text-white">B.Tech Computer Science</h3>
                                </div>
                                <h4 className="text-cyan-300 font-mono text-sm mb-3">LNCT Group of Colleges</h4>
                                <p className="text-slate-400 text-sm">Bachelor's degree in Computer Science, focusing on foundational principles, programming, data structures, and emerging technologies like AI/ML.</p>
                            </div>
                        </motion.div>

                        {/* Item 2 - Education High School */}
                        <motion.div variants={fadeItem} className="relative flex items-center group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-purple-500/50 bg-slate-900 text-purple-500 shadow-[0_0_10px_rgba(192,132,252,0.2)] shrink-0 z-10 transition-transform group-hover:scale-110">
                            </div>
                            <div className="ml-8 w-full glass-panel p-6 border border-white/5 bg-black/40 backdrop-blur-md rounded-xl hover:border-purple-500/30 transition-colors pointer-events-auto">
                                <div className="flex flex-col mb-2">
                                    <span className="text-purple-400 font-mono text-sm mb-1">2020 - 2023</span>
                                    <h3 className="text-2xl font-bold text-white">High School (Class 10 & 12, PCM)</h3>
                                </div>
                                <h4 className="text-purple-300 font-mono text-sm mb-3">DAV Schools Network</h4>
                                <p className="text-slate-400 text-sm">Completed Class 12 with a focus on Physics, Chemistry, and Mathematics (April 2022 - March 2023), and Class 10 (April 2020 - April 2021).</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Page 4 (300-400vh) - Skills */}
            <div className="w-full h-screen flex flex-col justify-center px-8 md:px-24 lg:px-40">
                <motion.div {...fadeUp} className="max-w-3xl w-full">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-cyan-400 mb-10 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]">
                        Competencies
                    </h2>

                    <motion.div {...staggerContainer} className="space-y-8 flex flex-col items-start pointer-events-auto">
                        {/* Domain 1 - Skills */}
                        <motion.div variants={fadeItem} className="w-full text-left">
                            <h3 className="text-xl font-mono text-purple-400 mb-4 inline-block">Top Skills</h3>
                            <Separator className="bg-purple-500/20 mb-4" />
                            <div className="flex flex-wrap gap-2 mt-2">
                                {['Data Science', 'Data Analysis', 'Large Language Models (LLMs)', 'AI & ML', 'Python', 'PHP & MySQL'].map(skill => (
                                    <Badge key={skill} variant="outline" className="px-4 py-2 bg-slate-900/50 border-purple-500/30 text-slate-200 text-xs font-mono backdrop-blur-sm hover:border-cyan-400 hover:bg-slate-800 transition-all cursor-default">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>

                        {/* Domain 2 - Extra Tools */}
                        <motion.div variants={fadeItem} className="w-full text-left">
                            <h3 className="text-xl font-mono text-cyan-400 mb-4 inline-block">Tech & Platforms</h3>
                            <Separator className="bg-cyan-500/20 mb-4" />
                            <div className="flex flex-wrap gap-2 mt-2">
                                {['Web Development', 'Internet of Things (IoT)', 'Postman API', 'Oracle Cloud Infrastructure'].map(skill => (
                                    <Badge key={skill} variant="outline" className="px-4 py-2 bg-slate-900/50 border-cyan-500/30 text-slate-200 text-xs font-mono backdrop-blur-sm hover:border-purple-400 hover:bg-slate-800 transition-all cursor-default">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>

                        {/* Domain 3 - Certifications */}
                        <motion.div variants={fadeItem} className="w-full text-left mt-4">
                            <h3 className="text-xl font-mono text-blue-400 mb-4 inline-block">Certifications</h3>
                            <Separator className="bg-blue-500/20 mb-4" />
                            <div className="flex flex-col gap-3 mt-2 text-left">
                                {['Oracle Cloud Infrastructure 2025 Certified Generative AI Professional', 'Python Development & Data Science: Variables and Data Types', 'PHP for Beginners: The Complete PHP MySQL PDO Course', 'Postman Flows - Beginner', 'Introduction to IoT'].map(cert => (
                                    <p key={cert} className="text-sm text-slate-300 font-mono py-1 flex items-start gap-3">
                                        <span className="text-blue-500 mt-0.5">▹</span> {cert}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Page 5 (400-500vh) - Projects */}
            <div className="w-full min-h-screen py-24 flex flex-col justify-center px-8 md:px-24 lg:px-40">
                <motion.div {...fadeUp} className="max-w-5xl">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-10 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">
                        Select Projects
                    </h2>
                    <motion.div {...staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6 pointer-events-auto">

                        {/* Project 1 - MeowTV */}
                        <motion.a variants={fadeItem} href="https://github.com/utkarshgupta188/meowtv" target="_blank" rel="noreferrer" className="glass-panel p-6 border border-white/5 bg-black/50 backdrop-blur-xl rounded-2xl hover:border-cyan-500/40 hover:-translate-y-2 transition-all group shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_30px_rgba(45,212,191,0.15)] relative overflow-hidden block">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">MeowTV</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 group-hover:text-cyan-400 transition-colors"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </div>
                            <p className="text-slate-400 mb-6 text-sm leading-relaxed">A modern streaming platform built with Next.js and TypeScript that provides seamless access to anime, cartoons, and TV shows from multiple providers.</p>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary" className="bg-cyan-900/40 text-cyan-300 hover:bg-cyan-800/60 font-mono border border-cyan-500/30">Next.js</Badge>
                                <Badge variant="secondary" className="bg-cyan-900/40 text-cyan-300 hover:bg-cyan-800/60 font-mono border border-cyan-500/30">TypeScript</Badge>
                                <Badge variant="secondary" className="bg-cyan-900/40 text-cyan-300 hover:bg-cyan-800/60 font-mono border border-cyan-500/30">Streaming</Badge>
                            </div>
                        </motion.a>

                        {/* Project 2 - Meow CLI */}
                        <motion.a variants={fadeItem} href="https://github.com/utkarshgupta188/meow-cli" target="_blank" rel="noreferrer" className="glass-panel p-6 border border-white/5 bg-black/50 backdrop-blur-xl rounded-2xl hover:border-purple-500/40 hover:-translate-y-2 transition-all group shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_30px_rgba(192,132,252,0.15)] relative overflow-hidden block">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">Meow CLI</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 group-hover:text-purple-400 transition-colors"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </div>
                            <p className="text-slate-400 mb-6 text-sm leading-relaxed">The purr-fect streamer straight from your terminal. Command-line interface version of MeowTV offering optimized performance and fast content delivery.</p>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary" className="bg-purple-900/40 text-purple-300 hover:bg-purple-800/60 font-mono border border-purple-500/30">CLI</Badge>
                                <Badge variant="secondary" className="bg-purple-900/40 text-purple-300 hover:bg-purple-800/60 font-mono border border-purple-500/30">Terminal</Badge>
                                <Badge variant="secondary" className="bg-purple-900/40 text-purple-300 hover:bg-purple-800/60 font-mono border border-purple-500/30">Video Streaming</Badge>
                            </div>
                        </motion.a>

                        {/* Project 3 - CodeFlux */}
                        <motion.a variants={fadeItem} href="https://github.com/utkarshgupta188/codeflux" target="_blank" rel="noreferrer" className="glass-panel p-6 border border-white/5 bg-black/50 backdrop-blur-xl rounded-2xl hover:border-blue-500/40 hover:-translate-y-2 transition-all group shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_30px_rgba(96,165,250,0.15)] relative overflow-hidden block md:col-span-2">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">CodeFlux</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 group-hover:text-blue-400 transition-colors"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </div>
                            <p className="text-slate-400 mb-6 text-sm leading-relaxed">An intelligent AI routing gateway meets autonomous agentic code analysis and structural versioning. Built as an advanced Code Intelligence Engine.</p>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary" className="bg-blue-900/40 text-blue-300 hover:bg-blue-800/60 font-mono border border-blue-500/30">AI Gateway</Badge>
                                <Badge variant="secondary" className="bg-blue-900/40 text-blue-300 hover:bg-blue-800/60 font-mono border border-blue-500/30">Agentic Analysis</Badge>
                                <Badge variant="secondary" className="bg-blue-900/40 text-blue-300 hover:bg-blue-800/60 font-mono border border-blue-500/30">Code Intelligence</Badge>
                            </div>
                        </motion.a>

                        {/* Project 4 - Dora Music */}
                        <motion.a variants={fadeItem} href="https://github.com/utkarshgupta188/dora-music" target="_blank" rel="noreferrer" className="glass-panel p-6 border border-white/5 bg-black/50 backdrop-blur-xl rounded-2xl hover:border-pink-500/40 hover:-translate-y-2 transition-all group shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_30px_rgba(236,72,153,0.15)] relative overflow-hidden block">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-pink-400 transition-colors">Dora Music</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 group-hover:text-pink-400 transition-colors"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </div>
                            <p className="text-slate-400 mb-6 text-sm leading-relaxed">A stunning, modern web-based music player featuring a beautiful Glassmorphism UI, infinite radio, and high-quality audio streaming.</p>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary" className="bg-pink-900/40 text-pink-300 hover:bg-pink-800/60 font-mono border border-pink-500/30">Web Audio</Badge>
                                <Badge variant="secondary" className="bg-pink-900/40 text-pink-300 hover:bg-pink-800/60 font-mono border border-pink-500/30">Glassmorphism UI</Badge>
                                <Badge variant="secondary" className="bg-pink-900/40 text-pink-300 hover:bg-pink-800/60 font-mono border border-pink-500/30">Music Streaming</Badge>
                            </div>
                        </motion.a>

                        {/* Project 5 - Sharelink */}
                        <motion.a variants={fadeItem} href="https://github.com/utkarshgupta188/sharelink" target="_blank" rel="noreferrer" className="glass-panel p-6 border border-white/5 bg-black/50 backdrop-blur-xl rounded-2xl hover:border-emerald-500/40 hover:-translate-y-2 transition-all group shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)] relative overflow-hidden block">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">Sharelink</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 group-hover:text-emerald-400 transition-colors"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </div>
                            <p className="text-slate-400 mb-6 text-sm leading-relaxed">A secure peer-to-peer file sharing application designed with OTP authentication to ensure privacy and fast direct data transfers.</p>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary" className="bg-emerald-900/40 text-emerald-300 hover:bg-emerald-800/60 font-mono border border-emerald-500/30">P2P</Badge>
                                <Badge variant="secondary" className="bg-emerald-900/40 text-emerald-300 hover:bg-emerald-800/60 font-mono border border-emerald-500/30">File Sharing</Badge>
                                <Badge variant="secondary" className="bg-emerald-900/40 text-emerald-300 hover:bg-emerald-800/60 font-mono border border-emerald-500/30">Security & OTP</Badge>
                            </div>
                        </motion.a>

                    </motion.div>
                </motion.div>
            </div>

            {/* Page 6 (500-600vh) - Empty buffer */}
            <div className="w-full h-screen pointer-events-none" />

            {/* Page 7 (600-700vh) - Contact */}
            <div className="w-full h-screen flex flex-col items-start justify-center px-8 md:px-24 lg:px-40">
                <motion.div
                    {...fadeUp}
                    className="p-12 glass-panel border border-white/10 bg-black/60 backdrop-blur-xl rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden pointer-events-auto max-w-3xl w-full"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-purple-500/5 pointer-events-none"></div>
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-8 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        Establish Connection
                    </h2>
                    <p className="text-slate-300 text-lg mb-10 font-mono">
                        Always curious and open to collaboration. Reach out mapping ideas, hackathons, or opportunities in data science and full-stack development.
                    </p>
                    <div className="flex flex-wrap gap-6 relative z-10 w-full">
                        <Button asChild size="lg" className="px-8 py-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg text-white font-bold transition-all shadow-[0_0_20px_rgba(45,212,191,0.4)] hover:shadow-[0_0_30px_rgba(45,212,191,0.6)] text-base">
                            <a href="mailto:guptautkarsh231220@gmail.com">
                                INITIATE EMAIL
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="px-8 py-6 bg-blue-900/30 hover:bg-blue-800/60 border-blue-500/30 rounded-lg text-blue-200 font-bold transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] text-base">
                            <a href="https://www.linkedin.com/in/utkarshgupta-dev" target="_blank" rel="noreferrer">
                                CONNECT LINKEDIN
                            </a>
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Global Static HUD */}
            <div className="fixed top-8 left-8 flex items-center gap-4 text-xs font-mono text-slate-500 pointer-events-none z-50">
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
                <span className="bg-black/50 px-3 py-1 rounded backdrop-blur border border-white/5 tracking-widest text-cyan-500/70">
                    STATUS: ONLINE // SYS: UTKARSH_GUPTA_V1
                </span>
            </div>

            <div className="fixed bottom-8 right-8 flex flex-col items-end gap-2 text-xs font-mono text-slate-600 pointer-events-none z-50">
                <span>Sonbhadra, UP, India</span>
                <span>BTech CS_2028</span>
            </div>
        </Scroll>
    )
}
