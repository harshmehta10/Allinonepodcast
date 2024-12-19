import React, { useState } from "react";
import commas from "../../assets/SVG/commas.svg";
import Clarrissa from "../../assets/Images/Home/Clarrissa.png";
import downcommas from "../../assets/SVG/downcommas.svg";
import arrowlft from "../../assets/SVG/arrowlft.svg";
import arrowrgt from "../../assets/SVG/arrowrgt.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";

const Testimonial = () => {
  const testimonials = [
    {
      text: "Allinone Podcast gives you the freedom and flexibility to make podcasting yours. Create and distribute unlimited podcast, get advanced analytics, monetize and promote in one simple.",
      name: "Clarrissa Nguyen",
      image: Clarrissa,
    },
    {
      text: "Allinone Podcast gives you the freedom and flexibility to make podcasting yours. Create and distribute unlimited podcast, get advanced analytics, monetize and promote in one simple.",
      name: "Clarrissa Nguyen",
      image: Clarrissa,
    },
    {
      text: "Allinone Podcast gives you the freedom and flexibility to make podcasting yours. Create and distribute unlimited podcast, get advanced analytics, monetize and promote in one simple.",
      name: "Clarrissa Nguyen",
      image: Clarrissa,
    },
  ];

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 pb-20 py-7 sm:py-14 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center space-y-20 lg:space-y-0">
          <div className="space-y-5  lg:space-y-7">
            <div className="space-y-6 lg:space-y-8">
              <h1 className="text-32 text-[#68BF33]">Testimonials</h1>
              <h1
                className="font-manrope font-medium text-42 text-[#4B4B4B] max-w-[406px]"
                data-aos="fade-right"
              >
                See what their story is with us
              </h1>
            </div>
            <p
              className="font-manrope font-light text-22 text-[#4B4B4B] max-w-[710px]"
              data-aos="fade-right"
            >
              Allinone Podcast gives you the freedom and flexibility to make
              podcasting yours. Create and distribute unlimited podcast, get
              advanced analytics, monetize and promote in one simple.
            </p>
            <div className="space-y-1">
              <h1
                className="font-manrope font-medium text-[#68BF33] text-3xl md:text-5xl lg:text-[82px]"
                data-aos="fade-right"
              >
                200{" "}
                <span className="font-manrope font-light text-[#68BF33] text-3xl md:text-5xl lg:text-[82px]">
                  +
                </span>
              </h1>
              <p
                className="font-manrope font-light text-[#4B4B4B] text-22"
                data-aos="fade-right"
              >
                Reviews
              </p>
            </div>
          </div>
          {/* right section */}

          <div className="relative space-y-5 ">
            <img
              src={downcommas}
              alt="downcommas"
              className="absolute right-0 bottom-0 z-50"
            />
            <img
              src={commas}
              alt="commasup"
              className="absolute -top-20 left-0 z-50"
            />
            <div className="btns absolute gap-2 lg:gap-5 flex right-0 -bottom-20">
              <div className="swiper-button-prev  cursor-pointer relative z-20  ">
                <button className="py-2 px-6 lg:py-4  lg:px-12 bg-[#55B719] rounded-[120px]">
                  <img src={arrowlft} alt="" />
                </button>
              </div>
              <div className="swiper-button-next  relative z-20  cursor-pointer">
                <button className="py-2 px-6 lg:py-4 lg:px-12 border rounded-[120px]">
                  <img src={arrowrgt} alt="" />
                </button>
              </div>
            </div>

            <div className="max-w-80 lg:max-w-[600px] lg:pl-20">
              <Swiper
                modules={[Navigation]}
                spaceBetween={60}
                slidesPerView={1}
                // centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                className="mx-auto w-full rounded-[20px]"
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide className="space-y-10">
                    <p className="font-manrope font-light text-22 text-[#4B4B4B]">
                      Allinone Podcast gives you the freedom and flexibility to
                      make podcasting yours. Create and distribute unlimited
                      podcast, get advanced analytics, monetize and promote in
                      one simple.
                    </p>
                    <div className="flex  items-center gap-5">
                      <img src={Clarrissa} alt="clarrissa" />
                      <p className="font-manrope font-medium text-22px">
                        Clarrissa Nguyen
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
