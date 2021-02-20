import React from "react";
// import Header from "./Header";
import resume from "../assets/resume.png";
// import header_background_sm from "../assets/header_background_sm.svg";

function Hero() {
  return (
    <div className="section hero grid">
      {/* <Header /> */}
      {/* <div className="header-background">
        <img
          src={header_background_sm}
          alt="background"
        ></img>
      </div> */}
      <div className="section header grid">
        <div className="home__logo">
          <h1>S</h1>
        </div>
        {/* <div className="header-background">
        <img
          src={header_background_sm}
          alt="background"
        ></img>
      </div> */}
        <nav>
          <div className="home_nav">
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact Me</a>

            <button>
              <a href="https://drive.google.com/file/d/1yZASuaytfxZlOVV4OPaSWqXemqhAY0zO/view?usp=sharing">
                <img className="icon" src={resume} alt="cv icon"></img>
              </a>
            </button>
          </div>
        </nav>
      </div>
      <div className="hero-content grid">
        <h2 className="hero__greeting">Hi! I'm</h2>
        <h2 className="hero__name">Saurav Singh</h2>
        <p>
          I am a full stack <span>web developer</span> and <span>designer</span>
          .
        </p>
        <p className="specialization">
          I specialize in developing, designing and deploying elegant responsive
          websites and web applications.
        </p>
        <div className="social-links">
          <div className="social-icon">
            <a href="https://github.com/Saurav1999">
              <i class="fab fa-github-square"></i>
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.facebook.com/profile.php?id=100002599733133">
              <i class="fab fa-facebook-square"></i>
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/saurav-singh-a0793118b/">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="scroll-down">
          <div className="mouse"></div>
          <p className="scroll-text">Scroll</p>
        </div> */}
      <div class="scroll-indicator"><div class="scroll-indicator__icon"><i class="fa fa-chevron-down"></i><i class="fa fa-chevron-down"></i></div>Scroll down</div>

      {/* <div className="scroll-down-container">
        <a href="#about" className="scroll-down">
          <i class="fa fa-chevron-down"></i>
        </a>
      </div> */}
    </div>
  );
}

export default Hero;
