import React from 'react';
import { Database, Binary, Code2, BrainCircuit, LineChart, Server } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Data Science & Analysis",
            icon: <LineChart className="w-6 h-6 text-indigo-400" />,
            skills: ["Pandas", "NumPy", "Matplotlib", "SQL", "Tableau", "Statistical Modeling"]
        },
        {
            title: "Machine Learning",
            icon: <BrainCircuit className="w-6 h-6 text-purple-400" />,
            skills: ["Scikit-learn", "XGBoost", "TensorFlow", "PyTorch", "NLP", "Computer Vision"]
        },
        {
            title: "Software Engineering",
            icon: <Code2 className="w-6 h-6 text-cyan-400" />,
            skills: ["Python", "C++", "JavaScript", "React", "Git", "REST APIs"]
        },
        {
            title: "Data Infrastructure",
            icon: <Database className="w-6 h-6 text-emerald-400" />,
            skills: ["PostgreSQL", "MongoDB", "Redis", "Airflow", "Spark", "Kafka"]
        },
        {
            title: "Deployment & MLOps",
            icon: <Server className="w-6 h-6 text-orange-400" />,
            skills: ["Docker", "Kubernetes", "AWS (EC2/S3)", "GCP", "MLflow", "FastAPI"]
        },
        {
            title: "Deep Tech",
            icon: <Binary className="w-6 h-6 text-pink-400" />,
            skills: ["LLM Fine-tuning", "RAG Systems", "Vector DBs", "CUDA (Basics)"]
        }
    ];

    return (
        <section id="skills" className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-wider">
                        Skill <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple text-glow">Matrix</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-purple mx-auto rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="glass-panel p-8 group relative overflow-hidden"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-cyber-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10 flex items-center gap-4 mb-6 border-b border-cyber-teal/20 pb-4">
                                <div className="p-3 bg-cyber-teal/10 rounded-xl group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(45,212,191,0.4)] transition-all duration-300">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-display font-bold text-gray-100 tracking-wide">{category.title}</h3>
                            </div>

                            <div className="flex w-full flex-wrap gap-2 mt-4">
                                {category.skills.map((skill, sIndex) => (
                                    <span
                                        key={sIndex}
                                        className="px-3 py-1.5 bg-black/40 border border-cyber-teal/20 rounded-md text-sm text-gray-300 font-mono hover:text-cyber-cyan hover:border-cyber-cyan/60 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
