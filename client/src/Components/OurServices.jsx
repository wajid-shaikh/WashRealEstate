import React from "react";
import { OurServiceSection } from "../Constants";

const OurServices = () => {
  return (
    <>
      <div className=" grid grid-cols-1 gap-y-10 content-between justify-items-center font-sans mx-5 md:mx-20 lg:mx-20 xl:mx-20">
        <div className=" font-semibold text-base w-32 py-1 px-3 rounded-2xl bg-white text-center">
          {OurServiceSection.ourService}
        </div>

        <div className="font-extrabold text-[40px] md:text-[45px] lg:text-[45px] xl:text-[45px] text-white">
          {OurServiceSection.ourServiceHeading}
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {OurServiceSection.ourServiceIconHeading.map((item) => (
            <div
              className=" grid grid-cols-1 justify-items-center bg-white pt-10 h-96 content-between rounded-t-2xl"
              key={item.id}
            >
              <div className="bg-[#189AB4] h-24 w-24 rounded-full flex justify-center items-center">
                <img src={item.icon} alt="" width={40} />
              </div>
              <div className=" font-bold text-2xl px-12">{item.textName}</div>
              <div className=" font-medium px-12">
                {item.ourServiceDescription}
              </div>
              <div className=" font-bold text-sm px-12 flex items-center ">
                <div>{item.ourServiceLinkTxt}</div>
                <div className=" pl-5">
                  <img src={item.arrowIcon} alt="" width={15} />
                </div>
              </div>
              <div className="bg-[#05445E] w-full py-1"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurServices;
