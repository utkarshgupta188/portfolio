import React from 'react';

const experiences = [
  {
    period: '2024 – 2028',
    title: 'B.Tech Computer Science',
    org: 'LNCT Group of Colleges',
    description: "Focusing on AI, Machine Learning, and Web Development. Maintaining a strong 8.5 CGPA while leading technical projects."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-8 bg-zinc-100">
      <div className="flex flex-col md:flex-row gap-16 md:gap-32">
        <div className="md:w-1/3 reveal">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-xs text-black/40">[ 02 ]</span>
            <h2 className="text-4xl md:text-5xl">Experience <br /><span className="text-italic font-sans font-light">& Education</span></h2>
          </div>
          <p className="text-zinc-500 max-w-xs leading-relaxed">
            My journey through academia and self-taught engineering, focused on the evolving landscape of technology.
          </p>
        </div>

        <div className="md:w-2/3 flex flex-col gap-16">
          {experiences.map((exp) => (
            <div key={exp.title} className="flex flex-col gap-4 reveal">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-black/10 pb-4">
                <h3 className="text-2xl md:text-3xl uppercase">{exp.title}</h3>
                <span className="font-mono text-xs uppercase tracking-widest text-black/40">{exp.period}</span>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-mono text-sm uppercase tracking-wider">{exp.org}</span>
                <p className="text-zinc-600 max-w-xl leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
