import { 
  SiPython, SiDjango, SiFlask, SiFastapi, SiReact, SiTailwindcss, 
  SiTypescript, SiTensorflow, SiKeras, SiOpencv, SiScikitlearn, 
  SiPandas, SiNumpy, SiDocker, SiPostman, SiLinux, SiOpenai, SiLangchain, SiPytorch, SiPydantic, SiVuedotjs, SiMongodb, SiMysql, SiSqlite, SiRedis
} from "react-icons/si";
import { Brain, Cpu, Database, Network, Terminal, Layout } from "lucide-react";

const iconMap: { [key: string]: any } = {
  "Python": <SiPython className="group-hover:text-[#3776AB] transition-colors" />,
  "Django": <SiDjango className="group-hover:text-[#092E20] transition-colors" />,
  "Flask": <SiFlask className="group-hover:text-white transition-colors" />,
  "FastAPI": <SiFastapi className="group-hover:text-[#05998b] transition-colors" />,
  "React": <SiReact className="group-hover:text-[#61DAFB] transition-colors" />,
  "Tailwind CSS": <SiTailwindcss className="group-hover:text-[#06B6D4] transition-colors" />,
  "TypeScript": <SiTypescript className="group-hover:text-[#3178C6] transition-colors" />,
  "TensorFlow": <SiTensorflow className="group-hover:text-[#FF6F00] transition-colors" />,
  "OpenCV": <SiOpencv className="group-hover:text-[#5C3EE8] transition-colors" />,
  "Scikit-learn": <SiScikitlearn className="group-hover:text-[#F7931E] transition-colors" />,
  "Pandas": <SiPandas className="group-hover:text-[#150458] transition-colors" />,
  "NumPy": <SiNumpy className="group-hover:text-[#013243] transition-colors" />,
  "RAG": <Database className="group-hover:text-cyber-cyan transition-colors" />,
  "LLM": <Brain className="group-hover:text-cyber-magenta transition-colors" />,
  "CrewAI": <Network className="group-hover:text-cyber-yellow transition-colors" />,
  "LangChain": <SiLangchain className="group-hover:text-[#1C3C3C] transition-colors" />,
  "Docker": <SiDocker className="group-hover:text-[#2496ED] transition-colors" />,
  "Postman": <SiPostman className="group-hover:text-[#FF6C37] transition-colors" />,
  "Linux": <SiLinux className="group-hover:text-white transition-colors" />,
  "Pydantic": <SiPydantic className="group-hover:text-[#E92063] transition-colors" />,
  "Vue": <SiVuedotjs className="text-[#4FC08D]" />,
  "MongoDB": <SiMongodb className="text-[#47A248]" />,
  "MySQL": <SiMysql className="text-[#4479A1]" />,
  "SQLite": <SiSqlite className="text-[#003B57]" />,
  "Redis": <SiRedis className="text-[#DC382D]" />,
};

export const TechIcon = ({ name }: { name: string }) => {
  return iconMap[name] || <Terminal size={18} />;
};