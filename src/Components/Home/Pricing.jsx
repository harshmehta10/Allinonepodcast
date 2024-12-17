import React from "react";

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
        "✅ ",
        "✅ ",
        "✅ ",
        "✅ ",
        "✅ ",
        "✅ ",
        "✅ ",
        "✅ ",
        "✅ ",
        "✅ ",
        "❌ ",
        "✅ ",
        "✅ ",
        "✅ ",
        "✅ ",
        "✅ ",
      ],
      button: ["$48"],
    },
    {
      name: "Production to Distribute",
      child: [
        "✅ ",
        "✅ ",
        "✅ ",
        "✅ ",
        "✅ ",
        "✅ ",
        "✅ ",
        "✅ ",
        "✅ ",
        "✅ ",
        "❌ ",
        "✅ ",
        "✅ ",
        "✅ ",
        "✅ ",
        "✅ ",
      ],
      button: ["$48"],
    },
    {
      name: "Production Only",
      child: [
        "✅ ",
        "✅ ",
        "✅ ",
        "✅ ",
        "✅ ",
        "✅ ",
        "✅ ",
        "✅ ",
        "✅ ",
        "✅ ",
        "❌ ",
        "✅ ",
        "✅ ",
        "✅ ",
        "✅ ",
        "✅ ",
      ],
      button: ["$48"],
    },
  ];
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6 sm:py-12 space-y-10">
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
                  <h3 className="py-4 text-white font-manrope font-medium text-xs md:text-xl lg:text-[22px] ">
                    {items.name}
                  </h3>
                </div>

                <div
                  className={`${
                    idx === 0 ? "bg-[#EEFFE3]" : "bg-[#EBEFFF]"
                  } flex justify-center items-center pt-5`}
                >
                  {items.button?.map((btn, dx) => (
                    <div key={dx}>
                      <h1
                        className={`${
                          idx === 0
                            ? "bg-[#4065E7] rounded-[120px] text-white font-medium  text-xs md:text-22 py-4 px-11"
                            : "font-semibold bg-[#EBEFFF] text-base md:text-42"
                        } text-center font-manrope `}
                      >
                        {btn}
                        <span
                          className={`${
                            idx === 0
                              ? "hidden"
                              : "font-manrope font-light text-xs md:text-base lg:text-xl"
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
                  } space-y-5 py-10 rounded-b-[40px]`}
                >
                  {items.child ? (
                    items.child.map((prop, id) => (
                      <div key={id}>
                        <h3 className=" font-manrope text-center font-light text-xs md:text-lg lg:text-[22px]  ">
                          {prop}
                        </h3>
                      </div>
                    ))
                  ) : (
                    <div>Items not present</div>
                  )}
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
