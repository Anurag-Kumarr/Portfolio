import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Lock, ExternalLink } from 'lucide-react';

// ✅ Import your certificate images
import cert1 from '../assets/Cert1.png';
import cert2 from '../assets/Cert2.png';
import cert3 from '../assets/Cert3.png';

// ✅ ADD THIS (was missing before)
const certificates = [
  {
    id: 1,
    title: 'Introduction to Hardware and Operating System',
    issuer: 'Coursera',
    year: '2024',
    image: cert1
  },
  {
    id: 2,
    title: 'Legacy Web Design',
    issuer: 'FreeCodeCamp',
    year: '2023',
    image: cert2
  },
  {
    id: 3,
    title: 'Software Engineering: Implementing and Testing',
    issuer: 'Coursera',
    year: '2024',
    image: cert3
  }
];

const Achievements = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="achievements" className="min-h-[80vh] py-20 relative z-10">
      
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-4">
          <span className="text-[#ff007f]">04.</span> Certifications
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#ff007f] to-transparent"></div>
        <p className="font-mono text-gray-400 mt-4">
          &gt; Accessing certification vault...
        </p>
      </motion.div>

      {/* CERTIFICATE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card relative aspect-square flex flex-col items-center justify-center p-6 text-center group overflow-hidden cursor-none"
            onClick={() => setSelectedCert(cert)}
            data-interactive
          >
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#ff007f] rounded-full blur-[50px] opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            
            <Award className="text-[#ff007f] w-16 h-16 mb-4 group-hover:drop-shadow-[0_0_15px_rgba(255,0,127,0.8)] transition-all duration-300 relative z-10" />
            
            <h3 className="font-orbitron font-bold text-lg text-white mb-2 relative z-10">
              {cert.title}
            </h3>
            
            <p className="text-gray-400 font-sans text-sm relative z-10">
              {cert.issuer} • {cert.year}
            </p>

            <div className="absolute top-4 right-4 text-gray-600 group-hover:text-white transition-colors">
              <Lock size={16} className="group-hover:hidden" />
              <ExternalLink size={16} className="hidden group-hover:block" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-900/90 backdrop-blur-sm p-4 cursor-none"
            onClick={() => setSelectedCert(null)}
            data-interactive
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-dark-800 border border-[#ff007f] rounded-lg overflow-hidden max-w-3xl w-full shadow-[0_0_30px_rgba(255,0,127,0.3)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 border-b border-white/10 flex justify-between items-center bg-dark-900">
                <h3 className="font-orbitron text-white text-lg">
                  {selectedCert.title}
                </h3>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-gray-400 hover:text-white font-mono cursor-none"
                  data-interactive
                >
                  [ CLOSE ]
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="aspect-video bg-dark-900 flex items-center justify-center border border-white/5 rounded relative overflow-hidden">
                  
                  {/* ✅ Fixed Image */}
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-full object-contain"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>

                  <div className="absolute bottom-4 left-4">
                    <p className="font-mono text-xs text-[#ff007f]">
                      &gt; VERIFIED_RECORD: AUTH_{selectedCert.id}
                    </p>
                  </div>
                </div>

                {/* OPTIONAL: View Full */}
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff007f] font-mono text-sm mt-4 inline-block"
                >
                  VIEW FULL IMAGE →
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
