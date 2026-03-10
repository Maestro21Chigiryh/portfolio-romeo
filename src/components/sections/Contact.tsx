import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Send, Terminal, CheckCircle, AlertTriangle, MessageSquare, Linkedin } from "lucide-react";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (formRef.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then(() => {
          setStatus("success");
          formRef.current?.reset();
          setTimeout(() => setStatus("idle"), 5000);
        })
        .catch(() => {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 5000);
        });
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-black/40 border border-white/10 cyber-border p-8 md:p-12 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent animate-pulse" />

        <div className="text-center mb-12">
          <MessageSquare className="mx-auto text-cyber-cyan mb-6" size={40} />
          <p className="text-slate-400 font-mono text-sm max-w-md mx-auto">
            Disponible pour de nouvelles opportunités en IA et développement Python. Mon système est prêt à recevoir vos requêtes.
          </p>
        </div>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-cyber-cyan uppercase tracking-widest">Nom</label>
              <input 
                type="text" 
                name="from_name"
                required
                placeholder="Votre nom"
                className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-cyber-cyan outline-none transition-all font-mono"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-cyber-cyan uppercase tracking-widest">Email</label>
              <input 
                type="email" 
                name="from_email"
                required
                placeholder="votre@email.com"
                className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-cyber-cyan outline-none transition-all font-mono"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-mono text-cyber-cyan uppercase tracking-widest">Message</label>
            <textarea 
              name="message"
              required
              rows={4}
              placeholder="Ecrivez votre message ici..."
              className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-cyber-cyan outline-none transition-all font-mono resize-none"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 pt-4">
            <button 
              type="submit"
              disabled={status === "sending"}
              className={`flex-1 py-4 font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all cursor-pointer ${
                status === "sending" ? "bg-slate-700" : 
                status === "success" ? "bg-green-500 text-black" :
                status === "error" ? "bg-red-500 text-white" :
                "bg-cyber-cyan text-black hover:bg-white"
              }`}
            >
              {status === "idle" && <><Send size={18} /> Transmettre</>}
              {status === "sending" && "Initialisation_Envoi..."}
              {status === "success" && <><CheckCircle size={18} /> Message_Envoyé</>}
              {status === "error" && <><AlertTriangle size={18} /> Echec_Transmission</>}
            </button>

            <a 
              href="https://www.linkedin.com/in/rakotondrazafy-faniry-nomena-roméo" 
              target="_blank"
              rel="noopener noreferrer"
              className="md:w-1/3 py-4 border border-white/20 text-white font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:border-cyber-magenta hover:text-cyber-magenta transition-all"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </form>

        <div className="mt-12 pt-6 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-slate-600 uppercase tracking-widest">
          <span>Faniry_Nomena_Romeo</span>
        </div>
      </motion.div>
    </section>
  );
};