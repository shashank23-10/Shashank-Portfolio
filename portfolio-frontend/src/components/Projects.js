import React from 'react';
import './Projects.css';
import { FaProjectDiagram, FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2><FaProjectDiagram /> Projects</h2>
      
      <div className="card">
        <h3>Renewable Energy Analysis</h3>
        <p><strong>Tools:</strong> Python, SQL</p>
        <ul>
          <li>Developed an analysis tool for evaluating renewable systems and sources.</li>
          <li>Implemented data processing pipelines to clean, analyze, and visualize energy consumption and production.</li>
          <li>Created visualizations providing insights on greenhouse gas emission reductions and energy capacity.</li>
          <li>Applied queries to extract insights, identifying key areas for energy optimization.</li>
        </ul>
        <a href="https://github.com/shashank23-10/Renewable-Energy-Analysis" target="_blank" rel="noopener noreferrer">
          <FaGithub /> View on GitHub
        </a>
      </div>

      <div className="card">
        <h3>MERN Expense Tracker</h3>
        <p><strong>Tools:</strong> React, Node.js, Express, MongoDB, Victory.js</p>
        <ul>
          <li>Designed a full-stack expense tracking application using the MERN stack.</li>
          <li>Integrated Victory.js for interactive data visualization of expense categories and trends.</li>
          <li>Developed RESTful APIs to manage users, expenses, and categories.</li>
          <li>Ensured efficient data flow between front-end and back-end.</li>
        </ul>
        <a href="https://github.com/shashank23-10/mern-expense-tracker" target="_blank" rel="noopener noreferrer">
          <FaGithub /> View on GitHub
        </a>
      </div>

      <div className="card">
        <h3>Aniplex</h3>
        <p><strong>Tools:</strong> HTML, CSS, JavaScript, TheMovieDatabase API</p>
        <ul>
          <li>Designed a web application to fetch anime data from TheMovieDatabase API.</li>
          <li>Integrated API to dynamically display ratings of searched anime/movies.</li>
          <li>Developed a responsive front-end ensuring compatibility with various devices and screen sizes.</li>
          <li>Collaborated in a hackathon and received runners-up position.</li>
        </ul>
        <a href="https://github.com/shashank23-10/ISTE_Round2" target="_blank" rel="noopener noreferrer">
          <FaGithub /> View on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
