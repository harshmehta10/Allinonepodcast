import React from "react";
import tick from "../../assets/SVG/Tick.svg";
import facebook from "../../assets/SVG/facebook.svg";
import linkdinbig from "../../assets/SVG/linkdinbig.svg";
import twitterbig from "../../assets/SVG/twitterbig.svg";
import googleplus from "../../assets/SVG/googleplus.svg";

const Postproduction = () => {
  const podcast = [
    {
      name: "Distribution to audio directories",
      id: 0,
    },
    {
      name: "Publishing",
      id: 1,
    },
    {
      name: "Promotion",
      id: 2,
    },
    {
      name: "Feedback and Analytics through streamlined procedures to keep you on track Advertising",
      id: 3,
    },
  ];
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-4 overflow-hidden">
        <div className="space-y-12">
          <div className="flex">
            <h1
              className="font-manrope font-semibold text-2xl lg:leading-none  md:text-3xl lg:text-[52px] border-[#55B719] border-2 rounded-[120px] py-4 px-5 lg:py-7 lg:px-20"
              data-aos="fade-right"
            >
              03.
            </h1>
            <h1
              className="font-manrope font-semibold text-2xl lg:leading-none  md:text-3xl lg:text-[52px] bg-[#55B719] text-white rounded-[120px]  py-3 px-5 lg:py-7 lg:px-20"
              data-aos="fade-left"
              data-aos-delay="800"
            >
              Post Production
            </h1>
          </div>
          <div className="flex flex-col space-y-24 lg:space-y-0 lg:flex-row gap-10 ">
            <div className="space-y-5">
              {podcast.map((items, idx) => (
                <div
                  key={items.id}
                  className="flex items-center gap-7"
                  data-aos="fade-down"
                  data-aos-delay="1000"
                >
                  <div>
                    <div className="w-20 h-10 lg:w-28 lg:h-16  border-[#55B719] border rounded-[120px] flex items-center justify-center">
                      <img src={tick} alt="tick" />
                    </div>
                  </div>
                  <h1 className="font-manrope font-light text-base md:text-lg lg:text-[22px] text-wrap">
                    {items.name}
                  </h1>
                </div>
              ))}
            </div>
            <div className="relative lg:w-1/2">
              <img
                src={googleplus}
                alt=""
                className="absolute -top-36 md:-top-44 lg:-top-20 xl:-top-42 right-28 lg:right-32 z-50 size-28 lg:size-48 xl:size-56"
                data-aos="fade-right"
              />
              <img
                src={linkdinbig}
                alt=""
                className="absolute right-10 lg:right-8 xl:right-4 -top-20 lg:top-12 xl:top-4 z-50 size-16 lg:size-24 xl:size-32"
                data-aos="fade-right"
              />
              <img
                src={twitterbig}
                alt=""
                className="absolute left-16 md:left-96 lg:-left-20 xl:left-5 -top-24 lg:top-16 xl:top-2 z-50 size-16 lg:size-24 xl:size-32"
                data-aos="fade-left"
              />
              <img
                src={facebook}
                alt=""
                className="absolute -bottom-2 md:-bottom-3 lg:bottom-10 xl:bottom-5 right-40 lg:right-40 xl:right-52 z-50 size-16 lg:size-24 xl:size-32"
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postproduction;
