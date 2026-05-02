import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-8 bg-black text-white min-h-[80vh] flex flex-col justify-center relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-bold opacity-[0.02] whitespace-nowrap pointer-events-none select-none">
        LET'S CREATE
      </div>

      <div className="max-w-4xl relative z-10">
        <div className="flex items-center gap-4 mb-12 reveal">
          <span className="font-mono text-xs text-white/40">[ 04 ]</span>
          <h2 className="text-4xl md:text-6xl uppercase">Establish <span className="text-italic font-sans font-light lowercase text-zinc-400">Connection</span></h2>
        </div>
        
        <h3 className="text-5xl md:text-8xl leading-tight mb-16 reveal">
          Have an idea? <br />
          <span className="text-zinc-500">Let's make it real.</span>
        </h3>

        <div className="flex flex-wrap gap-6 reveal">
          <a 
            href="mailto:guptautkarsh231220@gmail.com" 
            className="px-10 py-5 bg-white text-black font-mono uppercase tracking-widest text-sm hover:invert transition-all duration-500"
          >
            Initiate Email
          </a>
          <div className="flex items-center gap-8 px-4">
            <a href="https://linkedin.com/in/utkarshgupta-dev" target="_blank" className="font-mono text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/utkarshgupta188" target="_blank" className="font-mono text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>

      <footer className="absolute bottom-12 left-8 right-8 flex justify-between items-end border-t border-white/10 pt-8 reveal">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">Utkarsh Gupta © 2026</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">BTech CS · SONBHADRA, UP</span>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-white/20">
          Designed with <span className="italic">precision</span>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
