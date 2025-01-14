import React from "react";
import tick from "../../assets/SVG/Tick.svg";
import mictext from "../../assets/SVG/mictext.svg";
import messagegreen from "../../assets/SVG/messagegreen.svg";
import messagewhite from "../../assets/SVG/messagewhite.svg";
import micstand from "../../assets/SVG/micstand.svg";
import playbtngreen from "../../assets/SVG/playbtngreen.svg";
import slack from "../../assets/Images/Home/slack.png";

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
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 overflow-hidden">
        <div className="space-y-12">
          <div className="flex">
            <h1
              className="font-manrope font-semibold text-2xl lg:leading-none  md:text-3xl lg:text-[52px]  border-[#55B719] border-2 rounded-[120px] py-3 px-5 lg:py-7 lg:px-20"
              data-aos="fade-right"
            >
              01.
            </h1>
            <h1
              className="font-manrope font-semibold text-2xl lg:leading-none  md:text-3xl lg:text-[52px] bg-[#55B719] text-white rounded-[120px]  py-3 px-5 lg:py-7 lg:px-20"
              data-aos="fade-left"
              data-aos-delay="800"
            >
              New Podcast Setup
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row  gap-10 ">
            <div className="space-y-5">
              {podcast.map((items, idx) => (
                <div
                  key={items.id}
                  className="flex items-center gap-7"
                  data-aos="fade-down"
                  data-aos-delay={`${idx * 50}`}
                  data-aos-offset="100"
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
            <div className="block lg:hidden"></div>
            <div className="block lg:hidden"></div>
            <div className="block lg:hidden"></div>
            <div className="block lg:hidden"></div>

            <div className="relative w-full">
              <img
                src={messagegreen}
                alt=""
                className="absolute  -top-44  lg:top-0 right-24 lg:right-16 z-50 w-24 lg:w-auto "
                data-aos="fade-left"
              />
              <img
                src={messagewhite}
                alt="  "
                className="absolute  left-10 bottom-16 lg:top-20 lg:left-10  z-50 w-28 lg:w-auto"
                data-aos="fade-down"
              />
              <img
                src={micstand}
                alt="micstand"
                className="absolute left-32 -bottom-10  lg:bottom-40 lg:left-80  w-20 lg:w-auto "
                data-aos="fade-up"
                data-aos-offset="50"
              />
              <img
                src={playbtngreen}
                alt=""
                className=" absolute w-20 lg:w-auto  -top-28 lg:top-36 right-32 lg:right-0  "
                data-aos="fade-right"
              />
            </div>
            <div className="relative  ">
              <img
                src={slack}
                alt=""
                className="fixed bottom-0 right-0 z-[999] h-20 hover:scale-110 cursor-pointer transition-transform duration-200"
              />
            </div>

            {/* <div>
              <img
                src={mictext}
                alt=""
                data-aos="fade-left"
                data-aos-delay="1000"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPodcastSetup;
