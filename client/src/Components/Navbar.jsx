import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { NavbarSection } from "../Constants";

import { Link, useLocation } from "react-router-dom";

import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  // Set toggle hamburger menu for smaler devices
  const [toggle, setToggle] = useState(false);

  // Navbar background appear after scroll down Scroll Effect
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  let navProp = false;
  if (
    location.pathname === "/property" ||
    location.pathname === "/propertydetails"
  ) {
    navProp = true;
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Function to determine if the current URL is "/property"
  const isPropertyPage = () => {
    return (
      location.pathname === "/property" ||
      location.pathname === "/propertydetails"
    );
  };

  return (
    <nav
      className={` py-7 flex justify-between transition-all ease-in-out duration-150 z-[1]  fixed top-0 w-full  ${
        scrolled || isPropertyPage() ? "bg-[#05445E]" : "bg-transparent"
      }`}
    >
      <div className=" flex justify-between mx-5 md:mx-20 lg:mx-20 xl:mx-20 flex-grow">
        {/* Left side with an icon */}
        <div className="flex items-start md:items-center lg:items-center xl:items-center md:space-x-2 lg:space-x-2 xl:space-x-2">
          {/* <img src="icon.png" alt="" className="h-8 w-8" /> */}
          <span className="text-white font-semibold">{NavbarSection.logo}</span>
        </div>

        {/* Center with navigation links */}
        <div className="  items-center md:space-x-5 lg:space-x-5 xl:space-x-5 font-semibold cursor-pointer hidden md:flex lg:flex xl:flex">
          {navProp === true ? (
            <>
              <Link
                to={"/"}
                className="text-white hover:text-[#E66912] rounded-lg px-2 transition-all ease-in-out duration-150 font-sans"
              >
                {NavbarSection.visit1}
              </Link>
              <Link
                to={"/"}
                className="text-white hover:text-[#E66912] rounded-lg px-2 transition-all ease-in-out duration-150 font-sans"
              >
                {NavbarSection.visit2}
              </Link>
              <Link
                to={"/"}
                className="text-white hover:text-[#E66912] rounded-lg px-2 transition-all ease-in-out duration-150 font-sans"
              >
                {NavbarSection.visit4}
              </Link>
              <Link
                to={"/"}
                className="text-white hover:text-[#E66912] rounded-lg px-2 transition-all ease-in-out duration-150 font-sans"
              >
                {NavbarSection.visit6}
              </Link>
            </>
          ) : (
            <>
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                // offset={-80} // Adjust offset based on your layout
                duration={1000}
                className="text-white hover:text-[#E66912] rounded-lg px-2 transition-all ease-in-out duration-150 font-sans"
              >
                {NavbarSection.visit1}
              </ScrollLink>
              <ScrollLink
                to="aboutus"
                spy={true}
                smooth={true}
                offset={-80} // Adjust offset based on your layout
                duration={1000}
                className="text-white hover:text-[#E66912] rounded-lg px-2 transition-all ease-in-out duration-150 font-sans cursor-pointer"
              >
                {NavbarSection.visit2}
              </ScrollLink>
              <ScrollLink
                to="ourServices"
                spy={true}
                smooth={true}
                offset={-80} // Adjust offset based on your layout
                duration={1000}
                className="text-white hover:text-[#E66912] rounded-lg px-2 transition-all ease-in-out duration-150 font-sans cursor-pointer"
              >
                {NavbarSection.visit4}
              </ScrollLink>
              <ScrollLink
                to="ourAminities"
                spy={true}
                smooth={true}
                offset={-80} // Adjust offset based on your layout
                duration={1000}
                className="text-white hover:text-[#E66912] rounded-lg px-2 transition-all ease-in-out duration-150 font-sans cursor-pointer"
              >
                {NavbarSection.visit6}
              </ScrollLink>
            </>
          )}
          <Link
            to="/property"
            className="text-white hover:text-[#E66912] rounded-lg px-2 transition-all ease-in-out duration-150 font-sans cursor-pointer"
          >
            {NavbarSection.visit3}
          </Link>
          <Link
            to="/contactus"
            className="text-white hover:text-[#E66912] rounded-lg px-2 transition-all ease-in-out duration-150 font-sans cursor-pointer"
          >
            {NavbarSection.visit5}
          </Link>
        </div>

        {/* Right side with search bar and login/signup */}
        <div className="items-center relative hidden md:flex lg:flex xl:flex">
          <div className=" flex justify-between">
            <span className=" text-white py-1 px-2 hover:text-[#E66912] rounded-sm font-semibold mx-4 transition-all ease-in-out duration-200 font-sans cursor-pointer">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <span className=" text-white py-1 px-2 hover:text-[#E66912] rounded-sm font-semibold mx-4 transition-all ease-in-out duration-200 font-sans cursor-pointer">
              <Link to={`/api/createproperties`}>
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </span>
            <span className=" text-white py-1 px-2 hover:text-[#E66912] rounded-sm font-semibold mx-4 transition-all ease-in-out duration-200 font-sans cursor-pointer">
              <FontAwesomeIcon icon={faCartShopping} />
            </span>
          </div>
        </div>

        {/* All below Code is for Smaller devices */}
        <div className="md:hidden lg:hidden grid grid-cols-1  ">
          {!toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              onClick={() => setToggle(true)}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              onClick={() => setToggle(false)}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer float-right"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
          {toggle && (
            <div
              className={`md:hidden lg:hidden xl:hidden absolute top-20 right-10 bg-[#05445E]  rounded-br-3xl px-10 pt-10 pb-2 transition-all ease-in-out duration-300 ${
                scrolled || isPropertyPage()
                  ? " rounded-bl-3xl"
                  : "rounded-tl-3xl"
              }`}
            >
              <div className="">
                <div className="grid grid-cols-1 gap-y-3 justify-items-center text-white mb-4">
                  <ScrollLink
                    to="home"
                    spy={true}
                    smooth={true}
                    // offset={-80} // Adjust offset based on your layout
                    duration={1000}
                    className="text-white hover:text-[#E66912] rounded-lg px-2 transition-all ease-in-out duration-150 font-sans"
                  >
                    <Link to={"/"}>{NavbarSection.visit1}</Link>
                  </ScrollLink>
                  <ScrollLink
                    to="aboutus"
                    spy={true}
                    smooth={true}
                    offset={-80} // Adjust offset based on your layout
                    duration={1000}
                    className="text-white hover:text-[#E66912] rounded-lg px-2 transition-all ease-in-out duration-150 font-sans cursor-pointer"
                  >
                    <Link to={"/"}>{NavbarSection.visit2}</Link>
                  </ScrollLink>
                  <ScrollLink
                    to="ourServices"
                    spy={true}
                    smooth={true}
                    offset={-80} // Adjust offset based on your layout
                    duration={1000}
                    className="text-white hover:text-[#E66912] rounded-lg px-2 transition-all ease-in-out duration-150 font-sans cursor-pointer"
                  >
                    <Link to={"/"}>{NavbarSection.visit4}</Link>
                  </ScrollLink>
                  <ScrollLink
                    to="ourAminities"
                    spy={true}
                    smooth={true}
                    offset={-80} // Adjust offset based on your layout
                    duration={1000}
                    className="text-white hover:text-[#E66912] rounded-lg px-2 transition-all ease-in-out duration-150 font-sans cursor-pointer"
                  >
                    <Link to={"/"}>{NavbarSection.visit6}</Link>
                  </ScrollLink>
                  <Link
                    to="/property"
                    className="text-white hover:text-[#E66912] rounded-lg px-2 transition-all ease-in-out duration-150 font-sans cursor-pointer"
                  >
                    {NavbarSection.visit3}
                  </Link>
                  <Link
                    to="/contactus"
                    className="text-white hover:text-[#E66912] rounded-lg px-2 transition-all ease-in-out duration-150 font-sans cursor-pointer"
                  >
                    {NavbarSection.visit5}
                  </Link>
                </div>
                <hr />
                <div className=" mt-4">
                  <div className=" flex justify-between">
                    <span className=" text-white py-1 px-2 hover:text-[#E66912] rounded-sm font-semibold mx-4 transition-all ease-in-out duration-200 font-sans cursor-pointer">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                    <span className=" text-white py-1 px-2 hover:text-[#E66912] rounded-sm font-semibold mx-4 transition-all ease-in-out duration-200 font-sans cursor-pointer">
                      <Link to={`/api/createproperties`}>
                        <FontAwesomeIcon icon={faUser} />
                      </Link>
                    </span>
                    <span className=" text-white py-1 px-2 hover:text-[#E66912] rounded-sm font-semibold mx-4 transition-all ease-in-out duration-200 font-sans cursor-pointer">
                      <FontAwesomeIcon icon={faCartShopping} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
