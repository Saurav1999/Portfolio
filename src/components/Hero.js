import React from "react";
import Header from "./Header";

function Hero() {
  return (
    <div className="section hero grid">
      <Header />
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
      <div className="scroll-down">
          <div className="mouse"></div>
          <p className="scroll-text">Scroll</p>
        </div>
      {/* <div className="scroll-down-container">
        <a href="#about" className="scroll-down">
          <i class="fa fa-chevron-down"></i>
        </a>
      </div> */}
    </div>
  );
}

export default Hero;
