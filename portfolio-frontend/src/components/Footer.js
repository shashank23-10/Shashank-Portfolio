import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://github.com/shashank23-10" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/shashank2310/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="mailto:shashankpandey2001@gmail.com"><FaEnvelope /></a>
        <a href="https://leetcode.com/u/Dc0dER/" target="_blank" rel="noopener noreferrer"><SiLeetcode />
                    </a>
      </div>
      <p>© {new Date().getFullYear()} Shashank Pandey. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
