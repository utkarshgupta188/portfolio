import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';

const OverlayUI = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
};

export default OverlayUI;
