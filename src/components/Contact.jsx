import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Instagram } from 'lucide-react';

const Contact = () => {

  // ✅ Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData); // 👈 for now (later we connect backend)

    alert("Message sent successfully 🚀");

    // reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-[60vh] py-20 relative z-10">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-4">
          <span className="text-neon-blue">05.</span> CONTACT_LINK
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-transparent"></div>
        <p className="text-gray-400 font-mono mt-4">
          &gt; Establishing connection...
        </p>
      </motion.div>

      {/* 🔥 MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT: CONTACT LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <a href="https://github.com/Anurag-Kumarr" target="_blank" className="glass-card p-5 flex items-center gap-4 hover:scale-105 transition">
            <Github className="text-white" />
            <span className="text-gray-300 font-mono">GitHub</span>
          </a>

          <a href="https://www.linkedin.com/in/anurag-kumar98/" target="_blank" className="glass-card p-5 flex items-center gap-4 hover:scale-105 transition">
            <Linkedin className="text-blue-400" />
            <span className="text-gray-300 font-mono">LinkedIn</span>
          </a>

          <a href="mailto:anuragkumarr0071@gmail.com" className="glass-card p-5 flex items-center gap-4 hover:scale-105 transition">
            <Mail className="text-red-400" />
            <span className="text-gray-300 font-mono">Gmail</span>
          </a>

          <a href="tel:+917543920504" className="glass-card p-5 flex items-center gap-4 hover:scale-105 transition">
            <Phone className="text-green-400" />
            <span className="text-gray-300 font-mono">Phone</span>
          </a>

          <a href="https://www.instagram.com/anu._.raaag/" target="_blank" className="glass-card p-5 flex items-center gap-4 hover:scale-105 transition md:col-span-2">
            <Instagram className="text-pink-400" />
            <span className="text-gray-300 font-mono">Instagram</span>
          </a>

        </div>

        {/* RIGHT: CONTACT FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card p-6 rounded-xl flex flex-col gap-4"
        >
          <h3 className="text-xl font-orbitron text-white mb-2">
            SEND_MESSAGE
          </h3>

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-dark-900 border border-white/10 p-3 rounded text-white focus:outline-none focus:border-neon-blue"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-dark-900 border border-white/10 p-3 rounded text-white focus:outline-none focus:border-neon-blue"
          />

          {/* Message */}
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message..."
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-dark-900 border border-white/10 p-3 rounded text-white focus:outline-none focus:border-neon-blue"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="mt-2 px-4 py-3 border border-neon-blue text-neon-blue hover:bg-neon-blue/10 transition font-mono"
          >
            SEND
          </button>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;