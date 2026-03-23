import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React.js', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'Three.js', level: 60 },
  { name: 'JAVA', level: 95 },
  { name: 'C', level: 85 },
  { name: 'C++', level: 85 },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-20 relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-4">
          <span className="text-neon-blue">02.</span> SKILLS
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-transparent"></div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass p-6 rounded-xl flex flex-col justify-center items-center group relative overflow-hidden h-48 cursor-none"
            data-interactive
          >
            <div className="absolute inset-0 bg-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Circular Progress */}
            <div className="relative w-24 h-24 mb-4">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-gray-700" />
                <motion.circle 
                  cx="48" cy="48" r="40" 
                  stroke="currentColor" strokeWidth="4" fill="transparent" 
                  strokeDasharray="251.2"
                  initial={{ strokeDashoffset: 251.2 }}
                  whileInView={{ strokeDashoffset: 251.2 - (251.2 * skill.level) / 100 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                  className="text-neon-blue group-hover:text-neon-purple transition-colors duration-300 drop-shadow-[0_0_8px_rgba(0,243,255,0.8)] cursor-none" 
                />
              </svg>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center font-mono text-neon-blue font-bold group-hover:text-neon-purple transition-colors">
                {skill.level}%
              </div>
            </div>
            
            <h3 className="text-white font-orbitron tracking-wider text-sm md:text-base">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
