import React from "react";
import mic from "../../assets/Images/Home/mic.png";

const Hero = () => {
  return (
    <div className="">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 relative lg:h-[650px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="flex items-center">
            <div className="space-y-8 lg:space-y-14 ">
              <div className="space-y-5 lg:space-y-8 relative z-10 bg-white ">
                <h1 className="max-w-[527px] font-manrope font-medium text-2xl md:text-3xl lg:text-5xl text-center lg:text-start mx-auto lg:mx-0  ">
                  Podcast hosting to manage and monetize your{" "}
                  <span className="text-[#55B719]">podcast</span>
                </h1>

                <p className="font-light font-manrope text-22 max-w-[710px]  text-[#4B4B4B] text-center lg:text-start">
                  Allinone Podcast gives you the freedom and flexibility to make
                  podcasting yours. Create and distribute unlimited podcast, get
                  advanced analytics, monetize and promote in one simple.
                </p>
              </div>
              <div className="flex space-x-1 lg:space-x-4 justify-center lg:justify-start">
                <button className="text-white bg-[#55B719] border rounded-full py-2 px-4 lg:py-4 lg:px-8 text-xs lg:text-base ">
                  Get Started
                </button>
                <button className="border rounded-full text-[#55B719] py-2 px-4 lg:py-4 lg:px-8  border-[#55B719] text-xs lg:text-base">
                  Try for free
                </button>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <img
              src={mic}
              alt="mic"
              className="relative right-0 lg:absolute lg:right-0  lg:top-0 h-60 md:h-[400px] lg:h-[400px] xl:h-[620px] mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
