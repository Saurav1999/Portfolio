import React from "react";
import heartlogo from '../assets/heart.svg'

function Footer() {
  return (
    <div className="section footer grid">
      <div className="footer-logo">
        <div>S</div>
        <p>saurav singh</p>
      </div>
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
      <div className="copyright">
      Made with <span><img src={heartlogo} alt="love"></img></span> by a web enthusiast.
      </div>
    </div>
  );
}

export default Footer;
