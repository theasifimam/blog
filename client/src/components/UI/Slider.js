import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../styles/UI/Slider.css";

// import required modules
import { Pagination, Navigation, EffectCards, Autoplay } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        loop={true}
        effect={"cards"}
        navigation={true}
        modules={[Pagination, Navigation, EffectCards, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        className="hero-slider"
      >
        {sliderData.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className="slide"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${slide.img})`,
                }}
              >
                <span className="tag">Featured</span>
                <h2 className="heading">
                  Breaking into Product Design: Advice from Untitiled founder,
                  Frankie
                </h2>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam, enim id sapiente neque nisi repellendus dolore
                  porro modi vel itaque vitae.
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

const sliderData = [
  {
    id: 0,
    img: "https://images.unsplash.com/photo-1484081064812-86e90e107fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 0,
    img: "https://images.unsplash.com/photo-1448070299168-7dede6dc70b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 0,
    img: "https://images.unsplash.com/photo-1534008757030-27299c4371b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 0,
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
  },
  {
    id: 0,
    img: "https://images.unsplash.com/photo-1646617747566-b7e784435a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 0,
    img: "https://images.unsplash.com/photo-1467307983825-619715426c70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1077&q=80",
  },
  {
    id: 0,
    img: "https://images.unsplash.com/photo-1510832198440-a52376950479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80",
  },
];
