import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

const CV = () => {
  return (
    <motion.a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-50 glass p-4 rounded-full border border-neon-blue flex items-center justify-center group cursor-none shadow-[0_0_15px_rgba(0,243,255,0.3)] hover:shadow-[0_0_25px_rgba(0,243,255,0.8)] transition-shadow"
      data-interactive
    >
      <FileText className="text-neon-blue group-hover:hidden" size={24} />
      <Download className="text-neon-blue hidden group-hover:block" size={24} />
      
      {/* Tooltip */}
      <span className="absolute -top-10 right-0 bg-dark-900 border border-neon-blue text-neon-blue text-xs font-mono px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        DOWNLOAD_CV
      </span>
    </motion.a>
  );
};

export default CV;
