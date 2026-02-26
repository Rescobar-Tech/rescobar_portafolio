import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { FaLinkedin, FaGithub, FaEnvelope, FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";

const Footer = ({ language }) => {
  const [showToast, setShowToast] = useState(false);
  const myEmail = "rescobar.tech@gmail.com";

  const texts = {
    es: { 
      title: "¡Hablemos!", 
      sub: "¿Tienes un proyecto en mente?", 
      copyMsg: "¡Correo copiado!",
      location: "Venezuela" 
    },
    en: { 
      title: "Let's Talk!", 
      sub: "Do you have a project in mind?", 
      copyMsg: "Email copied!",
      location: "Venezuela" 
    }
  };

  const content = texts[language] || texts.es;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(myEmail);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <footer className="relative w-full py-10 bg-primary border-t border-white/5">
      
      {/* Alerta de copiado */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: -40 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute left-1/2 -translate-x-1/2 z-50 bg-[#3399FF] text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-bold whitespace-nowrap"
          >
            <FaCheckCircle /> {content.copyMsg}
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8`}>
        
        {/* Lado Izquierdo: Textos */}
        <div className="text-center md:text-left">
          <h3 className="text-white text-[24px] font-bold">{content.title}</h3>
          <p className="text-secondary text-[16px]">{content.sub}</p>
        </div>

        {/* Lado Derecho: Bloque alineado */}
        <div className="flex flex-col items-center md:items-end gap-3">
          
          {/* Fila de Iconos */}
          <div className="flex gap-6 items-center pr-1"> 
            <a 
              href="https://www.linkedin.com/in/rafael-escobar-2456161b0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-[#3399FF] text-2xl transition-all hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/tu-usuario" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-[#3399FF] text-2xl transition-all hover:scale-110"
            >
              <FaGithub />
            </a>
            <button 
              onClick={copyToClipboard}
              className="text-secondary hover:text-[#3399FF] text-2xl transition-all hover:scale-110"
            >
              <FaEnvelope />
            </button>
          </div>

          {/* Bloque de Información: Correo y Ubicación alineados al mismo margen */}
          <div className="flex flex-col items-center md:items-end w-full">
            <button 
              onClick={copyToClipboard}
              className="text-secondary hover:text-white text-sm font-mono transition-colors mb-1"
            >
              {myEmail}
            </button>
            <div className="flex items-center gap-2 text-secondary/60 text-xs">
              <FaMapMarkerAlt className="text-[#3399FF]" />
              <span>{content.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright final */}
      <div className="mt-10 text-center border-t border-white/5 pt-6">
        <p className="text-secondary text-[12px] opacity-40 uppercase tracking-widest">
          © 2026 Rafael Escobar • M365 & Azure Specialist
        </p>
      </div>
    </footer>
  );
};

export default Footer;