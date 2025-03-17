import React from 'react';
import './Hero.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h2>Welcome, I'm Shashank Pandey</h2>
          <p>Digital Strategy Intern at KPMG India &amp; Passionate Technologist</p>
          <div className="hero-icons">
            <a href="https://www.linkedin.com/in/shashank2310/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/shashank23-10" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="mailto:shashankpandey2001@gmail.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
