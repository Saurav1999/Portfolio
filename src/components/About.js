import React from "react";
import resume from "../assets/resume.png";

function About() {
  return (
    <div className="section about grid" id="about" >
      <div className="about-content grid">
        <p className="primary-heading">ABOUT ME</p>
        <h2>Know Me More</h2>
        <p className="about-main">
          Hello there! I am Saurav Singh.
          <br /> Building state-of-the-art, easy to use, user-friendly websites
          and applications is truly a passion of mine. <br />I actively seek out
          new technologies and stay up-to-date on industry trends and
          advancements. I develop elegant and responsive frontend with optimised
          and modern backend.
        </p>
        <div className="techs">
          <p>Here's a list of technologies I've been working with recently.</p>
          <ul className="recent-tech-left">
            <li>
              <span>
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </span>
              Javascript(ES6+)
            </li>

            <li>
              <span>
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </span>
              Node JS
            </li>
            <li>
              <span>
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </span>
              Express JS
            </li>
          </ul>
          <ul className="recent-tech-right">
            <li>
              <span>
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </span>
              Html and S(CSS)
            </li>
            <li>
              <span>
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </span>
              React JS
            </li>
            <li>
              <span>
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </span>
              Material UI
            </li>
          </ul>
        </div>
        <div className="download-resume">
          <a className="btn-yellow" href="https://drive.google.com/file/d/1CXTw00c16CQlMbNh859drrd6hnv_a7u6/view?usp=sharing">
            <div className="img-container"><img className="icon" src={resume} alt="cv icon"></img></div>
            <div className="text-container">Resume</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
