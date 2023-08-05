import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/UI/PostPreview.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import PostPreview from "../PostPreview";

export default function MultipleCardsSlider() {
  return (
    <div className="multi-cards-container">
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          // when window width is less than 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is between 320px and 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1600: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1920: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          2560: {
            slidesPerView: 5,
            spaceBetween: 60,
          },
        }}
        modules={[Pagination]}
        className="multi-cards-slider"
      >
        {postData.map((card, index) => {
          return (
            <SwiperSlide>
              <PostPreview {...card} key={index} width="auto" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

const postData = [
  {
    title: "ReactJS with MongoDB and NodeJS is known as MERN",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero non illum eligendi, earum sapiente nesciunt.",
    postImage:
      "https://images.unsplash.com/photo-1506968695017-764f86a9f9ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    dp: "https://images.unsplash.com/photo-1506968695017-764f86a9f9ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    author: "Asif Imam",
    date: "17 Jul 2023",
  },

  {
    title: "Libero non illum eligendi, nesciunt Libero non illum eligendi.",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero non illum eligendi, earum sapiente nesciunt.",
    postImage:
      "https://images.unsplash.com/photo-1483726234545-481d6e880fc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    dp: "https://images.unsplash.com/photo-1483726234545-481d6e880fc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    author: "Asif Imam",
    date: "17 Jul 2023",
  },
  {
    title: "Migrating to linear 101",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero non illum eligendi, earum sapiente nesciunt.",
    postImage:
      "https://images.unsplash.com/photo-1536685965216-c5f4478ec2cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    dp: "https://images.unsplash.com/photo-1536685965216-c5f4478ec2cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    author: "Asif Imam",
    date: "17 Jul 2023",
  },

  {
    title: "ReactJS with MongoDB and NodeJS is known as MERN",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero non illum eligendi, earum sapiente nesciunt.",
    postImage:
      "https://images.unsplash.com/photo-1448070299168-7dede6dc70b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    dp: "https://images.unsplash.com/photo-1448070299168-7dede6dc70b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    author: "Asif Imam",
    date: "17 Jul 2023",
  },
  {
    title: "Migrating to linear 101",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero non illum eligendi, earum sapiente nesciunt.",
    postImage:
      "https://images.unsplash.com/photo-1534008757030-27299c4371b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    dp: "https://images.unsplash.com/photo-1534008757030-27299c4371b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    author: "Asif Imam",
    date: "17 Jul 2023",
  },
  {
    title: "Migrating to linear 101",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero non illum eligendi, earum sapiente nesciunt.",
    postImage:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    dp: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    author: "Asif Imam",
    date: "17 Jul 2023",
  },

  {
    title: "Libero non illum eligendi, nesciunt Libero non illum eligendi.",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero non illum eligendi, earum sapiente nesciunt.",
    postImage:
      "https://images.unsplash.com/photo-1646617747566-b7e784435a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    dp: "https://images.unsplash.com/photo-1646617747566-b7e784435a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    author: "Asif Imam",
    date: "17 Jul 2023",
  },
  {
    title: "Migrating to linear 101",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero non illum eligendi, earum sapiente nesciunt.",
    postImage:
      "https://images.unsplash.com/photo-1467307983825-619715426c70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1077&q=80",
    dp: "https://images.unsplash.com/photo-1467307983825-619715426c70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1077&q=80",
    author: "Asif Imam",
    date: "17 Jul 2023",
  },
  {
    title: "Migrating to linear 101",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero non illum eligendi, earum sapiente nesciunt.",
    postImage:
      "https://images.unsplash.com/photo-1510832198440-a52376950479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80",
    dp: "https://images.unsplash.com/photo-1510832198440-a52376950479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80",
    author: "Asif Imam",
    date: "17 Jul 2023",
  },
];
