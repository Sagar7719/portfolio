import React, { useState } from "react";
import "./Contact.css";
import { FaLinkedinIn, FaGithub, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://portfolio-nzkk.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to send message.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Is the backend running?");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title" data-aos="fade-up">Contact Me</h2>

      <div className="contact-container">
         
        <div className="contact-info" data-aos="fade-right">
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

          <p>Location: Pune, Nareh </p>

           
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

        
        <form className="contact-form glass-panel" onSubmit={handleSubmit} data-aos="fade-left">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={status === "loading"}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status === "loading"}
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={status === "loading"}
          />

          <button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
          
          {status === "success" && (
            <div className="status-message success">
              <FaCheckCircle /> Message sent successfully!
            </div>
          )}
          {status === "error" && (
            <div className="status-message error">
              <FaExclamationCircle /> {errorMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
