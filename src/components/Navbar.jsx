import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo_microsoft from "../assets/logo_microsoft.png";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = ({ language, setLanguage }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const currentNavLinks = navLinks[language] || navLinks.es;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para alternar el idioma
  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-50 ${
        scrolled ? "bg-primary shadow-lg" : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo_microsoft} alt='logo' className='w-10 h-10 md:w-12 md:h-12 object-contain'/>
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Rafael &nbsp;
            <span className='sm:block hidden'> | M365 & Azure Specialist</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className='list-none hidden sm:flex flex-row items-center gap-10'>
          {currentNavLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-secondary"} 
              hover:text-white text-[18px] font-medium cursor-pointer transition-colors`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          
          {/* Selector de Idioma Desktop */}
          <button
            onClick={toggleLanguage}
            className="bg-tertiary py-1 px-3 rounded-lg border border-white/20 text-[14px] font-bold text-white hover:bg-[#3399FF] hover:border-white transition-all ml-4"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
        </ul>

        {/* Mobile Navigation */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          {/* Selector de Idioma Móvil (fuera del menú para acceso rápido) */}
          <button
            onClick={toggleLanguage}
            className="bg-tertiary py-1 px-3 rounded-lg border border-white/20 text-[14px] font-bold text-white mr-4"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>

          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"} 
            p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-50 rounded-xl shadow-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {currentNavLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;