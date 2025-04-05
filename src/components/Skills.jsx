// import React, { useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import './Skills.css';

// const skillsData = {
//   frontEnd: [
//     { name: 'HTML5', level: 90, icon: 'fab fa-html5' },
//     { name: 'CSS3', level: 85, icon: 'fab fa-css3-alt' },
//     { name: 'JavaScript', level: 85, icon: 'fab fa-js' },
//     { name: 'React', level: 80, icon: 'fab fa-react' },
//     { name: 'Redux', level: 75, icon: 'fas fa-project-diagram' },
//     { name: 'TypeScript', level: 70, icon: 'fas fa-code' },
//     { name: 'Sass/SCSS', level: 80, icon: 'fab fa-sass' },
//     { name: 'Bootstrap', level: 85, icon: 'fab fa-bootstrap' },
//   ],
//   backEnd: [
//     { name: 'Node.js', level: 75, icon: 'fab fa-node-js' },
//     { name: 'Express', level: 70, icon: 'fas fa-server' },
//     { name: 'MongoDB', level: 65, icon: 'fas fa-database' },
//     { name: 'Firebase', level: 75, icon: 'fas fa-fire' },
//     { name: 'SQL', level: 60, icon: 'fas fa-table' },
//     { name: 'RESTful APIs', level: 80, icon: 'fas fa-plug' },
//   ],
//   tools: [
//     { name: 'Git & GitHub', level: 85, icon: 'fab fa-github' },
//     { name: 'Webpack', level: 70, icon: 'fas fa-cube' },
//     { name: 'VS Code', level: 90, icon: 'fas fa-code' },
//     { name: 'Figma', level: 75, icon: 'fab fa-figma' },
//     { name: 'Adobe XD', level: 65, icon: 'fas fa-pen-nib' },
//     { name: 'Jest', level: 70, icon: 'fas fa-vial' },
//   ],
// };

// const SkillBar = ({ name, level, icon, index }) => {
//   return (
//     <motion.div 
//       className="skill-item"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       viewport={{ once: true }}
//     >
//       <div className="skill-info">
//         <div className="skill-name-container">
//           <i className={`skill-icon ${icon}`}></i>
//           <span className="skill-name">{name}</span>
//         </div>
//         <span className="skill-percentage">{level}%</span>
//       </div>
//       <div className="skill-bar">
//         <motion.div 
//           className="skill-progress" 
//           initial={{ width: 0 }}
//           whileInView={{ width: `${level}%` }}
//           transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
//           viewport={{ once: true }}
//         ></motion.div>
//       </div>
//     </motion.div>
//   );
// };

// const TimelineItem = ({ title, company, date, description, index }) => {
//   return (
//     <motion.div 
//       className="timeline-item"
//       initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.2 }}
//       viewport={{ once: true }}
//     >
//       <div className="timeline-dot"></div>
//       <div className="timeline-content">
//         <div className="timeline-header">
//           <h4>{title}</h4>
//           <span className="timeline-badge">{date}</span>
//         </div>
//         <h5>{company}</h5>
//         <p>{description}</p>
//       </div>
//     </motion.div>
//   );
// };

// const Skills = () => {
//   const sectionRef = useRef(null);

//   // Intersection Observer for background effect
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('in-view');
//         }
//       });
//     }, { threshold: 0.2 });

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section className="skills-section" ref={sectionRef}>
//       <div className="background-shapes">
//         <div className="shape shape-1"></div>
//         <div className="shape shape-2"></div>
//       </div>
      
//       <div className="container">
//         <motion.div
//           className="section-header"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <span className="section-subtitle">My Expertise</span>
//           <h2 className="section-title">Skills & Experience</h2>
//           <div className="title-bar"></div>
//         </motion.div>
        
//         <div className="skills-wrapper">
//           <div className="skills-container">
//             <motion.div 
//               className="skills-category"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <div className="category-header">
//                 <i className="category-icon fas fa-laptop-code"></i>
//                 <h3 className="category-title">Frontend Development</h3>
//               </div>
//               <div className="category-skills">
//                 {skillsData.frontEnd.map((skill, index) => (
//                   <SkillBar 
//                     key={index} 
//                     name={skill.name} 
//                     level={skill.level} 
//                     icon={skill.icon}
//                     index={index}
//                   />
//                 ))}
//               </div>
//             </motion.div>
            
//             <motion.div 
//               className="skills-category"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <div className="category-header">
//                 <i className="category-icon fas fa-server"></i>
//                 <h3 className="category-title">Backend Development</h3>
//               </div>
//               <div className="category-skills">
//                 {skillsData.backEnd.map((skill, index) => (
//                   <SkillBar 
//                     key={index} 
//                     name={skill.name} 
//                     level={skill.level}
//                     icon={skill.icon} 
//                     index={index}
//                   />
//                 ))}
//               </div>
//             </motion.div>
            
//             <motion.div 
//               className="skills-category"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               viewport={{ once: true }}
//             >
//               <div className="category-header">
//                 <i className="category-icon fas fa-tools"></i>
//                 <h3 className="category-title">Tools & Software</h3>
//               </div>
//               <div className="category-skills">
//                 {skillsData.tools.map((skill, index) => (
//                   <SkillBar 
//                     key={index} 
//                     name={skill.name} 
//                     level={skill.level}
//                     icon={skill.icon}
//                     index={index}
//                   />
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
        
