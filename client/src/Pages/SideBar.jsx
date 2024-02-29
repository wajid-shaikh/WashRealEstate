import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        className="fixed left-0 top-0 z-50 h-10 w-10 bg-gray-800 text-white flex justify-center items-center md:hidden lg:hidden xl:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? "X" : "☰"}
      </button>
      <div
        className={`fixed left-0 top-0 w-1/2 h-full md:w-1/5 lg:w-1/5 xl:w-1/5 bg-gray-800 transition-all ease-in-out duration-300 text-white flex flex-col justify-start items-center py-4 md:translate-x-0 lg:translate-x-0 xl:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="font-bold text-[25px] mt-10">Real Estate</div>
        <div className="flex flex-col mt-36">
          <Link
            to={"/api/propertieslist"}
            className="py-2 px-4 hover:bg-gray-700"
          >
            Dashboard
          </Link>
          <Link to={"/api/createuser"} className="py-2 px-4 hover:bg-gray-700">
            Users
          </Link>
          <Link
            to={"/api/propertieslist"}
            className="py-2 px-4 hover:bg-gray-700"
          >
            Properties
          </Link>
          <Link to={"/"} className="py-2 px-4 hover:bg-gray-700">
            App
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
