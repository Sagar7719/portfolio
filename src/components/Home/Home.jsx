 

import Sagar from "../Assets/sagar.jpg";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home">

      <div className="home-content">
        <img src={Sagar} alt="Sagar Ulagadde" className="profile-img" />
        <h1>
          Hi, I’m <span>Sagar Ulagadde</span>
        </h1>
        <h2>Web Developer</h2>
        <p>
          Frontend Developer specializing in React.js, focused on building fast,
          responsive, and accessible web applications.

        </p>

      </div>

    </section>
  );
};

export default Home;

