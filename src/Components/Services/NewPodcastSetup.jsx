import React from "react";
import tick from "../../assets/SVG/Tick.svg";
import mictext from "../../assets/SVG/mictext.svg";

const NewPodcastSetup = () => {
  const podcast = [
    {
      name: "Strategy and Consultation",
      id: 0,
    },
    {
      name: "Recording setup, Website building, Branding, Music",
      id: 1,
    },
    {
      name: "Research support",
      id: 2,
    },
    {
      name: "Outreach & scheduling",
      id: 3,
    },
    {
      name: "Pre-production: Interview prep, questions, script, guest test/practice session",
      id: 4,
    },
    {
      name: "Platform for hosting",
      id: 5,
    },
    {
      name: "Production Recording audio, transcription, editing, revisions, content basket, show notes, etc.",
      id: 6,
    },
    {
      name: "Post-production: Distribution to audio directories, publishing, marketing ",
      id: 7,
    },
    {
      name: "Season wrap-up with Q/A sessions",
      id: 8,
    },
  ];
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14">
        <div className="space-y-12">
          <div className="flex">
            <h1 className="font-manrope font-semibold text-2xl lg:leading-none  md:text-3xl lg:text-[52px]  border-[#55B719] border-2 rounded-[120px] py-3 px-5 lg:py-7 lg:px-20">
              01.
            </h1>
            <h1 className="font-manrope font-semibold text-2xl lg:leading-none  md:text-3xl lg:text-[52px] bg-[#55B719] text-white rounded-[120px]  py-3 px-5 lg:py-7 lg:px-20">
              New Podcast Setup
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row  gap-10 ">
            <div className="space-y-5">
              {podcast.map((items, idx) => (
                <div key={items.id} className="flex items-center gap-7">
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
            <div>
              <img src={mictext} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPodcastSetup;
