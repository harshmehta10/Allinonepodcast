import React from "react";
import friday from "../../assets/SVG/fridaymic.svg";
import friday20 from "../../assets/SVG/friday20.svg";
const Friday = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-5 ">
          <div className="flex flex-col space-y-5">
            <h1
              className="font-manrope font-normal text-lg md:text-2xl lg:text-[42px] text-center lg:text-start"
              data-aos="fade-right"
            >
              Oh no! It’s Friday.
            </h1>
            <h1
              className="font-manrope font-semibold text-2xl md:text-6xl lg:text-[82px] text-center lg:text-start"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <span className="text-[#FFD74B]">Stress</span>{" "}
              <span className="text-[#55B719]">not.</span>
            </h1>
            <h1
              className="font-manrope font-normal text-lg md:text-2xl lg:text-[42px] lg:whitespace-nowrap "
              data-aos="fade-right"
              data-aos-delay="200"
            >
              We work on <span className="text-[#55B719]">weekends</span> too.
            </h1>
          </div>
          <div className=" flex flex-col items-center gap-3 group">
            <div className="bg-[#55B719] rounded-[120px] h-20 w-40  lg:w-56 lg:h-32 flex items-center justify-center">
              <img
                src={friday}
                alt="mic"
                className="h-1/2 md:h-auto group-hover:scale-110 transition-all duration-500"
                data-aos="zoom-in"
              />
            </div>
            <h1
              className="text-[#4B4B4B] font-normal text-32 text-center max-w-[468px]"
              data-aos="zoom-in"
            >
              First free episode for new clients{" "}
              <span className="text-[#55B719]">2 Podcasts per week</span>
            </h1>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="bg-[#55B719] rounded-[120px] h-20 w-40  lg:w-56 lg:h-32 flex items-center justify-center">
              <img
                src={friday20}
                alt="20%"
                className="h-1/2 md:h-auto group-hover:scale-110 transition-all duration-500 "
                data-aos="zoom-in"
              />
            </div>

            <p
              className="text-[#4B4B4B] text-32 text-center max-w-[495px] font-normal"
              data-aos="zoom-in"
            >
              less pricing from other podcast management companies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friday;
