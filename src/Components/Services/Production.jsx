import React from "react";
import tick from "../../assets/SVG/Tick.svg";
import zigzag from "../../assets/SVG/zigzag.svg";
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
            <div data-aos="fade-left" data-aos-delay="1000">
              <img src={zigzag} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Production;
