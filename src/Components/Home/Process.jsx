import React from "react";
import playbtn from "../../assets/SVG/playbtn.svg";
import zif from "../../assets/SVG/zif.svg";
import player from "../../assets/SVG/player.svg";

const Process = () => {
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
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6 sm:py-12 overflow-hidden space-y-20">
        <div>
          <h1 className="text-32 text-center">Our Process</h1>
        </div>
        <div className="space-y-5 lg:space-y-16">
          <div className="flex flex-col gap-5 lg:flex-row lg:gap-0 justify-between max-w-screen-lg mx-auto relative">
            <hr className="border-[#55B719] border-t-0.5 border-dashed w-full  z-0 absolute -translate-y-1/2 top-1/2 rotate-90 lg:rotate-0" />

            {processData.slice(0, 4).map((items, idx) => (
              <div className="flex items-center justify-center relative ">
                <div className="py-5 px-6 bg-[#55B719] text-white rounded-[120px]">
                  {items.name}
                </div>
                <div
                  className={`${
                    idx === 3
                      ? "hidden"
                      : "size-9 bg-white shadow-lg rounded-full flex justify-center items-center absolute -right-full -translate-y-1/2 -top-10 lg:top-1/2 z-10"
                  }`}
                >
                  <span className="bg-[#55B719] size-4 rounded-full z-20 relative"></span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5 lg:flex-row  lg:gap-0 justify-between mx-auto max-w-screen-md relative">
            <hr className="border-[#55B719] border-t-0.5 border-dashed w-full  z-0 absolute -translate-y-1/2 top-1/2 rotate-90 lg:rotate-0" />
            {processData.slice(4).map((items, idx) => (
              <div className="flex items-center justify-center relative">
                <div className="py-5 px-6 bg-[#55B719] text-white rounded-[120px]">
                  {items.name}
                </div>
                <div
                  className={`${
                    idx === 2
                      ? "hidden"
                      : "size-9 bg-white shadow-lg rounded-full flex justify-center items-center absolute -right-full -translate-y-1/2 top-1/2 z-10"
                  }`}
                >
                  <span className="bg-[#55B719] size-4 rounded-full z-20 relative"></span>
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
          </div>
        </div>

        <div className="bg-[#55B719] rounded-[450px] flex items-center justify-center  border-[#68BF33] border-8 relative overflow-hidden py-20 px-5  md:py-28 md:px-5 lg:py-36 lg:px-5">
          <div className="bg-black w-full h-full absolute bg-opacity-20 "></div>
          <h1 className="text-center text-white font-manrope font-medium text-xl md:text-4xl lg:text-7xl max-w-[800px]  ">
            Podcast hosting to manage and monetize your podcast
          </h1>
          <div>
            <img
              src={zif}
              alt="zif"
              className="absolute z-50 right-10 md:right-20 lg:right-48 top-10 w-10 md:w-auto "
            />
          </div>
          <img
            src={playbtn}
            alt=""
            className="absolute z-10 -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 size-1/2 md:size-auto"
          />
          <div>
            <img
              src={player}
              alt="player"
              className="absolute -bottom-5 lg:bottom-10 -translate-x-1/2 left-1/2 size-1/2 md:size-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
