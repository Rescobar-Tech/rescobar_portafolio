import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC(props) { 
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        // CORRECCIÓN TÉCNICA: Bajamos amount a 0.1 para que dispare la visibilidad en móviles
        viewport={{ once: true, amount: 0.1 }} 
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        {/* Pasamos las props al componente hijo */}
        <Component {...props} /> 
      </motion.section>
    );
  };

export default StarWrapper;