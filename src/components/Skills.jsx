import React from 'react';

const skillGroups = [
  {
    category: 'Programming',
    skills: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'C++', 'C', 'R']
  },
  {
    category: 'Data Science / AI',
    skills: ['Large Language Models', 'Data Analysis', 'PyTorch', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib']
  },
  {
    category: 'Backend / DB',
    skills: ['FastAPI', 'Node.js', 'Flask', 'MySQL', 'PostgreSQL', 'Redis', 'Firebase']
  },
  {
    category: 'Frontend / Tools',
    skills: ['React', 'Next.js', 'Vite', 'Git', 'Docker', 'Selenium', 'Postman', 'Nginx']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-8">
      <div className="flex items-center gap-4 mb-24 reveal">
        <span className="font-mono text-xs text-black/40">[ 03 ]</span>
        <h2 className="text-4xl md:text-6xl">Competencies <span className="text-italic font-sans font-light">& Tools</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {skillGroups.map((group) => (
          <div key={group.category} className="flex flex-col gap-6 reveal">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-black/40 border-b border-black/10 pb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="category-pill hover:bg-black hover:text-white transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>


      {/* Certifications Mini Section */}
      <div className="mt-32 pt-32 border-t border-black/10">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3 reveal">
            <h3 className="text-2xl uppercase">Certifications</h3>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Postman API Fundamentals Student Expert',
              'OCI 2025 Certified Generative AI Professional',
              'Python Development & Data Science',
              'PHP for Beginners: The Complete PHP MySQL PDO Course'
            ].map((cert) => (
              <div key={cert} className="flex items-start gap-4 reveal">
                <span className="font-mono text-[10px] text-black/20 mt-1">/</span>
                <span className="text-sm uppercase tracking-wide text-zinc-600">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
