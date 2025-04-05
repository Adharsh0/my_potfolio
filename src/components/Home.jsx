
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import './Home.css';

const images = ["profile.jpeg", "profile2.jpeg", "profile3.jpeg"];

const Home = ({ scrollToSection, projectsRef, contactRef }) => {
  const [currentImage, setCurrentImage] = useState(0);

  // Function to move to the next image
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  // Auto-slide images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <motion.section 
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="home-container">
        <motion.div 
          className="home-content"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          
          
          <h1 className="name">
            <span className="greeting">Hi, I'm</span>
            <motion.span 
              className="highlight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Adharsh Udayakumar
            </motion.span>
          </h1>
          
          <h2 className="title">
            <TypeAnimation
              sequence={[
                'Frontend Developer', 2000,
                'Backend Developer', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="animated-text"
            />
            <span className="cursor"></span>
          </h2>
          
          {/* <p className="description">
            I transform ideas into <span className="highlight">exceptional digital experiences</span> through 
            clean code and creative design. Specializing in building modern, 
            responsive web applications with cutting-edge technologies.
          </p> */}
          
          {/* <div className="tech-stack">
            <span className="tech-badge">React</span>
            <span className="tech-badge">JavaScript</span>
            <span className="tech-badge">CSS3</span>
            <span className="tech-badge">HTML5</span>
            <span className="tech-badge">Tailwind</span>
          </div> */}
          
          <div className="cta-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection(projectsRef)}
            >
              Explore My Work
              <i className="fas fa-arrow-right"></i>
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection(contactRef)}
            >
              Let's Connect
            </button>
          </div>
          
          <div className="social-links">
            <motion.a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              whileHover={{ y: -5, scale: 1.1 }}
            >
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              whileHover={{ y: -5, scale: 1.1 }}
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>
            <motion.a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Twitter"
              whileHover={{ y: -5, scale: 1.1 }}
            >
              <i className="fab fa-twitter"></i>
            </motion.a>
          </div>
        </motion.div>
        
        {/* Image Auto-Slider + Clickable */}
        <motion.div 
          className="home-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="image-container" onClick={nextImage}>
            <div className="image-backdrop"></div>
            <AnimatePresence mode="wait">
              <motion.img 
                key={images[currentImage]}
                src={images[currentImage]} 
                alt="Adharsh Udayakumar" 
                className="profile-image"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
            {/* Floating Cards (Unchanged) */}
            <div className="floating-card card-experience">
              <span className="card-number">3+</span>
              <span className="card-text">Years Experience</span>
            </div>
            <div className="floating-card card-projects">
              <span className="card-number">15+</span>
              <span className="card-text">Projects</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </motion.section>
  );
};

export default Home;
