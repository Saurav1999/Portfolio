import React from "react";
// import Slider from "./Slider";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

//project images
import proj1 from "../assets/projects/1.webp";
import proj2 from "../assets/projects/2.webp";
import proj3 from "../assets/projects/3.webp";
import proj4 from "../assets/projects/4.webp";

SwiperCore.use([Pagination, Navigation]);
function Projects() {
  return (
    <div className="section projects grid" id="projects">
      <p className="primary-heading">PROJECTS</p>
      <h2>Some Of My Work</h2>
      <p>Many more in progress..</p>
      <div className="slide-container">
        <Swiper
          slidesPerView={1}
          // centeredSlides={true}
          spaceBetween={30}
          breakpoints={{
            850: {
              slidesPerView: 2,
              spaceBetweenSlides: 50,
            },

            1200: {
              slidesPerView: 3,
              spaceBetweenSlides: 30,
            },
          }}
          pagination={{
            type: "bullets",
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={proj1} alt="Project1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={proj2} alt="Project2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={proj3} alt="Project3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={proj4} alt="Project4" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
