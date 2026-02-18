import React, { useEffect, useState } from 'react';
import './Skills.css';

const skillsData = [
  { name: 'HTML', level: '90%' },
  { name: 'CSS', level: '85%' },
  { name: 'JavaScript', level: '80%' },
  { name: 'React', level: '75%' },
  { name: 'Node.js', level: '70%' },
  { name: 'Python', level: '80%' },
];

const Skills = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('skills');
      const top = section.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='skills' className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.name}</h3>
            <div className="skill-bar">
              <div
                className="skill-level"
                style={{ width: visible ? skill.level : '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
