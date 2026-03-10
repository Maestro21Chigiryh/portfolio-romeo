import { motion } from "framer-motion";
import { TechIcon } from "../ui/TechIcon";
import { Brain, Cpu, Database, Layout, Terminal, Box } from "lucide-react";

export const Skills = () => {
  const categories = [
    {
      title: "Core AI & Data",
      icon: <Cpu size={18} />,
      skills: ["TensorFlow", "OpenCV", "Scikit-learn", "Pandas", "NumPy"],
      color: "border-cyber-cyan",
      bg: "bg-cyber-cyan/5",
    },
    {
      title: "Agentic IA",
      icon: <Brain size={18} />,
      skills: ["RAG", "LLM", "CrewAI", "LangChain"],
      color: "border-cyber-magenta",
      bg: "bg-cyber-magenta/5",
    },
    {
      title: "Backend",
      icon: <Terminal size={18} />,
      skills: ["Python", "Django", "Flask", "FastAPI"],
      color: "border-cyber-yellow",
      bg: "bg-cyber-yellow/5",
    },
    {
      title: "Databases",
      icon: <Database size={18} />,
      skills: ["MongoDB", "MySQL", "SQLite", "Redis"],
      color: "border-blue-500",
      bg: "bg-blue-500/5",
    },
    {
      title: "Infrastructure",
      icon: <Box size={18} />,
      skills: ["Docker", "Git", "Linux", "Postman"],
      color: "border-cyber-blue",
      bg: "bg-cyber-blue/5",
    },
    {
      title: "Frontend",
      icon: <Layout size={18} />,
      skills: ["React", "Vue", "Tailwind CSS", "TypeScript"],
      color: "border-white/20",
      bg: "bg-white/5",
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-black flex items-center gap-3">
          <span className="bg-cyber-cyan text-black px-2 text-2xl font-mono">01</span>
          SKILLS
        </h2>
        <div className="h-[1px] w-full bg-gradient-to-r from-cyber-cyan/50 to-transparent mt-2" />
      </div>

      {/* Grid System : 3 colonnes parfaites sur desktop (2 lignes de 3) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`${cat.bg} border ${cat.color} p-6 relative group flex flex-col justify-between overflow-hidden`}
          >
            {/* Décoration d'angle high-tech */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/10 group-hover:border-cyber-cyan/40 transition-colors" />
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-cyber-cyan animate-pulse">{cat.icon}</span>
                <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                  {cat.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 px-2 py-2 bg-black/40 border border-white/5 group/item hover:border-cyber-cyan/30 transition-all"
                  >
                    <span className="text-lg filter grayscale group-hover/item:grayscale-0 transition-all transform group-hover/item:scale-110">
                      <TechIcon name={skill} />
                    </span>
                    <span className="text-[9px] font-mono text-slate-400 group-hover/item:text-white truncate">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Barre de progression décorative "Data-Stream" */}
            <div className="mt-8 flex items-center gap-2 opacity-30">
                <div className="h-[1px] w-full bg-white/10 overflow-hidden">
                    <motion.div 
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "100%" }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="h-full w-1/3 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent"
                    />
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};