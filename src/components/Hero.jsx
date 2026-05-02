import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-8 relative">
      {/* Corner Status Labels */}
      <div className="absolute top-32 left-8 font-mono text-[10px] uppercase tracking-widest text-black/40 reveal">
        [ Available for project ]
      </div>
      <div className="absolute top-32 right-8 font-mono text-[10px] uppercase tracking-widest text-black/40 text-right reveal">
        [ Utkarsh Gupta / 2026 ]
      </div>

      <div className="max-w-6xl">
        <h1 className="text-6xl sm:text-8xl md:text-[10rem] leading-[0.9] reveal">
          Creative <br />
          <span className="text-italic font-sans font-light lowercase">Data</span> Scientist
        </h1>
        
        <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p className="max-w-md text-zinc-500 text-lg leading-relaxed reveal">
            Focusing on the intersection of Data Science, LLMs, and Human-Centric Design. Currently building intelligent systems at LNCT Group of Colleges.
          </p>
          
          <div className="flex flex-col gap-2 reveal">
            <span className="font-mono text-[10px] uppercase tracking-widest text-black/40">[ Based in ]</span>
            <span className="font-mono text-xs uppercase tracking-widest">Sonbhadra, UP, India</span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 reveal">
        <div className="w-px h-12 bg-black/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black animate-[scroll-down_2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-down {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
