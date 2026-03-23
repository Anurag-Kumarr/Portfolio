import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const eduData = [
  { year: "2023 - 2027", degree: "B.Tech in Computer Science", institution: "Lovely Professional University", desc: "Bachelor Of Technology in Computer Science Engineering. FullStack Web Development. Relevant Coursework: Data Structures, Operating Systems, Computer Networks." },
  { year: "2020 - 2022", degree: "Intermediate Education", institution: "Holy Ganges Public School", desc: "Physics, Chemistry, Mathematics." },
  { year: "2018 - 2020", degree: "Secondary Education", institution: "MP I Sr. Secondary Anglo Public School", desc: "Physics, Chemistry, Mathematics." }
];

const Education = () => {
  return (
    <section id="education" className="min-h-screen py-20 relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-4">
          <span className="text-neon-purple">05.</span> EDUCATION
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-transparent"></div>
        <p className="font-mono text-gray-400 mt-4">&gt; Querying educational timeline...</p>
      </motion.div>

      <div className="relative border-l border-neon-purple/30 ml-4 md:ml-8 py-8 space-y-12">
        {eduData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-dark-900 border-2 border-neon-purple shadow-[0_0_10px_rgba(188,19,254,0.8)]"></div>
            
            <div className="glass p-6 rounded-xl hover:bg-neon-purple/5 hover:border-neon-purple/30 transition-all duration-300 cursor-none" data-interactive>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <BookOpen size={20} className="text-neon-purple" />
                  {item.degree}
                </h3>
                <span className="font-mono text-neon-blue text-sm">[{item.year}]</span>
              </div>
              <h4 className="text-lg text-gray-300 mb-4 font-sans">{item.institution}</h4>
              <p className="text-gray-400 font-sans">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
