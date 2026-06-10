 

import Sagar from "../Assets/sagar.jpg";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home">

      <div className="home-content">
        <img 
          src={Sagar} 
          alt="Sagar Ulagadde" 
          className="profile-img" 
          data-aos="zoom-in"
          data-aos-duration="1000"
        />
        <h1 data-aos="fade-up" data-aos-delay="200">
          Hi, I’m <span>Sagar Ulagadde</span>
        </h1>
        <h2 data-aos="fade-up" data-aos-delay="400">Web Developer</h2>
        <p data-aos="fade-up" data-aos-delay="600">
          Frontend Developer specializing in React.js, focused on building fast,
          responsive, and accessible web applications.
        </p>

      </div>

    </section>
  );
};

export default Home;

