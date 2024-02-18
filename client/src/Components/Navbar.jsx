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
  // Navbar background appear after scroll down Scroll Effect
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
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
      <div className=" flex justify-between mx-20 flex-grow">
        {/* Left side with an icon */}
        <div className="flex items-center space-x-2 ">
          {/* <img src="icon.png" alt="" className="h-8 w-8" /> */}
          <span className="text-white font-semibold">{NavbarSection.logo}</span>
        </div>

        {/* Center with navigation links */}
        <div className="flex items-center space-x-5 font-semibold cursor-pointer">
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            // offset={-80} // Adjust offset based on your layout
            duration={1000}
            className="text-white hover:text-[#E66912] rounded-lg px-2 transition-all ease-in-out duration-150 font-sans"
          >
            <Link to={"/"}>{NavbarSection.Navlink1}</Link>
          </ScrollLink>
          <ScrollLink
            to="aboutus"
            spy={true}
            smooth={true}
            offset={-80} // Adjust offset based on your layout
            duration={1000}
            className="text-white hover:text-[#E66912] rounded-lg px-2 transition-all ease-in-out duration-150 font-sans cursor-pointer"
          >
            <Link to={"/"}>{NavbarSection.Navlink2}</Link>
          </ScrollLink>
          <ScrollLink
            to="ourServices"
            spy={true}
            smooth={true}
            offset={-80} // Adjust offset based on your layout
            duration={1000}
            className="text-white hover:text-[#E66912] rounded-lg px-2 transition-all ease-in-out duration-150 font-sans cursor-pointer"
          >
            <Link to={"/"}>{NavbarSection.Navlink4}</Link>
          </ScrollLink>
          <ScrollLink
            to="ourAminities"
            spy={true}
            smooth={true}
            offset={-80} // Adjust offset based on your layout
            duration={1000}
            className="text-white hover:text-[#E66912] rounded-lg px-2 transition-all ease-in-out duration-150 font-sans cursor-pointer"
          >
            <Link to={"/"}>{NavbarSection.Navlink6}</Link>
          </ScrollLink>
          <Link
            to="/property"
            className="text-white hover:text-[#E66912] rounded-lg px-2 transition-all ease-in-out duration-150 font-sans cursor-pointer"
          >
            {NavbarSection.Navlink3}
          </Link>
          <Link
            to="/contactus"
            className="text-white hover:text-[#E66912] rounded-lg px-2 transition-all ease-in-out duration-150 font-sans cursor-pointer"
          >
            {NavbarSection.Navlink5}
          </Link>
        </div>

        {/* Right side with search bar and login/signup */}
        <div className="flex items-center  relative">
          <div className=" flex justify-between">
            <span className=" text-white py-1 px-2 hover:text-[#E66912] rounded-sm font-semibold mx-4 transition-all ease-in-out duration-200 font-sans cursor-pointer">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <span className=" text-white py-1 px-2 hover:text-[#E66912] rounded-sm font-semibold mx-4 transition-all ease-in-out duration-200 font-sans cursor-pointer">
              <Link to={`/api/createuser`}>
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </span>
            <span className=" text-white py-1 px-2 hover:text-[#E66912] rounded-sm font-semibold mx-4 transition-all ease-in-out duration-200 font-sans cursor-pointer">
              <FontAwesomeIcon icon={faCartShopping} />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
