import React from 'react'
import './Projects.css'
const projectsData = [
  {
    title: 'Voice-Aided ATM System',
    description: 'A graduation project that allows users to operate an ATM using voice commands. Built using .NET Framework and C# language.',
    tech: ['.NET Framework', 'C#', 'SQL Server'],
    link: 'https://github.com/Sagar7719',  
  },
   
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills and projects.',
    tech: ['React.js', 'CSS', 'JavaScript', 'Bootstrap 5'],
    link: 'https://github.com/Sagar7719',
  },
];

const Projects = () => {
  return (
     <section id='projects' className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-item">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="project-btn" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects


 
