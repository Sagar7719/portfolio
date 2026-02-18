import { useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";



const Navbar = () => {
  useEffect(() => {
    const navbar = document.getElementById("navbar");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="navbar" className="navbar navbar-expand-lg fixed-top navbar-light">

      <div className="container-fluid">

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" id="nav">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <li className="nav-item" key={item}>
                <Link
                  to={item}
                  smooth
                  duration={500}
                  offset={-66}
                  spy={true}
                  activeClass="active"
                  className="nav-link"
                  onClick={() => {
                    const nav = document.getElementById("navbarNav");
                    if (nav.classList.contains("show")) {
                      nav.classList.remove("show");
                    }
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>

              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


