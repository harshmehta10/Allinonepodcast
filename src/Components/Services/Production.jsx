import React from "react";
import tick from "../../assets/SVG/Tick.svg";
import zigzaggreen from "../../assets/SVG/zigzaggreen.svg";
import zigzagyellow from "../../assets/SVG/zigzagyellow.svg";
import playgreenbtn from "../../assets/SVG/playgreenbtn.svg";
import playyellowbtn from "../../assets/SVG/playyellowbtn.svg";
import { motion } from "framer-motion";
const Production = () => {
  const podcast = [
    {
      name: "Audiograms",
      id: 0,
    },
    {
      name: "Transcription, Editing, Revisions, show notes, etc.",
      id: 1,
    },
    {
      name: "Publishing",
      id: 2,
    },
    {
      name: "Paid Advertising",
      id: 3,
    },
  ];
  const lineVariants = {
    animate: (index) => ({
      y: [0, -10, 0], // Move up and down
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
        delay: index * 0.1, // Stagger effect
      },
    }),
  };

  const barVariants = {
    animate: (index) => ({
      y: [0, -10, 0], // Move up and down
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
        delay: index * 0.2, // Stagger effect
      },
    }),
  };

  const rects = [
    { x: 0, y: 14, height: 19 },
    { x: 12, y: 0, height: 47 },
    { x: 24, y: 10, height: 31 },
    { x: 60, y: 10, height: 31 },
    { x: 72, y: 10, height: 31 },
    { x: 36, y: 0, height: 47 },
    { x: 84, y: 0, height: 47 },
    { x: 48, y: 14, height: 19 },
    { x: 95, y: 14, height: 19 },
    { x: 107, y: 0, height: 47 },
    { x: 119, y: 10, height: 31 },
    { x: 155, y: 10, height: 31 },
    { x: 167, y: 10, height: 31 },
    { x: 131, y: 0, height: 47 },
    { x: 179, y: 0, height: 47 },
    { x: 143, y: 14, height: 19 },
    { x: 190, y: 14, height: 19 },
    { x: 202, y: 0, height: 47 },
    { x: 214, y: 10, height: 31 },
    { x: 250, y: 10, height: 31 },
    { x: 262, y: 10, height: 31 },
    { x: 226, y: 0, height: 47 },
    { x: 274, y: 0, height: 47 },
    { x: 238, y: 14, height: 19 },
    { x: 0, y: 14, height: 19, transform: "matrix(-1 0 0 1 363 14)" },
    { x: 0, y: 0, height: 47, transform: "matrix(-1 0 0 1 351 0)" },
    { x: 0, y: 10, height: 31, transform: "matrix(-1 0 0 1 339 10)" },
    { x: 0, y: 10, height: 31, transform: "matrix(-1 0 0 1 303 10)" },
    { x: 0, y: 10, height: 31, transform: "matrix(-1 0 0 1 291 10)" },
    { x: 0, y: 0, height: 47, transform: "matrix(-1 0 0 1 327 0)" },
    { x: 0, y: 14, height: 19, transform: "matrix(-1 0 0 1 315 14)" },
  ];

  const bars = [
    { x: 0, y: 14, width: 6, height: 19 },
    { x: 12, y: 0, width: 6, height: 47 },
    { x: 24, y: 10, width: 6, height: 31 },
    { x: 60, y: 10, width: 6, height: 31 },
    { x: 72, y: 10, width: 6, height: 31 },
    { x: 36, y: 0, width: 6, height: 47 },
    { x: 84, y: 0, width: 6, height: 47 },
    { x: 48, y: 14, width: 6, height: 19 },
    { x: 95, y: 14, width: 6, height: 19 },
    { x: 107, y: 0, width: 6, height: 47 },
    { x: 119, y: 10, width: 6, height: 31 },
    { x: 155, y: 10, width: 6, height: 31 },
    { x: 167, y: 10, width: 6, height: 31 },
    { x: 131, y: 0, width: 6, height: 47 },
    { x: 179, y: 0, width: 6, height: 47 },
    { x: 143, y: 14, width: 6, height: 19 },
    { x: 190, y: 14, width: 6, height: 19 },
    { x: 202, y: 0, width: 6, height: 47 },
    { x: 214, y: 10, width: 6, height: 31 },
    { x: 250, y: 10, width: 6, height: 31 },
    { x: 262, y: 10, width: 6, height: 31 },
    { x: 226, y: 0, width: 6, height: 47 },
    { x: 274, y: 0, width: 6, height: 47 },
    { x: 238, y: 14, width: 6, height: 19 },
    { x: 363, y: 14, width: 6, height: 19 },
    { x: 351, y: 0, width: 6, height: 47 },
    { x: 339, y: 10, width: 6, height: 31 },
    { x: 303, y: 10, width: 6, height: 31 },
    { x: 291, y: 10, width: 6, height: 31 },
    { x: 327, y: 0, width: 6, height: 47 },
    { x: 315, y: 14, width: 6, height: 19 },
  ];

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 overflow-hidden">
        <div className="space-y-12">
          <div className="flex">
            <h1
              className="font-manrope font-semibold text-2xl lg:leading-none  md:text-3xl lg:text-[52px] border-[#55B719] border-2 rounded-[120px] py-3 px-5 lg:py-7 lg:px-20"
              data-aos="fade-right"
            >
              02.
            </h1>
            <h1
              className="font-manrope font-semibold text-2xl lg:leading-none  md:text-3xl lg:text-[52px] bg-[#55B719] text-white rounded-[120px]  py-3 px-5 lg:py-7 lg:px-20"
              data-aos="fade-left"
              data-aos-delay="800"
            >
              Production
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 ">
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
                      <img src={tick} alt="tick" className="" />
                    </div>
                  </div>
                  <h1 className="font-manrope font-light text-base md:text-lg lg:text-[22px] text-wrap">
                    {items.name}
                  </h1>
                </div>
              ))}
            </div>
            <div className="relative w-1/2">
              <div
                className="inline-flex items-center gap-4 shadow-xl rounded-[200px] px-2 py-2 lg:px-5 lg:py-5 "
                data-aos="fade-left"
                data-aos-delay="1000 "
              >
                <img src={playgreenbtn} alt="" className="size-14 lg:size-24" />

                <motion.svg
                  className="w-[300px] lg:w-[363px] h-[67px] lg:h-[87px]"
                  width="363"
                  height="87"
                  viewBox="0 0 300 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {rects.map((rect, index) => (
                    <motion.rect
                      key={`green-${index}`}
                      x={rect.x}
                      y={rect.y}
                      width="6"
                      height={rect.height}
                      rx="3"
                      fill="#55B719" // Green color
                      transform={rect.transform || ""}
                      custom={index}
                      variants={lineVariants}
                      animate="animate"
                    />
                  ))}
                </motion.svg>
              </div>
              <div
                className="hidden lg:flex items-center gap-4 shadow-xl rounded-[200px] px-2 lg:px-5 py-2 lg:py-5  lg:absolute lg:right-0 lg:bottom-0  "
                data-aos="fade-left"
                data-aos-delay="1000 "
              >
                <img
                  src={playyellowbtn}
                  alt=""
                  className="size-14  lg:size-24"
                />
                <motion.svg
                  className="w-[250px] sm:w-[300px] lg:w-[363px] h-[47px] sm:h-[67px] lg:h-[87px]"
                  viewBox="0 0 363 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {bars.map((bar, index) => (
                    <motion.rect
                      key={`yellow-${index}`}
                      x={bar.x}
                      y={bar.y}
                      width={bar.width}
                      height={bar.height}
                      rx="3"
                      fill="#FFD74B" // Yellow color
                      custom={index}
                      variants={barVariants}
                      animate="animate"
                    />
                  ))}
                </motion.svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Production;
