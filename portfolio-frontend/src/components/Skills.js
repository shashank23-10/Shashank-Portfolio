import React from 'react';
import './Skills.css';
import { FaCode, FaLaptopCode, FaCogs } from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2>
        <FaCode /> Skills
      </h2>
      
      <div className="skills-grid">
        <div className="card skills-card">
          <h3>
            Programming Languages
          </h3>
          <p>C++, Python, C, MySQL</p>
        </div>
        
        <div className="card skills-card">
          <h3>
            Technologies
          </h3>
          <p>
            HTML, CSS, JavaScript, MERN Stack, VSCode, Git, GitHub, Java, Spring Boot, SwiftUI
          </p>
        </div>
        
        <div className="card skills-card">
          <h3>Soft Skills</h3>
          <p>Project Management, Agile, Scrum</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
