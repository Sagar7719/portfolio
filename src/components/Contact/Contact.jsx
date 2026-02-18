import React, { useState } from "react";
import "./Contact.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-container">
         
        <div className="contact-info">
          <h3>Sagar Ulagadde</h3>

          <p>
            Email:{" "}
            <a href="mailto:sagarulagadde5883@gmail.com">
              sagarulagadde5883@gmail.com
            </a>
          </p>

          <p>
            Phone: <a href="tel:+918669301878">+91 8669301878</a>
          </p>

          <p>Location: Pune, Nareh, Near Sinhgad College of Pharmacy</p>

           
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/sagar-ulagadde-7015a5383"
              target="_blank"
              rel="noopener noreferrer"
              className="icon linkedin"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/Sagar7719"
              target="_blank"
              rel="noopener noreferrer"
              className="icon github"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
