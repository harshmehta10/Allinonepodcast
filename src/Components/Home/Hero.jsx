import React from "react";
import mic from "../../assets/Images/Home/mic.png";
import greenvector from "../../assets/Images/Home/greenvector.png";
import slack from "../../assets/Images/Home/slack.png";
import yellbg from "../../assets/Images/Home/yellbg.png";
import get from "../../assets/SVG/getst.svg";

const Hero = () => {
  return (
    <div className="">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-10 xl:px-14 py-7 sm:py-28 relative lg:h-[650px] overflow-hidden">
        <div className="grid grid-cols-1 gap-4 lg:gap-0 lg:grid-cols-2 ">
          <div className="flex items-center">
            <div className="space-y-8 lg:space-y-14 ">
              <div className="space-y-5 lg:space-y-8 relative z-10 bg-white ">
                <h1 className="max-w-[527px] font-manrope font-medium text-[26px] md:text-3xl lg:text-5xl lg:leading-[60px] text-center lg:text-start mx-auto lg:mx-0  ">
                  Podcast hosting to manage and monetize your{" "}
                  <span className="text-[#55B719]">podcast</span>
                </h1>

                <p className="font-light font-manrope text-[20px] leading-8 max-w-[710px]  text-[#4B4B4B] text-center lg:text-start ">
                  Allinone Podcast gives you the freedom and flexibility to make
                  podcasting yours. Create and distribute unlimited podcast, get
                  advanced analytics, monetize and promote in one simple.
                </p>
              </div>
              <div className="flex space-x-1 lg:space-x-4 justify-center lg:justify-start">
                <button className="py-4 px-9 flex items-center font-manrope text-22 font-medium rounded-[120px] bg-[#55B719] group relative">
                  {/* Button Label */}
                  <div className=" group-hover:-translate-x-2 transition-all duration-500">
                    <span className="text-white">Get Started</span>
                  </div>

                  {/* Image that appears on hover */}
                  <div className="absolute right-4 invisible group-hover:visible group-hover:translate-x-1 transition-all duration-500">
                    <img src={get} alt="Icon" className="w-6 h-6" />
                  </div>
                </button>

                <button className="py-4 px-9 border-2 border-[#55B719] font-manrope text-22 font-medium rounded-[120px] text-[#55B719]">
                  Try for free
                </button>
              </div>
            </div>
          </div>
          <div className=" flex  lg:block order-first lg:order-last">
            <img
              src={greenvector}
              alt="greenvector"
              className="relative  h-[250px] md:h-[400px] lg:h-[400px] xl:h-[480px] w-[150px] md:w-[250px] lg:w-[280px] -right-8 md:-right-44 lg:right-10 top-8 md:-top-5 lg:top-0 xl:-top-20 animate-scale-loop "
              data-aos="fade-left"
              data-aos-delay="600"
            />
            <img
              src={mic}
              alt="mic"
              className="relative   lg:absolute -right-2 md:-right-60 lg:right-0 -top-5 md:-top-10 lg:top-28 xl:-top-10 h-80 md:h-[420px] lg:h-[400px] xl:h-[600px]   lg:mx-0 z-50"
              data-aos="fade-left"
              data-aos-delay="400"
            />
            <img
              src={yellbg}
              alt="yellow bg"
              className="relative lg:absolute right-56 md:right-36 lg:right-0 xl:right-4 top-7 md:-top-5 lg:top-40 xl:top-12 h-[260px] md:h-[400px] lg:h-[300px] xl:h-[480px]  mx-auto lg:mx-0 "
              data-aos="fade-left "
            />
          </div>
        </div>
      </div>
      {/* <div className="relative  ">
        <img
          src={slack}
          alt=""
          className="fixed bottom-0 right-0 z-[999] h-20 hover:scale-110 cursor-pointer transition-transform duration-200"
        />
      </div> */}
    </div>
  );
};

export default Hero;
