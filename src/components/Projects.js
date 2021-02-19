import React from "react";
import Slider from "./Slider";

//project images
import proj1 from "../assets/projects/1.webp";
import proj2 from "../assets/projects/2.webp";
import proj3 from "../assets/projects/3.webp";
import proj4 from "../assets/projects/4.webp";

function Projects() {
  const settings = {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 30, // Slide rotate in degrees
      stretch: 100, // Stretch space between slides (in px)
      depth: 800, // Depth offset in px (slides translate in Z axis)
      modifier: 1, // Effect multipler
      slideShadows: false, // Enables slides shadows
    },
  };

  // const data = [...Array(5).keys()];

  return (
    <div className="section projects grid" id="projects" >
      <p className="primary-heading">PROJECTS</p>
      <h2>Some Of My Work</h2>
      <p>
        Many more in progress..
      </p>
      <div className="slide-container">
        <Slider settings={settings}>
          {/* {data.map((item) => (
              <img src="https://picsum.photos/200/300" key={item} alt="swipe" />
            ))} */}
          <div className="project-container-outer" style={{width:"90%",height:"auto"}}>
            <div className="project-container">
              <img className="project-img" src={proj1}  alt="Project1"/>
            </div>
          </div>
          <div className="project-container-outer" style={{width:"90%",height:"auto"}}>
            <div className="project-container">
              <img className="project-img" src={proj2}  alt="Project2"/>
            </div>
          </div>
          <div className="project-container-outer" style={{width:"90%",height:"auto"}}>
            <div className="project-container">
              <img className="project-img" src={proj3} alt="Project3" />
            </div>
          </div>
          <div className="project-container-outer" style={{width:"90%",height:"auto"}}>
            <div className="project-container">
              <img className="project-img" src={proj4} alt="Project4"/>
            </div>
          </div>
        </Slider>
      </div>

    </div>
  );
}

export default Projects;
