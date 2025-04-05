import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Refs for scroll animations
  const contactRef = useRef(null);
  const headerRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);
  
  // Animation controls
  const controls = useAnimation();
  const headerControls = useAnimation();
  const infoControls = useAnimation();
  const formControls = useAnimation();

  // Check if elements are in view
  const isInView = useInView(contactRef, { once: true, margin: "-100px" });
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isInfoInView = useInView(infoRef, { once: true, margin: "-100px" });
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });

  // Trigger animations when in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
    if (isHeaderInView) {
      headerControls.start("visible");
    }
    if (isInfoInView) {
      infoControls.start("visible");
    }
    if (isFormInView) {
      formControls.start("visible");
    }
  }, [isInView, isHeaderInView, isInfoInView, isFormInView, controls, headerControls, infoControls, formControls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6
      }
    })
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }
    
    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <motion.section 
      className="contact"
      ref={contactRef}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="background-shapes">
        <motion.div 
          className="shape shape-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.4, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.div 
          className="shape shape-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.4, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        />
        <motion.div 
          className="shape shape-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.4, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </div>

      <div className="contact-container">
        <motion.div 
          className="section-header"
          ref={headerRef}
          initial="hidden"
          animate={headerControls}
          variants={fadeInUp}
        >
          <motion.h2 
            className="section-title"
            variants={fadeInUp}
          >
            Get In Touch
          </motion.h2>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            ref={infoRef}
            initial="hidden"
            animate={infoControls}
            variants={fadeInLeft}
          >
            <motion.div 
              className="info-card"
              variants={scaleUp}
            >
              <motion.h3 variants={fadeInUp}>
                Contact Information
              </motion.h3>
              
              <motion.p 
                className="info-subtitle"
                variants={fadeInUp}
              >
                Feel free to reach out to me for any questions or opportunities.
              </motion.p>
              
              <div className="info-items">
                {[
                  {
                    icon: 'fas fa-map-marker-alt',
                    title: 'Location',
                    text: 'Bangalore, India'
                  },
                  {
                    icon: 'fas fa-envelope',
                    title: 'Email',
                    text: 'adharsh@example.com'
                  },
                  {
                    icon: 'fas fa-phone',
                    title: 'Phone',
                    text: '+91 123 456 7890'
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    className="info-item"
                    custom={i}
                    variants={itemVariants}
                  >
                    <div className="info-icon">
                      <i className={item.icon}></i>
                    </div>
                    <div className="info-content">
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="availability-badge"
                variants={itemVariants}
                custom={3}
              >
                <span>Currently available for freelance projects</span>
              </motion.div>
              
              <motion.div 
                className="social-links"
                variants={itemVariants}
                custom={4}
              >
                {[
                  { icon: 'fab fa-github', url: 'https://github.com/yourusername' },
                  { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/yourusername' },
                  { icon: 'fab fa-twitter', url: 'https://twitter.com/yourusername' },
                  { icon: 'fab fa-instagram', url: 'https://instagram.com/yourusername' }
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.icon.split('-')[1]}
                    variants={itemVariants}
                    custom={4 + (i * 0.1)}
                    whileHover={{ y: -5, scale: 1.1 }}
                  >
                    <i className={social.icon}></i>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="contact-form-container"
            ref={formRef}
            initial="hidden"
            animate={formControls}
            variants={fadeInRight}
          >
            <motion.div 
              className="form-card"
              variants={scaleUp}
            >
              <form className="contact-form" onSubmit={handleSubmit}>
                {submitSuccess && (
                  <motion.div 
                    className="success-message"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <i className="fas fa-check-circle"></i>
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                
                <motion.div 
                  className="form-row"
                  variants={containerVariants}
                >
                  {[
                    { 
                      id: 'name',
                      type: 'text',
                      placeholder: 'Your name',
                      error: formErrors.name
                    },
                    { 
                      id: 'email',
                      type: 'email',
                      placeholder: 'Your email address',
                      error: formErrors.email
                    }
                  ].map((field, i) => (
                    <motion.div 
                      key={i}
                      className="form-group"
                      variants={itemVariants}
                      custom={i * 0.1}
                    >
                      <label htmlFor={field.id}>{field.id.charAt(0).toUpperCase() + field.id.slice(1)}</label>
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        value={formData[field.id]}
                        onChange={handleChange}
                        className={field.error ? 'error' : ''}
                        placeholder={field.placeholder}
                      />
                      {field.error && <span className="error-message">{field.error}</span>}
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="form-group"
                  variants={itemVariants}
                  custom={0.2}
                >
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={formErrors.subject ? 'error' : ''}
                    placeholder="What is this regarding?"
                  />
                  {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
                </motion.div>
                
                <motion.div 
                  className="form-group"
                  variants={itemVariants}
                  custom={0.3}
                >
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={formErrors.message ? 'error' : ''}
                    placeholder="Your message here..."
                  ></textarea>
                  {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                </motion.div>
                
                <motion.button 
                  type="submit" 
                  className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                  variants={itemVariants}
                  custom={0.4}
                  whileHover={{ y: -3, boxShadow: "0 15px 25px rgba(71, 118, 230, 0.4)" }}
                  whileTap={{ y: 0 }}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <i className="fas fa-paper-plane"></i>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;