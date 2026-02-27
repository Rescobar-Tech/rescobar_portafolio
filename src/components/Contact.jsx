import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FaCheckCircle } from "react-icons/fa";

import { imgform } from "../assets"; 

const Contact = ({ language }) => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const texts = {
    es: {
      sub: "Ponte en contacto",
      head: "Contáctame",
      name: "Tu Nombre",
      namePlace: "¿Cuál es tu nombre?",
      email: "Tu correo",
      emailPlace: "¿Cuál es tu correo electrónico?",
      message: "Tu mensaje",
      messagePlace: "¿Qué quieres decirme?",
      btn: "Enviar",
      btnLoading: "Enviando...",
      alertSuccess: "¡Gracias! Me pondré en contacto contigo pronto.",
      alertError: "Hubo un error al enviar el mensaje. Inténtalo de nuevo.",
    },
    en: {
      sub: "Get in touch",
      head: "Contact",
      name: "Your Name",
      namePlace: "What's your name?",
      email: "Your email",
      emailPlace: "What's your email address?",
      message: "Your message",
      messagePlace: "What do you want to say?",
      btn: "Send",
      btnLoading: "Sending...",
      alertSuccess: "Thank you! I will get back to you soon.",
      alertError: "Something went wrong. Please try again later.",
    }
  };

  const content = texts[language] || texts.es;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // USO DIRECTO DE TUS CREDENCIALES PARA ASEGURAR FUNCIONAMIENTO
    emailjs
      .send(
        "service_9jq8qrj", // Service ID
        "template_15mvar9", // Template ID
        {
          from_name: form.name,
          to_name: "Rafael Escobar",
          from_email: form.email,
          to_email: "rescobar.tech@gmail.com",
          message: form.message,
        },
        "SbVodlG6dL1qT7J0d" // Public Key
      )
      .then(
        () => {
          setLoading(false);
          setShowToast(true);
          setTimeout(() => setShowToast(false), 4000);
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error("EMAILJS ERROR:", error);
          alert(content.alertError); // Alerta básica si falla
        }
      )
      .catch((err) => {
        setLoading(false);
        console.error("CRITICAL ERROR:", err);
      });
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden relative">
      
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
            className="flex justify-center w-auto pointer-events-none"
          >
            <div className="bg-[#3399FF] text-white px-8 py-4 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex items-center gap-3 font-bold border-2 border-white/20 pointer-events-auto min-w-max">
              <FaCheckCircle className="text-xl shrink-0" />
              <span className="whitespace-nowrap">{content.alertSuccess}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl z-10'
      >
        <p className={styles.sectionSubText}>{content.sub}</p>
        <h3 className={styles.sectionHeadText}>{content.head}</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{content.name}</span>
            <input required type='text' name='name' value={form.name} onChange={handleChange} placeholder={content.namePlace} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#3399FF] transition-all' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{content.email}</span>
            <input required type='email' name='email' value={form.email} onChange={handleChange} placeholder={content.emailPlace} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#3399FF] transition-all' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{content.message}</span>
            <textarea required rows={7} name='message' value={form.message} onChange={handleChange} placeholder={content.messagePlace} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#3399FF] transition-all' />
          </label>

          <button type='submit' className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#3399FF] transition-all active:scale-95'>
            {loading ? content.btnLoading : content.btn}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 flex items-center justify-center min-h-[400px] lg:min-h-[550px] relative'
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full flex items-center justify-center relative"
        >
          <img 
            src={imgform} 
            alt='Cloud Computing' 
            style={{
              WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 70%)',
              maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 70%)'
            }}
            className='w-[90%] lg:w-[110%] h-auto object-contain z-10 opacity-90 brightness-110' 
          />
          <div className="absolute w-[60%] h-[60%] bg-[#3399FF] opacity-20 blur-[100px] rounded-full -z-0" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");