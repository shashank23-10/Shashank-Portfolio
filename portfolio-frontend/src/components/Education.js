import React from 'react';
import './Education.css';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">
        <FaGraduationCap className="icon" /> Education
      </h2>
      
      <div className="card">
        <h3>B.Tech in Electrical and Electronics Engineering</h3>
        <p className="institution">
          <em>Manipal Institute of Technology, 2021 - Present</em>
        </p>
        <p className="result">CGPA: 7.65</p>
      </div>

      <div className="card">
        <h3>12th Board</h3>
        <p className="institution">
          <em>Hem Sheela Model School, 2019 - 2020 (CBSE)</em>
        </p>
        <p className="result">Percentage: 93.6%</p>
      </div>

      <div className="card">
        <h3>10th Board</h3>
        <p className="institution">
          <em>St. Xavier’s School, 2017 - 2018 (ICSE)</em>
        </p>
        <p className="result">Percentage: 93.8%</p>
      </div>
    </section>
  );
};

export default Education;
