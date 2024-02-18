import React from "react";
import { OurAminitiesSection } from "../Constants";

const Aminities = () => {
  return (
    <>
      <div className=" h-screen grid grid-cols-1 content-between justify-items-center font-sans mx-20">
        <div className=" font-semibold text-base w-32 py-1 px-3 rounded-2xl bg-[#05445E] text-center text-white">
          {OurAminitiesSection.ourAminities}
        </div>
        <div className="font-extrabold text-[45px] text-[#05445E]">
          {OurAminitiesSection.ourAminitiesHeading}
        </div>
        <div className=" grid grid-cols-4 gap-x-4 gap-y-7">
          {OurAminitiesSection.ourAminitiesIconHeading.map((item) => (
            <div
              className=" grid grid-cols-1 justify-items-center bg-white hover:bg-[#05445E] hover:text-white pt-6 px-1 h-52 rounded-2xl shadow-2xl transition-all ease-in-out duration-300"
              key={item.id}
              style={{ position: "relative" }}
            >
              <div className=" bg-white h-24 w-24 rounded-full flex justify-center items-center shadow-2xl">
                <img src={item.icon} alt="" width={35} />
              </div>
              <div className=" font-bold text-2xl px-12 pb-6">
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
