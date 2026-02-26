import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { drive } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={drive}
                alt="google drive"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
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
      desc: "Los siguientes proyectos demuestran mi capacidad técnica para liderar transformaciones digitales complejas, desde la modernización de entornos legados hasta el fortalecimiento de la postura de seguridad cloud. Cada caso refleja un enfoque basado en la automatización, la continuidad operativa y el cumplimiento de estándares críticos de ciberseguridad.",
    },
    en: {
      sub: "MY RECENT WORK",
      head: "Projects.",
      desc: "The following projects demonstrate my technical capacity to lead complex digital transformations, from modernizing legacy environments to strengthening cloud security posture. Each case reflects an approach based on automation, operational continuity, and compliance with critical cybersecurity standards.",
    },
  };

  const content = texts[language] || texts.es;
  const currentProjects = projects[language] || projects.es;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>{content.sub}</p>
        <h2 className={`${styles.sectionHeadText}`}>{content.head}</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {content.desc}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {currentProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");