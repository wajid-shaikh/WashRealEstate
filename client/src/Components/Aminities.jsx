import React from "react";
import { OurAminitiesSection } from "../Constants";

const Aminities = () => {
  return (
    <>
      <div className=" grid grid-cols-1 gap-y-10 content-between justify-items-center font-sans mx-5 md:mx-20 lg:mx-20 xl:mx-20">
        <div className=" font-semibold text-base w-32 py-1 px-3 rounded-2xl bg-[#05445E] text-center text-white">
          {OurAminitiesSection.ourAminities}
        </div>
        <div className="font-extrabold text-[45px] text-[#05445E]">
          {OurAminitiesSection.ourAminitiesHeading}
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-4  lg:grid-cols-4 xl:grid-cols-4 gap-x-4 gap-y-7 md:gap-x-10 lg:gap-x-10 xl:gap-x-10 md:gap-y-12 lg:gap-y-12 xl:gap-y-12">
          {OurAminitiesSection.ourAminitiesIconHeading.map((item) => (
            <div
              className=" grid grid-cols-1 justify-items-center bg-white hover:bg-[#05445E] hover:text-white pt-6 px-1  rounded-2xl shadow-2xl transition-all ease-in-out duration-300 h-44 md:h-52 lg:h-52 xl:h-52  w-44 md:w-52 lg:w-52 xl:w-52"
              key={item.id}
              style={{ position: "relative" }}
            >
              <div className=" bg-white h-24 w-24 rounded-full flex justify-center items-center shadow-2xl">
                <img src={item.icon} alt="" width={35} />
              </div>
              <div className=" font-bold  px-2 md:text-2xl  lg:text-2xl xl:text-2xl pb-6">
                {item.textName}
              </div>

              <div
                className=" bg-white rounded-full h-10 w-10 flex items-center justify-center "
                style={{
                  position: "absolute",
                  bottom: "10%",
                  left: "50%",
                  transform: "translate(-50%, 100%)",
                }}
              >
                <img src={item.arrowIcon} alt="" width={15} className=" " />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Aminities;
