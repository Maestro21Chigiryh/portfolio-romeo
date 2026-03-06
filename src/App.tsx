import { Hero } from "./components/sections/Hero";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience"; // Créer un composant similaire basé sur DATA.experience

function App() {
  return (
    <div className="relative bg-neural-grid min-h-screen">
      {/* HUD Navigation */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center bg-dark-void/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-cyber-cyan rotate-45 flex items-center justify-center">
            <span className="rotate-[-45deg] text-black font-black">F</span>
          </div>
          <span className="font-black text-xl tracking-tighter uppercase">Romeo.portfolio</span>
        </div>
        <div className="hidden md:flex gap-10 text-[10px] font-mono tracking-widest uppercase">
          <a href="#" className="text-cyber-cyan">01_CORE</a>
          <a href="#" className="hover:text-cyber-cyan transition-colors">02_SKILLS</a>
          <a href="#" className="hover:text-cyber-cyan transition-colors">03_PROJECTS</a>
          <a href="#" className="px-4 py-1 border border-cyber-magenta text-cyber-magenta hover:bg-cyber-magenta hover:text-black transition-all">Download_CV</a>
        </div>
      </nav>

      <main>
        <Hero />
        <div className="max-w-7xl mx-auto px-6 mb-20">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent mb-24" />
        </div>
        <Skills />
        <div className="max-w-7xl mx-auto px-6 mb-20">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent mb-24" />
        </div>
        <Experience />  
      
      </main>

      <footer className="p-20 text-center opacity-20">
        <p className="text-xs font-mono tracking-[1em]">SYSTEM_VERSION_2025_RELEASE</p>
      </footer>
    </div>
  );
}

export default App;