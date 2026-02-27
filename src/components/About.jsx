import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { foto1, foto2 } from "../assets"; 

const ServiceCard = ({ index, title, icon, language }) => (
  <motion.div
    // La clave dinámica ayuda a que Framer Motion reinicie la animación individualmente
    key={`${language}-${index}`}
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    viewport={{ once: true, amount: 0.25 }}
    className='xs:w-[250px] w-full'
  >
    <Tilt 
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
      className='w-full'
    >
      <div className='w-full blue-gradient p-[1px] rounded-[20px] shadow-card'>
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const About = ({ language }) => {
  const texts = {
    es: {
      sub: "INTRODUCCIÓN",
      head: "Acerca de mi.",
      p: "Especialista Senior en infraestructura IT con más de 8 años de trayectoria. Experto en la modernización de entornos empresariales mediante el ecosistema Microsoft 365 y soluciones de nube en Azure.",
      caption1: "Ciberseguridad",
      caption2: "M365 Security" 
    },
    en: {
      sub: "INTRODUCTION",
      head: "About Me.",
      p: "Senior IT Infrastructure Specialist with over 8 years of experience. Expert in modernizing enterprise environments using the Microsoft 365 ecosystem and Azure.",
      caption1: "Cybersecurity",
      caption2: "M365 Security"
    }
  };

  const content = texts[language] || texts.es;
  const currentServices = services[language] || services.es;

  return (
    // Agregamos una key al div contenedor para que todo el bloque se refresque al cambiar idioma
    <div key={language}>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start">
        <div className="flex-[0.75] w-full">
          <motion.div 
            variants={textVariant()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className={styles.sectionSubText}>{content.sub}</p>
            <h2 className={styles.sectionHeadText}>{content.head}</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className='mt-4 text-secondary text-[16px] md:text-[17px] max-w-3xl leading-[26px] md:leading-[30px]'
          >
            {content.p}
          </motion.p>
        </div>

        {/* COMPOSICIÓN DE FOTOS */}
        <motion.div 
          variants={fadeIn("left", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex-[0.5] relative w-full flex justify-center items-center mt-16 lg:mt-0"
        >
          <div className="relative w-[240px] h-[240px] md:w-[320px] md:h-[320px]">
            <img 
              src={foto1} 
              alt="Main"
              className="w-full h-full object-cover rounded-3xl border-2 border-[#3399FF]/50 shadow-2xl"
            />
            
            <div className="absolute -bottom-6 -left-4 md:-bottom-10 md:-left-12 w-[140px] md:w-[220px] z-10">
              <img 
                src={foto2} 
                alt="Secondary"
                className="w-full rounded-2xl border-4 border-primary shadow-2xl"
              />
              <div className="absolute -bottom-2 right-2 bg-tertiary/90 px-2 py-1 rounded-md border border-white/10">
                <p className="text-white text-[9px] md:text-[10px] font-medium">{content.caption2}</p>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[#3399FF] opacity-10 blur-[80px] rounded-full -z-10" />
        </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {currentServices.map((service, index) => (
          <ServiceCard 
            key={`${language}-${index}`} 
            index={index} 
            language={language}
            {...service} 
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");