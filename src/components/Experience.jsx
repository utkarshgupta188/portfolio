import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: "Machine Learning Intern",
            company: "TechNova AI Labs",
            duration: "May 2025 - Aug 2025",
            location: "San Francisco, CA",
            description: "Optimized large language models for customer support chatbots, reducing inference latency by 30%. Implemented an automated data pipeline using Airflow and PostgreSQL."
        },
        {
            role: "Undergraduate Research Assistant",
            company: "University AI Research Group",
            duration: "Sept 2024 - Present",
            location: "Cambridge, MA",
            description: "Co-authoring a paper on efficient attention mechanisms in Transformers. Ran extensive hyperparameter tuning experiments on university computing clusters."
        },
        {
            role: "B.S. in Computer Science (AI Track)",
            company: "State University",
            duration: "Expected 2026",
            location: "Cambridge, MA",
            description: "Relevant Coursework: Deep Learning, Natural Language Processing, Convex Optimization, Data Structures & Algorithms, Database Systems."
        }
    ];

    return (
        <section id="experience" className="py-24 relative z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-wider">
                        System <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-teal to-cyber-cyan text-glow">Logs</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyber-teal to-cyber-cyan mx-auto rounded-full shadow-[0_0_10px_rgba(45,212,191,0.5)]"></div>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-white/10 ml-4 md:ml-0"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative pl-12 md:pl-24 group">
                                {/* Timeline Dot */}
                                <div className="absolute left-2.5 md:left-6 top-1.5 w-4 h-4 rounded-full bg-cyber-teal border-4 border-[#03050a] shadow-[0_0_15px_rgba(45,212,191,0.8)] group-hover:scale-125 transition-transform duration-300 z-10"></div>

                                <div className="glass-panel p-6 md:p-8 hover:bg-cyber-teal/5 transition-all duration-300 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyber-teal to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-display font-bold text-white tracking-wide">{exp.role}</h3>
                                            <div className="flex items-center gap-2 text-cyber-teal mt-1 font-mono text-sm">
                                                <Briefcase className="w-4 h-4" />
                                                <span>{exp.company}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2 text-sm text-gray-400 font-mono">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-cyber-teal/60" />
                                                <span>{exp.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4 text-cyber-teal/60" />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-300 leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
