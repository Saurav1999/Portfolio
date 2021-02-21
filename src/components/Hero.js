import React from "react";
// import Header from "./Header";
import resume from "../assets/resume.png";
import projectLogo from "../assets/projects.svg";
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
            <a href="#about" className="about-link">
              About
            </a>
            <a href="#skills" className="skills-link">
              Skills
            </a>
            <a href="#projects" className="projects-link">
              Projects
            </a>
            <a href="#contact" className="contact-link">
              Contact Me
            </a>

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
      
          <button className="btn-yellow">
            <div className="img-container">
              <img className="icon" src={projectLogo} alt="cv icon"></img>
            </div>
            <div className="text-container">See My Work</div>
          </button>
      
        <div className="social-links">
          <div className="social-icon">
            <a href="https://github.com/Saurav1999">
              <i className="fab fa-github-square"></i>
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.facebook.com/profile.php?id=100002599733133">
              <i className="fab fa-facebook-square"></i>
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/saurav-singh-a0793118b/">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-indicator__icon">
            <i className="fa fa-chevron-down"></i>
            <i className="fa fa-chevron-down"></i>
          </div>
          Scroll down
        </div>
      </div>
      <div className="scroll-down">
          <div className="mouse"></div>
          <p className="scroll-text">Scroll</p>
        </div>

      {/* <div className="scroll-down-container">
        <a href="#about" className="scroll-down">
          <i className="fa fa-chevron-down"></i>
        </a>
      </div> */}
    </div>
  );
}

export default Hero;
