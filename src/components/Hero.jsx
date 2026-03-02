import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative flex flex-col items-center justify-center min-h-screen z-10 px-4 text-center overflow-hidden"
        >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-teal/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="z-10 flex flex-col items-center animate-float">
                <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-white to-cyber-purple text-glow">
                        JOHN DOE
                    </span>
                </h1>

                <h2 className="text-xl md:text-3xl text-gray-300 font-medium mb-8 max-w-2xl font-display tracking-wide border-b border-cyber-teal/30 pb-4 inline-block">
                    AI & Machine Learning Architect
                </h2>

                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
                    Building intelligent systems, fine-tuning neural networks, and extracting meaning from complex data architectures.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                    <a
                        href="#projects"
                        className="px-8 py-4 rounded-xl bg-cyber-teal/20 text-cyber-teal font-medium border border-cyber-teal/50 hover:bg-cyber-teal/30 hover:shadow-[0_0_30px_rgba(45,212,191,0.4)] transition-all duration-300 font-display tracking-widest uppercase text-sm"
                    >
                        Initialize Sequence
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 rounded-xl glass-panel text-white font-medium hover:text-cyber-cyan transition-all duration-300 font-display tracking-widest uppercase text-sm"
                    >
                        Access Logs
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 animate-bounce cursor-pointer z-10">
                <a href="#about" aria-label="Scroll down" className="p-4 glass-panel rounded-full inline-block">
                    <ChevronDown className="w-6 h-6 text-cyber-cyan opacity-80 hover:opacity-100 transition-opacity" />
                </a>
            </div>
        </section>
    );
};

export default Hero;
