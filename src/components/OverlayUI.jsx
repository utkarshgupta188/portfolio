import { Scroll } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Badge } from './ui/badge'
import { Separator } from './ui/separator'

const fadeUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 0.7, ease: "easeOut" }
}

const staggerContainer = {
    initial: {},
    whileInView: {},
    viewport: { once: false, amount: 0.1 },
    transition: { staggerChildren: 0.15 }
}

const fadeItem = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.1 },
    transition: { duration: 0.5 }
}

/* ─── Fill-up animated button ─── */
function FillButton({ href, children, color = 'cyan', external = false }) {
    const colorMap = {
        cyan: {
            border: 'border-cyan-500/50',
            text: 'text-cyan-300',
            fill: 'bg-gradient-to-r from-cyan-600 to-blue-600',
            glow: 'hover:shadow-[0_0_25px_rgba(45,212,191,0.5)]',
        },
        blue: {
            border: 'border-blue-500/50',
            text: 'text-blue-300',
            fill: 'bg-gradient-to-r from-blue-600 to-indigo-600',
            glow: 'hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]',
        },
        purple: {
            border: 'border-purple-500/50',
            text: 'text-purple-300',
            fill: 'bg-gradient-to-r from-purple-600 to-pink-600',
            glow: 'hover:shadow-[0_0_25px_rgba(192,132,252,0.5)]',
        },
    }
    const c = colorMap[color]
    return (
        <motion.a
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className={`relative inline-flex items-center gap-2 px-7 py-3 rounded-lg border ${c.border} ${c.text} font-bold font-mono text-sm overflow-hidden group transition-shadow ${c.glow} pointer-events-auto`}
        >
            {/* fill layer */}
            <span
                className={`absolute inset-0 ${c.fill} translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out`}
            />
            <span className="relative z-10 tracking-widest">{children}</span>
        </motion.a>
    )
}

