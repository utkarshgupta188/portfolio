import React from 'react';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative z-10 border-t border-cyber-cyan/10 bg-[#020308]/80 backdrop-blur-xl">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-wider">
                    Establish <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple text-glow">Connection</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-purple mx-auto rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)] mb-8"></div>
                <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                    System ready. Currently accepting new network connections in Machine Learning and Data Science. Secure your node in the network by initializing contact.
                </p>

                <div className="flex flex-wrap justify-center gap-6 mb-16">
                    <a href="#" className="flex flex-col items-center gap-3 text-gray-400 hover:text-white group">
                        <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center group-hover:scale-110 group-hover:border-cyber-purple/50 group-hover:shadow-[0_0_20px_rgba(192,132,252,0.3)] transition-all duration-300">
                            <Github className="w-7 h-7 text-cyber-purple" />
                        </div>
                        <span className="text-sm font-display tracking-widest uppercase">GitHub</span>
                    </a>

                    <a href="#" className="flex flex-col items-center gap-3 text-gray-400 hover:text-white group">
                        <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center group-hover:scale-110 group-hover:border-cyber-cyan/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300">
                            <Linkedin className="w-7 h-7 text-cyber-cyan" />
                        </div>
                        <span className="text-sm font-display tracking-widest uppercase">LinkedIn</span>
                    </a>

                    <a href="mailto:hello@example.com" className="flex flex-col items-center gap-3 text-gray-400 hover:text-white group">
                        <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center group-hover:scale-110 group-hover:border-cyber-teal/50 group-hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all duration-300">
                            <Mail className="w-7 h-7 text-cyber-teal" />
                        </div>
                        <span className="text-sm font-display tracking-widest uppercase">Email</span>
                    </a>

                    <a href="#" className="flex flex-col items-center gap-3 text-gray-400 hover:text-white group">
                        <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center group-hover:scale-110 group-hover:border-pink-400/50 group-hover:shadow-[0_0_20px_rgba(244,114,182,0.3)] transition-all duration-300">
                            <FileText className="w-7 h-7 text-pink-400" />
                        </div>
                        <span className="text-sm font-display tracking-widest uppercase">Resume</span>
                    </a>
                </div>

                <div className="text-gray-500 text-sm font-mono border-t border-white/5 pt-8 mt-8">
                    <p>© {new Date().getFullYear()} Designed & Built by System Architect</p>
                    <p className="mt-2 text-xs text-cyber-teal/60">STATUS: ONLINE | LATENCY: 12ms</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
