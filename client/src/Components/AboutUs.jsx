import React from "react";
import { AboutSection } from "../Constants";
import { Link } from "react-router-dom";
// import Navbar from "./Navbar";

const AboutUs = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 w-full h-4/5 relative">
        <div className=" h-screen">
          <div className="bg-[#05445E] rounded-2xl relative">
            <img
              src={AboutSection.bgImage1}
              className=" p-2 w-5/6 h-full object-cover rounded-2xl bg-[#05445E] transition-all ease-in-out duration-300 hover:bg-[#E66912] "
              alt=""
              style={{
                height: "100vh",
                overflow: "hidden",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, 0)",
              }}
            />
            <img
              src={AboutSection.bgImage2}
              className=" p-2 w-3/5 object-cover rounded-2xl bg-[#05445E] transition-all ease-in-out duration-300 hover:bg-[#E66912]"
              alt=""
              style={{
                height: "30vh",
                overflow: "hidden",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-83%, 100%)",
              }}
            />
          </div>
        </div>
        <div className=" h-screen grid grid-cols-1 font-sans mx-16 content-between">
          <div className=" font-semibold text-base w-1/4 py-1 rounded-2xl bg-[#189AB4] text-center text-white">
            {AboutSection.aboutUs}
          </div>
          <div className=" font-extrabold text-[38px] leading-none">
            {AboutSection.aboutUsHeading}
          </div>
          <div className="">{AboutSection.aboutUsDescription}</div>
          <div className="grid grid-cols-2 gap-4 justify-items-center">
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
      </div>
    </>
  );
};

export default AboutUs;
