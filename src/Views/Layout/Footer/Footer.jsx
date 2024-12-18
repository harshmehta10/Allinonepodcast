import React from "react";
import twitter from "../../../assets/SVG/Twitter.svg";
import google from "../../../assets/SVG/google.svg";
import fb from "../../../assets/SVG/fb.svg";
import linkdin from "../../../assets/SVG/linkdin.svg";

const Footer = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14">
        <div className="bg-[#68BF33] border rounded-[200px] lg:rounded-full  py-16 lg:py-10 px-10">
          <div className="flex flex-col justify-center items-center md: space-y-4 lg:space-y-7">
            <div className="flex justify-center gap-6 items-center ">
              <img src={twitter} alt="twitter icon" />

              <img src={fb} alt="facebook icon" />
              <img src={linkdin} alt="linkdin icon" />
            </div>
            <div className=" text-center flex flex-col space-y-4 lg:space-y-7">
              <h1 className="font-manrope font-semibold text-white text-42 max-w-2xl mx-auto leading-none">
                Enter your email address and get started for free
              </h1>
              <div className=" bg-white bg-opacity-20 rounded-[120px] flex items-center justify-center self-center py-1 px-1">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Your email address"
                  className=" bg-transparent text-white placeholder:text-white px-5 placeholder:text-sm md:text-base text-sm md:placeholder:text-base"
                />
                <button className="border rounded-[120px] text-[#68BF33] bg-white font-manrope font-semibold py-3 px-5 text-sm md:text-base ">
                  Get Started
                </button>
              </div>
              <p className="text-white max-w-[974px] font-manrope font-light text-18 text-center mx-auto">
                We get inspiration from great people like Mahatma Gandhi, MLK
                Jr, Abraham Lincoln; but it becomes all the more easy to apply
                if it comes from someone we have seen. These physicians work and
                live in the same environment, time, culture and expectations
                that we do.
              </p>
              <p className="text-center text-white text-opacity-60 font-manrope font-light text-xs md:text-base ">
                @2020 ALL RIGHTS RESERVED
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
