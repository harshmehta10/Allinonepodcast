import React from "react";
import mic from "../../assets/Images/Home/mic.png";
import greenvector from "../../assets/Images/Home/greenvector.png";
import slack from "../../assets/Images/Home/slack.png";
import yellbg from "../../assets/Images/Home/yellbg.png";
import get from "../../assets/SVG/getst.svg";

const Hero = () => {
  return (
    <div className="">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 relative lg:h-[650px] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="flex items-center">
            <div className="space-y-8 lg:space-y-14 ">
              <div className="space-y-5 lg:space-y-8 relative z-10 bg-white ">
                <h1 className="max-w-[527px] font-manrope font-medium text-2xl md:text-3xl lg:text-5xl lg:leading-[60px] text-center lg:text-start mx-auto lg:mx-0  ">
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
                <button className="py-4 px-9 flex items-center font-manrope text-[22px] font-medium rounded-[120px] bg-[#55B719] group relative">
                  {/* Button Label */}
                  <div className=" group-hover:-translate-x-4 transition-all duration-500">
                    <span className="text-white">Get Started</span>
                  </div>

                  {/* Image that appears on hover */}
                  <div className="absolute right-3 invisible group-hover:visible group-hover:translate-x-2 transition-all duration-500">
                    <img src={get} alt="Icon" className="w-6 h-6" />
                  </div>
                </button>

                <button className="py-4 px-9 border-2 border-[#55B719] font-manrope text-22 font-medium rounded-[120px] text-[#55B719]">
                  Try for free
                </button>
              </div>
            </div>
          </div>
          <div className="mx-auto ">
            <img
              src={greenvector}
              alt="greenvector"
              className="relative z-[999] h-[480px] w-[280px] right-[240px] -top-4 animate-scale-loop "
              data-aos="fade-left"
              data-aos-delay="600"
            />
            <img
              src={mic}
              alt="mic"
              className="relative right-0 lg:absolute lg:right-0  lg:top-0 h-60 md:h-[400px] lg:h-[400px] xl:h-[600px] xl:-top-10 mx-auto lg:mx-0 z-[999]"
              data-aos="fade-left"
              data-aos-delay="400"
            />
            <img
              src={yellbg}
              alt="yellow bg"
              className="relative right-0 lg:absolute lg:right-4  lg:top-10 h-60 md:h-[400px] lg:h-[300px] xl:h-[480px] xl:top-12 mx-auto lg:mx-0"
              data-aos="fade-left"
            />
          </div>
        </div>
      </div>
      <div className="relative  ">
        <img
          src={slack}
          alt=""
          className="fixed bottom-0 right-0 z-[999] h-20 hover:scale-110 cursor-pointer transition-transform duration-200"
        />
      </div>
    </div>
  );
};

export default Hero;
