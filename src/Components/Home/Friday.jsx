import React from "react";
import friday from "../../assets/SVG/fridaymic.svg";
import whitezigleft from "../../assets/SVG/whiteziglft.svg";
import whitezigrgt from "../../assets/SVG/whitezigrgt.svg";
import friday20 from "../../assets/SVG/friday20.svg";
import { motion } from "framer-motion";

const Friday = () => {
  const lineVariants = {
    animate: (index) => ({
      y: [0, -5, 5, 0], // Moves the line up and down
      transition: {
        duration: 2, // Duration of one cycle
        repeat: Infinity, // Infinite loop
        ease: "easeInOut",
        delay: index * 0.2, // Staggered animation for each line
      },
    }),
  };

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-10 xl:px-14 py-7 sm:py-14 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-5 ">
          <div className="flex flex-col space-y-5">
            <h1 className="font-manrope font-normal text-2xl md:text-3xl lg:text-4xl text-center lg:text-start">
              Oh no! It’s Friday.
            </h1>
            <h1 className="font-manrope font-semibold text-4xl md:text-5xl lg:text-6xl text-center lg:text-start">
              <span className="text-[#FFD74B]">Stress</span>{" "}
              <span className="text-[#55B719]">not.</span>
            </h1>
            <h1 className="font-manrope font-normal text-2xl md:text-4xl lg:text-4xl lg:whitespace-nowrap ">
              We work on <span className="text-[#55B719]">weekends</span> too.
            </h1>
          </div>
          <div className=" flex flex-col items-center gap-3 group">
            <div className="bg-[#55B719] rounded-[120px] h-20 w-40 lg:w-48 lg:h-24 flex items-center justify-center gap-3">
              {/* Left Zig */}
              {/* Left Wavy SVG */}
              <motion.svg
                className="w-6 lg:w-9 h-6 lg:h-8"
                width="36"
                height="39"
                viewBox="0 0 36 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {[
                  { x: "0", y: "5.6001" },
                  { x: "4.79999", y: "0" },
                  { x: "9.59998", y: "4" },
                  { x: "24", y: "4" },
                  { x: "28.8", y: "4" },
                  { x: "14.4", y: "0" },
                  { x: "33.6", y: "0" },
                  { x: "19.2", y: "5.6001" },
                ].map((rect, index) => (
                  <motion.rect
                    key={index}
                    x={rect.x}
                    y={rect.y}
                    width="2.4"
                    height={index % 2 === 0 ? "12.4" : "18.8"}
                    rx="1.2"
                    fill="white"
                    custom={index}
                    variants={lineVariants}
                    animate="animate"
                  />
                ))}
              </motion.svg>
              <img
                src={friday}
                alt=""
                className="h-1/4 md:h-auto group-hover:scale-110 transition-all duration-500 "
              />
              {/* Right Wavy SVG */}
              <motion.svg
                className="w-6 lg:w-9 h-6 lg:h-8"
                width="36"
                height="39"
                viewBox="0 0 36 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {[
                  { x: "0", y: "5.6001" },
                  { x: "4.79999", y: "0" },
                  { x: "9.59998", y: "4" },
                  { x: "24", y: "4" },
                  { x: "28.8", y: "4" },
                  { x: "14.4", y: "0" },
                  { x: "33.6", y: "0" },
                  { x: "19.2", y: "5.6001" },
                ].map((rect, index) => (
                  <motion.rect
                    key={index}
                    x={rect.x}
                    y={rect.y}
                    width="2.4"
                    height={index % 2 === 0 ? "12.4" : "18.8"}
                    rx="1.2"
                    fill="white"
                    custom={index}
                    variants={lineVariants}
                    animate="animate"
                  />
                ))}
              </motion.svg>
            </div>
            <h1 className="text-[#4B4B4B] font-normal text-xl lg:text-2xl text-center max-w-[468px]">
              First free episode for new clients{" "}
              <span className="text-[#55B719]">2 Podcasts per week</span>
            </h1>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="bg-[#55B719] rounded-[120px] h-20 w-40  lg:w-48 lg:h-24 flex items-center justify-center">
              <img
                src={friday20}
                alt="20%"
                className="h-1/4 md:h-auto group-hover:scale-110 transition-all duration-500 "
              />
            </div>

            <p className="text-[#4B4B4B] text-xl lg:text-2xl text-center max-w-[495px] font-normal">
              less pricing from other podcast management companies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friday;
