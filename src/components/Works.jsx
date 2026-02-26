import React from "react";
import Tilt from "react-parallax-tilt"; // Cambiado a react-parallax-tilt que es más estable
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { drive } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    // He quitado el delay excesivo para que en móvil carguen más rápido al hacer scroll
    <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.75)}>
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1.05}
        transitionSpeed={450}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-lg"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-white/10"
            >
              <img src={drive} alt="link" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5 text-left">
          <h3 className="text-white font-bold text-[22px] md:text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-[20px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[12px] md:text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = ({ language }) => {
  const texts = {
    es: {
      sub: "MIS TRABAJOS RECIENTES",
      head: "Proyectos.",
      desc: "Los siguientes proyectos demuestran mi capacidad técnica para liderar transformaciones digitales complejas.",
    },
    en: {
      sub: "MY RECENT WORK",
      head: "Projects.",
      desc: "The following projects demonstrate my technical capacity to lead complex digital transformations.",
    },
  };

  const content = texts[language] || texts.es;
  const currentProjects = projects[language] || projects.es;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{content.sub}</p>
        <h2 className={styles.sectionHeadText}>{content.head}</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[16px] md:text-[17px] max-w-3xl leading-[26px] md:leading-[30px]"
        >
          {content.desc}
        </motion.p>
      </div>

      {/* Grid corregido para asegurar visibilidad en móvil */}
      <div className="mt-16 flex flex-wrap gap-7 justify-center">
        {currentProjects.map((project, index) => (
          <ProjectCard 
            key={`${language}-project-${index}`} 
            index={index} 
            {...project} 
          />
        ))}
      </div>
    </>
  );
};

// Se asegura que la sección se active un poco antes de llegar a ella (viewport once:true)
export default SectionWrapper(Works, "work");