//         <div className="experience-education">
//           <motion.div 
//             className="section-header timeline-header"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <span className="section-subtitle">My Journey</span>
//             <h2 className="section-title">Experience & Education</h2>
//             <div className="title-bar"></div>
//           </motion.div>
          
//           <div className="timeline-container">
//             <div className="experience">
//               <div className="timeline-section-header">
//                 <i className="fas fa-briefcase"></i>
//                 <h3>Professional Experience</h3>
//               </div>
              
//               <div className="timeline">
//                 <TimelineItem 
//                   title="Senior Frontend Developer"
//                   company="ABC Company"
//                   date="Jan 2022 - Present"
//                   description="Led frontend development for multiple projects using React and Redux. Improved site performance by 40% through code optimization."
//                   index={0}
//                 />
                
//                 <TimelineItem 
//                   title="Frontend Developer"
//                   company="XYZ Agency"
//                   date="Mar 2020 - Dec 2021"
//                   description="Developed responsive websites and web applications. Collaborated with designers to implement UI/UX improvements."
//                   index={1}
//                 />
                
//                 <TimelineItem 
//                   title="Junior Web Developer"
//                   company="Dev Studio"
//                   date="Jun 2018 - Feb 2020"
//                   description="Created and maintained websites using HTML, CSS, and JavaScript. Assisted senior developers with larger projects."
//                   index={2}
//                 />
//               </div>
//             </div>
            
//             <div className="education">
//               <div className="timeline-section-header">
//                 <i className="fas fa-graduation-cap"></i>
//                 <h3>Education</h3>
//               </div>
              
//               <div className="timeline">
//                 <TimelineItem 
//                   title="Master's in Computer Science"
//                   company="University Name"
//                   date="2016 - 2018"
//                   description="Specialized in Web Technologies and Human-Computer Interaction. Graduated with distinction."
//                   index={0}
//                 />
                
//                 <TimelineItem 
//                   title="Bachelor's in Software Engineering"
//                   company="University Name"
//                   date="2012 - 2016"
//                   description="Focused on programming fundamentals and software development. Participated in various hackathons and coding competitions."
//                   index={1}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
// pages/Skills/Skills.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillsData = {
  frontEnd: [
    { name: 'HTML5', level: 90, icon: 'fab fa-html5' },
    { name: 'CSS3', level: 85, icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', level: 85, icon: 'fab fa-js' },
    { name: 'React', level: 80, icon: 'fab fa-react' },
    { name: 'Redux', level: 75, icon: 'fas fa-project-diagram' },
    { name: 'TypeScript', level: 70, icon: 'fas fa-code' },
    { name: 'Sass/SCSS', level: 80, icon: 'fab fa-sass' },
    { name: 'Bootstrap', level: 85, icon: 'fab fa-bootstrap' },
  ],
  backEnd: [
    { name: 'Node.js', level: 75, icon: 'fab fa-node-js' },
    { name: 'Express', level: 70, icon: 'fas fa-server' },
    { name: 'MongoDB', level: 65, icon: 'fas fa-database' },
    { name: 'Firebase', level: 75, icon: 'fas fa-fire' },
    { name: 'SQL', level: 60, icon: 'fas fa-table' },
    { name: 'RESTful APIs', level: 80, icon: 'fas fa-plug' },
  ],
  tools: [
    { name: 'Git & GitHub', level: 85, icon: 'fab fa-github' },
    { name: 'Webpack', level: 70, icon: 'fas fa-cube' },
    { name: 'VS Code', level: 90, icon: 'fas fa-code' },
    { name: 'Figma', level: 75, icon: 'fab fa-figma' },
    { name: 'Adobe XD', level: 65, icon: 'fas fa-pen-nib' },
    { name: 'Jest', level: 70, icon: 'fas fa-vial' },
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
            
            <motion.div 
              className="skills-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
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
                  title="Senior Frontend Developer"
                  company="ABC Company"
                  date="Jan 2022 - Present"
                  description="Led frontend development for multiple projects using React and Redux. Improved site performance by 40% through code optimization."
                  index={0}
                />
                
                <TimelineItem 
                  title="Frontend Developer"
                  company="XYZ Agency"
                  date="Mar 2020 - Dec 2021"
                  description="Developed responsive websites and web applications. Collaborated with designers to implement UI/UX improvements."
                  index={1}
                />
                
                <TimelineItem 
                  title="Junior Web Developer"
                  company="Dev Studio"
                  date="Jun 2018 - Feb 2020"
                  description="Created and maintained websites using HTML, CSS, and JavaScript. Assisted senior developers with larger projects."
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
                  title="Master's in Computer Science"
                  company="University Name"
                  date="2016 - 2018"
                  description="Specialized in Web Technologies and Human-Computer Interaction. Graduated with distinction."
                  index={0}
                />
                
                <TimelineItem 
                  title="Bachelor's in Software Engineering"
                  company="University Name"
                  date="2012 - 2016"
                  description="Focused on programming fundamentals and software development. Participated in various hackathons and coding competitions."
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