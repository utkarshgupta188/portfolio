import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] px-8 py-6 flex justify-between items-center mix-blend-difference pointer-events-none">
        <motion.a 
          href="#home" 
          animate={{ opacity: isScrolled ? 0 : 1, y: isScrolled ? -20 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-white font-mono font-bold text-xl tracking-tighter pointer-events-auto uppercase"
        >
          Utkarsh Gupta
        </motion.a>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-white font-mono font-bold uppercase tracking-widest text-xs flex items-center gap-2 pointer-events-auto group"
        >
          <span className="group-hover:opacity-60 transition-opacity">Menu</span>
          <div className="flex flex-col gap-1 w-4">
            <span className={`h-px bg-white transition-all ${isOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
            <span className={`h-px bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-[2px]' : ''}`} />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-black z-[90] flex flex-col justify-center items-center"
          >
            <div className="flex flex-col gap-4 text-center">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-white text-5xl md:text-7xl font-mono font-bold uppercase tracking-tighter hover:italic transition-all"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
            <div className="absolute bottom-12 flex flex-col items-center gap-4">
              <div className="flex gap-8">
                <a href="https://github.com/utkarshgupta188" target="_blank" className="text-white/40 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors">GitHub</a>
                <a href="https://linkedin.com/in/utkarshgupta-dev" target="_blank" className="text-white/40 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors">LinkedIn</a>
                <a href="mailto:guptautkarsh231220@gmail.com" className="text-white/40 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors">Email</a>
              </div>
              <a 
                href="https://utkarshgupta.rf.gd/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="category-pill !border-white/20 !text-white hover:bg-white hover:text-black transition-all"
              >
                View Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
