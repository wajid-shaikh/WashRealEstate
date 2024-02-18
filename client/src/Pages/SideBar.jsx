import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="fixed left-0 top-0 h-full w-1/5 bg-gray-800 text-white flex flex-col justify-start items-center py-4">
        <div className=" font-bold text-[25px]">Real Estate</div>
        <div className=" flex flex-col mt-36">
          <Link
            to={"/api/propertieslist"}
            className="py-2 px-4 hover:bg-gray-700"
          >
            Dashboard
          </Link>
          <Link
            to={"/api/propertieslist"}
            className="py-2 px-4 hover:bg-gray-700"
          >
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
