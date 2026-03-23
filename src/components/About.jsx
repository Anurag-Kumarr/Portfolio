import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 relative z-10">
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-4">
          <span className="text-neon-purple">01.</span> ABOUT_ME
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-transparent"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
          <div className="font-mono text-neon-blue text-sm mb-4 border-b border-white/10 pb-4">
            &gt; ACCESSING_ARCHIVES... [OK]
          </div>
          <p className="text-gray-300 leading-relaxed font-sans text-lg mb-6">
            I am a highly driven full-stack developer with a passion for building interactive, scalable, and beautifully designed web applications. My architecture focuses on merging robust back-end systems with engaging front-end experiences.
            <br/><br/>
            Continuously learning and adapting to new technologies, I strive to engineer solutions that push boundaries and deliver exceptional system performance.
          </p>
          <div className="font-mono text-neon-purple text-sm flex items-center gap-2 mt-8">
            <span className="w-2 h-2 rounded-full bg-neon-purple animate-pulse"></span>
            SYS.STATUS = ONLINE
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: <Terminal size={24} />, title: "Frontend", desc: "React, Tailwind, Three.js" },
            { icon: <Database size={24} />, title: "Backend", desc: "Node.js, Python, SQL" },
            { icon: <Globe size={24} />, title: "Cloud", desc: "AWS, Docker, CI/CD" },
            { icon: <Cpu size={24} />, title: "AI/ML", desc: "API Integration, Tuning" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-6 rounded-xl hover:border-neon-blue/50 hover:bg-neon-blue/5 transition-all duration-300 font-mono group cursor-none relative overflow-hidden"
              data-interactive
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-neon-blue mb-4 group-hover:scale-110 group-hover:text-white transition-all duration-300 relative z-10">{item.icon}</div>
              <h3 className="text-white font-bold mb-2 relative z-10">{item.title}</h3>
              <p className="text-gray-400 text-sm relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
