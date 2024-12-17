import React, { useState } from "react";
import personpodcast from "../../assets/Images/Home/personpodcast.png";
import arrowlftblack from "../../assets/SVG/arrowlftblack.svg";
import arrowrgtwhite from "../../assets/SVG/arrowrgtwhite.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

const Latestpodcast = () => {
  const podcasts = [
    {
      img: personpodcast,
      title: "Martin’s Podcast",
      description:
        "Your time costs $$$. And we want to save your time. Create a bigger impact in your audience with our podcasting solutions.",
      date: "16 Dec, 2022",
    },
    {
      img: personpodcast,
      title: "Martin’s Podcast",
      description:
        "Your time costs $$$. And we want to save your time. Create a bigger impact in your audience with our podcasting solutions.",
      date: "16 Dec, 2022",
    },
    {
      img: personpodcast,
      title: "Martin’s Podcast",
      description:
        "Your time costs $$$. And we want to save your time. Create a bigger impact in your audience with our podcasting solutions.",
      date: "16 Dec, 2022",
    },
    {
      img: personpodcast,
      title: "Martin’s Podcast",
      description:
        "Your time costs $$$. And we want to save your time. Create a bigger impact in your audience with our podcasting solutions.",
      date: "16 Dec, 2022",
    },
    {
      img: personpodcast,
      title: "Martin’s Podcast",
      description:
        "Your time costs $$$. And we want to save your time. Create a bigger impact in your audience with our podcasting solutions.",
      date: "16 Dec, 2022",
    },
    {
      img: personpodcast,
      title: "Martin’s Podcast",
      description:
        "Your time costs $$$. And we want to save your time. Create a bigger impact in your audience with our podcasting solutions.",
      date: "16 Dec, 2022",
    },
  ];
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6 sm:py-12 space-y-10 pb-14">
      <div className="flex items-center justify-between">
        {/* Header Section */}
        <h1 className="text-32 text-[#68BF33]">Latest Podcast</h1>
        <button className="text-[#55B719] border-[#55B719] border rounded-[120px] py-5 px-16">
          View All
        </button>
      </div>

      <div className="relative">
        <div className="swiper-button-prev  cursor-pointer top-full lg:top-1/4 left-0 absolute z-20  ">
          <button className="border rounded-[120px] bg-[#55B719]">
            <img
              src={arrowlftblack}
              alt="arrowback"
              className="py-2 px-6 lg:py-4 lg:px-12"
            />
          </button>
        </div>
        <div className="swiper-button-next absolute z-20   right-0 top-full lg:top-1/4 cursor-pointer">
          <button className=" border rounded-[120px] bg-[#55B719]">
            <img
              src={arrowrgtwhite}
              alt="arrownxt"
              className="py-2 px-6 lg:py-4 lg:px-12"
            />
          </button>
        </div>

        {/* Swiper Section */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          className="lg:w-[80%] mx-auto"
        >
          {podcasts.map((podcast, index) => (
            <SwiperSlide key={index}>
              <div className="space-y-4 ">
                <div>
                  {/* {/* <div className="bg-black w-full h-full absolute bg-opacity-20 "></div> */}
                  <img
                    src={podcast.img}
                    alt={podcast.title}
                    className="rounded-[450px] border-8 border-[#68BF33]"
                  />
                </div>
                <h1 className="text-left font-manrope text-base  md:text-lg lg:text-2xl font-semibold">
                  {podcast.title}
                </h1>
                <p className="text-left max-w-[600px] font-manrope font-normal  text-sm md:text-lg lg:text-[22px] text-[#4B4B4B]">
                  {podcast.description}
                </p>
                <p className="text-left font-manrope font-normal  text-18 text-[#7E7E7E]">
                  {podcast.date}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Latestpodcast;
