import React from "react";
import friday from "../../assets/SVG/fridaymic.svg";
import friday20 from "../../assets/SVG/friday20.svg";
const Friday = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex flex-col">
            <h1 className="font-manrope font-normal text-lg md:text-2xl lg:text-[42px] text-center lg:text-start">
              Oh no! It’s Friday.
            </h1>
            <h1 className="font-manrope font-semibold text-2xl md:text-6xl lg:text-[82px] text-center lg:text-start">
              <span className="text-[#FFD74B]">Stress</span>{" "}
              <span className="text-[#55B719]">not.</span>
            </h1>
            <h1 className="font-manrope font-normal text-lg md:text-2xl lg:text-[42px]">
              We work on <span className="text-[#55B719]">weekends</span> too.
            </h1>
          </div>
          <div className=" flex flex-col items-center">
            <div className="bg-[#55B719] rounded-[120px] h-20 w-40  lg:w-56 lg:h-32 flex items-center justify-center">
              <img src={friday} alt="mic" className="h-1/2 md:h-auto" />
            </div>
            <h1 className="text-[#4B4B4B] text-32 text-center">
              First free episode for new clients
            </h1>
            <h1 className="text-[#55B719]  text-32 text-center">
              2 Podcasts per week
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#55B719] rounded-[120px] h-20 w-40  lg:w-56 lg:h-32 flex items-center justify-center">
              <img src={friday20} alt="20%" className="h-1/2 md:h-auto" />
            </div>

            <p className="text-[#4B4B4B] text-32 text-center">
              less pricing from other podcast
            </p>
            <p className="text-[#4B4B4B] text-32 text-center">
              management companies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friday;
