import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 py-8 text-center relative z-10">
      
      {/* Top Line */}
      <p className="text-gray-400 font-mono text-sm mb-4">
        &gt; SYSTEM.STATUS: <span className="text-green-400">END</span>
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-4">
        
        <a 
          href="https://github.com/Anurag-Kumarr" 
          target="_blank"
          className="text-gray-400 hover:text-neon-blue transition"
        >
          <Github size={20} />
        </a>

        <a 
          href="https://www.linkedin.com/in/anurag-kumar98/" 
          target="_blank"
          className="text-gray-400 hover:text-neon-blue transition"
        >
          <Linkedin size={20} />
        </a>

        <a 
          href="mailto:anuragkumarr0071@gmail.com"
          className="text-gray-400 hover:text-neon-blue transition"
        >
          <Mail size={20} />
        </a>

      </div>

      {/* Bottom Text */}
      <p className="text-gray-500 text-sm font-sans">
        © {new Date().getFullYear()} Anurag Kumar. All rights reserved.
      </p>

      {/* Extra Hacker Style Line */}
      <p className="text-gray-600 text-xs font-mono mt-2">
        Designed & Built by <span className="text-neon-blue">ANURAG</span> 🚀
      </p>

    </footer>
  );
};

export default Footer;