import React, { useState } from "react";
import minus from "../../assets/SVG/minus.svg";
import plus from "../../assets/SVG/plus.svg";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How quickly can I expect a task to be completed?",
      answer: "All in One Podcasting is committed to delivering a deadline.",
    },
    {
      question: "How do we keep in touch?",
      answer: "We keep in touch through regular updates and communication.",
    },
    {
      question: "How do we get started?",
      answer: "We begin by understanding your requirements and setting goals.",
    },
  ];
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-10 xl:px-14 py-7 sm:py-14 overflow-hidden">
        <div>
          <h1 className="text-32 text-[#68BF33]">FAQs</h1>
        </div>
        <div>
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="flex flex-col border-b py-2 lg:py-4 space-y-1 lg:space-y-4"
            >
              <div
                className="flex justify-between items-center cursor-pointer "
                onClick={() => toggleFAQ(index)}
              >
                <h1 className="font-manrope font-light text-base md:text-xl lg:text-[24px] text-[#4B4B4B]">
                  {faq.question}
                </h1>
                <div className="flex-shrink-0">
                  <img
                    src={openIndex === index ? minus : plus}
                    alt={openIndex === index ? "minus" : "plus"}
                    className="w-8 md:w-8 lg:w-10 h-auto " // Ensures the image scales correctly
                  />
                </div>
              </div>
              {openIndex === index && (
                <p
                  className="font-light font-manrope text-xs lg:text-[18px] text-[#55B719] "
                  data-aos="fade-right"
                >
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Faq;
