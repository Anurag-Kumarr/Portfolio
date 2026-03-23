import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'HEALTHBOT_AI',
    desc: 'AI-powered health consultation platform that provides symptom-based advice and real-time medical query assistance using Gemini API.',
    tech: ['React', 'Tailwind CSS', 'PHP', 'JavaScript', 'Gemini API', 'HTML'],
    demo: '#',
    code: 'https://github.com/Anurag-Kumarr/FrontendProject/',
    status: 'COMPLETED'
  },
  {
    title: 'TAX_ASSISTANT_AI',
    desc: 'Smart AI-based tax assistant that helps users with financial calculations and personalized tax guidance using real-time conversational AI.',
    tech: ['Python', 'JavaScript', 'React', 'HTML', 'CSS', 'Gemini API'],
    demo: '#',
    code: 'https://github.com/Anurag-Kumarr/ChatBot',
    status: 'COMPLETED'
  },
  {
    title: 'DIGITAL_FARM_MANAGEMENT',
    desc: 'A full-stack web application to manage and monitor farm animals, including health records, vaccination tracking, and scheduling.',
    tech: ['React.js', 'Node.js', 'JavaScript', 'HTML', 'CSS'],
    demo: '#',
    code: 'https://github.com/Anurag-Kumarr/digital-farm-management',
    status: 'COMPLETED'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 relative z-10">
      
      {/* SECTION TITLE */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-4">
          <span className="text-neon-blue">03.</span> PROJECT_INFO
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-transparent"></div>
      </motion.div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group relative"
          >
            
            {/* GLOW BACKGROUND */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl opacity-20 group-hover:opacity-100 transition duration-500 blur"></div>
            
            {/* CARD */}
            <div className="relative glass-card p-8 h-full rounded-xl cursor-none flex flex-col justify-between" data-interactive>
              
              <div>
                {/* TITLE + STATUS */}
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-orbitron font-bold text-white group-hover:text-neon-blue transition-colors">
                    {project.title}
                  </h3>

                  <div className="text-xs font-mono px-2 py-1 border rounded border-green-500 text-green-500 bg-green-500/10">
                    [{project.status}]
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-300 font-sans mb-6">
                  {project.desc}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-neon-purple bg-neon-purple/10 px-2 py-1 border border-neon-purple/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* LINKS */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                
                

                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-purple transition-colors flex items-center gap-2 font-mono text-sm cursor-none"
                  data-interactive
                >
                  <Github size={16} /> SOURCE_CODE
                </a>

              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Projects;