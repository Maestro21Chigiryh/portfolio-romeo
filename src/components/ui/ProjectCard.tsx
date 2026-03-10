import { motion } from "framer-motion";
import { TechIcon } from "./TechIcon";
import { Github, ExternalLink, Target, PlayCircle } from "lucide-react";

export const ProjectCard = ({ project }: { project: any }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="group relative bg-black/60 border border-white/10 overflow-hidden flex flex-col lg:flex-row min-h-[400px] cyber-border"
    >
      {/* SECTION VIDÉO */}
      <div className="relative w-full lg:w-[45%] h-64 lg:h-auto overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
        <div className="absolute inset-0 bg-cyber-cyan/20 z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
        
        <video 
          src={project.video}
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        
        {/* Overlay HUD décoratif sur la vidéo */}
        <div className="absolute top-4 left-4 z-20 bg-black/80 px-3 py-1 border border-cyber-cyan text-[10px] text-cyber-cyan font-mono flex items-center gap-2">
          <PlayCircle size={12} className="animate-pulse" />
          LIVE_PREVIEW: {project.status}
        </div>
      </div>

      {/* SECTION DÉTAILS */}
      <div className="flex-1 p-8 flex flex-col justify-between bg-neural-grid">
        <div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-3xl font-black text-white tracking-tighter uppercase leading-none mb-2">
                {project.title}
              </h3>
              <p className="text-cyber-yellow text-[10px] font-mono uppercase tracking-[0.2em]">{project.subtitle}</p>
            </div>
            <span className="text-white/20 font-mono text-xl">#{project.id}</span>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed mb-8 border-l-2 border-cyber-magenta pl-4">
            {project.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {project.features.map((f: string, i: number) => (
              <div key={i} className="flex items-center gap-2 text-[11px] text-slate-300 font-mono ">
                <Target size={12} className="text-cyber-magenta" /> {f}
              </div>
            ))}
          </div>
        </div>

        {/* PIED DE CARTE */}
        <div className="flex justify-between items-end pt-6 border-t border-white/5">
          <div className="flex flex-wrap gap-4">
            {project.tech.map((t: string) => (
              <div key={t} title={t} className="text-2xl filter grayscale hover:grayscale-0 transition-all">
                <TechIcon name={t} />
              </div>
            ))}
          </div>
          
          <div className="flex gap-4">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-white text-[10px] font-mono hover:bg-white/10 hover:border-cyber-cyan transition-all"
            >
              <Github size={14} /> GIT_REPO
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};