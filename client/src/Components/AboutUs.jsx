import React from "react";
import { AboutSection } from "../Constants";
import { Link } from "react-router-dom";
// import Navbar from "./Navbar";

const AboutUs = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 w-full h-4/5 relative">
        <div className=" grid grid-cols-1 gap-y-10 font-sans content-between justify-items-center">
          <div className=" font-semibold text-base w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 py-1 rounded-2xl bg-[#189AB4] text-center text-white">
            {AboutSection.aboutUs}
          </div>
          <div className=" font-extrabold text-[38px] leading-none">
            {AboutSection.aboutUsHeading}
          </div>
          <div className="">{AboutSection.aboutUsDescription}</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 ">
            {AboutSection.aboutUsIconHeading.map((item) => (
              <div className=" flex items-center" key={item.id}>
                <div className=" bg-[#189AB4] h-8 w-8 rounded-full flex justify-center items-center">
                  <img src={item.icon} alt="" width="15" />
                </div>
                <p className=" ml-2 font-semibold">{item.textName}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 divide-x-[8px] divide-[#189AB4]">
            <div className="  rounded-2xl"></div>
            <div className=" px-4 text-[25px] font-medium">
              {AboutSection.aboutUsQuote}
            </div>
          </div>
          <div className=" bg-[#189AB4] w-1/2 text-center py-2 font-bold rounded-lg text-white cursor-pointer hover:bg-[#05445E] transition-all ease-in-out duration-200">
            {/* <Link to={}> */}
            {AboutSection.aboutUsBtnTxt}
            {/* </Link> */}
          </div>
        </div>
        <div className="">
          <div className="bg-[#05445E] rounded-2xl relative p-2 ">
            <div className="overflow-hidden inline-block w-full rounded-2xl">
              <img
                src={AboutSection.bgImage1}
                className="  w-full object-cover rounded-2xl bg-[#05445E] transition-all ease-in-out duration-300 hover:bg-[#E66912] md:h-[100vh] lg:h-[100vh] xl:h-[100vh] hover:scale-125 "
                alt=""
                // style={{
                //   height: "100vh",
                //   overflow: "hidden",
                //   position: "absolute",
                //   top: "50%",
                //   left: "50%",
                //   transform: "translate(-50%, 0)",
                // }}
              />
            </div>
            <img
              src={AboutSection.bgImage2}
              className=" p-2 w-3/5 object-cover rounded-2xl bg-[#05445E] transition-all ease-in-out duration-300 hover:bg-[#E66912] md:h-[30vh] lg:h-[30vh] xl:h-[30vh]  overflow-hidden absolute top-[50%] left-[50%] transform -translate-x-[90%]
              -translate-y-[50%] md:-translate-x-[90%] lg:-translate-x-[90%] xl:-translate-x-[90%] md:-translate-y-[50%] lg:-translate-y-[50%] xl:-translate-y-[50%]"
              alt=""
              // style={{
              //   height: "30vh",
              //   overflow: "hidden",
              //   position: "absolute",
              //   top: "50%",
              //   left: "50%",
              //   transform: "translate(-83%, 100%)",
              // }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
