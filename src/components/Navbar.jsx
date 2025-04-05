// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import './Navbar.css';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   // Close mobile menu when a new link is clicked
//   const closeMenu = () => {
//     if (isOpen) setIsOpen(false);
//   };

//   // Add shadow when scrolled
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Animation variants
//   const navItemVariants = {
//     hidden: { opacity: 0, y: -10 },
//     visible: i => ({
//       opacity: 1, 
//       y: 0,
//       transition: {
//         delay: 0.05 * i,
//         duration: 0.5
//       }
//     })
//   };

//   const navItems = [
//     { path: '/', label: 'Home' },
//     { path: '/about', label: 'About' },
//     { path: '/projects', label: 'Projects' },
//     { path: '/skills', label: 'Skills' },
//     { path: '/contact', label: 'Contact' }
//   ];

//   return (
//     <motion.nav 
//       className={`navbar ${scrolled ? 'scrolled' : ''}`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <div className="navbar-container">
//         <Link to="/" className="navbar-logo" onClick={closeMenu}>
//           <div className="logo-container">
//             <span className="logo-text">Adharsh</span>
//             <span className="logo-dot"></span>
//           </div>
//         </Link>

//         <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>

//         <motion.ul 
//           className={`nav-menu ${isOpen ? 'active' : ''}`}
//           initial="hidden"
//           animate="visible"
//           variants={{
//             visible: {
//               transition: {
//                 staggerChildren: 0.1
//               }
//             }
//           }}
//         >
//           {navItems.map((item, index) => (
//             <motion.li 
//               key={item.path} 
//               className="nav-item"
//               custom={index}
//               variants={navItemVariants}
//             >
//               <Link
//                 to={item.path}
//                 className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
//                 onClick={closeMenu}
//               >
//                 {item.label}
//                 {location.pathname === item.path && 
//                   <motion.span 
//                     className="nav-indicator"
//                     layoutId="activeIndicator"
//                     transition={{ type: "spring", duration: 0.6 }}
//                   />
//                 }
//               </Link>
//             </motion.li>
//           ))}
          
//           {/* Resume button */}
//           <motion.li 
//             className="nav-item resume-item"
//             custom={navItems.length}
//             variants={navItemVariants}
//           >
//             <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
//               Resume
//               <i className="fas fa-download"></i>
//             </a>
//           </motion.li>
//         </motion.ul>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = ({ scrollToSection, refs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    if (isOpen) setIsOpen(false);
  };

  const navItems = [
    { label: 'Home', ref: refs.homeRef },
    { label: 'About', ref: refs.aboutRef },
    { label: 'Projects', ref: refs.projectsRef },
    { label: 'Skills', ref: refs.skillsRef },
    { label: 'Contact', ref: refs.contactRef }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      for (let item of navItems) {
        const el = item.ref.current;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(item.label);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.5
      }
    })
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="navbar-container">
        <div 
          className="navbar-logo" 
          onClick={() => {
            scrollToSection(refs.homeRef);
            closeMenu();
            setActiveSection('Home');
          }}
        >
          <div className="logo-container">
            <span className="logo-text">Adharsh</span>
            <span className="logo-dot"></span>
          </div>
        </div>

        <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <motion.ul 
          className={`nav-menu ${isOpen ? 'active' : ''}`}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {navItems.map((item, index) => (
            <motion.li 
              key={item.label} 
              className="nav-item"
              custom={index}
              variants={navItemVariants}
            >
              <button
                className={`nav-link ${activeSection === item.label ? 'active' : ''}`}
                onClick={() => {
                  scrollToSection(item.ref);
                  closeMenu();
                  setActiveSection(item.label);
                }}
              >
                {item.label}
                {activeSection === item.label && (
                  <motion.span 
                    className="nav-indicator"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </button>
            </motion.li>
          ))}

          <motion.li 
            className="nav-item resume-item"
            custom={navItems.length}
            variants={navItemVariants}
          >
            <a href="myCv.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
              Resume
              <i className="fas fa-download"></i>
            </a>
          </motion.li>
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
