import React from "react";
import smtick from "../../assets/SVG/smtick.svg";
import smcross from "../../assets/SVG/smcross.svg";

const Pricing = () => {
  const heading = [
    {
      name: "Services",
      child: [
        " Strategy & Cosultacy",
        " Branding & Template",
        " Strategy & Cosultacy",
        " Strategy & Cosultacy",
        " Strategy & Cosultacy",
        " Strategy & Cosultacy",
        " Strategy & Cosultacy",
        " Strategy & Cosultacy",
        " Strategy & Cosultacy",
        " Strategy & Cosultacy",
        " Strategy & Cosultacy",
        " Strategy & Cosultacy",
        " Strategy & Cosultacy",
        " Strategy & Cosultacy",
        " Strategy & Cosultacy",
      ],
      button: ["Customize Your Plan"],
    },
    {
      name: "Stratergy to Distribution",
      child: [
        smtick,
        smcross,
        smtick,
        smtick,
        smcross,
        smtick,
        smtick,
        smcross,
        smtick,
        smtick,
        smcross,
        smtick,
        smtick,
        smcross,
        smtick,
      ],
      button: ["$48"],
    },
    {
      name: "Production to Distribute",
      child: [
        smtick,
        smcross,
        smtick,
        smtick,
        smcross,
        smtick,
        smtick,
        smcross,
        smtick,
        smtick,
        smcross,
        smtick,
        smtick,
        smcross,
        smtick,
      ],
      button: ["$48"],
    },
    {
      name: "Production Only",
      child: [
        smtick,
        smcross,
        smtick,
        smtick,
        smcross,
        smtick,
        smtick,
        smcross,
        smtick,
        smtick,
        smcross,
        smtick,
        smtick,
        smcross,
        smtick,
      ],
      button: ["$48"],
    },
  ];
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 space-y-10">
        <div className="space-y-5">
          <h1 className="text-32">Pricing</h1>
          <div className="grid grid-cols-2 md:grid-cols-2  lg:grid-cols-4 gap-1  ">
            {heading.map((items, idx) => (
              <div className=" rounded-[40px] ">
                <div
                  className={`${
                    idx === 0 ? "bg-[#68BF33]" : "bg-[#4065E7]"
                  } rounded-t-[40px] flex justify-center`}
                >
                  <h3 className="py-4 text-white font-manrope font-medium text-xs md:text-xl lg:text-lg xl:text-[22px] ">
                    {items.name}
                  </h3>
                </div>

                <div
                  className={`${
                    idx === 0 ? "bg-[#EEFFE3]" : "bg-[#EBEFFF]"
                  } flex justify-center items-center`}
                >
                  {items.button?.map((btn, dx) => (
                    <div key={dx} className="h-16 lg:h-28 flex items-center">
                      <h1
                        className={`${
                          idx === 0
                            ? "bg-[#4065E7] rounded-[120px] text-white font-medium  text-xs md:text-22 lg:text-lg xl:text-[22px] py-2 px-4 lg:py-4 lg:px-8 xl:py-6 xl:px-11"
                            : "font-semibold bg-[#EBEFFF] text-base md:text-42 lg:text-[38px] xl:text-[42px] "
                        } text-center font-manrope `}
                      >
                        {btn}
                        <span
                          className={`${
                            idx === 0
                              ? "hidden"
                              : "font-manrope font-light text-xs md:text-base lg:text-xl "
                          }`}
                        >
                          /month
                        </span>
                      </h1>
                    </div>
                  ))}
                </div>

                <div
                  className={`${
                    idx === 0 ? "bg-[#EEFFE3]" : "bg-[#EBEFFF]"
                  }  pb-10 rounded-b-[40px]`}
                >
                  <div
                    className={`${
                      idx === 0 ? "hidden" : ""
                    } space-y-[25px] md:space-y-8 lg:space-y-[41px] `}
                  >
                    {items.child ? (
                      items.child.map((prop, id) => (
                        <div key={id} className="flex justify-center gap-10">
                          <img src={prop} className="object-contain" />
                        </div>
                      ))
                    ) : (
                      <div>Items not present</div>
                    )}
                  </div>

                  <div className={`${idx === 0 ? "" : "hidden"} space-y-5 `}>
                    {items.child ? (
                      items.child.map((prop, id) => (
                        <div key={id} className="flex justify-center">
                          <h1 className="font-manrope text-[12px] md:text-[16px] lg:text-[22px] font-light">
                            {prop}
                          </h1>
                        </div>
                      ))
                    ) : (
                      <div>Items not present</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
