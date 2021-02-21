import React from "react";
import resume from '../assets/resume.png'
import header_background_sm from '../assets/header_background_sm.svg';

function Header() {
  return (
    <div className="section header grid">
      <div className="home__logo">
        <h1>S</h1>
      </div>
      <div className="header-background">
        <img
          src={header_background_sm}
          alt="background"
        ></img>
      </div>
      <nav>
        <div className="home_nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Me</a>
          
          <button>
            <a href="https://drive.google.com/file/d/1yZASuaytfxZlOVV4OPaSWqXemqhAY0zO/view?usp=sharing">
            <img
              className="icon"
              src={resume}
              alt="cv icon"
            ></img>
            </a>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
