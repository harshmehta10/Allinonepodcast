import React, { useEffect, useState } from "react";
import logo from "../../../assets/SVG/logo.svg";
import slash from "../../../assets/SVG/slash.svg";
import buttonicon from "../../../assets/SVG/buttonicon.svg";
import { Link, useLocation } from "react-router";
import Mobile from "./Mobile";
import menu from "../../../assets/SVG/menu.svg";

const Header = () => {
  const location = useLocation(); // Get the current path
  const [menu, setMenu] = useState(false);
  const toggle = () => {
    setMenu(!menu);
  };
  const navbar = [
    {
      path: "/",
      Element: "Home",
    },
    {
      path: "/services",
      Element: "Our Services",
    },

    {
      path: "/contact",
      Element: "Contact Us",
    },
  ];
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menu]);
  return (
    <>
      <Mobile isOpen={menu} toggle={toggle} />

      <div className=" bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-10 xl:px-14 py-4 ">
          <nav className="flex items-center justify-between">
            <Link to="/">
              <img src={logo} alt="logo" className="w-24 lg:w-auto" />
            </Link>

            <ul className="flex-col lg:flex-row items-center space-x-4 md:space-x-5 lg:space-x-5 xl:space-x-12 hidden lg:block">
              {navbar.map((items, idx) => (
                <Link
                  to={items.path}
                  key={items.Element}
                  className={`font-manrope font-light text-sm md:text-lg lg:text-[22px] ${
                    location.pathname === items.path
                      ? "text-[#55B719]" // Green color for active link
                      : "text-[#4B4B4B]"
                  } hover:text-[#55B719] transition-all duration-500 relative group`}
                >
                  {items.Element}
                  <span
                    className={`${
                      location.pathname === items.path ? "w-full" : "w-0"
                    } group-hover:w-full h-0.5 transition-all duration-500 bg-[#55B719] absolute -bottom-1 left-0`}
                  ></span>
                </Link>
              ))}
            </ul>

            <div
              onClick={toggle}
              className=" lg:hidden bg-[#55B719] size-12 rounded-[120px] flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            <button className="border py-2 px-5 lg:py-3 lg:px-8 lg:text-white bg-[#55B719] rounded-full hidden lg:block ">
              <div className="lg:flex items-center gap-2 font-manrope font-normal text-xs md:text-sm lg:text-base hidden">
                <img src={buttonicon} alt="" />
                Schedule A Call
              </div>
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
