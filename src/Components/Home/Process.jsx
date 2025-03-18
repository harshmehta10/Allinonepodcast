import React from "react";
import playbtn from "../../assets/SVG/playbtn.svg";
import zif from "../../assets/SVG/zif.svg";
import player from "../../assets/SVG/player.svg";
import { motion } from "framer-motion";

const Process = () => {
  const lineVariants = {
    animate: (index) => ({
      y: [0, -5, 5, 0], // Moves up and down
      transition: {
        duration: 2, // Duration for one wave
        repeat: Infinity, // Infinite looping
        ease: "easeInOut",
        delay: index * 0.2, // Stagger animation for each bar
      },
    }),
  };

  const processData = [
    {
      name: "Consulation",
    },
    {
      name: "Strategy",
    },
    {
      name: "Lauching",
    },
    {
      name: "Production",
    },
    {
      name: "Distribution",
    },
    {
      name: "Promotion",
    },
    {
      name: "Analyze",
    },
  ];
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-10 xl:px-14 py-7 sm:py-14 overflow-hidden space-y-14">
        <div>
          <h1 className="text-32 text-center">Our Process</h1>
        </div>
        <div className="space-y-12 lg:space-y-16">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-0 justify-between max-w-screen-lg mx-auto relative ">
            <hr className="border-[#55B719] border-t-0.5 border-dashed w-[400px] lg:w-full  z-0 absolute -translate-x-1/2 left-1/2 lg:-translate-y-1/2  top-1/3 lg:top-1/2 rotate-90 lg:rotate-0" />

            {processData.slice(0, 4).map((items, idx) => (
              <div className="flex items-center justify-center relative ">
                <div className="py-5 px-6 bg-[#55B719] text-white rounded-[120px]">
                  {items.name}
                </div>

                <div
                  className={`${
                    idx === 3 ? "block lg:hidden " : ""
                  } size-6 lg:size-9 bg-white shadow-lg rounded-full flex justify-center items-center absolute  lg:-right-full -translate-y-1/2 -top-6 lg:top-1/2 z-10 `}
                >
                  <span className="bg-[#55B719] size-3 lg:size-4 rounded-full z-20 relative"></span>
                </div>
              </div>
            ))}
            <div className=" border-[#55B719] border-l-0 border-y  border-r  border-dashed rounded-[30px] absolute w-48 h-[65px] -bottom-[33px] -right-10 -z-10 hidden lg:block "></div>
            <div className="bg-white absolute right-[126px] top-8 size-16 rounded-lg hidden lg:block"></div>
          </div>

          <div className="flex flex-col gap-12 lg:flex-row  lg:gap-0 justify-between mx-auto max-w-screen-md relative ">
            <hr className="border-[#55B719] border-t-0.5 border-dashed absolute w-full rotate-90 lg:rotate-0  top-1/3 lg:-top-8 z-0 " />

            {/* rounded lines */}
            <hr className="border-[#55B719] border-t-0.5 border-dashed w-full  z-0 absolute -translate-y-1/2 top-1/2 rotate-90 lg:rotate-0" />

            {/* FOr making round lines elements  */}
            <div className=" border-[#55B719] border-l border-y  border-r-0  border-dashed rounded-[30px] absolute w-16 h-[65px] -top-8 -left-10 hidden lg:block"></div>
            <div className="bg-white absolute -top-[31px] size-5 hidden lg:block"></div>
            {/* elements  */}

            {processData.slice(4).map((items, idx) => (
              <div className="flex items-center justify-center relative ">
                <div className="py-5 px-6 bg-[#55B719] text-white rounded-[120px] ">
                  {items.name}
                </div>
                <div
                  className={`${
                    idx === 2 ? "block lg:hidden " : ""
                  } size-6 lg:size-9  bg-white shadow-lg rounded-full flex justify-center items-center absolute  lg:-right-full -translate-y-1/2 -top-6 lg:top-1/2 z-10`}
                >
                  <span className="bg-[#55B719] size-3 lg:size-4 rounded-full z-20 relative"></span>
                </div>
                {/* <hr
                  className={`${
                    idx === 2
                      ? "border-none"
                      : "border-[#55B719] border-t-0.5 border-dashed absolute w-full -right-full z-0"
                  }`}
                />
                <hr className="border-[#55B719] border-t-0.5 border-dashed absolute w-full -left-full" /> */}
              </div>
            ))}
            <div className="bg-white absolute -translate-x-1/2 left-1/2 -bottom-10 size-10"></div>
          </div>
        </div>
        <div
          className="bg-[#55B719] rounded-[450px] flex items-center justify-center  border-[#68BF33] border-8 relative overflow-hidden  group"
          data-aos="zoom-in"
        >
          <div className="bg-black w-full h-full absolute bg-opacity-20 "></div>
          <div className="w-full h-96 overflow-hidden flex justify-center items-center">
            <iframe
              className="w-[98%] h-[95%] relative z-10 rounded-[450px]"
              src="https://www.youtube.com/embed/7k1ehaE0bdU?si=JrZYZTf25Vnj8OMQ&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          {/* <h1 className="text-center text-white font-manrope font-medium text-xl md:text-3xl lg:text-6xl max-w-[800px]  ">
            Podcast hosting to manage and monetize your podcast
          </h1> */}

          {/* <div>
            <motion.svg
              className="absolute z-50 right-10 md:right-20 lg:right-48 top-10 w-10  lg:w-auto "
              width="90"
              height="57"
              viewBox="0 0 90 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {[
                { x: "0", y: "14", height: "19" },
                { x: "12", y: "0", height: "47" },
                { x: "24", y: "10", height: "31" },
                { x: "60", y: "10", height: "31" },
                { x: "72", y: "10", height: "31" },
                { x: "36", y: "0", height: "47" },
                { x: "84", y: "0", height: "47" },
                { x: "48", y: "14", height: "19" },
              ].map((rect, index) => (
                <motion.rect
                  key={index}
                  x={rect.x}
                  y={rect.y}
                  width="6"
                  height={rect.height}
                  rx="3"
                  fill="#FFD74B"
                  custom={index}
                  variants={lineVariants}
                  animate="animate"
                />
              ))}
            </motion.svg>
          </div> */}

          {/* <img
            src={playbtn}
            alt=""
            className="absolute z-10 -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 size-1/2  lg:size-1/2 group-hover:scale-105 transition-all duration-500"
          /> */}
          {/* <div>
            <img
              src={player}
              alt="player"
              className="absolute -bottom-5 lg:bottom-10 -translate-x-1/2 left-1/2 size-1/2 md:size-auto "
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Process;
