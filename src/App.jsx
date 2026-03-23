import { useState } from 'react'
import Background from './components/Background'
import CustomCursor from './components/CustomCursor'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'
import CV from './components/CV'
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative font-sans text-gray-200 cursor-none selection:bg-neon-blue selection:text-dark-900">
      <CustomCursor />
      <Background />
      <CV />
      
      {/* Navigation HUD */}
      <nav className="fixed top-0 w-full p-4 md:p-6 flex justify-between items-center z-40 glass border-b border-white/10">
        <div className="font-orbitron font-bold text-xl tracking-wider neon-text-blue">
          Accessing_System...
        </div>
        <div className="flex gap-4 md:gap-6 font-mono text-xs md:text-sm hidden sm:flex">
          <a href="#hero" data-interactive className="hover:text-neon-blue transition-colors cursor-none">HOME</a>
          <a href="#about" data-interactive className="hover:text-neon-blue transition-colors cursor-none">ABOUT</a>
          <a href="#skills" data-interactive className="hover:text-neon-blue transition-colors cursor-none">SKILLS</a>
          <a href="#projects" data-interactive className="hover:text-neon-blue transition-colors cursor-none">PROJECTS</a>
          <a href="#education" data-interactive className="hover:text-neon-blue transition-colors cursor-none">CERTIFICATE</a>
          <a href="#contact" data-interactive className="hover:text-neon-blue transition-colors cursor-none">CONTACT</a>
        </div>
      </nav>

      <main className="px-6 md:px-24 lg:px-32 max-w-7xl mx-auto">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
