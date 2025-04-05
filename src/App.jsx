// App.jsx
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';



const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const refs = { homeRef, aboutRef, projectsRef, skillsRef, contactRef };

  return (
    <motion.div 
    className="app"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    style={{ overflowX: "hidden" }} // ADD THIS
  >
  
      <Navbar scrollToSection={scrollToSection} refs={refs} />
      <main className="main-content">
        <section ref={homeRef}>
          <Home scrollToSection={scrollToSection} projectsRef={projectsRef} contactRef={contactRef} />
        </section>
        <section ref={aboutRef}>
          <About scrollToSection={scrollToSection} contactRef={contactRef} />
        </section>
        <section ref={projectsRef}>
          <Projects/>
        </section>
        <section ref={skillsRef}>
          <Skills />
        </section>
        <section ref={contactRef}>
          <Contact/>
        </section>
      </main>
      <Footer scrollToSection={scrollToSection} refs={refs} />
    </motion.div>
  );
};

export default App;