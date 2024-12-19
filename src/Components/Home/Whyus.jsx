import React from "react";
import bgwhyus from "../../assets/SVG/bg-whyus.svg";

const Whyus = () => {
  return (
    <div className="">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 overflow-hidden">
        <div className="space-y-2 ">
          <h1 className="text-32 text-center" data-aos="fade-left">
            Why Us?
          </h1>
          <div className="relative flex ">
            <img
              src={bgwhyus}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />

            <p
              className="font-manrope font-normal text-sm md:text-lg lg:text-xl max-w-[878px] mx-auto text-center text-[#4B4B4B]"
              data-aos="fade-right"
            >
              Your time costs $$$. And we want to save your time. Create a
              bigger impact in your audience with our podcasting solutions.
              Don’t worry, we will do the hard work for you. Run your own
              personal podcast series or an internal podcast for your company,
              or both. You can nail that{" "}
              <span className="text-[#55B719] font-manrope font-medium text-sm md:text-lg lg:text-xl">
                TRUST
              </span>{" "}
              on us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
