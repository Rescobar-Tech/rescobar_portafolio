import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#0C1427", 
        color: "#fff",
        borderBottom: "4px solid #0078D4", 
      }}
      contentArrowStyle={{ borderRight: "7px solid #0C1427" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        /* CORRECCIÓN: Se reduce el tamaño al 75% y se asegura el centrado total */
        <div className='flex justify-center items-center w-full h-full overflow-hidden rounded-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            /* object-contain evita que la imagen se deforme y 75% le da margen de seguridad */
            className='w-[75%] h-[75%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = ({ language }) => {
  const texts = {
    es: {
      sub: "LO QUE HE HECHO HASTA AHORA: CERTIFICACIONES &",
      head: "Experiencia Laboral.",
    },
    en: {
      sub: "WHAT I HAVE DONE SO FAR: CERTIFICATIONS &",
      head: "Work Experience.",
    }
  };

  const currentLanguage = language || 'es';
  const content = texts[currentLanguage];
  const currentExperiences = experiences[currentLanguage] || experiences.es;

  return (
    <>
      <div className="w-full flex flex-col items-center mb-10">
        <p className={styles.sectionSubText}>
          {content.sub}
        </p>
        <h2 className={styles.sectionHeadText}>
          {content.head}
        </h2>
      </div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline key={currentLanguage}>
          {currentExperiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${currentLanguage}-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");