import { motion } from "framer-motion";
import { DATA } from "../../data/portfolio";
import { ChevronRight, Terminal, Cpu } from "lucide-react";

export const Experience = () => {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      {/* Header compact */}
      <div className="flex items-center justify-between mb-10 border-b border-white/10 pb-4">
        <h2 className="text-3xl font-black flex items-center gap-3">
          <span className="bg-cyber-cyan text-black px-2">03</span>
          <span className="tracking-tighter uppercase">EXPERIENCES</span>
        </h2>
        <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-cyber-cyan opacity-50">
        </div>
      </div>

      {/* Grille compacte : 2 colonnes sur desktop, 1 sur mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {DATA.experience.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative"
          >
            {/* Carte ultra-compacte */}
            <div className="h-full bg-white/[0.03] border border-white/10 p-5 cyber-border hover:bg-white/[0.07] hover:border-cyber-cyan/40 transition-all flex flex-col">
              
              {/* Header de la carte */}
              <div className="flex justify-between items-start mb-3">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-cyber-yellow mb-1">
                    [{exp.year}]
                  </span>
                  <h3 className="text-lg font-bold text-white leading-tight group-hover:text-cyber-cyan transition-colors">
                    {exp.title}
                  </h3>
                </div>
                <Terminal size={16} className="text-cyber-magenta opacity-40" />
              </div>

              <p className="text-cyber-cyan font-mono text-[11px] mb-3 uppercase tracking-tighter">
                {exp.company} <span className="text-white/20">|</span> {exp.subtitle}
              </p>

              {/* Détails en format liste compacte */}
              <div className="space-y-1.5 flex-grow">
                {exp.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-2 text-[12px] text-slate-400 leading-snug">
                    <ChevronRight size={12} className="text-cyber-magenta mt-0.5 flex-shrink-0" />
                    <p>{detail}</p>
                  </div>
                ))}
              </div>

              {/* Tech stack mini-tags */}
              <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/5">
                {exp.tech.map(t => (
                  <span key={t} className="text-[9px] font-mono px-1.5 py-0.5 bg-cyber-cyan/5 text-cyber-cyan/80 border border-cyber-cyan/10 group-hover:border-cyber-cyan/30 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};