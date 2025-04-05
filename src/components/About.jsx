import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import './About.css';
import profileImg from '../assets/profile2.jpeg';

const About = ({ scrollToSection, contactRef }) => {
  const experienceYears = new Date().getFullYear() - 2020;
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true, margin: '-100px' });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.6, -0.05, 0.01, 0.99],
        stiffness: 100
      }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const floatingCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: 0.3 + (custom * 0.2)
      }
    }),
    hover: {
      y: -15,
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
      transition: {
        yoyo: Infinity,
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const techBadgeVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: custom => ({
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5, 
        delay: 0.6 + (custom * 0.1)
      }
    }),
    hover: { 
      scale: 1.2, 
      y: -5,
      color: "#8E54E9",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.section 
      className="about"
      ref={aboutRef}
      initial="hidden"
      animate={controls}
      exit="hidden"
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="background-elements">
        <motion.div 
          className="animated-gradient"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.6 } : {}}
          transition={{ duration: 1.2 }}
        />
        
        <motion.div 
          className="shape shape-1"
          initial={{ opacity: 0, y: 100, rotate: -20 }}
          animate={isInView ? { opacity: 0.15, y: 0, rotate: 0 } : {}}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
        
        <motion.div 
          className="shape shape-2"
          initial={{ opacity: 0, y: -100, rotate: 20 }}
          animate={isInView ? { opacity: 0.15, y: 0, rotate: 0 } : {}}
          transition={{ duration: 1.5, delay: 0.4 }}
        />
        
        <motion.div 
          className="shape shape-3"
          initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
          animate={isInView ? { opacity: 0.15, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 1.5, delay: 0.6 }}
        />
        
        {/* Particles */}
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: Math.random() * 0.5 + 0.1
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                transition: {
                  duration: Math.random() * 20 + 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }
              }}
              style={{
                width: Math.random() * 6 + 2,
                height: Math.random() * 6 + 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="about-container">
        {/* Section Header */}
        <motion.div 
          className="section-header"
          variants={fadeInUp}
        >
          <motion.span 
            className="section-badge"
            variants={scaleUp}
          >
            Get To Know Me
          </motion.span>
          
          <motion.h2 
            className="section-title"
            variants={fadeInUp}
          >
            About <span className="title-highlight">Me</span>
          </motion.h2>
          
          <motion.div
            className="title-separator"
            initial={{ width: 0 }}
            animate={isInView ? { width: "60px" } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        {/* Main Content */}
        <div className="about-content">
          {/* Profile Image Section */}
          <motion.div 
            className="about-image"
            variants={scaleUp}
          >
            <div className="image-container">
              <motion.div 
                className="image-backdrop primary"
                initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                animate={isInView ? { scale: 1, opacity: 1, rotate: -5 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              
              <motion.div 
                className="image-backdrop secondary"
                initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
                animate={isInView ? { scale: 1, opacity: 1, rotate: 5 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              
              <motion.div 
                className="image-frame"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.img 
                  src={profileImg} 
                  alt="Profile" 
                  className="profile-image"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  whileHover={{ scale: 1.03 }}
                />
                <motion.div className="image-overlay" />
              </motion.div>
              
              {/* Floating Cards */}
              <motion.div 
                variants={floatingCardVariants}
                custom={0}
                whileHover="hover"
                className="floating-card card-experience"
              >
                <span className="card-number">{experienceYears}+</span>
                <span className="card-text">Years Coding</span>
              </motion.div>

              <motion.div 
                variants={floatingCardVariants}
                custom={1}
                whileHover="hover"
                className="floating-card card-projects"
              >
                <span className="card-number">5+</span>
                <span className="card-text">Projects</span>
              </motion.div>
              
            
            </div>
          </motion.div>

          {/* About Text Content */}
          <motion.div 
            className="about-text"
            variants={containerVariants}
          >
            <div className="about-sections">
              {/* Who I Am Section */}
              <motion.div 
                className="about-section"
                variants={fadeInUp}
                custom={0}
              >
                <motion.h3 variants={fadeInLeft}>
                  <motion.span className="section-icon">👨‍💻</motion.span> Who I Am
                </motion.h3>
                <motion.p variants={fadeInRight}>
                  I'm a passionate <span className="highlight">full-stack developer</span> specializing in creating interactive 
                  and intuitive web applications. I bridge the gap between design and 
                  functionality with clean and efficient code.
                </motion.p>
              </motion.div>

              {/* Journey Section */}
              <motion.div 
                className="about-section"
                variants={fadeInUp}
                custom={1}
              >
                <motion.h3 variants={fadeInLeft}>
                  <motion.span className="section-icon">🚀</motion.span> My Journey
                </motion.h3>
                <motion.p variants={fadeInRight}>
                  My journey started in {2020} when I built my first website. Since then, I have worked on
                  <span className="highlight"> multiple projects</span>, collaborated with teams, and continuously learned 
                  new technologies to stay ahead in the field.
                </motion.p>
              </motion.div>

              {/* Approach Section */}
              <motion.div 
                className="about-section"
                variants={fadeInUp}
                custom={2}
              >
                <motion.h3 variants={fadeInLeft}>
                  <motion.span className="section-icon">🔍</motion.span> My Approach
                </motion.h3>
                <motion.p variants={fadeInRight}>
                  I believe in designing web applications that offer seamless 
                  <span className="highlight"> user experiences</span>. My focus is on writing scalable, optimized code 
                  and ensuring responsiveness across all devices.
                </motion.p>
              </motion.div>
              
              {/* Personal Info Section */}
              <motion.div 
                className="personal-info"
                variants={containerVariants}
              >
                <motion.h4 
                  className="info-title"
                  variants={fadeInUp}
                >
                  Personal Information
                </motion.h4>
                
                <motion.div 
                  className="info-grid"
                  variants={containerVariants}
                >
                  {[
                    { title: "Name:", value: "Adharsh Udayakumar", icon: "👤" },
                    { title: "Email:", value: "adharsh@example.com", icon: "✉️" },
                    { title: "Location:", value: "Bangalore, India", icon: "📍" },
                    { title: "Availability:", value: "Open for Work", icon: "✅" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="info-card1"
                      variants={fadeInUp}
                      custom={index}
                      whileHover={{ 
                        y: -5, 
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                        background: "rgba(255, 255, 255, 0.15)"
                      }}
                    >
                      <span className="info-icon">{item.icon}</span>
                      <div className="info-content">
                        <span className="info-title">{item.title}</span>
                        <span className="info-value">{item.value}</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              
              {/* Tech Stack Section */}
              <motion.div 
                className="tech-stack-container"
                variants={containerVariants}
              >
                <motion.h4 
                  className="tech-title"
                  variants={fadeInUp}
                >
                  My Tech Stack
                </motion.h4>
                
                <div className="tech-stack">
                  {[
                    "React", "JavaScript", "Node.js", "MongoDB", "Express", 
                    "TypeScript", "Redux", "HTML5", "CSS3", "Git"
                  ].map((tech, index) => (
                    <motion.span 
                      key={tech}
                      className="tech-badge"
                      variants={techBadgeVariants}
                      custom={index}
                      whileHover="hover"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              
              {/* Call-to-Action Buttons */}
              <motion.div 
                className="cta-buttons"
                variants={containerVariants}
              >
                <motion.a 
                  href="/resume.pdf" 
                  className="btn btn-primary" 
                  download
                  variants={fadeInLeft}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 8px 25px rgba(71, 118, 230, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="btn-text">Download CV</span>
                  <span className="btn-icon">
                    <i className="fas fa-download"></i>
                  </span>
                </motion.a>

                <motion.button 
                  className="btn btn-secondary"
                  onClick={() => scrollToSection(contactRef)}
                  variants={fadeInRight}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 8px 25px rgba(255, 255, 255, 0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="btn-text">Contact Me</span>
                  <span className="btn-icon">
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;