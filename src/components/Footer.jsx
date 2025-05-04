import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = ({ scrollToSection, refs }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="footer-glow"></div>
      
      <div className="footer-container">
        {/* ABOUT SECTION */}
        <motion.div 
          className="footer-section about"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="footer-title">
            Adharsh <span className="highlight">Udayakumar</span>
          </h3>
          <p className="footer-text">
            Transforming ideas into exceptional digital experiences with modern web technologies.
          </p>
          <div className="social-links">
            {[
              { href: "https://github.com/Adharsh0", icon: "fab fa-github", label: "GitHub" },
              { href: "https://bit.ly/mylinkedlin", icon: "fab fa-linkedin", label: "LinkedIn" },
              { href: "https://www.instagram.com/__.adharsh.____?igsh=ZzRjcGMzOXFkZGFk", icon: "fab fa-instagram", label: "Instagram" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="social-icon"
              >
                <i className={social.icon}></i>
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        {/* QUICK LINKS SECTION */}
        <motion.div 
          className="footer-section links"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            {[
              { text: "Home", ref: refs.homeRef },
              { text: "About", ref: refs.aboutRef },
              { text: "Projects", ref: refs.projectsRef },
              { text: "Skills", ref: refs.skillsRef },
              { text: "Contact", ref: refs.contactRef }
            ].map((link, index) => (
              <motion.li 
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index + 0.3 }}
              >
                <button onClick={() => scrollToSection(link.ref)}>
                  <span className="link-text">{link.text}</span>
                  <span className="link-arrow">→</span>
                </button>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        {/* CONTACT SECTION */}
        <motion.div 
          className="footer-section contact"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="footer-title">Contact Me</h3>
          <div className="contact-items">
            <motion.div 
              className="contact-item"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <span>Trivadrum, India</span>
            </motion.div>
            <motion.div 
              className="contact-item"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <span>adarshudayakumar30@gmail.com</span>
            </motion.div>
            <motion.div 
              className="contact-item"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <span>+91 79 07 60 51 67</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* FOOTER BOTTOM */}
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="footer-line"></div>
        <div className="footer-credits">
          <p>© {currentYear} Adharsh Udayakumar. All rights reserved.</p>
          <p className="credits">
            Crafted with <span className="heart">✨</span> using React
          </p>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;