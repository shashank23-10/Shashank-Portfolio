import React from 'react';
import './Skills.css';
import { FaCode } from 'react-icons/fa';

const skills = [
  { title: "C++", description: "" },
  { title: "Python", description: "" },
  { title: "MySQL", description: "" },
  { title: "HTML", description: "" },
  { title: "CSS", description: "" },
  { title: "JS", description: "" },
  { title: "MongoDB", description: "" },
  { title: "Express", description: "" },
  { title: "React", description: "" },
  { title: "Nodejs", description: "" },
  { title: "Java", description: "" },
  { title: "Springboot", description: "" },
  { title: "SwiftUI", description: "" },
  { title: "Project Management", description: "" },
  { title: "Agile & Scrum", description: "" },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2><FaCode /> Skills</h2>
      <div className="marquee">
        <div className="marquee-content">
          {skills.map((skill, index) => (
            <div key={index} className="card skills-card">
              <h3>{skill.title}</h3>
            </div>
          ))}
          {/* Duplicate the skills for seamless looping */}
          {skills.map((skill, index) => (
            <div key={index + skills.length} className="card skills-card">
              <h3>{skill.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
