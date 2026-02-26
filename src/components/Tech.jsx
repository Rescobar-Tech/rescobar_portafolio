import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles"; 
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Tech = ({ language }) => {
  // Definimos los textos para los encabezados según el idioma
  const texts = {
    es: {
      sub: "HERRAMIENTAS Y SOFTWARE",
      head: "Conocimientos Tecnológicos.",
    },
    en: {
      sub: "TOOLS AND SOFTWARE",
      head: "Technical Skills.",
    }
  };

  // Seleccionamos el contenido (por defecto español)
  const content = texts[language] || texts.es;

  return (
    <>
      <motion.div variants={textVariant()} className="mb-10">
        <p className={`${styles.sectionSubText} text-center`}>
          {content.sub}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {content.head}
        </h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");