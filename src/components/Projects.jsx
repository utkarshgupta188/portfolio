import React from 'react';
import { ExternalLink, Github, Box } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Neural Vision Classifier",
            description: "Fine-tuned Convolutional Neural Network (CNN) for real-time object detection in low-light environments. Achieved 94% mAP on custom dataset.",
            tags: ["PyTorch", "OpenCV", "CUDA"],
            github: "#",
            demo: "#"
        },
        {
            title: "DocuSense NLP",
            description: "Retrieval-Augmented Generation (RAG) system capable of parsing, embedding, and querying 10,000+ technical PDF documents instantly.",
            tags: ["LangChain", "Pinecone", "Hugging Face"],
            github: "#",
            demo: "#"
        },
        {
            title: "Predictive Market Forecaster",
            description: "Time-series forecasting model utilizing LSTM networks to predict short-term stock volatility based on historical sentiment analysis.",
            tags: ["TensorFlow", "Pandas", "Scikit-learn"],
            github: "#",
            demo: "#"
        },
        {
            title: "Autonomous Drone Pathing",
            description: "Reinforcement learning agent trained using PPO to navigate a simulated drone through dense, procedurally generated urban environments.",
            tags: ["Python", "Ray RLlib", "Unity ML-Agents"],
            github: "#",
            demo: "#"
        }
    ];

    return (
        <section id="projects" className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-wider">
                        Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple to-pink-400 text-glow">Deployments</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyber-purple to-pink-400 mx-auto rounded-full shadow-[0_0_10px_rgba(192,132,252,0.5)]"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="glass-panel group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(192,132,252,0.2)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="p-8 relative z-10">
                                <div className="w-14 h-14 bg-cyber-purple/10 rounded-xl flex items-center justify-center mb-8 border border-cyber-purple/20 group-hover:border-cyber-purple/50 group-hover:shadow-[0_0_15px_rgba(192,132,252,0.4)] transition-all duration-300">
                                    <Box className="w-7 h-7 text-cyber-purple" />
                                </div>

                                <h3 className="text-2xl font-display font-bold text-white mb-4 tracking-wide group-hover:text-cyber-purple transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag, tIndex) => (
                                        <span
                                            key={tIndex}
                                            className="px-3 py-1 bg-black/40 text-cyber-purple text-xs font-mono rounded border border-cyber-purple/20 group-hover:border-cyber-purple/50 transition-colors cursor-default"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                                    <a
                                        href={project.github}
                                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                        <span>Source Code</span>
                                    </a>
                                    <a
                                        href={project.demo}
                                        className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors ml-auto"
                                    >
                                        <span>View Demo</span>
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
