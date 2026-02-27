import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import rafael from "../assets/rafael.png"; 
import cv_es from "../assets/CV_Rafael_Escobar_(ES).pdf"; 
import cv_en from "../assets/CV_Rafael_Escobar_(EN).pdf"; 
import { styles } from "../styles";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaCheckCircle } from "react-icons/fa";

const Hero = ({ language }) => {
  const [showToast, setShowToast] = useState(false);

  const { scrollY } = useScroll();
  const mouseMoveY = useTransform(scrollY, [0, 300], [0, 100]);
  const mouseOpacity = useTransform(scrollY, [0, 250], [0.6, 0]);

  const texts = {
    es: {
      greet: "Hola, soy",
      sub: "Especialista en M365 & Azure",
      desc: "Modernizo infraestructuras empresariales y fortalezco la ciberseguridad cloud.",
      status: "Disponible para trabajar",
      download: "Descargar CV",
      fileName: "CV_Rafael_Escobar_(ES).pdf", // Nombre limpio para la descarga
      copyMsg: "¡Correo copiado con éxito!" 
    },
    en: {
      greet: "Hi, I'm",
      sub: "M365 & Azure Specialist",
      desc: "I modernize enterprise infrastructures and strengthen cloud cybersecurity.",
      status: "Available for work",
      download: "Download CV",
      fileName: "CV_Rafael_Escobar_(EN).pdf", // Nombre limpio para la descarga
      copyMsg: "Email copied successfully!"
    }
  };

  const content = texts[language] || texts.es;
  const currentCV = language === "en" ? cv_en : cv_es;

  const copyToClipboard = () => {
    navigator.clipboard.writeText("rescobar.tech@gmail.com");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <section className="relative w-full min-h-screen mx-auto flex flex-col justify-center items-center overflow-hidden pt-24 md:pt-0 z-10">
      
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -50, x: "-50%" }}
            style={{ 
              zIndex: 99999, 
              position: 'fixed', 
              top: '100px', 
              left: '50%',
            }}
            className="flex justify-center w-auto pointer-events-none px-4"
          >
            <div className="bg-[#3399FF] text-white px-6 py-3 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex items-center gap-3 font-bold border-2 border-white/20 pointer-events-auto min-w-max">
              <FaCheckCircle className="text-xl shrink-0" />
              <span className="whitespace-nowrap text-sm md:text-base">
                {content.copyMsg}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col items-center gap-4 md:gap-6 text-center relative`}>
        
        {/* Foto de Perfil */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div className="w-[150px] h-[150px] xs:w-[180px] xs:h-[180px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden border-4 border-[#3399FF] shadow-[0_0_50px_rgba(51,153,255,0.3)] bg-tertiary">
            <img src={rafael} alt="Rafael Escobar" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -inset-2 bg-[#3399FF] rounded-full blur-2xl opacity-20 -z-10" />
        </motion.div>

        {/* Textos Principales */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-white font-black text-[32px] xs:text-[42px] sm:text-[60px] lg:text-[80px] leading-tight">
            {content.greet} <span className="text-[#3399FF]">Rafael</span>
          </h1>
          <h2 className="text-[18px] md:text-[24px] lg:text-[28px] font-medium text-white-100 mt-2">
            {content.sub}
          </h2>
          <p className="text-secondary text-[14px] md:text-[17px] lg:text-[18px] max-w-lg mt-3 leading-relaxed px-2">
            {content.desc}
          </p>
        </motion.div>

        {/* Badge de Estatus */}
        <div className="bg-[#3399FF]/10 border border-[#3399FF] px-4 py-1 rounded-full mt-2">
          <span className="text-[#3399FF] text-xs md:text-sm font-semibold italic">
            ● {content.status}
          </span>
        </div>

        {/* Botonera Social & CV */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mt-4 relative z-50 w-full max-w-md sm:max-w-none px-4">
          <a href="https://www.linkedin.com/in/rafael-escobar-2456161b0" target="_blank" rel="noopener noreferrer" className="bg-tertiary/50 border border-white/10 px-5 py-2.5 rounded-full text-white text-xs md:text-sm flex items-center justify-center gap-2 hover:bg-[#3399FF] transition-all cursor-pointer">
            <FaLinkedin className="text-lg" /> LinkedIn
          </a>

          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="bg-tertiary/50 border border-white/10 px-5 py-2.5 rounded-full text-white text-xs md:text-sm flex items-center justify-center gap-2 hover:bg-[#3399FF] transition-all cursor-pointer">
            <FaGithub className="text-lg" /> GitHub
          </a>

          <button onClick={copyToClipboard} className="bg-tertiary/50 border border-white/10 px-5 py-2.5 rounded-full text-white text-xs md:text-sm flex items-center justify-center gap-2 hover:bg-[#3399FF] transition-all cursor-pointer overflow-hidden">
            <FaEnvelope className="text-lg shrink-0" /> 
            <span className="truncate">rescobar.tech@gmail.com</span>
          </button>

          {/* CORRECCIÓN: download={content.fileName} fuerza el nombre sin el hash de Vite */}
          <a 
            href={currentCV} 
            download={content.fileName} 
            className="bg-[#3399FF] border border-[#3399FF] px-6 py-2.5 rounded-full text-white text-xs md:text-sm flex items-center justify-center gap-2 hover:bg-[#267ACC] transition-all font-bold shadow-lg cursor-pointer"
          >
            <FaDownload className="text-lg" /> {content.download}
          </a>
        </div>
      </div>

      <motion.div 
        style={{ y: mouseMoveY, opacity: mouseOpacity }}
        className="absolute bottom-5 w-full hidden xs:flex justify-center items-center z-30 pointer-events-none"
      >
        <a href="#about" className="pointer-events-auto">
          <div className="w-[30px] h-[50px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-1.5 h-1.5 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;