import { Hero } from "./components/sections/Hero";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <div className="relative bg-dark-void min-h-screen">
      {/* HUD Navigation */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center bg-dark-void/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-cyber-cyan rotate-45 flex items-center justify-center">
            <span className="rotate-[-45deg] text-black font-black italic">F</span>
          </div>
          <span className="font-black text-xl tracking-tighter uppercase ml-2 text-white">Romeo.portfolio</span>
        </div>
        
        <div className="hidden md:flex gap-10 text-[10px] font-mono tracking-widest uppercase">
          <a href="#home" className="text-cyber-cyan hover:glow-cyan transition-all">01_CORE</a>
          <a href="#skills" className="hover:text-cyber-cyan transition-colors text-slate-400">02_SKILLS</a>
          <a href="#experience" className="hover:text-cyber-cyan transition-colors text-slate-400">03_EXP</a>
          <a href="#projects" className="hover:text-cyber-cyan transition-colors text-slate-400">04_PROJECTS</a>
          <a href="#contact" className="text-cyber-yellow hover:text-white transition-colors cursor-pointer">05_CONTACT</a>
          <a 
            href="/Faniry CV.pdf" 
            download="Faniry CV.pdf" 
            className="px-4 py-1 border border-cyber-magenta text-cyber-magenta hover:bg-cyber-magenta hover:text-black transition-all cursor-pointer"
          >
            Download_CV
          </a>
        </div>
      </nav>

      <main>
        <section id="home">
          <Hero />
        </section>

        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent mb-24" />
        </div>

        <section id="skills">
          <Skills />
        </section>

        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent mb-24" />
        </div>

        <section id="experience">
          <Experience />
        </section>

        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent mb-24" />
        </div>

        <section id="projects">
          <Projects />
        </section>

        <div className="max-w-7xl mx-auto px-6 mb-20">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyber-magenta/50 to-transparent mb-24" />
        </div>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="p-20 text-center opacity-20">
        <p className="text-xs font-mono tracking-[1em]">PHENOMENAL_TECHNOLOGY_2025_RELEASE</p>
      </footer>
    </div>
  );
}

export default App; 