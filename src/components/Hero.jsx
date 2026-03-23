import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import profile from '../assets/profile.png'; // 👈 IMPORT IMAGE

const Hero = () => {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center pt-20">
      
      {/* GRID LAYOUT */}
      <div className="grid md:grid-cols-2 gap-10 items-center w-full">

        {/* LEFT SIDE (TEXT) */}
        <div className="max-w-2xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-mono text-neon-blue mb-4 tracking-widest text-sm md:text-base"
          >
            &gt;_ SYSTEM.INIT()
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-orbitron font-bold mb-6"
          >
            <span className="text-white">HELLO, I'M </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple neon-text-blue">
              ANURAG
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-3xl font-sans text-gray-300 mb-8 h-12 md:h-16"
          >
            <Typewriter
              options={{
                strings: [
                  'Initializing portfolio...',
                  'Full Stack Developer.',
                  'AI Enthusiast.',
                  'Building the future.'
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </motion.div>

          <div className="flex gap-4">
            <a href="#about" className="px-6 py-3 border border-neon-blue text-neon-blue hover:bg-neon-blue/10 transition">
              ABOUT_ME
            </a>
            <a href="#projects" className="px-6 py-3 border border-neon-purple text-neon-purple hover:bg-neon-purple/10 transition">
              PROJECTS
            </a>
          </div>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center relative"
        >
        {/* Neon Border Wrapper */}
        <div className="p-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_25px_#00f3ff]">
          
          {/* Inner container */}
          <div className="bg-black rounded-full p-[2px]">
            
            <img
              src={profile}
              alt="Anurag"
              className="w-64 h-64 object-cover rounded-full hover:scale-105 transition duration-300"
            />
        
      </div>
    </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;