import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    title: "Speech to Indian Sign Language Translator",
    category: "Web Application",
    image: "isl.PNG",
    description: "",
    tags: ["Flask", "JavaScript", "Three.js", "Speech Recognition"],
    link: "#"
  },
  {
    id: 2,
    title: "CHD Risk Prediction",
    category: "Data Science Web App",
    image: "datascience.PNG",
    description: "",
    tags: ["Flask", "Logistic Regression", "Plotly", "Pandas"],
    link: "#"
  },
  {
    id: 3,
    title: "Online Retail Recommendation System",
    category: "Machine Learning",
    image: "https://tse2.mm.bing.net/th?id=OIP.DJggKC_ADxbmI5ozw8QYdQHaDj&pid=Api&P=0&h=180",
    description: "",
    tags: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    link: "#"
  },
  {
    id: 4,
    title: "JARVIS Voice Assistant",
    category: "AI Assistant",
    image: "jarvis.PNG",
    description: "",
    tags: ["Flask", "JavaScript", "Speech Recognition", "pyttsx3"],
    link: "#"
  },
  {
    id: 5,
    title: "Zenith Events",
    category: "MERN Stack Development",
    image: "2.PNG",
    description: "A fully responsive event booking platform built with React and Node.js.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    id: 6,
    title: "Portfolio Website",
    category: "Web Design",
    image: "protfolio-image.PNG",
    description: "A personal portfolio website showcasing projects, skills, and contact info with smooth animations.",
    tags: ["React", "Framer Motion", "CSS"],
    link: "#"
  }
];


const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      handleNextProject();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handlePrevProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleGoToProject = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const getVisibleProjects = () => {
    const projects = [];
    const length = projectsData.length;
    
    // Show 5 projects: 2 before, current, and 2 after
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + length) % length;
      projects.push({
        ...projectsData[index],
        position: i
      });
    }
    
    return projects;
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            My Projects <span className="highlight"></span>
          </h2>
         
        </motion.div>

        <div 
          className="carousel-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.button 
            className="nav-button prev"
            onClick={handlePrevProject}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(56, 189, 248, 0.8)" }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <div className="carousel">
            <div className="progress-bar">
              {projectsData.map((_, idx) => (
                <motion.div 
                  key={`progress-${idx}`}
                  className="progress-item"
                  initial={{ width: idx === currentIndex ? "100%" : "0%" }}
                  animate={{ 
                    width: idx === currentIndex ? "100%" : "0%",
                    backgroundColor: idx === currentIndex ? "#38bdf8" : "#94a3b8" 
                  }}
                  transition={{ 
                    duration: idx === currentIndex && !isHovered ? 5 : 0.3,
                    ease: "linear"
                  }}
                />
              ))}
            </div>

            {getVisibleProjects().map((project) => {
              const { position } = project;
              const isCenter = position === 0;
              const isOffScreen = Math.abs(position) > 2;
              
              // Calculate x position, opacity, scale, and z-index based on position
              const xPos = position * 200;
              let opacity = 1 - (Math.abs(position) * 0.3);
              let scale = 1 - (Math.abs(position) * 0.15);
              const zIndex = 10 - Math.abs(position);
              
              if (isOffScreen) {
                opacity = 0;
                scale = 0.5;
              }
              
              return (
                <motion.div
                  key={project.id}
                  className={`project-card ${isCenter ? "center" : ""}`}
                  initial={{ x: xPos, opacity, scale, zIndex }}
                  animate={{ x: xPos, opacity, scale, zIndex }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    duration: 0.5
                  }}
                  onClick={isCenter ? null : () => handleGoToProject(projectsData.findIndex(p => p.id === project.id))}
                >
                  <div className="project-image">
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      whileHover={isCenter ? { scale: 1.05 } : {}}
                    />
                    <div className="project-overlay">
                      <div className="project-category">
                        {project.category}
                      </div>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    {isCenter && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <p>{project.description}</p>
                        <div className="project-tags">
                          {project.tags.map((tag, index) => (
                            <motion.span 
                              key={index} 
                              className="tag"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 * index + 0.3 }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                       
                      </motion.div>
                    )}
                  </div>
                  {!isCenter && (
                    <div className="project-card-overlay" onClick={() => handleGoToProject(projectsData.findIndex(p => p.id === project.id))} />
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.button 
            className="nav-button next"
            onClick={handleNextProject}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(56, 189, 248, 0.8)" }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        <div className="carousel-dots">
          {projectsData.map((_, index) => (
            <motion.button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleGoToProject(index)}
              aria-label={`Go to project ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                scale: index === currentIndex ? 1.2 : 1,
                backgroundColor: index === currentIndex ? "#facc15" : "rgba(255, 255, 255, 0.2)"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;