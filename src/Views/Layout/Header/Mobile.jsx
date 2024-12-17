import React from "react";
import { Link } from "react-router";
import logo from "../../../assets/SVG/logo.svg";
import closebtn from "../../../assets/SVG/closebtn.svg";

const Mobile = ({ isOpen, toggle }) => {
  const navbar = [
    {
      path: "/about us",
      Element: "About Us",
    },
    {
      path: "/services",
      Element: "Our Services",
    },
    {
      path: "/blog",
      Element: "Blog",
    },
    {
      path: "/contact",
      Element: "Contact Us",
    },
  ];
  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 transform fixed inset-0 w-full z-50`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-4 bg-white min-h-svh flex flex-col justify-between">
        <div className="flex justify-between">
          <a href="/">
            <img src={logo} alt="" className="w-24 " />
          </a>

          <button
            onClick={toggle}
            className="size-12 rounded-lg text-black text-lg"
          >
            <img
              src={closebtn}
              alt=""
              className="bg-[#55B719] rounded-[120px] p-4"
            />
          </button>
        </div>
        <div>
          <ul className=" flex flex-col lg:flex-row items-center space-y-8 md:space-x-8 lg:space-x-12  lg:block   ">
            {navbar.map((items, idx) => (
              <Link
                to={items.path}
                key={items.Element}
                className="font-manrope font-bold text-2xl text-[#4B4B4B] text-center"
                onClick={toggle}
              >
                {items.Element}
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-center text-black text-opacity-60 font-manrope font-light text-xs md:text-base ">
            @2020 ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