export default function OverlayUI() {
    return (
        <Scroll html style={{ width: '100%' }}>

            {/* ── HERO ── */}
            <section className="w-full h-screen flex flex-col justify-center items-center text-center px-6 md:px-16">
                <motion.div {...fadeUp} className="max-w-4xl w-full">
                    <p className="text-xs font-mono tracking-[0.3em] text-cyan-500 mb-4 uppercase">
                        — Portfolio v1.0 —
                    </p>
                    <h1 className="text-6xl md:text-9xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 mb-4 drop-shadow-[0_0_40px_rgba(45,212,191,0.4)]">
                        Utkarsh
                    </h1>
                    <h1 className="text-6xl md:text-9xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-6 drop-shadow-[0_0_40px_rgba(192,132,252,0.4)]">
                        Gupta
                    </h1>
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <span className="w-12 h-px bg-cyan-500/50" />
                        <h2 className="text-sm md:text-base text-cyan-400 font-mono tracking-[0.25em] uppercase">
                            Data Science &amp; LLM Enthusiast
                        </h2>
                        <span className="w-12 h-px bg-cyan-500/50" />
                    </div>
                    <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                        Contributor with expertise in Data Science and LLMs. Passionate about AI, ML, and web development — turning ideas into impactful things through code.
                    </p>
                    <div className="flex justify-center pointer-events-auto">
                        <FillButton href="/resume.pdf" color="cyan" external>
                            ↓ VIEW RESUME
                        </FillButton>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="mt-16 text-xs text-slate-600 font-mono flex items-center justify-center gap-2 animate-pulse"
                    >
                        <span className="w-4 h-px bg-slate-600" /> scroll to explore <span className="w-4 h-px bg-slate-600" />
                    </motion.div>
                </motion.div>
            </section>

            {/* ── ABOUT ── */}
            <section className="w-full py-32 flex flex-col items-center px-6 md:px-16">
                <motion.div {...fadeUp} className="max-w-4xl w-full">
                    <SectionLabel label="01" title="About Me" color="purple" />
                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                        <div className="glass-panel p-8 rounded-2xl">
                            <h3 className="text-lg font-mono text-purple-400 mb-4">Who I Am</h3>
                            <p className="text-slate-300 leading-relaxed text-sm mb-4">
                                I'm <span className="text-cyan-400 font-semibold">Utkarsh Gupta</span>, a BTech Computer Science student at LNCT Group of Colleges, passionate about AI, ML, and web development.
                            </p>
                            <p className="text-slate-300 leading-relaxed text-sm">
                                I love exploring how technology can solve real problems and bring ideas to life through code.
                            </p>
                        </div>
                        <div className="glass-panel p-8 rounded-2xl">
                            <h3 className="text-lg font-mono text-cyan-400 mb-4">What I Do</h3>
                            <p className="text-slate-300 leading-relaxed text-sm mb-4">
                                I actively participate in hackathons, work on hands-on projects, and delve into IoT experiments to keep learning.
                            </p>
                            <p className="text-slate-300 leading-relaxed text-sm">
                                Always curious and open to collaboration — I connect with people who share a passion for innovation.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 grid grid-cols-3 gap-4">
                        {[
                            { num: '5+', label: 'Projects Built' },
                            { num: 'AI/ML', label: 'Core Focus' },
                            { num: '2028', label: 'BTech Graduate' },
                        ].map(stat => (
                            <div key={stat.label} className="glass-panel p-6 rounded-xl text-center">
                                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-display mb-1">{stat.num}</div>
                                <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* ── TRAJECTORY ── */}
            <section className="w-full py-32 flex flex-col items-center px-6 md:px-16">
                <motion.div {...fadeUp} className="max-w-4xl w-full">
                    <SectionLabel label="02" title="Trajectory" color="blue" />
                    <motion.div
                        {...staggerContainer}
                        className="mt-10 space-y-6 relative before:absolute before:left-5 before:inset-y-0 before:w-px before:bg-gradient-to-b before:from-transparent before:via-blue-500/40 before:to-transparent"
                    >
                        {[
                            {
                                color: 'cyan',
                                period: 'Sep 2024 – Sep 2028',
                                title: 'B.Tech Computer Science',
                                org: 'LNCT Group of Colleges',
                                desc: "Bachelor's in Computer Science — data structures, programming, plus emerging AI/ML technologies.",
                            },
                            {
                                color: 'purple',
                                period: '2020 – 2023',
                                title: 'High School (Class 10 & 12, PCM)',
                                org: 'DAV Schools Network',
                                desc: 'Completed Class 12 with Physics, Chemistry, and Mathematics.',
                            },
                        ].map(item => (
                            <motion.div key={item.title} variants={fadeItem} className="relative flex items-start gap-6 group">
                                <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-${item.color}-500/50 bg-slate-900 shrink-0 z-10 mt-1 transition-all group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(45,212,191,0.3)]`} />
                                <div className="flex-1 glass-panel p-6 border border-white/5 bg-black/40 backdrop-blur-md rounded-xl hover:border-blue-500/30 transition-all">
                                    <span className={`text-${item.color}-400 font-mono text-xs mb-1 block`}>{item.period}</span>
                                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                    <h4 className={`text-${item.color}-300 font-mono text-sm mb-3`}>{item.org}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* ── SKILLS ── */}
            <section className="w-full py-32 flex flex-col items-center px-6 md:px-16">
                <motion.div {...fadeUp} className="max-w-4xl w-full">
                    <SectionLabel label="03" title="Competencies" color="cyan" />
                    <motion.div {...staggerContainer} className="mt-10 space-y-8">
                        {[
                            {
                                color: 'purple',
                                title: 'AI / ML & Data Science',
                                items: ['Large Language Models (LLMs)', 'Data Science', 'Machine Learning', 'PyTorch', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'Anaconda'],
                            },
                            {
                                color: 'cyan',
                                title: 'Languages',
                                items: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'C', 'C++', 'HTML5', 'CSS3', 'R'],
                            },
                            {
                                color: 'blue',
                                title: 'Frontend & Frameworks',
                                items: ['React', 'Next.js', 'Vite', 'Node.js', 'FastAPI', 'Flask'],
                            },
                            {
                                color: 'pink',
                                title: 'DevOps & Cloud',
                                items: ['Docker', 'Git', 'GitHub', 'Vercel', 'Render', 'Netlify', 'Nginx', 'Oracle Cloud', 'Firebase'],
                            },
                            {
                                color: 'emerald',
                                title: 'Databases & Tools',
                                items: ['MySQL', 'PostgreSQL', 'Redis', 'Postman', 'Selenium', 'NPM', 'PNPM', 'Yarn'],
                            },
                        ].map(group => (
                            <motion.div key={group.title} variants={fadeItem} className="glass-panel p-6 border border-white/5 bg-black/40 rounded-2xl">
                                <h3 className={`text-sm font-mono text-${group.color}-400 mb-3 uppercase tracking-widest`}>{group.title}</h3>
                                <Separator className={`bg-${group.color}-500/20 mb-4`} />
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map(skill => (
                                        <Badge key={skill} variant="outline"
                                            className={`px-3 py-1.5 bg-slate-900/50 border-${group.color}-500/30 text-slate-200 text-xs font-mono hover:border-${group.color}-400 hover:bg-slate-800 transition-all cursor-default`}>
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </motion.div>
                        ))}

                        {/* Certifications */}
                        <motion.div variants={fadeItem} className="glass-panel p-6 border border-white/5 bg-black/40 rounded-2xl">
                            <h3 className="text-sm font-mono text-blue-400 mb-3 uppercase tracking-widest">Certifications</h3>
                            <Separator className="bg-blue-500/20 mb-4" />
                            <div className="grid md:grid-cols-2 gap-2">
                                {[
                                    'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
                                    'Python Development & Data Science: Variables and Data Types',
                                    'PHP for Beginners: The Complete PHP MySQL PDO Course',
                                    'Postman Flows - Beginner',
                                    'Introduction to IoT',
                                ].map(cert => (
                                    <p key={cert} className="text-xs text-slate-300 font-mono flex items-start gap-2 py-1">
                                        <span className="text-blue-500 mt-0.5 shrink-0">▹</span>{cert}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* ── PROJECTS ── */}
            <section className="w-full py-32 flex flex-col items-center px-6 md:px-16">
                <motion.div {...fadeUp} className="max-w-4xl w-full">
                    <SectionLabel label="04" title="Select Projects" color="pink" />
                    <motion.div {...staggerContainer} className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 pointer-events-auto">
                        {[
                            {
                                name: 'MeowTV',
                                href: 'https://github.com/utkarshgupta188/meowtv',
                                desc: 'A modern streaming platform built with Next.js and TypeScript — seamless access to anime, cartoons, and TV shows.',
                                tags: ['Next.js', 'TypeScript', 'Streaming'],
                                accent: 'cyan',
                                span: false,
                            },
                            {
                                name: 'Meow CLI',
                                href: 'https://github.com/utkarshgupta188/meow-cli',
                                desc: 'The purr-fect streamer from your terminal. CLI version of MeowTV with fast content delivery.',
                                tags: ['CLI', 'Terminal', 'Video Streaming'],
                                accent: 'purple',
                                span: false,
                            },
                            {
                                name: 'CodeFlux',
                                href: 'https://github.com/utkarshgupta188/codeflux',
                                desc: 'Intelligent AI routing gateway meets autonomous agentic code analysis and structural versioning. Advanced Code Intelligence Engine.',
                                tags: ['AI Gateway', 'Agentic Analysis', 'Code Intelligence'],
                                accent: 'blue',
                                span: true,
                            },
                            {
                                name: 'Dora Music',
                                href: 'https://github.com/utkarshgupta188/dora-music',
                                desc: 'Modern web-based music player with Glassmorphism UI, infinite radio, and high-quality audio streaming.',
                                tags: ['Web Audio', 'Glassmorphism UI', 'Music Streaming'],
                                accent: 'pink',
                                span: false,
                            },
                            {
                                name: 'Sharelink',
                                href: 'https://github.com/utkarshgupta188/sharelink',
                                desc: 'Secure peer-to-peer file sharing app with OTP authentication for privacy and fast direct transfers.',
                                tags: ['P2P', 'File Sharing', 'Security & OTP'],
                                accent: 'emerald',
                                span: false,
                            },
                        ].map(project => (
                            <ProjectCard key={project.name} {...project} />
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* ── CONTACT ── */}
            <section className="w-full py-32 flex flex-col items-center px-6 md:px-16">
                <motion.div {...fadeUp} className="max-w-4xl w-full">
                    <SectionLabel label="05" title="Establish Connection" color="cyan" />
                    <div className="mt-10 glass-panel p-10 border border-white/10 bg-black/60 backdrop-blur-xl rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.6)] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />
                        <p className="text-slate-300 text-lg leading-relaxed font-mono mb-10 max-w-xl">
                            Always curious and open to collaboration. Ideas, hackathons, data science, or full-stack opportunities — let's talk.
                        </p>
                        <div className="flex flex-wrap gap-4 pointer-events-auto">
                            <FillButton href="mailto:guptautkarsh231220@gmail.com" color="cyan">
                                INITIATE EMAIL
                            </FillButton>
                            <FillButton href="https://www.linkedin.com/in/utkarshgupta-dev" color="blue" external>
                                LINKEDIN
                            </FillButton>
                            <FillButton href="https://github.com/utkarshgupta188" color="purple" external>
                                GITHUB
                            </FillButton>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ── FOOTER ── */}
            <footer className="w-full py-10 flex flex-col items-center gap-2 border-t border-white/5">
                <span className="text-xs font-mono text-slate-400 tracking-widest">UTKARSH GUPTA © 2025</span>
                <span className="text-xs font-mono text-slate-500">BTech CS · Sonbhadra, UP, India</span>
            </footer>

            {/* ── HUD Overlays ── */}
            <div className="fixed top-8 left-8 flex items-center gap-3 text-xs font-mono text-slate-500 pointer-events-none z-50">
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
                <span className="bg-black/50 px-3 py-1 rounded backdrop-blur border border-white/5 tracking-widest text-cyan-500/70">
                    STATUS: ONLINE
                </span>
            </div>
        </Scroll>
    )
}

/* ─── Helpers ─── */
function SectionLabel({ label, title, color }) {
    const colors = {
        cyan: 'text-cyan-500',
        blue: 'text-blue-500',
        purple: 'text-purple-500',
        pink: 'text-pink-500',
        emerald: 'text-emerald-500',
    }
    const borders = {
        cyan: 'border-cyan-500/40',
        blue: 'border-blue-500/40',
        purple: 'border-purple-500/40',
        pink: 'border-pink-500/40',
        emerald: 'border-emerald-500/40',
    }
    return (
        <div className={`flex items-center gap-4 border-b ${borders[color]} pb-4`}>
            <span className={`font-mono text-xs ${colors[color]} opacity-60`}>{label}</span>
            <h2 className={`text-3xl md:text-5xl font-display font-black ${colors[color]}`}>{title}</h2>
        </div>
    )
}

const accentStyles = {
    cyan: { border: 'hover:border-cyan-500/40', bar: 'from-blue-500 to-cyan-400', titleHover: 'group-hover:text-cyan-400', shadow: 'hover:shadow-[0_8px_30px_rgba(45,212,191,0.15)]', icon: 'group-hover:text-cyan-400' },
    purple: { border: 'hover:border-purple-500/40', bar: 'from-indigo-500 to-purple-400', titleHover: 'group-hover:text-purple-400', shadow: 'hover:shadow-[0_8px_30px_rgba(192,132,252,0.15)]', icon: 'group-hover:text-purple-400' },
    blue: { border: 'hover:border-blue-500/40', bar: 'from-sky-500 to-blue-400', titleHover: 'group-hover:text-blue-400', shadow: 'hover:shadow-[0_8px_30px_rgba(96,165,250,0.15)]', icon: 'group-hover:text-blue-400' },
    pink: { border: 'hover:border-pink-500/40', bar: 'from-pink-500 to-rose-400', titleHover: 'group-hover:text-pink-400', shadow: 'hover:shadow-[0_8px_30px_rgba(236,72,153,0.15)]', icon: 'group-hover:text-pink-400' },
    emerald: { border: 'hover:border-emerald-500/40', bar: 'from-emerald-500 to-teal-400', titleHover: 'group-hover:text-emerald-400', shadow: 'hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)]', icon: 'group-hover:text-emerald-400' },
}

function ProjectCard({ name, href, desc, tags, accent, span }) {
    const s = accentStyles[accent]
    return (
        <motion.a
            variants={fadeItem}
            href={href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -6 }}
            className={`glass-panel p- border-0 rounded-2xl transition-all group shadow-[0_4px_20px_rgba(0,0,0,0.4)] ${s.border} ${s.shadow} relative overflow-hidden block ${span ? 'md:col-span-2' : ''}`}
        >
            <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${s.bar} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            <div className="flex justify-between items-start mb-3">
                <h3 className={`text-xl font-bold text-white ${s.titleHover} transition-colors`}>{name}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className={`text-slate-600 ${s.icon} transition-colors shrink-0`}>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                </svg>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">{desc}</p>
            <div className="flex flex-wrap gap-2">
                {tags.map(t => (
                    <Badge key={t} variant="secondary"
                        className="bg-white/5 text-slate-300 font-mono border border-white/10 text-xs hover:bg-white/10 transition-colors">
                        {t}
                    </Badge>
                ))}
            </div>
        </motion.a>
    )
}

