import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillsData = {
  frontEnd: [
    { name: 'HTML', level: 90, icon: 'fab fa-html5' },
    { name: 'CSS', level: 85, icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', level: 85, icon: 'fab fa-js' },
    { name: 'React', level: 80, icon: 'fab fa-react' },
    { name: 'Bootstrap', level: 85, icon: 'fab fa-bootstrap' },
  ],
  backEnd: [
    { name: 'Node.js', level: 75, icon: 'fab fa-node-js' },
    { name: 'Express', level: 70, icon: 'fas fa-server' },
    { name: 'MongoDB', level: 65, icon: 'fas fa-database' },
    { name: 'SQL', level: 60, icon: 'fas fa-table' },
  ],
  programmingLanguages: [
    { name: 'Python', level: 90, icon: 'fab fa-python' },
    { name: 'C', level: 80, icon: 'fas fa-code' },
    { name: 'Java', level: 75, icon: 'fab fa-java' },
    { name: 'JavaScript', level: 85, icon: 'fab fa-js' }
  ],
  tools: [
    { name: 'Git & GitHub', level: 85, icon: 'fab fa-github' },
    { name: 'VS Code', level: 90, icon: 'fas fa-code' },
  ],
};

const SkillBar = ({ name, level, icon, index }) => {
  return (
    <motion.div 
      className="skill-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="skill-info">
        <div className="skill-name-container">
          <i className={`skill-icon ${icon}`}></i>
          <span className="skill-name">{name}</span>
        </div>
        <span className="skill-percentage">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div 
          className="skill-progress" 
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

const TimelineItem = ({ title, company, date, description, index }) => {
  return (
    <motion.div 
      className="timeline-item"
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <div className="timeline-header">
          <h4>{title}</h4>
          <span className="timeline-badge">{date}</span>
        </div>
        <h5>{company}</h5>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="skills-section" ref={sectionRef}>
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
      
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">My Expertise</span>
          <h2 className="section-title">Skills & Experience</h2>
          <div className="title-bar"></div>
        </motion.div>
        
        <div className="skills-wrapper">
          <div className="skills-container">
            {/* Frontend */}
            <motion.div 
              className="skills-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="category-header">
                <i className="category-icon fas fa-laptop-code"></i>
                <h3 className="category-title">Frontend Development</h3>
              </div>
              <div className="category-skills">
                {skillsData.frontEnd.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    name={skill.name} 
                    level={skill.level} 
                    icon={skill.icon}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div 
              className="skills-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="category-header">
                <i className="category-icon fas fa-server"></i>
                <h3 className="category-title">Backend Development</h3>
              </div>
              <div className="category-skills">
                {skillsData.backEnd.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    name={skill.name} 
                    level={skill.level}
                    icon={skill.icon} 
                    index={index}
                  />
                ))}
              </div>
            </motion.div>

            {/* Programming Languages */}
            <motion.div 
              className="skills-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="category-header">
                <i className="category-icon fas fa-code"></i>
                <h3 className="category-title">Programming Languages</h3>
              </div>
              <div className="category-skills">
                {skillsData.programmingLanguages.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    name={skill.name} 
                    level={skill.level}
                    icon={skill.icon}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div 
              className="skills-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="category-header">
                <i className="category-icon fas fa-tools"></i>
                <h3 className="category-title">Tools & Software</h3>
              </div>
              <div className="category-skills">
                {skillsData.tools.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    name={skill.name} 
                    level={skill.level}
                    icon={skill.icon}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Experience & Education */}
        <div className="experience-education">
          <motion.div 
            className="section-header timeline-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle">My Journey</span>
            <h2 className="section-title">Experience & Education</h2>
            <div className="title-bar"></div>
          </motion.div>
          
          <div className="timeline-container">
            <div className="experience">
              <div className="timeline-section-header">
                <i className="fas fa-briefcase"></i>
                <h3>Professional Experience</h3>
              </div>
              
              <div className="timeline">
                <TimelineItem 
                  title="Web Developer Intern"
                  company="WebGlobal Solutions"
                  date="Dec 2024 - Jan 2025"
                  description=""
                  index={0}
                />
                
                <TimelineItem 
                  title="MERN STACK Development Trainning"
                  company="ICT Academy of Kerala"
                  date="2024"
                  description="Taining on MERN Stack Development"
                  index={1}
                />
                
                <TimelineItem 
                  title="Tech Execom"
                  company="BlocHub"
                  date="2024"
                  description=""
                  index={2}
                />
              </div>
            </div>
            
            <div className="education">
              <div className="timeline-section-header">
                <i className="fas fa-graduation-cap"></i>
                <h3>Education</h3>
              </div>
              
              <div className="timeline">
                <TimelineItem 
                  title="B-Tech in Computer Science"
                  company="Mar Baselios College of Engineering and Technology"
                  date="2022 - 2026"
                  description=""
                  index={0}
                />
                
                <TimelineItem 
                  title="Higher Secondary Education"
                  company="St Joseph,pulincunnoo"
                  date="2020-2022"
                  description=""
                  index={1}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
