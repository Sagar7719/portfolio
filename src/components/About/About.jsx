import React from "react";
import "./About.css";
import {
  FaUserTie,
  FaGraduationCap,
  FaTools,
  FaBullseye,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">

        <h1 className="section-title" data-aos="fade-up">
          About Me
        </h1>

        <p className="about-text" data-aos="fade-up">
          Hi, I’m <span className="highlight">Sagar Sanjay Ulagadde</span>, a
          passionate <strong>Full Stack JavaScript Developer</strong> who enjoys
          building clean, responsive, and user-friendly web applications.
        </p>

        <p className="about-text" data-aos="fade-up">
          I have hands-on experience with <strong>MERN</strong> and{" "}
          <strong>MEAN</strong> stack technologies including React.js, Node.js,
          Express.js, MongoDB, and MySQL. I love turning ideas into real-world
          products and continuously improving my skills.
        </p>

        {/* Resume Button */}
        <div className="resume-wrapper" data-aos="zoom-in">
          <a
            href="/Sagar Software Engineer.pdf"
            download="Sagar-Ulagadde-CV.pdf"
            className="resume-btn"
          >
            Download Resume
          </a>
        </div>

        {/* Info Cards */}
        <div className="about-details">

          <div className="about-card" data-aos="fade-up">
            <FaUserTie className="about-icon" />
            <h3>Profile</h3>
            <p>
              Highly motivated developer with strong work ethic, adaptability,
              and the ability to work independently or in a team environment.
            </p>
          </div>

          <div
            className="about-card"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <FaTools className="about-icon" />
            <h3>Technical Skills</h3>
            <p>
              JavaScript (ES6+), React.js, Angular.js, Node.js, Express.js,
              MongoDB, MySQL, Responsive Web Development
            </p>
          </div>

          <div
            className="about-card"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaBullseye className="about-icon" />
            <h3>Career Objective</h3>
            <p>
              To work as a Full Stack or Frontend Developer where I can build
              impactful applications and grow continuously as a developer.
            </p>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="education" data-aos="fade-up">
          <h2 className="edu-title">
            <FaGraduationCap /> Education
          </h2>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div className="timeline-content">
                <h4>Bachelor of Computer Applications (BCA)</h4>
                <p>Shivaji University, Kolhapur</p>
                <span>2025</span>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div className="timeline-content">
                <h4>Master of Computer Applications (MCA)</h4>
                <p>Indira Gandhi University, Pune</p>
                <span>Pursuing</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;


