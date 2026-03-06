import { motion } from "framer-motion";

export const CyberCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="relative p-6 bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden group"
    >
      {/* Petit accent néon dans le coin */}
      <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-400 opacity-50 group-hover:scale-150 transition-transform" />
      {children}
    </motion.div>
  );
};