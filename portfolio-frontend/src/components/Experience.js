import React from 'react';
import './Experience.css';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h2>
        <FaBriefcase /> Experience
      </h2>
      
      <div className="card">
        <h3>KPMG India – Digital Strategy Intern</h3>
        <p><em>Jan 2024 - Present | Bengaluru, India</em></p>
        <ul>
          <li>Conducted in-depth analysis of AI applications across FMCG, Finance, and EdTech sectors.</li>
          <li>Identified use cases in supply chain optimization, customer segmentation, and predictive demand forecasting.</li>
          <li>Delivered insights into personalized learning and adaptive learning technologies.</li>
        </ul>
      </div>

      <div className="card">
        <h3>Intel Unnati Industrial Training Program – Industrial Trainee</h3>
        <p><em>May 2024 - Jul 2024 | Manipal, India</em></p>
        <ul>
          <li>Developed a system to track vehicle movements and parking spots on campus.</li>
          <li>Implemented machine learning algorithms for vehicle recognition.</li>
          <li>Conducted analysis on movement patterns to optimize campus parking allocation.</li>
          <li>Presented findings to campus authorities, leading to enhanced traffic management solutions.</li>
        </ul>
      </div>

      <div className="card">
        <h3>Ardent Computech Pvt. Ltd. – Industrial Trainee</h3>
        <p><em>May 2024 - Jun 2024 | Remote</em></p>
        <ul>
          <li>Engineered an Alzheimer’s Disease Predictor using ML algorithms with a prediction accuracy of 0.82.</li>
          <li>Developed front-end using HTML, CSS and deployed the model using Flask, enhancing user experience.</li>
          <li>Implemented back-end integration with a machine learning model, reducing response time by 30%.</li>
          <li>Conducted tests on real-world medical datasets to validate accuracy and reliability.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
