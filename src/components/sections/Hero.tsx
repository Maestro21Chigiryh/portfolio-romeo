// src/components/sections/Hero.tsx
import { motion } from "framer-motion";
import { DATA } from "../../data/portfolio";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center p-6 pt-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-cyan/10 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 border border-cyber-cyan text-cyber-cyan text-[20px] tracking-[0.4em] uppercase mb-5 bg-cyber-cyan/5">
           Bonjour , Je suis :
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 leading-[0.9]">
            {DATA.name.split(' ').slice(0, 3).join(' ')} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-magenta">
              {DATA.name.split(' ')[3]}
            </span>
          </h1>
          <p className="text-lg text-slate-400 font-light max-w-xl leading-relaxed mb-10 border-l-2 border-cyber-magenta pl-6">
            {DATA.bio}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono opacity-70">
            <div className="flex items-center gap-3"><Mail size={16} className="text-cyber-cyan" /> {DATA.email}</div>
            <div className="flex items-center gap-3"><Phone size={16} className="text-cyber-cyan" /> {DATA.phone}</div>
            <div className="flex items-center gap-3"><MapPin size={16} className="text-cyber-cyan" /> {DATA.address}</div>
            <div className="flex items-center gap-3"><Linkedin size={16} className="text-cyber-cyan" /> RAKOTONDRAZAFY Faniry Nomena Romeo</div>
          </div>
        </motion.div>

        {/* Photo de profil avec HUD */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative group justify-self-center"
        >
          {/* Cercles de scan IA autour de la photo */}
          <div className="absolute -inset-10 border border-cyber-cyan/20 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute -inset-10 border-t-2 border-cyber-cyan rounded-full animate-[spin_3s_linear_infinite]" />
          
          <div className="relative w-64 h-64 md:w-96 md:h-96 cyber-border overflow-hidden border-2 border-white/10">
            {/* LASER SCAN EFFECT */}
            <div className="laser-beam z-20" />
            
            <img 
              src="/me.png" 
              alt="Faniry Romeo"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"; }}
            />
            
            {/* HUD Overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div className="bg-black/80 backdrop-blur-md p-2 border-l-2 border-cyber-cyan">
                <p className="text-[10px] font-mono text-cyber-cyan">DATA_FLOW: 98%</p>
                <div className="w-20 h-1 bg-cyber-cyan/30 mt-1">
                    <div className="w-full h-full bg-cyber-cyan animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};