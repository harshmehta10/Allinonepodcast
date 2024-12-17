import React from "react";
import bgwhyus from "../../assets/SVG/bg-whyus.svg";

const Whyus = () => {
  return (
    <div className="">
      <div className="max-w-screen-2xl mx-auto px-8 lg:px-4 py-14 lg:py-7 ">
        <div className="space-y-2 py-12">
          <h1 className="text-32 text-center">Why Us?</h1>
          <div className="bg-whyus bg-cover bg-center">
            <p className="font-manrope font-normal text-sm md:text-lg lg:text-xl max-w-[878px] mx-auto text-center text-[#4B4B4B]">
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
