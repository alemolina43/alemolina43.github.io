import React from "react";
import "../../styles/Carousel.scss";
import projectsData from "../../data/projectsData";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <section className="carousel" id="projects">
      <div>
        <div className="carousel-content">
          <h1>Take a look at my project!</h1>
        </div>
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        className="myswiper"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1560: {
            slidesPerView: 2,
          },
        }}
      >
        {projectsData.map((project) => (
          <SwiperSlide
            key={project.title}
            className="myswiper-slider"
            style={{ backgroundImage: `url(${project.thumbNail}) ` }}
          >
            <div className="slide-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a
                href={`${project.url}`}
                target="_blank"
                className="slider-btn"
                rel="noreferrer"
              >
                explore
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;
