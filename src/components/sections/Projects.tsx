import { ProjectCard } from "../ui/ProjectCard";
import { PROJECTS } from "../../data/portfolio";
import { ShieldCheck } from "lucide-react";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-16">
        <div>
            <h2 className="text-3xl font-black flex items-center gap-3">
            <span className="bg-cyber-cyan text-black px-2">03</span>
            <span className="tracking-tighter uppercase"></span>PROJECTS
          </h2>
        <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-cyber-cyan opacity-50"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>

      {/* Message de pied de section IA */}
      <div className="mt-20 p-8 border border-cyber-cyan/20 bg-cyber-cyan/5 text-center cyber-border relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-cyber-cyan animate-pulse" />
        <ShieldCheck className="mx-auto text-cyber-cyan mb-4" size={32} />
        <p className="text-xs font-mono text-cyber-cyan tracking-widest uppercase">
          Plus de projets en cours d'analyse....
        </p>
      </div>
    </section>
  );
};