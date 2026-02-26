import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Importación de tus fotos
import { foto1, foto2 } from "../assets"; 

const ServiceCard = ({ index, title, icon }) => (
  <Tilt 
    className='xs:w-[250px] w-full'
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full blue-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = ({ language }) => {
  const texts = {
    es: {
      sub: "INTRODUCCIÓN",
      head: "Acerca de Mi.",
      p: "Especialista Senior en infraestructura IT con más de 8 años de trayectoria. Experto en la modernización de entornos empresariales mediante el ecosistema Microsoft 365 (Exchange Online, SharePoint, Microsoft Defender, Purview) y soluciones de nube en Azure. Enfocado en la automatización con Terraform y la seguridad avanzada para garantizar la continuidad operativa y la protección de datos corporativos.",
      caption1: "Operaciones de Ciberseguridad",
      caption2: "Conferencia de Seguridad Microsoft 365" // Actualizado
    },
    en: {
      sub: "INTRODUCTION",
      head: "About Me.",
      p: "Senior IT Infrastructure Specialist with over 8 years of experience. Expert in modernizing enterprise environments using the Microsoft 365 ecosystem (Exchange Online, SharePoint, Microsoft Defender, Purview) and Azure cloud solutions. Focused on automation with Terraform and advanced security to ensure operational continuity and corporate data protection.",
      caption1: "Cybersecurity Ops",
      caption2: "Microsoft 365 Security Conference" // Actualizado
    }
  };

  const content = texts[language] || texts.es;
  const currentServices = services[language] || services.es;

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* COLUMNA IZQUIERDA: TEXTO */}
        <div className="flex-[0.75]">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>{content.sub}</p>
            <h2 className={styles.sectionHeadText}>{content.head}</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            {content.p}
          </motion.p>
        </div>

        {/* COLUMNA DERECHA: COMPOSICIÓN DE FOTOS */}
        <motion.div 
          variants={fadeIn("left", "tween", 0.3, 1)}
          className="flex-[0.5] relative w-full flex justify-center lg:justify-end mt-10 lg:mt-0"
        >
          {/* Contenedor de la foto principal - Tamaño reducido a 340px para mejor balance */}
          <div className="relative w-[260px] h-[260px] md:w-[340px] md:h-[340px] group">
            <img 
              src={foto1} 
              alt="Cybersecurity Lab"
              className="w-full h-full object-cover rounded-3xl border-2 border-[#3399FF]/50 shadow-[0_0_30px_rgba(51,153,255,0.2)]"
            />
            
            {/* Caption 1: Operaciones de Ciberseguridad */}
            <div className="absolute -top-4 -right-4 bg-tertiary/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-[#3399FF]/40 hidden md:block z-20">
              <p className="text-[#3399FF] text-[12px] font-bold tracking-widest uppercase">
                {content.caption1}
              </p>
            </div>

            {/* Foto Secundaria Solapada (Conferencia) */}
            <div className="absolute -bottom-8 -left-8 md:-bottom-10 md:-left-12 w-[160px] md:w-[240px] z-10">
              <img 
                src={foto2} 
                alt="Microsoft 365 Conference"
                className="w-full rounded-2xl border-4 border-primary shadow-2xl transition-transform hover:scale-105"
              />
              {/* Caption 2: Conferencia de Seguridad Microsoft 365 (Dinámico) */}
              <div className="absolute -bottom-2 right-4 bg-tertiary/90 px-3 py-1 rounded-md border border-white/10 whitespace-nowrap">
                <p className="text-white text-[10px] font-medium">
                  {content.caption2}
                </p>
              </div>
            </div>
          </div>

          {/* Resplandor Azure de fondo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#3399FF] opacity-10 blur-[100px] rounded-full -z-10" />
        </motion.div>
      </div>

      {/* TARJETAS DE SERVICIOS */}
      <div className='mt-24 flex flex-wrap gap-10 justify-center'>
        {currentServices.map((service, index) => (
          <ServiceCard key={`${language}-${index}`} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");