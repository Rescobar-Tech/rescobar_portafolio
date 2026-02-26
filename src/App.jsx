import { useState } from "react"; 
import { BrowserRouter } from "react-router-dom";
import { 
  About, 
  Contact, 
  Experience, 
  Feedbacks, 
  Hero, 
  Navbar, 
  Tech, 
  Works, 
  StarsCanvas, 
  Footer,
  SecurityLab 
} from "./components";

const App = () => {
  // El estado del idioma se mantiene en el padre para distribuirlo a los hijos
  const [language, setLanguage] = useState('es');

  return (
    <BrowserRouter>
      {/* CORRECCIÓN: Se eliminó 'key={language}' de este div. 
          Esto evita que React desmonte toda la aplicación al cambiar de idioma,
          eliminando los saltos de scroll y parpadeos.
      */}
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar language={language} setLanguage={setLanguage} />
          <Hero language={language} />
        </div>
        
        <About language={language} />
        <Experience language={language} />
        <Tech language={language} />
        
        {/* Sección de Proyectos */}
        <Works language={language} />

        {/* Sección Interactiva: Simulador / Security Lab */}
        <div className='relative z-0'>
          <SecurityLab language={language} />
        </div>

        <Feedbacks language={language} />
        
        <div className='relative z-0'>
          <Contact language={language} />
          <StarsCanvas />
        </div>

        <Footer language={language} />
      </div>
    </BrowserRouter>
  );
}

export default App;